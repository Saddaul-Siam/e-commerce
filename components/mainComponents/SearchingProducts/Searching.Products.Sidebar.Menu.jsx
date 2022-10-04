import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const SearchingProductsSidebarMenu = () => {
  const brandsName = ["apple", "Realme", "Xiaomi", "Walton", "Nokia", "oppo"];
  const colors = ["Red", "Black", "Green", "Blue", "White"];

  return (
    <div className="p-3">
      {/* Related Categories */}
      <div className="">
        <h3 className="my-3 text-sm font-semibold">Related Categories:</h3>
        <ul className="space-y-1.5 text-sm">
          <li className="cursor-pointer hover:text-red-500/90">Phone Case</li>
          <li className="cursor-pointer hover:text-red-500/90">Phone Cover</li>
          <li className="cursor-pointer hover:text-red-500/90">
            Phone Charger
          </li>
          <li className="cursor-pointer hover:text-red-500/90">
            Phone Bettary
          </li>
          <li className="cursor-pointer hover:text-red-500/90">Phone Glash</li>
        </ul>
      </div>
      <hr className="my-5" />
      {/* Price Range */}
      <div className="">
        <h3 className="my-3 text-sm font-semibold">Price Range:</h3>
        <div className="flex w-full space-x-2">
          <input
            type="number"
            name="min"
            id="min"
            className="input input-bordered h-10 w-full"
            placeholder="0"
          />
          <span>-</span>
          <input
            type="number"
            name="max"
            id="max"
            className="input input-bordered h-10 w-full"
            placeholder="250"
          />
        </div>
      </div>
      <hr className="my-5" />
      {/* Brands */}
      <div className="">
        <h3 className="my-3 text-sm font-semibold">Brands:</h3>
        <div className="form-control space-y-2">
          {brandsName.map((brands, i) => (
            <label className="flex cursor-pointer items-center" key={i}>
              <input
                type="checkbox"
                className="checkbox checkbox-sm rounded-md"
              />
              <span className="label-text ml-3">{brands}</span>
            </label>
          ))}
        </div>
      </div>
      <hr className="my-5" />
      {/* on sale */}
      <div className="form-control space-y-2">
        <label className="flex cursor-pointer items-center">
          <input type="checkbox" className="checkbox checkbox-sm rounded-md" />
          <span className="label-text ml-3">On Sale</span>
        </label>
        <label className="flex cursor-pointer items-center">
          <input type="checkbox" className="checkbox checkbox-sm rounded-md" />
          <span className="label-text ml-3">In Stock</span>
        </label>
        <label className="flex cursor-pointer items-center">
          <input type="checkbox" className="checkbox checkbox-sm rounded-md" />
          <span className="label-text ml-3">Featured</span>
        </label>
      </div>
      <hr className="my-5" />
      {/* Ratings */}
      <div className="">
        <h3 className="my-3 text-sm font-semibold">Ratings:</h3>
        <div className="form-control space-y-2 ">
          <label className="flex cursor-pointer items-center">
            <input
              type="checkbox"
              className="checkbox checkbox-sm rounded-md"
            />
            <span className="label-text ml-3 flex text-xl text-yellow-500/80">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </span>
          </label>
          <label className="flex cursor-pointer items-center">
            <input
              type="checkbox"
              className="checkbox checkbox-sm rounded-md"
            />
            <span className="label-text ml-3 flex text-xl text-yellow-500/80">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </span>
          </label>
          <label className="flex cursor-pointer items-center">
            <input
              type="checkbox"
              className="checkbox checkbox-sm rounded-md"
            />
            <span className="label-text ml-3 flex text-xl text-yellow-500/80">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
              <AiOutlineStar />
            </span>
          </label>
          <label className="flex cursor-pointer items-center">
            <input
              type="checkbox"
              className="checkbox checkbox-sm rounded-md"
            />
            <span className="label-text ml-3 flex text-xl text-yellow-500/80">
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
              <AiOutlineStar />
              <AiOutlineStar />
            </span>
          </label>
          <label className="flex cursor-pointer items-center">
            <input
              type="checkbox"
              className="checkbox checkbox-sm rounded-md"
            />
            <span className="label-text ml-3 flex text-xl text-yellow-500/80">
              <AiFillStar />
              <AiOutlineStar />
              <AiOutlineStar />
              <AiOutlineStar />
              <AiOutlineStar />
            </span>
          </label>
        </div>
      </div>
      <hr className="my-5" />
      {/* Color Family */}
      <div className="">
        <h3 className="my-3 text-sm font-semibold">Color Family:</h3>
        <div className="form-control space-y-2">
          {colors.map((color, i) => (
            <label key={i} className="flex cursor-pointer items-center">
              <input
                type="checkbox"
                className="checkbox checkbox-sm rounded-md"
              />
              <span className="label-text ml-3">{color}</span>
            </label>
          ))}
        </div>
      </div>
      <hr className="my-5" />
    </div>
  );
};

export default SearchingProductsSidebarMenu;
