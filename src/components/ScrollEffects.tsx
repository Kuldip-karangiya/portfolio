"use client";

import { useEffect } from "react";

/** Reveal-on-scroll for `.will-reveal[data-reveal]` and the sticky project-card stacking. Renders nothing. */
export default function ScrollEffects() {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const targets = document.querySelectorAll<HTMLElement>(".will-reveal");
    if (reduced) { targets.forEach((t) => t.classList.add("revealed")); }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("revealed");
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.15, rootMargin: "0px 0px -6%" });
    if (!reduced) targets.forEach((target) => observer.observe(target));

    const stack = document.querySelector<HTMLElement>("[data-project-stack]");
    const steps = stack ? Array.from(stack.querySelectorAll<HTMLElement>("[data-project-step]")) : [];
    const wide = window.matchMedia("(min-width: 761px)");
    let frame = 0;
    const update = () => {
      frame = 0;
      if (!stack) return;
      const stacked = wide.matches && !reduced;
      stack.dataset.stacked = stacked ? "true" : "false";
      const top = parseFloat(getComputedStyle(stack).getPropertyValue("--stack-top")) || 110;
      steps.forEach((step, index) => {
        const card = step.querySelector<HTMLElement>("[data-project-card]");
        if (!card) return;
        const next = steps[index + 1];
        let covered = 0;
        if (stacked && next) {
          const height = card.getBoundingClientRect().height || 1;
          covered = Math.min(1, Math.max(0, 1 - (next.getBoundingClientRect().top - top) / height));
        }
        card.style.setProperty("--covered", covered.toFixed(3));
      });
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => { observer.disconnect(); window.removeEventListener("scroll", schedule); window.removeEventListener("resize", schedule); cancelAnimationFrame(frame); };
  }, []);
  return null;
}
