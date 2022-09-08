import { configureStore } from "@reduxjs/toolkit";
import navbarReducer from "../features/navbar/navbarSlice";

const store = configureStore({
  reducer: {
    navbar: navbarReducer,
  },
});

export default store;
