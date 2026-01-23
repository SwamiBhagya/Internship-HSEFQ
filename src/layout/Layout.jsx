import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
// Added FaTimes for closing the mobile search
import { FaRegBell, FaUserCircle, FaSearch, FaBars, FaTimes } from "react-icons/fa";

const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false); // New state for mobile search

  return (
    <div className="flex h-screen w-full bg-gray-50 overflow-hidden relative">
      
      {/* 1. Backdrop Overlay (With smooth fade transition) */}
      <div 
        className={`fixed inset-0 bg-black/50 z-40 md:hidden transition-opacity duration-300 ${
          isSidebarOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsSidebarOpen(false)}
      ></div>

      {/* 2. Sidebar */}
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      {/* 3. Right Side Container */}
      <div className="flex-1 flex flex-col h-full w-full relative">
        
        {/* --- HEADER START --- */}
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-4 md:px-8 shadow-sm shrink-0 z-30">
          
          {/* LOGIC: Show Search Input on Mobile if active, else show standard Header */}
          {isMobileSearchOpen ? (
            // --- A. MOBILE SEARCH MODE ---
            <div className="flex w-full items-center gap-3 animate-fadeIn">
              <FaSearch className="text-gray-400" />
              <input 
                type="text" 
                placeholder="Search safety reports..." 
                autoFocus
                className="flex-1 outline-none text-sm text-gray-700 bg-transparent h-full"
              />
              <button 
                onClick={() => setIsMobileSearchOpen(false)}
                className="p-2 text-gray-500 hover:bg-gray-100 rounded-full"
              >
                <FaTimes size={18} />
              </button>
            </div>
          ) : (
            // --- B. NORMAL HEADER MODE ---
            <>
              {/* Left: Toggles & Logo */}
              <div className="flex items-center gap-4">
                <button 
                  onClick={() => setIsSidebarOpen(true)}
                  className="md:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition active:scale-95"
                >
                  <FaBars size={22} />
                </button>

                {/* Desktop Search Bar (Hidden on Mobile) */}
                <div className="relative hidden md:block w-96">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <FaSearch className="text-gray-400" />
                  </span>
                  <input
                    type="text"
                    placeholder="Search incidents, reports, or IDs..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50 text-sm transition-all"
                  />
                </div>
              </div>

              {/* Right: Actions */}
              <div className="flex items-center gap-2 md:gap-6">
                
                {/* Mobile Search Icon Trigger (Visible only on small screens) */}
                <button 
                  onClick={() => setIsMobileSearchOpen(true)}
                  className="md:hidden p-2 text-gray-500 hover:bg-gray-100 rounded-full"
                >
                  <FaSearch size={18} />
                </button>

                {/* Notifications with Pulse Effect */}
                <button className="relative p-2 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-full transition group">
                  <FaRegBell size={20} className="group-hover:rotate-12 transition-transform" />
                  <span className="absolute top-1.5 right-1.5 bg-red-500 text-white text-[10px] rounded-full h-4 w-4 flex items-center justify-center border-2 border-white animate-pulse">
                    3
                  </span>
                </button>

                {/* Vertical Divider */}
                <div className="h-8 w-[1px] bg-gray-200 hidden md:block"></div>

                {/* User Profile */}
                <div className="flex items-center gap-3 cursor-pointer hover:bg-gray-50 p-1.5 rounded-lg transition border border-transparent hover:border-gray-200">
                  <div className="text-right hidden md:block">
                    <p className="text-sm font-bold text-gray-800 leading-tight">Bhagya</p>
                    <p className="text-[10px] uppercase tracking-wider text-blue-600 font-bold">
                      HSE Admin
                    </p>
                  </div>
                  <FaUserCircle size={36} className="text-gray-300" />
                </div>
              </div>
            </>
          )}
        </header>
        {/* --- HEADER END --- */}

        {/* 4. Main Page Content */}
        {/* Added 'max-w-7xl mx-auto' to prevent content from stretching too wide on large screens */}
        <main className="flex-1 overflow-y-auto p-4 md:p-8 bg-gray-50 scroll-smooth">
          <div className="max-w-7xl mx-auto animate-fadeIn">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;