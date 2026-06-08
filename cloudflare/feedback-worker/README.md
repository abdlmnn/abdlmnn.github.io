# ABDLMNN Feedback Worker

Small Cloudflare Worker API for the contact form and public feedback notes.

## Routes

- `POST /contact` legacy route that forwards to Formspree and saves public feedback when `allow_public` is enabled.
- `POST /feedback-submission` saves a pending public feedback note after the browser submits directly to Formspree.
- `GET /feedback` returns the newest 5 public feedback notes.

## Setup

1. Install dependencies:

```bash
npm install
```

2. Login to Cloudflare:

```bash
npx wrangler login
```

3. Create the D1 database:

```bash
npx wrangler d1 create abdlmnn_feedback
```

4. Copy the generated `database_id` into `wrangler.jsonc`.

5. Apply the database migration:

```bash
npm run db:migrate
```

6. Deploy:

```bash
npm run deploy
```

After deployment, use the Worker URL in the website contact form and home feedback loader.

## Approving Feedback

Messages submitted with public permission are saved as pending first.

List pending feedback:

```bash
npm exec wrangler -- d1 execute abdlmnn_feedback --remote --command "SELECT id, name, message, created_at FROM public_feedback WHERE is_public = 0 ORDER BY datetime(created_at) DESC"
```

Approve one feedback note:

```bash
npm exec wrangler -- d1 execute abdlmnn_feedback --remote --command "UPDATE public_feedback SET is_public = 1 WHERE id = FEEDBACK_ID"
```

Replace `FEEDBACK_ID` with the `id` from the pending list.

Hide an approved feedback note:

```bash
npm exec wrangler -- d1 execute abdlmnn_feedback --remote --command "UPDATE public_feedback SET is_public = 0 WHERE id = FEEDBACK_ID"
```
