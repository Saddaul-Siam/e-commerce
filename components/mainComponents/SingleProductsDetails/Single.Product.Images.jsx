import Image from "next/image";
import React from "react";

const SingleProductImages = () => {
  return (
    <div>
      <Image
        width="500"
        height="550"
        className="h-full w-full object-fill object-center"
        src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg"
        alt=""
      />
      <div className="mt-3 flex space-x-8">
        <div>
          <Image
            height="100"
            width="100"
            className="cursor-pointer object-fill object-center"
            src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg"
            alt=""
          />
        </div>
        <div>
          <Image
            height="100"
            width="100"
            className="cursor-pointer object-fill object-center"
            src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg"
            alt=""
          />
        </div>
        <div>
          <Image
            height="100"
            width="100"
            className="cursor-pointer object-fill object-center"
            src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg"
            alt=""
          />
        </div>
        <div>
          <Image
            height="100"
            width="100"
            className="cursor-pointer object-fill object-center"
            src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default SingleProductImages;
