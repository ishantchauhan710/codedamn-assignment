import { useAppContext } from "context/AppContext";
import { User } from "models/User";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { MutableRefObject, useEffect, useRef, useState } from "react";
import ProfileImage from "../util/ProfilePicture";
import { getBase64 } from "@/util/imageUtil";

const ProfileTab = () => {
  const { user, reloadUser } = useAppContext();
  const router = useRouter();
  const [displayName, setDisplayName] = useState(user.fullname);
  const [about, setAbout] = useState(user.about);
  const [profession, setProfession] = useState(user.profession);
  const [dob, setDob] = useState(user.dob);
  const [gender, setGender] = useState(user.gender);
  const [location, setLocation] = useState(user.location);
  const [tempProfilePic, setTempProfilePic] = useState(user.profilePic);
  const [selectedProfilePic, setSelectedProfilePic] = useState<File | null>();
  const profilePicInputRef = useRef() as MutableRefObject<HTMLInputElement>;

  // SAVE PROFILE DATA
  const saveChanges = async () => {
    const oldUserRaw = localStorage.getItem("user");
    if (oldUserRaw) {
      const newUser: User = JSON.parse(oldUserRaw);
      newUser.fullname = displayName;
      newUser.about = about;
      newUser.profession = profession;
      newUser.dob = dob;
      newUser.gender = gender;
      newUser.location = location;
      newUser.stats.longestStreak += 1;

      if (!tempProfilePic) {
        newUser.profilePic = null;
      } else {
        if (selectedProfilePic) {
          const base64data = (await getBase64(selectedProfilePic)) as string;
          newUser.profilePic = base64data;
        }
      }

      localStorage.setItem("user", JSON.stringify(newUser));
      reloadUser();
      router.push("/");
    } else {
      alert("Local storage error");
    }
  };

  // DISCARD PROFILE DATA
  const cancel = () => {
    if (window.confirm("Are you sure you want to discard changes?") === true) {
      router.push("/");
    }
  };

  // DELETE PROFILE PICTURE
  // If on save, temp profile pic is null, we set actual user obj profile pic to null
  const deleteProfilePic = () => {
    setTempProfilePic("");
  };

  // OPEN FILE PICKER
  const uploadProfilePic = () => {
    if (profilePicInputRef.current) {
      profilePicInputRef.current.click();
    }
  };

  // UPDATE TEMP PROFILE
  // Temp profile pic will only show the newly selected profile pic on edit profile page
  const updateTempProfilePic = async () => {
    if (selectedProfilePic) {
      const base64data = (await getBase64(selectedProfilePic)) as string;
      setTempProfilePic(base64data);
    }
  };

  // Whenever user selects a new pic, show it in image element of edit profile page
  useEffect(() => {
    updateTempProfilePic();
  }, [selectedProfilePic]);

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
      <div className="flex items-center flex-col sm:flex-row">
        <ProfileImage
          src={tempProfilePic}
          width={72}
          height={72}
          alt="profile"
          showBadge={false}
        />
        <div className="mt-4 sm:mt-0 flex">
          <button
            onClick={uploadProfilePic}
            className="bg-primary-500 hover:bg-primary-600 text-white px-3 py-1.5 rounded-md text-sm sm:ml-4"
          >
            Upload new picture
          </button>
          <input
            type="file"
            accept="image/*;capture=camera"
            hidden
            ref={profilePicInputRef}
            onChange={(e) => {
              if (e.target.files) {
                setSelectedProfilePic(e.target.files[0]);
              }
            }}
          />
          <button
            onClick={() => deleteProfilePic()}
            className="bg-zinc-200 hover:bg-zinc-300 text-zinc-900 px-3 py-1.5 rounded-md text-sm ml-2"
          >
            Delete
          </button>
        </div>
      </div>

      <div>
        <div className="mt-6 flex flex-col">
          <div className="text-zinc-900 font-medium">Display name</div>
          <input
            type="text"
            className="border border-zinc-200 focus:outline-none rounded-md mt-2 px-2 py-2"
            placeholder="What is your name?"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
          />
          <div className="text-sm text-zinc-600 mt-1 font-light">
            Name entered above will be used for all issued certificates
          </div>
        </div>

        <div className="mt-4 flex flex-col">
          <div className="text-zinc-900 font-medium">About</div>
          <textarea
            className="border border-zinc-200 focus:outline-none rounded-md mt-2 px-2 py-2 resize-none"
            rows={4}
            placeholder="Tell us something about yourself"
            value={about}
            onChange={(e) => setAbout(e.target.value)}
          />
        </div>

        <div className="mt-6 flex flex-col">
          <div className="text-zinc-900 font-medium">Profession</div>
          <input
            type="text"
            className="border border-zinc-200 focus:outline-none rounded-md mt-2 px-2 py-2"
            placeholder="What is your profession?"
            value={profession}
            onChange={(e) => setProfession(e.target.value)}
          />
        </div>

        <div className="mt-6 flex flex-col">
          <div className="text-zinc-900 font-medium">Date of birth</div>
          <input
            type="text"
            className="border border-zinc-200 focus:outline-none rounded-md mt-2 px-2 py-2"
            placeholder="What is your date of birth?"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          />
        </div>

        <div className="mt-6 flex flex-col">
          <div className="text-zinc-900 font-medium">Gender</div>
          <input
            type="text"
            className="border border-zinc-200 focus:outline-none rounded-md mt-2 px-2 py-2"
            placeholder="What is your gender?"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          />
        </div>

        <div className="mt-6 flex flex-col">
          <div className="text-zinc-900 font-medium">Location</div>
          <input
            type="text"
            className="border border-zinc-200 focus:outline-none rounded-md mt-2 px-2 py-2"
            placeholder="What is your gender?"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
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
          onClick={cancel}
          className="bg-zinc-200 hover:bg-zinc-300 text-zinc-900 px-3 py-1.5 rounded-md ml-2"
        >
          Cancel
        </button>
        <button
          onClick={() => saveChanges()}
          className="bg-primary-500 hover:bg-primary-600 text-white px-3 py-1.5 rounded-md ml-4"
        >
          Save changes
        </button>
      </div>
    </div>
  );
};

export default ProfileTab;
