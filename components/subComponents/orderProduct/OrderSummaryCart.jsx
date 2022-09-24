import { useRouter } from "next/router";
import React from "react";

const OrderSummaryCart = () => {
  const router = useRouter();
  return (
    <div className="space-y-3 rounded-md bg-white p-4">
      <h3 className="text-xl">Order Summary</h3>
      <div className="flex justify-between text-base">
        <p className="text-gray-500 ">Subtitle</p>
        <p className="text-black ">৳ 500</p>
      </div>
      <div className="flex justify-between text-base">
        <p className="text-gray-500 ">Subtitle</p>
        <p className="text-black ">৳ 500</p>
      </div>
      <hr />
      <div className="flex justify-between text-base">
        <p className="text-base font-semibold text-gray-500 ">Total</p>
        <p className="font-semibold text-red-500/90 ">৳ 1000</p>
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
      {router.asPath === "/cart" && (
        <div>
          <button className="w-full bg-red-500/90 py-2 text-sm text-white transition duration-100 ease-in-out hover:bg-red-600">
            PROCEED TO CHECKOUT
          </button>
        </div>
      )}
    </div>
  );
};

export default OrderSummaryCart;
