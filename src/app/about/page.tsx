import AboutHero from "@/components/AboutHero";
import AboutMeetTheTeam from "@/components/AboutMeetTheTeam";
import AboutValues from "@/components/AboutValues";
import AboutWhoWeAre from "@/components/AboutWhoWeAre";
import Column2 from "@/components/Column2";
import Column3 from "@/components/Column3";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - VirtualCrew",
};
const AboutPage = () => {
  return (
    <main>
      <AboutHero />
      <AboutWhoWeAre />
      <Column2 />
      <Column3 order="1" />
      <AboutMeetTheTeam />
      <AboutValues />
    </main>
  );
};

export default AboutPage;
