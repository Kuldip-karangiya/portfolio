import Link from "next/link";
import { LuArrowUpRight } from "react-icons/lu";
import ProjectArt from "./ProjectArt";
import { projects } from "@/content/portfolio";

export default function Work() {
  const total = String(projects.length).padStart(2, "0");
  return (
    <section id="work" className="work container">
      <div className="section-head will-reveal" data-reveal="wipe">
        <div><p className="eyebrow">01 / SELECTED WORK</p><h2 className="section-title">Work that starts with <span className="serif-accent">the problem.</span></h2></div>
        <p className="section-side">Real problems. Reliable systems.<br />A few things I’ve helped bring to life.</p>
      </div>

      <ol className="project-stack" data-project-stack>
        {projects.map((project) => (
          <li key={project.slug} className="project-step" data-project-step>
            <article className="project-card will-reveal" data-reveal="tilt" data-project-card>
              <ProjectArt accent={project.accent} slug={project.slug} index={project.index} />
              <div className="project-body">
                <div className="project-meta"><span className="eyebrow">{project.category}</span><span className="project-counter"><strong>{project.index}</strong> / {total}</span></div>
                <h3>{project.title}</h3>
                <p className="project-tagline serif-accent">{project.tagline}</p>
                <p className="project-desc">{project.description}</p>
                <ul className="project-stats">{project.metrics.slice(0, 3).map((metric) => <li key={metric}>{metric}</li>)}</ul>
                <ul className="project-highlights">{project.contribution.slice(0, 2).map((item) => <li key={item}>{item}</li>)}</ul>
                <ul className="chip-row">{project.technologies.map((tech) => <li key={tech}>{tech}</li>)}</ul>
                <Link className="project-link" href={`/projects/${project.slug}`}>Explore project <span className="circle-arrow"><LuArrowUpRight size={16} /></span></Link>
              </div>
            </article>
          </li>
        ))}
      </ol>

      <div className="work-cta will-reveal" data-reveal="wipe">
        <p className="eyebrow">ALWAYS EXPLORING. ALWAYS BUILDING.</p>
        <a className="button button-ghost" href="#contact">Have something in mind? <LuArrowUpRight size={16} /></a>
      </div>
    </section>
  );
}
