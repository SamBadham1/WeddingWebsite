import { home, site } from "../content";
import { Hero } from "../components/Hero";
import { Section } from "../components/Section";
import { SectionHeading } from "../components/SectionHeading";
import { Button } from "../components/Button";

export function Home() {
  const { hero, intro } = home;
  return (
    <>
      <title>{site.couple.names}</title>
      <Hero
        eyebrow={hero.eyebrow}
        nameLines={site.couple.nameLines}
        details={[`${site.venue.name}, ${site.venue.area}`, site.dateDisplay]}
        action={hero.action}
      />
      <Section>
        <SectionHeading eyebrow={intro.eyebrow} title={intro.title} />
        <div className="site-prose site-prose--centred">
          {intro.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
        <div className="site-actions">
          {intro.actions.map((action) => <Button key={action.href} {...action} />)}
        </div>
      </Section>
    </>
  );
}
