import { AiOutlineArrowRight } from "react-icons/ai";
import { BiCategory } from "react-icons/bi";
import { cProducts } from "../../../data/products";

import { SwiperCatagoriesCard } from "../../sharedComponents";

const TopCategories = () => {
  return (
    <div className="bg-[#e6ebf1] px-3 pb-16 xl:px-0">
      <div className="container">
        <div className="flex justify-between">
          <h2 className="pb-5 text-2xl font-bold italic text-gray-700">
            <BiCategory className="mr-1 inline text-red-600/90" />
            Top Categories
          </h2>
          <a href="" className="text-sm text-gray-500">
            View all <AiOutlineArrowRight className="inline" />
          </a>
        </div>
        <SwiperCatagoriesCard cProducts={cProducts} />
      </div>
    </div>
  );
};

export default TopCategories;
