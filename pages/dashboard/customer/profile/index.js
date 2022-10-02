import React from "react";
import {
  BottomBar,
  Footer,
  Navbar,
} from "../../../../components/sharedComponents";
import { DashboardNavigation } from "../../../../components/mainComponents/Dashboard/Commone";
import {
  userAccounts,
  userDashboard,
} from "../../../../data/dashboard.navigation";
import { DashboardCustomersProfile } from "../../../../components/mainComponents/Dashboard/Customer";

const Index = () => {
  return (
    <>
      <Navbar />
      <div className="container mt-32 px-3 pb-5 lg:mt-44 xl:px-0">
        <div className="grid grid-cols-4 gap-5 pt-5">
          <div className="hidden lg:col-span-1 lg:block">
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
          <div className="col-span-4 lg:col-span-3">
            <DashboardCustomersProfile />
          </div>
        </div>
      </div>
      <BottomBar />
      <Footer />
    </>
  );
};

export default Index;
