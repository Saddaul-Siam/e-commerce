import Image from "next/image";
import React from "react";
import logo from "../../../images/logo/logo.svg";
import googlePlay from "../../../images/logo/googleplay.png";
import appleStore from "../../../images/logo/appstore.svg";
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaGoogle,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#0F3460] py-20">
      <div className="container">
        <div className="grid grid-cols-12 gap-3 text-gray-400">
          <div className="col-span-12 space-y-3 sm:col-span-2 lg:col-span-4">
            <p>
              <Image src={logo} alt="" />
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
              libero id et, in gravida. Sit diam duis mauris nulla cursus. Erat
              et lectus vel ut sollicitudin elit at amet.
            </p>
            <p className="pt-5">
              <Image src={googlePlay} alt="" />
            </p>
          </div>
          <div className="col-span-12 sm:col-span-2 lg:col-span-2">
            <h2 className="text-2xl text-white">About Us</h2>
            <ul className="space-y-3 pt-5">
              <li className="cursor-pointer underline-offset-2 hover:text-white hover:underline">
                Careers
              </li>
              <li className="cursor-pointer underline-offset-2 hover:text-white hover:underline">
                Our Stores
              </li>
              <li className="cursor-pointer underline-offset-2 hover:text-white hover:underline">
                Our Cares
              </li>
              <li className="cursor-pointer underline-offset-2 hover:text-white hover:underline">
                Terms & Conditions
              </li>
              <li className="cursor-pointer underline-offset-2 hover:text-white hover:underline">
                Privacy Policy
              </li>
            </ul>
          </div>
          <div className="col-span-12 sm:col-span-2 lg:col-span-3">
            <h2 className="text-2xl text-white">Customer Care</h2>
            <ul className="space-y-3 pt-5">
              <li className="cursor-pointer underline-offset-2 hover:text-white hover:underline">
                Help Center
              </li>
              <li className="cursor-pointer underline-offset-2 hover:text-white hover:underline">
                How to Buy
              </li>
              <li className="cursor-pointer underline-offset-2 hover:text-white hover:underline">
                Track Your Order
              </li>
              <li className="cursor-pointer underline-offset-2 hover:text-white hover:underline">
                Corporate & Bulk Purchasing
              </li>
              <li className="cursor-pointer underline-offset-2 hover:text-white hover:underline">
                Returns & Refunds
              </li>
            </ul>
          </div>
          <div className="col-span-12 sm:col-span-2 lg:col-span-3">
            <h2 className="text-2xl text-white">Contact Us</h2>
            <ul className="space-y-3 pt-5">
              <li>
                70 Washington Square South, New York, NY 10012, United States
              </li>
              <li>Email: uilib.help@gmail.com</li>
              <li>Phone: +1 1123 456 780</li>
            </ul>
            <ul className="flex cursor-pointer space-x-3 pt-5 text-white">
              <li className="rounded-full bg-gray-900/60 p-3">
                <FaFacebookF />
              </li>
              <li className="rounded-full bg-gray-900/60 p-3">
                <FaTwitter />
              </li>
              <li className="rounded-full bg-gray-900/60 p-3">
                <FaYoutube />
              </li>
              <li className="rounded-full bg-gray-900/60 p-3">
                <FaGoogle />
              </li>
              <li className="rounded-full bg-gray-900/60 p-3">
                <FaInstagram />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
