import SkillIcon from "./SkillIcon";
import { brandSkills } from "@/content/skills";

export default function TechMarquee() {
  const items = [...brandSkills, ...brandSkills];
  return (
    <div className="technology-marquee container" aria-labelledby="stack-marquee-title">
      <div className="marquee-head"><p className="eyebrow" id="stack-marquee-title">ONE CONNECTED STACK</p><p className="eyebrow eyebrow-muted">Data → Model → API</p></div>
      <div className="technology-track" aria-hidden="true">
        {items.map((label, index) => (
          <span key={`${label}-${index}`} className="technology-tile" style={{ "--yaw": `${((index % 5) - 2) * 6}deg`, "--tilt": `${((index % 3) - 1) * 2}deg`, animationDelay: `${(index % 7) * -0.9}s` } as React.CSSProperties}>
            <SkillIcon label={label} size={26} /><small>{label}</small>
          </span>
        ))}
      </div>
    </div>
  );
}
