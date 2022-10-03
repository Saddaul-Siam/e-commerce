import React from "react";
import { OrderProductCart } from "../components/mainComponents/OrderProduct";
import { BottomBar, Footer, Navbar } from "../components/sharedComponents";

const Cart = () => {
  return (
    <>
      <Navbar />
      <OrderProductCart />
      <BottomBar />
      <Footer />
    </>
  );
};

export default Cart;
