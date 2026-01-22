import React, { useState } from 'react';
import { FaCheckCircle, FaExclamationCircle, FaClipboardCheck } from 'react-icons/fa';

const ReportIncident = () => {
  // 1. State for form data
  const [formData, setFormData] = useState({
    title: '',
    category: 'Health',
    severity: 'Medium',
    description: ''
  });

  // 2. State to track if the form was successfully submitted
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    
    // Simulate a "Saving..." delay, then show success
    setIsSubmitted(true);
  };

  // 3. The "Success View" - Shows after clicking submit
  if (isSubmitted) {
    return (
      <div className="max-w-md mx-auto mt-10 text-center p-10 bg-white rounded-2xl shadow-lg border border-gray-100">
        <div className="flex justify-center mb-4">
          <FaCheckCircle className="text-green-500 text-6xl animate-bounce" />
        </div>
        <h2 className="text-2xl font-bold text-gray-800">Report Submitted!</h2>
        <p className="text-gray-500 mt-2 mb-6">
          Thank you, Bhagya. The HSE team has been notified and will review the incident shortly.
        </p>
        <button 
          onClick={() => setIsSubmitted(false)}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Submit Another Report
        </button>
      </div>
    );
  }

  // 4. The Main Form View
  return (
    <div className="max-w-2xl mx-auto my-10 ">
      {/* Page Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
          <FaClipboardCheck className="text-blue-600" />
          Report New Incident
        </h1>
        <p className="text-sm text-gray-500">Fill out the details below to log a safety or quality issue.</p>
      </div>

      <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Incident Title */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Incident Title</label>
            <input 
              type="text"
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
              placeholder="e.g. Chemical spill in Lab 4"
              onChange={(e) => setFormData({...formData, title: e.target.value})}
            />
          </div>

          {/* Category & Severity Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Category</label>
              <select 
                className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 outline-none focus:ring-2 focus:ring-blue-500"
                onChange={(e) => setFormData({...formData, category: e.target.value})}
              >
                <option>Health</option>
                <option>Safety</option>
                <option>Environment</option>
                <option>Fire</option>
                <option>Quality</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Severity</label>
              <select 
                className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 outline-none focus:ring-2 focus:ring-blue-500"
                onChange={(e) => setFormData({...formData, severity: e.target.value})}
              >
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
                <option>Critical</option>
              </select>
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Detailed Description</label>
            <textarea 
              rows="4"
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition"
              placeholder="Provide as much detail as possible..."
              onChange={(e) => setFormData({...formData, description: e.target.value})}
            ></textarea>
          </div>

          {/* Helpful Tip */}
          <div className="flex items-start gap-3 p-4 bg-amber-50 rounded-lg border border-amber-100">
            <FaExclamationCircle className="text-amber-500 mt-1" />
            <p className="text-xs text-amber-800">
              <strong>Note:</strong> Serious fire or medical emergencies should be reported via the emergency hotline immediately before filling out this form.
            </p>
          </div>

          {/* Submit Button */}
          <button 
            type="submit"
            className="w-full bg-slate-900 text-white py-3.5 rounded-lg font-bold hover:bg-black shadow-lg hover:shadow-xl transition-all active:scale-[0.98]"
          >
            Confirm & Submit Report
          </button>
        </form>
      </div>
    </div>
  );
};

export default ReportIncident;