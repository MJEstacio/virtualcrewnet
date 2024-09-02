"use client";
import Link from "next/link";
import { IoCallSharp } from "react-icons/io5";
import { AiFillMessage } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import Image from "next/image";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
const CallSection = () => {
  const [openChat, setOpenChat] = useState(true);
  const onClickChat = () => {
    setOpenChat(() => !openChat);
  };
  return (
    <section className="fixed bottom-0 left-0 w-full p-5">
      <div className="flex justify-between items-center ">
        <Link
          href={"tel:+15618188489"}
          target="_blank"
          className="rounded-full bg-green-600 p-3 "
        >
          <IoCallSharp
            size={"2rem"}
            className="relative text-white "
          />
        </Link>
        <div className="relative z-40">
          {openChat ? (
            <motion.div
              className="absolute bottom-10 left-[-19rem] flex flex-col  rounded-md shadow-lg overflow-hidden z-40 max-w-72"
              initial={{ opacity: 0 }}
              transition={{ ease: "easeIn", duration: 0.2, delay: 0.3 }}
              animate={{ opacity: 1 }}
            >
              <div className="bg-[#25D366] p-5 flex justify-between items-center">
                <div className="flex items-center gap-3 ">
                  <Image
                    src={"/islay.jpg"}
                    alt="Islay"
                    width={200}
                    height={200}
                    className="rounded-full w-10 h-10 object-cover"
                  />
                  <h4 className="text-white text-sm">Islay Rodriguez</h4>
                </div>
                <button onClick={onClickChat}>
                  <IoCloseSharp
                    className="text-white"
                    size={25}
                  />
                </button>
              </div>

              <div className="text-sm px-3 py-5 bg-white">
                <div>
                  <p className="text-sm">
                    Hello, Islay Rodriguez here. I would love to answer any
                    questions you have.
                  </p>
                  <Link
                    href={"/"}
                    className="flex items-center gap-3 bg-[#25D366] max-w-fit text-white font-semibold px-4 py-2 mx-auto my-5 rounded-full"
                  >
                    <FaWhatsapp
                      size={30}
                      className="text-white"
                    />
                    Chat on WhatsApp
                  </Link>
                </div>
              </div>
            </motion.div>
          ) : (
            ""
          )}
          <div className="rounded-full bg-green-600 p-[2px] duration-500 hover:bg-white flex items-center  justify-center relative -z-10 ">
            <button
              className="bg-green-600 rounded-full p-3"
              onClick={onClickChat}
            >
              <AiFillMessage className="relative text-white relative text-[2rem] z-20  " />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallSection;
