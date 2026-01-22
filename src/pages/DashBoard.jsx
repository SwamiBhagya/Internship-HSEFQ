import React from 'react';
import { FaExclamationTriangle, FaCheckCircle, FaClipboardList, FaUsers } from 'react-icons/fa';

const Dashboard = () => {
  // Mock data for our table
  const recentIncidents = [
    { id: "INC-001", title: "Oil Leak in Zone B", category: "Environment", status: "Open", severity: "High" },
    { id: "INC-002", title: "Missing Fire Extinguisher", category: "Fire", status: "Resolved", severity: "Medium" },
    { id: "INC-003", title: "Minor Slip - Lobby", category: "Health", status: "Pending", severity: "Low" },
  ];

  return (
    <div className="space-y-8">
      {/* 1. Header Section */}
      <div>
        <h1 className="text-2xl font-bold text-gray-800 px-7 pt-10 pb-2">Safety Dashboard</h1>
        <p className="text-gray-500 text-sm px-7">Real-time overview of HSEFQ compliance.</p>
      </div>

      {/* 2. Stat Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard icon={<FaClipboardList className="text-blue-600" />} title="Total Reports" value="128" bgColor="bg-blue-50" />
        <StatCard icon={<FaExclamationTriangle className="text-red-600" />} title="Open Incidents" value="12" bgColor="bg-red-50" />
        <StatCard icon={<FaCheckCircle className="text-green-600" />} title="Resolved Today" value="05" bgColor="bg-green-50" />
        <StatCard icon={<FaUsers className="text-purple-600" />} title="Active Personnel" value="42" bgColor="bg-purple-50" />
      </div>

      {/* 3. Recent Incidents Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="p-5 border-b border-gray-100 flex justify-between items-center">
          <h2 className="font-bold text-gray-700">Recent Incidents</h2>
          <button className="text-blue-600 text-sm font-medium hover:underline">View All</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead className="bg-gray-50 text-gray-400 text-xs uppercase font-semibold">
              <tr>
                <th className="px-6 py-4">ID</th>
                <th className="px-6 py-4">Incident Title</th>
                <th className="px-6 py-4">Category</th>
                <th className="px-6 py-4">Severity</th>
                <th className="px-6 py-4">Status</th>
              </tr>
            </thead>
            <tbody className="text-sm divide-y divide-gray-100">
              {recentIncidents.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50 transition">
                  <td className="px-6 py-4 font-medium text-blue-600">{item.id}</td>
                  <td className="px-6 py-4 text-gray-700">{item.title}</td>
                  <td className="px-6 py-4 text-gray-500">{item.category}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded-full text-[10px] font-bold uppercase ${
                      item.severity === 'High' ? 'bg-red-100 text-red-600' : 
                      item.severity === 'Medium' ? 'bg-orange-100 text-orange-600' : 'bg-blue-100 text-blue-600'
                    }`}>
                      {item.severity}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`flex items-center gap-1.5 ${item.status === 'Resolved' ? 'text-green-600' : 'text-amber-600'}`}>
                      <div className={`w-1.5 h-1.5 rounded-full ${item.status === 'Resolved' ? 'bg-green-600' : 'bg-amber-600'}`} />
                      {item.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

// Helper Component for the Stat Cards
const StatCard = ({ icon, title, value, bgColor }) => (
  <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex items-center gap-4">
    <div className={`p-4 rounded-lg ${bgColor} text-2xl`}>
      {icon}
    </div>
    <div>
      <p className="text-sm text-gray-500 font-medium">{title}</p>
      <h3 className="text-2xl font-bold text-gray-800">{value}</h3>
    </div>
  </div>
);

export default Dashboard;