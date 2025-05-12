import React from "react";

function App() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-50 to-green-100 text-gray-800">
      <header className="text-center p-8">
        <h1 className="text-4xl font-bold mb-4">Welkom bij Fluens van Annona DTIF(c)🌿</h1>
        <p className="text-lg">
          Jouw platform voor integraties
        </p>
      </header>

      <main className="flex-grow flex flex-col justify-center items-center">
        <div className="bg-white shadow-lg rounded-xl p-6 w-96">
          <h2 className="text-2xl font-semibold mb-4">Inloggen</h2>
          <p className="text-gray-500 mb-6">Log in om je scenario's te beheren.</p>
          <button className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
            Login
          </button>
        </div>
      </main>

      <footer className="p-4 text-xs text-gray-400">
        &copy; {new Date().getFullYear()} Fluens. Alle rechten voorbehouden van Waltertje van nu.
      </footer>
    </div>
  );
}

export default App;
