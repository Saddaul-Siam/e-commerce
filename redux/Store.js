import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "../redux/reducers/Products.reducer";

export const store = configureStore({
  reducer: {
    products: ProductReducer,
  },
});
