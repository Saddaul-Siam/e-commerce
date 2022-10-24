import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "../reducers/auth.reducer";

const rootReducer = combineReducers({
  user: authReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
