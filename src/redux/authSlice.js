import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
  },
  reducers: {
    login: (state, action) => {
      const { username, password } = action.payload;
      // Simulate authentication process
      if (username === "user" && password === "password") {
        state.user = { username };
        localStorage.setItem("user", JSON.stringify({ username }));
      }
    },
    signup: (state, action) => {
      const { username, password } = action.payload;
      // Simulate signup process
      localStorage.setItem("user", JSON.stringify({ username }));
      state.user = { username };
    },
    logout: (state) => {
      localStorage.removeItem("user");
      state.user = null;
    },
  },
});

export const { login, signup, logout } = authSlice.actions;

export default authSlice.reducer;
