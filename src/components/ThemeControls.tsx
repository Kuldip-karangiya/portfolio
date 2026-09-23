"use client";

import { useSyncExternalStore } from "react";
import { LuMoon, LuPause, LuPlay, LuSun } from "react-icons/lu";

type Theme = "dark" | "light";

function subscribe(callback: () => void) {
  const observer = new MutationObserver(callback);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme", "data-motion"] });
  return () => observer.disconnect();
}

export default function ThemeControls() {
  // Read the preference straight from <html> so the server render and the pre-paint script stay the source of truth.
  const theme = useSyncExternalStore(subscribe, () => (document.documentElement.dataset.theme as Theme) || "dark", () => "dark" as Theme);
  const paused = useSyncExternalStore(subscribe, () => document.documentElement.dataset.motion === "paused", () => false);

  const applyTheme = (next: Theme) => {
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem("theme", next); } catch { /* ignore */ }
  };
  const applyMotion = (next: boolean) => {
    document.documentElement.dataset.motion = next ? "paused" : "on";
    try { localStorage.setItem("motion", next ? "paused" : "on"); } catch { /* ignore */ }
  };

  return (
    <div className="nav-preferences">
      <button type="button" className="icon-button" onClick={() => applyMotion(!paused)} aria-pressed={paused} aria-label={paused ? "Resume animations" : "Pause animations"} title={paused ? "Resume animations" : "Pause animations"}>
        {paused ? <LuPlay size={15} /> : <LuPause size={15} />}
      </button>
      <div className="theme-switch" role="group" aria-label="Colour theme">
        <button type="button" className={theme === "light" ? "is-active" : ""} onClick={() => applyTheme("light")} aria-pressed={theme === "light"} aria-label="Light theme"><LuSun size={14} /></button>
        <button type="button" className={theme === "dark" ? "is-active" : ""} onClick={() => applyTheme("dark")} aria-pressed={theme === "dark"} aria-label="Dark theme"><LuMoon size={14} /></button>
      </div>
    </div>
  );
}
