import Image from "next/image";
import React from "react";
import banner1 from "../../../images/banners/discountbanner-1.png";
import banner2 from "../../../images/banners/banner2.jpg";

const DiscountBanner = () => {
  return (
    <div className="bg-[#e6ebf1] pb-16">
      <div className="container">
        <div className="grid grid-cols-3">
          <div className="col-span-1">
            <Image src={banner1} alt="" />
          </div>
          <div className="col-span-2  w-full border border-red-500">
            <Image src={banner2} alt="" className="w-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscountBanner;
