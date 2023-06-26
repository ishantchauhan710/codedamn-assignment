import { useAppContext } from "context/AppContext";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ProfileImage from "../util/ProfilePicture";

const ProfileSection = () => {
  const { user } = useAppContext();

  const socials = [
    "/icons/social_media_platforms/Google.png",
    "/icons/social_media_platforms/Instagram.png",
    "/icons/social_media_platforms/Facebook.png",
    "/icons/social_media_platforms/LinkedIn.png",
    "/icons/social_media_platforms/YouTube.png",
  ];

  return (
    <div className="shadow-sm">
      <div className="relative bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500 h-40 rounded-t-xl">
        <Link
          href="/profile"
          className="flex items-center justify-center text-white bg-violet-600/40 hover:bg-violet-600/60 p-2 border border-gray-300 rounded-lg absolute right-0 m-4"
        >
          <Image
            src="/icons/app/edit_profile_icon.png"
            width={16}
            height={16}
            alt="edit cover"
            className="mr-2"
          />
          Edit cover
        </Link>
      </div>
      <div className="flex flex-col md:flex-row border border-neutral-200 shadow-sm rounded-b-xl">
        <div className="h-[70px] md:h-[0px] md:flex-[0.18] relative">
          <ProfileImage
            src={user.profilePic}
            width={140}
            height={140}
            alt="profile"
            badgeValue={7}
            badgePosition="top"
            className="absolute mt-[-50px] ml-4 cursor-pointer"
          />
        </div>
        <div className="flex-[0.82] m-4">
          <div className="flex flex-col sm:flex-row sm:items-center">
            <span className="font-bold text-3xl mr-2">Anna Cheng</span>
            <div>
              <span className="bg-lime-300 px-2 py-[3px] text-sm mr-2 rounded-sm">
                Pro
              </span>
              <span className="bg- bg-sky-100 text-sky-800 px-2 py-[3px] text-sm rounded-sm font-semibold">
                Looking for job
              </span>
            </div>
          </div>
          <div className="text-md text-zinc-600 mt-1">
            Full stack dev at codedamn | Harvard&lsquo;22&ldquo;
          </div>
          <div className="text-md text-zinc-600 mt-1 flex items-center font-light">
            <Image
              src="/icons/app/location.png"
              width={16}
              height={16}
              alt="location"
              className="mr-1"
            />
            Mumbai, India
          </div>
          <div className="mt-5 flex flex-wrap gap-2">
            {user.skills.map((skill) => (
              <span
                onClick={() => alert(skill)}
                key={skill}
                className="bg-zinc-100 hover:bg-neutral-200/60 cursor-pointer p-2 text-sm rounded-sm"
              >
                {skill}
              </span>
            ))}
          </div>
          <hr className="h-[1px] mt-8 bg-gray-200" />
          <div className="flex flex-col sm:flex-row sm:items-center mt-5">
            <div className="flex flex-wrap gap-2 flex-[0.5]">
              {socials.map((social) => (
                <div
                  onClick={() => alert("Socials")}
                  key={social}
                  className="border border-neutral-200  hover:bg-neutral-200/60 cursor-pointer p-2 text-sm rounded-md"
                >
                  <Image src={social} width={20} height={20} alt={social} />
                </div>
              ))}
            </div>
            <div className="flex items-center sm:justify-end flex-[0.5] mt-4 sm:mt-0">
              <div
                onClick={() => alert("Copy Profile")}
                className="bg-zinc-100 mr-2 hover:bg-neutral-200/60 cursor-pointer p-2 text-sm rounded-sm"
              >
                <Image
                  src="/icons/app/copy_icon.png"
                  width={16}
                  height={16}
                  alt="copy profile"
                />
              </div>
              <button
                onClick={() => alert("Contact")}
                className="bg-primary-500 hover:bg-primary-600 text-white px-3 py-1.5 rounded-md"
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
