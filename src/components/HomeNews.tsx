import Link from "next/link";

const HomeNews = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-2">
        <div>
          <h2 className="text-2xl font-bold ">Exciting News!</h2>
          <div className="w-36 h-[2px] bg-black my-5"></div>
          <p className="leading-8">
            We&apos;re thrilled to announce that our subscription program and
            member area will be launching soon. Get ready to unlock exclusive
            benefits, connect with like-minded individuals, and access resources
            to fuel your projects.
          </p>
        </div>
        <div className="mt-20">
          <h2 className="text-2xl font-bold">Stay Tuned</h2>
          <div className="w-36 h-[2px] bg-black my-5"></div>
          <p className="leading-8">
            Keep an eye on your inbox for exciting updates and announcements. In
            the meantime, feel free to explore our website and discover the
            possibilities that await.
          </p>
          <p className="leading-8">
            Thank you for choosing{" "}
            <Link
              href={"/"}
              className="font-semibold"
            >
              VirtualCrew.net.
            </Link>{" "}
            We can&apos;t wait to embark on this journey with you.
          </p>
          <h3 className="text-center text-3xl font-bold mt-20">
            Let&apos;s bring your vision to life.
          </h3>
        </div>
      </div>
    </section>
  );
};

export default HomeNews;
