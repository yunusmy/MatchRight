"use client";
import Link from "next/link";
import { useState } from "react";

// react icons
import { CiMenuFries } from "react-icons/ci";
import { IoIosSearch } from "react-icons/io";

const navLinkStyle =
  "before:w-0 hover:before:w-full before:bg-[#3B9DF8] before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] hover:text-[#3B9DF8] transition-all duration-300 before:left-0 cursor-pointer capitalize";

const NavBar = () => {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between w-full relative bg-white rounded-full px-[10px] py-[8px]">
      {/* Logo */}
      <Link href="/" aria-label="Home">
        <h2 className="text-2xl font-extrabold">MatchRight</h2>
      </Link>

      {/* Desktop Nav Links */}
      <ul className="items-center gap-[20px] text-[1rem] text-[#424242] md:flex hidden">
        <li className={navLinkStyle}>
          <Link href="/">Home</Link>
        </li>
        <li className={navLinkStyle}>
          <Link href="/about">About</Link>
        </li>
        <li className={navLinkStyle}>
          <Link href="/faq">Faq</Link>
        </li>
      </ul>

      {/* Action Buttons */}
      <div className="items-center gap-[10px] flex">
        <button className="py-[7px] text-[1rem] px-[16px] rounded-full capitalize hover:text-[#3B9DF8] transition-all duration-300 sm:flex hidden">
          Sign in
        </button>
        <button className="py-[7px] text-[1rem] px-[16px] rounded-full capitalize bg-[#3B9DF8] text-white hover:bg-blue-400 transition-all duration-300 sm:flex hidden">
          Sign up
        </button>

        <CiMenuFries
          className="text-[1.8rem] mr-1 text-[#424242] cursor-pointer md:hidden flex"
          onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
          aria-label="Toggle menu"
        />
      </div>

      {/* Mobile Sidebar */}
      <aside
        className={`${
          mobileSidebarOpen
            ? "translate-x-0 opacity-100 z-20"
            : "translate-x-[200px] opacity-0 z-[-1]"
        } md:hidden bg-white p-4 text-center absolute top-[65px] right-0 w-full sm:w-[50%] rounded-md transition-all duration-300`}
      >
        <div className="relative mb-5">
          <input
            className="py-1.5 pr-4 w-full pl-10 rounded-full border border-gray-200 outline-none focus:border-[#3B9DF8]"
            placeholder="Search..."
            aria-label="Search"
          />
          <IoIosSearch className="absolute top-[8px] left-3 text-gray-500 text-[1.3rem]" />
        </div>
        <ul className="items-center gap-[20px] text-[1rem] text-gray-600 flex flex-col">
          <li className={navLinkStyle}>
            <Link href="/">Home</Link>
          </li>
          <li className={navLinkStyle}>
            <Link href="/about">About</Link>
          </li>
          <li className={navLinkStyle}>
            <Link href="/faq">Faq</Link>
          </li>
        </ul>
      </aside>
    </nav>
  );
};

export default NavBar;
