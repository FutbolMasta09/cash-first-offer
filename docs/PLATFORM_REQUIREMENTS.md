# Platform Requirements — [PROJECT NAME]

Fill at project setup. Determines what accounts, assets, and compliance work must be done before launch.

---

## Target Platform(s)

- [ ] Google Play (Android)
- [ ] Apple App Store (iOS)
- [ ] Steam (PC/Mac)
- [ ] Web / PWA
- [ ] itch.io
- [ ] Other: ___

---

## Developer Account Status

| Platform | Account exists? | Cost | Status | Notes |
|---|---|---|---|---|
| Google Play | Y / N | $25 one-time | Active / Needed | |
| Apple App Store | Y / N | $99/yr | Active / Needed | |
| Steam (Steamworks) | Y / N | $100/title | Active / Needed | |
| itch.io | Y / N | Free | Active / Needed | |

**Rule:** If account is needed, start it in Phase 0 — Apple and Steam can take days to approve.

---

## Per-Platform Requirements Checklist

### Google Play
- [ ] Privacy policy URL (required for all apps)
- [ ] Data safety form completed
- [ ] Content rating questionnaire submitted
- [ ] Target API level meets current requirement
- [ ] App signed with upload key
- [ ] Screenshots: phone (min 2), tablet (recommended)
- [ ] Store listing: title, short description, full description, category

### Apple App Store
- [ ] Privacy nutrition labels filled
- [ ] App Review Guidelines compliance confirmed
- [ ] IDFA (tracking) declaration if applicable
- [ ] Screenshots: per required device sizes
- [ ] TestFlight set up for beta
- [ ] Store listing: name, subtitle, description, keywords

### Steam
- [ ] Steamworks SDK integrated
- [ ] Store page review submitted (allow 2–5 days)
- [ ] Build depot uploaded + reviewed (allow 2–5 days)
- [ ] Achievements defined (optional but recommended)
- [ ] Community Hub configured
- [ ] Trading cards (optional — requires extra time)
- [ ] Capsule art: main capsule, small capsule, header image

### Web / PWA
- [ ] Hosting configured (Vercel / Netlify / other)
- [ ] Domain purchased and pointed
- [ ] SSL active
- [ ] `manifest.json` complete
- [ ] Service worker implemented
- [ ] OG meta tags for social sharing
- [ ] Favicon set (all sizes)

### itch.io
- [ ] Page created
- [ ] Description + screenshots
- [ ] Price set
- [ ] Download / embed configured
- [ ] Tags set

---

## Build Pipeline

| Step | Command / Tool | Notes |
|---|---|---|
| Dev build | | |
| Release build | | |
| Sign / package | | |
| Upload to platform | | |
| Submit for review | | |
