export default function NotFound() {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-5xl font-bold text-green-500 mb-4">404</h1>
        <p className="text-lg text-gray-600">Oeps! Pagina niet gevonden.</p>
        <a href="/" className="mt-6 text-green-600 hover:underline">
          Ga terug naar Home
        </a>
      </div>
    );
  }
