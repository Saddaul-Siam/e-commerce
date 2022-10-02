import Link from "next/link";
import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { MdLocationPin, MdModeEdit } from "react-icons/md";

const DashboardCustomersAddresses = () => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold text-gray-700">
          <MdLocationPin className="mr-3 inline text-3xl text-red-500/90" />
          My Addresses
        </h2>
        <Link href="/dashboard/customer/addresses/new">
          <button className="bg-red-200 py-2 px-4 text-sm font-semibold text-red-500">
            Add New Addresses
          </button>
        </Link>
      </div>
      <div className="mt-5 bg-white p-5">
        <div className="grid grid-cols-12 gap-5 rounded-md bg-slate-300/80 p-3 text-base text-gray-600">
          <p className="col-span-2">Full Name</p>
          <p className="col-span-2">Address</p>
          <p className="col-span-3">Region</p>
          <p className="col-span-1">Phone</p>
        </div>
        <div className="grid grid-cols-12 items-center gap-5 rounded-md p-3 text-xs text-gray-600">
          <p className="col-span-2">Saddadul Siam</p>
          <p className="col-span-2">
            <span className="rounded-full bg-orange-500 px-1.5 text-white">
              Home
            </span>{" "}
            Haripur Bazar
          </p>
          <p className="col-span-3">Rajshahi - Pabna - Chatmohar</p>
          <p className="col-span-1">01311333277</p>
          <p className="col-span-3 flex justify-center">
            Default Shipping Address
            <br />
            Default Billing Address
          </p>
          <p className="col-span-1 flex justify-end text-xl">
            <span className="inline-flex rounded-full p-3 hover:bg-slate-100">
              <MdModeEdit />
            </span>
            <span className="inline-flex rounded-full p-3 hover:bg-slate-100">
              <AiFillDelete />
            </span>
          </p>
          <hr className="col-span-12" />
        </div>
        <div className="grid grid-cols-12 items-center gap-5 rounded-md p-3 text-xs text-gray-600">
          <p className="col-span-2">Saddadul Siam</p>
          <p className="col-span-2">
            <span className="rounded-full bg-orange-500 px-1.5 text-white">
              Office
            </span>{" "}
            রাধানাথপুর ডিগ্রী বটতলা হামিদ মাস্টার গলি নদী ছাত্রাবাস পাবনা
          </p>
          <p className="col-span-3">Rajshahi - Pabna - Chatmohar</p>
          <p className="col-span-1">01311333277</p>
          <p className="col-span-3 flex justify-center">
            Default Shipping Address
            <br />
            Default Billing Address
          </p>
          <p className="col-span-1 flex justify-end text-xl">
            <span className="inline-flex rounded-full p-3 hover:bg-slate-100">
              <MdModeEdit />
            </span>
            <span className="inline-flex rounded-full p-3 hover:bg-slate-100">
              <AiFillDelete />
            </span>
          </p>
          <hr className="col-span-12" />
        </div>
      </div>
    </div>
  );
};

export default DashboardCustomersAddresses;
