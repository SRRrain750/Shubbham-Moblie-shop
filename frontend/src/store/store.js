// store/store.js
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice.js"; // ✅ correct import path
import productReducer from './productSlice.js'
import cartReducer  from './cartProduct.js'
import addressReducer from './addressSlice.js'
 const store = configureStore({
  reducer: {
    user : userReducer,
    product : productReducer,
    cartItem : cartReducer,
    addresses : addressReducer
  },
});

export  default store;
