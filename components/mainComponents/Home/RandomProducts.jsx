import React from "react";
import { AiFillThunderbolt, AiOutlineArrowRight } from "react-icons/ai";
import { ProductCard } from "../../sharedComponents";
import { products } from "../../../data/products";

const RandomProducts = () => {
  return (
    <div className="bg-[#e6ebf1] pb-16 relative">
      <div className="container">
        <div className="flex justify-between">
          <h2 className="pb-5 text-2xl font-bold italic text-gray-700">
            <AiFillThunderbolt className="mr-1 inline text-red-600/90" />
            More For You
          </h2>
          <a href="" className="text-sm text-gray-500">
            View all <AiOutlineArrowRight className="inline" />
          </a>
        </div>
        <div className="grid grid-cols-2 gap-x-3 gap-y-10 rounded-md sm:grid-cols-3 lg:grid-cols-5">
          {products.slice(0, 10).map((product, index) => (
            <ProductCard product={product} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RandomProducts;
