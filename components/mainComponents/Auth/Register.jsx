import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import Link from "next/link";

const Register = () => {
  return (
    <section className="flex h-screen items-center justify-center bg-slate-100">
      <div className="w-[500px] rounded-lg bg-white px-16 py-10 shadow-sm">
        <div>
          <div className="mb-10 flex flex-col items-center justify-center space-y-1">
            <h2 className="text-xl font-semibold">Create Your Account</h2>
            <p className="text-sm">Please fill all forms to continued</p>
          </div>
          <div className="space-y-3">
            <div>
              <label className="text-sm text-gray-600" htmlFor="email">
                Name
              </label>
              <input
                className="block h-10 w-full rounded-md border px-3"
                placeholder="Saddaul Siam"
                type="email"
                name="email"
                id="email"
              />
            </div>
            <div>
              <label className="text-sm text-gray-600" htmlFor="email">
                Email
              </label>
              <input
                className="block h-10 w-full rounded-md border px-3"
                placeholder="exmple@gmail.com"
                type="email"
                name="email"
                id="email"
              />
            </div>
            <div>
              <label className="text-sm text-gray-600" htmlFor="password">
                Password
              </label>
              <input
                className="block h-10 w-full rounded-md border px-3"
                placeholder="******"
                type="password"
                name="password"
                id="password"
              />
            </div>
            <div>
              <label className="text-sm text-gray-600" htmlFor="password">
                Confirm Password
              </label>
              <input
                className="block h-10 w-full rounded-md border px-3"
                placeholder="******"
                type="password"
                name="password"
                id="password"
              />
            </div>
            <div>
              <input type="checkbox" name="condition" id="condition" />
              <label
                htmlFor="condition"
                className="ml-3 cursor-pointer text-sm text-gray-500"
              >
                By signing up, you agree to{" "}
                <Link href="/">
                  <span className="font-semibold underline">
                    Terms & Condition
                  </span>
                </Link>
              </label>
            </div>
            <button className="h-10 w-full rounded-md bg-rose-500 text-base font-semibold text-white ">
              Create Account
            </button>
          </div>
        </div>
        <hr className="my-5 " />
        <div className="space-y-3">
          <div className="flex h-10 cursor-pointer items-center justify-center space-x-2 rounded-md bg-[#4285F4]">
            <span className="rounded-full bg-slate-200 p-1">
              <FcGoogle />
            </span>
            <p className="text-sm text-white">Continue with Google</p>
          </div>
          <div className="flex h-10 cursor-pointer items-center justify-center space-x-2 rounded-md bg-[#3B5998]">
            <span className="rounded-full bg-slate-200 p-1">
              <FaFacebookF className="text-[#3B5998]" />
            </span>
            <p className="text-sm text-white">Continue with Facebook</p>
          </div>
          <div className="flex justify-center">
            <p className="mt-3 text-sm text-gray-500">
              Already have account ?{" "}
              <Link href="/login">
                <span className="cursor-pointer text-base font-medium text-black underline">
                  Login
                </span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
