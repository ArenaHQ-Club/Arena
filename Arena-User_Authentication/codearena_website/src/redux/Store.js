// create a redux store for the entire website, in simple words global variables
// https://redux-toolkit.js.org/tutorials/quick-start
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./Counter/CounterSlice.js";

export const Store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
