import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { SEO_ROUTES, SEO_DEFAULT, SITE_URL } from "../lib/seo-config";

function upsert(selector, create, attr, value) {
  let el = document.head.querySelector(selector);
  if (!el) {
    el = create();
    document.head.appendChild(el);
  }
  el.setAttribute(attr, value);
}

const meta = (key, val) => () => {
  const m = document.createElement("meta");
  m.setAttribute(key, val);
  return m;
};

export function SeoManager() {
  const { pathname } = useLocation();
  useEffect(() => {
    const clean = pathname.length > 1 ? pathname.replace(/\/+$/, "") : pathname;
    const canonicalPath = clean === "/about-us" ? "/about" : clean;
    // Detail pages (e.g. /case-studies/:slug) fall back to their section's entry.
    const section = "/" + canonicalPath.split("/")[1];
    const seo = SEO_ROUTES[canonicalPath] || SEO_ROUTES[section] || SEO_DEFAULT;
    const url = SITE_URL + (canonicalPath === "/" ? "/" : canonicalPath);

    document.title = seo.title;
    upsert('meta[name="description"]', meta("name", "description"), "content", seo.description);
    upsert(
      'link[rel="canonical"]',
      () => {
        const l = document.createElement("link");
        l.setAttribute("rel", "canonical");
        return l;
      },
      "href",
      url
    );
    upsert('meta[property="og:title"]', meta("property", "og:title"), "content", seo.title);
    upsert('meta[property="og:description"]', meta("property", "og:description"), "content", seo.description);
    upsert('meta[property="og:url"]', meta("property", "og:url"), "content", url);
    upsert('meta[name="twitter:title"]', meta("name", "twitter:title"), "content", seo.title);
    upsert('meta[name="twitter:description"]', meta("name", "twitter:description"), "content", seo.description);
  }, [pathname]);

  return null;
}
