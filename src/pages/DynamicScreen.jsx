import React from "react";
import { useLocation } from "react-router-dom";
import { screenConfig } from "../config/ScreenConfig";

const DynamicScreen = () => {
  const location = useLocation();
  // Match current path or default to not-found
  const config = screenConfig[location.pathname] || screenConfig["not-found"];

  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="border-b border-gray-200 dark:border-slate-700 pb-5">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
          {config.title}
        </h1>
        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
          {config.description}
        </p>
      </div>

      {/* Dynamic Content Area */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {config.widgets &&
          config.widgets.map((widget) => (
            <div
              key={widget.id}
              className="p-6 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-gray-100 dark:border-slate-700"
            >
              {/* Stat Widget Style */}
              {widget.type === "stat" && (
                <div>
                  <span className="text-sm font-medium text-gray-400 uppercase tracking-wider">
                    {widget.label}
                  </span>
                  <div className="mt-2 text-3xl font-extrabold text-blue-600 dark:text-blue-400">
                    {widget.value}
                  </div>
                </div>
              )}

              {/* Card/Text Widget Style */}
              {(widget.type === "card" || widget.type === "text") && (
                <div>
                  {widget.title && (
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                      {widget.title}
                    </h3>
                  )}
                  <p className="text-gray-600 dark:text-slate-300">
                    {widget.content}
                  </p>
                </div>
              )}
            </div>
          ))}
      </div>
    </div>
  );
};

export default DynamicScreen;
