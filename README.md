# Amora By Dani — website

A multi-page static website for the Amora By Dani perfume business.
15ml perfume sprays, each built around a personality and paired with its own playlist.

Made in Johannesburg. Colour scheme: light pink and white, elegant serif headings.

---

## What is built

A full multi-page static site (no backend needed). Pages:

| File | Page | What's on it |
|------|------|--------------|
| `index.html` | Home | Hero, the three scents, the scent-plus-playlist hook |
| `shop.html` | Shop | All three scents as cards with "Message to order" buttons |
| `workoholic.html` | The Workoholic | Photo, description, notes, price, playlist tease |
| `overthinker.html` | The Overthinker | Same layout |
| `charmer.html` | The Charmer | Same layout |
| `about.html` | Our Story | Founder intro + Dani's photo, "how shipping works" steps |
| `contact.html` | Contact & Shipping | Shipping FAQ + contact form |
| `css/style.css` | Stylesheet | Shared across all pages |
| `js/main.js` | Script | Mobile menu toggle only |
| `images/` | Photos | Bottle and brand photos |

## The scents

All priced at **R120**, 15ml sprays.

- **The Workoholic** — warm, sophisticated, fruity. (Internal reference: inspired by Armani Si)
- **The Overthinker** — bold, warm, a little addictive. (Internal reference: inspired by Black Opium)
- **The Charmer** — fresh, clean, confident. (Internal reference: inspired by Dior Sauvage)

Note: the original branded fragrance names are kept for internal reference only and are
NOT shown on the public site, to avoid trademark trouble.

## Playlists

Decision: playlists are a **post-purchase perk**, not shown on the website.
The site teases that each scent "comes with its own playlist" but there are no
clickable Apple Music / Spotify links. Customers get the QR code on the card inside
their order. This is deliberate so people cannot get the playlist without buying.

## Ordering

- No online checkout. There is no automated payment or delivery system yet.
- Every "Message to order" button and Instagram link points to
  `https://instagram.com/amora.by.dani`.
- Customers message on Instagram to place an order; payment and delivery/collection
  are arranged personally per order.

## Shipping

- Delivery across South Africa or collection in Johannesburg.
- Arranged personally with each customer over Instagram when they order.
- The Contact page still shows an indicative **R80** delivery fee — update or remove as needed.

---

## Still to do

1. **Shipping** — decide whether to keep the indicative R80 fee or quote per order.
2. **Contact form** — the form on `contact.html` is not wired up. Either connect it to a
   free Formspree account (see the comment inside the file) or remove it and rely on Instagram.
3. **Hosting** — publish free on Netlify, then point a domain (~R200/year) at it.

## How to preview

Open `index.html` in any browser.

## How to publish (later)

Drag this whole folder onto netlify.com (free). It gives a live URL and the https padlock.
Then connect a custom domain bought from somewhere like Domains.co.za or Afrihost.
