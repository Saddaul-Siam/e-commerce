import Image from "next/image";
import Link from "next/link";
import React from "react";
import cartBasket from "../../images/banners/cartBasket.png";
import logo from "../../images/logo/logo.svg";

const create = () => {
  return (
    <div className="h-screen w-screen bg-red-500">
      <div className=" bg-white">
        <div className="container grid grid-cols-2">
          <div>
            <Image src={logo} width="100" height="" alt="" />
          </div>
          <div className="flex items-center space-x-5">
            <div>
              <label htmlFor="">Email</label> <br />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email "
                className="h-8 rounded border border-gray-600 px-2"
              />
            </div>
            <div>
              <label htmlFor="">Password</label>
              <br />
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Enter your password "
                className="h-8 rounded border border-gray-600 px-2"
              />
            </div>
            <button className="mt-4 rounded-md bg-red-500 py-2 px-8 text-white">
              Login
            </button>
          </div>
        </div>
      </div>
      <div className="container grid grid-cols-1 py-20 md:grid-cols-2">
        <div>
          <h1 className="text-7xl font-bold leading-tight text-white">
            Bangladesh&apos;s #1 <br /> Marketplace
          </h1>
          <p className="font-semibol mt-10  text-lg text-white">
            Create a Siam Store seller account in 1 minutes and reach millions
            of customers today!
          </p>
          <Image src={cartBasket} alt="" />
        </div>
        <div className=" flex h-full w-full items-center justify-end">
          <div className=" max-w-lg rounded-2xl bg-white p-10">
            <h2 className="text-center text-3xl">Create an Account</h2>
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
                  htmlFor="phone"
                >
                  Phone Number
                </label>
                <input
                  className="h-10 w-full rounded border px-2 outline-1 focus:outline-red-500/90"
                  placeholder="Enter your phone"
                  type="phone"
                  required
                  name="phone"
                  id="phone"
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
              <div>
                <label
                  className="text-sm font-semibold text-gray-500/80"
                  htmlFor="confirmPassword"
                >
                  Confirm Password
                </label>
                <input
                  className="h-10 w-full rounded border px-2 outline-1 focus:outline-red-500/90"
                  placeholder="Enter your confirmPassword"
                  type="confirmPassword"
                  required
                  name="confirmPassword"
                  id="confirmPassword"
                />
              </div>
            </div>
            <button className="btn mt-10 w-full border-0 bg-red-500 hover:bg-red-600">
              Create Account
            </button>
            {/* <div className="divider text-xs">OR</div>
            <Link href="/vendor/login">
              <a>
                <button className="w-full text-sm text-gray-600">Login</button>
              </a>
            </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default create;
