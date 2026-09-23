import Link from "next/link";
import { person, projects } from "@/content/portfolio";

export default function Practice() {
  return (
    <section className="practice container" aria-labelledby="practice-title">
      <div className="practice-head will-reveal" data-reveal="wipe">
        <div><p className="eyebrow">ENGINEERING IN PRACTICE</p><h2 id="practice-title" className="section-title">AI engineering.<br /><span className="serif-accent">From problem to product.</span></h2></div>
        <p className="section-side">{person.name}’s case studies connect each system to the problem, the architecture, and the outcome it supports.</p>
      </div>
      <div className="practice-grid">
        {projects.map((project) => (
          <article key={project.slug} className="practice-item will-reveal" data-reveal="wipe">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p className="practice-built"><strong>Built with:</strong> {project.technologies.join(", ")}.</p>
            <Link href={`/projects/${project.slug}`} className="text-link">Explore architecture and outcome →</Link>
          </article>
        ))}
      </div>
    </section>
  );
}
