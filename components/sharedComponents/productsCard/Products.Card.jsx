import React from "react";
import {
  AiFillEye,
  AiFillStar,
  AiOutlineHeart,
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineStar,
} from "react-icons/ai";
import { BsCart2 } from "react-icons/bs";

const ProductsCard = ({ product }) => {
  return (
    <>
      <div
        key={product.id}
        className="group relative w-full rounded-md bg-white"
      >
        <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-white group-hover:opacity-60 lg:aspect-none lg:h-80">
          <img
            src={product.imageSrc}
            alt={product.imageAlt}
            className="h-full w-full object-cover object-center lg:h-full lg:w-full "
          />
        </div>
        <div className="m-2 mt-4 flex justify-between">
          <div className="space-y-2">
            <h3 className="text-base font-semibold text-gray-600">
              <a href={product.href}>
                <span aria-hidden="true" className="absolute inset-0" />
                {product.name}
              </a>
            </h3>
            <p className="flex text-base text-yellow-400 ">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </p>
            <div className="flex space-x-2 text-base font-medium">
              <p className="text-red-600/90">{product.price}</p>
              {/* Discount price */}
              <p className="text-gray-600 line-through">{product.price}</p>
            </div>
          </div>
          {/* Add to Cart */}
          <div className="z-10 flex flex-col items-center justify-center text-base ">
            <span className="cursor-pointer rounded-md border border-red-500 p-1 text-red-500 hover:bg-red-500 hover:text-white">
              <AiOutlineMinus />
            </span>
            1
            <span className="cursor-pointer rounded-md border border-red-500 p-1 text-red-500 hover:bg-red-500 hover:text-white">
              <AiOutlinePlus />
            </span>
          </div>
        </div>
        {/* Card Discount */}
        <div className="absolute top-2 left-2 rounded-full bg-green-600/90 px-2 py-0.5 text-sm text-white">
          50% off
        </div>
        {/* Card Icons */}
        <div className="absolute top-1/2 left-1/2 hidden -translate-x-1/2 -translate-y-1/2 transform space-x-3 text-xl text-gray-900 group-hover:flex">
          {/* <span> */}
          <label
            htmlFor="my-modal"
            className="cursor-pointer rounded-full bg-gray-300 p-2"
          >
            <AiFillEye className="modal-button" />
          </label>
          {/* </span> */}
          <span className="cursor-pointer rounded-full bg-gray-300 p-2">
            <AiOutlineHeart className="" />
          </span>
          <span className="cursor-pointer rounded-full bg-gray-300 p-2">
            <BsCart2 className="" />
          </span>
        </div>
      </div>
      
      <div>
        <input type="checkbox" id="my-modal" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box relative">
            <label
              htmlFor="my-modal"
              className="btn btn-circle btn-sm absolute right-2 top-2"
            >
              ✕
            </label>
            <h3 className="text-lg font-bold">
              Congratulations random Internet user!
            </h3>
            <p className="py-4">
              You ve been selected for a chance to get one year of subscription
              to use Wikipedia for free!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductsCard;
