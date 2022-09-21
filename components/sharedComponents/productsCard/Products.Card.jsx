import Link from "next/link";
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

const ProductsCard = ({ product, key }) => {
  return (
    <>
      <Link href={`product/${product.id}`}>
        <div className="relative">
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
              <span className="cursor-pointer rounded-full bg-gray-300 p-2">
                <AiFillEye className="modal-button" />
              </span>
              <span className="cursor-pointer rounded-full bg-gray-300 p-2">
                <AiOutlineHeart />
              </span>
              <span className="cursor-pointer rounded-full bg-gray-300 p-2">
                <BsCart2 />
              </span>
            </div>
          </div>
        </div>
      </Link>
      {/* <div className="hidden">
        <div className="absolute inset-0 z-10 flex h-full w-full items-center justify-center overflow-hidden bg-gray-600/10">
          <div className="h-96 w-96 bg-white ">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam,
              maxime totam ipsum veritatis ratione unde provident soluta sit
              neque autem voluptates fuga facere doloribus tempore quam
              perspiciatis eum recusandae voluptate sed, repellat delectus. Non,
              voluptatibus odio esse deleniti in omnis? Veritatis dolor facilis
              nulla reprehenderit, necessitatibus consectetur placeat
              consequatur aperiam.
            </p>
            name 1 {product.name}
          </div>
        </div>
      </div> */}
    </>
  );
};

export default ProductsCard;
