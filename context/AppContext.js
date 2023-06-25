import { createContext, useContext, useState } from "react";
const AppContext = createContext();

export default function AppStore({ children }) {
  const [activeTab, setActiveTab] = useState("Portfolio");
  return (
    <AppContext.Provider value={{ activeTab, setActiveTab }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
