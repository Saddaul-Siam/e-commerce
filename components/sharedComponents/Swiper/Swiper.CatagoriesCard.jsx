import Link from "next/link";
import { useRef } from "react";
import { FreeMode, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const SwiperCatagoriesCard = ({ cProducts }) => {
  const swiperPrevRef = useRef();
  const swiperNextRef = useRef();
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={10}
      breakpoints={{
        0: {
          slidesPerView: 1,
          spaceBetween: 5,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
      }}
      freeMode={true}
      navigation={{
        prevEl: swiperPrevRef.current,
        nextEl: swiperNextRef.current,
      }}
      grabCursor
      modules={[Navigation, FreeMode]}
      className="mySwiper"
    >
      {cProducts.map((product, index) => (
        <SwiperSlide
          className="cursor-pointer rounded-md bg-white shadow-2xl shadow-gray-300"
          key={index}
        >
          <Link href="https://www.youtube.com/watch?v=39uMLYTh40Q" passHref>
            <a target="_blank">
              <div key={product.id} className="group relative w-full p-4">
                <div className="h-32 w-full group-hover:opacity-70">
                  <img
                    src={product.img}
                    alt={product.imageAlt}
                    className="h-full w-full rounded-md object-contain object-center lg:object-cover"
                  />
                </div>
                {/* Card Name */}
                <div className="absolute top-8 left-8 rounded-full bg-blue-900 px-4 py-0.5 text-sm text-white">
                  {product.name}
                </div>
                {/* Orders */}
                <div className="absolute top-8 right-8 rounded-full bg-gray-500 px-4 py-0.5 text-sm text-white">
                  {product.order}
                </div>
              </div>
            </a>
          </Link>
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

export default SwiperCatagoriesCard;
