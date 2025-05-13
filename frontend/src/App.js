import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import { AuthProvider } from "./context/AuthContext";
import PrivateRoute from "./components/PrivateRoute";
import { appVersion } from "./version";


function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-50 to-green-100 text-gray-800">
          <header className="text-center p-8">
            <h1 className="text-4xl font-bold mb-4">
              Welkom bij Fluens van Annona DTIF(c)🌿
            </h1>
            <p className="text-lg">Jouw platform voor integraties</p>
          </header>

          <main className="flex-grow flex flex-col justify-center items-center">
            <Routes>
              <Route path="/" element={<Login />} />
              <Route 
                path="/dashboard" 
                element={
                  <PrivateRoute>
                    <Dashboard />
                  </PrivateRoute>
                } 
              />
            </Routes>
          </main>

          <footer className="p-4 text-xs text-gray-400">
            &copy; {new Date().getFullYear()} Fluens. All rights reserved van Waltertje van nu.
            <br />
            Versie: {appVersion}
          </footer>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
