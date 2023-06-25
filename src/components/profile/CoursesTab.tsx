import { useAppContext } from "context/AppContext";
import React, { useState } from "react";

const CoursesTab = () => {
  const tabs = ["Portfolio", "Resume"];
  const { activeTab, setActiveTab } = useAppContext();

  return (
    <div className="border border-neutral-200 shadow-sm mt-6 rounded-xl px-3 py-4">
      {tabs.map((tab) => (
        <span
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`${
            activeTab === tab
              ? "bg-primary-50 hover:bg-primary-100 text-primary-500"
              : "bg-zinc-100 hover:bg-neutral-200/60 text-gray-800"
          } cursor-pointer p-2 text-sm rounded-md mr-2`}
        >
          {tab}
        </span>
      ))}
    </div>
  );
};

export default CoursesTab;
