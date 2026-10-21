# Budget Aluminium website

The website for **Budget Aluminium and Allied World Ltd.** — patio covers, sunrooms, railings,
SleekFence aluminium fences, gates, decks and renovations from Richmond to Chilliwack.

Built with [Astro](https://astro.build). It outputs plain static HTML (no server needed).

## Pages

| URL             | File                           |
| --------------- | ------------------------------ |
| `/`             | `src/pages/index.astro`        |
| `/patio-covers` | `src/pages/patio-covers.astro` |
| `/gallery`      | `src/pages/gallery.astro`      |
| `/about`        | `src/pages/about.astro`        |
| `/contact`      | `src/pages/contact.astro`      |

Shared header, footer, mobile menu, gold "Get a price" band and mobile Call/Quote bar:
`src/layouts/Base.astro`. The home page photo carousel: `src/components/HeroCarousel.astro`.
Scroll/zoom animations: `public/motion.js`.

## Run it on your computer

You need [Node.js](https://nodejs.org) 22 or newer.

```bash
npm install      # first time only
npm run dev      # open http://localhost:4321
```

## Build

```bash
npm run build    # creates the finished site in /dist
npm run preview  # check the built site locally
```

## Deploy on Vercel

1. Push this repo to GitHub.
2. In Vercel, click **Add New → Project** and import the repo.
3. Framework preset: **Astro**. No other settings needed. Click **Deploy**.

## Where to edit things

Almost everything you'll want to change is in **`src/data/site.js`**:

- **Phone number**, email, social links and Financeit link
- **Service areas** and the contact-form dropdown options
- **Form endpoint** (`formEndpoint`) — where the quote form sends to
- **Every image URL** on the site

Page wording lives in the matching file in `src/pages/`.

### Swapping to local images

Right now photos are loaded from the client's old GoDaddy site. To host them yourself:

1. Download each image URL listed in `src/data/site.js` into `public/images/`
   (e.g. `public/images/sunroom.jpg`).
2. Change the URL in `site.js` to `/images/sunroom.jpg`.

## TODO before launch

- [ ] **Set the Formspree ID**: sign up at https://formspree.io, create a form, and replace
      `YOUR_FORM_ID` in `formEndpoint` in `src/data/site.js`. Until then the form shows an error.
- [ ] **Download the images** into `/public/images` (see above). Ask the client for
      high-resolution patio cover and railing photos — they should lead the home carousel.
- [ ] **Verify claims with the client**: "Best Businesses in Canada 2022", "WCB / WorkSafe BC covered",
      "Most jobs installed in one day", "Lifetime warranty (limited, from the manufacturer)",
      SleekFence "100% 6063-T5 aluminium".
- [ ] **Verify the phone number** (604 783 8356) and add an **email** if they have one (none was found on the old site).
- [ ] Set the real domain in `astro.config.mjs` (`site:`) and `src/data/site.js` (`url:`).

## Reference

`docs/` contains the original design handoff (`handoff-README.md`) and the prototype
(`prototype.dc.html`) for reference. They are not part of the built site.
