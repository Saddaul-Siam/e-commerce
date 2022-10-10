import React from "react";
import {
  VendorAccountSettings,
  VendorDashboardLayout,
} from "../../components/mainComponents/Dashboard/vendor";

const accountSettings = () => {
  return (
    <div>
      <VendorDashboardLayout>
        <VendorAccountSettings />
      </VendorDashboardLayout>
    </div>
  );
};

export default accountSettings;
