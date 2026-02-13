import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import DynamicScreen from "./pages/DynamicScreen";
import { screenConfig } from "./config/screenConfig";

function App() {
  // Get all paths from our config file (e.g., ["/", "/safety", "/report"])
  const routes = Object.keys(screenConfig);

  return (
    <BrowserRouter>
      <Routes>
        {/* Parent Route: Layout (Contains Sidebar & Header) */}
        <Route element={<Layout />}>
          {/* Loop through config to create routes automatically */}
          {routes.map((path) => (
            <Route key={path} path={path} element={<DynamicScreen />} />
          ))}

          {/* Catch-all for undefined routes */}
          <Route path="*" element={<DynamicScreen />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
