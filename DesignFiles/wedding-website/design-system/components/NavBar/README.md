# NavBar

The site's top bar, with the "S & S" monogram on the left and uppercase page links on the right.

**Markup:** `nav.wd-nav` > `a.wd-nav__mark` + `ul.wd-nav__links` > `li` > `a`. Mark the current page with `aria-current="page"`, which underlines it.

**You provide:** the page links and their URLs. Keep to six or fewer: Home, Schedule, Travel, FAQ.

- Over the hero, add `wd-nav--on-forest` so the bar merges into the `forest` ground with `lace` text.
- On reading pages, use the plain bar on `surface`, with a `line` hairline beneath.
- Under 600px, collapse the links behind a "Menu" text button. Don't use a hamburger icon.
- Don't put the full names in the bar; the hero carries them.
