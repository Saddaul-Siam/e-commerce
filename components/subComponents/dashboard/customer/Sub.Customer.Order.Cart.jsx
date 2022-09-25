import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

const SubCustomerOrderCart = () => {
  return (
    <ul className="my-3 grid grid-cols-4 rounded-md bg-white py-5 px-5 text-base font-light text-gray-600 shadow">
      <li className="text-lg text-black">1050017AS</li>
      <li>Pending</li>
      <li>Sep 25, 2022</li>
      <li className="flex justify-between">
        <span>$ 550</span>
        <span className="rounded-full p-2 text-xl transition duration-200 ease-in-out hover:bg-slate-200">
          <AiOutlineArrowRight />
        </span>
      </li>
    </ul>
  );
};

export default SubCustomerOrderCart;
