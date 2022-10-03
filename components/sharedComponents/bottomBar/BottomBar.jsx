import React from "react";
import Link from "next/link";
import { MdOutlineAccountCircle } from "react-icons/md";
import { BiHomeAlt, BiCategoryAlt, BiCart } from "react-icons/bi";

const BottomBar = () => {
  return (
    <div className="fixed bottom-0 z-50 w-full bg-white lg:hidden">
      <ul className="flex text-gray-700/80">
        <Link href="/">
          <li className="flex w-full cursor-pointer flex-col items-center justify-center py-2 hover:text-red-500">
            <BiHomeAlt className="h-6 w-6" /> <p>Home</p>
          </li>
        </Link>
        <Link href="#">
          <li className="flex w-full cursor-pointer flex-col items-center justify-center py-2 hover:text-red-500">
            <BiCategoryAlt className="h-6 w-6" /> <p>Categories</p>
          </li>
        </Link>
        <Link href="/cart">
          <li className="flex w-full cursor-pointer flex-col items-center justify-center py-2 hover:text-red-500">
            <BiCart className="h-6 w-6" /> <p>Cart</p>
          </li>
        </Link>
        <Link href="/dashboard/customer/profile">
          <li className="flex w-full cursor-pointer flex-col items-center justify-center py-2 hover:text-red-500">
            <MdOutlineAccountCircle className="h-6 w-6" /> <p>Account</p>
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default BottomBar;
