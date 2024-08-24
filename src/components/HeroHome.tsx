"use client";

import { useEffect, useRef, useState } from "react";

import Form2 from "./Form";
import ContactForm from "./ContactForm";
import { Toaster } from "react-hot-toast";
import ToastBtn from "./Toast";
const HeroHome = () => {
  const videoRef = useRef(null);
  const [muted, setMuted] = useState(true);
  useEffect(() => {
    const video: any = videoRef.current;
    const handleCanPlay = () => {
      video.play().catch((error: any) => {
        console.error("Autoplay failed", error);
      });
    };
    if (video) {
      video.muted = true;
      video.addEventListener("canplay", handleCanPlay);
      return () => {
        video.removeEventListener("canplay", handleCanPlay);
      };
    }
  }, []);
  return (
    <section className="bg-gray-50 ">
      <div>
        <Toaster position="top-center" />
      </div>
      <div className="max-w-7xl mx-auto grid py-10 min-h-screen flex flex-col items-center gap-5">
        <div className="flex justify-center items-center flex-col  mt-36 mb-5">
          <h1 className=" text-3xl font-semibold">
            Welcome to VirtualCrew.Net
          </h1>
          <div className="w-36 h-[2px] bg-black my-3   mx-auto"></div>
          <p>Where your Vision is our Mission</p>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto mb-10  px-2 2xl:px-0 ">
          <video
            ref={videoRef}
            className="rounded w-full"
            controls
            autoPlay
            muted={muted}
          >
            <source src="/heroVid.mp4" />
          </video>

          <div className="absolute -top-3 -left-3 w-full h-full border-2 -z-[2] border-black rounded"></div>
          <div className="absolute top-3 left-3 w-full h-full border-2 -z-[2] border-black rounded"></div>
        </div>
        <div className="flex justify-center max-w-4xl mx-auto">
          <button
            onClick={() => setMuted(!muted)}
            className="py-5 bg-black text-white w-full px-10 font-semibold uppercase hover:scale-105 duration-500 hover:text-black hover:bg-white hover:ring-black ring-2"
          >
            {muted ? "Click to enable sound" : "Click to mute sound"}
          </button>
        </div>
        <div>{/* <ContactForm /> */}</div>
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
