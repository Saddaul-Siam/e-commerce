import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { AiTwotonePhone } from "react-icons/ai";
import Image from "next/image";
import logo from "../../../images/logo/logo.svg";
import bd from "../../../images/country/bd.svg";
import us from "../../../images/country/us.svg";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";

const Announcement = ({ scroll }) => {  function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
  return (
    <div className={`bg-[#0F3460]  ${scroll && "hidden"} px-5 xl:px-0`}>
      <div className="flex h-10 items-center justify-between text-xs font-medium text-white xl:container">
        <div className="lg:hidden">
          <div className="flex space-x-5">
            <Image src={logo} alt="" />
          </div>
        </div>
        <div className="hidden lg:block">
          <div className="flex space-x-5">
            <p>
              <AiTwotonePhone className="inline" />
              +8801311333277
            </p>
            <p>
              <HiOutlineMail className="inline" /> support@gmail.com
            </p>
          </div>
        </div>
        <div className="flex space-x-5">
      <div className="">
        <Menu as="div" className="relative ">
        <Menu.Button className="inline-flex w-full justify-center items-center space-x-1 rounded-md py-2 text-sm font-medium">
            <Image src={us} alt="" height="15" width="20" className="rounded" />
            <p>EN</p>
            <MdKeyboardArrowDown className="text-lg" />
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
            <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="py-1">
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-sm"
                      )}
                    >
                      <Image src={bd} alt="" height="15" width="20" className="rounded" /> BN
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-sm"
                      )}
                    >
                      <Image src={us} alt="" height="15" width="20" className="rounded" /> EN
                    </a>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
      <div className="">
        <Menu as="div" className="relative ">
        <Menu.Button className="inline-flex w-full justify-center items-center space-x-1 rounded-md py-2 text-sm font-medium">
            <Image src={us} alt="" height="15" width="20" className="rounded" />
            <p>USD</p>
            <MdKeyboardArrowDown className="text-lg" />
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
            <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="py-1">
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-sm"
                      )}
                    >
                      <Image src={bd} alt="" height="15" width="20" className="rounded" /> BDT
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-sm"
                      )}
                    >
                      <Image src={us} alt="" height="15" width="20" className="rounded" /> USD
                    </a>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
        </div>
      </div>
    </div>
  );
};

export default Announcement;
