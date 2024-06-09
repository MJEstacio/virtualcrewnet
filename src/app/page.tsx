import CTASection from "@/components/CTASection";
import HeroHome from "@/components/HeroHome";
import HomeFAQ from "@/components/HomeFAQ";
import HomeNews from "@/components/HomeNews";
import PricingSection from "@/components/PricingSection";
import Services from "@/components/Services";

import WhatWeDo from "@/components/WhatWeDo";

export default function Home() {
  return (
    <main>
      <HeroHome />
      <HomeNews />
      <WhatWeDo />
      <PricingSection />
      <Services />
      <CTASection />
      <HomeFAQ />
    </main>
  );
}
