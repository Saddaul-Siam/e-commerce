import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { BiCategory } from "react-icons/bi";

const AllCatagories = () => {
  const categories = [
    "Fashion",
    "Electronics",
    "Bikes",
    "Home",
    "Gifts",
    "Music",
    "Health",
    "Pets",
    "Baby",
    "Groceries",
    "Groceries",
    "Groceries",
  ];
  return (
    <div className="bg-[#e6ebf1] px-3 pb-16 xl:px-0">
      <div className="container">
        <div className="flex justify-between">
          <h2 className="pb-5 text-2xl font-bold italic text-gray-700">
            <BiCategory className="mr-1 inline text-red-600/90" />
            All Catagories
          </h2>
          <a href="" className="text-sm text-gray-500">
            View all <AiOutlineArrowRight className="inline" />
          </a>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-6">
          {categories.map((category, i) => (
            <div
              key={i}
              className="flex h-20 cursor-pointer items-center justify-center rounded-md border bg-white font-semibold text-gray-600 hover:shadow-lg"
            >
              {category}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllCatagories;
