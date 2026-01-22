import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import { FaRegBell, FaUserCircle, FaSearch } from 'react-icons/fa';

const Layout = () => {
  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      {/* 1. Sidebar stays fixed on the left */}
      <Sidebar />

      {/* 2. Right Side Container (Navbar + Page Content) */}
      <div className="flex-1 flex flex-col h-full overflow-hidden">
        
        {/* --- THE NEW NAVBAR START --- */}
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-8 shadow-sm shrink-0">
          {/* Search Bar */}
          <div className="relative w-96">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <FaSearch className="text-gray-400" />
            </span>
            <input 
              type="text" 
              placeholder="Search safety reports..." 
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50 text-sm"
            />
          </div>

          {/* User & Notifications */}
          <div className="flex items-center gap-6">
            {/* Notification Bell */}
            <button className="relative text-gray-500 hover:text-blue-600 transition">
              <FaRegBell size={20} />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] rounded-full h-4 w-4 flex items-center justify-center">
                3
              </span>
            </button>

            {/* Profile Section */}
            <div className="flex items-center gap-3 border-l pl-6">
              <div className="text-right">
                <p className="text-sm font-bold text-gray-800">Bhagya</p>
                <p className="text-[10px] uppercase tracking-wider text-blue-600 font-semibold">HSE Admin</p>
              </div>
              <FaUserCircle size={35} className="text-gray-400" />
            </div>
          </div>
        </header>
        {/* --- THE NEW NAVBAR END --- */}

        {/* 3. Main Page Content (Where Dashboard/Safety pages show up) */}
        <main className="flex-1 overflow-y-auto p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;