import React from "react";
import {
  VendorMainDashboard,
  VendorDashboardLayout,
} from "../../components/mainComponents/Dashboard/vendor";

const dashboard = () => {
  return (
    <div>
      <VendorDashboardLayout>
        <VendorMainDashboard />
      </VendorDashboardLayout>
    </div>
  );
};

export default dashboard;
