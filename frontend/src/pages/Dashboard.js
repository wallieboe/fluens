import React from 'react';
import { useAuth } from "../context/AuthContext";

import Navigation from '../components/Navigation';
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebaseConfig";

export default function Dashboard() {
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/"); // terug naar login
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navigation />
      
      <main className="flex-grow w-full py-8 px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Welkom terug!</h2>
          <p className="text-gray-600 mb-6">Je bent nu ingelogd op het Fluens platform als <strong>{currentUser?.email}</strong>.</p>
          <button
            onClick={handleLogout}
            className="bg-[#3576C9] hover:bg-[#285a97] text-white font-bold py-2 px-6 rounded-full shadow transition duration-200"
          >
            Uitloggen
          </button>
        </div>
      </main>

      <footer className="bg-white shadow mt-12 w-full">
        <div className="w-full px-4 py-4">
          <p className="text-center text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Fluens. Alle rechten voorbehouden.
          </p>
        </div>
      </footer>
    </div>
  );
}
