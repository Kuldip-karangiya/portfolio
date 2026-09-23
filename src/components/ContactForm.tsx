"use client";

import { useState, type FormEvent } from "react";
import { LuArrowUpRight } from "react-icons/lu";
import { contact } from "@/content/portfolio";

type Status = { state: "idle" | "sending" | "sent" | "error"; message?: string };

export default function ContactForm() {
  const [status, setStatus] = useState<Status>({ state: "idle" });

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    if (data.website) return; // honeypot
    setStatus({ state: "sending" });
    try {
      const response = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
      const body = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(body.error ?? "Something went wrong.");
      setStatus({ state: "sent", message: "Thanks. I’ll reply within a day or two." });
      form.reset();
    } catch (error) {
      setStatus({ state: "error", message: error instanceof Error ? error.message : "Something went wrong." });
    }
  };

  return (
    <form className="contact-form will-reveal" data-reveal="tilt" onSubmit={onSubmit} noValidate>
      <div className="form-row">
        <label>Your name<input name="name" type="text" placeholder="Alex Morgan" required minLength={2} autoComplete="name" /></label>
        <label>Email address<input name="email" type="email" placeholder="alex@company.com" required autoComplete="email" /></label>
      </div>
      <label>What can I help with?
        <select name="type" defaultValue="">
          <option value="">Select a project type (optional)</option>
          <option>AI / ML system</option>
          <option>LLM, RAG, or agents</option>
          <option>Backend & APIs</option>
          <option>Something else</option>
        </select>
      </label>
      <label>Tell me about your project<textarea name="message" rows={6} placeholder="The idea, the challenge, and what you have in mind…" required minLength={10} /></label>
      <label className="honeypot" aria-hidden="true">Website<input name="website" type="text" tabIndex={-1} autoComplete="off" /></label>
      <div className="form-foot">
        <p className="form-note" role="status" aria-live="polite">
          {status.state === "sent" || status.state === "error" ? status.message : <>I’ll use these details only to respond to your enquiry. Prefer email? <a href={`mailto:${contact.email}`}>{contact.email}</a></>}
        </p>
        <button type="submit" className="button button-accent" disabled={status.state === "sending"}>{status.state === "sending" ? "Sending…" : "Send message"} <LuArrowUpRight size={16} /></button>
      </div>
    </form>
  );
}
