import { faq, site } from "../content";
import { Section } from "../components/Section";
import { SectionHeading } from "../components/SectionHeading";

export function Faq() {
  return (
    <>
      <title>{`FAQ · ${site.couple.names}`}</title>
      <Section>
        <SectionHeading level={1} {...faq.heading} />
        <dl className="site-prose site-faq">
          {faq.items.map((item) => (
            <div key={item.question} className="site-faq__item">
              <dt className="site-faq__question">{item.question}</dt>
              {item.answer.map((paragraph) => <dd key={paragraph}>{paragraph}</dd>)}
            </div>
          ))}
        </dl>
      </Section>
    </>
  );
}
