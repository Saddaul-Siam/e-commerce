import React from "react";

const VendorProductAddEditForm = () => {
  return (
    <div className="rounded-md bg-white p-10">
      <div className="flex gap-10">
        <div className="flex w-1/2 flex-col">
          <label htmlFor="productName" className="text-gray-600">
            Product Name
          </label>
          <input
            type="text"
            name="productName"
            id="productName"
            placeholder="Product Name"
            className="input input-bordered h-12 rounded-md border px-3"
          />
        </div>
        <div className="flex w-1/2 flex-col">
          <label htmlFor="selectCategory" className="text-gray-600">
            Product Name
          </label>
          <select
            id="selectCategory"
            className="select border-gray-200 text-base font-normal text-gray-500/80"
          >
            <option disabled selected className="text-gray-400">
              Pick your favorite Simpson
            </option>
            <option>Homer</option>
            <option>Marge</option>
            <option>Bart</option>
            <option>Lisa</option>
            <option>Maggie</option>
          </select>
        </div>
      </div>
      <div>
        <label
          htmlFor="upload photo"
          className="mt-10 flex w-full flex-col items-center justify-center rounded-md border border-dashed p-5"
        >
          <h4 className="font-semibold text-gray-500/80">
            Drag & drop product image here
            <span className="divider text-xs">OR</span>
          </h4>
          <span className="btn mb-5 rounded-md border-none bg-red-100 text-red-500 shadow-md hover:bg-red-200">
            Select File
          </span>
          <p>Upload 400*300</p>
        </label>
        <input
          type="file"
          id="upload photo"
          name="upload photo"
          className="hidden"
        />
      </div>
      <div className="mt-10 flex flex-col">
        <label htmlFor="description">Description</label>
        <textarea
          name="description"
          id="description"
          placeholder="Description"
          cols=""
          rows="7"
          className="rounded-md border p-3 ring-offset-2 focus:outline-none focus:ring-2 focus:ring-gray-300"
        />
      </div>
      <div className="mt-10 flex gap-10">
        <div className="flex w-1/2 flex-col">
          <label htmlFor="productName" className="text-gray-600">
            Stock
          </label>
          <input
            type="text"
            name="productName"
            id="productName"
            placeholder="Product Name"
            className="input input-bordered h-12 rounded-md border px-3"
          />
        </div>
        <div className="flex w-1/2 flex-col">
          <label htmlFor="productName" className="text-gray-600">
            Tags
          </label>
          <input
            type="text"
            name="productName"
            id="productName"
            placeholder="Product Name"
            className="input input-bordered h-12 rounded-md border px-3"
          />
        </div>
      </div>
      <div className="mt-10 flex gap-10">
        <div className="flex w-1/2 flex-col">
          <label htmlFor="productName" className="text-gray-600">
            Regular Price
          </label>
          <input
            type="number"
            name="productName"
            id="productName"
            placeholder="Product Name"
            className="input input-bordered h-12 rounded-md border px-3"
          />
        </div>
        <div className="flex w-1/2 flex-col">
          <label htmlFor="productName" className="text-gray-600">
            Sale Price
          </label>
          <input
            type="number"
            name="productName"
            id="productName"
            placeholder="Product Name"
            className="input input-bordered h-12 rounded-md border px-3"
          />
        </div>
      </div>
      <button className="btn mt-10 border-none bg-red-500/90 hover:bg-red-600">
        Save Product
      </button>
    </div>
  );
};

export default VendorProductAddEditForm;
