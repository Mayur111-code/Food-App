import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { showError, showSuccess } from "../../utils/toast";

import API from "../../api/api";

// FETCH USER ORDERS
export const fetchMyOrders = createAsyncThunk(
  "order/fetchMyOrders",
  async (_, thunkAPI) => {
    try {
      const res = await API.get("/order/my");
      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(
        err.response?.data?.message || "Failed to load orders"
      );
    }
  }
);

const orderSlice = createSlice({
  name: "order",
  initialState: {
    orders: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMyOrders.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMyOrders.fulfilled, (state, action) => {
        state.loading = false;
        state.orders = action.payload;
        showSuccess("Order Fetched");
      })
      .addCase(fetchMyOrders.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        showError(action.payload);
      });
  },
});

export default orderSlice.reducer;
