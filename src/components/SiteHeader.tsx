"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { LuArrowUpRight } from "react-icons/lu";
import ScrollProgress from "./ScrollProgress";
import ThemeControls from "./ThemeControls";
import { person } from "@/content/portfolio";

const navItems = [["Work", "work"], ["About", "about"], ["Stack", "toolkit"], ["Experience", "experience"]] as const;

export default function SiteHeader() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActive] = useState("");
  const active = isHome ? activeSection : "";

  useEffect(() => {
    if (!isHome) return;
    const sections = ["work", "about", "toolkit", "experience", "contact"].map((id) => document.getElementById(id)).filter((el): el is HTMLElement => Boolean(el));
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible?.target.id) setActive(visible.target.id);
    }, { rootMargin: "-40% 0px -50%", threshold: [0, 0.2, 0.5] });
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [isHome]);

  useEffect(() => {
    if (!menuOpen) return;
    const close = (event: KeyboardEvent) => { if (event.key === "Escape") setMenuOpen(false); };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [menuOpen]);

  return (
    <header className="site-header">
      <ScrollProgress />
      <Link className="nav-brand" href="/#top" aria-label={`${person.firstName} home`} onClick={() => setMenuOpen(false)}>
        <span className="brand-symbol" aria-hidden="true">K</span>
        <span className="nav-brand-copy">{person.firstName}<span>{person.shortTitle}</span></span>
      </Link>
      <nav id="main-navigation" className={menuOpen ? "is-open" : ""} aria-label="Main navigation">
        {navItems.map(([label, id]) => (
          <Link key={id} href={`/#${id}`} className={active === id ? "is-active" : ""} aria-current={active === id ? "location" : undefined} onClick={() => setMenuOpen(false)}><span className="nav-indicator" aria-hidden="true" />{label}</Link>
        ))}
        <Link className="mobile-nav-contact" href="/#contact" onClick={() => setMenuOpen(false)}>Let’s talk <LuArrowUpRight size={16} /></Link>
      </nav>
      <div className="header-tools">
        <ThemeControls />
        <Link className="button button-accent nav-cta" href="/#contact">Let’s talk <LuArrowUpRight size={16} /></Link>
        <button type="button" className="menu-button" onClick={() => setMenuOpen((open) => !open)} aria-expanded={menuOpen} aria-controls="main-navigation">{menuOpen ? "Close" : "Menu"}</button>
      </div>
    </header>
  );
}
