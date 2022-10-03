import Image from "next/image";
import React from "react";

const DashboardCustomersOrderDetailsCart = () => {
  return (
    <>
      <div className="mt-10 grid grid-cols-3 bg-slate-200 px-5 py-5 text-xs text-gray-500 sm:text-sm">
        <p className="">
          Order ID:
          <br className="sm:hidden" />
          <b>9001997718074513</b>
        </p>
        <p className="">
          Placed on:
          <br className="sm:hidden" />
          <b>25 Sep, 2022</b>
        </p>
        <p className="">
          Delivered on:
          <br className="sm:hidden" />
          <b>4th October, 2022</b>
        </p>
      </div>
      <div>
        <div className="grid grid-cols-3 items-center bg-white px-5 py-5">
          <div className="flex items-center">
            <Image
              width="100"
              height="100"
              className="object-cover object-center"
              src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg"
              alt=""
            />
            <div className="ml-3">
              <p className="text-xs font-semibold text-gray-600 sm:text-sm">
                Premium Grocery Collection{" "}
              </p>
              <small className="text-gray-500/90">$250 x 1</small>
            </div>
          </div>
          <div>
            <p className="text-xs text-gray-500/90 sm:text-base">
              Product properties: Black, L
            </p>
          </div>
          <div>
            <button className="rounded py-2 px-5 text-xs font-semibold text-red-500/90 hover:bg-red-100 sm:text-base">
              Write a Review
            </button>
          </div>
        </div>
        <hr />
      </div>
      <div>
        <div className="grid grid-cols-3 items-center bg-white px-5 py-5">
          <div className="flex items-center">
            <Image
              width="100"
              height="100"
              className="object-cover object-center"
              src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg"
              alt=""
            />
            <div className="ml-3">
              <p className="text-xs font-semibold text-gray-600 sm:text-sm">
                Premium Grocery Collection{" "}
              </p>
              <small className="text-gray-500/90">$250 x 1</small>
            </div>
          </div>
          <div>
            <p className="text-xs text-gray-500/90 sm:text-base">
              Product properties: Black, L
            </p>
          </div>
          <div>
            <button className="rounded py-2 px-5 text-xs font-semibold text-red-500/90 hover:bg-red-100 sm:text-base">
              Write a Review
            </button>
          </div>
        </div>
        <hr />
      </div>
      <div>
        <div className="grid grid-cols-3 items-center bg-white px-5 py-5">
          <div className="flex items-center">
            <Image
              width="100"
              height="100"
              className="object-cover object-center"
              src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg"
              alt=""
            />
            <div className="ml-3">
              <p className="text-xs font-semibold text-gray-600 sm:text-sm">
                Premium Grocery Collection{" "}
              </p>
              <small className="text-gray-500/90">$250 x 1</small>
            </div>
          </div>
          <div>
            <p className="text-xs text-gray-500/90 sm:text-base">
              Product properties: Black, L
            </p>
          </div>
          <div>
            <button className="rounded py-2 px-5 text-xs font-semibold text-red-500/90 hover:bg-red-100 sm:text-base">
              Write a Review
            </button>
          </div>
        </div>
        <hr />
      </div>
    </>
  );
};

export default DashboardCustomersOrderDetailsCart;
