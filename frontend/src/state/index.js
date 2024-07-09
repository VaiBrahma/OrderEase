import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  token: null,
  orders: [],
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLogin: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isAdmin = action.payload.isAdmin;
      state.id = action.payload.userId;
    },
    setLogout: (state) => {
      state.user = null;
      state.token = null;
      state.isAdmin = null;
      state.id = null;
    },
    setOrders: (state, action) => {
      state.orders = action.payload.orders;
    },
  },
});

export const { setLogin, setLogout, setOrders } = authSlice.actions;
export default authSlice.reducer;
