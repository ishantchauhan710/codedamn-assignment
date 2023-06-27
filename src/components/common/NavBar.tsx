import Image from "next/image";
import React, { useState } from "react";
import ProfileImage from "../util/ProfilePicture";
import { useAppContext } from "context/AppContext";
import { User } from "models/User";
import { NextRouter, Router, useRouter } from "next/router";

const Logo = () => {
  return (
    <div className="self-start mr-auto">
      <Image
        quality={100}
        src="/icons/codedamn/codedamn_logo.png"
        width={125}
        height={32}
        alt="codedamn logo"
        title="Codedamn"
      />
    </div>
  );
};

const SearchField = () => {
  const courses = ["React", "Spring Boot", "Rust", "Android"];
  const [showCourseDropdown, setShowCourseDropdown] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState("");
  return (
    <div className="relative">
      <div className="ml-2 mr-6 hidden relative md:block">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <Image
            quality={100}
            src="/icons/app/search.png"
            width={16}
            height={16}
            alt="search codedamn"
          />
        </div>
        <input
          type="text"
          className="block w-80 py-[6px] pl-10 pr-20 text-md text-zinc-900 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none"
          placeholder="Search"
          required
        />
        <div
          className="flex items-center justify-center bg-zinc-200 hover:bg-gray-300/70 text-zinc-600 rounded-md absolute inset-y-0 right-0 px-2 mx-1 my-[4px] cursor-pointer text-sm"
          onClick={() => setShowCourseDropdown(!showCourseDropdown)}
        >
          <span className="mr-1">
            {selectedCourse ? selectedCourse : "Courses"}
          </span>
          <Image
            quality={100}
            src="/icons/app/down.png"
            width={14}
            height={14}
            alt="search codedamn"
          />
        </div>
      </div>
      <div
        className={`${
          showCourseDropdown ? "block" : "hidden"
        } absolute w-80 text-zinc-800 rounded-sm bg-gray-100`}
      >
        {courses.map((course) => (
          <div
            className="p-3 text-lg hover:bg-gray-200 cursor-pointer"
            key={course}
            onClick={() => {
              setSelectedCourse(course);
              setShowCourseDropdown(false);
            }}
          >
            {course}
          </div>
        ))}
      </div>
    </div>
  );
};

interface NavIconProps {
  user: User;
  router: NextRouter;
}

const NavIcons = ({ user, router }: NavIconProps) => {
  return (
    <div className="flex items-center justify-between">
      <div
        className="flex items-center justify-between mx-2 cursor-pointer"
        onClick={() => alert("Spark")}
      >
        <Image
          quality={100}
          src="/icons/app/spark.png"
          width={20}
          height={20}
          alt="spark"
        />
        <span className="font-semibold text-zinc-600 text-md ml-1 hover:text-zinc-900">
          2
        </span>
      </div>

      <div
        className="relative mx-2 cursor-pointer mt-0.5"
        onClick={() => alert("Notifications")}
      >
        <Image
          quality={100}
          src="/icons/app/notification.png"
          width={24}
          height={24}
          alt="notifications"
        />
        <div className="absolute bg-pink-500 hover:bg-pink-600 rounded-full text-white text-sm font-semibold p-[1px] w-4 h-4 flex items-center justify-center inset-y-0 right-0 mt-[-7px] mr-[-4px] cursor-pointer">
          1
        </div>
      </div>

      <div
        className="relative mx-2 mt-1 cursor-pointer transition"
        onClick={() => router.push("/profile")}
      >
        <ProfileImage
          src={user.profilePic}
          width={36}
          height={36}
          alt="profile"
          className="mt-[-4px]"
          badgePosition="top"
          badgeValue={user.stats.longestStreak}
        />
      </div>
    </div>
  );
};

const NavBar = () => {
  const { user } = useAppContext();
  const router = useRouter();

  return (
    <div className="flex items-center justify-end px-5 py-4 fixed top-0 w-screen z-[20] bg-white shadow-md">
      <Logo />
      <SearchField />
      <NavIcons user={user} router={router} />
    </div>
  );
};

export default NavBar;
