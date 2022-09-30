import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsFillCameraFill } from "react-icons/bs";
import { MdAccountCircle } from "react-icons/md";

const DashboardCustomersProfileEdit = () => {
  return (
    <div className="mb-10">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold text-gray-700">
          <MdAccountCircle className="mr-3 inline text-red-500/90" />
          Edit Profile
        </h2>
        <Link href="/dashboard/customer/profile">
          <button className="bg-red-200 py-2 px-4 text-sm font-semibold text-red-500">
            Back Profile
          </button>
        </Link>
      </div>
      <div className="mt-10 rounded-md bg-white p-5">
        <div className="relative inline-flex">
          <Image
            height="60"
            width="60"
            className="rounded-full "
            src="https://bonik-react.vercel.app/assets/images/faces/ralph.png"
            alt=""
          />
          <span className="absolute bottom-0 -right-5 rounded-full bg-slate-300 p-2 text-lg">
            <BsFillCameraFill />
          </span>
        </div>
        <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div>
            <label className="text-sm text-gray-600" htmlFor="first-name">
              First Name
            </label>
            <input
              className="h-10 w-full rounded border outline-1 focus:outline-red-500/90"
              type="text"
              required
              name="first-name"
              id="first-name"
            />
          </div>
          <div>
            <label className="text-sm text-gray-600" htmlFor="last-name">
              Last Name
            </label>
            <input
              className="h-10 w-full rounded border outline-1 focus:outline-red-500/90"
              type="text"
              required
              name="last-name"
              id="last-name"
            />
          </div>
          <div>
            <label className="text-sm text-gray-600" htmlFor="email">
              Email
            </label>
            <input
              className="h-10 w-full rounded border outline-1 focus:outline-red-500/90"
              type="email"
              required
              name="email"
              id="email"
            />
          </div>
          <div>
            <label className="text-sm text-gray-600" htmlFor="phone-number">
              Phone Number
            </label>
            <input
              className="h-10 w-full rounded border outline-1 focus:outline-red-500/90"
              type="number"
              required
              name="phone-number"
              id="phone-number"
            />
          </div>
          <div>
            <label className="text-sm text-gray-600" htmlFor="date-of-birth">
              Birth date
            </label>
            <input
              className="h-10 w-full rounded border outline-1 focus:outline-red-500/90"
              type="date"
              required
              name="date-of-birth"
              id="date-of-birth"
            />
          </div>
        </div>
        <button className="mt-5 rounded-md bg-red-500/90 bg-white py-2 px-4 text-sm font-semibold text-white">
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default DashboardCustomersProfileEdit;
