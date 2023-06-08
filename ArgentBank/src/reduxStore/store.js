import { configureStore, createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    userLoggedIn: false,
    userName: null,
    userID: null,
    userToken: null,
    userAccounts: null,
  },
  reducers: {
    // va stocker les données de l'utilisateur (nom, comptes, transactions)
    userLogInSuccess: (state, action) => {
      // type: "user/userLogInSuccess" payload: state.userLoggedIn = true.
      state.userLoggedIn = true;
      state.userName = action.payload.userName;
      state.userID = action.payload.userID;
      state.userToken = action.payload.userToken;
      state.userAccounts = action.payload.userAccounts;
    },

    // va vider les données du state global
    userLogOut: (state) => {
      // type: "user/userLogOut" payload: state.userLoggedIn = true.
      state.userLoggedIn = false;
      state.userName = null;
      state.userID = null;
      state.userToken = null;
      state.userAccounts = null;
    },

    // va stocker le nouveau username et l'envoyer à la DB
    editUsername: (state, action) => {
      // type: "user/editUsername" payload: state.userLoggedIn = true
      state.userName = action.payload.userName;
    },
    // va stocker les infos de transactions modifiées par l'utilisateur et les envoyer à la DB

    editTransaction: () => {
      // type: "user/editTransaction" payload: state.userLoggedIn = true.
    },
  },
});

// 1 action redux = 1 objet

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
});
