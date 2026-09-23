import { LuBriefcase, LuGraduationCap } from "react-icons/lu";
import { journey } from "@/content/portfolio";

export default function Journey() {
  return (
    <section id="experience" className="journey container">
      <div className="journey-grid">
        <div className="journey-intro will-reveal" data-reveal="wipe">
          <p className="eyebrow">04 / THE JOURNEY</p>
          <h2 className="section-title">Learning by<br /><span className="serif-accent">building.</span></h2>
          <p className="section-side">Where curiosity meets<br />real-world experience.</p>
        </div>
        <ol className="timeline">
          {journey.map((item) => {
            const Icon = item.kind === "work" ? LuBriefcase : LuGraduationCap;
            return (
              <li key={`${item.period}-${item.title}`} className="timeline-item will-reveal" data-reveal="slide">
                <span className="timeline-icon" aria-hidden="true"><Icon size={15} /></span>
                <div className="timeline-meta"><span className="eyebrow">{item.period}</span>{item.current ? <span className="badge">Current</span> : null}</div>
                <h3>{item.title}</h3>
                <p className="timeline-org">{item.org}</p>
                {item.paragraphs.map((paragraph) => <p key={paragraph} className="timeline-copy">{paragraph}</p>)}
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
