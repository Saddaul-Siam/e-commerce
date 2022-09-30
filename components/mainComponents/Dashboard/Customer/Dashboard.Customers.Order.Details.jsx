import React from "react";
import { FaShoppingBag } from "react-icons/fa";
import { BsBoxSeam } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { FcCheckmark } from "react-icons/fc";
import DashboardCustomersOrderDetailsCart from "./Dashboard.Customers.Order.Details.Cart";

const DashboardCustomersOrderDetails = () => {
  return (
    <div className="mb-10">
      <div>
        <h2 className="text-xl font-semibold text-gray-700">
          <FaShoppingBag className="mr-3 inline text-red-500/90" />
          Order Details
        </h2>
      </div>
      <div className="mt-10 rounded-md bg-white px-5 py-10 shadow">
        <div className="flex items-center ">
          <span className="relative rounded-full bg-red-500/90 p-4 text-2xl text-white">
            <BsBoxSeam />
            <span className="absolute -top-1 -right-1 rounded-full bg-slate-200 p-1 text-base text-green-600">
              <FcCheckmark />
            </span>
          </span>
          <div className="w-full border-t-4 border-red-500/90" />
          <span className="rounded-full bg-red-500/90 p-4 text-2xl text-white">
            <TbTruckDelivery />
          </span>
          <div className="w-full border-t-4 border-slate-300" />
          <span className="rounded-full bg-slate-300 p-4 text-2xl text-red-500/90">
            <BsBoxSeam />
          </span>
        </div>
        <div className="mt-10 flex justify-end">
          <p className="rounded-full bg-red-200 py-1 px-4 text-red-500">
            Estimated Delivery Date 4th October
          </p>
        </div>
      </div>
      <DashboardCustomersOrderDetailsCart />
      <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <div className="rounded-md bg-white p-5">
            <h3 className="text-base font-semibold text-gray-600">
              Shipping Address
            </h3>
            <p className="mt-2 text-sm text-gray-500">
              Kelly Williams 777 Brockton Avenue, Abington MA 2351
            </p>
          </div>
        </div>
        <div className="space-y-2 rounded-md bg-white p-5">
          <h3 className="text-base font-semibold text-gray-600">
            Total Summary
          </h3>
          <div className="flex justify-between">
            <p className="text-gray-500">Subtotal:</p>
            <p>$335</p>
          </div>
          <div className="flex justify-between">
            <p className="text-gray-500">Shipping fee:</p>
            <p>$10</p>
          </div>
          <div className="flex justify-between">
            <p className="text-gray-500">Discount:</p>
            <p>-$30</p>
          </div>
          <hr />
          <div className="flex justify-between">
            <p>Total</p>
            <p>$315</p>
          </div>
          <p className="text-gray-500">Paid by Credit/Debit Card</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardCustomersOrderDetails;