The look of Samuel & Samantha's wedding at Man O War, Waiheke, on Saturday April 17th 2027, carried from the printed save-the-date onto the wedding website: deep forest green, white lace, an olive linen panel with clipped corners, flowing script names and small, widely spaced capitals.

## Content fundamentals

- **Voice.** Warm, plain and personal, written as "we" (the couple) to "you" (the guest). Short sentences. Practical details stated simply: "Ferries leave regularly, so plan to arrive with time to spare."
- **Names.** Always "Samuel & Samantha", Samuel first, joined by an ampersand, never "and". The monogram is "S & S".
- **Venue.** The card sets it as "Man O War, Waiheke". The vineyard writes its own name "Man O' War". Pick one and use it everywhere.
- **Dates.** Write them as the card does: "Saturday April 17th 2027", with `th` as a lowercase superscript in display lines. In running text, "Saturday 17 April 2027" is fine.
- **Casing.** Labels, venue, date and time lines and buttons are uppercase via CSS (`text-transform: uppercase`), typed in sentence case in the source so screen readers don't spell them out. Script titles are title case, never all caps.
- **No emoji** on the site.

## Visual foundations

### Colour
- The hero and the footer sit on `forest` with `lace` text, as the card does, in both themes.
- Long reading pages (Schedule, Travel, FAQ) sit on `surface` with `ink` text. In the Ivory theme that's `ivory`; in the Forest theme the whole site turns green.
- `moss` is the linen panel colour. Use it for the hero panel and small accents only, with `lace` text on it.
- `sage` is for secondary text on `forest` (dates under a heading, captions) and quiet decorative fills. Never use it as text on a light ground.
- `ink-muted` is for helper text and captions on `surface`, `surface-raised` and `surface-sunk`.
- The palette was sampled from a phone photo under a cool light. Check `forest`, `moss` and `lace` against the printer's or Canva file and replace the values if they differ.

### Type
- **Great Vibes** (`--font-script`), the script you chose for the site: rounded, flowing and easy to read on phones. Use it for the couple's names (`display-names`), section titles (`script-title`) and event names (`script-small`), and nothing else. Don't set times, addresses or anything a guest needs to read quickly in script.
- **Montserrat** (`--font-sans`) for everything else. Uppercase with wide tracking for labels and details (`eyebrow`, `details`, `nav`); sentence case for reading (`lead`, `body`, `small`).
- An `eyebrow` sits above every `script-title`, as "SAVE THE DATE" sits above the names on the card.
- If the card's original font names are in the design file, swap them into `type.fonts` and `type.families`.

### Shape and layout
- Everything is square (`radius-0`), like the printed card. There are no rounded corners.
- The card's signature is the inner panel's **clipped corners**. Use `cut-lg` on the hero panel and large framed photos, and `cut-sm` on schedule cards. Apply them with `clip-path`, never `border-radius`.
- Content is centred. Running text stays within `measure-text`, while grids and navigation stay within `measure-page`.
- Section padding is `space-24` on desktop and `space-16` on mobile. Gutters are `space-8` on desktop and `space-4` on mobile.
- Separate sections with a change of ground (`surface` → `surface-sunk` → `forest`) or the heading rule (a hairline with a small diamond), not with shadows. There are no shadows.

### Imagery
- **The lace frame** is the brand's one ornament. Use it once per page, around the hero panel. Until the artwork file is added, the Hero draws two `lace` hairlines in its place. When the original lace artwork (a transparent PNG from the design file) is uploaded to an **Artwork** asset group, it replaces those hairlines. Never redraw or trace the lace.
- Photos of the two of you go in clipped-corner frames (`cut-lg`) with a 1px `lace` or `line` hairline. Natural, warm light suits the palette. Avoid heavy filters.
- The linen texture inside the hero panel is a very faint woven grid in `lace`. Keep it barely visible.

### States
- Focus: a 2px solid `focus` outline, 3px from the element, on every link and button.
- Hover: primary buttons go to `accent-hover`. Navigation links and outline buttons gain an underline or a darker edge.

## Iconography
The card uses no icons, and the site doesn't need them. Words do the work ("Add to calendar", "Ferry timetable"). If an icon is ever needed (a map pin, say), use a thin 1.5px line icon in `ink` or `lace`, sized to the cap height of the text beside it.

## Components
All components are plain HTML with the classes in `components/bundle.css`, so they work on any website builder that accepts custom HTML and CSS. Load `tokens.css` first, then `bundle.css`, then the two fonts.

- **NavBar** (`.wd-nav`): the monogram plus page links. Use `wd-nav--on-forest` over the hero.
- **Hero** (`.wd-hero`): the save-the-date as the home page.
- **SectionHeading** (`.wd-heading`): an eyebrow, a script title and the diamond rule.
- **Button** (`.wd-btn`): primary, outline, link and on-forest variants.
- **EventCard** (`.wd-event`): one event on the day's schedule.

The site is information only for now: there is no RSVP form.

## Assets
- **Reference** holds the photo of the printed save-the-date this system was built from.
