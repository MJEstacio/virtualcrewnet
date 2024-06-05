"use client";
import Link from "next/link";
import { motion } from "framer-motion";

const HomeNews = () => {
  return (
    <section className="py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5">
        <div>
          <motion.h2
            className="text-3xl font-bold text-center "
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Exciting News!
          </motion.h2>
          <div className="w-36 h-[2px] bg-black my-5 mx-auto"></div>
          <motion.p
            className="leading-8 text-xl text-center"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.5 }}
            viewport={{ once: true }}
          >
            We&apos;re thrilled to announce that our subscription program and
            member area will be launching soon. Get ready to unlock exclusive
            benefits, connect with like-minded individuals, and access resources
            to fuel your projects.
          </motion.p>
        </div>
        <div className="mt-20">
          <motion.h2
            className="text-3xl font-bold text-center"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Stay Tuned
          </motion.h2>
          <div className="w-36 h-[2px] bg-black my-5 mx-auto"></div>
          <motion.p
            className="leading-8 text-xl mb-5 text-center"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.5 }}
            viewport={{ once: true }}
          >
            Keep an eye on your inbox for exciting updates and announcements. In
            the meantime, feel free to explore our website and discover the
            possibilities that await.
          </motion.p>
          <motion.p
            className="leading-8 text-xl text-center"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            Thank you for choosing{" "}
            <Link
              href={"/"}
              className="font-semibold"
            >
              VirtualCrew.net.
            </Link>{" "}
            We can&apos;t wait to embark on this journey with you.
          </motion.p>
          <motion.h3
            className="text-center text-3xl font-bold mt-20"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Let&apos;s bring your vision to life.
          </motion.h3>
        </div>
        {/* <TestMotion direction="">
          <h3 className="text-5xl text-center">Testing</h3>
        </TestMotion> */}
      </div>
    </section>
  );
};

export default HomeNews;
