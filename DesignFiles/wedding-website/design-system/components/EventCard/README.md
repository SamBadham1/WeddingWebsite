# EventCard

One event on the wedding day's schedule: time, event name in script, place in capitals, and an optional note. The card has clipped corners and a hairline edge.

**Markup:** `article.wd-event` > `div.wd-event__body` > `p.wd-event__time` + `h3.wd-event__title` + `p.wd-event__place` + optional `p.wd-event__note`. Wrap several in `div.wd-events` for a responsive grid.

**You provide:** the time ("3:00 pm"), the event's name ("Ceremony"), the place, and a one-line note if guests need to know something ("Please be seated by 2:45 pm").

- Times in the preview are examples. Replace them with the real running order.
- Keep event names to one or two words so they stay on one line.
- Use it on `surface` or `surface-sunk`, not on `forest`.
