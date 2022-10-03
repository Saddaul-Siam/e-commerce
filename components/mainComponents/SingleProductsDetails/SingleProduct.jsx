import Link from "next/link";
import React, { useState } from "react";
import { products } from "../../../data/products";
import { ProductCard } from "../../sharedComponents";
import SingleProductDescription from "./Single.Product.Description";
import SingleProductDetails from "./Single.Product.Details";
import SingleProductImages from "./Single.Product.Images";
import SingleProductReview from "./Single.Product.Review";

const SingleProduct = () => {
  const [showProductDetails, setShowProductDetails] = useState("description");
  return (
    <>
      <div className="mt-28 flex h-20 items-center justify-center bg-slate-200 lg:mt-[10.9rem]">
        <p className="text-base font-medium capitalize ">
          <Link href="/">
            <a className="hover:text-blue-800">Home </a>
          </Link>
          / Shop Product
        </p>
      </div>
      <div className="bg-white px-3 xl:px-0">
        <div className="container">
          <div className="grid grid-cols-1 gap-24 pt-5 sm:grid-cols-2">
            {/* Image */}
            <SingleProductImages />
            {/* Details */}
            <SingleProductDetails />
          </div>
          {/* description */}
          <div className="mt-28">
            <div className="flex justify-center space-x-10 border-b text-2xl text-gray-600">
              <p
                className={`cursor-pointer ${
                  showProductDetails === "description" && "border-b-2"
                } border-gray-600 pb-2`}
                onClick={() => setShowProductDetails("description")}
              >
                Description
              </p>
              <p
                className={`cursor-pointer ${
                  showProductDetails === "reviews" && "border-b-2"
                } border-gray-600 pb-2`}
                onClick={() => setShowProductDetails("reviews")}
              >
                Reviews(2)
              </p>
            </div>
            {/* Description */}
            {showProductDetails === "description" && (
              <SingleProductDescription />
            )}
            {/* Reviews(2) */}
            {showProductDetails === "reviews" && (
              <div className="mt-5 space-y-10">
                <SingleProductReview />
                <SingleProductReview />
                <SingleProductReview />
              </div>
            )}
          </div>
          {/* Related products */}
          <div className="my-28">
            <h4 className="mb-5 text-2xl text-gray-700">Realted Products</h4>
            <div className="grid grid-cols-2 gap-x-3 gap-y-10 rounded-md sm:grid-cols-3 lg:grid-cols-5">
              {products.slice(0, 5).map((product, index) => (
                <ProductCard product={product} key={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
