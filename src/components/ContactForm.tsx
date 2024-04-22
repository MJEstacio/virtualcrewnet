"use client";

import { redirect } from "next/navigation";
import React, { useState } from "react";
import { Toaster } from "react-hot-toast";
import toast from "react-hot-toast/headless";

const notifyFail = () => {
  toast.error("Please fill up the form", { position: "top-center" });
};
const notifySuccess = () => {
  toast.success("Thank you for sending us a message!", {
    position: "top-center",
  });
};
const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.SyntheticEvent) => {
    setLoading(true);
    e.preventDefault();

    if (name === "" && email === "" && number === "" && message === "") {
      setLoading(false);
      toast.error("Please fill up the required information");
      return false;
    }

    await fetch("/api/email", {
      method: "POST",
      body: JSON.stringify({ name, email, number, message }),
    })
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        if (data) {
          setName("");
          setEmail("");
          setNumber("");
          setMessage("");
          notifySuccess();
          redirect("/contact");
        } else {
          notifyFail();
        }
      })
      .catch((err) => {
        setLoading(false);
        toast.error("Ooops! unfortunately some error has occurred.", {
          position: "top-center",
        });
      });

    return true;
  };
  return (
    <>
      <Toaster />
      <form
        className="max-w-3xl bg-white rounded shadow-md px-10 py-8 mx-auto text-black"
        onSubmit={handleSubmit}
      >
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
            name="name"
            placeholder="Name"
            className="border-b border-gray-400 outline-none"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
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
              name="email"
              placeholder="Email"
              className="border-b border-gray-400 outline-none "
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="tel"
              className="text-lg font-semibold mb-2"
            >
              Contact Number
            </label>
            <input
              type="tel"
              id="tel"
              placeholder="Number"
              className="border-b border-gray-400 outline-none"
              value={number}
              name="number"
              required
              onChange={(e) => setNumber(e.target.value)}
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
            value={message}
            required
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
        <div className="mt-5">
          {loading ? (
            <button
              type="submit"
              className="w-full px-5 py-4 bg-black text-white duration-500  shadow-md  font-bold tracking-widest uppercase montserrat hover:text-black hover:bg-white border-2 border-black"
              disabled
            >
              Sending...
            </button>
          ) : (
            <button
              type="submit"
              className="w-full px-5 py-4 bg-black text-white duration-500  shadow-md  font-bold tracking-widest uppercase montserrat hover:text-black hover:bg-white border-2 border-black"
            >
              Send Message
            </button>
          )}
        </div>
      </form>
    </>
  );
};

export default ContactForm;

// sendEmail(
//   { name, email, number, message },
//   (data) => {
//     setLoading(false);
//     if (data) {
//       toast.success("Thank you for sending a message! ");
//       setName("");
//       setEmail("");
//       setNumber("");
//       setMessage("");
//     } else {
//       toast.error("Please Try again! :(");
//     }
//   },
//   () => {
//     setLoading(false);
//     toast.error("Ooops! unfortunately some error has occurred.");
//   },
// );
