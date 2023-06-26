import ProfileHeader from "@/components/profile/ProfileHeader";
import CoursesTab from "@/components/profile/ProfileTab";
import Portfolio from "@/components/profile/Portfolio";
import { useEffect } from "react";
import { DummyUser } from "@/data";
import { useAppContext } from "context/AppContext";

import CreateProjectModal from "@/components/common/modals/CreateProjectModal";
import CreatePlaygroundModal from "@/components/common/modals/CreatePlaygroundModal";
import CreateCertificateModal from "@/components/common/modals/CreateCertificateModal";
import ProfileTab from "@/components/profile/ProfileTab";

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
      <ProfileTab />

      {showCreateProjectModal && <CreateProjectModal />}
      {showCreatePlaygroundModal && <CreatePlaygroundModal />}
      {showCreateCertificateModal && <CreateCertificateModal />}
    </div>
  );
}
