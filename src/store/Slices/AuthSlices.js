import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from  "../baseUrl";

axios.defaults.withCredentials = true;

//check if the User authencticated/signin
export const checkAuthStatus = createAsyncThunk (
   "auth/checkAuthStatus",
   async () => {
    try{
    const response = await axios.get(`${BASE_URL}/auth/me`);
     return response.data.User
    } catch (error) {
        throw err
    }
   }
    
    
);

// Register user 
export const registerUser = createAsyncThunk (
    "auth/registerUser",
    async(userData)=> {
        try{
      const response = await axios.post(`${BASE_URL}/auth/register`,userData)
        return response.data.Userser;
        } catch(error) {
          if(error.response?.data?.error) {
            throw new Error(error.response.data.error);
          }
           throw error;
        }
    }
)

// Lognin user
export const loginUser = createAsyncThunk(
    "auth/loginUser",
    async(userData)=>{

        try{
       const response = await axios.post(`${BASE_URL}/auth/login`,userData);
        return response.data.user
        }catch(error){
            if (error.response?.data?.error){
                throw new Error(error.response.data.error);
            }
            throw error;
        }
    }
)

// Logout user
 export const LogoutUser = createAsyncThunk(
    "auth/LogoutUser",
    async() => {
        await axios.post(`${BASE_URL}/auth/LogoutUser`);
    }

 )

const initialState = {
    isAuthenticated: false,
    User:null,
    status:"idle",
    error:null
}

const AuthSlice = createSlice ({
    name:"auth",
    initialState: initialState,
    extraReducers: (builder) => {
        
        //checkAutStatus
         builder
         .addCase(checkAuthStatus.pending, (state)=>{
            state.status= "loading,"
         })
         .addCase(checkAuthStatus.fulfilled, (state, action)=>{
            state.status= "succeeded",
            state.isAuthenticated= true,
            state.User= action.payload
            state.error= false

         })
         .addCase(checkAuthStatus.rejected, (state)=>{
            state.status= "failed",
            state.isAuthenticated= false,
            state.error= null
         })
         //Register cases
         .addCase(registerUser.pending, (state)=>{
            state.stuts= "loading",
            state.error=null
            
         })
         .addCase(registerUser.fulfilled,(state, action)=> {
            state.status= "succeeded",
            state.isAuthenticated= true,
            state.User= action.payload
            state.error=null
         })
         .addCase(registerUser.rejected, (state,action)=>{
            state.status= "failed",
            state.error= action.error.message
         })
         // Login cases
         .addCase(loginUser.pending, (state)=>{
            state.stuts= "loading",
            state.error=null
            
         })
         .addCase(loginUser.fulfilled,(state, action)=> {
            state.status= "succeeded",
            state.isAuthenticated= true,
            state.User= action.payload
            state.error=null
         })
         .addCase(loginUser.rejected, (state,action)=>{
            state.status= "failed",
            state.error= action.error.message
         })
         .addCase(LogoutUser.fulfilled, (state)=> {
            state.status= "idle",
            state.isAuthenticated= false,
            state.User=null
            state.error= null
         })
    }
})

export default AuthSlice.reducer;