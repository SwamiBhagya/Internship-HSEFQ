import React, { useState } from 'react';
// Added FaCloudUploadAlt for upload feature and FaSpinner for loading state
import { FaCheckCircle, FaExclamationCircle, FaClipboardCheck, FaCloudUploadAlt, FaSpinner } from 'react-icons/fa';

const ReportIncident = () => {
  const [formData, setFormData] = useState({
    title: '',
    category: 'Health',
    severity: 'Medium',
    description: ''
  });

  // New States for "Professional Features"
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Feature 1: Validation (Prevent short descriptions)
    if (formData.description.length < 10) {
      alert("Please provide more details (at least 10 characters).");
      return;
    }

    // Feature 2: Loading State
    setIsSubmitting(true);

    // Simulate Network Request (2 Seconds)
    setTimeout(() => {
      console.log("Form Submitted:", formData);
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 2000);
  };

  // --- SUCCESS VIEW (Centered & Responsive) ---
  if (isSubmitted) {
    return (
      <div className="flex items-center justify-center min-h-[60vh] px-4 animate-fadeIn">
        <div className="max-w-md w-full text-center p-8 md:p-10 bg-white rounded-2xl shadow-lg border border-gray-100">
          <div className="flex justify-center mb-4">
            <FaCheckCircle className="text-green-500 text-5xl md:text-6xl animate-bounce" />
          </div>
          <h2 className="text-xl md:text-2xl font-bold text-gray-800">Report Submitted!</h2>
          <p className="text-sm md:text-base text-gray-500 mt-2 mb-6">
            The HSE team has been notified. Reference ID: #INC-{Math.floor(Math.random() * 1000)}
          </p>
          <button 
            onClick={() => { setIsSubmitted(false); setFormData({ title: '', category: 'Health', severity: 'Medium', description: '' }); }}
            className="w-full bg-blue-600 text-white py-3 rounded-xl font-bold hover:bg-blue-700 transition active:scale-95 shadow-md"
          >
            Submit Another Report
          </button>
        </div>
      </div>
    );
  }

  // --- MAIN FORM VIEW ---
  return (
    // 'px-4' ensures content doesn't touch phone screen edges
    <div className="max-w-3xl mx-auto px-4 py-6 md:py-10">
      
      {/* Header */}
      <div className="mb-6 md:mb-8">
        <h1 className="text-xl md:text-3xl font-bold text-gray-900 flex items-center gap-3">
          <span className="p-2 bg-blue-100 rounded-lg text-blue-600">
            <FaClipboardCheck size={24} />
          </span>
          Report New Incident
        </h1>
        <p className="text-xs md:text-sm text-gray-500 mt-1 ml-1">Fill out the details below to log a safety issue.</p>
      </div>

      <div className="bg-white p-5 md:p-8 rounded-2xl shadow-sm border border-gray-200">
        <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
          
          {/* Incident Title */}
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1.5">Incident Title</label>
            <input 
              type="text"
              required
              disabled={isSubmitting}
              className="w-full p-3 text-base border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition disabled:bg-gray-100"
              placeholder="e.g. Chemical spill in Lab 4"
              value={formData.title}
              onChange={(e) => setFormData({...formData, title: e.target.value})}
            />
          </div>

          {/* Responsive Grid: Stack on Mobile (grid-cols-1), Side-by-Side on Desktop (md:grid-cols-2) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1.5">Category</label>
              <select 
                className="w-full p-3 text-base border border-gray-300 rounded-xl bg-white outline-none focus:ring-2 focus:ring-blue-500"
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
              <label className="block text-sm font-bold text-gray-700 mb-1.5">Severity</label>
              <select 
                className="w-full p-3 text-base border border-gray-300 rounded-xl bg-white outline-none focus:ring-2 focus:ring-blue-500"
                onChange={(e) => setFormData({...formData, severity: e.target.value})}
              >
                <option>Medium</option>
                <option>Low</option>
                <option>High</option>
                <option>Critical</option>
              </select>
            </div>
          </div>

          {/* Feature 3: File Upload Placeholder */}
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1.5">Evidence (Optional)</label>
            <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-blue-400 transition cursor-pointer bg-gray-50 group">
              <FaCloudUploadAlt className="mx-auto text-3xl text-gray-400 group-hover:text-blue-500 transition mb-2" />
              <p className="text-xs text-gray-500">Tap to upload photos</p>
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1.5">Detailed Description</label>
            <textarea 
              rows="4"
              required
              disabled={isSubmitting}
              className="w-full p-3 text-base border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition disabled:bg-gray-100"
              placeholder="Describe what happened..."
              value={formData.description}
              onChange={(e) => setFormData({...formData, description: e.target.value})}
            ></textarea>
          </div>

          {/* Warning Note */}
          <div className="flex items-start gap-3 p-4 bg-amber-50 rounded-xl border border-amber-100">
            <FaExclamationCircle className="text-amber-500 mt-0.5 shrink-0" />
            <p className="text-xs text-amber-800 font-medium">
              <strong>Emergency?</strong> Call 101 immediately before filling this form.
            </p>
          </div>

          {/* Submit Button with Loading State */}
          <button 
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-slate-900 text-white py-3.5 rounded-xl font-bold hover:bg-black shadow-lg hover:shadow-xl transition-all active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <>
                <FaSpinner className="animate-spin" /> Saving...
              </>
            ) : (
              "Confirm & Submit Report"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ReportIncident;