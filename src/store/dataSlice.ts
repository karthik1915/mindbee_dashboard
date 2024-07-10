import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { ApiDataType } from "@/types/apiDataType";

// Async thunk to fetch data from DynamoDB
export const fetchData = createAsyncThunk("data/fetchData", async () => {
  const response = await fetch("/.netlify/functions/fetchData");
  const data = await response.json();
  return data as ApiDataType[];
});

export interface DataState {
  items: ApiDataType[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: DataState = {
  items: [],
  status: "idle",
  error: null,
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message!;
      });
  },
});

export default dataSlice.reducer;
