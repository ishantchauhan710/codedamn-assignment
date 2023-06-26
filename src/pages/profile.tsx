import PortfolioTab from "@/components/edit/PortfolioTab";
import ProfileTab from "@/components/edit/ProfileTab";
import ResumeTab from "@/components/edit/ResumeTab";
import SocialsTab from "@/components/edit/SocialsTab";
import { useAppContext } from "context/AppContext";
import Image from "next/image";
import React from "react";

const Profile = () => {
  const tabs = ["Profile", "Socials", "Portfolio", "Resume"];
  const { activeProfileTab, setActiveProfileTab } = useAppContext();

  return (
    <div>
      <div className="my-24 flex items-start">
        <div className="hidden md:flex flex-[0.20] mx-4">
          <div className="bg-zinc-100 py-6 rounded-md w-full">
            {tabs.map((tab) => (
              <div
                key={tab}
                onClick={() => setActiveProfileTab(tab)}
                className={`flex items-center px-3 py-2 cursor-pointer text-zinc-900 ${
                  tab === activeProfileTab
                    ? "border-l-[6px] border-l-zinc-800 border-y-4 border-y-transparent"
                    : "border-l-[6px] border-l-transparent border-y-4 border-y-transparent opacity-[0.5] hover:opacity-[0.75]"
                }`}
              >
                <Image
                  src="/icons/app/profile_tab_item.png"
                  width={20}
                  height={20}
                  alt={tab}
                  className="mr-2"
                />
                {tab}
              </div>
            ))}
          </div>
        </div>
        <div className="flex-[1] md:flex-[0.80] mx-4 md:px-4">
          {activeProfileTab === "Profile" && <ProfileTab />}
          {activeProfileTab === "Socials" && <SocialsTab />}
          {activeProfileTab === "Portfolio" && <PortfolioTab />}
          {activeProfileTab === "Resume" && <ResumeTab />}
        </div>
      </div>
      <div className="bg-zinc-100 pt-2 rounded-md w-full flex md:hidden items-center justify-around fixed bottom-0">
        {tabs.map((tab) => (
          <div
            key={tab}
            onClick={() => setActiveProfileTab(tab)}
            className={`flex items-center flex-col sm:flex-row text-sm px-3 py-2 cursor-pointer text-zinc-900 ${
              tab === activeProfileTab
                ? "border-b-[3px] border-b-zinc-800"
                : "border-b-[3px] border-b-transparent opacity-[0.5] hover:opacity-[0.75]"
            }`}
          >
            <Image
              src="/icons/app/profile_tab_item.png"
              width={20}
              height={20}
              alt={tab}
              className="mb-1 sm:mr-2 sm:mb-0"
            />
            {tab}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;
