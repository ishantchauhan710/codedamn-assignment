import { useAppContext } from "context/AppContext";
import Image from "next/image";
import Link from "next/link";
import React, { MutableRefObject, useRef, useState } from "react";
import ProfileImage from "../util/ProfilePicture";
import { useRouter } from "next/router";
import { getBase64 } from "@/util/imageUtil";
import { User } from "models/User";

const ProfileHeader = () => {
  const { user, reloadUser } = useAppContext();
  const router = useRouter();
  const [tempCoverPic, setTempCoverPic] = useState<string>(user.coverPic);

  const coverPicInputRef = useRef() as MutableRefObject<HTMLInputElement>;

  // CHANGE COVER IMAGE
  const updateCoverImage = async (img: File) => {
    const base64data = (await getBase64(img)) as string;

    const oldUserRaw = localStorage.getItem("user");
    if (oldUserRaw) {
      const newUser: User = JSON.parse(oldUserRaw);
      newUser.coverPic = base64data;
      localStorage.setItem("user", JSON.stringify(newUser));
      reloadUser();
    } else {
      alert("Local storage error");
    }

    setTempCoverPic(base64data);
  };

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
    <div className="shadow-sm">
      {/* COVER IMAGE */}
      <div className="relative bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500 h-44 rounded-t-xl">
        {user.coverPic && (
          <Image
            src={user.coverPic}
            alt="cover"
            style={{ objectFit: "cover" }}
            fill
            className="absolute w-full h-full"
          />
        )}

        <input
          type="file"
          accept="image/*;capture=camera"
          hidden
          ref={coverPicInputRef}
          onChange={(e) => {
            if (e.target.files) {
              updateCoverImage(e.target.files[0]);
            }
          }}
        />

        <button
          onClick={() => {
            coverPicInputRef.current.click();
          }}
          className="flex items-center justify-center text-white bg-black/70 hover:bg-black/80 p-2 border border-gray-300 rounded-lg absolute right-0 m-4"
        >
          <Image
            src="/icons/app/edit_profile_icon.png"
            width={16}
            height={16}
            alt="edit cover"
            className="mr-2"
          />
          Edit cover
        </button>
      </div>

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
        <div className="flex-[0.82] m-4">
          <div className="flex flex-col sm:flex-row sm:items-center">
            <span className="font-bold text-3xl mr-2">{user.fullname}</span>
            <div>
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
          <div className="text-md text-zinc-600 mt-1">{user.about}</div>
          <div className="text-md text-zinc-600 mt-1 flex items-center font-light">
            <Image
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

export default ProfileHeader;
