/* import { useRef, useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { BsArrowRightShort, BsArrowLeftShort } from "react-icons/bs";
import FlashDealsItem from "./FlashDealsItem";
import { products } from "../../../data/products";

const FlashDeals = () => {
  const [isMoved, setIsMoved] = useState(false);
  const [slideNumber, setSlideNumber] = useState(0);
  console.log(slideNumber);

  const listRef = useRef();

  const handleClick = (direction) => {
    setIsMoved(true);
    let distance = listRef.current.getBoundingClientRect().x - 305;
    if (direction === "left" && slideNumber > 0) {
      setSlideNumber(slideNumber - 1);
      listRef.current.style.transform = `translateX(${260 + distance}px)`;
    }
    if (direction === "right" && slideNumber < 5) {
      setSlideNumber(slideNumber + 1);
      listRef.current.style.transform = `translateX(${-270 + distance}px)`;
    }
  };
  return (
    <div className="bg-white mt-20">
      <div className="container relative">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Flash Deals
        </h2>
        <div className="my-10 overflow-hidden">
          <BsArrowLeftShort
            className={`w-10 h-10 rounded-full text-white bg-green-500 absolute top-0 bottom-0 -left-5 my-auto cursor-pointer z-10 ${
              slideNumber == 0 && "bg-gray-600"
            }`}
            onClick={() => handleClick("left")}
            style={{
              cursor: slideNumber === 0 ? "not-allowed" : "pointer",
            }}
          />
          <div
            ref={listRef}
            className="myContainer flex w-max space-x-2 transition-all"
          >
            {products.map((product, index) => (
              <FlashDealsItem product={product} key={index} />
            ))}
          </div>
          <BsArrowRightShort
            className={`w-10 h-10 text-white bg-green-500 absolute top-0 bottom-0 -right-5 my-auto cursor-pointer text-xs x-10 rounded-full ${
              slideNumber == 5 && "bg-gray-600"
            }`}
            onClick={() => handleClick("right")}
            style={{
              cursor: slideNumber === 5 ? "not-allowed" : "pointer",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default FlashDeals;
 */