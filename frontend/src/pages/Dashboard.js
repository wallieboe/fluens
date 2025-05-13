import { useAuth } from "../context/AuthContext";

export default function Dashboard() {
  const { currentUser } = useAuth();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Welkom in je Dashboard!</h1>
      <p className="mb-4">Je bent ingelogd als: <strong>{currentUser?.email}</strong></p>
    </div>
  );
}