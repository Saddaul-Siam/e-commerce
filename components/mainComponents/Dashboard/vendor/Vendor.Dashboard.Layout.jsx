import React from "react";
import VendorNavbar from "./Vendor.Navbar";
import VendorSideBarNavigation from "./Vendor.SideBar.Navigation";

const VendorDashboardLayout = ({ children }) => {
  return (
    <div>
      <div className="flex bg-[#EEF5F9]">
        {/* Side bar Navigation*/}
        <div className="w-80">
          <VendorSideBarNavigation />
        </div>
        {/* All Content */}
        <div className="w-full">
          {/* Navbar */}
          <VendorNavbar />
          <div className="p-5">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default VendorDashboardLayout;
