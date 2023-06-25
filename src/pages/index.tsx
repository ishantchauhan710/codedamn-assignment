import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import NavBar from "@/components/common/NavBar";
import ProfileSection from "@/components/profile/ProfileSection";
import CoursesTab from "@/components/profile/CoursesTab";
import { useAppContext } from "context/AppContext";
import Portfolio from "@/components/profile/portfolio/Portfolio";
import Resume from "@/components/profile/resume/Resume";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { activeTab } = useAppContext();
  return (
    <div>
      <NavBar />
      <div className="mx-16 my-24">
        <ProfileSection />
        <CoursesTab />
        {activeTab === "Portfolio" && <Portfolio />}
        {activeTab === "Resume" && <Resume />}
      </div>
    </div>
  );
}
