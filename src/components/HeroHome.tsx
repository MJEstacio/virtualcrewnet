import CTA from "./CTA";
import Form from "./Form";

const HeroHome = () => {
  return (
    <section className="bg-gray-50">
      <div className="max-w-7xl mx-auto grid py-10 min-h-screen grid-cols-1 lg:grid-cols-2 items-center gap-5">
        <Form />
        {/* <div className="">
          <div>
            <p className="text-xl uppercase">Lorem ipsum dolor sit amet.</p>
            <h1 className="text-4xl font-bold">Sample Text</h1>
            <p className="text-xl text-gray-200">Lorem ipsum dolor sit amet.</p>
            <div className="my-10">
              <CTA
                href="/contact"
                name="Contact Us"
                className="border-2 border-black bg-black text-white font-semibold rounded"
              />
            </div>
          </div>
        </div> */}
        <div className="relative z-10 ">
          <video
            autoPlay
            muted
            controls
            className="rounded"
          >
            <source src="/heroVid.mp4" />
          </video>
          <div className="absolute -top-3 -left-3 w-full h-full border-2 -z-[2] border-black rounded"></div>
          <div className="absolute top-3 left-3 w-full h-full border-2 -z-[2] border-black rounded"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroHome;
