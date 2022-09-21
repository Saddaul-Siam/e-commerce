import Image from "next/image";
import React from "react";

const DiscountBanner = () => {
  return (
    <div className="bg-[#e6ebf1] pb-16">
      <div className="container">
        <div className="md:h-[40rem] grid h-96 grid-cols-3 gap-5 lg:h-96">
          <div className="relative col-span-3 cursor-pointer lg:col-span-1">
            <Image
              src="https://i.ibb.co/Ydr9psB/image.webp"
              alt=""
              className="object-fit object-center"
              layout="fill"
            />
          </div>
          <div className="relative col-span-3 cursor-pointer lg:col-span-2">
            <Image
              layout="fill"
              className="object-fit object-center"
              src="https://i.ibb.co/7YwL2NX/photo-1542992015-4a0b729b1385.webp"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscountBanner;
