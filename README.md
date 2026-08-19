# Irita Mishra — academic personal website

A clean, static site (plain HTML/CSS/JS, no build step) populated with
content from Irita Mishra's CV (`Curriculum Vitae4 - Irita Mishra.txt`):
Home, Research, Publications, Teaching, CV, Contact.

This is a personalized copy of the original placeholder site at
`../website`. That folder is untouched — revert to it any time by using it
instead of this one, or by copying it back over this folder.

## Still needs your input

A few things weren't in the CV text and are still placeholders/generic
links — search for `[` or check these specifically:

- **`index.html` / `contact.html`** — the Google Scholar and LinkedIn URLs
  are generic (`scholar.google.com`, `linkedin.com`) — replace with your
  actual profile URLs.
- **Headshot**: add `images/portrait.jpg`.
- **CV PDF**: add `files/cv.pdf` (for the "Download Full CV" button on the
  CV page — you can export your CV doc/txt to PDF).
- **News section** (`index.html`): update periodically as things happen.
- **Research page intro blurbs**: I synthesized these from your working
  paper titles/statuses — read them over and adjust tone/emphasis to your
  preference.

## Preview locally

Open `index.html` directly in a browser, or run a tiny local server:

```bash
python3 -m http.server 8000
```

then visit `http://localhost:8000`.

## Deploy on GitHub Pages

1. Create a new GitHub repo, e.g. `yourusername.github.io` (use exactly that
   name if you want it at the root domain, or any name if you're fine with
   `yourusername.github.io/reponame`).
2. From this folder:

   ```bash
   git init
   git add .
   git commit -m "Initial site"
   git branch -M main
   git remote add origin https://github.com/yourusername/yourusername.github.io.git
   git push -u origin main
   ```

3. In the repo on GitHub: **Settings → Pages → Source → Deploy from branch
   → main / (root)**. Save.
4. Your site will be live at `https://yourusername.github.io` (or
   `https://yourusername.github.io/reponame`) within a minute or two.
5. (Optional) Add a custom domain under **Settings → Pages → Custom domain**
   if you buy one later.

## Notes on content, since you asked for placeholders

- Keep bios and blurbs to 2–4 sentences; hiring committees skim.
- List publications newest-first; use consistent citation formatting.
- Link a PDF or DOI for every publication where possible — reviewers click.
- Keep the CV page as a clean summary and always also offer a PDF download,
  since that's what gets forwarded to committees.
- Update the "News" section every time something happens (paper accepted,
  talk given, award) — it signals an active, maintained profile.
