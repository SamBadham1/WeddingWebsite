import { useEffect } from "react";
import { Outlet, useLocation } from "react-router";
import { site } from "../content";
import { NavBar } from "./NavBar";
import { Footer } from "./Footer";

export function Layout() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <a className="site-skip" href="#main">Skip to content</a>
      <NavBar monogram={site.couple.monogram} links={site.nav} onForest={pathname === "/"} />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
