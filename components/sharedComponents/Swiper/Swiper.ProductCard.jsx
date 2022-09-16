import { useRef } from "react";
import { FreeMode, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  AiFillEye,
  AiFillStar,
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
  AiOutlineHeart,
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineStar,
} from "react-icons/ai";
import { BsCart2 } from "react-icons/bs";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const SwiperProductCard = ({ products }) => {
  const swiperPrevRef = useRef();
  const swiperNextRef = useRef();
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={10}
      breakpoints={{
        0: {
          slidesPerView: 2,
          spaceBetween: 5,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 10,
        },
        1440: {
          slidesPerView: 5,
          spaceBetween: 10,
        },
      }}
      freeMode={true}
      navigation={{
        prevEl: swiperPrevRef.current,
        nextEl: swiperNextRef.current,
      }}
      modules={[Navigation, FreeMode]}
      className="mySwiper"
    >
      {products.map((product, index) => (
        <SwiperSlide
          key={index}
          className="rounded-md bg-white shadow-2xl shadow-gray-300"
        >
          <div key={product.id} className="group relative w-full">
            <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-white group-hover:opacity-60 lg:aspect-none lg:h-80">
              <img
                src={product.imageSrc}
                alt={product.imageAlt}
                className="h-full w-full object-cover object-center lg:h-full lg:w-full "
              />
            </div>
            <div className="m-2 mt-4 flex justify-between">
              <div className="space-y-2">
                <h3 className="text-base font-semibold text-gray-600">
                  <a href={product.href}>
                    <span aria-hidden="true" className="absolute inset-0" />
                    {product.name}
                  </a>
                </h3>
                <p className="flex text-base text-yellow-400 ">
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiOutlineStar />
                </p>
                <div className="flex space-x-2 text-base font-medium">
                  <p className="text-red-600/90">{product.price}</p>
                  {/* Discount price */}
                  <p className="text-gray-600 line-through">{product.price}</p>
                </div>
              </div>
              {/* Add to Cart */}
              <div className="z-10 flex flex-col items-center justify-center text-base ">
                <span className="cursor-pointer rounded-md border border-red-500 p-1 text-red-500 hover:bg-red-500 hover:text-white">
                  <AiOutlineMinus />
                </span>
                1
                <span className="cursor-pointer rounded-md border border-red-500 p-1 text-red-500 hover:bg-red-500 hover:text-white">
                  <AiOutlinePlus />
                </span>
              </div>
            </div>
            {/* Card Discount */}
            <div className="absolute top-2 left-2 rounded-full bg-green-600/90 px-2 py-0.5 text-sm text-white">
              50% off
            </div>
            {/* Card Icons */}
            <div className="absolute top-1/2 left-1/2 hidden -translate-x-1/2 -translate-y-1/2 transform space-x-3 text-xl text-gray-900 group-hover:flex">
              <span className="cursor-pointer rounded-full bg-gray-300 p-2">
                <AiFillEye className="" />
              </span>
              <span className="cursor-pointer rounded-full bg-gray-300 p-2">
                <AiOutlineHeart className="" />
              </span>
              <span className="cursor-pointer rounded-full bg-gray-300 p-2">
                <BsCart2 className="" />
              </span>
            </div>
          </div>
        </SwiperSlide>
      ))}
      <div
        ref={swiperPrevRef}
        className="absolute top-1/2 bottom-1/2 left-2 z-[2] flex -translate-y-1/2 transform items-center justify-center rounded-full bg-[#808080] p-4 px-1.5 text-white hover:bg-gray-700"
      >
        <AiOutlineArrowLeft className="text-xl" />
      </div>
      <div
        ref={swiperNextRef}
        className="absolute top-1/2 bottom-1/2 right-2 z-[2] flex -translate-y-1/2 transform items-center justify-center rounded-full bg-[#808080] p-4 px-1.5 text-white hover:bg-gray-700 "
      >
        <AiOutlineArrowRight className="text-xl" />
      </div>
    </Swiper>
  );
};

export default SwiperProductCard;
