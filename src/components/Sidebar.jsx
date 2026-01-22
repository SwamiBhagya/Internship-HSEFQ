import React from 'react';
import { Link } from 'react-router-dom';
// Importing specific icons from the 'fa' (FontAwesome) pack
import { FaHome, FaHardHat, FaFire, FaCog } from 'react-icons/fa'; 

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-slate-900 text-white flex flex-col">
      {/* Logo Area */}
      <div className="h-16 flex items-center justify-center border-b border-slate-700">
        <h1 className="text-xl font-bold tracking-wider">HSEFQ App</h1>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 px-4 py-6 space-y-2">
        
        {/* Dashboard Link */}
        <Link to="/" className="flex items-center gap-3 px-4 py-3 rounded hover:bg-slate-800 transition">
          <FaHome className="text-xl" />
          <span>Dashboard</span>
        </Link>

        {/* Safety Link */}
        <Link to="/safety" className="flex items-center gap-3 px-4 py-3 rounded hover:bg-slate-800 transition">
          <FaHardHat className="text-xl" /> {/* Hard Hat icon for Safety */}
          <span>Safety & Health</span>
        </Link>

        <div className="flex items-center gap-3 px-4 py-3 rounded hover:bg-slate-800 transition opacity-50 cursor-not-allowed">
          <FaFire className="text-xl" />
          <span>Fire Systems</span>
        </div>

        <div className="flex items-center gap-3 px-4 py-3 rounded hover:bg-slate-800 transition opacity-50 cursor-not-allowed">
          <FaCog className="text-xl" />
          <span>Settings</span>
        </div>

      </nav>
    </div>
  );
};

export default Sidebar;