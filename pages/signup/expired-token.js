import Link from "next/link";
import React from "react";

const expiredToken = () => {
  return (
    <div className="h-screen ">
      <div className="flex h-full flex-col items-center justify-center space-y-10">
        <div className="flex items-center space-x-3">
          <h2 className="text-6xl text-gray-600">401</h2>
          <div>
            <h2 className="text-2xl text-gray-600">Oops! You`re lost.</h2>
            <h2 className="text-lg text-gray-500">Your token has expired.</h2>
          </div>
        </div>
        <div>
          <Link href="/">
            <a>
              <button className="rounded-md bg-red-500/90 py-3 px-10 text-white">
                Back To Home
              </button>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default expiredToken;
