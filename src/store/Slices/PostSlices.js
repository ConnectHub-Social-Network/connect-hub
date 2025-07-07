import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../baseUrl";
import { Users } from "lucide-react";


axios.defaults.withCredentials = true;
const getAuthHeader = () => {
  const token = localStorage.getItem("authToken");
  return {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    withCredentials: false,
  };
};
// fetch posts + fetch user info for each post
export const fetchPostsWithUsers = createAsyncThunk(
  "posts/fetchPostsWithUsers",
  async (_, thunkAPI) => {
    try {
      const token = localStorage.getItem("authToken");

      // Fetch posts feed
      const postsResponse = await axios.get(`${BASE_URL}/posts/feed`, getAuthHeader());
      //console.log("postsResponse.data", postsResponse.data);

      const posts = postsResponse.data;
console.log("postslice",posts)
      // Extract unique userIds from posts
      const userIds = [...new Set(posts.map((post) => post.userId))];

      // Fetch each user's info concurrently
      const userRequests = userIds.map((id) =>
        axios
          .get(`${BASE_URL}/users/${id}`, getAuthHeader())
          .then((res) => res.data)
      );

      const users = await Promise.all(userRequests);
console.log("userslice",users)
      // Create a map userId => user
      const userMap = {};
      users.forEach((user) => {
        userMap[user.id] = user;
      });
console.log("usermappp",userMap.undefined)
      // Attach user info to each post
      const postsWithUsers = posts.map((post) => ({
        ...post,
        user: userMap.undefined || { name: "User Not Found" }
      }));
      
      return postsWithUsers;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.error || error.message
      );
    }
  }
);

// Create a new post 
export const createPost = createAsyncThunk(
  "posts/createPost",
  async (postData, thunkAPI) => {
    try {
      
      const token = localStorage.getItem("authToken");
      if (!token) {
        throw new Error("No authentication token found");
      }
      const requestData = {
        text: postData.text,
        ...(postData.imageUrl && { image_url: postData.imageUrl }),
      };
      const response = await axios.post(`${BASE_URL}/posts`,  requestData,  getAuthHeader());

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.error || error.message
      );
    }
  }
);

// Initial state for the post slice
const initialState = {
  posts: [],
  status: "idle",
  error: null,

  createPostForm: {
    text: "",
    image: null,
    preview: null,
  },
};

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    updatePostText: (state, action) => {
      state.createPostForm.text = action.payload;
    },
    updatePostImage: (state, action) => {
      
      state.createPostForm.preview = action.payload.preview;
    },
    resetCreatePostForm: (state) => {
      state.createPostForm = { text: "", image: null, preview: null };
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch Posts with user info
      .addCase(fetchPostsWithUsers.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchPostsWithUsers.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.posts = action.payload;
      })
      .addCase(fetchPostsWithUsers.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || action.error.message;
      })

      // Create Post
      .addCase(createPost.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(createPost.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.posts.unshift(action.payload);
        state.error = null;
      })
      .addCase(createPost.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || action.error.message;
      });
  },
});

export const { updatePostText, updatePostImage, resetCreatePostForm } =
  postSlice.actions;

export default postSlice.reducer;
