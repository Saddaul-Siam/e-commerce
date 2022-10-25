import Image from "next/image";
import { Fragment } from "react";
import { useDispatch } from "react-redux";
import { Dialog, Transition } from "@headlessui/react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { addToCart } from "../../../redux/reducers/cart.reducer";
import Link from "next/link";

const ProductsModal = ({ setIsOpen, isOpen, product }) => {
  const dispatch = useDispatch();
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => setIsOpen(false)}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-50" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Dialog.Panel
                  className="w-full max-w-xl transform overflow-hidden rounded-xl bg-white
                p-5 text-left align-middle shadow-xl transition-all lg:max-w-2xl"
                >
                  <div className="grid grid-cols-2 gap-5">
                    <div className="">
                      <Image
                        className="rounded-md"
                        height="350"
                        width="250"
                        src={product.imageSrc}
                        alt=""
                      />
                      {/* images */}
                      <div className="flex gap-x-2">
                        <Image
                          className="cursor-pointer rounded-md"
                          height="100"
                          width="78"
                          src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg"
                          alt=""
                        />
                        <Image
                          className="cursor-pointer rounded-md"
                          height="100"
                          width="78"
                          src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg"
                          alt=""
                        />
                        <Image
                          className="cursor-pointer rounded-md"
                          height="100"
                          width="78"
                          src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg"
                          alt=""
                        />
                      </div>
                      <div className=""></div>
                    </div>
                    <div className="space-y-1.5 text-sm text-gray-500 sm:space-y-3">
                      <h2 className="pb-3 text-xl font-bold text-black sm:text-3xl">
                        {product.name}
                      </h2>
                      <p className="">
                        Brand:{" "}
                        <span className="font-semibold text-gray-700">
                          {product.brand}
                        </span>
                      </p>
                      <p className="">
                        Rated:{product.rating}
                        <span className="font-semibold text-gray-700">
                          {" "}
                          ({product.rating?.length})
                        </span>
                      </p>
                      <p className="">Status: {product.status}</p>
                      <p className="pt-3 text-2xl font-bold text-red-500/90 sm:pt-5 sm:text-3xl">
                        ${product.price}
                      </p>
                      <div className="py-5">
                        <button
                          onClick={() => dispatch(addToCart(product))}
                          className="ease-in-outs rounded-md bg-red-500/90 px-10 py-2 text-white transition duration-300 hover:bg-red-600"
                        >
                          Add to cart
                        </button>
                      </div>
                      <p className="">
                        Sold By:
                        <Link href="/shop/siam">
                          <a>
                            <span className="font-semibold text-gray-700">
                              Siam Store
                            </span>
                          </a>
                        </Link>
                      </p>
                    </div>
                  </div>
                </Dialog.Panel>
              </div>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition>
    </>
  );
};
export default ProductsModal;
