import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { callsAPI } from "../0_elementsIndex/constIndex";
import mockupDB from "../1_mockUpDB/mockupDB";

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (loginIDS) => {
    const request = await axios.post(`${callsAPI}user/login`, loginIDS);
    const response = request.data.body;
    alert("Connexion réussie !");
    return response;
  }
);

export const getUserInfos = createAsyncThunk(
  "user/getUserInfos",
  async (bearerToken) => {
    //pour paramerer le header d'authorization avec le token, vu qu'on envoi un body vide
    axios.defaults.headers.common = { Authorization: bearerToken };

    const request = await axios.post(`${callsAPI}user/profile`);
    const response = request.data.body;
    const filteredUser = mockupDB.filter(
      (user) => user.userAccountID === response.id
    );
    const filteredAccounts = filteredUser[0].accounts;
    response.userAccounts = filteredAccounts;

    return response;
  }
);

export const userLogOut = createAsyncThunk("user/logOut", async () => {
  return alert("Utilisateur déconnecté");
});

export const chgUserName = createAsyncThunk(
  "user/chgUserName",
  async (newUserName, bearerToken) => {
    /**
     * envoyer le new username a l'api
     * récup les nouvelles infos de l'user via l'api
     * mettre le state redux à jour avec la réponse
     *
     */
    axios.defaults.headers.common = { Authorization: bearerToken };

    const request = await axios.put(`${callsAPI}user/profile`, newUserName);
    const response = request.data.body;

    console.log(response);
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    loggedIn: false,
    userToken: null,
    error: null,
    userEMail: null,
    userName: null,
    userFirstName: null,
    userLastName: null,
    userID: null,
    userAccounts: [],
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
      })
      .addCase(getUserInfos.fulfilled, (state, action) => {
        state.userEMail = action.payload.email;
        state.userName = action.payload.userName;
        state.userFirstName = action.payload.firstName;
        state.userLastName = action.payload.lastName;
        state.userID = action.payload.id;
        state.userAccounts = action.payload.userAccounts;
      })
      .addCase(userLogOut.fulfilled, (state) => {
        state.loggedIn = false;
        state.userToken = null;
        state.error = null;
        state.userEMail = null;
        state.userName = null;
        state.userFirstName = null;
        state.userLastName = null;
        state.userID = null;
        state.userAccounts = [];
      })

      .addCase(chgUserName.fulfilled, () => {
        console.log("userName changed");
      });
  },
});

export default userSlice.reducer;
