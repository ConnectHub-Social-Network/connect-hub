import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import { baseURL } from './baseUrl';
import {placeholder} from '../placeholders/placeholder'

const initialState = {
  posts: placeholder,
  loading: false,
  error: null,
};
export const fetchPosts = createAsyncThunk(
  'posts/fetchPosts',
  async (_, thunkAPI) => {
    try {
        await new Promise(r => setTimeout(r, 500));
        return placeholder;  
          } catch (err) {
            return thunkAPI.rejectWithValue(err.message);
        }

});
const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchPosts.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(fetchPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = action.payload;
        })
        .addCase(fetchPosts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        });
    },
});

export default postSlice.reducer;

