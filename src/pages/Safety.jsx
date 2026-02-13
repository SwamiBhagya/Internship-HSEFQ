import {
  FaFilePdf,  FaPlayCircle,  FaPhoneAlt,  FaFirstAid,  FaFireExtinguisher,  FaHardHat,  FaArrowRight,  FaUserShield,  FaAmbulance,
} from "react-icons/fa";

const Safety = () => {
  return (
    // MATCHED DASHBOARD: Wrapper Layout
    <div className="space-y-6 md:space-y-8 animate-fadeIn pb-20 md:pb-0 m-10">
      {/* 1. Header Section (Matched Dashboard) */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 px-2 md:px-0 mx-10 my-10">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
            Safety Hub
          </h1>
          <p className="text-gray-500 text-xs md:text-sm mt-1">
            Access protocols, training modules, and emergency contacts.
          </p>
        </div>
        <div className="hidden md:block">
          <span className="text-xs font-semibold bg-red-50 text-red-600 px-3 py-1 rounded-full border border-red-100 flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
            </span>
            System Status: Active
          </span>
        </div>
      </div>

      {/* 2. Emergency Contacts as STAT CARDS (Matched Dashboard Top Row) */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
        <EmergencyCard
          icon={<FaFireExtinguisher className="text-red-600" />}
          title="Fire Dept"
          value="101"
          subLabel="Emergency"
          bgColor="bg-red-50"
          alert={true}
        />
        <EmergencyCard
          icon={<FaAmbulance className="text-pink-600" />}
          title="Ambulance"
          value="102"
          subLabel="Medical"
          bgColor="bg-pink-50"
        />
        <EmergencyCard
          icon={<FaUserShield className="text-blue-600" />}
          title="Plant Manager"
          value="+91 99999"
          subLabel="Operations"
          bgColor="bg-blue-50"
        />
        <EmergencyCard
          icon={<FaFirstAid className="text-green-600" />}
          title="Medical Room"
          value="Ext. 404"
          subLabel="First Aid"
          bgColor="bg-green-50"
        />
      </div>

      {/* 3. Main Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* LEFT COLUMN: SOPs & Training */}
        <div className="lg:col-span-2 space-y-6">
          {/* Documents Section - Styled like Dashboard "Recent Incidents" */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="p-5 border-b border-gray-100 flex justify-between items-center">
              <h2 className="font-bold text-gray-800 text-base md:text-lg flex items-center gap-2">
                <FaHardHat className="text-blue-600" />
                Guidelines & SOPs
              </h2>
              <button className="text-blue-600 text-xs md:text-sm font-bold hover:underline flex items-center gap-1">
                View Archive <FaArrowRight size={10} />
              </button>
            </div>

            <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              <DocCard
                title="Fire Safety Manual"
                size="2.4 MB"
                date="Jan 2026"
                color="bg-orange-50 text-orange-600"
              />
              <DocCard
                title="Chemical Protocol"
                size="1.1 MB"
                date="Dec 2025"
                color="bg-blue-50 text-blue-600"
              />
              <DocCard
                title="Electrical Guide"
                size="3.8 MB"
                date="Jan 2026"
                color="bg-yellow-50 text-yellow-600"
              />
              <DocCard
                title="Visitor Policy"
                size="0.5 MB"
                date="Nov 2025"
                color="bg-green-50 text-green-600"
              />
            </div>
          </div>

          {/* Training Section */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 flex flex-col md:flex-row gap-6">
            <div className="w-full md:w-1/3 h-40 bg-slate-900 rounded-xl flex items-center justify-center relative cursor-pointer group overflow-hidden">
              {/* Fake Video Thumbnail Effect */}
              <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent"></div>
              <FaPlayCircle className="text-white text-5xl opacity-90 group-hover:scale-110 transition-transform z-10" />
              <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-sm text-white text-[10px] font-bold px-2 py-1 rounded">
                12:30
              </div>
            </div>
            <div className="flex-1 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-purple-100 text-purple-700 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">
                  Mandatory
                </span>
              </div>
              <h3 className="font-bold text-lg text-gray-800">
                Q1 2026 General Safety Induction
              </h3>
              <p className="text-gray-500 text-sm mt-2 leading-relaxed">
                Refresher course on basic plant safety, PPE usage, and emergency
                assembly points. Required for all interns.
              </p>
              <button className="mt-4 w-fit text-sm font-bold text-blue-600 hover:text-blue-700 flex items-center gap-2 group">
                Start Module{" "}
                <FaArrowRight
                  className="group-hover:translate-x-1 transition-transform"
                  size={12}
                />
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Quick Guides & Quiz */}
        <div className="space-y-6">
          {/* Quick Guides - Styled like Dashboard Cards */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="p-5 border-b border-gray-100">
              <h2 className="font-bold text-gray-800 text-base md:text-lg">
                Quick Guides
              </h2>
            </div>
            <div className="divide-y divide-gray-50">
              <QuickGuideItem
                icon={<FaFireExtinguisher />}
                title="Use Fire Extinguisher"
                color="text-red-500 bg-red-50"
              />
              <QuickGuideItem
                icon={<FaFirstAid />}
                title="CPR Basics (First Aid)"
                color="text-green-500 bg-green-50"
              />
              <QuickGuideItem
                icon={<FaHardHat />}
                title="PPE Checklist"
                color="text-yellow-500 bg-yellow-50"
              />
            </div>
          </div>

          {/* Quiz Card - Dark Theme Accent */}
          <div className="bg-slate-900 text-white p-6 rounded-2xl relative overflow-hidden shadow-lg shadow-slate-900/20">
            <div className="relative z-10">
              <h3 className="font-bold text-lg flex items-center gap-2">
                <FaUserShield className="text-blue-400" /> Monthly Quiz
              </h3>
              <p className="text-slate-400 text-sm mt-2 mb-6 leading-relaxed">
                Complete your assessment to maintain your safety badge status.
                <br />
                <span className="text-blue-400 text-xs font-bold mt-1 block">
                  Due: Feb 28, 2026
                </span>
              </p>
              <button className="w-full bg-blue-600 py-3 rounded-xl font-bold text-sm hover:bg-blue-500 transition active:scale-95">
                Start Assessment
              </button>
            </div>
            {/* Decorative Circle */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Sub-Components (Restyled to match Dashboard) ---

// 1. Emergency Card -> Uses logic from Dashboard's StatCard
const EmergencyCard = ({ icon, title, value, bgColor, alert }) => (
  <div className="bg-white p-4 md:p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between h-32 md:h-auto relative overflow-hidden group cursor-pointer">
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
      <h3 className="text-xl md:text-2xl font-bold text-gray-800">{value}</h3>
      <p className="text-[10px] md:text-xs text-gray-500 font-bold uppercase tracking-wider mt-1">
        {title}
      </p>
    </div>
  </div>
);

// 2. Doc Card -> Cleaner look
const DocCard = ({ title, size, date, color }) => (
  <div className="bg-gray-50/50 p-4 rounded-xl border border-gray-100 hover:bg-white hover:shadow-md hover:border-gray-200 transition-all cursor-pointer group">
    <div className="flex items-start gap-3">
      <div
        className={`w-10 h-10 rounded-lg ${color} flex shrink-0 items-center justify-center group-hover:scale-110 transition-transform`}
      >
        <FaFilePdf className="text-lg" />
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="font-bold text-gray-800 text-sm truncate">{title}</h3>
        <p className="text-xs text-gray-500 mt-1 flex items-center gap-2">
          <span>{size}</span> • <span>{date}</span>
        </p>
      </div>
    </div>
  </div>
);

// 3. Quick Guide Item -> Matches list style
const QuickGuideItem = ({ icon, title, color }) => (
  <div className="p-4 flex items-center gap-4 hover:bg-gray-50 cursor-pointer transition group">
    <div
      className={`w-10 h-10 rounded-lg flex items-center justify-center text-lg ${color} group-hover:scale-110 transition-transform`}
    >
      {icon}
    </div>
    <span className="text-sm font-semibold text-gray-700 group-hover:text-gray-900">
      {title}
    </span>
    <FaArrowRight className="ml-auto text-gray-300 group-hover:text-gray-500 text-xs" />
  </div>
);

export default Safety;