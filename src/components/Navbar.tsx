"use client";

import Link from "next/link";
import Logo from "./Logo";
import { HiMenu } from "react-icons/hi";
import { useState } from "react";

interface navLinksProps {
  id: number;
  name: string;
  url: string;
}

const navLinks = [
  {
    id: 0,
    name: "Home",
    url: "/",
  },
  {
    id: 1,
    name: "About Us",
    url: "/about",
  },
  {
    id: 2,
    name: "Blogs",
    url: "/blogs",
  },
  {
    id: 3,
    name: "Contact",
    url: "/contact",
  },
  {
    id: 4,
    name: "Login/SignUp",
    url: "/login",
  },
];
export default function Navbar() {
  const [showNav, setShowNav] = useState(false);
  const navList = navLinks.map((link: navLinksProps) => (
    <li key={link.id}>
      <Link
        href={link.url}
        className={`uppercase font-semibold ${
          link.id === 4 ? "px-4 py-2 bg-white text-black rounded" : ""
        }`}
      >
        {link.name}
      </Link>
    </li>
  ));
  return (
    <header className="shadow-md bg-black text-white fixed top-0 left-0 w-full z-50">
      <nav className="max-w-7xl mx-auto flex justify-between py-3  montserrat px-4 lg:px-0 relative flex-col md:flex-row">
        <div>
          <Logo />
        </div>
        <HiMenu
          size={30}
          className="block md:hidden absolute right-5 top-8"
          onClick={() => setShowNav(!showNav)}
        />
        <ul
          className={`gap-5 ${
            showNav ? "flex" : "hidden"
          } flex-col md:flex-row md:flex items-center my-5`}
        >
          {navList}
        </ul>
      </nav>
    </header>
  );
}
