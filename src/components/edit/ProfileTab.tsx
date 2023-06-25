import Image from "next/image";
import React from "react";

const ProfileTab = () => {
  const sectionControls = [
    {
      title: "Followers and following",
      subTitle: "Shows your followers and the users you follow on codedamn",
    },
    {
      title: "XP",
      subTitle: "Shows the XP you have earned",
    },
    {
      title: "Achievement badges",
      subTitle: "Shows your relative percentile and proficiency",
    },
  ];

  return (
    <div>
      <div className="flex items-center">
        <Image
          src="/icons/avatars/avatar_plain.png"
          width={72}
          height={72}
          alt="profile"
        />
        <button
          onClick={() => alert("Contact")}
          className="bg-primary-500 hover:bg-primary-600 text-white px-3 py-1.5 rounded-md text-sm ml-4"
        >
          Upload new picture
        </button>
        <button
          onClick={() => alert("Contact")}
          className="bg-zinc-200 hover:bg-zinc-300 text-zinc-900 px-3 py-1.5 rounded-md text-sm ml-2"
        >
          Delete
        </button>
      </div>

      <div>
        <div className="mt-6 flex flex-col">
          <div className="text-zinc-900 font-medium">Display name</div>
          <input
            type="text"
            className="border border-zinc-200 focus:outline-none rounded-md mt-2 px-2 py-2"
            placeholder="What is your name?"
          />
          <div className="text-sm text-zinc-600 mt-1 font-light">
            Name entered above will be used for all issued certificates
          </div>
        </div>

        <div className="mt-4 flex flex-col">
          <div className="text-zinc-900 font-medium">About</div>
          <textarea
            className="border border-zinc-200 focus:outline-none rounded-md mt-2 px-2 py-2 resize-none"
            rows={2}
            placeholder="Tell us something about yourself"
          />
        </div>

        <div className="mt-6 flex flex-col">
          <div className="text-zinc-900 font-medium">Profession</div>
          <input
            type="text"
            className="border border-zinc-200 focus:outline-none rounded-md mt-2 px-2 py-2"
            placeholder="What is your profession?"
          />
        </div>

        <div className="mt-6 flex flex-col">
          <div className="text-zinc-900 font-medium">Date of birth</div>
          <input
            type="text"
            className="border border-zinc-200 focus:outline-none rounded-md mt-2 px-2 py-2"
            placeholder="What is your date of birth?"
          />
        </div>

        <div className="mt-6 flex flex-col">
          <div className="text-zinc-900 font-medium">Gender</div>
          <input
            type="text"
            className="border border-zinc-200 focus:outline-none rounded-md mt-2 px-2 py-2"
            placeholder="What is your gender?"
          />
        </div>
      </div>
      <div className="mt-6">
        <div className="text-zinc-900 font-semibold text-xl">
          Section Visibility
        </div>
        <div className="text-zinc-600 font-light">
          Select which sections and content should show on your profile page.
        </div>
        <div className="bg-zinc-100 mt-4 rounded-md px-4 py-2">
          {sectionControls.map((control) => (
            <div
              key={control.title}
              className="flex items-center justify-between my-4"
            >
              <div>
                <div className="text-zinc-900 font-semibold">
                  {control.title}
                </div>
                <div className="text-zinc-600 font-light text-sm">
                  {control.subTitle}
                </div>
              </div>
              <div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    value=""
                    className="sr-only peer"
                    checked
                  />
                  <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-primary-300   peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
                </label>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-4 flex items-center justify-end">
        <button
          onClick={() => alert("Contact")}
          className="bg-zinc-200 hover:bg-zinc-300 text-zinc-900 px-3 py-1.5 rounded-md text-sm ml-2"
        >
          Cancel
        </button>
        <button
          onClick={() => alert("Contact")}
          className="bg-primary-500 hover:bg-primary-600 text-white px-3 py-1.5 rounded-md text-sm ml-4"
        >
          Save changes
        </button>
      </div>
    </div>
  );
};

export default ProfileTab;
