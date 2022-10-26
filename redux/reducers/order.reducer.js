import { createSlice } from "@reduxjs/toolkit";

export const orderReducer = createSlice({
  name: "order",
  initialState: {
    orderItems: [],
    orderInfo: {},
    paymentInfo: [],
  },
  reducers: {
    addOrderItems: (state, { payload }) => {
      state.orderItems = payload;
    },
    addOrderInfo: (state, { payload }) => {
      state.orderInfo = payload;
    },
    addPaymentInfo: (state, { payload }) => {
      state.paymentInfo = payload;
    },
  },
});

export const { addOrderItems, addOrderInfo, addPaymentInfo } =
  orderReducer.actions;

export default orderReducer.reducer;
