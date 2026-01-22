import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-800 text-white p-4">
        <h1 className="text-2xl font-bold mb-8">HSEFQ App</h1>
        <nav className="flex flex-col gap-4">
          <Link to="/" className="hover:text-blue-300">Dashboard</Link>
          <Link to="/reports" className="hover:text-blue-300">Reports</Link>
          <Link to="/settings" className="hover:text-blue-300">Settings</Link>
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-8 overflow-y-auto">
        <Outlet /> {/* This is where your pages will appear */}
      </main>
    </div>
  );
};

export default Layout;