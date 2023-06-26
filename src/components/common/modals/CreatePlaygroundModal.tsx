import { isValidateUrl } from "@/util/regexUtil";
import { useAppContext } from "context/AppContext";
import { PlaygroundSharedUser, User, UserPlayground } from "models/User";
import { useRouter } from "next/router";
import React, { useState } from "react";

const CreatePlaygroundModal = () => {
  const { setShowCreatePlaygroundModal, reloadUser } = useAppContext();

  const [playgroundTitle, setPlaygroundTitle] = useState<string>("");
  const [playgroundSharedWith, setPlaygroundSharedWith] = useState<string>("");
  const [playgroundLanguage, setPlaygroundLanguage] = useState<string>("");

  const save = () => {
    if (playgroundTitle && playgroundSharedWith && playgroundLanguage) {
      const oldUserRaw = localStorage.getItem("user");
      if (oldUserRaw) {
        const sharedUsers: PlaygroundSharedUser[] = [];
        playgroundSharedWith.split(" ").forEach((item) => {
          const user: PlaygroundSharedUser = {
            name: item,
            pic: "/icons/avatars/dummyuser2.png",
          };
          sharedUsers.push(user);
        });

        const newUser: User = JSON.parse(oldUserRaw);
        const playground: UserPlayground = {
          title: playgroundTitle,
          language: playgroundLanguage,
          time: "1min ago",
          sharedWith: sharedUsers,
        };
        newUser.playgrounds.push(playground);
        localStorage.setItem("user", JSON.stringify(newUser));
        reloadUser();
        setShowCreatePlaygroundModal(false);
      } else {
        alert("Local storage error");
      }
    } else {
      alert("Please provide all the details");
    }
  };

  return (
    <div className="fixed top-0 left-0 right-0 bg-black/70 w-full h-full z-[21] flex items-center justify-center">
      <div className="bg-white rounded-md  w-11/12 md:w-4/5  shadow-md">
        <div className="flex items-center justify-between p-4">
          <div className="text-zinc-800 font-bold text-2xl">
            Create Playground
          </div>
          <div
            onClick={() => setShowCreatePlaygroundModal(false)}
            className="w-8 h-8 flex items-center justify-center text-zinc-800 text-2xl bg-zinc-300 hover:bg-zinc-400/80 cursor-pointer rounded-md"
          >
            x
          </div>
        </div>
        <hr className="h-[1px] bg-gray-200" />
        <div className="p-4 overflow-y-auto">
          <div className="mb-6 flex flex-col">
            <div className="text-zinc-900 font-medium">Playground name</div>
            <input
              type="text"
              className="border border-zinc-200 focus:outline-none rounded-md mt-2 px-2 py-2"
              placeholder="Name of your playground"
              value={playgroundTitle}
              onChange={(e) => setPlaygroundTitle(e.target.value)}
            />
          </div>

          <div className="mb-6 flex flex-col">
            <div className="text-zinc-900 font-medium">Playground language</div>
            <input
              type="text"
              className="border border-zinc-200 focus:outline-none rounded-md mt-2 px-2 py-2"
              placeholder="Eg. HTML/CSS"
              value={playgroundLanguage}
              onChange={(e) => setPlaygroundLanguage(e.target.value)}
            />
          </div>

          <div className="mb-6 flex flex-col">
            <div className="text-zinc-900 font-medium">Share with</div>
            <input
              type="text"
              className="border border-zinc-200 focus:outline-none rounded-md mt-2 px-2 py-2"
              placeholder="Enter names of user to share with seperated by white space"
              value={playgroundSharedWith}
              onChange={(e) => setPlaygroundSharedWith(e.target.value)}
            />
          </div>

          <div className="mt-4 flex items-center justify-end">
            <button
              onClick={() => setShowCreatePlaygroundModal(false)}
              className="bg-zinc-200 hover:bg-zinc-300 text-zinc-900 px-3 py-1.5 rounded-md ml-2"
            >
              Cancel
            </button>
            <button
              onClick={() => save()}
              className="bg-primary-500 hover:bg-primary-600 text-white px-3 py-1.5 rounded-md ml-4"
            >
              Create
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePlaygroundModal;
