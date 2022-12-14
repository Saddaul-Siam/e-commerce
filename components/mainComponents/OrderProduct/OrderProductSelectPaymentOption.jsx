import Image from "next/image";
import React from "react";
import {
  bkash,
  cash,
  nogad,
  rocket,
  sslcommerz,
  stripe,
} from "../../../images/logo";
const SelectPaymentOption = ({ setPayWith }) => {
  return (
    <div className="flex w-full flex-wrap gap-5 text-base">
      <div className="flex items-center gap-2">
        <input
          onChange={(e) => setPayWith(e.target.value)}
          type="radio"
          name="payOption"
          id="bkash"
          value="bkash"
          defaultChecked
        />
        <label
          htmlFor="bkash"
          className="flex cursor-pointer items-center gap-2"
        >
          <Image src={bkash} alt="" height="30" width="30" />
          <span>bKash payment</span>
        </label>
      </div>
      <div className="flex items-center gap-2">
        <input
          onChange={(e) => setPayWith(e.target.value)}
          type="radio"
          name="payOption"
          value="stripe"
          id="stripe"
        />
        <label
          htmlFor="stripe"
          className="flex cursor-pointer items-center gap-2"
        >
          <Image src={stripe} alt="" height="30" width="30" />
          <span>Stripe</span>
        </label>
      </div>
      <div className="flex items-center gap-2">
        <input
          onChange={(e) => setPayWith(e.target.value)}
          type="radio"
          name="payOption"
          id="sslCommerz"
          value="sslCommerz"
        />
        <label
          htmlFor="sslCommerz"
          className="flex cursor-pointer items-center gap-2"
        >
          <Image src={sslcommerz} alt="" height="30" width="100" />
        </label>
      </div>
      <div className="flex items-center gap-2">
        <input
          onChange={(e) => setPayWith(e.target.value)}
          type="radio"
          name="payOption"
          id="nogad"
          value="nogad"
        />
        <label
          htmlFor="nogad"
          className="flex cursor-pointer items-center gap-2"
        >
          <Image src={nogad} alt="" height="25" width="60" />
          <span>Nogad</span>
        </label>
      </div>
      <div className="flex items-center gap-2">
        <input
          onChange={(e) => setPayWith(e.target.value)}
          type="radio"
          name="payOption"
          id="rocket"
          value="rocket"
        />
        <label
          htmlFor="rocket"
          className="flex cursor-pointer items-center gap-2"
        >
          <Image src={rocket} alt="" height="25" width="40" />
          <span>Rocket</span>
        </label>
      </div>
      <div className="flex items-center gap-2">
        <input
          onChange={(e) => setPayWith(e.target.value)}
          type="radio"
          name="payOption"
          id="cash"
          value="cash"
        />
        <label
          htmlFor="cash"
          className="flex cursor-pointer items-center gap-2"
        >
          <Image src={cash} alt="" height="30" width="40" />
          <span> Cash On Delivery</span>
        </label>
      </div>
    </div>
  );
};

export default SelectPaymentOption;
