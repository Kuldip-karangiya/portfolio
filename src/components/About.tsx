import Image from "next/image";
import { LuArrowUpRight, LuDownload } from "react-icons/lu";
import { about, contact, experiences, person } from "@/content/portfolio";

export default function About() {
  const current = experiences[0];
  return (
    <section id="about" className="about container">
      <div className="about-label"><p className="eyebrow">02 / ABOUT ME</p><p className="eyebrow eyebrow-muted">{about.eyebrow}</p></div>
      <div className="about-grid">
        <aside className="profile-card will-reveal" data-reveal="tilt">
          <figure className="profile-photo"><Image src="/images/kuldip-portrait.jpeg" alt={`${person.name}, portrait`} width={960} height={1280} sizes="(max-width: 760px) 90vw, 26vw" /></figure>
          <h3>{person.name}</h3>
          <p className="profile-role">{person.title}</p>
          <dl className="profile-facts">
            <div><dt>Currently</dt><dd>{current.role} at {current.company}</dd></div>
            <div><dt>Based in</dt><dd>{person.location}</dd></div>
          </dl>
          <a className="profile-resume" href={contact.resume} download>Get my résumé <LuDownload size={15} /></a>
        </aside>
        <div className="about-copy will-reveal" data-reveal="wipe">
          <h2 className="section-title">{about.headline}<br /><span className="serif-accent">{about.headlineSerif}</span></h2>
          <p className="about-lede">{about.lede}</p>
          {about.paragraphs.map((paragraph) => <p key={paragraph} className="about-para">{paragraph}</p>)}
          <p className="about-beyond">{about.beyond}</p>
          <a className="text-link" href={contact.linkedin} target="_blank" rel="noreferrer">More about me on LinkedIn <LuArrowUpRight size={15} /></a>
        </div>
      </div>
      <ol className="principles will-reveal" data-reveal="wipe">
        {about.principles.map((item) => <li key={item.index}><span>{item.index}</span><div><strong>{item.title}</strong><p>{item.detail}</p></div></li>)}
      </ol>
    </section>
  );
}
