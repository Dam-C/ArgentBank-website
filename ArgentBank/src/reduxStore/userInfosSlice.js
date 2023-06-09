import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

import { callsAPI } from "../0_elementsIndex/constIndex";

export const getUserInfos = createAsyncThunk(
  "user/getUserInfos",
  async (bearerToken) => {
    //pour paramerer le header d'authorization avec le token, vu qu'on envoi un body vide
    axios.defaults.headers.common = { Authorization: bearerToken };

    const request = await axios.post(`${callsAPI}user/profile`);
    console.log(request.data.body);
    const response = request.data.body;
    console.log(response);
    return response;
  }
);

const userInfosSlice = createSlice({
  name: "userInfos",
  initialState: {
    userEMail: null,
    userName: null,
    userFirstName: null,
    userLastName: null,
    userID: null,
  },
  extraReducers: (builder) => {
    builder.addCase(getUserInfos.fulfilled, (state, action) => {
      state.userEMail = action.payload.body.email;
      state.userName = null;
      state.userFirstName = null;
      state.userLastName = null;
      state.userID = null;
    });
  },
});

export default userInfosSlice.reducer;
