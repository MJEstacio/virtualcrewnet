import React from "react";

export default function AboutWhoWeAre() {
  return (
    <section className="bg-black text-white py-20 px-5 lg:px-0">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-semibold montserrat text-center ">
          Who We Are
        </h2>
        <div className="w-36 h-[2px] bg-white my-5 mx-auto"></div>
        <div className="mt-10">
          <p className="leading-8 text-lg text-center">
            At <span className="font-semibold">VirtualCrew</span>, we envision a
            world where businesses of all sizes can thrive without being bogged
            down by administrative tasks. Our mission is to empower
            entrepreneurs, executives, and teams to focus on what they do best
            by providing reliable, efficient, and tailored virtual assistance
            solutions.
          </p>
        </div>
      </div>
    </section>
  );
}
