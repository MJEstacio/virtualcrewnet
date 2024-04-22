import Link from "next/link";
import CTA from "./CTA";

const CTASection = () => {
  return (
    <section
      id="cta-section"
      className="min-h-[40vh] bg-black flex"
    >
      <div className="max-w-7xl mx-auto  flex justify-center flex-col gap-10 px-2 lg:px-0 ">
        <h3 className="text-3xl font-bold  text-center text-white montserrat tracking-wider max-w-4xl px-2 lg:px-0 ">
          Let&apos;s turn your Dreams into Reality and bringing your Visions to
          Life!
          {/* Unlock your business&apos;s full potential. Reach out now and
          Let&apos;s start achieving your goals together! */}
        </h3>
        <hr className="w-1/2 mx-auto " />
        <div className="flex justify-center ">
          <CTA
            href="/contact"
            name="Contact Us"
            className=""
          />
        </div>
      </div>
    </section>
  );
};

export default CTASection;
