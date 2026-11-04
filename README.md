# olyndra.ai — minisite (Justin's palette and type, simple layout)

Next.js 15 (App Router, Turbopack), React 19, Tailwind CSS v4, Google Fonts via next/font
(Figtree for headings, Work Sans for body), lucide-react icons, Vercel Analytics.

## Run locally

```bash
npm install
npm run dev
```

## Replacing the current repo

1. In the existing olyndra.ai repo, delete `app/`, `components/`, `public/` and copy these in
   (keep `.git/` and any Vercel config). Overwrite `package.json`, `tsconfig.json`,
   `next.config.ts`, `postcss.config.mjs`.
2. **Privacy and Terms**: `app/privacy/page.tsx` and `app/terms/page.tsx` are placeholders —
   paste the text from the old repo's versions into them.
3. `npm install`, `npm run build`, commit and push. Vercel redeploys automatically.

## Where things live

- All copy: `app/page.tsx`
- Colours and fonts: `app/globals.css`, `app/layout.tsx`
- Wordmark: `components/logo.tsx` (inlined from `public/olyndra-logo.svg`)
- Both forms (Web3Forms, same key as before): `components/forms.tsx`
