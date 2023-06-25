import React from "react";

const SocialsTab = () => {
  return (
    <div>
      <div className="mb-6 flex flex-col">
        <div className="text-zinc-900 font-medium">Github</div>
        <input
          type="text"
          className="border border-zinc-200 focus:outline-none rounded-md mt-2 px-2 py-2"
          placeholder="Github profile URL"
        />
      </div>

      <div className="mb-6 flex flex-col">
        <div className="text-zinc-900 font-medium">LinkedIn</div>
        <input
          type="text"
          className="border border-zinc-200 focus:outline-none rounded-md mt-2 px-2 py-2"
          placeholder="LinkedIn profile URL"
        />
      </div>

      <div className="mb-6 flex flex-col">
        <div className="text-zinc-900 font-medium">Facebook</div>
        <input
          type="text"
          className="border border-zinc-200 focus:outline-none rounded-md mt-2 px-2 py-2"
          placeholder="Facebook profile URL"
        />
      </div>

      <div className="mb-6 flex flex-col">
        <div className="text-zinc-900 font-medium">Instagram</div>
        <input
          type="text"
          className="border border-zinc-200 focus:outline-none rounded-md mt-2 px-2 py-2"
          placeholder="Instagram profile URL"
        />
      </div>

      <div className="mb-6 flex flex-col">
        <div className="text-zinc-900 font-medium">Dribbble</div>
        <input
          type="text"
          className="border border-zinc-200 focus:outline-none rounded-md mt-2 px-2 py-2"
          placeholder="Dribbble profile URL"
        />
      </div>

      <div className="mb-6 flex flex-col">
        <div className="text-zinc-900 font-medium">Behance</div>
        <input
          type="text"
          className="border border-zinc-200 focus:outline-none rounded-md mt-2 px-2 py-2"
          placeholder="Behance profile URL"
        />
      </div>
      <div className="mt-4 flex items-center justify-end">
        <button
          onClick={() => alert("Contact")}
          className="bg-zinc-200 hover:bg-zinc-300 text-zinc-900 px-3 py-1.5 rounded-md ml-2"
        >
          Cancel
        </button>
        <button
          onClick={() => alert("Contact")}
          className="bg-primary-500 hover:bg-primary-600 text-white px-3 py-1.5 rounded-md ml-4"
        >
          Save changes
        </button>
      </div>
    </div>
  );
};

export default SocialsTab;
