import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  customerSocket: null,
};

const socketSlice = createSlice({
  name: "socket",
  initialState,
  reducers: {
    customerSocketConnectSuccess(state, action) {
      state.customerSocket = action.payload;
    },
    customerSocketConnectDisConnect(state, action) {
      state.customerSocket = null;
    },
  },
});

export const { customerSocketConnectSuccess, customerSocketConnectDisConnect } =
  socketSlice.actions;

export default socketSlice.reducer;
