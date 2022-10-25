import { createSlice } from "@reduxjs/toolkit";

export const authReducer = createSlice({
  name: "user",
  initialState: {
    user: {},
  },
  reducers: {
    addUser: (state, { payload }) => {
      state.user = payload;
    },
  },
});

export const { addUser } = authReducer.actions;

export default authReducer.reducer;
