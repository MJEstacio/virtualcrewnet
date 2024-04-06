"use client";
import { FormEvent } from "react";

const Form = () => {
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event?.currentTarget);
    const response = await fetch("/api/submit", {
      method: "POST",
      body: formData,
    });
    const data = await response.json();
    console.log(data);
  }

  return (
    <form
      onSubmit={onSubmit}
      className="max-w-2xl bg-white rounded shadow-md px-10 py-8 mx-auto"
    >
      <h2 className="text-2xl font-bold montserrat text-center">
        Contact us today and Let’s build your vision together
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

      <div className="grid grid-cols-2 gap-5 mb-5">
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
          type="submit"
          className="w-full text-white bg-black  border-2 font-bold border-black py-3 tracking-widest uppercase"
        >
          Send Message
        </button>
      </div>
    </form>
  );
};

export default Form;
