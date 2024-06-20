"use client";
import Image from "next/image";
import { useState } from "react";
import Modal from "./Modal";

const AboutTeamItem = ({ member }: any) => {
  const [openModal, setOpenModal] = useState(false);

  const handleClick = () => {
    setOpenModal(!openModal);
  };
  return (
    <div
      key={member.id}
      className="bg-white flex flex-col justify-between rounded-lg overflow-hidden"
    >
      <Image
        src={member.img}
        alt={member.name}
        width={500}
        height={500}
        className="w-full h-full object-cover"
      />
      <div className="border-t-2 py-4 px-2 bg-slate-100 text-center">
        <h3 className=" font-semibold montserrat">{member.name}</h3>
        <h4 className="text-sm italic">{member.role}</h4>
        <div className="mt-5 mb-2">
          <button
            className="bg-black text-white py-2 px-5 hover:ring-2 hover:ring-black hover:bg-white hover:text-black duration-300 font-semibold"
            onClick={handleClick}
          >
            View Info
          </button>
        </div>
      </div>
      {openModal && (
        <Modal
          item={member}
          closeModal={handleClick}
        />
      )}
    </div>
  );
};

export default AboutTeamItem;
