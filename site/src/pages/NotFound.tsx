import { site } from "../content";
import { Section } from "../components/Section";
import { SectionHeading } from "../components/SectionHeading";
import { Button } from "../components/Button";

export function NotFound() {
  return (
    <>
      <title>{`Page not found · ${site.couple.names}`}</title>
      <Section>
        <SectionHeading level={1} eyebrow="Page not found" title="Lost Your Way" />
        <div className="site-actions">
          <Button label="Back to home" href="/" variant="primary" />
        </div>
      </Section>
    </>
  );
}
