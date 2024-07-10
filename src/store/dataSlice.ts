import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import dynamoDb from "@/api/awsConfig";
import { ScanCommand } from "@aws-sdk/lib-dynamodb";
import { ApiDataType } from "@/types/apiDataType";

// Async thunk to fetch data from DynamoDB
export const fetchData = createAsyncThunk("data/fetchData", async () => {
  const params = {
    TableName: "mindbee",
  };

  const command = new ScanCommand(params);
  const data = await dynamoDb.send(command);
  return data.Items as ApiDataType[];
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
