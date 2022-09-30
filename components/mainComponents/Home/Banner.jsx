import Image from "next/image";
import React, { useState, useEffect, useRef, useCallback } from "react";
import banners from "../../../images/banners";
import categories from "../../../images/categories";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { MdKeyboardArrowRight } from "react-icons/md";

const Banner = () => {
  const swiperRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentBg, setCurrentBg] = useState([]);

  let bannerBgColor = [];

  useEffect(() => {
    setCurrentBg(bannerBgColor);
  }, []);

  const updateIndex = useCallback(
    () => setCurrentSlide(swiperRef?.current?.swiper?.realIndex),
    []
  );

  useEffect(() => {
    const swiperInstance = swiperRef.current.swiper;
    if (swiperInstance) {
      swiperInstance.on("slideChange", updateIndex);
    }
    return () => {
      if (swiperInstance) {
        swiperInstance.off("slideChange", updateIndex);
      }
    };
  }, [updateIndex]);
  return (
    <div
      className="mt-28 lg:mt-[10.9rem]"
      style={{
        backgroundColor: currentBg[currentSlide],
      }}
    >
      <div className="xl:container">
        <div className="flex">
          <div className="hidden w-[22%] lg:block">
            <div className="bg-white shadow-lg">
              <ul className="py-1 text-sm">
                {categories.map(({ name, img }, index) => (
                  <li
                    key={index}
                    className="flex cursor-pointer justify-between px-3 py-2 hover:bg-red-300"
                  >
                    <div className="flex space-x-3">
                      <Image src={img} alt="" width="20" height="20" />
                      <p>{name}</p>
                    </div>
                    <MdKeyboardArrowRight className="text-xl" />
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="w-full lg:w-[78%]">
            <Swiper
              ref={swiperRef}
              className="mySwiper h-40 w-full md:h-72 lg:h-full"
              grabCursor={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              slidesPerView={"auto"}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination, Autoplay]}
            >
              {banners.map(({ id, img, bg }) => (
                <SwiperSlide key={id}>
                  {bannerBgColor.push(bg)}
                  <Image
                    src={img}
                    alt=""
                    className="object-fill object-center"
                    layout="fill"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
