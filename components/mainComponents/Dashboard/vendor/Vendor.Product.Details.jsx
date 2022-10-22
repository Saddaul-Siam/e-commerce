import React from "react";
import VendorProductAddEditForm from "./Vendor.Product.Add.Edit.Form";

const VendorProductDetails = () => {
  return (
    <div className="mx-auto max-w-4xl">
      <div>
        <h2 className="my-5 text-2xl font-semibold text-gray-600">
          Edit Product
        </h2>
      </div>
      <VendorProductAddEditForm />
    </div>
  );
};

export default VendorProductDetails;
