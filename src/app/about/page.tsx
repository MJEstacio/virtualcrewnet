import AboutMeetTheTeam from "@/components/AboutMeetTheTeam";
import AboutValues from "@/components/AboutValues";
import AboutWhoWeAre from "@/components/AboutWhoWeAre";
import Column2 from "@/components/Column2";
import Column3 from "@/components/Column3";

import { Metadata } from "next";
import { teams } from "@/app/api/data";
export const metadata: Metadata = {
  title: "About Us - VirtualCrew",
};
const AboutPage = () => {
  return (
    <main className="relative">
      <div className="bg-white pt-44 pb-16">
        <h2 className="text-3xl mx-auto montserrat font-bold px-5 py-10 border-t-2 border-b-2 w-fit text-center">
          Meet The VirtualCrew Team
        </h2>
      </div>

      <AboutMeetTheTeam teams={teams} />

      <Column2 />
      <Column3 order="1" />
      <AboutWhoWeAre />
      <AboutValues />
    </main>
  );
};

export default AboutPage;
