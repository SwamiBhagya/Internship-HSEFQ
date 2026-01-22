import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Safety from './pages/Safety';
import Dashboard from './pages/DashBoard';
import ReportIncident from './pages/ReportIncident';

function App() {
  return (
    <BrowserRouter>
      <div className="flex bg-gray-50 min-h-screen">
        {/* Sidebar stays fixed on the left */}
        <Sidebar />

        {/* The main content area changes based on the Route */}
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Dashboard/>} />
            <Route path="/safety" element={<Safety />} />
            <Route path="report" element={<ReportIncident />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;