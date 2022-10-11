import { useState } from "react";
import Image from "next/image";
import { AiFillPhone, AiFillStar, AiOutlineStar } from "react-icons/ai";
import { MdLocationPin } from "react-icons/md";
import VendorShopProfile from "./Vendor.Shop.Profile";
import VendorShopAllProducts from "./Vendor.Shop.AllProducts";
import VendorShopHomePage from "./Vendor.Shop.HomePage";
import { SearchingProductsSidebar } from "../SearchingProducts";

const VendorMain = () => {
  const [selectCategory, setSelectCategory] = useState("Home Page");
  const [showSidebar, setShowSidebar] = useState(null);
  const categoriesTab = ["Home Page", "All Products", "Profile"];
  return (
    <>
      <div className="mt-[7.7rem] lg:mt-44">
        <div className="container py-10">
          {/* Banner */}
          <div className="rounded-lg bg-white">
            <div className="relative">
              {/* Banner */}
              <div>
                <Image
                  height="250"
                  width="1280"
                  className="rounded-t-lg object-cover object-center"
                  src="https://images.pexels.com/photos/1827234/pexels-photo-1827234.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />
              </div>
              {/* Logo */}
              <div className="absolute -bottom-10 left-10 h-24 w-24 rounded-full border-4 border-white">
                <Image
                  layout="fill"
                  className="rounded-full"
                  src="https://images.pexels.com/photos/176837/pexels-photo-176837.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />
              </div>
            </div>
            <div className="mx-3 flex justify-between pt-10 pb-5 md:pt-3">
              <div className="space-y-1 text-base text-gray-500 md:ml-32 lg:ml-40 ">
                <h2 className="text-xl font-semibold text-gray-600">
                  Store Name
                </h2>
                <p className="flex items-center text-yellow-500">
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiOutlineStar />
                  <span className="ml-2 text-black">(50)</span>
                </p>
                <p>
                  <MdLocationPin className="inline" /> 845 N. Stonybrook Ave.
                  Tonawanda, NY 14210, Denmark
                </p>
                <p>
                  <AiFillPhone className="inline" /> 01311333277
                </p>
              </div>
              <div className="flex items-center md:mr-10">
                <button className="rounded-md border-2 border-red-500 py-2 px-10 transition duration-300 ease-in-out hover:bg-red-500 hover:text-white">
                  Contact
                </button>
              </div>
            </div>
          </div>
          {/* filter */}
          <div className="my-3 flex-1 justify-between space-y-5 bg-white p-5 sm:flex">
            <div className="tabs">
              {categoriesTab.map((category) => (
                <a
                  key={category}
                  onClick={() => setSelectCategory(category)}
                  className={`tab tab-lifted text-base ${
                    selectCategory === category && "tab-active"
                  }`}
                >
                  {category}
                </a>
              ))}
            </div>
            <div className="">
              <input
                type="text"
                placeholder="Search in store"
                className="input h-10 w-full border border-gray-300"
              />
            </div>
          </div>
          {/* Filter and products */}
          {selectCategory === "Home Page" && <VendorShopHomePage />}
          {selectCategory === "All Products" && <VendorShopAllProducts />}
          {selectCategory === "Profile" && <VendorShopProfile />}
        </div>
      </div>
      {showSidebar && (
        <SearchingProductsSidebar setShowSidebar={setShowSidebar} />
      )}
    </>
  );
};

export default VendorMain;
