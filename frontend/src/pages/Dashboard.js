import { useAuth } from "../context/AuthContext";
import FluensLogo from "../components/FluensLogo";
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
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#3576C9]">
      <div className="bg-white rounded-2xl shadow-xl p-10 flex flex-col items-center w-[28rem] animate-fadein">
        <FluensLogo size={56} />
        <h2 className="text-3xl font-extrabold mt-2 mb-1 text-center text-[#3576C9] tracking-tight">fluens</h2>
        <p className="text-base text-gray-500 mb-6 text-center">Automate Financial Workflows</p>
        <h1 className="text-2xl font-bold mb-4 text-gray-800">Welkom in je Dashboard!</h1>
        <p className="mb-6 text-gray-700">Je bent ingelogd als:<br/><strong>{currentUser?.email}</strong></p>
        <button
          onClick={handleLogout}
          className="bg-[#3576C9] hover:bg-[#285a97] text-white font-bold py-2 px-6 rounded-full shadow transition duration-200"
        >
          Uitloggen
        </button>
      </div>
    </div>
  );
}
