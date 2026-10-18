import type { LinkItem } from "../content";
import { Button } from "./Button";
import { Ordinals } from "./Ordinals";

interface HeroProps {
  eyebrow: string;
  nameLines: string[];
  details: string[];
  action?: LinkItem;
}

/** `header.wd-hero`: the save-the-date. Home page only. */
export function Hero({ eyebrow, nameLines, details, action }: HeroProps) {
  return (
    <header className="wd-hero">
      <div className="wd-hero__frame"><div className="wd-hero__gap"><div className="wd-hero__inner">
        <div className="wd-hero__panel">
          <p className="wd-hero__eyebrow">{eyebrow}</p>
          <h1 className="wd-hero__names">
            {nameLines.map((line) => <span key={line}>{line}</span>)}
          </h1>
          <div className="wd-hero__details">
            {details.map((line) => <p key={line}><Ordinals text={line} /></p>)}
          </div>
          {action && (
            <div className="wd-hero__actions">
              <Button label={action.label} href={action.href} variant="on-forest" />
            </div>
          )}
        </div>
      </div></div></div>
    </header>
  );
}
