import { useContext, useEffect } from "react";
import { authContext } from "./AuthContext";
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { user, setUser } = useContext(authContext);
  const cookies = document.cookie.split(";");
  const [userCookie] = cookies.filter((Element) => {
    if (Element?.trim().split("=")[0] == "token") {
      return Element;
    }
  });
  if (!user && !userCookie?.trim().split("=")[1]) {
    return <Navigate to={"/"} />;
  }
  setUser(userCookie?.trim().split("=")[1]);
  return children;
};

export default ProtectedRoute;
