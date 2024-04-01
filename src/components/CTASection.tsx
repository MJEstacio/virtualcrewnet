import Link from "next/link";

const CTASection = () => {
  return (
    <section
      id="cta-section"
      className="min-h-[40vh] bg-black flex"
    >
      <div className="max-w-7xl mx-auto  flex justify-center flex-col gap-10 ">
        <h3 className="text-3xl font-bold   text-center text-white montserrat ">
          Lorem ipsum dolor sit amet consectetur adipisicing.
        </h3>
        <hr className="w-1/2 mx-auto " />
        <div className="flex justify-center ">
          <Link
            href={"/contact"}
            className="px-5 py-4 bg-white text-black duration-300  shadow-md  font-bold tracking-widest uppercase montserrat"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
