import { createSlice } from "@reduxjs/toolkit";
import jobs from "../../utils/jobs";

const initialState = {
  jobs: jobs,
};

const experienceSlice = createSlice({
  name: "experience",
  initialState,
  reducers: {},
});

export const { setValue } = experienceSlice.actions;

export default experienceSlice.reducer;
