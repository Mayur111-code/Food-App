import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { showSuccess, showError } from "../../utils/toast";

import API from "../../api/api";

// LOGIN API
export const loginUser = createAsyncThunk(
  "auth/login",
  async (formData, thunkAPI) => {
    try {
      const res = await API.post("/auth/login", formData);
      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data.message);
    }
  }
);

// REGISTER API
export const registerUser = createAsyncThunk(
  "auth/register",
  async (formData, thunkAPI) => {
    try {
      const res = await API.post("/auth/register", formData);
      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(
        err.response?.data?.message || "Registration failed"
      );
    }
  }
);


const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: false,
    token: null,
    role: null,
    loading: false,
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.isAuthenticated = false;
      state.token = null;
      state.role = null;
    },
  },
  extraReducers: (builder) => {
  builder
    // LOGIN
    .addCase(loginUser.pending, (state) => {
      state.loading = true;
    })
    .addCase(loginUser.fulfilled, (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.token = action.payload.token;
      state.role = action.payload.role;
      showSuccess("Login successful");


       localStorage.setItem("token", action.payload.token);

    })
    .addCase(loginUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
      showError(action.payload);
    })

    // REGISTER
    .addCase(registerUser.pending, (state) => {
      state.loading = true;
    })
    .addCase(registerUser.fulfilled, (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.token = action.payload.token;
      state.role = action.payload.role;
      showSuccess("Account created successfully");

        localStorage.setItem("token", action.payload.token);

    })
    .addCase(registerUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
      showError(action.payload);
    });
}

});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
