import React from 'react';
import { Link, useLocation } from 'react-router-dom'; 
import { FaHome, FaHardHat, FaFire, FaCog, FaPlus, FaTimes, FaShieldAlt, FaSignOutAlt } from 'react-icons/fa';

const Sidebar = ({ isOpen, onClose }) => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <aside className={`
      /* Layout & Sizing */
      w-72 md:w-64 h-screen flex flex-col shrink-0 z-50
      /* Appearance */
      bg-slate-900 text-white border-r border-slate-800 shadow-xl
      /* Responsive Logic: Fixed on mobile, STICKY on desktop */
      fixed md:sticky md:top-0 transition-transform duration-300 ease-in-out
      ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0
    `}>
      
      {/* 1. Mobile Close Button */}
      <div className="md:hidden absolute right-4 top-4 z-50">
        <button 
          onClick={onClose} 
          className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-full transition"
        >
          <FaTimes size={20} />
        </button>
      </div>

      {/* 2. Logo Section */}
      <div className="h-20 flex items-center px-6 border-b border-slate-800">
        <Link to="/" onClick={onClose} className="flex items-center gap-3 group">
          <div className="p-2 bg-blue-600 rounded-lg group-hover:bg-blue-500 transition shadow-lg shadow-blue-900/50">
            <FaShieldAlt className="text-xl text-white" />
          </div>
          <div>
            <h1 className="text-lg font-bold tracking-wide text-white">HSEFQ</h1>
            <p className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">Safety Portal</p>
          </div>
        </Link>
      </div>

      {/* 3. Navigation Links */}
      <nav className="flex-1 px-4 py-6 space-y-1.5 overflow-y-auto custom-scrollbar">
        
        <SidebarLink 
          to="/" 
          icon={<FaHome />} 
          label="Dashboard" 
          active={isActive('/')} 
          onClick={onClose} 
        />

        <SidebarLink 
          to="/safety" 
          icon={<FaHardHat />} 
          label="Safety & Health" 
          active={isActive('/safety')} 
          onClick={onClose} 
        />

        <div className="py-2">
          <div className="h-px bg-slate-800 mx-4"></div>
        </div>

        <Link 
          to="/report" 
          onClick={onClose}
          className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 border ${
            isActive('/report')
              ? "bg-blue-600/20 border-blue-500/50 text-blue-400 shadow-inner"
              : "bg-gradient-to-r from-blue-600/10 to-transparent border-transparent text-blue-400 hover:bg-blue-600/20 hover:text-blue-300"
          }`}
        >
          <div className={`p-1.5 rounded-lg ${isActive('/report') ? "bg-blue-500 text-white" : "bg-blue-900/50 text-blue-400"}`}>
            <FaPlus size={12} />
          </div>
          <span className="font-semibold">Report Incident</span>
        </Link>

        <div className="mt-8 mb-2 px-4">
          <p className="text-[10px] font-bold text-slate-600 uppercase tracking-wider">Coming Soon</p>
        </div>
        
        <DisabledLink icon={<FaFire />} label="Fire Systems" />
        <DisabledLink icon={<FaCog />} label="Settings" />

      </nav>

      {/* 4. Footer */}
      <div className="p-4 border-t border-slate-800">
        <button className="flex items-center gap-3 w-full px-4 py-3 text-slate-400 hover:bg-red-500/10 hover:text-red-400 rounded-xl transition-all duration-200 group">
          <FaSignOutAlt className="group-hover:translate-x-1 transition-transform" />
          <span className="font-medium">Log Out</span>
        </button>
        <p className="text-center text-[10px] text-slate-600 mt-4 opacity-50">v1.0.0 • Bhagya Intern Project</p>
      </div>
    </aside>
  );
};

// --- Helper Components ---

const SidebarLink = ({ to, icon, label, active, onClick }) => (
  <Link 
    to={to} 
    onClick={onClick}
    className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group ${
      active 
        ? "bg-blue-600 text-white shadow-md shadow-blue-900/30 translate-x-1" 
        : "text-slate-400 hover:bg-slate-800 hover:text-white hover:translate-x-1"
    }`}
  >
    <span className={`text-lg ${active ? "text-white" : "text-slate-500 group-hover:text-white"}`}>
      {icon}
    </span>
    <span className="font-medium">{label}</span>
  </Link>
);

const DisabledLink = ({ icon, label }) => (
  <div className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-700 cursor-not-allowed hover:bg-slate-800/20 opacity-60">
    <span className="text-lg">{icon}</span>
    <span>{label}</span>
  </div>
);

export default Sidebar;