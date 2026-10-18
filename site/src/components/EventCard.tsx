import type { EventItem } from "../content";

/** `article.wd-event`: one event on the day's schedule. Wrap several in `.wd-events`. */
export function EventCard({ time, title, place, note }: EventItem) {
  return (
    <article className="wd-event">
      <div className="wd-event__body">
        <p className="wd-event__time">{time}</p>
        <h3 className="wd-event__title">{title}</h3>
        <p className="wd-event__place">{place}</p>
        {note && <p className="wd-event__note">{note}</p>}
      </div>
    </article>
  );
}
