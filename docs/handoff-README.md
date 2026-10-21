# Handoff: Budget Aluminium and Allied World Ltd.

## Overview
A rebuild of budgetaluminium.com (currently on GoDaddy Website Builder). The company builds patio covers, sunrooms, railings, aluminium fences (SleekFence), gates, decks and renovations, from Richmond to Chilliwack. The direction is **aluminium grey, black and gold** (gold #C9A23A, from their theme colour #a88425).

## About the design files
The files here are **design references built in HTML**: working prototypes that show the intended look, copy and behaviour. They are not production code to copy directly. Rebuild the site in a real stack. If there's no existing codebase, use **Astro or Next.js (static export) + Tailwind**, deployed on Vercel.

- `Budget Aluminium.dc.html`: source prototype. Open `preview.html` to click through it; it's self-contained. All pages live in one file and switch with JS state. **Build them as real routes.**
- `motion.js`: reference for the scroll-reveal and image-zoom behaviour.
- `support.js`: prototype runtime only. **Do not ship.**

## Fidelity
**High fidelity.** Colours, type, spacing, copy and imagery are final. Match them closely. All exact values are inline in the prototype markup.

## Global requirements
- Mobile-first and responsive. Content max-width is 1440px, with side padding of clamp(20px,4vw,56px).
- Below 1140px, nav collapses to a Menu button with a full-width overlay, and a **sticky bottom bar** appears with two equal buttons (Call / Quote).
- The phone number is in the header on every page and is always a `tel:` link.
- Images use `object-fit: cover` in aspect-ratio boxes and are lazy-loaded. The prototype hot-links images from the client's current site; **download them into `/public/images`**.
- The quote form needs a real handler (Formspree, Resend, or a Vercel function emailing the client). Show the inline thank-you state on success.
- Add per-page title and meta description, Open Graph tags, and LocalBusiness JSON-LD (name, phone, address, area served).

## Motion
- Reveal on scroll: elements go from opacity 0 / translateY(28px) to visible over .9–1s, easing cubic-bezier(.2,.7,.2,1), with a 90ms sibling stagger (max 5).
- A full-bleed hero image eases from scale(1.08) to 1 over 2.8s on load.
- Hover on an image inside an overflow-hidden card scales it to 1.045 over 1.1s.
- Respect `prefers-reduced-motion`.

## Pages / routes
- `/` **Home**:
  - Black hero with the H1 “Outdoor living, covered.”
  - **Hero carousel** (21:9): crossfades every 5.5s (opacity 1.1s, scale 1.06 to 1 over 6s). It has a caption with a counter like “01 / 05”, dot buttons (the active dot is 36px wide and gold), and prev/next buttons. Any click resets the timer.
  - Stats row.
  - 6 service cards with black tags.
  - SleekFence feature.
  - 3-step process.
  - Gold financing section (Financeit link), recent work, service area, a gold CTA and the footer.
- `/patio-covers`: roof options grid (glass, W-panel, polycarbonate, acrylic, insulated, awnings).
- `/gallery`: 8 captioned images.
- `/about`: story and materials.
- `/contact`: form plus a panel (phone, financing, area).

## Design tokens
- Page #D7DADD, cards #E6E8EA, grid lines #9EA4A9, black #17191B, footer #0F1012.
- Gold #C9A23A (hover #DDB84E), dark gold #7A5F14 (text on light).
- Fonts: **Sora** 800 for headlines (letter-spacing −0.045 to −0.05em); **Inter Tight** for body.

## Contact
604 783 8356 · Financeit https://www.financeit.ca/s/UzAeVA · Instagram @budget_aluminium · Facebook 110798884177031 · Yelp

## Notes
The client’s photos are small and few. **Request high-resolution patio cover and railing photos**; they should lead the carousel. Confirm the “Best Businesses in Canada 2022” claim. No email was found on the current site.

## Files
- README.md
- Budget Aluminium.dc.html (prototype source)
- preview.html (self-contained clickable preview)
- motion.js (animation reference)
- support.js (prototype runtime only)
