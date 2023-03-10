import { useContext, createContext, useEffect, useState } from "react";

const NotifyContext = createContext();

const NotifyProvider = ({ children }) => {
  const [status, setStatus] = useState({
    message: "",
    success: null,
    active: false,
  });

  return (
    <NotifyContext.Provider value={[status, setStatus]}>
      {children}
    </NotifyContext.Provider>
  );
};

const useNotifyContext = () => useContext(NotifyContext);

export { NotifyProvider, useNotifyContext };
