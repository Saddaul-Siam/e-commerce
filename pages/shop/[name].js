import { useState } from "react";
import Image from "next/image";
import { AiFillPhone, AiFillStar, AiOutlineStar } from "react-icons/ai";
import { MdLocationPin } from "react-icons/md";
import {
  BottomBar,
  Footer,
  Navbar,
  ProductCard,
} from "../../components/sharedComponents";
import SearchingProductsSidebarMenu from "../../components/mainComponents/SearchingProducts/Searching.Products.Sidebar.Menu";
import { products } from "../../data/products";

const Name = () => {
  const [selectCategory, setSelectCategory] = useState("Home Page");
  const categories = ["Home Page", "All Products", "Profile"];
  return (
    <>
      <Navbar />
      <div className="mt-[7.7rem] lg:mt-44">
        <div className="container py-10">
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
            <div className="flex justify-between pt-3 pb-5 ">
              <div className="ml-40 space-y-1 text-base text-gray-500">
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
              <div className="mr-10 flex items-center">
                <button className="rounded-md border-2 border-red-500 py-2 px-10 transition duration-300 ease-in-out hover:bg-red-500 hover:text-white">
                  Contact
                </button>
              </div>
            </div>
          </div>
          {/* filter */}
          <div className="my-3 flex-1 justify-between bg-white p-5 sm:flex">
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
            <div className=" grid grid-cols-1 gap-2 sm:grid-cols-3">
              <div className="relative h-80 w-full ">
                <Image
                  layout="fill"
                  src="https://i.ibb.co/Hr7jLN8/07834833262c015742d3a375b2e14c45.jpg"
                  alt=""
                />
              </div>
              <div className="relative h-80 w-full">
                <Image
                  layout="fill"
                  src="https://i.ibb.co/Lvzn5SH/3c2b7f2aa016e649c2ea069c057e41ea.jpg"
                  alt=""
                />
              </div>
              <div className="h-80 w-full space-y-2">
                <div className="flex h-1/2 w-full gap-y-2 bg-white p-2">
                  <div className="relative h-full w-1/2">
                    <Image
                      layout="fill"
                      src="https://i.ibb.co/fdWzS0t/c10440515f77289e53b7e4148aae938a.jpg"
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
                </div>
                <div className="flex h-1/2 w-full gap-2">
                  <div className="relative h-full w-1/2">
                    <Image
                      layout="fill"
                      src="https://i.ibb.co/fdWzS0t/c10440515f77289e53b7e4148aae938a.jpg"
                      alt=""
                    />
                  </div>
                  <div className="relative h-full w-1/2">
                    <Image
                      layout="fill"
                      src="https://i.ibb.co/7gjzb3y/946dd002559c3cabfcf38af60b308001.jpg"
                      alt=""
                    />
                  </div>
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
                <div className="grid grid-cols-2 gap-x-2 gap-y-5 rounded-md sm:grid-cols-3 sm:gap-x-5 lg:grid-cols-4">
                  {products.slice(0, 12).map((product, index) => (
                    <ProductCard product={product} key={index} />
                  ))}
                </div>
              </div>
            </div>
          )}
          {selectCategory === "Profile" && (
            <h1>Developer is sleeping Profile</h1>
          )}
        </div>
      </div>
      <BottomBar />
      <Footer />
    </>
  );
};

export default Name;
