import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

import { callsAPI } from "../0_elementsIndex/constIndex";

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (loginIDS) => {
    const request = await axios.post(`${callsAPI}user/login`, loginIDS);
    console.log(request.data.body);
    const response = request.data.body;
    console.log(response);
    localStorage.setItem("user", JSON.stringify(response));
    return response;
  }
);

export const userInfos = createAsyncThunk(
  "user/userInfos",
  async (bearerToken) => {
    const request = await axios.post(`${callsAPI}user/profile`, bearerToken);
    console.log(request);
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    loggedIn: false,
    userToken: null,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loggedIn = true;
        state.userToken = action.payload.token;
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loggedIn = false;
        state.userToken = null;
        console.log(action.error.message);
        action.error.message === "Request failed with status code 400"
          ? (state.error = "Identifiants invalides")
          : (state.error = action.error.message);
      });
  },
});

export default userSlice.reducer;

// 1 action redux = 1 objet

// export const store = configureStore({
//   reducer: {
//     user: userSlice.reducer,
//   },
// });
