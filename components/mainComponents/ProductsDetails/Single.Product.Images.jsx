import React from "react";

const SingleProductImages = () => {
  return (
    <div>
      <div className="h-[700px] w-full overflow-hidden">
        <img
          className="h-full w-full object-cover object-center"
          src="https://flone-react.pages.dev/assets/img/product/fashion/7.jpg"
          alt=""
        />
      </div>
      <div className="mt-3 grid h-44 grid-cols-4 gap-2">
        <img
          className="h-full w-full cursor-pointer object-cover object-center"
          src="https://flone-react.pages.dev/assets/img/product/fashion/7.jpg"
          alt=""
        />
        <img
          className="h-full w-full cursor-pointer object-cover object-center"
          src="https://flone-react.pages.dev/assets/img/product/fashion/7.jpg"
          alt=""
        />
        <img
          className="h-full w-full cursor-pointer object-cover object-center"
          src="https://flone-react.pages.dev/assets/img/product/fashion/7.jpg"
          alt=""
        />
        <img
          className="h-full w-full cursor-pointer object-cover object-center"
          src="https://flone-react.pages.dev/assets/img/product/fashion/7.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default SingleProductImages;
