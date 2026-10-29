# H2D.dev portfolio

A small, dependency-free portfolio for Habib Titraoui, independent software engineer. Built with plain HTML, CSS and JavaScript so the page is easy to understand, fast to load, and simple to edit.

## Run locally

Open `index.html` directly, or serve the folder over HTTP:

```sh
python3 -m http.server 8000
```

## Build and deploy

```sh
npm run build
```

The dependency-free build writes the site to `dist/`. On Vercel, use `npm run build` as the build command and `dist` as the output directory. The project is also compatible with GitHub Pages or any static host. `h2d.dev` can be attached after the deployment is live and DNS is configured.

## Keeping the portfolio honest

- Project descriptions are written by hand from available project materials and distinguish shipped work from concept work.
- Formation Agency / EduFormation uses three genuine app screenshots supplied by Habib (home, learner progress, and live events). Browser chrome and unrelated desktop notifications were cropped out; the separate admin capture with an exposed learner email was not used. Other custom UI previews are hand-coded illustrations and are labeled as such.
- For other projects, replace the illustrations with genuine, permission-safe screenshots when available.
- The Outreach Dashboard source link is deliberately omitted until its public repository has been reviewed and its sample lead data removed or anonymized. Formation Agency’s live app link requires sign-in; its source repository is private.
- No client metrics, testimonials, or outcomes are claimed here.

## Before sharing publicly

Check that the email address in `index.html` is the right business contact, confirm the live project links, and review the Outreach Dashboard repository for any sensitive or personal data before linking it. The portfolio intentionally avoids a general GitHub profile link until that review is complete.
