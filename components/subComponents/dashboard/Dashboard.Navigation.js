import React from "react";

const DashboardNavigation = ({ navData }) => {
  return (
    <ul>
      {navData.map((nav, index) => (
        <li
          className="my-2 flex cursor-pointer p-1 pl-3 text-base text-gray-600 transition duration-200 ease-in-out hover:bg-red-500/90 hover:text-white items-center space-x-3"
          key={index}
        >
          <span>{nav.icon}</span>
          <span>{nav.title}</span>
        </li>
      ))}
    </ul>
  );
};

export default DashboardNavigation;
