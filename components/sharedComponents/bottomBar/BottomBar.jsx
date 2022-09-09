import React from "react";
import { MdOutlineAccountCircle } from "react-icons/md";
import { BiHomeAlt, BiCategoryAlt, BiCart } from "react-icons/bi";

const BottomBar = () => {
  return (
    <div className="fixed bottom-0 w-full bg-white lg:hidden ">
      <ul className="flex text-gray-700/80">
        <li className="flex w-full cursor-pointer flex-col items-center justify-center py-2 hover:text-red-500">
          <BiHomeAlt className="h-6 w-6" /> <p>Home</p>
        </li>
        <li className="flex w-full cursor-pointer flex-col items-center justify-center py-2 hover:text-red-500">
          <BiCategoryAlt className="h-6 w-6" /> <p>Categories</p>
        </li>
        <li className="flex w-full cursor-pointer flex-col items-center justify-center py-2 hover:text-red-500">
          <BiCart className="h-6 w-6" /> <p>Cart</p>
        </li>
        <li className="flex w-full cursor-pointer flex-col items-center justify-center py-2 hover:text-red-500">
          <MdOutlineAccountCircle className="h-6 w-6" /> <p>Account</p>
        </li>
      </ul>
    </div>
  );
};

export default BottomBar;
