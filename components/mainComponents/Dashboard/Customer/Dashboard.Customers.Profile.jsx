import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdAccountCircle } from "react-icons/md";
import DashboardCustomersOrderDetailsCart from "./Dashboard.Customers.Order.Details.Cart";

const DashboardCustomersProfile = () => {
  const orders = [
    { id: "15644621", status: "pending", date: "Sep 25, 2022", total: 600 },
    { id: "15644621", status: "pending", date: "Sep 25, 2022", total: 600 },
    { id: "15644621", status: "pending", date: "Sep 25, 2022", total: 600 },
    { id: "15644621", status: "pending", date: "Sep 25, 2022", total: 600 },
  ];
  return (
    <div className="mb-10">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold text-gray-700">
          <MdAccountCircle className="mr-3 inline text-red-500/90" />
          My Profile
        </h2>
        <Link href="/dashboard/customer/profile/edit">
          <button className="bg-red-200 py-2 px-4 text-sm font-semibold text-red-500">
            Edit Profile
          </button>
        </Link>
      </div>
      <div className="my-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <div className="flex items-center justify-between rounded-md bg-white px-10 py-5">
            <div className="flex items-center space-x-3">
              <Image
                className="rounded-full"
                height="50"
                width="50"
                src="https://bonik-react.vercel.app/assets/images/faces/ralph.png"
                alt=""
              />
              <h2 className="text-base font-semibold text-gray-600">
                Saddaul Siam
              </h2>
            </div>
            <div className="">
              <h3 className="text-sm text-gray-600">SILVER USER</h3>
            </div>
          </div>
        </div>
        <div>
          <div className="grid grid-cols-4 gap-3 ">
            <div className="flex flex-col items-center justify-center rounded-md bg-white py-2.5">
              <h2 className="text-lg font-semibold text-red-500/90">10</h2>
              <p className="text-sm text-gray-500">All Orders</p>
            </div>
            <div className="flex flex-col items-center justify-center rounded-md bg-white py-2.5">
              <h2 className="text-lg font-semibold text-red-500/90">10</h2>
              <p className="text-sm text-gray-500">
                Awaiting <br /> Payments
              </p>
            </div>
            <div className="flex flex-col items-center justify-center rounded-md bg-white py-2.5">
              <h2 className="text-lg font-semibold text-red-500/90">10</h2>
              <p className="text-sm text-gray-500">
                Awaiting <br /> Shipment
              </p>
            </div>
            <div className="flex flex-col items-center justify-center rounded-md bg-white py-2.5">
              <h2 className="text-lg font-semibold text-red-500/90">10</h2>
              <p className="text-sm text-gray-500">
                Awaiting <br />
                Delivery
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between rounded-md bg-white px-10 py-5">
        <div>
          <p className="text-xs text-gray-500">First Name</p>
          <p className="text-base leading-10 text-gray-600">Saddaul</p>
        </div>
        <div>
          <p className="text-xs text-gray-500">Last Name</p>
          <p className="text-base leading-10 text-gray-600">Siam</p>
        </div>
        <div>
          <p className="text-xs text-gray-500">Email</p>
          <p className="text-base leading-10 text-gray-600">
            saddaul.siam@gmail.com
          </p>
        </div>
        <div>
          <p className="text-xs text-gray-500">Phone</p>
          <p className="text-base leading-10 text-gray-600">+8801311333277</p>
        </div>
        <div>
          <p className="text-xs text-gray-500">Birth date</p>
          <p className="text-base leading-10 text-gray-600">26-08-2003</p>
        </div>
      </div>
      <div>
        {orders
          .slice(0, 2)
          .map((order, i) => (
            <DashboardCustomersOrderDetailsCart key={i} orders={order} />
          ))
          .reverse()}
      </div>
    </div>
  );
};

export default DashboardCustomersProfile;
