import React from "react";
import { SearchingProducts } from "../../../components/mainComponents/SearchingProducts";
import { BottomBar, Footer, Navbar } from "../../../components/sharedComponents";

const name = () => {
  return (
    <>
      <Navbar />
      <SearchingProducts />
      <BottomBar />
      <Footer />
    </>
  );
};

export default name;
