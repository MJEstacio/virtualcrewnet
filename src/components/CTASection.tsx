import CTA from "./CTA";

const CTASection = () => {
  return (
    <section
      id="cta-section"
      className="min-h-[40vh] bg-black flex"
    >
      <div className="max-w-7xl mx-auto  flex justify-center flex-col gap-10 px-2 lg:px-0 ">
        <h2 className="text-3xl text-center text-white  tracking-wider max-w-4xl px-2 lg:px-0  leading-10  ">
          Let&apos;s s bring your Visions to Life. Together,
          <br />
          We&apos;ll realize your Vision
        </h2>
        {/* Unlock your business&apos;s full potential. Reach out now and
          Let&apos;s start achieving your goals together! */}
        {/* <hr className="w-1/2 mx-auto " /> */}
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
