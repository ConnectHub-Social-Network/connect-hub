import { Link } from "react-router-dom"



const ProfilePage = ()=>{
    
    return (
        <div className="bg-gray-300 m-auto">
            
           {/* sideBar and hero */}
            <div className="flex flex-row items center space-x-10">

                <nav className="space-y-2">
      <Link to="/" className="flex items-center space-x-2 text-blue-600 font-semibold">
        <Home /> <span>Home</span>
      </Link>
      <Link to="/search" className="flex items-center space-x-2 text-gray-700">
        <Search /> <span>Search</span>
      </Link>
      <Link to="/create" className="flex items-center space-x-2 text-gray-700">
        <SquarePlus /> <span>Create</span>
      </Link>
      <Link to="/notifications" className="flex items-center space-x-2 text-gray-700">
        <Bell /> <span>Notifications</span>
      </Link>
      <Link to="/profile" className="flex items-center space-x-2 text-gray-700">
        <User /> <span>Profile</span>
      </Link>
    </nav>
          {/* hero */}
           <div className="container">
            <img className="w-full h-50 rounded ml-10 mb-10 mt-30 mr-60">
            <img className="w-40 h-40 rounded-sm"></img>
            </img>
            <div className="flex flex-row justify-between">
                <p>software eng passionate about building User freindly application,
                    cofee enthusiast and weekend hiker.
                </p>
                <button className="bg-gray-500 h-30 w-70 rounded p-6">edit profile</button>
            </div>
            <p className="text-gray-400 ml-10 mt-10"> joined january 2024</p>
           <br/>
           
            <div className="grid grid-cols-3 gap-6">
                <div>
                    <h2>3</h2>
                    <p>posts</p>
                </div>

                <div>
                    <h2>156</h2>
                    <p>followers</p>
                </div>

                <div>
                    <h2>89</h2>
                    <p>following</p>
                </div>
            </div>

           </div>
           </div>

          {/* content */}
          <article>
           <h1>posts</h1>
           <h3>3 posts</h3>
           </article>
            {/* profile posts card */}
         <div className="tweet-card border rounded-lg p-4 shadow-md max-w-xl mx-auto bg-white">
      {/* Header */}
      <div className="tweet-header flex items-center mb-2">
        <img 
          src 
          alt="Profile" 
          className="rounded-full w-10 h-10 mr-3"
        />
        <div>
          <div className="font-semibold">Jordan Martinez</div>
          <div className="text-sm text-gray-500">@jordan_tech · 510d ago</div>
        </div>
      </div>

      {/* Content */}
      <div className="tweet-content mb-3">
        <p>
          Just finished implementing a new authentication system with biometric support. 
          Security and user experience don't have to be mutually exclusive! 🔐
        </p>
      </div>

      {/* Image */}
      <div className="tweet-image mb-3">
        <img 
          src="/path-to-your-image/Screenshot 2025-06-20 174131.png" 
          alt="System Screenshot" 
          className="rounded-lg w-full"
        />
      </div>

      {/* Footer */}
      <div className="tweet-footer flex space-x-4 text-gray-600">
        <div>❤️ 67</div>
        <div>💬 1</div>
      </div>
    </div>

        </div>
    )
}



export default  ProfilePage