"use client";
import { MdClose } from "react-icons/md";
import Image from "next/image";
import { PiTagChevronFill } from "react-icons/pi";

const Modal = ({ closeModal, item }: any) => {
  return (
    <div className="fixed top-0 left-0  w-screen h-screen flex justify-center items-center  z-[9999999]">
      <div
        className="w-full h-full bg-black/60 absolute top-0 left-0"
        onClick={closeModal}
      ></div>
      <div className="max-w-7xl bg-white py-16 px-16 text-black relative z-10 rounded-xl shadow-2xl">
        <div className="flex gap-5">
          <div>
            <div className="relative mt-5 ">
              <Image
                src={item.img}
                alt={item.name}
                width={500}
                height={500}
                className="relative z-10 w-60 rounded"
              />
              <div className="absolute -top-2 -left-2 border rounded w-full h-full border-black"></div>
              <div className="absolute top-2 left-2 border rounded w-full h-full border-black"></div>
            </div>
            <div className="mt-5 text-center">
              <h1 className="text-2xl font-semibold montserrat">{item.name}</h1>
              <h2 className="text-gray-600 italic">{item.role}</h2>
            </div>
          </div>
          <div>
            <div className="border-y-2 border-black py-5">
              <div className="mb-8">
                <h3 className="text-xl underline pb-2">Expertise</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 px-2">
                  {item.expertise.map((skill: string) => (
                    <li
                      key={skill}
                      className="flex gap-1 items-center text-sm"
                    >
                      <PiTagChevronFill className="text-xs" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl underline pb-2">Tools</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 px-2">
                  {item.tools.map((tool: string) => (
                    <li
                      key={tool}
                      className="flex gap-1 items-center text-sm"
                    >
                      <PiTagChevronFill className="text-xs " />
                      {tool}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-5 absolute right-5 top-2">
          {/* <button
            onClick={closeModal}
            className="bg-black text-white py-2 px-5 rounded"
          >
            Close
          </button> */}
          <MdClose
            onClick={closeModal}
            className="text-2xl cursor-pointer hover:rotate-180 duration-300"
          />
        </div>
      </div>
    </div>
  );
};

export default Modal;
