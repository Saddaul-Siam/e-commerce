import React from "react";
import VendorProductAddEditForm from "./Vendor.Product.Add.Edit.Form";

const VendorAddProduct = () => {
  return (
    <div className="mx-auto max-w-4xl">
      <div>
        <h2 className="my-5 text-2xl font-semibold text-gray-600">
          Add New Product
        </h2>
      </div>
      <VendorProductAddEditForm />
    </div>
  );
};

export default VendorAddProduct;
