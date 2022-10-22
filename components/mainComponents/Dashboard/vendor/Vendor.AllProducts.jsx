import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { products } from "../../../../data/products";
import { TbEdit } from "react-icons/tb";
import { MdDeleteOutline } from "react-icons/md";

const VendorAllProducts = () => {
  const router = useRouter();
  return (
    <div className="container">
      <div>
        <h2 className="my-5 text-2xl font-semibold text-gray-600">
          All Products
        </h2>
      </div>
      <div className="w-full overflow-x-auto">
        <table className="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr className="hover:bg-stone-200">
              <td>Product Name</td>
              <td>Details</td>
              <td>Color</td>
              <td>Price</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            {/* <!-- row  --> */}
            {products.slice(0, 8).map((product, i) => (
              <tr className="hover" key={i}>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle relative h-12 w-12">
                        <Image
                          layout="fill"
                          src={product.imageSrc}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{product.name}</div>
                      <div className="text-sm opacity-50">Any Status</div>
                    </div>
                  </div>
                </td>
                <td>
                  Zemlak, Daniel and Leannon
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    Desktop Support Technician
                  </span>
                </td>
                <td>{product.color}</td>
                <td>{product.price}</td>
                <th className="text-xl">
                  <button
                    className="rounded-full p-3 capitalize hover:bg-slate-300"
                    onClick={() =>
                      router.push(`/vendor/products/${product.id}`)
                    }
                  >
                    <TbEdit />
                  </button>
                  <button className="rounded-full p-3 capitalize hover:bg-slate-300">
                    <MdDeleteOutline />
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
          {/* <!-- footer --> */}
          <tfoot className="bg-red-500 ">
            <tr>
              <th>
                <div className="btn-group">
                  <button className="btn btn-sm">1</button>
                  <button className="btn btn-active btn-sm">2</button>
                  <button className="btn btn-sm">3</button>
                  <button className="btn btn-sm">4</button>
                </div>
              </th>
              <th>6 of 6 page (65 items)</th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default VendorAllProducts;
