import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../api/api";
import { showSuccess, showError } from "../../utils/toast";


// TOGGLE LIKE
export const toggleLike = createAsyncThunk(
  "likeSave/toggleLike",
  async (foodId, thunkAPI) => {
    try {
      const res = await API.post(`/likes/like/${foodId}`);
      return { foodId, message: res.data.message };
    } catch (err) {
      return thunkAPI.rejectWithValue(
        err.response?.data?.message || "Like failed"
      );
    }
  }
);

// TOGGLE SAVE
export const toggleSave = createAsyncThunk(
  "likeSave/toggleSave",
  async (foodId, thunkAPI) => {
    try {
      const res = await API.post(`/likes/save/${foodId}`);
      return { foodId, message: res.data.message };
    } catch (err) {
      return thunkAPI.rejectWithValue(
        err.response?.data?.message || "Save failed"
      );
    }
  }
);

// GET LIKED FOODS
export const fetchLikedFoods = createAsyncThunk(
  "likeSave/fetchLikedFoods",
  async (_, thunkAPI) => {
    try {
      const res = await API.get("/likes/likes");
      return res.data;
    } catch {
      return thunkAPI.rejectWithValue("Failed to load liked foods");
    }
  }
);

// GET SAVED FOODS
export const fetchSavedFoods = createAsyncThunk(
  "likeSave/fetchSavedFoods",
  async (_, thunkAPI) => {
    try {
      const res = await API.get("/likes/saves");
      return res.data;
    } catch {
      return thunkAPI.rejectWithValue("Failed to load saved foods");
    }
  }
);

const likeSaveSlice = createSlice({
  name: "likeSave",
  initialState: {
    likedFoods: [],
    savedFoods: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(toggleLike.fulfilled, (state, action) => {
  state.loading = false;
  showSuccess(action.payload.message);
})

.addCase(toggleSave.fulfilled, (state, action) => {
  state.loading = false;
  showSuccess(action.payload.message);
})

.addCase(toggleLike.rejected, (state, action) => {
  state.loading = false;
  showError(action.payload);
})

.addCase(toggleSave.rejected, (state, action) => {
  state.loading = false;
  showError(action.payload);
});

  },
});

export default likeSaveSlice.reducer;
