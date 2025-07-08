import React, { useEffect, useState } from "react";
import Sidebar from "../components/layout/Sidebar.jsx";
import Footer from "../components/layout/Footer.jsx";
import axios from "axios";

const BASE_URL = "/api";
function NotificationsPage() {
 const [notifications , setNotifications] = useState([]);

 useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/notifications`);
        setNotifications(response.data);
      } catch (error) {
        console.error("Error fetching notifications:", error);
      }
    }

     fetchNotifications();
  }, []);
  
  return (
     <div className="flex flex-row mt-10 md:ml-48">
      <Sidebar />
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">Notifications</h2>
        <p className="text-gray-600">You have no new notifications.</p>  
    </div>
      <div className="flex-grow"></div>
      {/* Footer is only visible on mobile devices */}
      <Footer />
    </div>
  );
}


export default NotificationsPage;
