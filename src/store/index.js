import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./postSlice";


// Configure the redux store
const store = configureStore({
  reducer: {
    posts: postReducer,
  },
});

export default store;