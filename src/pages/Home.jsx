import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import PostCard from "../components/posts/Postcard";
import { fetchPostsWithUsers } from "../store/Slices/PostSlices";
import Sidebar from "../components/layout/Sidebar"; 
import {checkAuthStatus} from "../store/Slices/AuthSlices"

const HomePage = () => {
  const dispatch = useDispatch();

  const  {user} = useSelector((state) => state.auth);
  console.log("USER", user)
  const { posts, status, error } = useSelector((state) => state.posts);
  

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchPostsWithUsers());
      dispatch(checkAuthStatus());
    }
  }, [status, dispatch]);


  // Counts how many posts belong to the logged-in user
const loggedInUserId = user?._id || user?.id;
const userPostCount = posts.filter((p) => p.user?.id === loggedInUserId).length;
  // Total posts in the feed
  const feedPostCount = posts.length;
  console.log("posts",posts)

  return (
    <div className="flex flex-row mt-10 ml-20">
      <Sidebar />

      <main className="flex flex-col items-center mx-10 w-full max-w-4xl ">
        {/* Welcome */}
        <section className="bg-blue-600 text-white p-10 rounded-lg shadow-md mb-8 w-full">
          <h2 className="text-xl font-semibold">
            Welcome back, {user?.name || "Guest"}
          </h2>
          <p className="text-sm">Discover what's happening in your network.</p>
        </section>

        <section className="grid grid-cols-3 gap-6 w-full mb-8">
          <div className="bg-white p-6 rounded-lg shadow text-center">
            <p className="text-2xl font-bold"> {userPostCount}</p>
            <p>Your Posts</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow text-center">
            <p className="text-2xl font-bold">3</p> 
            <p>Following</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow text-center">
            <p className="text-2xl font-bold">{feedPostCount}</p>
            <p>Feed Posts</p>
          </div>
        </section>

        {/* Posts Feed */}
        {status === "loading" && <p>Loading posts...</p>}
        {status === "failed" && <p className="text-red-600">Error loading posts: {error}</p>}
        {status === "succeeded" && posts.length === 0 && <p>No posts to show.</p>}

        {status === "succeeded" &&
          posts.length > 0 &&
          posts.map((post, index) => (
          <PostCard key={post._id || post.id || post.createdAt || index} post={post} />
          ))}
         

      </main>
    </div>
  );
};

export default HomePage;

