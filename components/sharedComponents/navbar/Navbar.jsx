import Image from "next/image";
import React, { useState, useEffect } from "react";
import { FiShoppingCart, FiSearch } from "react-icons/fi";
import { MdOutlineAccountCircle, MdKeyboardArrowDown } from "react-icons/md";
import { BiCategory } from "react-icons/bi";
import logo from "../../../images/logo/logo.svg";
import NavbarMenu from "../navbarMenu/NavbarMenu";
import Announcement from "../announcement/Announcement";

const Navbar = () => {
  const [scroll, setScroll] = useState(null);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 80) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    });
  }, []);
  return (
    <div className="fixed top-0 left-0 w-full transition-all duration-500 ease-out ">
      <Announcement scroll={scroll} />
      <div className="bg-white shadow-md lg:px-5 xl:px-0">
        <div className="xl:container">
          <div className="flex items-center justify-center py-4 lg:justify-between">
            <div className="hidden lg:block">
              <div className="flex items-center justify-center">
                <Image src={logo} alt="" />
                <BiCategory
                  className={`ml-3 text-2xl text-gray-500 ${
                    scroll ? "block" : "hidden"
                  }`}
                />
                <MdKeyboardArrowDown
                  className={` text-2xl text-gray-500 ${
                    scroll ? "block" : "hidden"
                  }`}
                />
              </div>
            </div>
            <div className="flex w-11/12 items-center rounded-full border px-6 py-2 hover:border-red-500 lg:w-1/2">
              <FiSearch className="inline h-4 w-4 " />
              <input
                type="text"
                className="input w-11/12 pl-4 outline-none"
                placeholder="Search and hit enter..."
              />
            </div>
            <div className="hidden space-x-5 lg:block">
              <span className="rounded-full bg-slate-200 p-2">
                <FiShoppingCart className="text- inline h-5 w-5" />
              </span>
              <span className="rounded-full bg-slate-200 p-2">
                <MdOutlineAccountCircle className="text-[#rgb(125, 135, 156)] inline h-6 w-6" />
              </span>
            </div>
          </div>
        </div>
        <NavbarMenu scroll={scroll} />
      </div>
    </div>
  );
};

export default Navbar;
