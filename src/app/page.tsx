import CTASection from "@/components/CTASection";
import HeroHome from "@/components/HeroHome";
import HomeFAQ from "@/components/HomeFAQ";
import HomeNews from "@/components/HomeNews";
import Services from "@/components/Services";

import WhoWeAre from "@/components/WhoWeAre";
import { Toaster } from "react-hot-toast";

export default function Home() {
  return (
    <main>
      <HeroHome />
      <HomeNews />
      <WhoWeAre />
      <Services />
      <CTASection />
      <HomeFAQ />
    </main>
  );
}
