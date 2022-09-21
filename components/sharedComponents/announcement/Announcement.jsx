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
import HeadlessUIDropDown from "../HeadlessUIDropDown/HeadlessUIDropDown";

const Announcement = ({ scroll }) => {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  const dopData = [
    { name: "BD", img: bd, href: "#" },
    { name: "US", img: us, href: "#" },
  ];
  return (
    <div
      className={`bg-[#0F3460]  ${
        scroll && "hidden"
      } scroll-smooth px-5 xl:px-0`}
    >
      <div className="flex h-10 items-center justify-between text-xs font-medium text-white xl:container transition duration-500 transform">
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
          <HeadlessUIDropDown btnText="EN" btnImg={us} dopData={dopData} />
          <HeadlessUIDropDown btnText="USD" btnImg={us} dopData={dopData} />
        </div>
      </div>
    </div>
  );
};

export default Announcement;
