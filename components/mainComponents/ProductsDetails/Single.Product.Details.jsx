import React from "react";
import {
  AiFillStar,
  AiOutlineHeart,
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineStar,
} from "react-icons/ai";
import { IoIosGitCompare } from "react-icons/io";

const SingleProductDetails = () => {
  return (
    <div className="space-y-7">
      <span>
        <h2 className="text-2xl">Products Name</h2>
        <h4 className="mt-1 text-2xl text-red-600/80">$ 50.5</h4>
      </span>
      <p className="flex text-lg text-yellow-500/80 ">
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiOutlineStar />
      </p>
      <p className="leading-78 text-base">
        incidunt sapiente. Exercitationem non eius fuga fugit accusantium
        quisquam commodi nulla iure corrupti ab a ex voluptate quia similique,
        vitae architecto, eveniet fugiat magni id mollitia quasi labore
        consequuntur? Magni, ea vitae odio ab exercitationem modi molestiae
        quidem inventore laborum amet dolore veniam possimus rerum cupiditate,
        eligendi minima earum iure atque. Adipisci excepturi dolor animi amet
        numquam libero ullam nam tempore, alias pariatur, ducimus quisquam omnis
        quaerat voluptates! Eligendi dolor pariatur sapiente?
      </p>
      <hr />
      {/* color and size */}
      <div className="flex items-center space-x-10">
        <div className="flex items-center space-x-2">
          <p>Color</p>
          <div className="flex items-center space-x-4">
            <p
              className={`h-4 w-4 cursor-pointer rounded-full bg-red-500 ring-2 ring-blue-600 ring-offset-2`}
            />
            <p
              className={`h-4 w-4 cursor-pointer rounded-full bg-blue-500 ring-blue-600 ring-offset-2 active:ring-2`}
            />
            <p
              className={`h-4 w-4 cursor-pointer rounded-full bg-green-500 ring-blue-600 ring-offset-2 active:ring-2`}
            />
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <p>Size</p>
          <div className="flex items-center space-x-2">
            <p className="transform bg-violet-600 px-2 py-1 text-white transition duration-500 hover:bg-violet-600">
              x
            </p>
            <p className="transform bg-slate-200 px-2 py-1 transition duration-500 hover:bg-violet-600 hover:text-white">
              M
            </p>
            <p className="transform bg-slate-200 px-2 py-1 transition duration-500 hover:bg-violet-600 hover:text-white">
              XL
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center space-x-6">
        <div className="flex items-center justify-center space-x-5 border p-2">
          <p className="cursor-pointer">
            <AiOutlineMinus />
          </p>
          <p>5</p>
          <p className="cursor-pointer">
            <AiOutlinePlus />
          </p>
        </div>
        <button className="text-l transform bg-gray-800 py-2 px-6 font-bold text-white transition duration-500 hover:bg-violet-600">
          Add to Cart
        </button>
        <span className="cursor-pointer text-xl">
          <AiOutlineHeart />
        </span>
        <span className="cursor-pointer text-xl">
          <IoIosGitCompare />
        </span>
      </div>
      <p className="text-base">Categories : women fashion</p>
    </div>
  );
};

export default SingleProductDetails;
