 "use client";

import { FormEvent, useState } from "react";
import { ArrowRight, CheckCircle2, LoaderCircle } from "lucide-react";

const initial = { name: "", email: "", company: "", service: "", volume: "", details: "" };

export function ContactForm() {
  const [form, setForm] = useState(initial);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  function update(key: keyof typeof initial, value: string) {
    setForm((current) => ({ ...current, [key]: value }));
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setMessage("");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "We couldn't send your request. Please email us instead.");
      setStatus("success");
      setMessage("Thanks for reaching out. Your project enquiry has been sent to our team.");
      setForm(initial);
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Something went wrong. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <div className="form-success" role="status">
        <CheckCircle2 size={42} />
        <h3>Thanks for reaching out.</h3>
        <p>{message}</p>
        <button className="button button-dark" onClick={() => { setStatus("idle"); setMessage(""); }}>Send another enquiry</button>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={submit}>
      <div className="form-intro"><span className="eyebrow">PROJECT ENQUIRY</span><h2>Tell us what you&apos;re building.</h2><p>Share a few details and we&apos;ll take it from there.</p></div>
      <div className="form-grid">
        <label>Full name <span>*</span><input required autoComplete="name" value={form.name} onChange={(e) => update("name", e.target.value)} placeholder="Your name" /></label>
        <label>Work email <span>*</span><input required type="email" autoComplete="email" value={form.email} onChange={(e) => update("email", e.target.value)} placeholder="you@company.com" /></label>
        <label>Company <input autoComplete="organization" value={form.company} onChange={(e) => update("company", e.target.value)} placeholder="Company name" /></label>
        <label>Service of interest <span>*</span>
          <select required value={form.service} onChange={(e) => update("service", e.target.value)}>
            <option value="">Select a service</option>
            <option>Image & video collection</option><option>Audio & speech collection</option><option>Text & transcription</option><option>Data annotation & labeling</option><option>Multimodal data</option><option>AI evaluation & human feedback</option><option>Multiple services / not sure yet</option>
          </select>
        </label>
        <label className="form-full">Estimated project volume
          <select value={form.volume} onChange={(e) => update("volume", e.target.value)}>
            <option value="">Choose an approximate volume</option><option>Under 1,000 items</option><option>1,000–10,000 items</option><option>10,000–100,000 items</option><option>100,000+ items</option><option>Ongoing / recurring</option><option>Not sure yet</option>
          </select>
        </label>
        <label className="form-full">Project details <span>*</span><textarea required rows={5} value={form.details} onChange={(e) => update("details", e.target.value)} placeholder="Tell us about your data type, languages, timeline, quality requirements, or evaluation goals." /></label>
      </div>
      <p className="form-privacy">By submitting, you agree that DaQube may use these details to respond to your enquiry. Do not include confidential or sensitive data.</p>
      {message && <p className="form-error" role="alert">{message}</p>}
      <button className="button button-blue form-submit" type="submit" disabled={status === "sending"}>
        {status === "sending" ? <>Sending <LoaderCircle className="spin" size={17} /></> : <>Send project enquiry <ArrowRight size={17} /></>}
      </button>
    </form>
  );
}
