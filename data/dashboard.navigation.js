import { BiSupport } from "react-icons/bi";
import { FiHeart } from "react-icons/fi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BsBag, BsCreditCard2Back } from "react-icons/bs";
import { MdOutlineAccountCircle } from "react-icons/md";

export const userDashboard = [
  {
    title: "Orders",
    route: "/dashboard/customer/orders",
    icon: <BsBag />,
  },
  {
    title: "Wishlists",
    route: "/dashboard/customer/wishlists",
    icon: <FiHeart />,
  },
  {
    title: "Support Tickets",
    route: "/dashboard/customer/support-tickets",
    icon: <BiSupport />,
  },
];
export const userAccounts = [
  {
    title: "Profile Info",
    route: "/dashboard/customer/profile",
    icon: <MdOutlineAccountCircle />,
  },
  {
    title: "Addresses",
    route: "/dashboard/customer/addresses",
    icon: <HiOutlineLocationMarker />,
  },
  {
    title: "Payment Methods",
    route: "/dashboard/customer/payment-methods",
    icon: <BsCreditCard2Back />,
  },
];
