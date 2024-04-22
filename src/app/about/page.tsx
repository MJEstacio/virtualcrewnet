import AboutHero from "@/components/AboutHero";
import AboutWhoWeAre from "@/components/AboutWhoWeAre";
import Column2 from "@/components/Column2";
import Column3 from "@/components/Column3";

const AboutPage = () => {
  return (
    <main>
      <AboutHero />
      <AboutWhoWeAre />
      <Column2 />
      <Column3 order="1" />
    </main>
  );
};

export default AboutPage;
