import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/Dashboard";
import Register from "./pages/Register";
import { AuthProvider } from "./context/AuthContext";
import PrivateRoute from "./components/PrivateRoute";
import { appVersion } from "./version";
import NotFound from "./pages/NotFound";


function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-50 to-green-100 text-gray-800">
          <main className="flex-grow flex flex-col justify-center items-center">
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route 
                path="/dashboard" 
                element={
                  <PrivateRoute>
                    <Dashboard />
                  </PrivateRoute>
                } 
              />
              <Route path="*" element={<NotFound />} />

            </Routes>
          </main>

          <footer className="p-4 text-xs text-gray-400">
            &copy; {new Date().getFullYear()} Fluens. All rights reserved van Annona Deep Tier Impact Finance bv
            <br />
            Versie: {appVersion}
          </footer>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
