import React from "react";
import { DashboardCustomersOrders } from "../../../../components/mainComponents/Dashboard/Customer";
import { Footer, Navbar } from "../../../../components/sharedComponents";
import { DashboardNavigation } from "../../../../components/mainComponents/Dashboard/Commone";
import {
  userAccounts,
  userDashboard,
} from "../../../../data/dashboard.navigation";

const Index = () => {
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
