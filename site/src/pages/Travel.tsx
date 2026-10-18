import { site, travel } from "../content";
import { Section } from "../components/Section";
import { SectionHeading } from "../components/SectionHeading";
import { Button } from "../components/Button";

export function Travel() {
  return (
    <>
      <title>{`Travel · ${site.couple.names}`}</title>
      <Section>
        <SectionHeading level={1} {...travel.heading} />
        <p className="site-prose site-prose--centred">{travel.intro}</p>
      </Section>
      {travel.sections.map((section, i) => (
        <Section key={section.title} ground={i % 2 === 0 ? "sunk" : "surface"}>
          <div className="site-prose">
            <h2 className="script-small site-subtitle">{section.title}</h2>
            {section.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            {section.links?.map((link) => (
              <p key={link.href}><Button {...link} variant="link" /></p>
            ))}
          </div>
        </Section>
      ))}
    </>
  );
}
