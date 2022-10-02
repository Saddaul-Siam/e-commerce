import Link from "next/link";
import React from "react";
import { MdLocationPin } from "react-icons/md";
import DashboardCustomersAddressFillUpForm from "./Dashboard.Customers.Address.FillUp.Form";

const DashboardCustomersAddressEdit = () => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <h2 className="flex items-center text-2xl font-semibold text-gray-700">
          <MdLocationPin className="mr-3 inline text-3xl text-red-500/90" />
          Edit Address
        </h2>
        <Link href="/dashboard/customer/addresses">
          <button className="bg-red-200 py-2 px-4 text-sm font-semibold text-red-500">
            Back To Addresses
          </button>
        </Link>
      </div>
      <DashboardCustomersAddressFillUpForm />
    </div>
  );
};

export default DashboardCustomersAddressEdit;
