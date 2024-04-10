"use client";

import { useEffect, useRef } from "react";
import Form from "./Form";
const HeroHome = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video: any = videoRef.current;
    const handleCanPlay = () => {
      video.play().catch((error: any) => {
        console.error("Autoplay failed", error);
      });
    };
    if (video) {
      video.muted = false;
      video.addEventListener("canplay", handleCanPlay);
      return () => {
        video.removeEventListener("canplay", handleCanPlay);
      };
    }
  }, []);
  return (
    <section className="bg-gray-50 overflow-x-hidden">
      <div className="max-w-7xl mx-auto grid py-10 min-h-screen flex flex-col items-center gap-5">
        <div className="relative z-10 max-w-4xl mx-auto mb-10 mt-36 px-2 2xl:px-0 ">
          <video
            ref={videoRef}
            className="rounded w-full"
            controls
          >
            <source src="/heroVid.mp4" />
          </video>

          <div className="absolute -top-3 -left-3 w-full h-full border-2 -z-[2] border-black rounded"></div>
          <div className="absolute top-3 left-3 w-full h-full border-2 -z-[2] border-black rounded"></div>
        </div>
        <div>
          <Form />
        </div>
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
      </div>
    </section>
  );
};

export default HeroHome;
