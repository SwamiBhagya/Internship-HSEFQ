import React from "react";
import {
  FaFilePdf,
  FaPlayCircle,
  FaPhoneAlt,
  FaFirstAid,
  FaFireExtinguisher,
  FaHardHat,
} from "react-icons/fa";

const Safety = () => {
  return (
    <div className="max-w-6xl mx-auto space-y-8 m-10">
      {/* 1. Header with Emergency Banner - Visually Distinct */}
      {/* <div className="bg-red-50 border border-red-100 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h1 className="text-2xl font-bold text-red-700 flex items-center gap-2">
            <FaPhoneAlt /> Emergency Contacts
          </h1>
          <p className="text-red-600/80 mt-1 text-sm">
            In case of critical emergencies, call these numbers immediately.
          </p>
        </div>
        <div className="flex gap-4">
          <EmergencyBadge number="101" label="Fire Dept" />
          <EmergencyBadge number="102" label="Ambulance" />
          <EmergencyBadge number="+91 99999 99999" label="Plant Manager" />
        </div>
      </div> */}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* 2. Left Column: Standard Operating Procedures (SOPs) */}
        <div className="lg:col-span-2 space-y-6">
          <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
            <FaHardHat className="text-blue-600" />
            Safety Guidelines & SOPs
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Downloadable PDF Cards */}
            <DocCard
              title="Fire Safety Manual"
              size="2.4 MB"
              date="Jan 2026"
              color="bg-orange-50 text-orange-600"
            />
            <DocCard
              title="Chemical Handling Protocol"
              size="1.1 MB"
              date="Dec 2025"
              color="bg-blue-50 text-blue-600"
            />
            <DocCard
              title="Electrical Safety Guide"
              size="3.8 MB"
              date="Jan 2026"
              color="bg-yellow-50 text-yellow-600"
            />
            <DocCard
              title="Visitor Safety Policy"
              size="0.5 MB"
              date="Nov 2025"
              color="bg-green-50 text-green-600"
            />
          </div>

          {/* Training Video Section */}
          <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2 pt-4">
            <FaPlayCircle className="text-purple-600" />
            Mandatory Training
          </h2>
          <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 flex flex-col md:flex-row gap-6">
            <div className="w-full md:w-1/3 h-40 bg-slate-900 rounded-lg flex items-center justify-center relative cursor-pointer group">
              <FaPlayCircle className="text-white text-4xl opacity-80 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded">
                12:30
              </div>
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-gray-800">
                Q1 2026 General Safety Induction
              </h3>
              <p className="text-gray-500 text-sm mt-2">
                Every intern and employee must watch this refresher course on
                basic plant safety, PPE usage, and emergency assembly points.
              </p>
              <button className="mt-4 text-sm font-semibold text-blue-600 hover:underline">
                Watch Now &rarr;
              </button>
            </div>
          </div>
        </div>

        {/* 3. Right Column: Quick Actions */}
        <div className="space-y-6">
          <h2 className="text-xl font-bold text-gray-800">Quick Guides</h2>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 divide-y divide-gray-100">
            <QuickGuideItem
              icon={<FaFireExtinguisher />}
              title="How to use Fire Extinguisher"
              color="text-red-500"
            />
            <QuickGuideItem
              icon={<FaFirstAid />}
              title="CPR Basics (First Aid)"
              color="text-green-500"
            />
            <QuickGuideItem
              icon={<FaHardHat />}
              title="PPE Checklist"
              color="text-yellow-500"
            />
          </div>

          <div className="bg-slate-900 text-white p-6 rounded-xl relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="font-bold text-lg">Safety Quiz</h3>
              <p className="text-slate-400 text-sm mt-2 mb-4">
                Complete your monthly assessment to keep your badge active.
              </p>
              <button className="w-full bg-blue-600 py-2 rounded-lg font-semibold hover:bg-blue-700 transition">
                Start Quiz
              </button>
            </div>
            {/* Decorative Circle */}
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Sub-Components for Clean Code ---

const EmergencyBadge = ({ number, label }) => (
  <div className="bg-white/60 border border-red-200 px-4 py-2 rounded-lg text-center min-w-[100px]">
    <div className="text-lg font-bold text-red-700">{number}</div>
    <div className="text-[10px] uppercase font-bold text-red-400">{label}</div>
  </div>
);

const DocCard = ({ title, size, date, color }) => (
  <div className="bg-white p-4 rounded-xl border border-gray-200 hover:shadow-md transition-shadow cursor-pointer group">
    <div
      className={`w-10 h-10 rounded-lg ${color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}
    >
      <FaFilePdf className="text-xl" />
    </div>
    <h3 className="font-semibold text-gray-800 text-sm">{title}</h3>
    <div className="flex justify-between mt-2 text-xs text-gray-400">
      <span>{size}</span>
      <span>{date}</span>
    </div>
  </div>
);

const QuickGuideItem = ({ icon, title, color }) => (
  <div className="p-4 flex items-center gap-4 hover:bg-gray-50 cursor-pointer transition">
    <div className={`text-xl ${color}`}>{icon}</div>
    <span className="text-sm font-medium text-gray-700">{title}</span>
  </div>
);

export default Safety;
