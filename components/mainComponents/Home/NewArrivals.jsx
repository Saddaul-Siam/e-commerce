import Image from "next/image";
import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { MdFiberNew } from "react-icons/md";
import { products } from "../../../data/products";

const NewArrivals = () => {
  return (
    <div className="bg-[#e6ebf1] pb-16">
      <div className="container">
        <div className="flex justify-between">
          <h2 className="pb-5 text-2xl font-bold italic text-gray-700">
            <MdFiberNew className="mr-1 inline text-red-600/90" />
            New Arrivals
          </h2>
          <a href="" className="text-sm text-gray-500">
            View all <AiOutlineArrowRight className="inline" />
          </a>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-6">
          {products.slice(0, 6).map((product, index) => (
            <div key={index} className="cursor-pointer rounded-md bg-white p-3">
              <div className="group relative">
                <Image
                  height="175"
                  width="175"
                  src={product.imageSrc}
                  alt=""
                  className="rounded-lg bg-gray-600 object-cover"
                />
                <div className="absolute top-0 left-0 hidden h-full w-full rounded-lg bg-gray-600 opacity-40 group-hover:block" />
              </div>
              <p>{product.name}</p>
              <div className="flex space-x-2 text-base font-medium">
                <p className="text-red-600/90">{product.price}</p>
                {/* Discount price */}
                <p className="text-gray-600 line-through">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewArrivals;
