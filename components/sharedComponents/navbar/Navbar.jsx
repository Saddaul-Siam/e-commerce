import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { FiShoppingCart, FiSearch } from "react-icons/fi";
import logo from "../../../images/logo/logo.svg";
import NavbarMenu from "./NavbarMenu";
import Announcement from "../announcement/Announcement";
import SideBarShoppingCart from "../../mainComponents/Home/SideBarShoppingCart";
import { MdOutlineAccountCircle } from "react-icons/md";
import HeadlessUICategoriesDPD from "../HeadlessUIDropDown/HeadlessUICategoriesDPD";
import { BiCategory } from "react-icons/bi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Menu } from "@headlessui/react";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
  const [showProductCard, setShowProductCard] = useState(false);
  const [scroll, setScroll] = useState(null);
  const [searchProduct, setSearchProduct] = useState("");

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 80) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    });
  }, []);

  const handleSearch = (e) => {
    setSearchProduct(e.target.value);
  };
  return (
    <div className="fixed top-0 left-0 z-50 w-full transform transition duration-500">
      <Announcement scroll={scroll} />
      <div className={`bg-white lg:px-5 xl:px-0 ${scroll && "shadow-lg"}`}>
        <div className="xl:container">
          <div className="flex items-center justify-center py-4 lg:justify-between">
            <div className="hidden lg:block">
              <div className="flex items-center justify-center">
                <Link href="/">
                  <Image
                    height="40"
                    src={logo}
                    alt=""
                    className="cursor-pointer"
                  />
                </Link>

                <Menu as="div" className="relative ">
                  <Menu.Button className="inline-flex items-center justify-center space-x-1 py-2">
                    <BiCategory
                      className={`ml-3 text-2xl text-gray-500 ${
                        scroll ? "block" : "hidden"
                      }`}
                    />
                    <MdKeyboardArrowDown
                      className={`text-2xl text-gray-500 ${
                        scroll ? "block" : "hidden"
                      }`}
                    />
                  </Menu.Button>
                  <HeadlessUICategoriesDPD />
                </Menu>
              </div>
            </div>
            <div className="mx-3 my-1 flex w-full items-center rounded border bg-slate-100 hover:border-red-500/90 lg:mx-0 lg:w-1/2">
              <input
                onChange={handleSearch}
                type="text"
                className="w-full bg-slate-100 pl-4 outline-none"
                placeholder="Search and hit enter..."
              />
              <button
                disabled={searchProduct === "" ? true : false}
                className={`flex h-10 cursor-pointer items-center rounded-sm bg-red-500/90 px-5 disabled:cursor-not-allowed`}
                onClick={() => router.push(`/product/search/${searchProduct}`)}
              >
                <FiSearch className="text-xl text-white" />
              </button>
            </div>
            <div className="hidden space-x-5 lg:block">
              <span
                className="cursor-pointer rounded-full bg-slate-200 p-2"
                onClick={() => setShowProductCard(true)}
              >
                <FiShoppingCart className="text- inline h-5 w-5" />
              </span>
              <span className="rounded-full bg-slate-200 p-2">
                <MdOutlineAccountCircle className="text-[#rgb(125, 135, 156)] inline h-6 w-6" />
              </span>
            </div>
          </div>
        </div>
        <NavbarMenu scroll={scroll} />
      </div>
      {showProductCard && (
        <SideBarShoppingCart setShowProductCard={setShowProductCard} />
      )}
    </div>
  );
};

export default Navbar;
