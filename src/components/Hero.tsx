import Image from "next/image";
import { LuArrowDown, LuDownload } from "react-icons/lu";
import SkillIcon from "./SkillIcon";
import { contact, hero, person } from "@/content/portfolio";

const shortLabel: Record<string, string> = { "LLMs (GPT-4)": "OpenAI", "Google Cloud Run": "Google Cloud" };

/** Positions each tool on a ring around the round portrait, alternating between an inner and outer radius. */
function ringStyle(index: number, total: number) {
  const angle = (-90 + (360 / total) * index) * (Math.PI / 180);
  const radius = index % 2 === 0 ? 47 : 42;
  return { left: `${50 + Math.cos(angle) * radius}%`, top: `${50 + Math.sin(angle) * radius * 0.98}%`, animationDelay: `${index * -0.9}s`, animationName: index % 2 === 0 ? "float-card" : "float-tag" };
}

export default function Hero() {
  return (
    <section id="top" className="hero container">
      <div className="hero-copy">
        <p className="eyebrow eyebrow-dash">{hero.eyebrow}</p>
        <h1 className="hero-title">
          <span className="hero-line">{hero.lines[0]}</span>
          <span className="hero-line serif-accent">{hero.lines[1]}</span>
          <span className="hero-line">{hero.lines[2]}</span>
        </h1>
        <p className="hero-intro"><span className="hero-hey">Hey, I’m <strong>{person.name}</strong>.</span><br />{hero.intro}<br />{hero.intro2}</p>
        <div className="hero-actions">
          <a className="button button-accent" href="#work">Explore my work <LuArrowDown size={16} /></a>
          <a className="button button-ghost" href={contact.resume} download>Download résumé <LuDownload size={16} /></a>
        </div>
      </div>

      <div className="hero-visual" aria-label={`Portrait of ${person.name} with the tools he works with`}>
        <div className="hero-orbits" aria-hidden="true"><i /><i /><i /></div>
        <figure className="hero-portrait">
          <Image src="/images/kuldip-portrait.jpeg" alt={`${person.name}, portrait`} width={960} height={1280} priority sizes="(max-width: 760px) 80vw, 34vw" />
        </figure>
        {hero.floatingTools.map((tool, index) => (
          <span key={tool} className="hero-tile" style={ringStyle(index, hero.floatingTools.length)} aria-hidden="true"><SkillIcon label={tool} size={22} /><small>{shortLabel[tool] ?? tool}</small></span>
        ))}
        <span className="hero-caption"><i aria-hidden="true">✦</i>{hero.caption}</span>
        <span className="hero-label">{hero.label}</span>
      </div>

      <div className="hero-foot"><span>{hero.foot}</span><a href="#work">SCROLL TO EXPLORE <LuArrowDown size={13} /></a></div>
    </section>
  );
}
