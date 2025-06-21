// import {  useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux';
// import './index.css'
// import Postcard from './components/Postcard'
// import { fetchPosts } from './store/postSlice';

// function App() {
//   const dispatch = useDispatch();
//   const { posts, loading, error } = useSelector((state) => state.posts);

//   useEffect(() => {
//     dispatch(fetchPosts());
//   }, [dispatch]);

//   if (loading) return <div>Loading posts...</div>;
//   if (error) return <div>Error: {error}</div>;

//   return (
//     <div className="app-container p-4 max-w-2xl mx-auto">
//       <h1 className="text-2xl font-bold mb-4">Home</h1>
//       {posts.length === 0 && <p>No posts to show.</p>}

//       {posts.map((post) => (
//         <Postcard key={post.id} post={post} />
//       ))}
//     </div>
//   )
// }

// export default App

import HomePage from "./pages/Feed.jsx";
import RegistrationPage from "./pages/registrationPage.jsx";
import { Route, Routes } from 'react-router-dom';
import SigninForm from './pages/signInform.jsx';
import ProtectedRoutes from "./components/auth/ProtectRoutes.jsx";
import Feed from "./pages/Feed.jsx";
import ProfilePage from "./profile/ProfilePage.jsx";




function App() {
  
  return(
    
    <div className='flex flex-col min-h-screen'>
      <>
      <main >
        <Routes>
        
        <Route path="/" element={<HomePage/>}/> 
        <Route path="/Feed" element={
        <ProtectedRoutes requireAuth={true}>
        <Feed/>
        </ProtectedRoutes>
        }/>
          <Route path="/ProfilePage" element={
            <ProtectedRoutes requireAuth={true}>
            <ProfilePage/>
            </ProtectedRoutes>
            }></Route>
        <Route path="/ResgistrationPage" element={
          <ProtectedRoutes requireAuth={false}>
          <RegistrationPage/>
          </ProtectedRoutes>
          }/>
        <Route path='/signinForm' element={
          <ProtectedRoutes requireAuth={false} >
          <SigninForm/>
            </ProtectedRoutes>
          }></Route>

        
        
       </Routes>
       </main>
      </>
    </div>
    
  )
}

export default App
