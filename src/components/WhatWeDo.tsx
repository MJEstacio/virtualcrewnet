"use client";
import { motion } from "framer-motion";
const WhatWeDo = () => {
  return (
    <section className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl font-bold text-center montserrat mb-8"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
        >
          What We Do
        </motion.h2>
        <div className="w-36 h-[2px] bg-white my-8 mx-auto"></div>
        {/* <h3 className="text-3xl font-bold text-center montserrat mb-10">
          Unlock Your Full Potential with VirtualCrew.net!
        </h3> */}
        <p className="leading-loose text-left px-5 text-lg mb-5">
          Unlock Your Full Potential with VirtualCrew.net!
        </p>

        <p className="leading-loose text-justify px-5 text-lg mb-5">
          Are you ready to transform your dreams into reality? Look no further
          than <span className="font-semibold">VirtualCrew.net</span>, your
          ultimate partner in productivity and progress!
        </p>
        <p className="leading-loose text-justify px-5 text-lg mb-5">
          At <span className="font-semibold">VirtualCrew.net</span>, we
          understand that time is your most precious asset. That&apos;s why
          we&apos;re here to empower you to focus on what truly matters. Whether
          you&apos;re a budding entrepreneur with a groundbreaking vision or a
          seasoned professional looking to streamline your daily operations,
          we&apos;ve got you covered!
        </p>
        <p className="leading-loose text-justify px-5 text-lg mb-5">
          With our dedicated team of skilled virtual assistants, project
          managers, and specialists, we offer unparalleled support tailored to
          your unique needs. From tackling ambitious dream projects to
          efficiently handling mundane tasks that bog you down, we&apos;re your
          trusted allies every step of the way.
        </p>
        <p className="leading-loose text-justify px-5 text-lg mb-5">
          <span className="italic">Picture this:</span> We can work on your
          dream project and move it forward faster than you ever thought
          possible. Our expertise and dedication will propel your aspirations to
          new heights, turning your vision into tangible results with remarkable
          speed and precision. Meanwhile, let us alleviate the burden of those
          time-consuming daily tasks that seem to eat up all your time. Imagine
          reclaiming those precious hours and channeling them towards what truly
          drives you.
        </p>
        <p className="leading-loose text-justify px-5 text-lg mb-5">
          Why settle for mediocrity when you can achieve excellence with{" "}
          <span className="font-semibold">VirtualCrew.net</span>? Join countless
          satisfied clients who have experienced the transformative power of our
          services. It&apos;s time to unleash your full potential and embrace a
          future filled with success and fulfillment.
        </p>

        <p className="leading-loose text-justify px-5 text-lg mb-5">
          Ready to embark on your journey to greatness? Partner with
          VirtualCrew.net today and witness the difference firsthand. Your
          dreams deserve to be realized, and we&apos;re here to make it happen!
        </p>
      </div>
    </section>
  );
};

export default WhatWeDo;
