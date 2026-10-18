# Samuel & Samantha — wedding website

An information-only website for Samuel & Samantha's wedding at Man O War, Waiheke, on Saturday April 17th 2027.

## Design system
Everything visual comes from `design-system/`. Read `design-system/README.md` before building anything. It holds the rules for colour, type, layout and tone.

- Load, in this order: `design-system/tokens.css` (colours, spacing, fonts), then `design-system/components/bundle.css` (component classes).
- Use the CSS variables (`var(--forest)`, `var(--space-8)`, `var(--font-script)` …), never hard-coded colours or sizes.
- Components are plain HTML + CSS classes (prefix `wd-`): NavBar, Hero, SectionHeading, Button, EventCard. Each has a `README.md` (markup and rules) and a `preview.html` (open it in a browser to see it) in `design-system/components/<Name>/`.
- `design-system/tokens.json` is the source of truth for tokens. If you change a token, change it there and update `tokens.css` to match.
- `design-system/assets/Reference/save-the-date-photo.jpg` is the printed card, for reference only. Never put it on the site.

## Pages
Home (Hero), Schedule, Travel, FAQ. No RSVP and no Our Story page.

## Rules that matter most
- Script font (Great Vibes) is only for the names, section titles and event names. Everything a guest must read quickly (times, addresses) is Montserrat.
- Hero and footer sit on `forest` with `lace` text. Reading pages sit on `surface`.
- Everything is square; the one shape motif is the clipped corner (`cut-lg`, `cut-sm`) via `clip-path`.
- Keep it a simple static site (HTML + CSS, minimal or no JavaScript) unless asked otherwise. It must work well on phones.

## Still to confirm
- Venue spelling: the card says "Man O War"; the vineyard writes "Man O' War". Ask which to use.
- Colours were sampled from a phone photo. Swap in exact values if the printer's file is provided.
- The lace border artwork isn't here yet; the Hero uses two hairlines in its place (see the Hero README).
- All schedule times in examples are placeholders.
