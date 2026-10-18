import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";

// Order matters: tokens, then component classes, then site layout.
import "@design/tokens.css";
import "@design/components/bundle.css";
import "./styles/site.css";

import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Schedule } from "./pages/Schedule";
import { Travel } from "./pages/Travel";
import { Faq } from "./pages/Faq";
import { NotFound } from "./pages/NotFound";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="schedule" element={<Schedule />} />
          <Route path="travel" element={<Travel />} />
          <Route path="faq" element={<Faq />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
