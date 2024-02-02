import { createSlice } from "@reduxjs/toolkit";

const initialLayoutState = {
  status: null,
  loading: true,
  left: false,
  right: false,
};

export const layoutSlice = createSlice({
  name: "layout",
  initialState: initialLayoutState,
  reducers: {
    r1: (state) => {
      state.loading = false;
    },
  },
});

export const { r1 } = layoutSlice.actions;
export default layoutSlice.reducer;
