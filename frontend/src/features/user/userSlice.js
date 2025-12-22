import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../api/api";

// FETCH PROFILE
export const fetchProfile = createAsyncThunk(
  "user/profile",
  async (_, thunkAPI) => {
    try {
      const res = await API.get("/user/me");
      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue("Profile load failed");
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    profile: null,
    loading: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProfile.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.profile = action.payload;
      });
  },
});

export default userSlice.reducer;
