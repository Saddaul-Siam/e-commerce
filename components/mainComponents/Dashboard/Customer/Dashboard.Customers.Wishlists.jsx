import React from "react";
import { BsFillSuitHeartFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { products } from "../../../../data/products";
import ProductsCard from "../../../sharedComponents/productsCard/Products.Card";

const DashboardCustomersWishlists = () => {
  return (
    <div className="mb-10">
      <div className="grid grid-cols-2 gap-y-5">
        <div className="flex items-center">
          <h2 className="text-2xl font-semibold text-gray-700">
            <BsFillSuitHeartFill className="mr-3 inline text-red-500/90" />
            <span> My Wish List</span>
          </h2>
        </div>
        <div className="flex justify-end lg:hidden">
          <button className="text-2xl font-thin ">
            <GiHamburgerMenu />
          </button>
        </div>
        <div className="flex lg:justify-end">
          <button className="bg-red-200 py-2 px-4 text-sm font-semibold text-red-500">
            Add All To Cart
          </button>
        </div>
      </div>
      <div className="pt-5 ">
        <div className="bg-whit grid grid-cols-2 gap-x-3 gap-y-10 rounded-md sm:grid-cols-3 lg:grid-cols-4 ">
          {products.slice(0, 8).map((product, index) => (
            <ProductsCard product={product} key={index} />
          ))}
        </div>
        <ul className="mt-10 flex items-center justify-center space-x-1 text-gray-500">
          <li className="cursor-pointer rounded-full border border-red-500/90 p-1 pl-3 hover:bg-gray-100 hover:text-gray-700 ">
            <MdArrowBackIos className="inline" />
          </li>
          <li className="cursor-pointer rounded-full border py-2 px-3.5 leading-tight hover:border-red-500 hover:bg-gray-200 hover:text-red-500">
            1
          </li>
          <li className="cursor-pointer rounded-full border py-2 px-3.5 leading-tight hover:border-red-500 hover:bg-gray-200 hover:text-red-500">
            2
          </li>
          <li className="cursor-pointer rounded-full border py-2 px-3.5 leading-tight hover:border-red-500 hover:bg-gray-200 hover:text-red-500">
            3
          </li>
          <li className="cursor-pointer rounded-full border border-red-500/90 bg-white p-1 px-2 hover:bg-gray-100 hover:text-gray-700">
            <MdArrowForwardIos className="inline" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashboardCustomersWishlists;
