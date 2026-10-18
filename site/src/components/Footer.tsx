import { site } from "../content";

/** The closing band: forest ground, lace text, as on the card. */
export function Footer() {
  return (
    <footer className="site-footer">
      <p className="site-footer__mark">{site.couple.monogram}</p>
      <p className="site-footer__details">{site.venue.name}, {site.venue.area}</p>
      <p className="site-footer__details">{site.dateText}</p>
    </footer>
  );
}
