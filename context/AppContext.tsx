import { DummyUser } from "@/data";
import { User } from "models/User";
import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

type AppContextType = {
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
  activeProfileTab: string;
  setActiveProfileTab: React.Dispatch<React.SetStateAction<string>>;
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User>>;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export default function AppStore(props: PropsWithChildren) {
  const [activeTab, setActiveTab] = useState<string>("Portfolio");
  const [activeProfileTab, setActiveProfileTab] = useState<string>("Profile");
  const [user, setUser] = useState<User>(DummyUser);

  return (
    <AppContext.Provider
      value={{
        activeTab,
        setActiveTab,
        activeProfileTab,
        setActiveProfileTab,
        user,
        setUser,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (!context) {
    throw Error("Context Error");
  }
  return context;
}
