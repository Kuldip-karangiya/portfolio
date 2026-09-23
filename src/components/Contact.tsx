import { LuArrowUpRight, LuGithub, LuMail } from "react-icons/lu";
import ContactForm from "./ContactForm";
import { contact } from "@/content/portfolio";

export default function Contact() {
  return (
    <section id="contact" className="contact container">
      <div className="contact-grid">
        <div className="contact-intro will-reveal" data-reveal="wipe">
          <p className="eyebrow">05 / LET’S TALK</p>
          <h2 className="section-title">Have an idea?<br /><span className="serif-accent">Let’s build it.</span></h2>
          <p className="section-side">Tell me what you’re working on, what you need, and where you’d like to take it.</p>
          <a className="contact-email" href={`mailto:${contact.email}`}><LuMail size={16} /> {contact.email}</a>
          <div className="contact-links">
            <a className="text-link" href={contact.linkedin} target="_blank" rel="noreferrer">Connect on LinkedIn <LuArrowUpRight size={14} /></a>
            <a className="text-link" href={contact.github} target="_blank" rel="noreferrer"><LuGithub size={14} /> GitHub <LuArrowUpRight size={14} /></a>
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
