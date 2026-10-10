import SiteHeader from "@/components/SiteHeader";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Achievements from "@/components/Achievements";
import Stack from "@/components/Stack";
import Contact from "@/components/Contact";
import SiteFooter from "@/components/SiteFooter";
import QuoteBand from "@/components/QuoteBand";

export default function LocalePage() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <Hero />
        <About />
        <QuoteBand quoteKey="primary" />
        <Projects />
        <QuoteBand quoteKey="intelligence" />
        <Achievements />
        <Stack />
        <QuoteBand quoteKey="workingIdea" />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
