import { useEffect, useState } from "react";
import Sidebar from "../components/layout/Sidebar";
import axios from "axios";
import { BASE_URL } from "../store/baseUrl";
import fallbackImage from "../public/fallback.png";




function SearchPage() {
  
  const [users , setUsers] = useState([]);
  const [searchTerm , setSearchTerm] = useState("");

  const [chechflowing , setCheckFlowing] = useState();

  

  useEffect(() => {
    const fetctUsers = async() => {
        const token = localStorage.getItem("authToken");
   await axios.get(`${BASE_URL}/users/search?query=${searchTerm}`, {headers: {
      Authorization: `Bearer ${token}`,
      
    },})
     .then(Response => setUsers(Response.data))
     .catch(err => console.error("API error:", err));
    }
    
   fetctUsers()
  },[searchTerm])

  const filteredUsers = users.filter(user =>
    
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
    console.log("filterUsers", filteredUsers)
  

 const startFollowing = async (id) => {
  console.log("following",id)
  const token = localStorage.getItem("authToken");
  await axios.post(`${BASE_URL}/users/${id}/follow`,{}, {
    headers: {
      Authorization: `Bearer ${token}`,
      
    },
    
  } )
  .then(Response => setCheckFlowing(true) )
   
  
 
  .catch(err => console.error("API err;",err))
 }

 const unFollow = async (id) => {
  console.log("following",id)
  const token = localStorage.getItem("authToken");
  await axios.post(`${BASE_URL}/users/${id}/unfollow`,{}, {
    headers: {
      Authorization: `Bearer ${token}`,
   },
    
  } )
  .then(Response => setCheckFlowing(false) )
  
  .catch(err => console.error("API err;",err))
 }

  return (
    <div className="flex flex-row mt-10 ml-40 ">
      <Sidebar/>
    <div className="p-6 w-full max-w-6xl mx-auto ml-20">
      
<h2 className="text-2xl font-semibold mb-4">Discover People</h2>
      <input
        type="text"
        placeholder="Search users..."
        className="w-full mb-6 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredUsers.map(user => (
          <div key={user.id} className="flex items-center p-4 bg-white shadow rounded-lg">
            <img src={user.avatar ? user.avatar : fallbackImage} alt={user.name} className="w-14 h-14 rounded-full object-cover" />
            <div className="ml-4 flex-1">
              <h3 className="font-semibold">{user.name}</h3>
              <p className="text-sm text-gray-500">{user.username}</p>
              <p className="text-sm text-gray-600 truncate w-64">{user.bio}</p>
              <div className="text-xs text-gray-400 mt-1">
                {user.followers} followers · {user.following} following
              </div>
            </div>
            {user.is_following && !chechflowing ?  (
            <button
            onClick={()=>unFollow(user.id)}
             
              className="ml-4 px-4 py-2 text-sm rounded-md font-medium bg-gray-100 text-gray-700 "
                  
            >
              
              following
            </button>
            ): (
            
             <button
            onClick={()=>startFollowing(user.id)}
             
              className= "ml-4 px-4 py-2 text-sm rounded-md font-medium  bg-blue-600 text-white"
              
            >
              
              follow
            </button>
            )
}
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default SearchPage;