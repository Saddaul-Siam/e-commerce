import Link from "next/link";
import React from "react";
import { FaShoppingBag } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import DashboardCustomerOrdersCart from "./Dashboard.Customer.Orders.Cart";

const DashboardCustomersOrders = () => {
  const orders = [
    { id: "15644621", status: "pending", date: "Sep 25, 2022", total: 600 },
    { id: "15644621", status: "pending", date: "Sep 25, 2022", total: 600 },
    { id: "15644621", status: "pending", date: "Sep 25, 2022", total: 600 },
    { id: "15644621", status: "pending", date: "Sep 25, 2022", total: 600 },
  ];
  return (
    <div className="mb-10">
      <div className="flex items-center justify-between">
        <h2 className="flex items-center text-2xl font-semibold text-gray-700">
          <FaShoppingBag className="mr-3 inline text-2xl text-red-500/90" />
          My Orders
        </h2>
        <button className="text-2xl font-thin">
          <GiHamburgerMenu />
        </button>
      </div>
      <div>
        <div>
          <ul className="mt-8 grid grid-cols-4 px-5 text-base font-semibold text-gray-500">
            <li>Order #</li>
            <li>Status</li>
            <li>Date Purchased</li>
            <li>Total</li>
          </ul>
        </div>
        <div>
          <DashboardCustomerOrdersCart orders={orders} />
        </div>
      </div>
    </div>
  );
};

export default DashboardCustomersOrders;
