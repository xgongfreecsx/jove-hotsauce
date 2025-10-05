# MVP TODO for Hot Sauce Rebrand

Scope: Update existing React + Tailwind + Vite project to a modern, bold, spicy hot sauce landing page.

Files to modify (in-place):
1. src/components/Navbar.jsx
   - Rename dropdown label to "HEAT INDEX"
   - Dropdown items: Hero (#hero), Spread (#spread), Rhythm (#rhythm), Product (#product), Get It (#cta)
   - Fiery gradient underline, chili/ember accents, translucent charcoal backdrop

2. src/components/Hero.jsx
   - Title: "Turn up the heat. Taste the rush."
   - Subcopy mixing intensity + flavor
   - Spicy radial/conic gradient with heat shimmer flicker animation
   - CTAs: "Ignite Now" -> #cta, "Scoville Scale" -> #product
   - Prominent bottle image from /assets/images/product-bottle.png

3. src/components/MagazineSpread.jsx
   - Headline: "More than heat — it’s a ritual."
   - Two-column editorial layout with gradients/placeholder visuals

4. src/components/PoeticRhythm.jsx
   - Panels with bold lines: "Sear. Savor. Repeat.", "Feel the Blaze.", "Flavors that Roar."
   - Animate on enter using intersection observer or Tailwind transitions
   - Fiery overlays and bold typography

5. src/components/ProductShowcase.jsx
   - Large product image ABOVE the title
   - Copy highlighting smoke, citrus, garlic, roasted pepper notes
   - Simple heat meter (Tailwind bars) mild -> extreme

6. src/components/CTA.jsx
   - Copy: "It’s not just a sauce. It’s fire in a bottle."
   - Button: "Ignite Your Taste" linking to #product

7. src/components/Footer.jsx
   - Minimal, elegant, spicy palette
   - Links: Ingredients, Shipping, Contact

8. src/App.jsx
   - Compose sections in order: Navbar, Hero, MagazineSpread, PoeticRhythm, ProductShowcase, CTA, Footer
   - Ensure anchors: hero, spread, rhythm, product, cta

Support configuration:
- tailwind.config.js: extend theme colors (chili, ember, charcoal, ash), add keyframes/animations "flicker" and "heat"
- src/index.css: keep Tailwind directives, add fiery background helpers and selection colors
- index.html: update title to reflect hot sauce rebrand

Build & Preview:
- pnpm install
- pnpm run lint
- pnpm run build
- pnpm run dev -- --host 0.0.0.0