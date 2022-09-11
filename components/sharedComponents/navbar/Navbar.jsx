import Image from "next/image";
import React, { useState, useEffect } from "react";
import { FiShoppingCart, FiSearch } from "react-icons/fi";
import {
  MdOutlineAccountCircle,
  MdKeyboardArrowDown,
  MdKeyboardArrowRight,
} from "react-icons/md";
import { BiCategory } from "react-icons/bi";
import logo from "../../../images/logo/logo.svg";
import NavbarMenu from "../navbarMenu/NavbarMenu";
import Announcement from "../announcement/Announcement";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";

const Navbar = () => {
  const [scroll, setScroll] = useState(null);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 80) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    });
  }, []);

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  return (
    <div className="fixed top-0 left-0 w-full transition-all duration-500 ease-out z-50">
      <Announcement scroll={scroll} />
      <div className="bg-white shadow-md lg:px-5 xl:px-0">
        <div className="xl:container">
          <div className="flex items-center justify-center py-4 lg:justify-between">
            <div className="hidden lg:block">
              <div className="flex items-center justify-center">
                <Image src={logo} alt="" />

                <Menu as="div" className="relative ">
                  <Menu.Button className="inline-flex justify-center items-center space-x-1 py-2">
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

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute left-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className="py-1">
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-700",
                                "block px-4 py-2 text-sm"
                              )}
                            >
                              <div className="flex justify-between">
                                <span>Fashion</span>
                                <span>
                                  <MdKeyboardArrowRight className="text-xl" />
                                </span>
                              </div>
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-700",
                                "block px-4 py-2 text-sm"
                              )}
                            >
                              <div className="flex justify-between">
                                <span>Electronics</span>
                                <span>
                                  <MdKeyboardArrowRight className="text-xl" />
                                </span>
                              </div>
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-700",
                                "block px-4 py-2 text-sm"
                              )}
                            >
                              <div className="flex justify-between">
                                <span> Home & Garden</span>
                                <span>
                                  <MdKeyboardArrowRight className="text-xl" />
                                </span>
                              </div>
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-700",
                                "block px-4 py-2 text-sm"
                              )}
                            >
                              <div className="flex justify-between">
                                <span>Bikes</span>
                                <span>
                                  <MdKeyboardArrowRight className="text-xl" />
                                </span>
                              </div>
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-700",
                                "block px-4 py-2 text-sm"
                              )}
                            >
                              <div className="flex justify-between">
                                <span> Health & Beauty</span>
                                <span>
                                  <MdKeyboardArrowRight className="text-xl" />
                                </span>
                              </div>
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-700",
                                "block px-4 py-2 text-sm"
                              )}
                            >
                              <div className="flex justify-between">
                                <span> Baby Toys</span>
                                <span>
                                  <MdKeyboardArrowRight className="text-xl" />
                                </span>
                              </div>
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-700",
                                "block px-4 py-2 text-sm"
                              )}
                            >
                              Pets
                            </a>
                          )}
                        </Menu.Item>
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
            <div className="flex w-11/12 items-center rounded-full border px-6 py-2 hover:border-red-500 lg:w-1/2">
              <FiSearch className="inline h-4 w-4 " />
              <input
                type="text"
                className="input w-11/12 pl-4 outline-none"
                placeholder="Search and hit enter..."
              />
            </div>
            <div className="hidden space-x-5 lg:block">
              <span className="rounded-full bg-slate-200 p-2">
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
    </div>
  );
};

export default Navbar;
