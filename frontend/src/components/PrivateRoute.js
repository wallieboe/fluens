import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function PrivateRoute({ children }) {
  const { currentUser } = useAuth();

  if (!currentUser) {
    // Als niet ingelogd, redirect naar login
    return <Navigate to="/login" replace />;
  }

  // Anders laat je de gevraagde pagina zien
  return children;
}
