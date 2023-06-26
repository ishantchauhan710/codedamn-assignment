import { useAppContext } from "context/AppContext";
import React from "react";

const CreateProjectModal = () => {
  const { setShowCreateProjectModal } = useAppContext();
  return (
    <div className="fixed top-0 left-0 right-0 bg-black/70 w-full h-full z-[21] flex items-center justify-center">
      <div className="bg-white rounded-md w-4/5 shadow-md">
        <div className="flex items-center justify-between p-4">
          <div className="text-zinc-800 font-bold text-2xl">Create Project</div>
          <div
            onClick={() => setShowCreateProjectModal(false)}
            className="w-8 h-8 flex items-center justify-center text-zinc-800 text-2xl bg-zinc-300 hover:bg-zinc-400/80 cursor-pointer rounded-md"
          >
            x
          </div>
        </div>
        <hr className="h-[1px] bg-gray-200" />
        <div className="p-4 overflow-y-auto">
          <div className="mb-6 flex flex-col">
            <div className="text-zinc-900 font-medium">Project name</div>
            <input
              type="text"
              className="border border-zinc-200 focus:outline-none rounded-md mt-2 px-2 py-2"
              placeholder="Name of your project"
            />
          </div>

          <div className="mb-6 flex flex-col">
            <div className="text-zinc-900 font-medium">
              Describe your project
            </div>
            <textarea
              rows={2}
              className="border border-zinc-200 focus:outline-none rounded-md mt-2 px-2 py-2"
              placeholder="Tell something about your project"
            />
          </div>

          <div className="mb-6 flex flex-col">
            <div className="text-zinc-900 font-medium">Project image URL</div>
            <input
              type="text"
              className="border border-zinc-200 focus:outline-none rounded-md mt-2 px-2 py-2"
              placeholder="https://github.com/ishantchauhan710/DeskViewer/raw/master/screenshots/screen6.jpg"
            />
          </div>

          <div className="mb-6 flex flex-col">
            <div className="text-zinc-900 font-medium">Technologies used</div>
            <input
              type="text"
              className="border border-zinc-200 focus:outline-none rounded-md mt-2 px-2 py-2"
              placeholder="Seperate them by white space Eg. HTML CSS Javascript"
            />
          </div>

          <div className="mt-4 flex items-center justify-end">
            <button className="bg-zinc-200 hover:bg-zinc-300 text-zinc-900 px-3 py-1.5 rounded-md ml-2">
              Cancel
            </button>
            <button className="bg-primary-500 hover:bg-primary-600 text-white px-3 py-1.5 rounded-md ml-4">
              Create
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateProjectModal;
