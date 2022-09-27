import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const DashboardNavigation = ({ navData }) => {
  console.log(navData);
  const { route } = useRouter();
  return (
    <ul>
      {navData.map((nav, index) => (
        <Link href={nav.route} key={index}>
          <li
            className={`my-2 flex cursor-pointer items-center space-x-3 border-l-4 p-1 pl-3 text-base text-gray-500 transition duration-200 ease-in-out hover:border-red-500/90 hover:text-red-500/90 ${
              route === nav.route
                ? "border-l-4 border-red-500/90 text-red-500/90"
                : "border-white bg-white text-gray-500"
            }`}
          >
            <span className="text-lg">{nav.icon}</span>
            <span>{nav.title}</span>
          </li>
        </Link>
      ))}
    </ul>
  );
};

export default DashboardNavigation;
