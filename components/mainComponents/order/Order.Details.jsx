import Link from "next/link";
import React from "react";
import { Footer, Navbar } from "../../sharedComponents";

const OrderDetails = () => {
  return (
    <div className="bg-slate-200">
      <Navbar />
      <div className="container mt-28 lg:mt-[10.9rem]">
        <div className="flex items-center py-10">
          <Link href="/cart">
            <p className="cursor-pointer rounded-full bg-red-500/90 py-2 px-6 text-sm font-semibold text-white">
              <span className="hidden sm:block">1. Cart</span>
              <span className="sm:hidden">Cart</span>
            </p>
          </Link>
          <div className="w-20 border-t-4 border-red-200" />
          <Link href="/details">
            <p className="cursor-pointer rounded-full bg-red-200 py-2 px-6 text-sm font-semibold text-red-500/90">
              <span className="hidden sm:block">2. Details</span>
              <span className="sm:hidden">Details</span>
            </p>
          </Link>
          <div className="w-20 border-t-4 border-red-200" />
          <Link href="/payment">
            <p className="cursor-pointer rounded-full bg-red-200 py-2 px-6 text-sm font-semibold text-red-500/90">
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
            <div className="space-y-5 rounded-md bg-white p-5">
              <h4 className="pl-5 text-lg font-medium text-gray-600">
                Shipping Address
              </h4>
              <div className="grid grid-cols-1 gap-5 px-5 sm:grid-cols-2">
                <div>
                  <p className="text-sm text-gray-500">Full Name</p>
                  <input
                    type="text"
                    className="h-10 w-full rounded border focus:outline-red-500/90"
                  />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email Address</p>
                  <input
                    type="text"
                    className="h-10 w-full rounded border focus:outline-red-500/90"
                  />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Phone Number</p>
                  <input
                    type="text"
                    className="h-10 w-full rounded border focus:outline-red-500/90"
                  />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Company</p>
                  <input
                    type="text"
                    className="h-10 w-full rounded border focus:outline-red-500/90"
                  />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Zip Code</p>
                  <input
                    type="text"
                    className="h-10 w-full rounded border focus:outline-red-500/90"
                  />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Country</p>
                  <input
                    type="text"
                    className="h-10 w-full rounded border focus:outline-red-500/90"
                  />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Address 1</p>
                  <input
                    type="text"
                    className="h-10 w-full rounded border focus:outline-red-500/90"
                  />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Address 2</p>
                  <input
                    type="text"
                    className="h-10 w-full rounded border focus:outline-red-500/90"
                  />
                </div>
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
                <p className="text-sm text-gray-500">Email</p>
                <input
                  type="text"
                  className="h-10 w-4/5 w-full border px-2 focus:outline-red-500/90"
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

export default OrderDetails;
