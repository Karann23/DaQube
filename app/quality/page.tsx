import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ClipboardCheck, Eye, FileCheck2, LockKeyhole, ShieldCheck, SlidersHorizontal } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = { title: "Quality & Trust", description: "Learn about DaQube's proposed quality, review, documentation and responsible data practices." };

const pillars = [
  { icon: ClipboardCheck, title: "Clear task specifications", text: "Define instructions, examples, edge cases and acceptance criteria before production begins." },
  { icon: Eye, title: "Human review", text: "Use review steps appropriate to the task, with a clear way to flag ambiguity and inconsistent labels." },
  { icon: SlidersHorizontal, title: "Issue tracking & refinement", text: "Record recurring issues and update guidance when the project reveals gaps or unclear cases." },
  { icon: FileCheck2, title: "Documented delivery", text: "Agree file formats, schemas, metadata and delivery checks before work starts." },
  { icon: LockKeyhole, title: "Responsible data handling", text: "Define permissions, collection boundaries, access controls and retention requirements for each project." },
  { icon: ShieldCheck, title: "Acceptance criteria first", text: "Set measurable project-specific acceptance criteria with the client rather than promising a universal accuracy rate." }
];

export default function QualityPage() {
  return (
    <>
      <section className="page-hero page-hero-dark"><div className="container"><span className="eyebrow eyebrow-light"><span className="eyebrow-dot"/> QUALITY & TRUST</span><h1>Quality is a process.<br/><span>Not a promise.</span></h1><p>Good data work starts with clear definitions, practical review, responsible handling and shared expectations.</p><Link className="button button-blue" href="/contact">Discuss your requirements <ArrowRight size={17}/></Link></div><div className="page-hero-glow"/></section>
      <section className="section section-white"><div className="container"><SectionHeading eyebrow="OUR PRINCIPLES" title="Built into the workflow from day one." description="The exact checks depend on the modality, task complexity and intended use. We align the process with you before work begins."/><div className="quality-grid">{pillars.map((p) => <article className="quality-card" key={p.title}><span className="quality-icon"><p.icon size={23}/></span><h3>{p.title}</h3><p>{p.text}</p></article>)}</div></div></section>
      <section className="section section-tint"><div className="container quality-callout"><div className="quality-callout-mark"><ShieldCheck size={30}/></div><div><span className="eyebrow">A PRACTICAL COMMITMENT</span><h2>Define quality before delivery.</h2><p>We'll work with you to agree on review methods, sample checks, issue resolution, file validation and acceptance criteria that make sense for your project.</p></div></div></section>
      <section className="section section-white"><div className="container cta-inline"><div><span className="eyebrow">LET'S ALIGN ON QUALITY</span><h2>Every task needs the right checks.</h2><p>Tell us about your data and how it will be used. We'll help establish an appropriate review plan.</p></div><Link className="button button-dark" href="/contact">Plan a workflow <ArrowRight size={17}/></Link></div></section>
    </>
  );
}
