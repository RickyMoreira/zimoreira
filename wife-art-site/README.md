# Painting portfolio site — Next.js + Vercel

Simple portfolio site (gallery + about + contact), ready to publish on
Vercel, built to replace the current Wix site.

## Structure

- `lib/artworks.ts` — **the only file you need to edit** to change the
  artist's name, bio, email, Instagram, and the list of paintings (title,
  year, medium, dimensions, availability).
- `public/artworks/` — put the painting photos here (same filename
  referenced in `lib/artworks.ts`, e.g. `bare-layers.jpg`).
- `app/` — the site's pages (gallery, about, contact). You normally won't
  need to touch this.

The 37 paintings from the current gallery folder are already listed in
`lib/artworks.ts` with their titles and dimensions (all set to "Acrylic on
canvas"). What's still missing for each one:
- The actual photo file in `public/artworks/` — filenames are already
  matched to each painting (see the `image` field in `lib/artworks.ts`).
- `year` is left blank ("") — fill it in per painting if you have it.

## 1. Run locally (optional, to check before publishing)

Requires [Node.js](https://nodejs.org).

```bash
npm install
npm run dev
```

Open http://localhost:3000

## 2. Publish to GitHub

1. Create a new repository (can be private) on GitHub.
2. Inside this folder:

```bash
git init
git add .
git commit -m "initial site"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
git push -u origin main
```

## 3. Deploy on Vercel

1. Create an account at https://vercel.com (you can sign in with GitHub).
2. Click **Add New → Project**.
3. Select the repository you just created.
4. Vercel detects Next.js automatically — no config changes needed. Click
   **Deploy**.
5. In a few minutes the site will be live at something like
   `your-project.vercel.app`.

## 4. Move the domain from Wix to Vercel

If you already have your own domain (e.g. `artistname.com`) pointed at
Wix, the site can move without buying the domain again:

1. In the Vercel dashboard, open the project → **Settings → Domains** →
   add `artistname.com` (and/or `www.artistname.com`).
2. Vercel will show DNS records to set up (usually an `A` record pointing
   to `76.76.21.21` and/or a `CNAME` for `www` pointing to
   `cname.vercel-dns.com`).
3. Wherever the domain was purchased (this could be inside Wix itself, or
   somewhere else like GoDaddy — check in Wix under **Settings →
   Domains** to see who the "registrar" is):
   - If the domain was bought **through Wix**: in Wix, go to Domains →
     select the domain → **Advanced DNS settings** and add the records
     Vercel asked for (no need to move the domain out of Wix, just point
     the DNS).
   - If the domain was bought **elsewhere**: log into that registrar's
     dashboard and add the same records there.
4. Wait for DNS to propagate (a few minutes up to ~24h). Vercel issues
   HTTPS automatically once the DNS is correct.
5. Only cancel the paid Wix plan (if any) after confirming the new site
   works on the domain.

## 5. Update photos and text after publishing

Any time you edit `lib/artworks.ts` or add photos to `public/artworks/`,
just run:

```bash
git add .
git commit -m "update artworks"
git push
```

Vercel deploys the new version automatically in about a minute.
