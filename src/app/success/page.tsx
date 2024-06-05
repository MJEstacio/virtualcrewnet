import Link from "next/link";

const ThankYou = () => {
  return (
    <section className="">
      <div className="max-w-5xl mx-auto flex justify-center items-center min-h-screen">
        <div className="border-2 border-black p-10 shadow-lg">
          <h1 className="font-semibold text-3xl text-center">
            Thank You for using our service. One of our Virtualcrew Staff will
            reach out to you soon.
          </h1>
          <div className="flex justify-center mt-10   ">
            <Link
              href={"/"}
              className="uppercase px-10 py-4 text-2xl text-white bg-black rounded"
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
