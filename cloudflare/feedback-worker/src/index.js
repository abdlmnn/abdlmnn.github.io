const MAX_FEEDBACK = 5;
const MAX_MESSAGE_LENGTH = 1200;
const SUBMIT_COOLDOWN_MS = 5 * 60 * 1000;

const json = (data, status = 200, headers = {}) =>
  new Response(JSON.stringify(data), {
    status,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      ...headers,
    },
  });

const corsHeaders = (request, env) => {
  const origin = request.headers.get("Origin");
  const productionOrigin = env.ALLOWED_ORIGIN || "https://abdlmnn.github.io";
  const allowedOrigins = new Set([
    productionOrigin,
    "http://localhost:3000",
    "http://localhost:5500",
    "http://127.0.0.1:5500",
    "null",
  ]);
  const allowOrigin = origin && allowedOrigins.has(origin)
    ? origin
    : productionOrigin;

  return {
    "Access-Control-Allow-Origin": allowOrigin,
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Accept",
    "Access-Control-Max-Age": "86400",
    Vary: "Origin",
  };
};

const cleanText = (value, maxLength = 240) =>
  String(value || "")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, maxLength);

const cleanMessage = (value, maxLength = MAX_MESSAGE_LENGTH) =>
  String(value || "")
    .replace(/\r\n/g, "\n")
    .replace(/[ \t]+\n/g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim()
    .slice(0, maxLength);

const getPayload = async (request) => {
  const contentType = request.headers.get("Content-Type") || "";

  if (contentType.includes("application/json")) {
    return request.json();
  }

  const formData = await request.formData();
  return Object.fromEntries(formData.entries());
};

const hashRateKey = async (request, email) => {
  const ip = request.headers.get("CF-Connecting-IP") || "unknown";
  const source = `${String(email || "").toLowerCase()}|${ip}`;
  const encoded = new TextEncoder().encode(source);
  const digest = await crypto.subtle.digest("SHA-256", encoded);

  return Array.from(new Uint8Array(digest))
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
};

const enforceCooldown = async (request, env, email) => {
  const rateKey = await hashRateKey(request, email);
  const existing = await env.DB.prepare(
    "SELECT last_submitted_at FROM submission_limits WHERE rate_key = ?"
  )
    .bind(rateKey)
    .first();

  const now = new Date();
  if (existing?.last_submitted_at) {
    const lastSubmit = new Date(existing.last_submitted_at);
    if (now.getTime() - lastSubmit.getTime() < SUBMIT_COOLDOWN_MS) {
      return false;
    }
  }

  await env.DB.prepare(
    "INSERT OR REPLACE INTO submission_limits (rate_key, last_submitted_at) VALUES (?, ?)"
  )
    .bind(rateKey, now.toISOString())
    .run();

  return true;
};

const forwardToFormspree = async (env, payload) => {
  if (!env.FORMSPREE_ENDPOINT) return;

  const formData = new FormData();
  formData.set("_subject", "New contact inquiry from abdlmnn.github.io");
  formData.set("_replyto", payload.email);
  formData.set("source", "Contact page");
  formData.set("name", payload.name);
  formData.set("email", payload.email);
  formData.set("message", payload.message);
  formData.set("saved_for_review", "yes");

  const response = await fetch(env.FORMSPREE_ENDPOINT, {
    method: "POST",
    body: formData,
    headers: {
      Accept: "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Formspree forwarding failed");
  }
};

const handleGetFeedback = async (request, env) => {
  const { results } = await env.DB.prepare(
    `SELECT name, message, created_at
     FROM public_feedback
     WHERE is_public = 1
     ORDER BY datetime(created_at) DESC
     LIMIT ?`
  )
    .bind(MAX_FEEDBACK)
    .all();

  return json(
    {
      notes: results.map((note) => ({
        name: note.name,
        message: note.message,
        date: note.created_at,
      })),
    },
    200,
    corsHeaders(request, env)
  );
};

const handleContact = async (request, env) => {
  const headers = corsHeaders(request, env);
  const data = await getPayload(request);

  if (cleanText(data._gotcha, 20)) {
    return json({ error: "Message not sent." }, 400, headers);
  }

  const name = cleanText(data.name, 80);
  const email = cleanText(data.email, 160);
  const message = cleanMessage(data.message);
  if (!name || !email || !message) {
    return json({ error: "Please complete all required fields." }, 400, headers);
  }

  const canSubmit = await enforceCooldown(request, env, email);
  if (!canSubmit) {
    return json(
      { error: "Please wait a few minutes before sending another message." },
      429,
      headers
    );
  }

  await forwardToFormspree(env, {
    name,
    email,
    message,
  });

  await env.DB.prepare(
    `INSERT INTO public_feedback (name, message, created_at, is_public)
     VALUES (?, ?, ?, 0)`
  )
    .bind(name, message, new Date().toISOString())
    .run();

  return json({ ok: true }, 200, headers);
};

const handleFeedbackSubmission = async (request, env) => {
  const headers = corsHeaders(request, env);
  const data = await getPayload(request);

  if (cleanText(data._gotcha, 20)) {
    return json({ error: "Feedback not saved." }, 400, headers);
  }

  const name = cleanText(data.name, 80);
  const email = cleanText(data.email, 160);
  const message = cleanMessage(data.message);
  if (!name || !email || !message) {
    return json({ error: "Please complete all required fields." }, 400, headers);
  }

  const canSubmit = await enforceCooldown(request, env, email);
  if (!canSubmit) {
    return json(
      { error: "Please wait a few minutes before sending another message." },
      429,
      headers
    );
  }

  await env.DB.prepare(
    `INSERT INTO public_feedback (name, message, created_at, is_public)
     VALUES (?, ?, ?, 0)`
  )
    .bind(name, message, new Date().toISOString())
    .run();

  return json({ ok: true, saved: true }, 200, headers);
};

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const headers = corsHeaders(request, env);

    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers });
    }

    try {
      if (request.method === "GET" && url.pathname === "/feedback") {
        return handleGetFeedback(request, env);
      }

      if (request.method === "POST" && url.pathname === "/contact") {
        return handleContact(request, env);
      }

      if (request.method === "POST" && url.pathname === "/feedback-submission") {
        return handleFeedbackSubmission(request, env);
      }

      return json({ error: "Not found." }, 404, headers);
    } catch (error) {
      return json(
        {
          error: "Something went wrong. Please try again.",
        },
        500,
        headers
      );
    }
  },
};
