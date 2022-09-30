import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { MdKeyboardArrowRight } from "react-icons/md";
import categories from "../../../images/categories";
import Image from "next/image";

const HeadlessUICategoriesDPD = () => {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  return (
    <Transition
      as={Fragment}
      enter="transition ease-out duration-100"
      enterFrom="transform opacity-0 scale-95"
      enterTo="transform opacity-100 scale-100"
      leave="transition ease-in duration-75"
      leaveFrom="transform opacity-100 scale-100"
      leaveTo="transform opacity-0 scale-95"
    >
      <Menu.Items className="absolute left-0 z-10 mt-2 w-[17.5rem] origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
        <div className="py-1">
          {categories.map((category, index) => (
            <Menu.Item key={index}>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block  px-4 py-2 text-sm"
                  )}
                >
                  <div className="flex justify-between">
                    <div className="flex space-x-3">
                      <Image src={category.img} alt="" width="20" height="20" />
                      <p>{category.name}</p>
                    </div>
                    <MdKeyboardArrowRight className="text-xl" />
                  </div>
                </a>
              )}
            </Menu.Item>
          ))}
        </div>
      </Menu.Items>
    </Transition>
  );
};
export default HeadlessUICategoriesDPD;
