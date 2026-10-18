# Hero

The save-the-date as the top of the home page: a `forest` ground, a lace-framed `moss` panel with clipped corners, the eyebrow, the couple's names in script, and the venue and date in spaced capitals.

**Markup:** `header.wd-hero` > `.wd-hero__frame` > `.wd-hero__gap` > `.wd-hero__inner` > `.wd-hero__panel`, holding `p.wd-hero__eyebrow`, `h1.wd-hero__names` (one `span` per line), `.wd-hero__details` (one `p` per line) and an optional `.wd-hero__actions` with a `wd-btn--on-forest` button.

**You provide:** the eyebrow ("Save the date" until invitations go out, then "We're getting married"), the names split over two lines ("Samuel &" / "Samantha"), the venue and date lines, and one action (such as "The details", linking to the schedule).

- Use it once, on the home page only. Other pages open with a SectionHeading.
- The two lace hairlines are a stand-in for the lace artwork. When the transparent lace PNG from the design file is uploaded, set it as the background of `.wd-hero__frame` (`background: url(<lace.png>) center / 100% 100% no-repeat`), widen the frame's padding to the lace's width, and make `.wd-hero__gap` and `.wd-hero__inner` transparent.
- Names drop to 64px under 600px wide. Never shrink the panel's corner cut.
- One button at most; don't stack calls to action in the panel.
