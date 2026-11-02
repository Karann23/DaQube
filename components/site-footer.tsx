import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";
import { Brand } from "@/components/brand";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand-block">
            <Brand light />
            <p>The data behind intelligence.<br />Human insight for the next generation of AI.</p>
            <a className="footer-email" href="mailto:hello@daqube.example"><Mail size={16} /> hello@daqube.example</a>
          </div>
          <div className="footer-column">
            <h4>Explore</h4>
            <Link href="/services">Services</Link>
            <Link href="/case-studies">Case studies</Link>
            <Link href="/insights">Insights & articles</Link>
            <Link href="/industries">Industries</Link>
            <Link href="/quality">Quality & trust</Link>
            <Link href="/about">About DaQube</Link>
          </div>
          <div className="footer-column">
            <h4>Get started</h4>
            <Link href="/contact">Discuss a project <ArrowUpRight size={14} /></Link>
            <Link href="/contact?type=partnership">Partner with us <ArrowUpRight size={14} /></Link>
            <a href="mailto:hello@daqube.example">Email our team <ArrowUpRight size={14} /></a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} DaQube. All rights reserved.</span>
          <span className="footer-note">Built for better data. Designed for better AI.</span>
          <div><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link></div>
        </div>
      </div>
    </footer>
  );
}
