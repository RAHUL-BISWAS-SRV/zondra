"use client";
import { createSlice } from "@reduxjs/toolkit";
import {
  registerNewUser,
  loginUsers,
  getUserProfileDetails,
} from "@/Functions/Functions";

const initialState = {
  authLog: false,
  userDetails: null,
};

const Slice = createSlice({
  name: "Zondra",
  initialState: initialState,
  reducers: {
    // authLog: (state, action) => {
    //   state.authLog = action.payload;
    // },
    registerUser: async (state, action) => {
      const newUser = {
        name: action.payload.name,
        email: action.payload.email,
        password: action.payload.password,
      };
      const result = await registerNewUser(newUser);
      if (result.status) {
        state.authLog = result.token;
      }
    },
    loginUser: async (state, action) => {
      const existUser = {
        email: action.payload.email,
        password: action.payload.password,
      };
      const result = await loginUsers(existUser);
      if (result.status) {
        console.log(result.token, action.payload);
        state.authLog = action.payload;
      }
    },
    getProfileDetails: async (state, action) => {
      const result = await getUserProfileDetails(action.payload);
    //   console.log(result.details);
      if (result.status) {
        state.userDetails = result.details;
      }
    },
  },
});

export const { authLog, registerUser, loginUser, getProfileDetails } =
  Slice.actions;
export default Slice.reducer;
