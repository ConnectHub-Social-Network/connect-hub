import React from "react";
import { useSelector } from "react-redux";
import LogoutButton from "./LogouButton.jsx";

const Header = () => {
  const { isAuthenticated, user } = useSelector((state) => state.auth);

  return (
    <header className="flex justify-between items-center bg-white shadow-md fixed w-full p-4 z-10">
      {/* Logo */}
      <div className="bg-blue-600 text-white w-8 h-8 flex items-center justify-center font-bold rounded ">
        C
      </div>

        {/* Title */}
      <h1 className="text-xl font-bold">ConnectHub</h1>

      {/* User Info & Logout */}
      {isAuthenticated && (
        <div className="flex items-center space-x-3 text-gray-700 font-semibold">
          {/* User name */}
          <span>{user?.name || "User"}</span>

          {/* Logout button */}
          <LogoutButton />
        </div>
      )}
    </header>
  );
};

export default Header;
