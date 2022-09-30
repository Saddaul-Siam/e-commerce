import { useRouter } from "next/router";
import React from "react";
import { AiOutlineShopping } from "react-icons/ai";
import SideBarShoppingCartItem from "./SideBarShoppingCartItem";

const SideBarShoppingCart = ({ setShowProductCard }) => {
  const router = useRouter();
  return (
    <section className="fixed inset-0 flex h-screen w-screen justify-between ">
      <div
        className="w-4/5 bg-gray-900/60"
        onClick={() => setShowProductCard(false)}
      />
      <div className="h-screen w-1/5 bg-white">
        <div className="flex h-full flex-col justify-between">
          <div className="h-[90vh] overflow-y-scroll">
            <div className="">
              <div className="flex items-center justify-between py-5 px-3">
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
              <SideBarShoppingCartItem />
              <SideBarShoppingCartItem />
              <SideBarShoppingCartItem />
              <SideBarShoppingCartItem />
              <SideBarShoppingCartItem />
              <SideBarShoppingCartItem />
              <SideBarShoppingCartItem />
              <SideBarShoppingCartItem />
            </div>
          </div>
          <div className="my-3 ml-3 mr-7 space-y-3">
            <button
              className="w-full rounded-md bg-red-600 p-2 text-sm font-semibold text-white"
              onClick={() => router.push("/details")}
            >
              Checkout Now ($122.00)
            </button>
            <button
              className="w-full rounded-md border border-red-600 p-2 text-sm font-semibold text-red-600"
              onClick={() => router.push("/cart")}
            >
              View Cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SideBarShoppingCart;
