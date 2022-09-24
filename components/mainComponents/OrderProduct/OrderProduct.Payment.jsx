import Link from "next/link";
import React, { useState } from "react";
import { FcOk } from "react-icons/fc";
import { Footer, Navbar } from "../../sharedComponents";
import OrderSummaryCart from "./OrderSummaryCart";
import {
  BkashPaymentDetails,
  SSLCommerzPaymentDetails,
  NagodPaymentDetails,
  RocketPaymentDetails,
  SelectPaymentOption,
} from "../../subComponents/payment";

const OrderProductPayment = () => {
  const [payWith, setPayWith] = useState("bkash");
  return (
    <div className="bg-slate-200">
      <Navbar />
      <div className="container mt-28 lg:mt-[10.9rem] ">
        <div className="flex items-center py-10">
          <Link href="/cart">
            <p className="cursor-pointer rounded-full bg-red-500/90 py-2 px-6 text-sm font-semibold text-white">
              <span className="hidden sm:block">1. Cart</span>
              <span className="sm:hidden">Cart</span>
            </p>
          </Link>
          <div className="w-20 border-t-4 border-red-500/90" />
          <Link href="/details">
            <p className="cursor-pointer rounded-full bg-red-500/90 py-2 px-6 text-sm font-semibold text-white">
              <span className="hidden sm:block">2. Details</span>
              <span className="sm:hidden">Details</span>
            </p>
          </Link>
          <div className="w-20 border-t-4 border-red-500/90" />
          <Link href="/payment">
            <p className="cursor-pointer rounded-full bg-red-500/90 py-2 px-6 text-sm font-semibold text-white">
              <span className="hidden sm:block">3. Payment</span>
              <span className="sm:hidden">Payment</span>
            </p>
          </Link>
          <div className="w-20 border-t-4 border-red-200" />
          <Link href="/review">
            <p className="cursor-pointer rounded-full bg-red-200 py-2 px-6 text-sm font-semibold text-red-500/90">
              <span className="hidden sm:block">4. Review</span>
              <span className="sm:hidden">Review</span>
            </p>
          </Link>
        </div>
        <div className="mb-10	grid grid-cols-3 gap-5">
          <div className="col-span-3 lg:col-span-2">
            <div className="space-y-5 rounded-md bg-white p-5 py-10">
              <div className="">
                <h2>Select your payment system</h2>
              </div>
              <div>
                <SelectPaymentOption setPayWith={setPayWith} />
              </div>
              <div className="">
                <h2 className="mt-10 mb-5 text-lg font-semibold text-gray-600">
                  পেমেন্ট করার নিয়মঃ
                </h2>
                {payWith === "bkash" && <BkashPaymentDetails />}
                {payWith === "sslCommerz" && <SSLCommerzPaymentDetails />}
                {payWith === "nogad" && <NagodPaymentDetails />}
                {payWith === "rocket" && <RocketPaymentDetails />}
                {payWith === "stripe" && (
                  <ul className="space-y-3 text-base font-light text-gray-600">
                    <li>
                      <FcOk className="mr-3 inline" />
                      Stripe on the way
                    </li>
                  </ul>
                )}
                {payWith === "cash" && (
                  <ul className="space-y-3 text-base font-light text-gray-600">
                    <li>
                      <FcOk className="mr-3 inline" />
                      Cash on Delivery on the way
                    </li>
                  </ul>
                )}
              </div>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
              <button className="w-full transform border border-red-500/90 py-2 text-base font-semibold text-red-500/90 transition duration-100 ease-in-out hover:bg-red-500/90 hover:text-white">
                Back to Cart
              </button>
              <button className="w-full bg-red-500/90 py-2 text-base font-semibold text-white">
                Proceed to Payment
              </button>
            </div>
          </div>

          <div className="col-span-3 lg:col-span-1">
            <OrderSummaryCart />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default OrderProductPayment;
