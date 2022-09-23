import React from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { Footer, Navbar } from "../components/sharedComponents";

const OrderCart = () => {
  return (
    <div className="bg-slate-200">
      <Navbar />
      <div className="container mt-28 lg:mt-[10.9rem]">
        <div className="flex items-center py-10">
          <p className="cursor-pointer rounded-full bg-red-500/90 py-2 px-6 text-sm font-semibold text-white">
            <span className="hidden sm:block">1. Cart</span>
            <span className="sm:hidden">Cart</span>
          </p>
          <div className="w-20 border-t-4 border-red-200" />
          <p className="cursor-pointer rounded-full bg-red-200 py-2 px-6 text-sm font-semibold text-red-500/90">
            <span className="hidden sm:block">2. Details</span>
            <span className="sm:hidden">Details</span>
          </p>
          <div className="w-20 border-t-4 border-red-200" />
          <p className="cursor-pointer rounded-full bg-red-200 py-2 px-6 text-sm font-semibold text-red-500/90">
            <span className="hidden sm:block">3. Payment</span>
            <span className="sm:hidden">Payment</span>
          </p>
          <div className="w-20 border-t-4 border-red-200" />
          <p className="cursor-pointer rounded-full bg-red-200 py-2 px-6 text-sm font-semibold text-red-500/90">
            <span className="hidden sm:block">4. Review</span>
            <span className="sm:hidden">Review</span>
          </p>
        </div>
        <div className="mb-10	grid grid-cols-3 gap-5">
          <div className="col-span-3 space-y-5 lg:col-span-2">
            <div className="flex w-full rounded-md bg-white">
              <div className="h-36 w-40">
                <img
                  className="h-full w-full object-cover object-fill"
                  src="https://bonik-react.vercel.app/assets/images/products/Automotive/1.Ford2019.png"
                  alt=""
                />
              </div>
              <div className="flex w-full flex-col justify-between p-6">
                <div className="flex w-full justify-between text-lg text-gray-600">
                  <h4>Product Name</h4>
                  <p>X</p>
                </div>
                <div className="flex w-full justify-between">
                  <p className="text-sm text-gray-500">
                    $250.00 x 1
                    <span className="text-base text-red-500/90"> $250.00</span>
                  </p>
                  <div className="flex justify-center space-x-2 text-base">
                    <span className="cursor-pointer rounded-md border border-red-500/90 p-1 text-red-500/90 hover:bg-red-500/90 hover:text-white">
                      <AiOutlineMinus />
                    </span>
                    <p>1</p>
                    <span className="cursor-pointer rounded-md border border-red-500/90 p-1 text-red-500/90 hover:bg-red-500/90 hover:text-white">
                      <AiOutlinePlus />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex w-full rounded-md bg-white">
              <div className="h-36 w-40">
                <img
                  className="h-full w-full object-cover object-fill"
                  src="https://bonik-react.vercel.app/assets/images/products/Automotive/1.Ford2019.png"
                  alt=""
                />
              </div>
              <div className="flex w-full flex-col justify-between p-6">
                <div className="flex w-full justify-between text-lg text-gray-600">
                  <h4>Product Name</h4>
                  <p>X</p>
                </div>
                <div className="flex w-full justify-between">
                  <p className="text-sm text-gray-500">
                    $250.00 x 1
                    <span className="text-base text-red-500/90"> $250.00</span>
                  </p>
                  <div className="flex justify-center space-x-2 text-base">
                    <span className="cursor-pointer rounded-md border border-red-500/90 p-1 text-red-500/90 hover:bg-red-500/90 hover:text-white">
                      <AiOutlineMinus />
                    </span>
                    <p>1</p>
                    <span className="cursor-pointer rounded-md border border-red-500/90 p-1 text-red-500/90 hover:bg-red-500/90 hover:text-white">
                      <AiOutlinePlus />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex w-full rounded-md bg-white">
              <div className="h-36 w-40">
                <img
                  className="h-full w-full object-cover object-fill"
                  src="https://bonik-react.vercel.app/assets/images/products/Automotive/1.Ford2019.png"
                  alt=""
                />
              </div>
              <div className="flex w-full flex-col justify-between p-6">
                <div className="flex w-full justify-between text-lg text-gray-600">
                  <h4>Product Name</h4>
                  <p>X</p>
                </div>
                <div className="flex w-full justify-between">
                  <p className="text-sm text-gray-500">
                    $250.00 x 1
                    <span className="text-base text-red-500/90"> $250.00</span>
                  </p>
                  <div className="flex justify-center space-x-2 text-base">
                    <span className="cursor-pointer rounded-md border border-red-500/90 p-1 text-red-500/90 hover:bg-red-500/90 hover:text-white">
                      <AiOutlineMinus />
                    </span>
                    <p>1</p>
                    <span className="cursor-pointer rounded-md border border-red-500/90 p-1 text-red-500/90 hover:bg-red-500/90 hover:text-white">
                      <AiOutlinePlus />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-3 lg:col-span-1">
            <div className="space-y-3 bg-white p-4">
              <h3 className="text-xl">Order Summary</h3>
              <div className="flex justify-between text-base">
                <p className="text-gray-500 ">Subtitle</p>
                <p className="text-black ">৳ 500</p>
              </div>
              <div className="flex justify-between text-base">
                <p className="text-gray-500 ">Subtitle</p>
                <p className="text-black ">৳ 500</p>
              </div>
              <div className="w-full">
                <input
                  type="text"
                  className="h-10 w-4/5 border px-2 focus:outline-red-500/90"
                  placeholder="Enter Voucher Code"
                />
                <button className="w-1/5 border bg-teal-500 py-2 px-2 text-white transition duration-100 ease-in-out hover:border-teal-500 hover:bg-white hover:text-teal-500">
                  APPLY
                </button>
              </div>
              <div className="flex justify-between text-base">
                <p className="text-base font-semibold text-gray-500 ">Total</p>
                <p className="font-semibold text-red-500/90 ">৳ 1000</p>
              </div>
              <div>
                <button className="w-full bg-red-500/90 py-2 text-sm text-white transition duration-100 ease-in-out hover:bg-red-600">
                  PROCEED TO CHECKOUT
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default OrderCart;
