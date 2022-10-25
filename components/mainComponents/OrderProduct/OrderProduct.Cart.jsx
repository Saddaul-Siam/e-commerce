import Link from "next/link";
import React from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} from "../../../redux/reducers/cart.reducer";
import { Footer, Navbar } from "../../sharedComponents";
import OrderSummaryCart from "./OrderSummaryCart";

const OrderProductCart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  return (
    <div className="bg-slate-200">
      <div className="container mt-32 lg:mt-[10.9rem]">
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
          <div className="col-span-3 space-y-5 lg:col-span-2">
            {cartItems.map((item, index) => (
              <div key={index} className="flex w-full rounded-md bg-white">
                <div className="h-36 w-40">
                  <img
                    className="h-full w-full object-cover object-fill"
                    src={item.imageSrc}
                    alt=""
                  />
                </div>
                <div className="flex w-full flex-col justify-between p-6">
                  <div className="flex w-full justify-between text-lg text-gray-600">
                    <h4>{item.name}</h4>
                    <p
                      onClick={() => dispatch(removeFromCart(item.id))}
                      className="cursor-pointer"
                    >
                      X
                    </p>
                  </div>
                  <div className="flex w-full justify-between">
                    <p className="text-sm text-gray-500">
                      ${item.price} x 1
                      <span className="text-base text-red-500/90">
                        {" "}
                        ${item.price * item.cartQuantity}
                      </span>
                    </p>
                    <div className="flex justify-center space-x-2 text-base">
                      <span
                        onClick={() => dispatch(decrementQuantity(item.id))}
                        className="cursor-pointer rounded-md border border-red-500/90 p-1 text-red-500/90 hover:bg-red-500/90 hover:text-white"
                      >
                        <AiOutlineMinus />
                      </span>
                      <p>{item.cartQuantity}</p>
                      <span
                        onClick={() => dispatch(incrementQuantity(item.id))}
                        className="cursor-pointer rounded-md border border-red-500/90 p-1 text-red-500/90 hover:bg-red-500/90 hover:text-white"
                      >
                        <AiOutlinePlus />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="col-span-3 lg:col-span-1">
            <OrderSummaryCart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderProductCart;
