"use client";
import Image from "next/image";
import Link from "next/link";
import { AiFillFacebook, AiFillLinkedin } from "react-icons/ai";
import { FaHome, FaInstagram, FaPhoneSquare, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";

const navLinks = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "About Us",
    url: "/about",
  },
  {
    name: "Blogs",
    url: "/blogs",
  },
  {
    name: "Contact",
    url: "/contact",
  },
];
const socialIcons = [
  {
    icon: <AiFillFacebook size={25} />,
    url: "/",
  },
  {
    icon: <AiFillLinkedin size={25} />,
    url: "/",
  },
  {
    icon: <FaYoutube size={25} />,
    url: "youtube.com",
  },
  {
    icon: <FaInstagram size={25} />,
    url: "/",
  },
  {
    icon: <FaXTwitter size={25} />,
    url: "/",
  },
];

const Footer = () => {
  let year = new Date().getFullYear();
  return (
    <footer className="bg-black text-white pt-10">
      <div className="max-w-7xl mx-auto flex items-center justify-between flex-col md:flex-row px-2">
        <div>
          <Link href={"/"}>
            <Image
              src={"/Logo.jpg"}
              width={500}
              height={500}
              alt="Logo"
              className="max-w-60 mb-5 sm:mb-0"
              priority
            />
          </Link>
        </div>
        <div>
          <ul className="flex md:flex-col mb-10 md:mb-0 gap-5 md:gap-2">
            {navLinks.map(({ name, url }) => (
              <li key={name}>
                <Link
                  href={url}
                  key={name}
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-3 mb-5 md:mb-0">
          <div className="flex gap-2 items-center">
            <FaHome
              className="text-white"
              size={25}
            />
            <span>Palm Beach Gardens, Florida, United States</span>
          </div>
          <div className="flex gap-2 items-center">
            <MdOutlineEmail
              className="text-white"
              size={25}
            />
            <Link href={"mailto:info@virtualcrew.net"}>
              info@virtualcrew.net
            </Link>
          </div>
          <div className="flex gap-2 items-center">
            <FaPhoneSquare
              className="text-white"
              size={25}
            />
            <Link href={"tel:+15618188489"}>+1 561 818 8489</Link>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto border-t-2 border-gray-200 py-5 flex justify-between px-2 flex-col sm:flex-row ">
        <p className="font-semibold text-center md:text-left mb-5 md:mb-0">
          © {year} VirtualCrew.Net All rights reserved
        </p>

        <div className="flex gap-5 justify-center">
          {socialIcons.map((item, i) => (
            <a
              href={item.url}
              target="_blank"
              key={i}
              className="text-gray-100 duration-200"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
