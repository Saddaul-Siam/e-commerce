import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import {
  AiFillStar,
  AiOutlineStar,
  AiOutlinePlus,
  AiOutlineMinus,
  AiOutlineHeart,
} from "react-icons/ai";
import { IoIosGitCompare } from "react-icons/io";
import { Footer, Navbar, ProductCard } from "../../components/sharedComponents";
import { products } from "../../data/products";

const SingleProduct = () => {
  const [showProductDetails, setShowProductDetails] = useState("description");
  return (
    <>
      <Navbar />
      <div className="mt-28 flex h-20 items-center justify-center bg-slate-200 lg:mt-[13rem]">
        <p className="text-base font-medium">
          <Link href="#">
            <a className="hover:text-blue-800">HOME </a>
          </Link>
          / SHOP PRODUCT
        </p>
      </div>
      <div className="container">
        <div className="container grid grid-cols-1 gap-24 pt-5 sm:grid-cols-2">
          {/* Image */}
          <div>
            <div className="h-[700px] w-full overflow-hidden">
              <img
                className="h-full w-full object-cover object-center"
                src="https://flone-react.pages.dev/assets/img/product/fashion/7.jpg"
                alt=""
              />
            </div>
            <div className="mt-3 grid h-44 grid-cols-4 gap-2">
              <img
                className="h-full w-full cursor-pointer object-cover object-center"
                src="https://flone-react.pages.dev/assets/img/product/fashion/7.jpg"
                alt=""
              />
              <img
                className="h-full w-full cursor-pointer object-cover object-center"
                src="https://flone-react.pages.dev/assets/img/product/fashion/7.jpg"
                alt=""
              />
              <img
                className="h-full w-full cursor-pointer object-cover object-center"
                src="https://flone-react.pages.dev/assets/img/product/fashion/7.jpg"
                alt=""
              />
              <img
                className="h-full w-full cursor-pointer object-cover object-center"
                src="https://flone-react.pages.dev/assets/img/product/fashion/7.jpg"
                alt=""
              />
            </div>
          </div>
          {/* description */}
          <div className="space-y-7">
            <span>
              <h2 className="text-2xl">Products Name</h2>
              <h4 className="mt-1 text-2xl text-red-600/80">$ 50.5</h4>
            </span>
            <p className="flex text-lg text-yellow-500/80 ">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </p>
            <p className="leading-78 text-base">
              incidunt sapiente. Exercitationem non eius fuga fugit accusantium
              quisquam commodi nulla iure corrupti ab a ex voluptate quia
              similique, vitae architecto, eveniet fugiat magni id mollitia
              quasi labore consequuntur? Magni, ea vitae odio ab exercitationem
              modi molestiae quidem inventore laborum amet dolore veniam
              possimus rerum cupiditate, eligendi minima earum iure atque.
              Adipisci excepturi dolor animi amet numquam libero ullam nam
              tempore, alias pariatur, ducimus quisquam omnis quaerat
              voluptates! Eligendi dolor pariatur sapiente?
            </p>
            <hr />
            {/* color and size */}
            <div className="flex items-center space-x-10">
              <div className="flex items-center space-x-2">
                <p>Color</p>
                <div className="flex items-center space-x-4">
                  <p
                    className={`h-4 w-4 cursor-pointer rounded-full bg-red-500 ring-2 ring-blue-600 ring-offset-2`}
                  />
                  <p
                    className={`h-4 w-4 cursor-pointer rounded-full bg-blue-500 ring-blue-600 ring-offset-2 active:ring-2`}
                  />
                  <p
                    className={`h-4 w-4 cursor-pointer rounded-full bg-green-500 ring-blue-600 ring-offset-2 active:ring-2`}
                  />
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <p>Size</p>
                <div className="flex items-center space-x-2">
                  <p className="transform bg-violet-600 px-2 py-1 text-white transition duration-500 hover:bg-violet-600">
                    x
                  </p>
                  <p className="transform bg-slate-200 px-2 py-1 transition duration-500 hover:bg-violet-600 hover:text-white">
                    M
                  </p>
                  <p className="transform bg-slate-200 px-2 py-1 transition duration-500 hover:bg-violet-600 hover:text-white">
                    XL
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <div className="flex items-center justify-center space-x-5 border p-2">
                <p className="cursor-pointer">
                  <AiOutlineMinus />
                </p>
                <p>5</p>
                <p className="cursor-pointer">
                  <AiOutlinePlus />
                </p>
              </div>
              <button className="text-l transform bg-gray-800 py-2 px-6 font-bold text-white transition duration-500 hover:bg-violet-600">
                Add to Cart
              </button>
              <span className="cursor-pointer text-xl">
                <AiOutlineHeart />
              </span>
              <span className="cursor-pointer text-xl">
                <IoIosGitCompare />
              </span>
            </div>
            <p className="text-base">Categories : women fashion</p>
          </div>
        </div>
        {/* Details */}
        <div className="mt-28">
          <div className="flex justify-center space-x-10 border-b text-2xl text-gray-600">
            <p
              className={`cursor-pointer ${
                showProductDetails === "description" && "border-b-2"
              } border-gray-600 pb-2`}
              onClick={() => setShowProductDetails("description")}
            >
              Description
            </p>
            <p
              className={`cursor-pointer ${
                showProductDetails === "reviews" && "border-b-2"
              } border-gray-600 pb-2`}
              onClick={() => setShowProductDetails("reviews")}
            >
              Reviews(2)
            </p>
          </div>
          {/* Description */}
          {showProductDetails === "description" && (
            <div className="mt-5">
              <p className="text-lg font-thin leading-8 text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
                officiis fuga quis placeat harum dolorem. Tempora, eum possimus?
                Suscipit, perferendis. Fugiat nemo maxime magnam temporibus esse
                minima deserunt praesentium corporis cum, sequi, sunt sit
                numquam neque porro, aliquid doloremque vero magni reiciendis?
                Modi vitae, voluptatibus laudantium culpa quo facere hic tempore
                eos atque commodi, quasi corrupti maiores consequatur sapiente
                assumenda quisquam in aspernatur consectetur fuga explicabo
                quia, suscipit sunt illo officiis. Quasi nemo consectetur
                eligendi sequi commodi alias sed exercitationem. Placeat amet
                dolore cupiditate corrupti quasi praesentium, velit obcaecati ex
                aliquid, omnis necessitatibus sed repudiandae nobis minima illo
                qui eveniet.
              </p>
            </div>
          )}
          {/* Reviews(2) */}
          {showProductDetails === "reviews" && (
            <div className="mt-5 space-y-10">
              <div>
                <div className="flex items-center space-x-3">
                  <img
                    src="https://flone-react.pages.dev/assets/img/product/fashion/7.jpg"
                    className="h-14 w-14 rounded-full object-cover object-center"
                    alt=""
                  />
                  <div>
                    <p>Saddaul Siam</p>
                    <div className="flex space-x-3">
                      <p className="flex text-lg text-yellow-500/80 ">
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiOutlineStar />
                      </p>
                      <p>4.5</p>
                      <p>1.7 years ago</p>
                    </div>
                  </div>
                </div>
                <div className="mt-4 w-1/2">
                  <p className="text-base font-normal leading-7 text-gray-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ullam id aliquid laborum numquam! Sint, labore reprehenderit
                    est corrupti earum numquam deserunt
                  </p>
                </div>
              </div>
              <div>
                <div className="flex items-center space-x-3">
                  <img
                    src="https://flone-react.pages.dev/assets/img/product/fashion/7.jpg"
                    className="h-14 w-14 rounded-full object-cover object-center"
                    alt=""
                  />
                  <div>
                    <p>Saddaul Siam</p>
                    <div className="flex space-x-3">
                      <p className="flex text-lg text-yellow-500/80 ">
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiOutlineStar />
                      </p>
                      <p>4.5</p>
                      <p>1.7 years ago</p>
                    </div>
                  </div>
                </div>
                <div className="mt-4 w-1/2">
                  <p className="text-base font-normal leading-7 text-gray-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ullam id aliquid laborum numquam! Sint, labore reprehenderit
                    est corrupti earum numquam deserunt
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
        {/* Related products */}
        <div className="my-28">
          <h4>Realted Products</h4>
          <div className="grid grid-cols-2 gap-x-3 gap-y-10 rounded-md sm:grid-cols-3 lg:grid-cols-5">
            {products.slice(0, 5).map((product, index) => (
              <ProductCard product={product} key={index} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SingleProduct;
