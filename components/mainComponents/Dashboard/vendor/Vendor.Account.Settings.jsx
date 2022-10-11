import Image from "next/image";
import React from "react";
import { BsFillCameraFill } from "react-icons/bs";

const VendorAccountSettings = () => {
  return (
    <div className="mx-auto max-w-4xl">
      <div>
        <h2 className="mb-5 text-2xl font-semibold text-gray-600">
          Add New Product
        </h2>
      </div>
      <div className="rounded-md bg-white">
        {/* Banner Section */}
        <div className=" p-5">
          <div className="relative">
            <Image
              alt=""
              height="250"
              width="900"
              className="rounded-md object-cover object-center"
              src="https://images.pexels.com/photos/1827234/pexels-photo-1827234.jpeg?auto=compress&cs=tinysrgb&w=1600"
            />
            <label
              htmlFor="banner-change"
              className="absolute right-5 top-5 z-10 cursor-pointer rounded-full bg-red-100 p-2 text-red-500"
            >
              <BsFillCameraFill />
            </label>
            <input
              type="file"
              name="banner-change"
              id="banner-change"
              className="hidden"
            />
            <div className="absolute bottom-1 left-5">
              <div className="relative">
                <Image
                  height="80"
                  width="80"
                  className="rounded-full"
                  src="https://images.pexels.com/photos/176837/pexels-photo-176837.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />
                <label
                  htmlFor="logo-change"
                  className="absolute -right-2 bottom-3 z-10 cursor-pointer rounded-full bg-gray-100 p-2 text-gray-700"
                >
                  <BsFillCameraFill />
                </label>
                <input
                  type="file"
                  name="logo-change"
                  id="logo-change"
                  className="hidden"
                />
              </div>
            </div>
          </div>
        </div>
        {/* input fields */}
        <div className="grid grid-cols-1 gap-x-8 gap-y-5 p-5 pt-2 sm:grid-cols-2">
          <div className="flex flex-col">
            <label htmlFor="productName" className="text-gray-600">
              Regular Price
            </label>
            <input
              type="number"
              name="productName"
              id="productName"
              placeholder="Product Name"
              className="input input-bordered h-12 rounded-md border px-3"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="productName" className="text-gray-600">
              Sale Price
            </label>
            <input
              type="number"
              name="productName"
              id="productName"
              placeholder="Product Name"
              className="input input-bordered h-12 rounded-md border px-3"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="productName" className="text-gray-600">
              Regular Price
            </label>
            <input
              type="number"
              name="productName"
              id="productName"
              placeholder="Product Name"
              className="input input-bordered h-12 rounded-md border px-3"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="productName" className="text-gray-600">
              Sale Price
            </label>
            <input
              type="number"
              name="productName"
              id="productName"
              placeholder="Product Name"
              className="input input-bordered h-12 rounded-md border px-3"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="productName" className="text-gray-600">
              Regular Price
            </label>
            <input
              type="number"
              name="productName"
              id="productName"
              placeholder="Product Name"
              className="input input-bordered h-12 rounded-md border px-3"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="productName" className="text-gray-600">
              Sale Price
            </label>
            <input
              type="number"
              name="productName"
              id="productName"
              placeholder="Product Name"
              className="input input-bordered h-12 rounded-md border px-3"
            />
          </div>
        </div>
        {/* save */}
        <button className="btn border-none bg-red-500/90 hover:bg-red-600 m-5 ">
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default VendorAccountSettings;
