import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CarFront, Languages, ShoppingBag, Bot, Microscope, Building2 } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = { title: "Industries", description: "Explore AI training-data workflows for computer vision, speech, retail, mobility, enterprise and research." };

const industries = [
  { icon: CarFront, title: "Mobility & robotics", text: "Visual and sensor-related data workflows for systems that need to interpret dynamic, real-world environments.", examples: ["Scene and object annotation", "Road and environment coverage", "Edge-case review"] },
  { icon: Languages, title: "Speech & language", text: "Language, speech and transcription workflows for models serving diverse users and communication contexts.", examples: ["Speech collection", "Transcription and text review", "Language coverage planning"] },
  { icon: ShoppingBag, title: "Retail & commerce", text: "Product and customer-experience data workflows that support search, categorization and visual understanding.", examples: ["Product image labeling", "Catalog categorization", "Text and attribute extraction"] },
  { icon: Bot, title: "Enterprise AI", text: "Structured data and evaluation workflows that fit internal AI applications and knowledge systems.", examples: ["Document and text annotation", "Response evaluation", "Human feedback workflows"] },
  { icon: Microscope, title: "Research & model development", text: "Task-specific datasets and evaluation plans for experimentation, benchmarking and iterative development.", examples: ["Custom dataset specifications", "Rubric-based evaluation", "Error and gap analysis"] },
  { icon: Building2, title: "Industry-specific AI", text: "Purpose-built collection and labeling plans for specialist domains, based on the requirements you provide.", examples: ["Domain-specific instructions", "Expert review planning", "Traceable project documentation"] }
];

export default function IndustriesPage() {
  return (
    <>
      <section className="page-hero page-hero-dark"><div className="container"><span className="eyebrow eyebrow-light"><span className="eyebrow-dot"/> INDUSTRIES</span><h1>Built around the<br/><span>world your AI serves.</span></h1><p>Useful training data reflects real tasks, real environments and the people who use the systems being built.</p><Link className="button button-blue" href="/contact">Talk through your use case <ArrowRight size={17}/></Link></div><div className="page-hero-glow"/></section>
      <section className="section section-white"><div className="container"><SectionHeading eyebrow="WHERE WE HELP" title="Context changes everything." description="We begin with your application, then define the collection and review workflow around the task."/><div className="industry-grid">{industries.map((item) => <article className="industry-card" key={item.title}><span className="industry-icon"><item.icon size={24}/></span><h2>{item.title}</h2><p>{item.text}</p><div className="industry-examples">{item.examples.map((e) => <span key={e}>{e}</span>)}</div></article>)}</div><p className="disclaimer-note">Examples are illustrative capabilities, not claims of completed client engagements or industry certifications.</p></div></section>
      <section className="section section-tint"><div className="container cta-inline"><div><span className="eyebrow">YOUR USE CASE, YOUR WORKFLOW</span><h2>Have a specialist requirement?</h2><p>Share the intended task, data types and constraints. We'll help you define a realistic project scope.</p></div><Link className="button button-dark" href="/contact">Start a conversation <ArrowRight size={17}/></Link></div></section>
    </>
  );
}
