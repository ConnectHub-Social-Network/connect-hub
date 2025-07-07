import React, { useEffect, useState } from "react";
import Sidebar from "../components/layout/Sidebar.jsx";
import axios from "axios"
// import { BASE_URL } from "../store/baseUrl.js";

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
    
     <div className="flex flex-row mt-8 ml-20 ">
      <Sidebar />
    <div className="flex-1 p-10">
        <h1 className="text-2xl font-semibold mb-8">Notifications</h1>
        <div className="space-y-4">
          {notifications.length > 0 ? (
            notifications.map((note) => (
              <div
                key={note.id}
                className="bg-white shadow-sm rounded-md p-4 flex items-start space-x-3"
              >
                <div className="mt-1 w-2 h-2 bg-blue-600 rounded-full"></div>
                <div>
                  <p className="text-gray-800">
                    <span className="font-semibold">{note.name}</span>{" "}
                    {note.action}
                  </p>
                  <p className="text-sm text-gray-500">{note.time}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No notifications available.</p>
          )}
        </div>
      </div>
    </div>
  );
}


export default NotificationsPage;
