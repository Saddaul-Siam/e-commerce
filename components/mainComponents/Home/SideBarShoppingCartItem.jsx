import Image from "next/image";
import React from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useDispatch } from "react-redux";
import {
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} from "../../../redux/reducers/cart.reducer";

const SideBarShoppingCartItem = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <div className="my-5 flex items-center justify-between px-4">
        <div className="flex space-x-5">
          <div className="flex flex-col items-center justify-center text-base">
            <span
              onClick={() => dispatch(decrementQuantity(item.id))}
              className="cursor-pointer rounded-full border border-red-500 p-1 text-red-500 hover:bg-red-500 hover:text-white"
            >
              <AiOutlineMinus />
            </span>
            <p className="my-1">{item.quantity}</p>
            <span
              onClick={() => dispatch(incrementQuantity(item.id))}
              className="cursor-pointer rounded-full border border-red-500 p-1 text-red-500 hover:bg-red-500 hover:text-white"
            >
              <AiOutlinePlus />
            </span>
          </div>
          <div className="">
            <Image
              height="80"
              width="70"
              className="h-20 w-20"
              src={item.imageSrc}
              alt={item.imageAlt}
            />
          </div>
          <div className="">
            <p className="text-base font-semibold text-gray-500">
              {item.name.toString(0, 20) + "..."}
            </p>
            <p className="text-sm text-gray-500">
              ${item.price} x {item.cartQuantity}
            </p>
            <p className="font-normal text-red-500">
              ${parseInt(item.price) * parseInt(item.cartQuantity)}
            </p>
          </div>
        </div>
        <div>
          <button
            className="cursor-pointer"
            onClick={() => dispatch(removeFromCart(item.id))}
          >
            X
          </button>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default SideBarShoppingCartItem;
