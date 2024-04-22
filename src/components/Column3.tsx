import Image from "next/image";
import React from "react";

interface OrderProps {
  order?: string;
}
const Column3 = ({ order }: OrderProps) => {
  return (
    <section className="bg-white -mt-11">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-5 border-y-2 border-slate-300 p-2 mb-10 ">
        <div className={`my-auto px-5 xl:px-0 lg:order-${order} `}>
          <h2 className="text-3xl font-semibold my-5 montserrat">Our Vision</h2>

          <p className="leading-7 mb-2">
            In today&apos;s fast-paced digital landscape, we understand the
            challenges of juggling multiple responsibilities while striving for
            excellence.
          </p>
          <p className="leading-7 mb-2">
            That&apos;s why we&apos;ve made it our goal to revolutionize the way
            you work.
          </p>
          <p className="leading-7 mb-2">
            Our vision is simple yet powerful: to be the cornerstone of your
            success, seamlessly integrating into your operations to amplify
            productivity and drive growth.
          </p>
        </div>
        <Image
          src={"/vision.jpg"}
          width={500}
          height={500}
          alt="Our Mission Image"
          className="m-auto"
        />
      </div>
    </section>
  );
};

export default Column3;
