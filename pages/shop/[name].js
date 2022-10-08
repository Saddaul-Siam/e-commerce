import { useState } from "react";
import Image from "next/image";
import {
  AiFillPhone,
  AiFillStar,
  AiFillThunderbolt,
  AiOutlineStar,
} from "react-icons/ai";
import { MdLocationPin } from "react-icons/md";
import {
  BottomBar,
  Footer,
  Navbar,
  ProductCard,
  SwiperProductCard,
} from "../../components/sharedComponents";
import {
  SearchingProductsSidebar,
  SearchingProductsSidebarMenu,
} from "../../components/mainComponents/SearchingProducts";
import { products } from "../../data/products";
import { BiCategory } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import { FiFilter } from "react-icons/fi";

const Name = () => {
  const [selectCategory, setSelectCategory] = useState("Home Page");
  const [showSidebar, setShowSidebar] = useState(null);
  const categories = ["Home Page", "All Products", "Profile"];
  return (
    <>
      <Navbar />
      <div className="mt-[7.7rem] lg:mt-44">
        <div className="container py-10">
          {/* Banner */}
          <div className="rounded-lg bg-white">
            <div className="relative">
              {/* Banner */}
              <div>
                <Image
                  height="250"
                  width="1280"
                  className="rounded-t-lg object-cover object-center"
                  src="https://images.pexels.com/photos/1827234/pexels-photo-1827234.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />
              </div>
              {/* Logo */}
              <div className="absolute -bottom-10 left-10 h-24 w-24 rounded-full border-4 border-white">
                <Image
                  layout="fill"
                  className="rounded-full"
                  src="https://images.pexels.com/photos/176837/pexels-photo-176837.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />
              </div>
            </div>
            <div className="mx-3 flex justify-between pt-10 pb-5 md:pt-3">
              <div className="space-y-1 text-base text-gray-500 md:ml-32 lg:ml-40 ">
                <h2 className="text-xl font-semibold text-gray-600">
                  Store Name
                </h2>
                <p className="flex items-center text-yellow-500">
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiOutlineStar />
                  <span className="ml-2 text-black">(50)</span>
                </p>
                <p>
                  <MdLocationPin className="inline" /> 845 N. Stonybrook Ave.
                  Tonawanda, NY 14210, Denmark
                </p>
                <p>
                  <AiFillPhone className="inline" /> 01311333277
                </p>
              </div>
              <div className="flex items-center md:mr-10">
                <button className="rounded-md border-2 border-red-500 py-2 px-10 transition duration-300 ease-in-out hover:bg-red-500 hover:text-white">
                  Contact
                </button>
              </div>
            </div>
          </div>
          {/* filter */}
          <div className="my-3 flex-1 justify-between space-y-5 bg-white p-5 sm:flex">
            <div className="tabs">
              {categories.map((category) => (
                <a
                  key={category}
                  onClick={() => setSelectCategory(category)}
                  className={`tab tab-lifted text-base ${
                    selectCategory === category && "tab-active"
                  }`}
                >
                  {category}
                </a>
              ))}
            </div>
            <div className="">
              <input
                type="text"
                placeholder="Search in store"
                className="input h-10 w-full border border-gray-300"
              />
            </div>
          </div>
          {/* Filter and products */}
          {selectCategory === "Home Page" && (
            <div>
              {/* Top DesCounts */}
              <div className=" grid grid-cols-1 gap-2 sm:grid-cols-3">
                <div className="relative h-80 w-full cursor-pointer">
                  <Image
                    layout="fill"
                    src="https://i.ibb.co/Hr7jLN8/07834833262c015742d3a375b2e14c45.jpg"
                    alt=""
                  />
                  <div className="absolute inset-0 bg-gray-900/20 transition duration-200 ease-in-out hover:bg-gray-900/40" />
                  <div className="absolute top-2 right-2 flex items-center justify-center rounded-full bg-red-500/90 p-5 px-7">
                    <h2 className="text-2xl text-white">
                      75% <br /> Off
                    </h2>
                  </div>
                  <div className="absolute bottom-0 left-0 mb-1 flex gap-10 text-2xl text-white">
                    <h2 className="ml-3">৳500</h2>
                    <h2>Products Name</h2>
                  </div>
                </div>
                <div className="relative h-80 w-full cursor-pointer">
                  <Image
                    layout="fill"
                    src="https://i.ibb.co/Lvzn5SH/3c2b7f2aa016e649c2ea069c057e41ea.jpg"
                    alt=""
                  />
                  <div className="absolute inset-0 bg-gray-900/20 transition duration-200 ease-in-out hover:bg-gray-900/40" />
                  <div className="absolute top-2 right-2 flex items-center justify-center rounded-full bg-red-500/90 p-5 px-7">
                    <h2 className="text-2xl text-white">
                      75% <br /> Off
                    </h2>
                  </div>
                  <div className="absolute bottom-0 left-0 mb-1 flex gap-10 text-2xl text-white">
                    <h2 className="ml-3">৳500</h2>
                    <h2>Products Name</h2>
                  </div>
                </div>
                <div className="h-[312px] w-full space-y-2">
                  <div className="relative flex h-1/2 w-full cursor-pointer bg-white p-2">
                    <div className="relative h-full w-1/2">
                      <Image
                        layout="fill"
                        src="https://i.ibb.co/1M0yMmh/e2339dad9c17f36ef2cbe6d623844ed5.jpg"
                        alt=""
                      />
                    </div>
                    <div className="relative h-full w-1/2">
                      <h3 className="pt-2 text-2xl text-gray-600">
                        Products Name
                      </h3>
                      <h4 className="absolute bottom-5 text-xl text-red-500/90">
                        ৳500
                      </h4>
                    </div>
                    <div className="absolute inset-0 transition duration-200 ease-in-out hover:bg-gray-900/40" />
                  </div>
                  <div className="flex h-1/2 w-full gap-2">
                    <div className="relative h-full w-1/2">
                      <Image
                        layout="fill"
                        src="https://i.ibb.co/fdWzS0t/c10440515f77289e53b7e4148aae938a.jpg"
                        alt=""
                      />
                      <div className="absolute inset-0 transition duration-200 ease-in-out hover:bg-gray-900/40" />
                      <div className="absolute bottom-1 left-1 mb-0 text-2xl text-red-500/90">
                        <h2>৳500</h2>
                      </div>
                    </div>
                    <div className="relative h-full w-1/2">
                      <Image
                        layout="fill"
                        src="https://i.ibb.co/7gjzb3y/946dd002559c3cabfcf38af60b308001.jpg"
                        alt=""
                      />
                      <div className="absolute inset-0 transition duration-200 ease-in-out hover:bg-gray-900/40" />
                      <div className="absolute bottom-1 left-1 mb-0 text-2xl text-red-500">
                        <h2>৳500</h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Best sealing products */}
              <div className="mt-10">
                <h2 className="pb-5 text-2xl font-bold italic text-gray-700">
                  <AiFillThunderbolt className="inline text-red-600/90" /> Best
                  Sealing Product
                </h2>
                <div>
                  <SwiperProductCard products={products} />
                </div>
              </div>
              {/* Just for you products */}
              <div className="mt-10">
                <h2 className="pb-5 text-2xl font-bold italic text-gray-700">
                  <AiFillThunderbolt className="inline text-red-600/90" /> Just
                  For You
                </h2>
                <div className="grid grid-cols-2 gap-x-3 gap-y-10 rounded-md sm:grid-cols-3 lg:grid-cols-5">
                  {products.slice(0, 10).map((product, index) => (
                    <ProductCard product={product} key={index} />
                  ))}
                </div>
              </div>
            </div>
          )}
          {selectCategory === "All Products" && (
            <div className="grid grid-cols-5 gap-5 px-3 xl:px-0">
              <div className="hidden sm:col-span-1 lg:block">
                <div className="rounded-md bg-white">
                  <SearchingProductsSidebarMenu />
                </div>
              </div>
              <div className="col-span-5 lg:col-span-4">
                <div className="mb-3 flex-1 justify-between space-y-5 rounded-md bg-white p-5 md:flex">
                  <div className="flex items-center ">
                    <h2 className="text-lg font-semibold text-gray-800">
                      Store Name
                    </h2>
                  </div>
                  <div className="flex items-center space-x-3 text-sm text-gray-600 sm:space-x-4 sm:text-base">
                    <p>Short by:</p>
                    <select
                      name=""
                      id=""
                      className="h-10 rounded border border-gray-300 focus:border-red-500"
                    >
                      <option value="" className="">
                        Best Match
                      </option>
                      <option value="">Date</option>
                      <option value="">Price low to high</option>
                      <option value="">Price high to low</option>
                    </select>
                    <p
                      className="cursor-pointer rounded-full p-2 text-lg hover:bg-slate-200 sm:text-xl lg:hidden"
                      onClick={() => setShowSidebar(true)}
                    >
                      <FiFilter />
                    </p>
                    <div className="flex items-center space-x-1">
                      <p>View:</p>
                      <p className="cursor-pointer rounded-full p-2 text-lg text-red-500/90 hover:bg-slate-200 sm:text-xl">
                        <BiCategory />
                      </p>
                      <p className="cursor-pointer rounded-full p-2 text-lg hover:bg-slate-200 sm:text-xl">
                        <GiHamburgerMenu />
                      </p>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-x-2 gap-y-5 rounded-md sm:grid-cols-3 sm:gap-x-5 lg:grid-cols-4">
                  {products.slice(0, 12).map((product, index) => (
                    <ProductCard product={product} key={index} />
                  ))}
                </div>
              </div>
            </div>
          )}
          {selectCategory === "Profile" && <h1>Developing on the way</h1>}
        </div>
      </div>
      {showSidebar && (
        <SearchingProductsSidebar setShowSidebar={setShowSidebar} />
      )}
      <BottomBar />
      <Footer />
    </>
  );
};

export default Name;
