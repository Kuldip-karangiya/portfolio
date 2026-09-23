import { ImageResponse } from "next/og";
import { person } from "@/content/portfolio";

export const alt = `${person.name} — ${person.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 72, background: "radial-gradient(circle at 78% 40%, #123a6b 0%, #000 50%)", color: "#f5f5f7", fontFamily: "Helvetica, Arial, sans-serif" }}>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 22, letterSpacing: 4, fontFamily: "sans-serif" }}>
          <span>{person.name.toUpperCase()}</span><span>{person.location.toUpperCase()}</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 96, lineHeight: 1, letterSpacing: -4, fontWeight: 700 }}>Systems that make</div>
          <div style={{ fontSize: 96, lineHeight: 1, letterSpacing: -4, fontWeight: 700, background: "linear-gradient(92deg, #2997ff, #8a6cff 48%, #ff5f9e)", backgroundClip: "text", color: "transparent" }}>intelligence useful.</div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 26, fontFamily: "sans-serif", color: "#a1a1a6" }}>
          <span>{person.title} · Python · FastAPI · LLMs · Google Cloud</span>
        </div>
      </div>
    ),
    size,
  );
}
