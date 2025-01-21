import Logo from "@/components/Logo";
import Logo2 from "@/components/Logo2";
import Link from "next/link";

const ThankYou = () => {
  return (
    <section className="">
      <div className="max-w-5xl mx-auto flex justify-center items-center mt-40 mb-20  px-2">
        <div className="border-2 border-black p-10 shadow-lg">
          <div className="flex justify-center items-center mb-10">
            <Logo />
          </div>
          <h1 className="font-semibold text-3xl text-center">
            Thank You for sending a message. One of our Virtualcrew Staff will
            contact you as soon as we can.
          </h1>
          <div className="flex justify-center mt-10   ">
            <Link
              href={"/"}
              className="uppercase px-10 py-4 text-2xl text-white bg-red-500 rounded"
            >
              Home
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThankYou;
