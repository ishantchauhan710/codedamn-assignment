import { createContext, useContext, useState } from "react";
const AppContext = createContext();

export default function AppStore({ children }) {
  const [activeTab, setActiveTab] = useState("Portfolio");
  const [activeProfileTab, setActiveProfileTab] = useState("Profile");
  return (
    <AppContext.Provider
      value={{ activeTab, setActiveTab, activeProfileTab, setActiveProfileTab }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
