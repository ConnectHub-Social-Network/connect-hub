import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./Slices/PostSlices";
import AuthReducer from "./Slices/AuthSlices";

const store = configureStore({
    reducer:{
     posts: postReducer,
     Auth: AuthReducer
    }
})

export default store;