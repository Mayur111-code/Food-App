import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../api/api";
import { showSuccess, showError } from "../../utils/toast";

/* =========================
   CREATE / UPDATE PROFILE
========================= */
export const saveRestaurantProfile = createAsyncThunk(
  "restaurant/saveProfile",
  async (formData, thunkAPI) => {
    try {
      const res = await API.post("/restaurant/profile", formData);
      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(
        err.response?.data?.message || "Failed to save profile"
      );
    }
  }
);

/* =========================
   GET MY PROFILE
========================= */
export const getMyRestaurantProfile = createAsyncThunk(
  "restaurant/getProfile",
  async (_, thunkAPI) => {
    try {
      const res = await API.get("/restaurant/profile/me");
      return res.data;
    } catch {
      return thunkAPI.rejectWithValue("Profile not found");
    }
  }
);

const restaurantSlice = createSlice({
  name: "restaurant",
  initialState: {
    profile: null,
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder

      // SAVE PROFILE
      .addCase(saveRestaurantProfile.pending, (state) => {
        state.loading = true;
      })
      .addCase(saveRestaurantProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.profile = action.payload;
        showSuccess("Restaurant profile saved");
      })
      .addCase(saveRestaurantProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        showError(action.payload);
      })

      // GET PROFILE
      .addCase(getMyRestaurantProfile.pending, (state) => {
        state.loading = true;
      })
      .addCase(getMyRestaurantProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.profile = action.payload;
      })
      .addCase(getMyRestaurantProfile.rejected, (state, action) => {
        state.loading = false;
      });
  },
});

export default restaurantSlice.reducer;
