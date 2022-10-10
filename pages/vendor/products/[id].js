import React from "react";
import {
  VendorDashboardLayout,
  VendorProductDetails,
} from "../../../components/mainComponents/Dashboard/vendor";

const id = () => {
  return (
    <div>
      <VendorDashboardLayout>
        <VendorProductDetails />
      </VendorDashboardLayout>
    </div>
  );
};

export default id;
