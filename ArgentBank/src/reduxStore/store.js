import { createSlice } from "@reduxjs/toolkit";

const checkUserAuth = createSlice({
  name: "userName",
  initialState: "",
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const {increment, decrement, incrementByAmount} = counterSlice.actions;

export const checkUserAuth.reducers
