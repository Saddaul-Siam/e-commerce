import Link from "next/link";
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdLocationPin } from "react-icons/md";
import DashboardCustomersAddressFillUpForm from "./Dashboard.Customers.Address.FillUp.Form";

const DashboardCustomersAddressEdit = () => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-y-5">
        <div className="flex items-center">
          <h2 className="text-2xl font-semibold text-gray-700">
            <MdLocationPin className="mr-3 inline text-3xl text-red-500/90" />
            <span>Edit Address</span>
          </h2>
        </div>
        <div className="flex justify-end lg:hidden">
          <button className="text-2xl font-thin ">
            <GiHamburgerMenu />
          </button>
        </div>
        <div className="flex lg:justify-end">
          <Link href="/dashboard/customer/addresses">
            <button className="bg-red-200 py-2 px-4 text-sm font-semibold text-red-500">
              Back To Addresses
            </button>
          </Link>
        </div>
      </div>
      <DashboardCustomersAddressFillUpForm />
    </div>
  );
};

export default DashboardCustomersAddressEdit;
