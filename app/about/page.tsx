import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Compass, Layers, UsersRound } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = { title: "About DaQube", description: "Learn about DaQube's human-centered approach to AI training data and evaluation." };

export default function AboutPage() {
  return (
    <>
      <section className="page-hero page-hero-dark"><div className="container"><span className="eyebrow eyebrow-light"><span className="eyebrow-dot"/> ABOUT DAQUBE</span><h1>Intelligence starts<br/><span>with understanding.</span></h1><p>DaQube is being built around a simple idea: useful AI needs relevant data, thoughtful human input and workflows designed for the task.</p><Link className="button button-blue" href="/contact">Work with DaQube <ArrowRight size={17}/></Link></div><div className="page-hero-glow"/></section>
      <section className="section section-white"><div className="container about-story"><div><span className="eyebrow"><span className="eyebrow-dot"/> OUR POINT OF VIEW</span><h2>Technology moves fast.<br/>Good data takes intention.</h2></div><div><p className="large-body">AI systems learn from examples of the world. The relevance, coverage and clarity of those examples can shape what a model understands — and where it falls short.</p><p>DaQube's aim is to help AI teams build those examples through focused collection, structured annotation, transcription and human evaluation. Each engagement begins with the use case, the constraints and the definition of useful output.</p><p>We believe a good data partner should be clear about scope, transparent about process and committed to improving the work through feedback.</p></div></div></section>
      <section className="section section-tint"><div className="container"><SectionHeading eyebrow="HOW WE THINK" title="Three principles. One practical approach." description="These principles guide how we plan projects and work with AI teams."/><div className="values-grid"><article><span><Compass size={24}/></span><h3>Start with context</h3><p>Understand the task before deciding what to collect, label or evaluate.</p></article><article><span><UsersRound size={24}/></span><h3>Keep humans in the loop</h3><p>Use human judgment where context, nuance and careful review matter.</p></article><article><span><Layers size={24}/></span><h3>Build for the workflow</h3><p>Deliver structured outputs that are documented and fit the agreed pipeline.</p></article></div></div></section>
      <section className="section section-white"><div className="container cta-panel"><div className="cta-symbol"><Compass size={26}/></div><div className="cta-copy"><span className="eyebrow">BUILD WITH US</span><h2>Let's start with the problem.</h2><p>Tell us what your AI system needs to learn, understand or evaluate.</p></div><Link className="button button-blue" href="/contact">Discuss a project <ArrowRight size={17}/></Link><span className="cta-watermark">DQ</span></div></section>
    </>
  );
}
