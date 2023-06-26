import { useAppContext } from "context/AppContext";
import { User } from "models/User";
import { useRouter } from "next/router";
import React, { useState } from "react";

const SocialsTab = () => {
  const { user } = useAppContext();
  const router = useRouter();
  const [github, setGithub] = useState(user.socials.github);
  const [linkedin, setLinkedin] = useState(user.socials.linkedin);
  const [facebook, setFacebook] = useState(user.socials.facebook);
  const [instagram, setInstagram] = useState(user.socials.instagram);
  const [dribbble, setDribbble] = useState(user.socials.dribbble);
  const [behance, setBehance] = useState(user.socials.behance);

  const saveChanges = () => {
    const oldUserRaw = localStorage.getItem("user");
    if (oldUserRaw) {
      const newUser: User = JSON.parse(oldUserRaw);
      newUser.socials.github = github;
      newUser.socials.linkedin = linkedin;
      newUser.socials.facebook = facebook;
      newUser.socials.instagram = instagram;
      newUser.socials.dribbble = dribbble;
      newUser.socials.behance = behance;
      localStorage.setItem("user", JSON.stringify(newUser));
      router.push("/");
    } else {
      alert("Local storage error");
    }
  };

  const cancel = () => {
    if (window.confirm("Are you sure you want to discard changes?") === true) {
      router.push("/");
    }
  };

  return (
    <div>
      <div className="mb-6 flex flex-col">
        <div className="text-zinc-900 font-medium">Github</div>
        <input
          type="text"
          className="border border-zinc-200 focus:outline-none rounded-md mt-2 px-2 py-2"
          placeholder="Github profile URL"
          value={github}
          onChange={(e) => setGithub(e.target.value)}
        />
      </div>

      <div className="mb-6 flex flex-col">
        <div className="text-zinc-900 font-medium">LinkedIn</div>
        <input
          type="text"
          className="border border-zinc-200 focus:outline-none rounded-md mt-2 px-2 py-2"
          placeholder="LinkedIn profile URL"
          value={linkedin}
          onChange={(e) => setLinkedin(e.target.value)}
        />
      </div>

      <div className="mb-6 flex flex-col">
        <div className="text-zinc-900 font-medium">Facebook</div>
        <input
          type="text"
          className="border border-zinc-200 focus:outline-none rounded-md mt-2 px-2 py-2"
          placeholder="Facebook profile URL"
          value={facebook}
          onChange={(e) => setFacebook(e.target.value)}
        />
      </div>

      <div className="mb-6 flex flex-col">
        <div className="text-zinc-900 font-medium">Instagram</div>
        <input
          type="text"
          className="border border-zinc-200 focus:outline-none rounded-md mt-2 px-2 py-2"
          placeholder="Instagram profile URL"
          value={instagram}
          onChange={(e) => setInstagram(e.target.value)}
        />
      </div>

      <div className="mb-6 flex flex-col">
        <div className="text-zinc-900 font-medium">Dribbble</div>
        <input
          type="text"
          className="border border-zinc-200 focus:outline-none rounded-md mt-2 px-2 py-2"
          placeholder="Dribbble profile URL"
          value={dribbble}
          onChange={(e) => setDribbble(e.target.value)}
        />
      </div>

      <div className="mb-6 flex flex-col">
        <div className="text-zinc-900 font-medium">Behance</div>
        <input
          type="text"
          className="border border-zinc-200 focus:outline-none rounded-md mt-2 px-2 py-2"
          placeholder="Behance profile URL"
          value={behance}
          onChange={(e) => setBehance(e.target.value)}
        />
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

export default SocialsTab;
