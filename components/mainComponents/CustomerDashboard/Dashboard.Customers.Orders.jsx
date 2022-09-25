import React from "react";
import { FaShoppingBag } from "react-icons/fa";
import SubCustomerOrderCart from "../../subComponents/dashboard/customer/Sub.Customer.Order.Cart";

const DashboardCustomersOrders = () => {
  return (
    <div className="mb-10">
      <h2 className="text-xl font-semibold text-gray-700">
        <FaShoppingBag className="mr-3 inline text-red-500/90" />
        My Orders
      </h2>
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
          <SubCustomerOrderCart />
          <SubCustomerOrderCart />
          <SubCustomerOrderCart />
          <SubCustomerOrderCart />
          <SubCustomerOrderCart />
          <SubCustomerOrderCart />
        </div>
      </div>
    </div>
  );
};

export default DashboardCustomersOrders;
