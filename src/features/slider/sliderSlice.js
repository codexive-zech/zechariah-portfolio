import { createSlice } from "@reduxjs/toolkit";
import people from "../../utils/people";

const initialState = {
  people: people,
};

const sliderSlice = createSlice({
  name: "slider",
  initialState,
  reducers: {},
});

export default sliderSlice.reducer;
