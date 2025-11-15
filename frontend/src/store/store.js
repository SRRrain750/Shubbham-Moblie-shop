// store/store.js
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice.js"; // ✅ correct import path
import productReducer from './productSlice.js'

 const store = configureStore({
  reducer: {
    user : userReducer,
    product : productReducer
  },
});

export  default store;
