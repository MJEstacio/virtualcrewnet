"use client";

import { FormEvent, useState } from "react";
import toast from "react-hot-toast/headless";

const sendEmail = async (e: FormEvent) => {
  e.preventDefault();
  // try {
  //   const res = await fetch('api/send', {
  //     body:JSON.stringify({
  //       name, email,phone,subject,message
  //     }),
  //     headers:{
  //       'content-type':'application/json'
  //     },
  //   })
  // }

  // if (response.status === 200) {
  //   setData({
  //     name: "",
  //     email: "",
  //     phone: "",
  //     message: "",
  //   });
  //   toast.success("Your message was sent successfully!");
  // }
};

const Form2 = () => {
  return (
    <form className="max-w-3xl bg-white rounded shadow-md px-10 py-8 mx-auto">
      <h2 className="text-2xl text-center font-bold montserrat text-center">
        Contact us today and Let&apos;s build your vision together!
      </h2>

      <div className="flex flex-col my-5">
        <label
          htmlFor="name"
          className="text-lg font-semibold mb-2"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          placeholder="Name"
          className="border-b border-gray-400 outline-none"
          required
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
        <div className="flex flex-col">
          <label
            htmlFor="email"
            className="text-lg font-semibold mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Email"
            className="border-b border-gray-400 outline-none "
            required
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="contactNumber"
            className="text-lg font-semibold mb-2"
          >
            Contact Number
          </label>
          <input
            type="tel"
            id="tel"
            placeholder="Number"
            className="border-b border-gray-400 outline-none"
            required
          />
        </div>
      </div>
      <div className="flex flex-col my-5">
        <label
          htmlFor="subject"
          className="text-lg font-semibold mb-2"
        >
          Subject
        </label>
        <input
          type="text"
          id="subject"
          placeholder="Subject"
          className="border-b border-gray-400 outline-none"
          required
        />
      </div>
      <div>
        <label
          htmlFor="message"
          className="text-lg font-semibold mb-2"
        >
          Message
        </label>
        <textarea
          name="message"
          id="message"
          placeholder="How can we help you?"
          rows={5}
          className="w-full border px-2 py-1 outline-none mt-3 resize-none"
          required
        ></textarea>
      </div>
      <div className="mt-5">
        <button
          onClick={sendEmail}
          type="submit"
          className="w-full px-5 py-4 bg-black text-white duration-500  shadow-md  font-bold tracking-widest uppercase montserrat hover:text-black hover:bg-white border-2 border-black"
        >
          Send Message
        </button>
      </div>
    </form>
  );
};

export default Form2;
