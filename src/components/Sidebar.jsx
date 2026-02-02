import React from 'react';
import { Link, useLocation } from 'react-router-dom'; 
import { FaTimes, FaShieldAlt, FaSignOutAlt } from 'react-icons/fa';

// 1. IMPORT DATA & CONFIG
import { SIDEBAR_MENU } from '../data/sidebarData'; // <--- The file you just showed me
import { TENANT } from '../config/tenantConfig';    // <--- The new config file

const Sidebar = ({ isOpen, onClose }) => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <aside className={`
      w-72 md:w-64 h-screen flex flex-col shrink-0 z-50
      bg-slate-900 text-white border-r border-slate-800 shadow-xl
      fixed md:sticky md:top-0 transition-transform duration-300 ease-in-out
      ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0
    `}>
      
      {/* Mobile Close Button */}
      <div className="md:hidden absolute right-4 top-4 z-50">
        <button onClick={onClose} className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-full transition">
          <FaTimes size={20} />
        </button>
      </div>

      {/* 2. DYNAMIC LOGO SECTION */}
      <div className="h-20 flex items-center px-6 border-b border-slate-800">
        <Link to="/" onClick={onClose} className="flex items-center gap-3 group">
          <div className="p-2 bg-blue-600 rounded-lg group-hover:bg-blue-500 transition shadow-lg shadow-blue-900/50">
            <FaShieldAlt className="text-xl text-white" />
          </div>
          <div>
            {/* 👇 READS FROM CONFIG NOW */}
            <h1 className="text-lg font-bold tracking-wide text-white">{TENANT.name}</h1>
            <p className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">{TENANT.appName}</p>
          </div>
        </Link>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 px-4 py-6 space-y-1.5 overflow-y-auto custom-scrollbar">
        {SIDEBAR_MENU.map((item) => {
          if (item.type === "regular") {
            return <SidebarLink key={item.id} to={item.path} icon={item.icon} label={item.label} active={isActive(item.path)} onClick={onClose} />;
          }
          if (item.type === "divider") {
            return <div key={item.id} className="py-2"><div className="h-px bg-slate-800 mx-4"></div></div>;
          }
          if (item.type === "special") {
            return (
              <Link key={item.id} to={item.path} onClick={onClose} className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 border ${isActive(item.path) ? "bg-blue-600/20 border-blue-500/50 text-blue-400 shadow-inner" : "bg-gradient-to-r from-blue-600/10 to-transparent border-transparent text-blue-400 hover:bg-blue-600/20 hover:text-blue-300"}`}>
                <div className={`p-1.5 rounded-lg ${isActive(item.path) ? "bg-blue-500 text-white" : "bg-blue-900/50 text-blue-400"}`}><span className="text-xs flex items-center justify-center">{item.icon}</span></div>
                <span className="font-semibold">{item.label}</span>
              </Link>
            );
          }
          if (item.type === "disabled") {
            return (
              <div key={item.id} className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-700 cursor-not-allowed hover:bg-slate-800/20 opacity-60">
                <span className="text-lg">{item.icon}</span><span>{item.label}</span><span className="ml-auto text-[10px] bg-slate-800 text-slate-500 px-1.5 py-0.5 rounded">Soon</span>
              </div>
            );
          }
          return null;
        })}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-slate-800">
        <button className="flex items-center gap-3 w-full px-4 py-3 text-slate-400 hover:bg-red-500/10 hover:text-red-400 rounded-xl transition-all duration-200 group">
          <FaSignOutAlt className="group-hover:translate-x-1 transition-transform" />
          <span className="font-medium">Log Out</span>
        </button>
        <p className="text-center text-[10px] text-slate-600 mt-4 opacity-50">v1.2.0 • {TENANT.id}</p>
      </div>
    </aside>
  );
};

const SidebarLink = ({ to, icon, label, active, onClick }) => (
  <Link to={to} onClick={onClick} className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group ${active ? "bg-blue-600 text-white shadow-md shadow-blue-900/30 translate-x-1" : "text-slate-400 hover:bg-slate-800 hover:text-white hover:translate-x-1"}`}>
    <span className={`text-lg ${active ? "text-white" : "text-slate-500 group-hover:text-white"}`}>{icon}</span>
    <span className="font-medium">{label}</span>
  </Link>
);

export default Sidebar;