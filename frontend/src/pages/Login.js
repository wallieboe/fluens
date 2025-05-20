import { useState } from "react";
import FluensLogo from "../components/FluensLogo";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebaseConfig";

export default function Login() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true); // Start loading
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("✅ Login successful for:", email);
      navigate("/dashboard");
    } catch (err) {
      console.error("❌ Login failed:", err.code, err.message);
      switch (err.code) {
        case "auth/user-not-found":
          setError("Gebruiker niet gevonden. Controleer je e-mailadres.");
          break;
        case "auth/wrong-password":
          setError("Onjuist wachtwoord. Probeer opnieuw.");
          break;
        case "auth/invalid-email":
          setError("Ongeldig e-mailadres formaat.");
          break;
        case "auth/too-many-requests":
          setError("Te veel mislukte pogingen. Probeer later opnieuw.");
          break;
        default:
          setError("Inloggen mislukt. Probeer het opnieuw.");
      }
    } finally {
      setLoading(false); // Stop loading ongeacht succes of fout
    }
  }

  return (
    loading ? (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors">
        <div className="flex items-center justify-center">
          <div className="animate-spin rounded-full h-20 w-20 border-t-4 border-b-4 border-green-500"></div>
        </div>
        <p className="mt-4 text-lg font-semibold text-gray-600">Bezig met inloggen...</p>
      </div>
    ) : (
      <form onSubmit={handleLogin} className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl w-96 flex flex-col items-center animate-fadein transition-colors">
        <FluensLogo size={64} />
        <h2 className="text-3xl font-extrabold mb-2 text-center text-[#3576C9] tracking-tight">fluens</h2>
        <p className="text-base text-gray-500 mb-6 text-center">Automate Financial Workflows</p>
        <h2 className="text-xl font-bold mb-4 text-center text-gray-800">Inloggen</h2>
        {error && <p className="text-red-500 text-sm mb-4 text-center">{error}</p>}
        <input
          type="email"
          placeholder="Email"
          className="border p-2 w-full mb-4 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Wachtwoord"
          className="border p-2 w-full mb-4 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button
          type="submit"
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded w-full mb-4"
        >
          Login
        </button>
        <button
          type="button"
          onClick={() => navigate("/register")}
          className="text-green-500 hover:text-green-600 font-semibold"
        >
          Nog geen account? Registreer hier
        </button>
      </form>
    )
  );  
}
