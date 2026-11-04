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
2. Privacy and Terms text (from the old site) is in `content/privacy.ts` and `content/terms.ts`.
3. `npm install`, `npm run build`, commit and push. Vercel redeploys automatically.

## Where things live

- All copy: `app/page.tsx`
- Colours and fonts: `app/globals.css`, `app/layout.tsx`
- Wordmark: `components/logo.tsx` (inlined from `public/olyndra-logo.svg`)
- Both forms (Web3Forms, same key as before): `components/forms.tsx`

## Where form submissions go

Both forms post to Web3Forms, which emails each submission to the address its access key
was created for. To send them to sales@olyndra.ai:

1. Go to https://web3forms.com, enter `sales@olyndra.ai`, click **Create Access Key**, and
   confirm the email that arrives in that inbox.
2. In Vercel: **Project → Settings → Environment Variables**, add
   `NEXT_PUBLIC_WEB3FORMS_KEY` = the new key (all environments).
3. Redeploy (Deployments → ⋯ → Redeploy). Until then the original olyndra.ai key is used.
