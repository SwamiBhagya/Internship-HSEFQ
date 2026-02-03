import React from "react";
import { Link } from "react-router-dom"; // Needed for the FAB
import {
  FaExclamationTriangle,
  FaCheckCircle,
  FaClipboardList,
  FaUsers,
  FaPlus,
  FaArrowRight,
} from "react-icons/fa";

const Dashboard = () => {
  // 1. Dynamic Greeting Logic
  const hour = new Date().getHours();
  const greeting =
    hour < 12 ? "Good Morning" : hour < 18 ? "Good Afternoon" : "Good Evening";

  const recentIncidents = [
    {
      id: "INC-001",
      title: "Oil Leak in Zone B",
      category: "Environment",
      status: "Open",
      severity: "High",
    },
    {
      id: "INC-002",
      title: "Missing Fire Extinguisher",
      category: "Fire",
      status: "Resolved",
      severity: "Medium",
    },
    {
      id: "INC-003",
      title: "Minor Slip - Lobby",
      category: "Health",
      status: "Pending",
      severity: "Low",
    },
    {
      id: "INC-004",
      title: "Server Room Overheating",
      category: "Safety",
      status: "Open",
      severity: "Critical",
    }, // Added one more for demo
  ];

  return (
    // Added 'animate-fadeIn' for smooth entry
    <div className="space-y-6 md:space-y-8 animate-fadeIn pb-20 md:pb-0 m-10">
      {/* 1. Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 px-2 md:px-0 mx-10 my-10">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
            DashBoard
          </h1>
          <p className="text-gray-500 text-xs md:text-sm mt-1">
            Here is what's happening at the facility today.
          </p>
        </div>
        <div className="hidden md:block">
          <span className="text-xs font-semibold bg-blue-50 text-blue-600 px-3 py-1 rounded-full border border-blue-100">
            Last Updated: Just now
          </span>
        </div>
      </div>

      {/* 2. Stat Cards Grid */}
      {/* Changed to 'grid-cols-2' on mobile to save vertical space! */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
        <StatCard
          icon={<FaClipboardList className="text-blue-600" />}
          title="Total Reports"
          value="128"
          bgColor="bg-blue-50"
        />
        <StatCard
          icon={<FaExclamationTriangle className="text-red-600" />}
          title="Open Issues"
          value="12"
          bgColor="bg-red-50"
          alert={true} // Special pulse effect
        />
        <StatCard
          icon={<FaCheckCircle className="text-green-600" />}
          title="Resolved"
          value="116"
          bgColor="bg-green-50"
        />
        <StatCard
          icon={<FaUsers className="text-purple-600" />}
          title="Personnel"
          value="42"
          bgColor="bg-purple-50"
        />
      </div>

      {/* 3. Recent Incidents Table */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="p-5 border-b border-gray-100 flex justify-between items-center">
          <h2 className="font-bold text-gray-800 text-base md:text-lg flex items-center gap-2">
            Recent Incidents
            <span className="bg-gray-100 text-gray-600 text-xs px-2 py-0.5 rounded-full hidden sm:inline-block">
              Last 24h
            </span>
          </h2>
          <button className="text-blue-600 text-xs md:text-sm font-bold hover:underline flex items-center gap-1">
            View All <FaArrowRight size={10} />
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-600px md:min-w-full">
            <thead className="bg-gray-50/50 text-gray-500 text-[10px] md:text-xs uppercase font-bold tracking-wider">
              <tr>
                <th className="px-6 py-4">ID</th>
                <th className="px-6 py-4">Title</th>
                <th className="px-6 py-4">Category</th>
                <th className="px-6 py-4">Severity</th>
                <th className="px-6 py-4">Status</th>
              </tr>
            </thead>
            <tbody className="text-xs md:text-sm divide-y divide-gray-50">
              {recentIncidents.map((item) => (
                <tr
                  key={item.id}
                  className="hover:bg-blue-50/30 transition-colors cursor-default"
                >
                  <td className="px-6 py-4 font-bold text-gray-700">
                    {item.id}
                  </td>
                  <td className="px-6 py-4 font-medium text-gray-800">
                    {item.title}
                  </td>
                  <td className="px-6 py-4 text-gray-500">{item.category}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase border ${
                        item.severity === "Critical"
                          ? "bg-red-100 text-red-700 border-red-200"
                          : item.severity === "High"
                            ? "bg-orange-100 text-orange-700 border-orange-200"
                            : item.severity === "Medium"
                              ? "bg-yellow-100 text-yellow-700 border-yellow-200"
                              : "bg-slate-100 text-slate-600 border-slate-200"
                      }`}
                    >
                      {item.severity}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div
                        className={`w-2 h-2 rounded-full ${item.status === "Resolved" ? "bg-green-500" : "bg-blue-500 animate-pulse"}`}
                      />
                      <span
                        className={`font-medium ${item.status === "Resolved" ? "text-green-700" : "text-blue-700"}`}
                      >
                        {item.status}
                      </span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 4. MOBILE ONLY: Floating Action Button (FAB) */}
      {/* This button stays fixed at the bottom right of the phone screen */}
      <Link
        to="/report"
        className="md:hidden fixed bottom-6 right-6 bg-blue-600 text-white p-4 rounded-full shadow-lg shadow-blue-600/30 hover:bg-blue-700 active:scale-90 transition-transform z-50"
      >
        <FaPlus size={24} />
      </Link>
    </div>
  );
};

// Sub-component for Cards
const StatCard = ({ icon, title, value, bgColor, alert }) => (
  <div className="bg-white p-4 md:p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between h-32 md:h-auto relative overflow-hidden group">
    {/* Background decoration */}
    <div
      className={`absolute -right-4 -top-4 w-16 h-16 rounded-full opacity-20 ${bgColor} group-hover:scale-150 transition-transform duration-500`}
    />

    <div className="flex justify-between items-start mb-2">
      <div className={`p-2.5 rounded-xl ${bgColor} text-xl md:text-2xl`}>
        {icon}
      </div>
      {alert && (
        <span className="flex h-3 w-3 relative">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
        </span>
      )}
    </div>

    <div>
      <h3 className="text-2xl md:text-3xl font-bold text-gray-800">{value}</h3>
      <p className="text-[11px] md:text-sm text-gray-500 font-semibold uppercase tracking-wide">
        {title}
      </p>
    </div>
  </div>
);

export default Dashboard;
