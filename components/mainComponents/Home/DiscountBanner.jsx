import Image from "next/image";
import React from "react";
import banner1 from "../../../images/banners/discountbanner-1.png";
import banner2 from "../../../images/banners/discountbanner2.jpg";

const DiscountBanner = () => {
  return (
    <div className="bg-[#e6ebf1] pb-16">
      <div className="container">
        <div className="grid h-96 grid-cols-3 gap-5 ">
          <div className="col-span-1 cursor-pointer overflow-hidden">
            <img
              src="https://bonik-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fbanners%2Fbanner-1.png&w=1920&q=75"
              alt=""
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="col-span-2 cursor-pointer overflow-hidden">
            <img
              className="h-full w-full object-cover object-center"
              src="https://images.unsplash.com/photo-1542992015-4a0b729b1385?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1489&q=80"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscountBanner;
