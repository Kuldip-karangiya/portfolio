import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Journey from "@/components/Journey";
import Practice from "@/components/Practice";
import TechMarquee from "@/components/TechMarquee";
import Ticker from "@/components/Ticker";
import Toolkit from "@/components/Toolkit";
import Work from "@/components/Work";

export default function Home() {
  return (
    <>
      <Hero />
      <Ticker />
      <Work />
      <About />
      <Toolkit />
      <TechMarquee />
      <Practice />
      <Journey />
      <Contact />
    </>
  );
}
