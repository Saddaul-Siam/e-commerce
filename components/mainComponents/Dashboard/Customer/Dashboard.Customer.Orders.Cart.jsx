import Link from "next/link";
import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

const DashboardCustomerOrdersCart = ({ orders }) => {
  return (
    <>
      {orders.slice(0, 3).map(({ id, status, date, total }, i) => (
        <Link key={i} href={`/dashboard/customer/orders/${id}`}>
          <ul className="my-3 grid cursor-pointer grid-cols-4 rounded-md bg-white py-5 px-5 text-base font-light text-gray-600 shadow">
            <li className="text-sm text-black sm:text-lg">{id}</li>
            <li>
              <p className="inline rounded-full bg-slate-200 py-1 px-3 text-sm">
                {status}
              </p>
            </li>
            <li className="text-sm sm:text-base">{date}</li>
            <li className="flex justify-between text-sm sm:text-base">
              <span>$ {total}</span>
              <span className="cursor-pointer rounded-full p-2 transition duration-200 ease-in-out hover:bg-slate-200 sm:text-lg">
                <AiOutlineArrowRight />
              </span>
            </li>
          </ul>
        </Link>
      ))}
    </>
  );
};

export default DashboardCustomerOrdersCart;
