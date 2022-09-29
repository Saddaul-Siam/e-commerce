import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { MdKeyboardArrowRight } from "react-icons/md";

const HeadlessUICategoriesDPD = () => {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  const dropdownMenu = [
    { name: "Fashion", href: "" },
    { name: "Electronics", href: "" },
    { name: "Home & Garden", href: "" },
    { name: "Bikes", href: "" },
    { name: " Health & Beauty", href: "" },
    { name: "Baby Toys", href: "" },
    { name: "Pets", href: "" },
  ];
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
      <Menu.Items className="absolute left-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
        <div className="py-1">
          {dropdownMenu.map((menu, index) => (
            <Menu.Item key={index}>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  <div className="flex justify-between">
                    <span>{menu.name}</span>
                    <span>
                      <MdKeyboardArrowRight className="text-xl" />
                    </span>
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
