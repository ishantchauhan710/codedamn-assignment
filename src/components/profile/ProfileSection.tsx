import Image from "next/image";
import React from "react";

const ProfileSection = () => {
  const skills = [
    "HTML5",
    "CSS3",
    "Javascript",
    "React",
    "Python",
    "C++",
    "Mongo",
    "NodeJs",
  ];

  const socials = [
    "/Google.png",
    "/Instagram.png",
    "/Facebook.png",
    "/LinkedIn.png",
    "/YouTube.png",
  ];

  return (
    <div>
      <div className="relative bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500 h-40 rounded-t-xl">
        <button className="flex items-center justify-center text-white bg-violet-600/40 hover:bg-violet-600/60 p-2 border border-gray-300 rounded-lg absolute right-0 m-4">
          <Image
            src="/edit_profile_icon.png"
            width={16}
            height={16}
            alt="edit profile"
            className="mr-2"
          />
          Edit cover
        </button>
      </div>
      <div className="flex border border-neutral-200 shadow-sm rounded-b-xl">
        <div className="flex-[0.18] relative">
          <Image
            src="/profile_user.png"
            width={140}
            height={140}
            alt="location"
            className="absolute mt-[-50px] ml-4"
          />
        </div>
        <div className="flex-[0.82] m-4">
          <div className="flex items-center">
            <span className="font-bold text-3xl mr-2">Anna Cheng</span>
            <span className="bg-lime-400 px-2 text-sm mr-2 rounded-sm">
              Pro
            </span>
            <span className="bg- bg-sky-200 text-sky-800 px-2 text-sm rounded-sm font-semibold">
              Looking for job
            </span>
          </div>
          <div className="text-md text-neutral-600 mt-1">
            Full stack dev at codedamn | Harvard&lsquo;22&ldquo;
          </div>
          <div className="text-md text-neutral-600 mt-1 flex items-center font-light">
            <Image
              src="/location.png"
              width={16}
              height={16}
              alt="location"
              className="mr-1"
            />
            Mumbai, India
          </div>
          <div className="mt-5 flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                onClick={() => alert(skill)}
                key={skill}
                className="bg-neutral-200/40 hover:bg-neutral-200/60 cursor-pointer p-2 text-sm rounded-sm"
              >
                {skill}
              </span>
            ))}
          </div>
          <hr className="h-[1px] mt-8 bg-gray-200" />
          <div className="flex items-center mt-5">
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
            <div className="flex items-center justify-end flex-[0.5]">
              <div
                onClick={() => alert("Copy Profile")}
                className="bg-neutral-200/40 mr-2 hover:bg-neutral-200/60 cursor-pointer p-2 text-sm rounded-sm"
              >
                <Image
                  src="/copy_icon.png"
                  width={16}
                  height={16}
                  alt="copy profile"
                />
              </div>
              <button
                onClick={() => alert("Contact")}
                className="bg-primary-500 hover:bg-primary-600 text-white px-2 py-1.5 rounded-md"
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
