"use client";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";

const flippingTexts = [
  "Startup",
  "E-commerce",
  "Enterprise",
  "Agency",
  "SaaS",
  "Consulting",
];

export default function HeroSection() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [animate, setAnimate] = useState(false);
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

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(true);
      setTimeout(() => {
        setCurrentTextIndex(
          (prevIndex) => (prevIndex + 1) % flippingTexts.length,
        );
        setAnimate(false);
      }, 300);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-gradient-to-b from-[#05030d] via-[#0a071d] to-[#1c082b] text-white  py-40 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 gap-12 w-full px-4">
        <div className=" text-center flex flex-col justify-center max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 montserrat">
            Your Vision is Our Mission
          </h1>

          <h2 className="text-4xl md:text-5xl font-extrabold montserrat mb-5">
            <span
              className={`text-purple-400 inline-block transition-transform duration-300 ease-in-out ${
                animate ? "animate-flip-up" : ""
              }`}
            >
              {flippingTexts[currentTextIndex]}
            </span>
          </h2>
          <h2 className="text-2xl md:text-4xl font-extrabold montserrat mb-5">
            All-in-One Websites, CRM & Virtual Assistance Solutions.
          </h2>
          <p className="text-md md:text-lg mb-8">
            We go beyond web design—delivering complete digital solutions to
            help your business thrive. From powerful websites and conversion
            optimization to tailored CRM systems and virtual assistance, we
            streamline your workflow and amplify your online presence. Let’s
            build smarter, scale faster, and grow stronger—together. Let’s bring
            your visions into Life.
          </p>
          <div className="flex justify-center items-center">
            <Link href={"/contact"}>
              <button className="flex items-center gap-2 bg-[#8e2de2] hover:bg-[#a044ff] text-white font-semibold py-3 px-6 rounded-2xl shadow-lg transition duration-300 w-fit">
                Book a Discovery Call
                <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
          </div>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="relative z-10 mb-10 px-2 2xl:px-0">
            <video
              ref={videoRef}
              className="rounded w-full"
              controls
              autoPlay
              muted={muted}
            >
              <source src="/heroVid.mp4" />
            </video>
            <div className="absolute -top-3 -left-3 w-full h-full border-2 -z-[2] border-btn-primary rounded"></div>
            <div className="absolute top-3 left-3 w-full h-full border-2 -z-[2] border-btn-primary rounded"></div>
          </div>
          <div className="flex justify-center">
            <button
              onClick={() => setMuted(!muted)}
              className="py-5 text-white w-full px-10 font-semibold uppercase hover:scale-105 duration-500 bg-btn-primary hover:bg-[#a044ff] rounded-2xl"
            >
              {muted ? "Click to enable sound" : "Click to mute sound"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
