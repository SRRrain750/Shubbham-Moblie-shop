// store/store.js
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice.js"; // ✅ correct import path

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;
