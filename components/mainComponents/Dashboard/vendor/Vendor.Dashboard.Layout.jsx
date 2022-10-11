import React from "react";
import VendorNavbar from "./Vendor.Navbar";
import VendorSideBarNavigation from "./Vendor.SideBar.Navigation";

const VendorDashboardLayout = ({ children }) => {
  return (
    <div>
      <div className="flex">
        {/* Side bar Navigation*/}
        <div className="hidden w-80 sm:block">
          <VendorSideBarNavigation />
        </div>
        {/* All Content */}
        <div className="w-full">
          {/* Navbar */}
          <VendorNavbar />
          <div className="h-[93.4vh] overflow-y-scroll p-5">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default VendorDashboardLayout;
