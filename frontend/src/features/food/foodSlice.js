import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../api/api";

export const fetchFoods = createAsyncThunk(
  "food/list",
  async (_, thunkAPI) => {
    try {
      const res = await API.get("/restaurant/all");
      return res.data;
    } catch {
      return thunkAPI.rejectWithValue("Food fetch failed");
    }
  }
);

const foodSlice = createSlice({
  name: "food",
  initialState: {
    foods: [],
    loading: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFoods.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchFoods.fulfilled, (state, action) => {
        state.loading = false;
        state.foods = action.payload;
      });
  },
});

export default foodSlice.reducer;
