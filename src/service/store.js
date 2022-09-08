import { configureStore } from "@reduxjs/toolkit";
import navbarReducer from "../features/navbar/navbarSlice";
import experienceReducer from "../features/experience/experienceSlice";

const store = configureStore({
  reducer: {
    navbar: navbarReducer,
    experience: experienceReducer,
  },
});

export default store;
