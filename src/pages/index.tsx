import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import NavBar from "@/components/common/NavBar";
import ProfileSection from "@/components/profile/ProfileSection";
import CoursesTab from "@/components/profile/CoursesTab";
import Portfolio from "@/components/profile/portfolio/Portfolio";
import Resume from "@/components/profile/resume/Resume";
import { useEffect } from "react";
import { DummyUser } from "@/data";
import { useAppContext } from "context/AppContext";
import { User } from "models/User";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { activeTab, user, setUser } = useAppContext();

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      const savedUserJson: User = JSON.parse(savedUser);
      setUser(savedUserJson);
    } else {
      localStorage.setItem("user", JSON.stringify(DummyUser));
    }
  }, []);

  return (
    <div className="mx-2 sm:mx-4 md:mx-24 my-24">
      <ProfileSection />
      <CoursesTab />
      {activeTab === "Portfolio" && <Portfolio />}
      {activeTab === "Resume" && <Resume />}
    </div>
  );
}
