import React from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const SideBarShoppingCartItem = () => {
  return (
    <div>
      <div className="my-5 flex items-center justify-between px-4">
        <div className="flex space-x-5">
          <div className="flex flex-col items-center justify-center text-base">
            <span className="cursor-pointer rounded-full border border-red-500 p-1 text-red-500 hover:bg-red-500 hover:text-white">
              <AiOutlineMinus />
            </span>
            <p className="my-1">10</p>
            <span className="cursor-pointer rounded-full border border-red-500 p-1 text-red-500 hover:bg-red-500 hover:text-white">
              <AiOutlinePlus />
            </span>
          </div>
          <div className="">
            <img
              className="h-20 w-20"
              src="https://bonik-react.vercel.app/assets/images/products/Automotive/1.Ford2019.png"
              alt=""
            />
          </div>
          <div className="">
            <p className="text-base font-semibold text-gray-500">
              Lorem ipsum dolor,
            </p>
            <p className="text-sm text-gray-500">$250.00 x 1</p>
            <p className="font-normal text-red-500">$250.00</p>
          </div>
        </div>
        <div>
          <button className="cursor-pointer">X</button>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default SideBarShoppingCartItem;
