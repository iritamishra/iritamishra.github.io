# Irita Mishra: academic personal website

A clean, static site (plain HTML/CSS/JS, no build step) populated with
content from Irita Mishra's CV: Home, Research (including publications and
presentations), Teaching, CV, Contact.

## Still needs your input

- **`index.html` / `contact.html`**: the Google Scholar and LinkedIn URLs
  are generic (`scholar.google.com`, `linkedin.com`), replace with your
  actual profile URLs.
- **CV PDF**: add `files/cv.pdf` (for the "Download Full CV" button on the
  CV page, export your CV doc to PDF).
- **News section** (`index.html`): update periodically as things happen.
- **Abstracts**: each publication/working paper/presentation on the
  Research page has a clickable "Abstract" dropdown with a brief
  description. Replace these with your real abstracts as they're ready.

## Preview locally

Open `index.html` directly in a browser, or run a tiny local server:

```bash
python3 -m http.server 8000
```

then visit `http://localhost:8000`.

## Deploying changes

This folder is a git clone of `iritamishra/iritamishra.github.io` on
GitHub, connected and pushed directly to `main`. After editing:

```bash
git add .
git commit -m "describe your change"
git push
```

The live site updates within a minute or two of pushing.

## Notes on content

- Keep bios and blurbs to 2 to 4 sentences; hiring committees skim.
- List publications newest first; use consistent citation formatting.
- Link a PDF or DOI for every publication where possible, reviewers click.
- Keep the CV page as a clean summary and also offer a PDF download,
  since that's what gets forwarded to committees.
- Update the "News" section every time something happens (paper accepted,
  talk given, award); it signals an active, maintained profile.
