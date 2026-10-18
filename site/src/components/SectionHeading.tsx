interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  onForest?: boolean;
  /** The first heading on a reading page is its h1. */
  level?: 1 | 2;
}

/** `div.wd-heading`: eyebrow, script title and the diamond rule. */
export function SectionHeading({ eyebrow, title, onForest, level = 2 }: SectionHeadingProps) {
  const Title = level === 1 ? "h1" : "h2";
  return (
    <div className={`wd-heading${onForest ? " wd-heading--on-forest" : ""}`}>
      <p className="wd-heading__eyebrow">{eyebrow}</p>
      <Title className="wd-heading__title">{title}</Title>
      <div className="wd-heading__rule" aria-hidden="true"><span /></div>
    </div>
  );
}
