import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { MdLocationPin } from "react-icons/md";

const DashboardCustomersAddressNew = () => {
  const [allRegions, setAllRegions] = useState([]);
  const [region, setRegion] = useState("");

  const [allCity, setAllCity] = useState([]);
  const [city, setCity] = useState("");

  const [area, setArea] = useState([]);

  useEffect(() => {
    fetch("https://bdapis.herokuapp.com/api/v1.1/divisions")
      .then((res) => res.json())
      .then(({ data }) => {
        setAllRegions(data);
      });

    fetch(`https://bdapis.herokuapp.com/api/v1.1/division/${region}`)
      .then((res) => res.json())
      .then(({ data }) => {
        setAllCity(data);
      });

    const currentCity = allCity?.find((c) => c.district === city);
    setArea(currentCity);
  }, [region, allCity, city]);

  const handleRegionChange = (e) => {
    setRegion(e.target.value);
  };

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };
  return (
    <div>
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold text-gray-700">
          <MdLocationPin className="mr-3 inline text-3xl text-red-500/90" />
          New Addresses
        </h2>
        <Link href="/dashboard/customer/address">
          <button className="bg-red-200 py-2 px-4 text-sm font-semibold text-red-500">
            Back To Addresses
          </button>
        </Link>
      </div>
      <div className="mt-5 grid grid-cols-1 gap-5 rounded-md bg-white p-5 sm:grid-cols-2">
        <div>
          <label className="text-sm text-gray-600" htmlFor="full-name">
            Full Name
          </label>
          <input
            className="h-10 w-full rounded border px-2 outline-1 focus:outline-red-500/90"
            placeholder="Enter your full name"
            type="text"
            required
            name="full-name"
            id="full-name"
          />
        </div>
        <div>
          <label className="text-sm text-gray-600" htmlFor="region">
            Region
          </label>
          <select
            id="region"
            name="region"
            className="h-10 w-full cursor-pointer rounded border disabled:cursor-not-allowed"
            placeholder="Please choose your region "
            onChange={handleRegionChange}
          >
            <option value="">Please choose your region</option>
            {allRegions.map((region, i) => (
              <option value={region.division} key={i}>
                {region.division}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="text-sm text-gray-600" htmlFor="phone-number">
            Phone Number
          </label>
          <input
            className="h-10 w-full rounded border px-2 outline-1 focus:outline-red-500/90"
            placeholder="Please enter your phone number"
            type="number"
            required
            name="phone-number"
            id="phone-number"
          />
        </div>
        <div>
          <label className="text-sm text-gray-600" htmlFor="city">
            City
          </label>
          <select
            id="city"
            name="city"
            disabled={region !== "" ? false : true}
            className="h-10 w-full cursor-pointer rounded border disabled:cursor-not-allowed"
            placeholder="Please choose your city"
            onChange={handleCityChange}
          >
            <option value="">Please choose your city</option>
            {allCity?.map((city, i) => (
              <option value={city.district} key={i}>
                {city.district}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label
            className="text-sm text-gray-600"
            htmlFor="Building/HouseNo/Floor/Street"
          >
            Building / House No / Floor / Street
          </label>
          <input
            className="h-10 w-full rounded border px-2 outline-1 focus:outline-red-500/90"
            placeholder="Please enter"
            type="text"
            required
            name="Building/HouseNo/Floor/Street"
            id="Building/HouseNo/Floor/Street"
          />
        </div>
        <div>
          <label className="text-sm text-gray-600" htmlFor="area">
            Area
          </label>
          <select
            disabled={city !== "" ? false : true}
            id="area"
            name="area"
            className="h-10 w-full cursor-pointer rounded border disabled:cursor-not-allowed"
            placeholder="Please choose your area"
          >
            <option value="">Please choose your area</option>
            {area?.upazilla?.map((up, i) => (
              <option value={up} key={i}>
                {up}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label
            className="text-sm text-gray-600"
            htmlFor="Colony/Suburb/Locality/Landmark"
          >
            Colony / Suburb / Locality / Landmark
          </label>
          <input
            className="h-10 w-full rounded border px-2 outline-1 focus:outline-red-500/90"
            placeholder="Please enter"
            type="text"
            required
            name="Colony/Suburb/Locality/Landmark"
            id="Colony/Suburb/Locality/Landmark"
          />
        </div>
        <div>
          <label className="text-sm text-gray-600" htmlFor="date-of-birth">
            Address
          </label>
          <input
            className="h-10 w-full rounded border px-2 outline-1 focus:outline-red-500/90"
            type="text"
            required
            name="date-of-birth"
            id="date-of-birth"
            placeholder="For Example: House# 123, Street# 123, ABC Road"
          />
        </div>
        <div className="space-x-3">
          <button className="mt-5 w-max rounded bg-slate-200 py-2 px-10 text-base text-gray-600 transition duration-200 ease-in-out hover:bg-slate-300">
            Cancel
          </button>
          <button className="mt-5 w-max rounded bg-red-500/90 bg-white py-2 px-10 text-base text-white transition duration-200 ease-in-out hover:bg-red-600">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashboardCustomersAddressNew;
