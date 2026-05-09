# Guidora

Professional ecommerce base for **Guidora**, a premium digital-first store prepared for future digital resources. The GitHub repository name is intended to be `guidevault`.

No real products, fake products, prices, product cards, reviews, cart logic, or checkout logic are included.

## Project Overview

Guidora is built as a launch-ready store foundation with a premium dark visual system, animated hero, empty shop state, waitlist section, contact form, legal pages, and a placeholder Shopify integration file.

## Tech Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React icons

## How To Install

```bash
npm install
```

## How To Run Locally

```bash
npm run dev
```

Open `http://localhost:3000`.

## How To Push To GitHub

Create the repository on GitHub as `guidevault`, then run:

```bash
git remote add origin https://github.com/YOUR_USERNAME/guidevault.git
git add .
git commit -m "Initial Guidora ecommerce base"
git branch -M main
git push -u origin main
```

## How To Deploy

Deploy with Vercel or another Next.js-compatible host:

1. Import the `guidevault` repository.
2. Use the default Next.js build settings.
3. Add environment variables from `.env.example` when needed.
4. Deploy the production branch.

## How To Connect The Waitlist Later

The waitlist form is frontend-only in `components/WaitlistForm.tsx`. Connect it later by submitting the email to:

- Klaviyo
- Mailchimp
- ConvertKit
- Shopify Email
- A secure Next.js API route
- A backend service or database

## How To Connect Shopify Later

Shopify is prepared but inactive in `lib/shopify.ts`.

Add these values to your deployment environment when ready:

```bash
NEXT_PUBLIC_SITE_URL=
SHOPIFY_STORE_DOMAIN=
SHOPIFY_STOREFRONT_ACCESS_TOKEN=
SHOPIFY_API_VERSION=
```

Then add Storefront API queries in `lib/shopify.ts` and render catalog data only after real products are ready.

## How To Add Products Later

When Guidora is ready to launch products:

1. Create real products in Shopify.
2. Add typed product fetchers in `lib/shopify.ts`.
3. Build product listing and product detail components.
4. Add cart and checkout logic only after the catalog and policies are final.
5. Replace the shop empty state with real Shopify-powered pages.

## How To Customize Branding

Update colors and global styling in `styles/globals.css`. Update layout, navigation, and footer branding in:

- `components/Navbar.tsx`
- `components/Footer.tsx`
- `app/layout.tsx`

## How To Replace Placeholder Email

The current support email placeholder is `support@guidora.com`. Replace it in `app/contact/page.tsx` and any future policy text before launch.
