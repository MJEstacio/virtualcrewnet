"use client";

import { industryList } from "@/app/api/data";
import { useState } from "react";
import { LuChevronsRight } from "react-icons/lu";
import { FaPlus, FaMinus } from "react-icons/fa6";

const Industry = () => {
  const [show, setShow] = useState("");
  const toggleShow = (industry: any) => () => {
    setShow((show) => (show === industry ? "" : industry));
  };

  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto text-black">
        <div className="pt-20">
          <h3 className="text-3xl leading-10 text-center mb-3 border-y-2 border-gray-400 w-fit mx-auto py-5 font-semibold">
            VirtualCrew.Net <br /> Services by Industry
          </h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 py-10 px-3 md:px-5 ">
          {industryList.map((item, index) => (
            <div
              className={`${
                show === item.industry ? "" : "max-h-[54px]"
              } px-5 shadow bg-gray-100 border-b-2 border-black ease-in-out  relative cursor-pointer mb-5 `}
              key={index}
              onClick={toggleShow(item.industry)}
            >
              <div className="flex justify-between items-center py-3">
                <h4
                  className={`text-lg font-semibold ${
                    show === item.industry ? "underline" : ""
                  } `}
                >
                  {item.industry}
                </h4>
                {show === item.industry ? <FaMinus /> : <FaPlus />}
              </div>
              <p
                className={`${
                  show === item.industry ? "block" : " hidden"
                } flex flex-col gap-2 mb-5 duration-200 text-sm`}
              >
                {item.description}
              </p>
              <ul
                className={`${
                  show === item.industry ? "block" : " hidden"
                } flex flex-col gap-2 mb-5 duration-200`}
              >
                {item.content.map((list, index) => (
                  <li
                    key={index}
                    className="flex gap-2 "
                  >
                    <div>
                      <LuChevronsRight className="mt-1" />
                    </div>
                    <div className="text-sm">{list}</div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industry;
