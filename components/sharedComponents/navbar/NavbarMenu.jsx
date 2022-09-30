import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { BiCategory } from "react-icons/bi";
import Link from "next/link";
import { Menu } from "@headlessui/react";
import HeadlessUICategoriesDPD from "../HeadlessUIDropDown/HeadlessUICategoriesDPD";
import { useRouter } from "next/router";

const NavbarMenu = ({ scroll }) => {
  const { route } = useRouter();
  const menu = [
    { name: "Home", href: "" },
    { name: "Pages", href: "" },
    { name: "User Account", href: "/dashboard/customer/profile" },
    { name: "Vendor Account", href: "" },
    { name: "Track My Order", href: "/dashboard/customer/orders" },
  ];
  return (
    <div className="transform scroll-smooth transition duration-500 xl:container">
      <div className="hidden lg:block">
        <div
          className={`flex h-14 items-center justify-between ${
            scroll && "hidden"
          }`}
        >
          <Menu as="div" className={` relative `}>
            <Menu.Button
              className={`flex cursor-pointer space-x-2 rounded bg-slate-200 px-5 py-2`}
            >
              <BiCategory className="text-2xl" />
              <p className="font-semibold text-gray-500"> Categories</p>
              <MdKeyboardArrowDown className="text-2xl text-gray-500" />
            </Menu.Button>
            {route === "/" ? "" : <HeadlessUICategoriesDPD />}
          </Menu>
          <div>
            <ul className="font-OpenSans flex space-x-10">
              {menu.map(({ name, href }, index) => (
                <Link href={href} key={index}>
                  <li className="cursor-pointer hover:text-red-400">{name}</li>
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarMenu;
