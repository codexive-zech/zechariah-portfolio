import { configureStore } from "@reduxjs/toolkit";
import navbarReducer from "../features/navbar/navbarSlice";
import experienceReducer from "../features/experience/experienceSlice";
import sliderReducer from "../features/slider/sliderSlice";

const store = configureStore({
  reducer: {
    navbar: navbarReducer,
    experience: experienceReducer,
    slider: sliderReducer,
  },
});

export default store;
