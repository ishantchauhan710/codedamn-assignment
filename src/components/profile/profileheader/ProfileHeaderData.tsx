import ProfileImage from "@/components/util/ProfilePicture";
import { useAppContext } from "context/AppContext";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

const ProfileHeaderData = () => {
  const router = useRouter();
  const { user } = useAppContext();

  // SOCIAL BUTTONS
  const socials = [
    {
      link: user.socials.google,
      logo: "/icons/social_media_platforms/Google.png",
    },
    {
      link: user.socials.instagram,
      logo: "/icons/social_media_platforms/Instagram.png",
    },
    {
      link: user.socials.facebook,
      logo: "/icons/social_media_platforms/Facebook.png",
    },
    {
      link: user.socials.linkedin,
      logo: "/icons/social_media_platforms/LinkedIn.png",
    },
    {
      link: user.socials.youtube,
      logo: "/icons/social_media_platforms/YouTube.png",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row border border-neutral-200 shadow-sm rounded-b-xl">
      {/* PROFILE IMAGE */}
      <div
        className="h-[70px] md:h-[0px] md:flex-[0.18] relative"
        onClick={() => router.push("/profile")}
      >
        <ProfileImage
          src={user.profilePic}
          width={140}
          height={140}
          alt="profile"
          badgeValue={user.stats.longestStreak}
          className="absolute mt-[-50px] ml-4 cursor-pointer"
        />
      </div>

      {/* PROFILE HEADER DATA */}
      <div className="flex-[0.82] mx-4 my-8 md:my-4">
        <div className="flex flex-col sm:flex-row sm:items-center">
          <span className="font-bold text-3xl mr-2">{user.fullname}</span>
          <div className="mt-2 md:mt-0">
            {user.proAccountActivated && (
              <span className="bg-lime-300 px-2 py-[3px] text-sm mr-2 rounded-sm">
                Pro
              </span>
            )}
            {user.resume.isLookingForJob && (
              <span className="bg- bg-sky-100 text-sky-800 px-2 py-[3px] text-sm rounded-sm font-semibold">
                Looking for job
              </span>
            )}
          </div>
        </div>
        <div className="text-md text-zinc-600 mt-3 md:mt-1">{user.about}</div>
        <div className="text-md text-zinc-600 mt-2 md:mt-0 flex items-center font-light">
              <Image
        quality={100}
            src="/icons/app/location.png"
            width={16}
            height={16}
            alt="location"
            className="mr-1"
          />
          {user.location}
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
                onClick={() => window.open(social.link)}
                key={social.link}
                className="border border-neutral-200  hover:bg-neutral-200/60 cursor-pointer p-2 text-sm rounded-md"
              >
                    <Image
        quality={100}
                  src={social.logo}
                  width={20}
                  height={20}
                  alt={social.logo}
                />
              </div>
            ))}
          </div>
          <div className="flex items-center sm:justify-end flex-[0.5] mt-4 sm:mt-0">
            <div
              onClick={() => alert("Copy Profile")}
              className="bg-zinc-100 mr-2 hover:bg-neutral-200/60 cursor-pointer p-2 text-sm rounded-sm"
            >
                  <Image
        quality={100}
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
  );
};

export default ProfileHeaderData;
