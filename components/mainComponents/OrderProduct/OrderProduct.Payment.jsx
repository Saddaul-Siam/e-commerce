import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { Footer, Navbar } from "../../sharedComponents";
import OrderSummaryCart from "../../subComponents/orderProduct/OrderSummaryCart";
import {
  bkash,
  cash,
  nogad,
  rocket,
  sslcommerz,
  stripe,
} from "../../../images/logo";
import { FcOk } from "react-icons/fc";

const OrderProductPayment = () => {
  const [payWith, setPayWith] = useState("bkash");
  console.log(payWith);
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
              <div className="flex w-full flex-wrap gap-5 text-base">
                <div className="flex items-center gap-2">
                  <input
                    onChange={(e) => setPayWith(e.target.value)}
                    type="radio"
                    name="payOption"
                    id="bkash"
                    value="bkash"
                    defaultChecked
                  />
                  <label
                    htmlFor="bkash"
                    className="flex cursor-pointer items-center gap-2"
                  >
                    <Image src={bkash} alt="" height="30" width="30" />
                    <span>bKash payment</span>
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    onChange={(e) => setPayWith(e.target.value)}
                    type="radio"
                    name="payOption"
                    value="stripe"
                    id="stripe"
                  />
                  <label
                    htmlFor="stripe"
                    className="flex cursor-pointer items-center gap-2"
                  >
                    <Image src={stripe} alt="" height="30" width="30" />
                    <span>Stripe</span>
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    onChange={(e) => setPayWith(e.target.value)}
                    type="radio"
                    name="payOption"
                    id="sslCommerz"
                    value="sslCommerz"
                  />
                  <label
                    htmlFor="sslCommerz"
                    className="flex cursor-pointer items-center gap-2"
                  >
                    <Image src={sslcommerz} alt="" height="30" width="100" />
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    onChange={(e) => setPayWith(e.target.value)}
                    type="radio"
                    name="payOption"
                    id="nogad"
                    value="nogad"
                  />
                  <label
                    htmlFor="nogad"
                    className="flex cursor-pointer items-center gap-2"
                  >
                    <Image src={nogad} alt="" height="25" width="60" />
                    <span>Nogad</span>
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    onChange={(e) => setPayWith(e.target.value)}
                    type="radio"
                    name="payOption"
                    id="rocket"
                    value="rocket"
                  />
                  <label
                    htmlFor="rocket"
                    className="flex cursor-pointer items-center gap-2"
                  >
                    <Image src={rocket} alt="" height="25" width="40" />
                    <span>Rocket</span>
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    onChange={(e) => setPayWith(e.target.value)}
                    type="radio"
                    name="payOption"
                    id="cash"
                    value="cash"
                  />
                  <label
                    htmlFor="cash"
                    className="flex cursor-pointer items-center gap-2"
                  >
                    <Image src={cash} alt="" height="30" width="40" />
                    <span> Cash On Delivery</span>
                  </label>
                </div>
              </div>
              <div className="">
                <h2 className="mt-10 mb-5 text-lg font-semibold text-gray-600">
                  পেমেন্ট করার নিয়মঃ
                </h2>
                {payWith === "bkash" && (
                  <ul className="space-y-3 text-base font-light text-gray-600">
                    <li>
                      <FcOk className="mr-3 inline" />
                      <span className="font-semibold text-gray-500">
                        Bkash Payment{" "}
                      </span>
                      সিলেক্ট করে কমপ্লিট পেমেন্ট বাটনে ক্লিক করলে বিকাশ পেমেন্ট
                      <span className="font-semibold text-gray-500">
                        {" "}
                        Popup{" "}
                      </span>
                      ওপেন হবে।
                    </li>
                    <li>
                      <FcOk className="mr-3 inline" />
                      আপনি যে নাম্বার থেকে পেমেন্ট করবেন সেই বিকাশ নাম্বার দিতে
                      হবে।
                    </li>
                    <li>
                      <FcOk className="mr-3 inline" />
                      বিকাশ ভেরিফিকেশন কোড পাঠাবে আপনার মোবাইলে সেটি বসাতে হবে।
                    </li>
                    <li>
                      <FcOk className="mr-3 inline" />
                      যেভাবে পেমেন্ট করবে এমাউন্ট দেখে সব কিছু ঠিক থাকলে সিন কোড
                      দিতে বলবে বিকাশ।
                    </li>
                    <li>
                      <FcOk className="mr-3 inline" />
                      <span className="font-semibold text-gray-500">
                        Confirm{" "}
                      </span>
                      এ ক্লিক করলে পেমেন্ট হয়ে যাবে, আপনার অ্যাকাউন্ট থেকে।
                    </li>
                  </ul>
                )}
                {payWith === "stripe" && (
                  <ul className="space-y-3 text-base font-light text-gray-600">
                    <li>
                      <FcOk className="mr-3 inline" />
                      Stripe on the way
                    </li>
                  </ul>
                )}
                {payWith === "sslCommerz" && (
                  <ul className="space-y-3 text-base font-light text-gray-600">
                    <li>
                      <FcOk className="mr-3 inline" />
                      <span className="font-semibold text-gray-500">
                        Proceed To Payment{" "}
                      </span>
                      বাটনে ক্লিক করো
                    </li>
                    <li>
                      <FcOk className="mr-3 inline" />
                      <span className="font-semibold text-gray-500">
                        SSL Commerz{" "}
                      </span>
                      এর একটি{" "}
                      <span className="font-semibold text-gray-500">
                        Pop Up{" "}
                      </span>
                      প্যানেল আসবে।
                    </li>
                    <li>
                      <FcOk className="mr-3 inline" />
                      সেখান থেকে
                      <span className="font-semibold text-gray-500">
                        {" "}
                        Cards, Mobile Banking Net Banking{" "}
                      </span>
                      যে কোন একটি অপশন সিলেক্ট করো।
                    </li>
                    <li>
                      <FcOk className="mr-3 inline" />
                      Cards:{" "}
                      <span className="font-semibold text-gray-500">
                        Visa, Debit, Credit & Prepaid cards
                      </span>
                    </li>
                    <li>
                      <FcOk className="mr-3 inline" />
                      Mobile banking:{" "}
                      <span className="font-semibold text-gray-500">
                        Bkash, Roket, Nagad, Mycash, Mcash, SureCash
                      </span>
                    </li>
                    <li>
                      <FcOk className="mr-3 inline" />
                      Net Banking:{" "}
                      <span className="font-semibold text-gray-500">
                        City Bank, Bank Asia, MTB, Islami bank, Brac bank
                      </span>
                    </li>
                    <li>
                      <FcOk className="mr-3 inline" />
                      পরবর্তী অপশন অনুসরণ করে পেমেন্ট কমপ্লিট করে ফেলো।
                    </li>
                  </ul>
                )}
                {payWith === "nogad" && (
                  <ul className="space-y-3 text-base font-light text-gray-600">
                    <li>
                      <FcOk className="mr-3 inline" />
                      <span className="font-semibold text-gray-500">
                        Nagad Payment{" "}
                      </span>
                      সিলেক্ট করে কমপ্লিট পেমেন্ট বাটনে ক্লিক করলে নগদ পেমেন্ট
                      <span className="font-semibold text-gray-500">
                        {" "}
                        Popup{" "}
                      </span>
                      ওপেন হবে।
                    </li>
                    <li>
                      <FcOk className="mr-3 inline" />
                      আপনি যে নাম্বার থেকে পেমেন্ট করবেন সেই নগদ নাম্বার দিতে
                      হবে।
                    </li>
                    <li>
                      <FcOk className="mr-3 inline" />
                      নগদ ভেরিফিকেশন কোড পাঠাবে আপনার মোবাইলে সেটি বসাতে হবে।
                    </li>
                    <li>
                      <FcOk className="mr-3 inline" />
                      এমাউন্ট দেখে সব কিছু ঠিক থাকলে পিন কোড দিতে বলবে নগদ
                      <span className="font-semibold text-gray-500">
                        {" "}
                        Confirm{" "}
                      </span>
                      এ ক্লিক করলে পেমেন্ট হয়ে যাবে, আপনার অ্যাকাউন্ট থেকে।
                    </li>
                    <li>
                      <FcOk className="mr-3 inline" />
                      পেমেন্ট সংক্রান্ত যেকোন জিজ্ঞাসা থাকলে আমাদের সাথে যোগাযোগ
                      করুন এই নাম্বারে 01311333277
                    </li>
                  </ul>
                )}
                {payWith === "rocket" && (
                  <ul className="space-y-3 text-base font-light text-gray-600">
                    <li>
                      <FcOk className="mr-3 inline" />
                      <span className="font-semibold text-gray-500">
                        Rocket Payment{" "}
                      </span>
                      সিলেক্ট করে কমপ্লিট পেমেন্ট বাটনে ক্লিক করলে রকেট পেমেন্ট
                      <span className="font-semibold text-gray-500">
                        {" "}
                        Popup{" "}
                      </span>
                      ওপেন হবে।
                    </li>
                    <li>
                      <FcOk className="mr-3 inline" />
                      আপনি যে নাম্বার থেকে পেমেন্ট করবেন সেই রকেট নাম্বার দিতে
                      হবে।
                    </li>
                    <li>
                      <FcOk className="mr-3 inline" />
                      রকেট ভেরিফিকেশন কোড পাঠাবে আপনার মোবাইলে সেটি বসাতে হবে।
                    </li>
                    <li>
                      <FcOk className="mr-3 inline" />
                      যেভাবে পেমেন্ট করবে এমাউন্ট দেখে সব কিছু ঠিক থাকলে সিন কোড
                      দিতে বলবে রকেট।
                    </li>
                    <li>
                      <FcOk className="mr-3 inline" />
                      <span className="font-semibold text-gray-500">
                        Confirm{" "}
                      </span>
                      এ ক্লিক করলে পেমেন্ট হয়ে যাবে, আপনার অ্যাকাউন্ট থেকে।
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
