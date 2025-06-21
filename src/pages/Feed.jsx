
// import React, { useEffect, useState } from 'react';

// const Feed = () => {
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
    
//     fetch('https://connecthub-three.vercel.app/posts')
//       .then(res => res.json())
//       .then(data => setPosts(data))
//       .catch(err => console.error('Failed to fetch posts:', err));
//   }, []);

//   return (
//     <div className="flex min-h-screen bg-gray-100">
//       {/* Sidebar */}
//       <aside className="w-64 p-4 bg-white border-r border-gray-200">
//         <div className="font-bold text-xl mb-6">ConnectHub</div>
//         <nav className="space-y-4">
//           <button className="block w-full text-left text-blue-600 font-semibold">Home</button>
//           <button className="block w-full text-left text-gray-600">Search</button>
//           <button className="block w-full text-left text-gray-600">Create</button>
//           <button className="block w-full text-left text-gray-600">Notifications</button>
//           <button className="block w-full text-left text-gray-600">Profile</button>
//         </nav>
//       </aside>

//       {/* Main content */}
//       <main className="flex-1 p-6">
//         {/* Header / Banner */}
//         <div className="bg-blue-600 text-white p-6 rounded-lg shadow">
//           <h1 className="text-xl font-semibold">Welcome back, Jordan Martinez!</h1>
//           <p className="text-sm">Discover what’s happening in your network.</p>
//         </div>

//         {/* Stats */}
//         <div className="grid grid-cols-3 gap-4 mt-4">
//           <div className="bg-white p-4 rounded shadow text-center">
//             <p className="text-sm text-gray-600">Your Posts</p>
//             <p className="text-xl font-bold">0</p>
//           </div>
//           <div className="bg-white p-4 rounded shadow text-center">
//             <p className="text-sm text-gray-600">Following</p>
//             <p className="text-xl font-bold">3</p>
//           </div>
//           <div className="bg-white p-4 rounded shadow text-center">
//             <p className="text-sm text-gray-600">Feed Posts</p>
//             <p className="text-xl font-bold">4</p>
//           </div>
//         </div>

//         {/* Posts Section */}
//         <div className="mt-6 space-y-6">
//           {posts.map((post, index) => (
//             <div key={index} className="bg-white p-4 rounded-lg shadow">
//               <div className="flex justify-between items-start">
//                 <div>
//                   <p className="font-semibold">{post.name}</p>
//                   <p className="text-sm text-gray-500">@{post.username} · {post.timeAgo}</p>
//                 </div>
//                 <button className="text-blue-600 font-semibold">Follow</button>
//               </div>
//               <p className="mt-2 text-gray-700">{post.text}</p>
//               {post.image && (
//                 <img src={post.image} alt="Post visual" className="mt-4 rounded" />
//               )}
//               <div className="flex justify-around mt-4 text-gray-500">
//                 <span>❤️ {post.likes}</span>
//                 <span>💬 {post.comments}</span>
//                 <span>🔁 {post.reposts}</span>
//               </div>
//             </div>
//           ))}
//         </div>
//       </main>
//     </div>
//   );
// };

// export default Feed;
























import { Home, Search, Plus, Bell,  } from 'lucide-react';
import { Link } from 'react-router-dom';
import { LogOut } from 'lucide-react';
import { useSelector } from 'react-redux';



const HomePage = () => {
  const {User}= useSelector((state)=>state.auth)
  return (
    <>
      <div className='conatiner '>
        {/* header */}
       

       

        <div className='flex fle-cole  space-y-10 mt-10 ml-60'>
        {/* sideBar */}
          <div className='flex flex-row  bg-white mt-15'>
            
             <nav className="space-y-8">
          <a href="#" className="flex items-center space-x-3  hover:bg-blue-600 hover:text-white rounded p-1 ">
            <Home />
            <span>Home</span>
          </a>
          <a href="#" className="flex items-center space-x-3 hover:bg-blue-600 hover:text-white rounded p-1 ">
            <Search />
            <span>Search</span>
          </a>
          <a href="#" className="flex items-center space-x-3 hover:bg-blue-600 hover:text-white rounded p-1">
            <Plus />
            <span>Create</span>
          </a>
          <a href="#" className="flex items-center space-x-3 hover:bg-blue-600 hover:text-white rounded p-1">
            <Bell />
            <span>Notifications</span>
          </a>
          <a href="#" className="flex items-center space-x-3 hover:bg-blue-600 hover:text-white rounded p-1 ">
            <User />
            <span >Profile</span>
          </a>
        </nav>

        </div>
        {/* main content */}
        <div className='flex flex-col items-center mx-15 my-15'>
          
        <div className="bg-blue-600 text-white p-10 rounded-lg shadow-md mb-8 w-full" >
          <h2 className="text-xl font-semibold w-120  ">Welcome back, Jordan Martinez!</h2>
          <p className="text-sm">Discover what's happening in your network.</p>
        </div>
        <div className="grid grid-cols-3 gap-6 w-full" >
          <div className="bg-white p-6 rounded-lg shadow ">
            <p className="text-2xl font-bold">0</p>
            <p>Your Posts</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <p className="text-2xl font-bold">3</p>
            <p>Following</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <p className="text-2xl font-bold">4</p>
            <p>Feed Posts</p>
          </div>
        </div>
      
        </div>
        </div>

        

      </div>
    
    
      
    </>
  );
}

export default HomePage;
