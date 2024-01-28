import { Toaster } from "@/components/ui/toaster";
import { createContext, useState } from "react";
import { Outlet } from "react-router-dom";
export const authContext = createContext({
  type: null,
  user: null,
});

const AuthContext = () => {
  const [user, setUser] = useState(null);
  const [type, setType] = useState(null);

  return (
    <authContext.Provider value={{ user, setUser, type, setType }}>
      <Outlet />
      <Toaster />
    </authContext.Provider>
  );
};

export default AuthContext;
