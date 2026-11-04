# ASTROMAZ Website

Standalone Next.js App Router website for ASTROMAZ / Astromaz Investments.

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Production build

```bash
npm run build
npm start
```

## Enquiry form behaviour

The enquiry form validates required fields in the browser and prepares a pre-addressed `mailto:` message. The visitor must review and send the message using their own email application. No backend, database or form storage is configured in this release.

## Photography and logo

The current photography is illustrative stock imagery loaded from Unsplash image URLs. It is explicitly labelled as illustrative in the capabilities showcase and service imagery. Replace the central mappings in `src/lib/images.ts` with approved Astromaz photographs when available.

The original logo image was not available in the project workspace. The site therefore uses a simple typographic ASTROMAZ wordmark and an original geometric favicon in the confirmed brand palette. Replace `src/components/brand.tsx` and `public/favicon.svg` with the approved logo asset when supplied.

## Contact configuration

Business name, contact details, address and WhatsApp number are centralised in `src/lib/site.ts`.

## GitHub and Vercel deployment

1. Create a new empty GitHub repository named `astromaz-website`.
2. From this directory, run `git init -b main`, `git add .`, `git commit -m "Build ASTROMAZ company website"`, then `git remote add origin <new-repository-url>` and `git push -u origin main`.
3. In Vercel, import that new GitHub repository, keep the project root at `/`, select Next.js, and deploy. No environment variables are required.
4. Add the final production domain in Vercel after confirming the intended domain name and DNS access.

The metadata currently uses `https://astromaz-website.vercel.app` as its canonical base placeholder. Update `metadataBase`, sitemap and robots URLs to the final production domain before launch if it differs.

## Build verification note

The source tree and route/configuration files are in place. Dependency installation and a Next.js production build must be run in an environment with access to the npm registry; the current build environment could not resolve `registry.npmjs.org`, so dependencies could not be downloaded here.
