import ProfileHeader from "@/components/profile/ProfileHeader";
import CoursesTab from "@/components/profile/CoursesTab";
import Portfolio from "@/components/profile/Portfolio";
import { useEffect } from "react";
import { DummyUser } from "@/data";
import { useAppContext } from "context/AppContext";
import { User } from "models/User";
import Resume from "@/components/profile/Resume";
import CreateProjectModal from "@/components/common/modals/CreateProjectModal";
import CreatePlaygroundModal from "@/components/common/modals/CreatePlaygroundModal";
import CreateCertificateModal from "@/components/common/modals/CreateCertificateModal";

export default function Home() {
  const {
    activeTab,
    showCreateProjectModal,
    showCreatePlaygroundModal,
    showCreateCertificateModal,
  } = useAppContext();

  return (
    <div className="mx-2 sm:mx-4 md:mx-24 my-24">
      <ProfileHeader />
      <CoursesTab />
      {activeTab === "Portfolio" && <Portfolio />}
      {activeTab === "Resume" && <Resume />}
      {showCreateProjectModal && <CreateProjectModal />}
      {showCreatePlaygroundModal && <CreatePlaygroundModal />}
      {showCreateCertificateModal && <CreateCertificateModal />}
    </div>
  );
}
