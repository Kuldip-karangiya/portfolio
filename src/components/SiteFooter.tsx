import Link from "next/link";
import { LuArrowUp } from "react-icons/lu";
import { person } from "@/content/portfolio";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <Link className="footer-brand" href="/#top"><span className="brand-symbol" aria-hidden="true">K</span>{person.firstName}</Link>
      <span className="footer-copy">© {new Date().getFullYear()} {person.name}</span>
      <Link className="footer-top" href="/#top">Back to top <LuArrowUp size={14} /></Link>
    </footer>
  );
}
