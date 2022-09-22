import React from "react";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineShopping,
} from "react-icons/ai";

const SideBarShoppingCart = () => {
  return (
    <section className="fixed inset-0 flex h-screen w-screen justify-end bg-gray-300">
      <div className="w-96 bg-white">
        <div>
          <div className="flex space-x-3 px-3 py-5 text-xl">
            <AiOutlineShopping className="text-2xl" />
            <p>3 item</p>
          </div>
          <hr />
          <>
            <div>
              <div className="my-5 flex items-center justify-between px-3">
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
                <div className="">X</div>
              </div>
              <hr />
            </div>
            <div>
              <div className="my-5 flex items-center justify-between px-3">
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
                <div className="">X</div>
              </div>
              <hr />
            </div>
          </>
        </div>
      </div>
    </section>
  );
};

export default SideBarShoppingCart;
