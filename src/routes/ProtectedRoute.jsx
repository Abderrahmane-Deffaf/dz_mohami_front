import { useContext } from "react";
import { authContext } from "./AuthContext";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { user } = useContext(authContext);

  if (!user) {
    return <Navigate to={"/"} />;
  }
  return children;
};

export default ProtectedRoute;
