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
  reloadUser: () => void;
  showCreateProjectModal: boolean;
  setShowCreateProjectModal: React.Dispatch<React.SetStateAction<boolean>>;
  showCreatePlaygroundModal: boolean;
  setShowCreatePlaygroundModal: React.Dispatch<React.SetStateAction<boolean>>;
  showCreateCertificateModal: boolean;
  setShowCreateCertificateModal: React.Dispatch<React.SetStateAction<boolean>>;
  showCreateExperienceModal: boolean;
  setShowCreateExperienceModal: React.Dispatch<React.SetStateAction<boolean>>;
  showCreateEducationModal: boolean;
  setShowCreateEducationModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export default function AppStore(props: PropsWithChildren) {
  const [activeTab, setActiveTab] = useState<string>("Portfolio");
  const [activeProfileTab, setActiveProfileTab] = useState<string>("Profile");
  const [user, setUser] = useState<User>(DummyUser);
  const [showCreateProjectModal, setShowCreateProjectModal] = useState(false);
  const [showCreatePlaygroundModal, setShowCreatePlaygroundModal] =
    useState(false);

  const [showCreateCertificateModal, setShowCreateCertificateModal] =
    useState(false);

  const [showCreateExperienceModal, setShowCreateExperienceModal] =
    useState(false);

  const [showCreateEducationModal, setShowCreateEducationModal] =
    useState(false);

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      const savedUserJson: User = JSON.parse(savedUser);
      setUser(savedUserJson);
    } else {
      localStorage.setItem("user", JSON.stringify(DummyUser));
    }
  }, []);

  // Disable background scroll when any modal is open
  useEffect(() => {
    if (
      showCreateProjectModal ||
      showCreatePlaygroundModal ||
      showCreateCertificateModal ||
      showCreateExperienceModal ||
      showCreateEducationModal
    ) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [
    showCreateProjectModal,
    showCreatePlaygroundModal,
    showCreateCertificateModal,
    showCreateExperienceModal,
    showCreateEducationModal,
  ]);

  const reloadUser = () => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      const savedUserJson: User = JSON.parse(savedUser);
      setUser(savedUserJson);
    }
  };

  return (
    <AppContext.Provider
      value={{
        activeTab,
        setActiveTab,
        activeProfileTab,
        setActiveProfileTab,
        user,
        setUser,
        reloadUser,
        showCreateProjectModal,
        setShowCreateProjectModal,
        showCreatePlaygroundModal,
        setShowCreatePlaygroundModal,
        showCreateCertificateModal,
        setShowCreateCertificateModal,
        showCreateExperienceModal,
        setShowCreateExperienceModal,
        showCreateEducationModal,
        setShowCreateEducationModal,
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
