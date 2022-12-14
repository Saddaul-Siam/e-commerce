import axios from "axios";
import Link from "next/link";
import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { Loading } from "../../sharedComponents";
import { useDispatch } from "react-redux";
import { addUser } from "../../../redux/reducers/auth.reducer";
import { useRouter } from "next/router";

const Login = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { register, handleSubmit, reset } = useForm();
  const [loading, setLoading] = useState(false);

  const onSubmit = (data) => {
    setLoading(true);
    axios
      .post("http://localhost:5000/api/v1/user/login", {
        data,
      })
      .then((res) => {
        if (res.data.status === "success") {
          setLoading(false);
          toast(res.data.message);
          dispatch(addUser(res.data.data.user));
          localStorage.setItem("token", res.data.data.token);
        }
        reset();
      })
      .catch((err) => {
        setLoading(false);
        toast(err.response?.data?.error);
      })
      .finally(() => {
        router.push("/");
      });
  };
  return (
    <section className="flex h-screen items-center justify-center bg-slate-100">
      <div className="w-[500px] rounded-lg bg-white px-16 py-10 shadow-sm">
        <div>
          <div className="mb-10 flex flex-col items-center justify-center space-y-1">
            <h2 className="text-xl font-semibold">Welcome To E-commerce</h2>
            <p className="text-sm">Log in with email & password</p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-3">
              <div>
                <label className="text-sm text-gray-600" htmlFor="email">
                  Email
                </label>
                <input
                  {...register("email", { required: true })}
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
                  {...register("password", { required: true })}
                  className="block h-10 w-full rounded-md border px-3"
                  placeholder="******"
                  type="password"
                  name="password"
                  id="password"
                />
              </div>
              <button
                type="submit"
                className="h-10 w-full rounded-md bg-rose-500 text-base font-semibold text-white "
              >
                Login
              </button>
            </div>
          </form>
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
              Don???t have account ?{" "}
              <Link href="/signup" passHref>
                <span className="cursor-pointer text-base font-medium text-black underline">
                  Sign Up
                </span>
              </Link>
            </p>
          </div>
        </div>
      </div>
      {loading && (
        <div className="absolute flex h-full w-full items-center justify-center bg-gray-900/40">
          <Loading />
        </div>
      )}
    </section>
  );
};

export default Login;
