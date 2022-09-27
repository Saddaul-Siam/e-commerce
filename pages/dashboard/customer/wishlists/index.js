import React from "react";
import { BiSupport } from "react-icons/bi";
import { FiHeart } from "react-icons/fi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BsBag, BsCreditCard2Back } from "react-icons/bs";
import { MdOutlineAccountCircle } from "react-icons/md";
import { Footer, Navbar } from "../../../../components/sharedComponents";
import DashboardNavigation from "../../../../components/subComponents/dashboard/Dashboard.Navigation";
import { DashboardCustomersWishlists } from "../../../../components/mainComponents/CustomerDashboard";

const Index = () => {
  const userDashboard = [
    {
      title: "Orders",
      route: "/dashboard/customer/orders",
      icon: <BsBag />,
    },
    {
      title: "Wishlists",
      route: "/dashboard/customer/wishlists",
      icon: <FiHeart />,
    },
    {
      title: "Support Tickets",
      route: "/dashboard/customer/support-tickets",
      icon: <BiSupport />,
    },
  ];
  const userAccounts = [
    {
      title: "Profile Info",
      route: "/dashboard/customer/profile",
      icon: <MdOutlineAccountCircle />,
    },
    {
      title: "Addresses",
      route: "/dashboard/customer/addresses",
      icon: <HiOutlineLocationMarker />,
    },
    {
      title: "Payment Methods",
      route: "/dashboard/customer/payment-methods",
      icon: <BsCreditCard2Back />,
    },
  ];
  return (
    <>
      <Navbar />
      {/* <div className=""> */}
      <div className="container mt-44">
        <div className="grid grid-cols-4 gap-5 pt-5">
          <div className="col-span-1">
            <div className="my-1 rounded-md bg-white p-2">
              <h2 className="ml-3 pb-5 text-base font-medium text-gray-600">
                DASHBOARD
              </h2>
              <DashboardNavigation navData={userDashboard} />
              <h2 className="ml-3 py-5 text-base font-medium text-gray-600">
                ACCOUNT SETTINGS
              </h2>
              <DashboardNavigation navData={userAccounts} />
            </div>
          </div>
          <div className="col-span-3">
            <DashboardCustomersWishlists />
          </div>
        </div>
      </div>
      {/* </div> */}
      <Footer />
    </>
  );
};

export default Index;
