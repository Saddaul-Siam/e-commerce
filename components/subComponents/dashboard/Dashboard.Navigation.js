import React from "react";

const DashboardNavigation = ({ navData }) => {
  return (
    <ul>
      {navData.map((nav, index) => (
        <li
          className="my-1 cursor-pointer bg-slate-200/90 p-1 pl-3 text-base text-gray-600 transition duration-200 ease-in-out hover:bg-red-500/90 hover:text-white"
          key={index}
        >
          {nav.title}
        </li>
      ))}
    </ul>
  );
};

export default DashboardNavigation;
