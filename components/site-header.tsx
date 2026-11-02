"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Brand } from "@/components/brand";
import { ThemeToggle } from "@/components/theme-toggle";

const links = [
  { href: "/services", label: "Services" },
  { href: "/industries", label: "Industries" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/insights", label: "Insights" },
  { href: "/quality", label: "Quality & Trust" },
  { href: "/about", label: "About" }
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="site-header" role="banner">
      <div className="container nav-wrap">
        <Brand />
        <nav className={`nav-links ${open ? "nav-open" : ""}`} aria-label="Main navigation">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={isActive ? "active" : ""}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            );
          })}
          <div className="mobile-nav-footer flex items-center justify-between pt-4 mt-2 border-t border-border/40 md:hidden">
            <span className="text-xs text-muted font-medium">Appearance</span>
            <ThemeToggle />
          </div>
          <Link className="mobile-cta" href="/contact" onClick={() => setOpen(false)}>
            Discuss a project <ArrowUpRight size={16} />
          </Link>
        </nav>
        <div className="nav-actions">
          <ThemeToggle className="hidden sm:inline-flex" />
          <Link className="button button-crimson button-small" href="/contact">
            Discuss a project <ArrowUpRight size={15} />
          </Link>
          <button
            className="menu-toggle"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
    </header>
  );
}
