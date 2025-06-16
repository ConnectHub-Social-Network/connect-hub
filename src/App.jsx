import {  useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import './index.css'
import Postcard from './components/Postcard'
import { fetchPosts } from './store/postSlice';

function App() {
  const dispatch = useDispatch();
  const { posts, loading, error } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  if (loading) return <div>Loading posts...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="app-container p-4 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Home</h1>
      {posts.length === 0 && <p>No posts to show.</p>}

      {posts.map((post) => (
        <Postcard key={post.id} post={post} />
      ))}
    </div>
  )
}

export default App
