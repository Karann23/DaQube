import type { Metadata } from "next";
import { Mail, MessageSquareText, ShieldCheck } from "lucide-react";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = { title: "Contact & Project Enquiry", description: "Tell DaQube about your AI data collection, annotation, transcription or evaluation project." };

export default function ContactPage() {
  return (
    <section className="contact-page">
      <div className="container contact-layout">
        <div className="contact-copy">
          <span className="eyebrow"><span className="eyebrow-dot"/> CONTACT DAQUBE</span>
          <h1>Let's talk about<br/><span>your data needs.</span></h1>
          <p className="contact-lead">Tell us what you're building, what your model needs to learn, and what a useful delivery looks like for your team.</p>
          <div className="contact-points"><div><span><MessageSquareText size={19}/></span><div><h3>A conversation, not a sales script</h3><p>Start with your use case and the questions you need to solve.</p></div></div><div><span><ShieldCheck size={19}/></span><div><h3>Scope before commitment</h3><p>Align on modalities, volume, timelines and review requirements.</p></div></div><div><span><Mail size={19}/></span><div><h3>Prefer email?</h3><p><a href="mailto:hello@daqube.example">hello@daqube.example</a><br/><small>Replace this placeholder with your real business email before launch.</small></p></div></div></div>
          <div className="contact-note">Please do not submit confidential datasets, personal sensitive information or credentials through this form.</div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
