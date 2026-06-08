CREATE TABLE IF NOT EXISTS public_feedback (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TEXT NOT NULL,
  is_public INTEGER NOT NULL DEFAULT 1
);

CREATE INDEX IF NOT EXISTS idx_public_feedback_created_at
ON public_feedback (is_public, created_at DESC);

CREATE TABLE IF NOT EXISTS submission_limits (
  rate_key TEXT PRIMARY KEY,
  last_submitted_at TEXT NOT NULL
);
