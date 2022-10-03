import React from "react";
import {
  userAccounts,
  userDashboard,
} from "../../../../data/dashboard.navigation";
import DashboardNavigation from "./Dashboard.Navigation";

const DashboardSideBarNavigation = ({ setShowSideNavigation }) => {
  return (
    <section className="fixed inset-0 flex h-screen w-screen justify-between z-10">
      <div className="h-screen w-3/5 bg-white sm:w-1/3">
        <div className="my-1 rounded-md bg-white p-2 mt-32">
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

      <div
        className="w-3/5 bg-gray-900/60 sm:w-2/3"
        onClick={() => setShowSideNavigation(false)}
      />
    </section>
  );
};

export default DashboardSideBarNavigation;
