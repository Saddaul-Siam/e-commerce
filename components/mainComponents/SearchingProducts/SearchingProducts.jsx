import React, { useState } from "react";
import { BiCategory } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import { TbAdjustmentsHorizontal } from "react-icons/tb";
import { products } from "../../../data/products";
import { ProductCard } from "../../sharedComponents";
import SearchingProductsSidebarMenu from "./Searching.Products.Sidebar.Menu";
import SearchingProductsSidebar from "./Searching.Products.Sidebar";

const SearchingProducts = () => {
  const [showSidebar, setShowSidebar] = useState(null);
  return (
    <>
      <div className="container mt-40 lg:mt-56">
        <div className="mb-10 flex-1 justify-between space-y-5 rounded-md bg-white p-5 md:flex">
          <div className="text-gray-600">
            <h2 className="text-base font-semibold text-gray-800">
              Searching for “ mobile phone ”
            </h2>
            <p className="text-sm">48 results found</p>
          </div>
          <div className="flex items-center space-x-3 text-sm text-gray-600 sm:space-x-4 sm:text-base">
            <p>Short by:</p>
            <select
              name=""
              id=""
              className="h-10 rounded border border-gray-300 focus:border-red-500"
            >
              <option value="" className="">
                Best Match
              </option>
              <option value="">Date</option>
              <option value="">Price low to high</option>
              <option value="">Price high to low</option>
            </select>
            <p
              className="cursor-pointer rounded-full p-2 text-lg hover:bg-slate-200 sm:text-xl lg:hidden"
              onClick={() => setShowSidebar(true)}
            >
              <TbAdjustmentsHorizontal />
            </p>
            <div className="flex items-center space-x-1">
              <p>View:</p>
              <p className="cursor-pointer rounded-full p-2 text-lg text-red-500/90 hover:bg-slate-200 sm:text-xl">
                <BiCategory />
              </p>
              <p className="cursor-pointer rounded-full p-2 text-lg hover:bg-slate-200 sm:text-xl">
                <GiHamburgerMenu />
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-5 gap-5 px-3 xl:px-0">
          <div className="hidden sm:col-span-1 lg:block">
            <div className="rounded-md bg-white">
              <SearchingProductsSidebarMenu />
            </div>
          </div>
          <div className="col-span-5 lg:col-span-4">
            <div className="grid grid-cols-2 gap-x-2 gap-y-5 rounded-md sm:grid-cols-3 sm:gap-x-5 lg:grid-cols-4">
              {products.slice(0, 12).map((product, index) => (
                <ProductCard product={product} key={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
      {showSidebar && (
        <SearchingProductsSidebar setShowSidebar={setShowSidebar} />
      )}
    </>
  );
};

export default SearchingProducts;
