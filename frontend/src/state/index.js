import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  token: null,
  orders: []
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    
    setLogin: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    setLogout: (state) => {
      state.user = null;
      state.token = null;
    },
    setOrders:(state,action) =>{
      state.orders  = action.payload.orders
    }
    
  },
});

export const {  setLogin, setLogout,setOrders } =
  authSlice.actions;
export default authSlice.reducer;