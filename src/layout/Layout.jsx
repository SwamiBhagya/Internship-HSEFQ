import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import {
  FaRegBell,
  FaUserCircle,
  FaSearch,
  FaBars,
  FaTimes,
  FaMoon,
  FaSun,
} from "react-icons/fa";

// 1. IMPORT TENANT CONFIG
import { TENANT } from "../config/tenantConfig";

const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Toggle Function
  const toggleTheme = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    if (newMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <div className="flex h-screen w-full bg-gray-50 dark:bg-slate-900 overflow-hidden relative transition-colors duration-300">
      {/* 1. Backdrop Overlay */}
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
        <header className="h-16 bg-white dark:bg-slate-800 border-b border-gray-200 dark:border-slate-700 flex items-center justify-between px-4 md:px-8 shadow-sm shrink-0 z-30 transition-colors duration-300">
          {isMobileSearchOpen ? (
            // --- A. MOBILE SEARCH MODE ---
            <div className="flex w-full items-center gap-3 animate-fadeIn">
              <FaSearch className="text-gray-400" />
              <input
                type="text"
                placeholder="Search safety reports..."
                autoFocus
                className="flex-1 outline-none text-sm text-gray-700 dark:text-white bg-transparent h-full"
              />
              <button
                onClick={() => setIsMobileSearchOpen(false)}
                className="p-2 text-gray-500 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-full"
              >
                <FaTimes size={18} />
              </button>
            </div>
          ) : (
            // --- B. NORMAL HEADER MODE ---
            <>
              {/* Left: Toggles, Tenant Name & Search */}
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setIsSidebarOpen(true)}
                  className="md:hidden p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-lg transition active:scale-95"
                >
                  <FaBars size={22} />
                </button>

                {/* 👇 2. NEW: TENANT NAME DISPLAY (Required by Task) */}
                <div className="flex flex-col mr-2">
                  <h2 className="text-lg font-bold text-gray-800 dark:text-white leading-tight">
                    {TENANT.name}
                  </h2>
                  <span className="text-[10px] text-gray-500 dark:text-gray-400 font-medium hidden md:block">
                    {TENANT.appName}
                  </span>
                </div>

                {/* Desktop Search Bar */}
                <div className="relative hidden lg:block w-80">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <FaSearch className="text-gray-400" />
                  </span>
                  <input
                    type="text"
                    placeholder="Search incidents..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-200 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50 dark:bg-slate-700 text-sm text-gray-700 dark:text-white transition-all"
                  />
                </div>
              </div>

              {/* Right: Actions */}
              <div className="flex items-center gap-2 md:gap-6">
                {/* Mobile Search Icon */}
                <button
                  onClick={() => setIsMobileSearchOpen(true)}
                  className="md:hidden p-2 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-full"
                >
                  <FaSearch size={18} />
                </button>

                {/* Dark Mode Toggle */}
                <button
                  onClick={toggleTheme}
                  className="p-2 text-gray-500 dark:text-yellow-400 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-full transition-colors"
                >
                  {isDarkMode ? <FaSun size={20} /> : <FaMoon size={18} />}
                </button>

                {/* Notifications */}
                <button className="relative p-2 text-gray-500 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-slate-700 rounded-full transition group">
                  <FaRegBell
                    size={20}
                    className="group-hover:rotate-12 transition-transform"
                  />
                  <span className="absolute top-1.5 right-1.5 bg-red-500 text-white text-[10px] rounded-full h-4 w-4 flex items-center justify-center border-2 border-white dark:border-slate-800 animate-pulse">
                    3
                  </span>
                </button>

                {/* Vertical Divider */}
                <div className="h-8 w-1px bg-gray-200 dark:bg-slate-700 hidden md:block"></div>

                {/* User Profile */}
                <div className="flex items-center gap-3 cursor-pointer hover:bg-gray-50 dark:hover:bg-slate-700 p-1.5 rounded-lg transition border border-transparent hover:border-gray-200 dark:hover:border-slate-600">
                  <div className="text-right hidden md:block">
                    <p className="text-sm font-bold text-gray-800 dark:text-white leading-tight">
                      Bhagya
                    </p>
                    <p className="text-[10px] uppercase tracking-wider text-blue-600 font-bold">
                      HSE Admin
                    </p>
                  </div>
                  <FaUserCircle
                    size={36}
                    className="text-gray-300 dark:text-gray-500"
                  />
                </div>
              </div>
            </>
          )}
        </header>

        {/* 4. Main Page Content */}
        <main className="flex-1 overflow-y-auto p-4 md:p-8 bg-gray-50 dark:bg-slate-900 scroll-smooth transition-colors duration-300">
          <div className="max-w-7xl mx-auto animate-fadeIn">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;
