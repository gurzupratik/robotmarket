import { createSlice } from "@reduxjs/toolkit";

export const robotSlice = createSlice({
  name: "allrobots",
  initialState: {
    robots: null,
    filterby: "",
  },
  reducers: {
    loadRobots: (state, action) => {
      state.robots = action.payload;
    },
    filterRobots: (state, action) => {
      state.filterby = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { loadRobots, filterRobots } = robotSlice.actions;

export default robotSlice.reducer;
