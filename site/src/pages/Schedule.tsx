import { schedule, site } from "../content";
import { Section } from "../components/Section";
import { SectionHeading } from "../components/SectionHeading";
import { EventCard } from "../components/EventCard";

export function Schedule() {
  return (
    <>
      <title>{`Schedule · ${site.couple.names}`}</title>
      <Section>
        <SectionHeading level={1} {...schedule.heading} />
        <p className="site-prose site-prose--centred">{schedule.intro}</p>
      </Section>
      <Section ground="sunk">
        <div className="wd-events">
          {schedule.events.map((event) => <EventCard key={`${event.time}-${event.title}`} {...event} />)}
        </div>
      </Section>
    </>
  );
}
