import { LuArrowDown, LuBrainCircuit, LuDatabase, LuFlaskConical, LuScanEye, LuServer } from "react-icons/lu";
import SkillIcon from "./SkillIcon";
import { focusAreas } from "@/content/portfolio";
import { isBrand } from "@/content/skills";

const layerIcons = [LuBrainCircuit, LuScanEye, LuServer, LuDatabase, LuFlaskConical];

export default function Toolkit() {
  return (
    <section id="toolkit" className="toolkit container">
      <div className="toolkit-grid">
        <div className="toolkit-intro">
          <p className="eyebrow">03 / MY TOOLKIT</p>
          <h2 className="section-title">Models to<br /><span className="serif-accent">production.</span></h2>
          <p className="section-side">From learning models to delivering dependable applications.</p>
          <a className="text-link" href="#layer-01">Explore the layers <LuArrowDown size={15} /></a>
        </div>
        <ol className="toolkit-layers">
          {focusAreas.map((area, index) => {
            const Icon = layerIcons[index];
            const brands = area.items.filter(isBrand).slice(0, 3);
            return (
              <li key={area.index} id={`layer-${area.index}`} className="toolkit-layer will-reveal" data-reveal="wipe">
                <div className="layer-head"><span className="eyebrow">{area.index} / {area.title}</span><Icon size={18} aria-hidden="true" /></div>
                <h3>{area.heading}</h3>
                <p>{area.description}</p>
                <div className="layer-tools">
                  <span className="layer-icons">{brands.map((item) => <SkillIcon key={item} label={item} size={18} />)}</span>
                  <ul className="layer-chips">{area.items.map((item) => <li key={item}>{item}</li>)}</ul>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
