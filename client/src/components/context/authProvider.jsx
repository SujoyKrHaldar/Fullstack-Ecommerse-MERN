import { useContext, createContext, useEffect, useState } from "react";

const AuthContext = createContext();

const useAuthContext = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    user: null,
    token: "",
  });

  useEffect(() => {
    const userData = localStorage.getItem("auth");
    if (userData) {
      const data = JSON.parse(userData);
      setAuth({
        ...auth,
        user: data.user,
        token: data.token,
      });
    }
  }, []);

  return (
    <AuthContext.Provider value={[auth, setAuth]}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, useAuthContext };
