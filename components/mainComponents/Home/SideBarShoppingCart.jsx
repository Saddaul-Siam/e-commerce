import React from "react";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineShopping,
} from "react-icons/ai";

const SideBarShoppingCart = ({ setShowProductCard }) => {
  return (
    <section className="fixed inset-0 flex h-screen w-screen justify-end bg-gray-900/60 ">
      <div className="h-screen w-96 bg-white">
        <div className="flex h-full flex-col justify-between">
          <div className="h-[90vh] overflow-y-scroll">
            <div className="">
              <div className="flex items-center justify-between py-5 pl-3 pr-8 ">
                <div className="flex space-x-3 text-xl">
                  <AiOutlineShopping className="text-2xl" />
                  <p>3 item</p>
                </div>
                <p
                  className="cursor-pointer rounded-full bg-slate-200 px-2.5 py-1 hover:bg-slate-400 hover:text-white"
                  onClick={() => setShowProductCard(false)}
                >
                  X
                </p>
              </div>
              <hr />
              <div>
                <div className="my-5 flex items-center justify-between pl-3 pr-8">
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
                <div className="my-5 flex items-center justify-between pl-3 pr-8">
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
            </div>
          </div>
          <div className="my-3 ml-3 mr-7 space-y-3">
            <button className="w-full rounded-md bg-red-600 p-2 text-sm font-semibold text-white">
              Checkout Now ($122.00)
            </button>
            <button className="w-full rounded-md border border-red-600 p-2 text-sm font-semibold text-red-600">
              View Cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SideBarShoppingCart;
