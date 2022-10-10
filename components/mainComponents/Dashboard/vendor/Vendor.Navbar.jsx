import React from "react";
import HeadlessUIDropDown from "../../../sharedComponents/HeadlessUIDropDown/HeadlessUIDropDown";
import us from "../../../../images/country/us.svg";
import bd from "../../../../images/country/bd.svg";
import { BiBell, BiChat } from "react-icons/bi";
import Image from "next/image";

const VendorNavbar = () => {
  const dopData = [
    { name: "BD", img: bd, href: "#" },
    { name: "US", img: us, href: "#" },
  ];
  return (
    <div className="flex h-16 items-center justify-between bg-blue-600">
      {/* Side bar Toggle */}
      <div>
        <label className="swap-rotate swap h-16 w-14 text-white transition duration-300 ease-in-out hover:bg-blue-700">
          <input type="checkbox" />
          <svg
            className="swap-off fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 512 512"
          >
            <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
          </svg>
          <svg
            className="swap-on fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 512 512"
          >
            <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
          </svg>
        </label>
      </div>
      {/* Navbar Menu */}
      <div>
        <ul className="flex h-16 text-white">
          <li className="flex h-full w-16 cursor-pointer items-center justify-center text-xl hover:bg-blue-700">
            <HeadlessUIDropDown btnText="EN" btnImg={us} dopData={dopData} />
          </li>
          <li className="flex h-full w-14 cursor-pointer items-center justify-center text-2xl hover:bg-blue-700">
            <BiBell />
          </li>
          <li className="flex h-full w-14 cursor-pointer items-center justify-center text-2xl hover:bg-blue-700">
            <BiChat />
          </li>
          <li className="flex h-full w-16 cursor-pointer items-center justify-center hover:bg-blue-700 ">
            <Image
              height="40"
              width="40"
              src="https://bonik-react.vercel.app/assets/images/faces/propic(9).png"
              alt="vendor profile"
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default VendorNavbar;
