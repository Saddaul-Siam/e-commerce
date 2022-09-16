import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { BiCategory } from "react-icons/bi";

const NavbarMenu = ({ scroll }) => {
  return (
    <div className="scroll-smooth xl:container">
      <div className="hidden lg:block">
        <div
          className={`flex h-14 items-center justify-between ${
            scroll && "hidden"
          }`}
        >
          <div className="flex cursor-pointer space-x-2 rounded bg-slate-200 px-5 py-2">
            <BiCategory className="text-2xl" />
            <p className="font-semibold text-gray-500"> Categories</p>
            <MdKeyboardArrowDown className="text-2xl text-gray-500" />
          </div>

          <div className="">
            <ul className="font-OpenSans flex space-x-10">
              <li className="cursor-pointer hover:text-red-400">Home</li>
              <li className="cursor-pointer hover:text-red-400">Pages</li>
              <li className="cursor-pointer hover:text-red-400">
                User Account
              </li>
              <li className="cursor-pointer hover:text-red-400">
                Vendor Account
              </li>
              <li className="cursor-pointer hover:text-red-400">
                Track My Order
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarMenu;
