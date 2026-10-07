# IEEE ALU Student Branch

Next.js App Router + React + Tailwind CSS 4. The site preserves its Avenir font stack, IEEE branch identity, and credited IEEE Rwanda photographs.

## Development

Use Node.js 22 or newer:

```sh
npm ci
npm run dev
```

## Production and static hosting

```sh
npm run build
npm run preview
```

The build exports the complete site to `out/`. Preview serves that folder at http://127.0.0.1:4173. Upload the contents of `out/` to the hosting directory for `alu.ieeerwanda.org`. No Node.js server is needed in production. DNS and hosting still need to be configured; this repository does not deploy them automatically.

## Editing

- `app/page.jsx`: compact homepage entry point.
- `app/site-page.jsx`: shared navigation, page content, and interest dialog.
- `app/events/`, `app/people/`, `app/chapters/`, `app/membership/`: dedicated content pages.
- `app/branch-community.jsx`: leader/faculty tabs and planned chapters.
- `app/globals.css`: shared typography and bespoke responsive styles, alongside Tailwind utilities in the components.
- `app/layout.jsx`: metadata, canonical URL, and document layout.
- `app/brand/page.jsx`: branch logo presentation at `/brand/`.
- `public/assets/`: official IEEE artwork, branch logo variants, and credited ALU photos.
- `public/`: domain file, robots.txt, and sitemap.xml.

Branch signup and contact details remain forthcoming. The interest dialog is informational and does not collect or submit personal data. Event listings are sourced community events and should be reviewed as dates pass. Photography sources and identity research are documented in `DESIGN-NOTES.md`.
