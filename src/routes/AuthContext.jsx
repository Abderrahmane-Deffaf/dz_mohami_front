import { createContext, useState } from "react";
import { Outlet } from "react-router-dom";
export const authContext = createContext();

const AuthContext = () => {
  const [user, setUser] = useState(null);

  return (
    <authContext.Provider value={{ user, setUser }}>
      <Outlet />
    </authContext.Provider>
  );
};

export default AuthContext;
