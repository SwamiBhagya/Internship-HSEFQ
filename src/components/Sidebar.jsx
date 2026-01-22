import React from 'react';
import { Link } from 'react-router-dom';
// Importing specific icons from the 'fa' (FontAwesome) pack
import { FaHome, FaHardHat, FaFire, FaCog, FaPlus } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-slate-900 text-white flex flex-col shrink-0">
      
      {/* Clickable Logo Area - Takes you to the front page ("/") */}
      <Link 
        to="/" 
        className="h-16 flex items-center justify-center border-b border-slate-700 hover:bg-slate-800 transition-colors duration-200 cursor-pointer"
      >
        <h1 className="text-xl font-bold tracking-wider text-blue-400">HSEFQ App</h1>
      </Link>

      {/* Navigation Links */}
      <nav className="flex-1 px-4 py-6 space-y-2">
        
        {/* Dashboard Link */}
        <Link 
          to="/" 
          className="flex items-center gap-3 px-4 py-3 rounded hover:bg-slate-800 transition-all duration-200"
        >
          <FaHome className="text-xl text-slate-400" />
          <span>Dashboard</span>
        </Link>

        {/* Safety Link */}
        <Link 
          to="/safety" 
          className="flex items-center gap-3 px-4 py-3 rounded hover:bg-slate-800 transition-all duration-200"
        >
          <FaHardHat className="text-xl text-slate-400" /> 
          <span>Safety & Health</span>
        </Link>

        {/* Report Incident Link - Highlighted because it is a primary action */}
        <Link 
          to="/report" 
          className="flex items-center gap-3 px-4 py-3 rounded bg-blue-600/10 text-blue-400 hover:bg-blue-600 hover:text-white transition-all duration-200 border border-blue-600/20"
        >
          <FaPlus className="text-xl" />
          <span className="font-semibold">Report Incident</span>
        </Link>

        {/* Disabled Links for now */}
        <div className="flex items-center gap-3 px-4 py-3 rounded opacity-40 cursor-not-allowed">
          <FaFire className="text-xl" />
          <span>Fire Systems</span>
        </div>

        <div className="flex items-center gap-3 px-4 py-3 rounded opacity-40 cursor-not-allowed">
          <FaCog className="text-xl" />
          <span>Settings</span>
        </div>

      </nav>

      {/* Optional: User Footer in Sidebar */}
      <div className="p-4 border-t border-slate-700 text-xs text-slate-500">
        v1.0.0 - Bhagya Dashboard
      </div>
    </div>
  );
};

export default Sidebar;