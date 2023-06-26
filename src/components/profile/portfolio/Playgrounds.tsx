import { getLogoFromLanguage } from "@/util/imageUtil";
import { useAppContext } from "context/AppContext";
import Image from "next/image";
import React from "react";

const Playgrounds = () => {
  const { user, setShowCreatePlaygroundModal } = useAppContext();
  return (
    <div className="portfolio-section">
      <div className="block sm:flex items-center justify-between">
        <div className="portfolio-label">Playgrounds</div>
        <div
          className="portfolio-label-action"
          onClick={() => setShowCreatePlaygroundModal(true)}
        >
          Create new playground
        </div>
      </div>
      <div className="grid  grid-cols-1 sm:grid-cols-2  gap-4">
        {user.playgrounds.map((playground) => (
          <div
            key={playground.title}
            className="bg-zinc-100 text-zinc-700 cursor-pointer p-2 text-sm rounded-md mr-2 flex items-start flex-col sm:flex-row"
          >
            <Image
              src={getLogoFromLanguage(playground.language)}
              width={40}
              height={40}
              alt={playground.language}
              className="m-2"
            />
            <div className="flex flex-col ml-2">
              <div className="text-zinc-700 font-semibold text-lg">
                {playground.title}
              </div>
              <div className="text-zinc-700 text-sm font-light mt-1">
                {playground.language} • {playground.time}
              </div>
              <div className="mt-2 flex items-center">
                {playground.sharedWith.slice(0, 2).map((user) => (
                  <div
                    key={user.name}
                    className="border-1 border-white w-6 h-6 rounded-full overflow-hidden ml-[-6px]"
                  >
                    <Image
                      src={user.pic}
                      width={40}
                      height={40}
                      alt={user.name}
                    />
                  </div>
                ))}
                <div className="ml-1 text-sm text-zinc-600">
                  Shared with{" "}
                  {playground.sharedWith.slice(0, 2).map((user) => (
                    <span className="font-bold" key={user.name + "name"}>
                      {user.name}
                      {user.name !==
                        playground.sharedWith[playground.sharedWith.length - 1]
                          .name && ", "}
                    </span>
                  ))}
                  {playground.sharedWith.length > 1 && (
                    <span className="text-sm">{`.. + ${
                      playground.sharedWith.length - 2
                    } others`}</span>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Playgrounds;
