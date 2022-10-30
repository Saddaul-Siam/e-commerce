import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import cartBasket from "../../images/banners/cartBasket.png";
import logo from "../../images/logo/logo.svg";

const Create = () => {
  const { register, handleSubmit, reset } = useForm();
  const [loginEmail, setLoginEmail] = useState();
  const [loginPassword, setLoginPassword] = useState();

  const handleLogin = () =>
    console.log({ email: loginEmail, password: loginPassword });

  const handleCreate = (data) => {
    axios
      .post("http://localhost:5000/api/v1/vendor", { data })
      .then((response) => {
        toast(response.data.message);
      })
      .catch((err) => {
        if (err.response.data.error === "This email already exists") {
          toast(err.response.data.error);
        }
        toast(err.response.data.error.split(":")[2]);
        console.log(err.response.data);
      });
  };

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
                onChange={(e) => setLoginEmail(e.target.value)}
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
                onChange={(e) => setLoginPassword(e.target.value)}
                type="password"
                name="password"
                id="password"
                placeholder="Enter your password "
                className="h-8 rounded border border-gray-600 px-2"
              />
            </div>
            <button
              onClick={handleLogin}
              className="mt-4 rounded-md bg-red-500 py-2 px-8 text-white"
            >
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
            <form onSubmit={handleSubmit(handleCreate)}>
              <div className="space-y-3">
                <div>
                  <label
                    className="text-sm font-semibold text-gray-500/80"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    {...register("email", { required: true })}
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
                    htmlFor="contactNumber"
                  >
                    Phone Number
                  </label>
                  <input
                    {...register("contactNumber", { required: true })}
                    className="h-10 w-full rounded border px-2 outline-1 focus:outline-red-500/90"
                    placeholder="Enter your phone"
                    type="number"
                    required
                    name="contactNumber"
                    id="contactNumber"
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
                    {...register("password", { required: true })}
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
                    {...register("confirmPassword", { required: true })}
                    className="h-10 w-full rounded border px-2 outline-1 focus:outline-red-500/90"
                    placeholder="Enter your confirmPassword"
                    type="confirmPassword"
                    required
                    name="confirmPassword"
                    id="confirmPassword"
                  />
                </div>
              </div>
              <button
                // type="submit"
                className="btn mt-10 w-full border-0 bg-red-500 hover:bg-red-600"
              >
                Create Account
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Create;
