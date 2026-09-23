import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { LuArrowLeft, LuArrowUpRight } from "react-icons/lu";
import ProjectArt from "@/components/ProjectArt";
import { person, projectBySlug, projects } from "@/content/portfolio";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const project = projectBySlug(slug);
  if (!project) return {};
  const title = `${project.title}: ${project.technologies.slice(0, 2).join(" & ")}`;
  return { title, description: project.description, alternates: { canonical: `/projects/${project.slug}` }, openGraph: { title: `${title} | ${person.name}`, description: project.description, url: `/projects/${project.slug}`, type: "article" } };
}

const sections = (project: NonNullable<ReturnType<typeof projectBySlug>>) => [
  { eyebrow: "MY CONTRIBUTION", title: "What I built", body: project.contribution, list: true },
  { eyebrow: "THE PROBLEM", title: "What this solves", body: [project.problem] },
  { eyebrow: "ARCHITECTURE", title: "How it works", body: [project.architecture] },
  { eyebrow: "ONE WORKFLOW", title: "From input to outcome", body: [project.workflow] },
  { eyebrow: "ENGINEERING", title: "Decisions visible in the design", body: project.decisions, list: true },
  { eyebrow: "OUTCOME & EVIDENCE", title: "What the system enables", body: [project.outcome, project.evidence] },
];

export default async function ProjectPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const project = projectBySlug(slug);
  if (!project) notFound();
  const position = projects.findIndex((item) => item.slug === project.slug);
  const next = projects[(position + 1) % projects.length];

  return (
    <article className="case container">
      <Link className="text-link case-back" href="/#work"><LuArrowLeft size={15} /> All projects</Link>
      <header className="case-head will-reveal revealed">
        <p className="eyebrow">PROJECT {project.index} / {project.category}</p>
        <h1 className="case-title">{project.title}<span className="serif-accent">.</span></h1>
        <p className="case-byline">Engineering case study by {person.name} · {project.technologies.join(" · ")}</p>
        <p className="case-tagline serif-accent">{project.tagline}</p>
        <p className="case-lede">{project.description}</p>
      </header>

      <div className="case-visual"><ProjectArt accent={project.accent} slug={project.slug} index={project.index} /></div>

      <section className="case-overview">
        <div><p className="eyebrow">PROJECT OVERVIEW</p><h2 className="section-title">Behind the <span className="serif-accent">build.</span></h2></div>
        <ol className="case-steps">{project.metrics.map((metric, index) => <li key={metric}><span>0{index + 1}</span><p>{metric}</p></li>)}</ol>
      </section>

      <section className="case-tools"><p className="eyebrow">TOOLS & TECHNOLOGIES</p><ul className="chip-row">{project.technologies.map((tech) => <li key={tech}>{tech}</li>)}</ul></section>

      {sections(project).map((block) => (
        <section key={block.eyebrow} className="case-block will-reveal" data-reveal="wipe">
          <div className="case-block-head"><p className="eyebrow">{block.eyebrow}</p><h2>{block.title}</h2></div>
          {block.list ? <ul className="case-list">{block.body.map((item) => <li key={item}>{item}</li>)}</ul> : block.body.map((item) => <p key={item}>{item}</p>)}
        </section>
      ))}

      <footer className="case-next">
        <p className="eyebrow">EXPLORE NEXT</p>
        <Link href={`/projects/${next.slug}`} className="case-next-link"><span>{next.title}</span><span className="circle-arrow"><LuArrowUpRight size={16} /></span></Link>
      </footer>
    </article>
  );
}
