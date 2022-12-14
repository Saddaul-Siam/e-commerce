import { useRef } from "react";
import { FreeMode, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import ProductsCard from "../productsCard/Products.Card";

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
          <ProductsCard product={product} />
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
