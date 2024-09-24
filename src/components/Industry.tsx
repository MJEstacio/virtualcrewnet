"use client";

import { industryList, industryForImpaired } from "@/app/api/data";
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-10 px-3 md:px-5 ">
          {industryList.map((item, index) => (
            <div
              className={`${
                show === item.industry ? "" : "max-h-[80px]"
              } px-5 shadow bg-gray-100 border-b-2 border-black ease-in-out  relative cursor-pointer mb-5 `}
              key={index}
              onClick={toggleShow(item.industry)}
            >
              <div className="flex justify-between items-center pb-3 pt-5">
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
        <div>
          <div>
            <h4 className="text-center font-semibold text-2xl mb-5">
              We also provide services for Blind and Visually Impaired Clients
            </h4>
            <p className="text-gray-600 px-2 text-sm">
              VirtualCrew.Net is dedicated to empowering blind and visually
              impaired clients by providing tailored virtual services that
              enhance accessibility, productivity, and independence. Our team
              offers personalized support, leveraging cutting-edge technology
              and a deep understanding of accessibility tools to help clients
              navigate the digital world with confidence. We assist in
              day-to-day tasks, business management, and personal development,
              ensuring that every client has the resources they need to achieve
              their goals and live a more fulfilling life.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-10 px-3 md:px-5 ">
            {industryForImpaired.map((item, index) => (
              <div
                className={`${
                  show === item.industry ? "" : "max-h-[80px]"
                } px-5 shadow bg-gray-100 border-b-2 border-black ease-in-out  relative cursor-pointer  `}
                key={index}
                onClick={toggleShow(item.industry)}
              >
                <div className="flex justify-between items-center pb-2 pt-5 ">
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
          <p className="text-gray-600 mb-10 text-sm px-2">
            By offering these comprehensive services, VirtualCrew.Net ensures
            that blind and visually impaired clients can overcome barriers,
            achieve their goals, and fully participate in the digital world with
            confidence and independence.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Industry;
