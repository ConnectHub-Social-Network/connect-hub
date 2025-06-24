import React, { useEffect, useState } from "react";
import Sidebar from "../components/layout/Sidebar.jsx";

function NotificationsPage() {
 
  return (
     <div className="flex flex-row mt-10">
      <Sidebar />
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">Notifications</h2>
        <p className="text-gray-600">You have no new notifications.</p>  
    </div>
    </div>
  );
}

export default NotificationsPage;
