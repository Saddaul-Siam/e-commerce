import { AiFillThunderbolt, AiOutlineArrowRight } from "react-icons/ai";

import { products } from "../../../data/products";
import { SwiperProductCard } from "../../sharedComponents";

const FlashDeals = () => {
  return (
    <div className="mt-0 bg-[#e6ebf1] py-16">
      <div className="container">
        <div className="flex justify-between">
          <h2 className="pb-5 text-2xl font-bold italic text-gray-700">
            <AiFillThunderbolt className="inline text-red-600/90" /> Flash Deals
          </h2>
          <a href="" className="text-sm text-gray-500">
            View all <AiOutlineArrowRight className="inline" />
          </a>
        </div>
        <SwiperProductCard products={products} />
      </div>
    </div>
  );
};

export default FlashDeals;
