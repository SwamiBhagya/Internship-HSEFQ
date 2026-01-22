import React from 'react';

const Dashboard = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-800">HSEFQ Overview</h1>
      <p className="mt-4 text-gray-600">Welcome to the Safety Management System.</p>
      
      {/* A simple Tailwind Card example */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
          <h3 className="text-lg font-semibold text-red-600">Total Incidents</h3>
          <p className="text-3xl font-bold">12</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
          <h3 className="text-lg font-semibold text-green-600">Safety Score</h3>
          <p className="text-3xl font-bold">98%</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;