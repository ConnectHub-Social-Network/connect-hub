import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPostsWithUsers} from "../store/Slices/PostSlices";
import PostCard from "../components/posts/Postcard";
import Sidebar from "../components/layout/Sidebar";


const ProfilePage = () => {
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.auth);
  const { posts, status, error } = useSelector((state) => state.posts);
  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchPostsWithUsers());
    }
  }, [status, dispatch]);

  const userPosts = posts.filter((post) => post.userId === userInfo?.id);

  return (
     <div className="flex flex-row mt-10 ml-20">
      <Sidebar />
     <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h1 className="text-2xl font-bold mb-2">{userInfo?.name}'s Profile</h1>
        <p className="text-gray-600 mb-2">Email: {userInfo?.email}</p>
        <p className="text-sm text-gray-500">Joined: January 2024</p>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Your Posts</h2>
        {status === "loading" && <p>Loading your posts...</p>}
        {status === "failed" && <p className="text-red-600">{error}</p>}
        {status === "succeeded" && userPosts.length === 0 && (
          <p className="text-gray-600">You have no posts yet.</p>
        )}
        {status === "succeeded" &&
          userPosts.length > 0 &&
          userPosts.map((post) => <PostCard key={post.id} post={post} />)}
      </div>
    </div>
    </div>
    

  )
};

export default ProfilePage;
