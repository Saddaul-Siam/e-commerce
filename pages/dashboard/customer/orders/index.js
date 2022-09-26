import React from "react";
import { DashboardCustomersOrders } from "../../../../components/mainComponents/CustomerDashboard";
import { Footer, Navbar } from "../../../../components/sharedComponents";
import DashboardNavigation from "../../../../components/subComponents/dashboard/Dashboard.Navigation";

const Index = () => {
  const userDashboard = [
    { title: "Orders", route: "/dashboard/customer/orders" },
    { title: "Wishlist", route: "/dashboard/customer/wishlist" },
    { title: "Support Tickets", route: "/dashboard/customer/support-tickets" },
  ];
  const userAccounts = [
    { title: "Profile Info", route: "/dashboard/customer/profile" },
    { title: "Addresses", route: "/dashboard/customer/addresses" },
    { title: "Payment Methods", route: "/dashboard/customer/payment-methods" },
  ];
  return (
    <>
      <Navbar />
      <div className="bg-[#F6F9FC]">
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
              <DashboardCustomersOrders />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Index;
