import Link from "next/link";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import OrderSummaryCart from "./OrderSummaryCart";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Footer, Navbar } from "../../sharedComponents";
import {
  addOrderInfo,
  addOrderItems,
} from "../../../redux/reducers/order.reducer";

const OrderProductDetails = () => {
  const [allRegions, setAllRegions] = useState([]);
  const [region, setRegion] = useState("");
  const [allCity, setAllCity] = useState([]);
  const [city, setCity] = useState("");
  const [area, setArea] = useState([]);

  const router = useRouter();
  const dispatch = useDispatch();

  const { register, handleSubmit, reset } = useForm();
  const { cartItems } = useSelector((state) => state.cart);

  useEffect(() => {
    fetch("https://bdapis.herokuapp.com/api/v1.1/divisions")
      .then((res) => res.json())
      .then(({ data }) => {
        setAllRegions(data);
      });

    fetch(`https://bdapis.herokuapp.com/api/v1.1/division/${region}`)
      .then((res) => res.json())
      .then(({ data }) => {
        setAllCity(data);
      });

    const currentCity = allCity?.find((c) => c.district === city);
    setArea(currentCity);
  }, [region, allCity, city]);

  const onSubmit = (data) => {
    try {
      dispatch(addOrderInfo(data));
      dispatch(addOrderItems(cartItems));
      router.push("/payment");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-slate-200">
      <Navbar />
      <div className="container mt-32 lg:mt-[10.9rem] ">
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
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="space-y-5 rounded-md bg-white p-5 py-10">
                <h4 className="pl-5 text-lg font-medium text-gray-600">
                  Shipping Address
                </h4>
                <div className="mt-5 grid grid-cols-1 gap-5 rounded-md bg-white p-5 sm:grid-cols-2">
                  <div>
                    <label className="text-sm text-gray-600" htmlFor="name">
                      Full Name
                    </label>
                    <input
                      {...register("name", { required: true })}
                      className="h-10 w-full rounded border px-2 outline-1 focus:outline-red-500/90"
                      placeholder="Enter your full name"
                      type="text"
                      required
                      name="name"
                      id="name"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-gray-600" htmlFor="region">
                      Region
                    </label>
                    <select
                      {...register("region", { required: true })}
                      id="region"
                      name="region"
                      className="h-10 w-full cursor-pointer rounded border disabled:cursor-not-allowed"
                      placeholder="Please choose your region "
                      onChange={(e) => setRegion(e.target.value)}
                    >
                      <option value="">Please choose your region</option>
                      {allRegions.map((region, i) => (
                        <option value={region.division} key={i}>
                          {region.division}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="text-sm text-gray-600" htmlFor="phone">
                      Phone Number
                    </label>
                    <input
                      {...register("phone", { required: true })}
                      className="h-10 w-full rounded border px-2 outline-1 focus:outline-red-500/90"
                      placeholder="Please enter your phone number"
                      type="number"
                      required
                      name="phone"
                      id="phone"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-gray-600" htmlFor="city">
                      City
                    </label>
                    <select
                      id="city"
                      name="city"
                      {...register("city", { required: true })}
                      disabled={region !== "" ? false : true}
                      className="h-10 w-full cursor-pointer rounded border disabled:cursor-not-allowed"
                      placeholder="Please choose your city"
                      onChange={(e) => setCity(e.target.value)}
                    >
                      <option value="">Please choose your city</option>
                      {allCity?.map((city, i) => (
                        <option value={city.district} key={i}>
                          {city.district}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="text-sm text-gray-600" htmlFor="colony">
                      Colony / Suburb / Locality / Landmark
                    </label>
                    <input
                      {...register("colony", { required: true })}
                      className="h-10 w-full rounded border px-2 outline-1 focus:outline-red-500/90"
                      placeholder="Please enter"
                      type="text"
                      required
                      name="colony"
                      id="colony"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-gray-600" htmlFor="area">
                      Area
                    </label>
                    <select
                      {...register("area", { required: true })}
                      disabled={city !== "" ? false : true}
                      id="area"
                      name="area"
                      className="h-10 w-full cursor-pointer rounded border disabled:cursor-not-allowed"
                      placeholder="Please choose your area"
                    >
                      <option value="">Please choose your area</option>
                      {area?.upazilla?.map((up, i) => (
                        <option value={up} key={i}>
                          {up}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="text-sm text-gray-600" htmlFor="houseNo">
                      Building / House No / Floor / Street
                    </label>
                    <input
                      {...register("houseNo", { required: true })}
                      className="h-10 w-full rounded border px-2 outline-1 focus:outline-red-500/90"
                      placeholder="Please enter"
                      type="text"
                      required
                      name="houseNo"
                      id="houseNo"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-gray-600" htmlFor="address">
                      Address
                    </label>
                    <input
                      {...register("address", { required: true })}
                      className="h-10 w-full rounded border px-2 outline-1 focus:outline-red-500/90"
                      type="text"
                      required
                      name="address"
                      id="address"
                      placeholder="For Example: House# 123, Street# 123, ABC Road"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
                <span
                  onClick={() => router.push("/cart")}
                  className="w-full transform cursor-pointer border border-red-500/90 py-2 text-center text-base font-semibold text-red-500/90 transition duration-100 ease-in-out hover:bg-red-500/90 hover:text-white"
                >
                  Back to Cart
                </span>
                <button
                  type="submit"
                  className="w-full bg-red-500/90 py-2 text-base font-semibold text-white"
                >
                  Proceed to Payment
                </button>
              </div>
            </form>
          </div>

          <div className="col-span-3 lg:col-span-1">
            <OrderSummaryCart cartItems={cartItems} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default OrderProductDetails;
