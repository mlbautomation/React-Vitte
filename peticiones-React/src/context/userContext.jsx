import { createContext, useEffect, useState } from "react";

const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  useEffect(() => {
    setUser({
      name: "Marlon Ly B.",
      registered: "30/Agosto/2024",
    });
  }, []);

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

export { UserContext, UserContextProvider };
