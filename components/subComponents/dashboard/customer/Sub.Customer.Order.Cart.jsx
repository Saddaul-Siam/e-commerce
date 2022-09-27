import Link from "next/link";
import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

const SubCustomerOrderCart = ({ orders }) => {
  return (
    <>
      {orders.map(({ id, status, date, total }, i) => (
        <ul
          key={i}
          className="my-3 grid grid-cols-4 rounded-md bg-white py-5 px-5 text-base font-light text-gray-600 shadow"
        >
          <li className="text-lg text-black">{id}</li>
          <li>
            <p className="inline rounded-full bg-slate-200 py-1 px-3 text-sm">
              {status}
            </p>
          </li>
          <li>{date}</li>
          <li className="flex justify-between">
            <span>$ {total}</span>
            <Link href={`/dashboard/customer/orders/${id}`}>
              <span className="cursor-pointer rounded-full p-2 text-xl transition duration-200 ease-in-out hover:bg-slate-200">
                <AiOutlineArrowRight />
              </span>
            </Link>
          </li>
        </ul>
      ))}
    </>
  );
};

export default SubCustomerOrderCart;
