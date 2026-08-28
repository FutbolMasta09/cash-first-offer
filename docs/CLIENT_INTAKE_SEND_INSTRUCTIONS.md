# Sending a clickable client intake

These forms are static files: they save draft answers only in the client's browser and send nothing to this repository. They have no password fields, analytics, or form database.

## Before sending

1. Wait for cleared payment: $497 for Package A or the $600 deposit for Package B.
2. In the matching working file's `TOPIC` object, replace `REPLACE_WITH_RYAN_EMAIL@example.com` with the public-facing intake email Ryan wants clients to use. This placeholder is intentionally committed because no real contact address was supplied for this session.
3. Open the changed file locally and submit a test answer. Confirm the email button addresses Ryan and the summary contains the answer. Clear test answers before sharing.

Do not edit `tools/CLIENT_INTAKE_FORM_TEMPLATE.html` for a live job. Keep it generic; duplicate it for future intake rounds.

## Send a link (recommended)

Host only the matching unfilled working HTML file on a static host Ryan controls. GitHub Pages is the simplest option if the repository is made public or Ryan uses a private Pages-capable plan:

1. Commit only the blank form, then enable GitHub Pages from the desired branch and folder in the repository settings.
2. Copy the published URL for `tools/Package_A_Intake_Questions.html` or `tools/Package_B_Intake_Questions.html`.
3. Test the live URL in a private/incognito browser window before sending it.
4. Send the client the link with: “Please complete every field, then use **Send by email** or **Copy summary** and reply in one message. Do not send passwords, API keys, bank information, or account login details.”

If GitHub Pages is not appropriate, send the blank `.html` file as an attachment and tell the client to download it, open it in Chrome, Edge, or Safari, then email/copy the generated summary. A temporary static host is also acceptable only if it does not collect or retain form submissions; this form already uses the client’s email app instead of a server-side endpoint.

## When answers arrive

- Confirm all fields are complete before starting work. Send the one permitted chase reminder from `docs/CLIENT_INTAKE_TEMPLATE.md` if anything is blank.
- Package A: move the reply and any samples into Ryan’s private client storage outside this repository.
- Package B: create/open the separate client repository only after the intake and one-page brief approval gates are met; store client brief/content there, not here.
- Never commit client answers, exports, contact details, voice samples, passwords, API keys, or access tokens to this repository.

## Local testing

Double-click the matching `.html` file, or run `python -m http.server` from the repository root and browse to its `/tools/...html` path. Answer a radio, checkbox, and text field; refresh to confirm the answers return; confirm progress changes; then use **Clear all** to remove the test data.
