import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors">
      <h1 className="text-5xl font-bold text-green-500 mb-4">404</h1>
      <p className="text-lg text-gray-600 dark:text-gray-300">Oeps! Pagina niet gevonden.</p>
      <Link to="/" className="mt-6 text-green-600 hover:underline">
        Ga terug naar Home
      </Link>
    </div>
  );
}
