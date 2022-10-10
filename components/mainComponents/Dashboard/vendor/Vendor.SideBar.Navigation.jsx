import Image from "next/image";
import React from "react";
import { MdDashboard, MdOutlineArrowForwardIos } from "react-icons/md";
import { BsCardText, BsCart2, BsUpload } from "react-icons/bs";
import { AiOutlineHome, AiOutlineSetting } from "react-icons/ai";
import logo from "../../../../images/logo/logo.svg";

const VendorSideBarNavigation = () => {
  const dashboard = [
    {
      title: "Dashboard",
      icon: <MdDashboard />,
      arrow: <MdOutlineArrowForwardIos />,
    },
  ];
  const pages = [
    {
      title: "Products",
      icon: <BsCardText />,
      arrow: <MdOutlineArrowForwardIos />,
    },
    {
      title: "Add New Products",
      icon: <BsUpload />,
      arrow: <MdOutlineArrowForwardIos />,
    },
    {
      title: "Orders",
      icon: <BsCart2 />,
      arrow: <MdOutlineArrowForwardIos />,
    },
    {
      title: "Accounts Settings",
      icon: <AiOutlineSetting />,
      arrow: <MdOutlineArrowForwardIos />,
    },
  ];
  const apps = [
    {
      title: "Dashboard",
      icon: <AiOutlineHome />,
      arrow: <MdOutlineArrowForwardIos />,
    },
    {
      title: "Dashboard",
      icon: <AiOutlineHome />,
    },
    {
      title: "Dashboard",
      icon: <AiOutlineHome />,
      arrow: <MdOutlineArrowForwardIos />,
    },
    {
      title: "Dashboard",
      icon: <AiOutlineHome />,
      arrow: <MdOutlineArrowForwardIos />,
    },
  ];
  return (
    <div>
      {/* Logo */}
      <div className="flex h-16 w-full items-center bg-gray-600 pl-5">
        <Image src={logo} alt="" className="cursor-pointer" />
      </div>
      {/* Navigation */}
      <div className="h-[93.4vh] w-full bg-white shadow-lg">
        <div>
          <h2 className="select-none py-5 pl-5 text-base font-semibold uppercase text-gray-600">
            Dashboard
          </h2>
          <ul className="text-gray-500">
            {dashboard.map((link, index) => (
              <li
                key={index}
                className="group flex cursor-pointer items-center justify-between py-3 px-5 text-sm transition duration-200 ease-in-out hover:bg-slate-200 hover:text-black"
              >
                <span className="flex items-center gap-3">
                  <span className="text-xl group-hover:text-blue-600">
                    {link.icon}
                  </span>
                  <div className="">{link.title}</div>
                </span>
                <span>{link.arrow}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="select-none py-5 pl-5 text-base font-semibold uppercase text-gray-600">
            Pages
          </h2>
          <ul className="text-gray-500">
            {pages.map((link, index) => (
              <li
                key={index}
                className="group flex cursor-pointer items-center justify-between py-3 px-5 text-sm transition duration-200 ease-in-out hover:bg-slate-200 hover:text-black"
              >
                <span className="flex items-center gap-3">
                  <span className="text-xl group-hover:text-blue-600">
                    {link.icon}
                  </span>
                  <div className="">{link.title}</div>
                </span>
                <span>{link.arrow}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="select-none py-5 pl-5 text-base font-semibold uppercase text-gray-600">
            Apps
          </h2>
          <ul className="text-gray-500">
            {apps.map((link, index) => (
              <li
                key={index}
                className="group flex cursor-pointer items-center justify-between py-3 px-5 text-sm transition duration-200 ease-in-out hover:bg-slate-200 hover:text-black"
              >
                <span className="flex items-center gap-3">
                  <span className="text-xl group-hover:text-blue-600">
                    {link.icon}
                  </span>
                  <div className="">{link.title}</div>
                </span>
                <span>{link.arrow}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default VendorSideBarNavigation;
