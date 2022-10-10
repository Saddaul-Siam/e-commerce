import React from "react";
import VendorNavbar from "./Vendor.Navbar";
import VendorSideBarNavigation from "./Vendor.SideBar.Navigation";

const VendorMain = () => {
  return (
    <div>
      <div className="flex bg-[#EEF5F9]">
        {/* Side bar Navigation*/}
        <div className="w-80">
          <VendorSideBarNavigation />
        </div>
        {/* All Content */}
        <div className="w-full">
          {/* Navbar */}
          <VendorNavbar />
          <div className="px-5">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta
            facilis fugiat perferendis excepturi necessitatibus sed, enim quae
            repellendus, inventore ipsam ullam. Voluptatum quos unde dolore
            animi ex incidunt voluptates asperiores nulla quas fugiat eligendi
            doloribus temporibus atque eum placeat voluptatem architecto,
            ratione magni. Aperiam, facere unde, mollitia deleniti totam libero
            consequatur assumenda illo officiis a cum dolorum architecto
            quisquam suscipit tenetur, eligendi quidem sunt ab blanditiis quo
            veritatis? Eius, tempore consequuntur fuga aperiam reiciendis
            distinctio asperiores fugiat numquam nobis obcaecati nemo. Expedita,
            quaerat, nam similique dolorum corporis ullam dolore veritatis
            debitis perspiciatis accusantium aliquam ea placeat distinctio
            repellendus aliquid voluptates.
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendorMain;
