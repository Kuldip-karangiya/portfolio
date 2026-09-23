import type { Accent } from "@/content/portfolio";

type Props = { accent: Accent; slug: string; index: string };

/** Original, per-project SVG illustrations. Colours come from the accent tokens on the wrapper; motion from globals.css. */
function Healthcare() {
  return (
    <svg viewBox="0 0 400 300" className="art" aria-hidden="true">
      <g className="art-cards">
        <rect x="46" y="150" width="150" height="96" rx="12" className="art-card" style={{ opacity: .5 }} />
        <rect x="58" y="136" width="150" height="96" rx="12" className="art-card" style={{ opacity: .75 }} />
        <rect x="70" y="122" width="150" height="96" rx="12" className="art-card" />
        <rect x="86" y="140" width="70" height="8" rx="4" className="art-line" /><rect x="86" y="158" width="110" height="6" rx="3" className="art-line-soft" /><rect x="86" y="172" width="90" height="6" rx="3" className="art-line-soft" /><rect x="86" y="190" width="50" height="12" rx="6" className="art-pill" />
      </g>
      <path className="art-dash" d="M30 84 H120 l14-30 16 60 18-42 14 26 h40 l12-22 14 22 h110" />
      <g className="art-badge" transform="translate(262 150)"><rect width="104" height="60" rx="14" className="art-card" /><text x="52" y="27" textAnchor="middle" className="art-num">99.9%</text><text x="52" y="46" textAnchor="middle" className="art-label">UPTIME</text></g>
      <g className="art-badge art-badge-2" transform="translate(276 224)"><rect width="88" height="40" rx="12" className="art-card" /><text x="44" y="25" textAnchor="middle" className="art-label">&lt;200 ms API</text></g>
    </svg>
  );
}

function Farm() {
  return (
    <svg viewBox="0 0 400 300" className="art" aria-hidden="true">
      <circle cx="318" cy="70" r="26" className="art-sun" />
      <path className="art-cloud" d="M232 96a22 22 0 0 1 42-8 18 18 0 0 1 30 14 16 16 0 0 1-2 32H244a20 20 0 0 1-12-38z" />
      <g className="art-bubble art-bubble-1"><rect x="40" y="70" width="188" height="54" rx="18" className="art-card" /><rect x="60" y="88" width="120" height="7" rx="3.5" className="art-line" /><rect x="60" y="104" width="80" height="6" rx="3" className="art-line-soft" /></g>
      <g className="art-bubble art-bubble-2"><rect x="120" y="150" width="240" height="72" rx="18" className="art-card art-card-accent" /><rect x="140" y="168" width="150" height="7" rx="3.5" className="art-line" /><rect x="140" y="184" width="196" height="6" rx="3" className="art-line-soft" /><rect x="140" y="199" width="120" height="6" rx="3" className="art-line-soft" /></g>
      <path className="art-leaf" d="M62 250c0-40 30-64 72-64 0 42-26 68-72 64z" /><path className="art-leaf-vein" d="M66 246c18-18 34-34 60-52" />
      <g className="art-badge" transform="translate(262 240)"><rect width="104" height="40" rx="12" className="art-card" /><text x="52" y="25" textAnchor="middle" className="art-label">&lt;5 MIN REPLY</text></g>
    </svg>
  );
}

function Tiles() {
  const tiles = Array.from({ length: 12 }, (_, i) => ({ x: 40 + (i % 4) * 66, y: 54 + Math.floor(i / 4) * 66 }));
  return (
    <svg viewBox="0 0 400 300" className="art" aria-hidden="true">
      {tiles.map((t, i) => <rect key={i} x={t.x} y={t.y} width="56" height="56" rx="10" className={`art-tile ${i === 5 ? "art-tile-hit" : ""}`} style={{ animationDelay: `${i * .18}s` }} />)}
      <circle cx="322" cy="120" r="46" className="art-ring" /><circle cx="322" cy="120" r="46" className="art-ring-progress" />
      <text x="322" y="116" textAnchor="middle" className="art-num">89%</text><text x="322" y="134" textAnchor="middle" className="art-label">PRECISION</text>
      <g className="art-badge art-badge-2" transform="translate(268 196)"><rect width="108" height="40" rx="12" className="art-card" /><text x="54" y="25" textAnchor="middle" className="art-label">350 ms QUERY</text></g>
    </svg>
  );
}

function Logistics() {
  return (
    <svg viewBox="0 0 400 300" className="art" aria-hidden="true">
      <path className="art-route" d="M60 200 C 120 200, 130 100, 200 100 S 280 200, 340 200" />
      <path className="art-route art-dash" d="M60 200 C 120 200, 130 100, 200 100 S 280 200, 340 200" />
      {[[60, 200, "RFQ"], [200, 100, "VENDOR"], [340, 200, "QUOTE"]].map(([x, y, label]) => (
        <g key={String(label)} transform={`translate(${x} ${y})`} className="art-node"><circle r="26" className="art-card" /><circle r="6" className="art-dot" /><text y="48" textAnchor="middle" className="art-label">{label}</text></g>
      ))}
      <g className="art-badge" transform="translate(140 214)"><rect width="120" height="40" rx="12" className="art-card art-card-accent" /><text x="60" y="25" textAnchor="middle" className="art-label">AI DRAFT · HUMAN OK</text></g>
      <rect x="40" y="46" width="92" height="30" rx="8" className="art-card" /><rect x="52" y="58" width="68" height="6" rx="3" className="art-line" />
      <rect x="268" y="46" width="92" height="30" rx="8" className="art-card" /><rect x="280" y="58" width="68" height="6" rx="3" className="art-line" />
    </svg>
  );
}

function Talent() {
  return (
    <svg viewBox="0 0 400 300" className="art" aria-hidden="true">
      {[0, 1, 2].map((i) => (
        <g key={i} transform={`translate(52 ${52 + i * 72})`} className="art-profile" style={{ animationDelay: `${i * .25}s` }}>
          <rect width="296" height="58" rx="14" className={`art-card ${i === 0 ? "art-card-accent" : ""}`} />
          <circle cx="32" cy="29" r="16" className="art-avatar" />
          <rect x="60" y="18" width="110" height="7" rx="3.5" className="art-line" /><rect x="60" y="34" width="70" height="6" rx="3" className="art-line-soft" />
          <rect x="190" y="24" width="70" height="10" rx="5" className="art-track" /><rect x="190" y="24" width={[64, 44, 30][i]} height="10" rx="5" className="art-fill" />
          <text x="282" y="34" textAnchor="middle" className="art-num-sm">#{i + 1}</text>
        </g>
      ))}
      <g className="art-badge art-badge-2" transform="translate(240 250)"><rect width="108" height="36" rx="12" className="art-card" /><text x="54" y="23" textAnchor="middle" className="art-label">68% MATCH</text></g>
    </svg>
  );
}

const arts: Record<string, () => React.JSX.Element> = { "n1-healthcare": Healthcare, "farm-advisory": Farm, "tiles-recommendation": Tiles, "logiai-om": Logistics, "linkedin-parser": Talent };

export default function ProjectArt({ accent, slug, index }: Props) {
  const Art = arts[slug] ?? Healthcare;
  return (
    <div className={`project-visual visual-${accent}`} aria-hidden="true">
      <span className="visual-grid" />
      <Art />
      <span className="visual-index">{index}</span>
    </div>
  );
}
