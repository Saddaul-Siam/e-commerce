import Image from "next/image";
import Link from "next/link";
import React from "react";
import cartBasket from "../../images/banners/cartBasket.png";
import logo from "../../images/logo/logo.svg";

const create = () => {
  return (
    <div className="h-screen w-screen bg-red-500">
      <div className="container grid h-full grid-cols-1 py-20 md:grid-cols-2">
        <div className=" justify-cente flex h-full w-full items-center">
          <h1 className="text-center text-7xl font-bold leading-tight text-white">
            Login to Siam Store <br /> Seller Center
          </h1>
        </div>
        <div className=" flex h-full w-full items-center justify-end">
          <div className=" max-w-lg rounded-2xl bg-white p-10">
            <h2 className="text-center text-3xl">Login an Account</h2>
            <p className="mt-3 text-center text-base text-gray-500">
              Welcome! Millions of Siam Store users are waiting to buy
              <br /> your product.
            </p>
            <div className="space-y-3">
              <div>
                <label
                  className="text-sm font-semibold text-gray-500/80"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="h-10 w-full rounded border px-2 outline-1 focus:outline-red-500/90"
                  placeholder="Enter your email"
                  type="email"
                  required
                  name="email"
                  id="email"
                />
              </div>
              <div>
                <label
                  className="text-sm font-semibold text-gray-500/80"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  className="h-10 w-full rounded border px-2 outline-1 focus:outline-red-500/90"
                  placeholder="Enter your password"
                  type="password"
                  required
                  name="password"
                  id="password"
                />
              </div>
            </div>
            <button className="btn mt-10 w-full border-0 bg-red-500 hover:bg-red-600">
              Login
            </button>
            <div className="divider text-xs">OR</div>
            <Link href="/vendor/create">
              <a>
                <button className="h-10 w-full rounded-md border border-red-500 text-base text-gray-600 transition duration-300 ease-in-out hover:bg-red-500 hover:text-white">
                  Create Account
                </button>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default create;
