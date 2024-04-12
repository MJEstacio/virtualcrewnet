import CTASection from "@/components/CTASection";
import HeroHome from "@/components/HeroHome";
import HomeFAQ from "@/components/HomeFAQ";
import HomeNews from "@/components/HomeNews";
import Services from "@/components/Services";
import ToastBtn from "@/components/Toast";
import WhoWeAre from "@/components/WhoWeAre";
import { Montserrat } from "next/font/google";
import toast, { Toaster } from "react-hot-toast";

export default function Home() {
  return (
    <main>
      <div>
        <Toaster />
      </div>
      <HeroHome />
      <div>
        <ToastBtn />
      </div>
      <HomeNews />
      <WhoWeAre />
      <Services />
      <CTASection />
      <HomeFAQ />
    </main>
  );
}
