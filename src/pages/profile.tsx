import ProfileTab from "@/components/edit/ProfileTab";
import SocialsTab from "@/components/edit/SocialsTab";
import { useAppContext } from "context/AppContext";
import Image from "next/image";
import React from "react";

const Profile = () => {
  const tabs = ["Profile", "Socials", "Portfolio", "Resume"];
  const { activeProfileTab, setActiveProfileTab } = useAppContext();

  return (
    <div className="my-24 flex">
      <div className="flex-[0.25] mx-4">
        <div className="bg-zinc-100 py-6 rounded-md">
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
      <div className="flex-[0.75] mx-4 pr-4">
        {activeProfileTab === "Profile" && <ProfileTab />}
        {activeProfileTab === "Socials" && <SocialsTab />}
      </div>
    </div>
  );
};

export default Profile;
