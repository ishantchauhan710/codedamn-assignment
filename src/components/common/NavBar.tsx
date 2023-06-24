import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <div className="self-start mr-auto">
      <Image
        src="/codedamn_logo.png"
        width={125}
        height={32}
        alt="codedamn logo"
        title="Codedamn"
      />
    </div>
  );
};

const SearchField = () => {
  return (
    <div className="ml-2 mr-6 hidden relative md:block">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <Image src="/search.png" width={16} height={16} alt="search codedamn" />
      </div>
      <input
        type="search"
        id="default-search"
        className="block w-80 py-[6px] pl-10 pr-20 text-md text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none"
        placeholder="Search"
        required
      />
      <div
        className="flex items-center justify-center bg-gray-200 hover:bg-gray-300/70 text-neutral-600 rounded-md absolute inset-y-0 right-0 px-2 mx-1 my-[4px] cursor-pointer"
        onClick={() => alert("Courses")}
      >
        <span className="mr-1">Courses</span>
        <Image src="/down.png" width={14} height={14} alt="search codedamn" />
      </div>
    </div>
  );
};

const NavIcons = () => {
  return (
    <div
      className="flex items-center justify-between"
      onClick={() => alert("Spark")}
    >
      <div className="flex items-center justify-between mx-2 cursor-pointer">
        <Image src="/spark.png" width={20} height={20} alt="spark" />
        <span className="font-semibold text-neutral-600 text-md ml-1">2</span>
      </div>

      <div
        className="relative mx-2 cursor-pointer"
        onClick={() => alert("Notifications")}
      >
        <Image
          src="/notification.png"
          width={24}
          height={24}
          alt="notifications"
        />
        <div className="absolute bg-pink-700 rounded-full text-white text-sm font-semibold p-[1px] w-4 h-4 flex items-center justify-center inset-y-0 right-0 mt-[-7px] mr-[-4px] cursor-pointer">
          1
        </div>
      </div>

      <div
        className="relative mx-2 cursor-pointer"
        onClick={() => alert("Profile")}
      >
        <Image src="/profile_user.png" width={40} height={40} alt="profile" />
      </div>
    </div>
  );
};

const NavBar = () => {
  return (
    <div className="flex items-center justify-end mx-5 my-3">
      <Logo />
      <SearchField />
      <NavIcons />
    </div>
  );
};

export default NavBar;
