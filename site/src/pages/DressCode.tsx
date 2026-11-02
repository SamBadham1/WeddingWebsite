import { dressCode, site } from "../content";
import { Section } from "../components/Section";
import { SectionHeading } from "../components/SectionHeading";

export function DressCode() {
  return (
    <>
      <title>{`Dress Code · ${site.couple.names}`}</title>
      <Section>
        <SectionHeading level={1} {...dressCode.heading} />
        <div className="site-prose site-prose--centred">
          <p className="script-small site-subtitle">{dressCode.code}</p>
          <ul className="site-keywords">
            {dressCode.keywords.map((word) => <li key={word}>{word}</li>)}
          </ul>
          {dressCode.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
      </Section>
      {dressCode.images.length > 0 && (
        <Section ground="sunk">
          <div className="site-gallery">
            {dressCode.images.map((image) => (
              <figure key={image.src} className="site-gallery__item">
                <img src={image.src} alt={image.alt} loading="lazy" />
                {image.caption && <figcaption>{image.caption}</figcaption>}
              </figure>
            ))}
          </div>
        </Section>
      )}
    </>
  );
}
