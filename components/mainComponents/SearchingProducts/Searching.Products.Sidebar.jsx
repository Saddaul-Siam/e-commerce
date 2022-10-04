import React from "react";
import SearchingProductsSidebarMenu from "./Searching.Products.Sidebar.Menu";

const SearchingProductsSidebar = ({ setShowSidebar }) => {
  return (
    <section className="fixed inset-0 z-10 flex h-screen w-screen justify-between ">
      <div className="h-screen w-3/5 overflow-auto bg-white sm:w-1/3">
        <div className="mt-32 mb-10">
          <SearchingProductsSidebarMenu />
        </div>
      </div>
      <div
        className="h-full w-3/5 bg-gray-900/60 sm:w-2/3"
        onClick={() => setShowSidebar(false)}
      />
    </section>
  );
};
export default SearchingProductsSidebar;
