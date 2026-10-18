import { useState } from "react";
import { Link, NavLink } from "react-router";
import type { LinkItem } from "../content";

interface NavBarProps {
  monogram: string;
  links: LinkItem[];
  onForest?: boolean;
}

/** `nav.wd-nav`. Under 600px the links fold behind a "Menu" text button. */
export function NavBar({ monogram, links, onForest }: NavBarProps) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`site-header${onForest ? " site-header--forest" : ""}`}>
      <nav className={`wd-nav${onForest ? " wd-nav--on-forest" : ""}`} aria-label="Main">
        <Link className="wd-nav__mark" to="/">{monogram}</Link>
        <button
          type="button"
          className="site-menu-toggle"
          aria-expanded={open}
          aria-controls="site-nav-links"
          onClick={() => setOpen(!open)}
        >
          {open ? "Close" : "Menu"}
        </button>
        <ul className="wd-nav__links" id="site-nav-links" data-open={open}>
          {links.map((link) => (
            <li key={link.href}>
              <NavLink to={link.href} end onClick={() => setOpen(false)}>{link.label}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
