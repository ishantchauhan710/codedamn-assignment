import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import NavBar from "@/components/common/NavBar";
import ProfileSection from "@/components/profile/ProfileSection";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <NavBar />
      <div className="mx-12 mt-10">
        <ProfileSection />
      </div>
    </div>
  );
}
