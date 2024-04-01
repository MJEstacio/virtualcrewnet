import CTASection from "@/components/CTASection";
import HeroHome from "@/components/HeroHome";
import HomeFAQ from "@/components/HomeFAQ";
import Services from "@/components/Services";
import WhoWeAre from "@/components/WhoWeAre";
import { Montserrat } from "next/font/google";

export default function Home() {
  return (
    <main>
      <HeroHome />
      <WhoWeAre />
      <Services />
      <CTASection />
      <HomeFAQ />
    </main>
  );
}
