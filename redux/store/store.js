import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import authReducer from "../reducers/auth.reducer";
import cartReducer from "../reducers/cart.reducer";
import orderReducer from "../reducers/order.reducer";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  user: authReducer,
  cart: cartReducer,
  order: orderReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
