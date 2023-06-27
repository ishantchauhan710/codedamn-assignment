import { isValidateUrl } from "@/util/regexUtil";
import { useAppContext } from "context/AppContext";
import { ResumeExperience, User, UserProject } from "models/User";
import { useRouter } from "next/router";
import React, { useState } from "react";

interface CreateExperienceModalProps {
  experience: ResumeExperience[];
  setExperience: React.Dispatch<React.SetStateAction<ResumeExperience[]>>;
}

const CreateExperienceModal = ({
  experience,
  setExperience,
}: CreateExperienceModalProps) => {
  const { setShowCreateExperienceModal, reloadUser } = useAppContext();

  const [responsibility, setResponsibility] = useState<string>("");
  const [responsibilities, setResponsibilities] = useState<string[]>([]);

  const [companyName, setCompanyName] = useState<string>("");
  const [periodStart, setPeriodStart] = useState<string>("");
  const [periodEnd, setPeriodEnd] = useState<string>("");
  const [roleName, setRoleName] = useState<string>("");
  const [companyAbout, setCompanyAbout] = useState<string>("");
  const [companyLocation, setCompanyLocation] = useState<string>("");
  const [companyType, setCompanyType] = useState<string>("");

  const save = () => {
    if (
      !roleName ||
      !companyName ||
      !companyType ||
      !companyLocation ||
      !periodStart ||
      !periodEnd ||
      !companyAbout
    ) {
      alert("Please provide all the details");
      return;
    }

    const newExperience: ResumeExperience = {
      role: roleName,
      company: companyName,
      type: companyType,
      location: companyLocation,
      duration: periodStart + " to " + periodEnd,
      description: companyAbout,
      responsiblities: responsibilities,
    };

    setExperience([...experience, newExperience]);
    setShowCreateExperienceModal(false);
  };

  return (
    <div className="fixed top-0 left-0 right-0 bg-black/70 w-full h-full z-[21] flex items-center justify-center">
      <div className="bg-white rounded-md  w-11/12 md:w-4/5  shadow-md">
        <div className="flex items-center justify-between p-4">
          <div className="text-zinc-800 font-bold text-2xl">Add experience</div>
          <div
            onClick={() => setShowCreateExperienceModal(false)}
            className="w-8 h-8 flex items-center justify-center text-zinc-800 text-2xl bg-zinc-300 hover:bg-zinc-400/80 cursor-pointer rounded-md"
          >
            x
          </div>
        </div>
        <hr className="h-[1px] bg-gray-200" />
        <div className="p-4 h-[450px] overflow-y-auto">
          <div className="mb-6 flex flex-col">
            <div className="text-zinc-900 font-medium">Company name</div>
            <input
              type="text"
              className="border border-zinc-200 focus:outline-none rounded-md mt-2 px-2 py-2"
              placeholder="Eg. Facebook"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
            />
          </div>

          <div className="mb-6 flex flex-col">
            <div className="text-zinc-900 font-medium">Role name</div>
            <input
              type="text"
              className="border border-zinc-200 focus:outline-none rounded-md mt-2 px-2 py-2"
              placeholder="Eg. Junior React Developer"
              value={roleName}
              onChange={(e) => setRoleName(e.target.value)}
            />
          </div>

          <div className="mb-6 flex flex-col">
            <div className="text-zinc-900 font-medium">Describe your work</div>
            <textarea
              rows={2}
              className="border border-zinc-200 focus:outline-none rounded-md mt-2 px-2 py-2"
              placeholder="Tell about what all stuff you used to work on"
              value={companyAbout}
              onChange={(e) => setCompanyAbout(e.target.value)}
            />
          </div>

          <div className="mb-6 flex flex-col">
            <div className="text-zinc-900 font-medium">Company location</div>
            <input
              type="text"
              className="border border-zinc-200 focus:outline-none rounded-md mt-2 px-2 py-2"
              placeholder="Eg. Mumbai, India"
              value={companyLocation}
              onChange={(e) => setCompanyLocation(e.target.value)}
            />
          </div>

          <div className="mb-6 flex flex-col">
            <div className="text-zinc-900 font-medium">Company type</div>
            <input
              type="text"
              className="border border-zinc-200 focus:outline-none rounded-md mt-2 px-2 py-2"
              placeholder="Eg. inc, pvt, ltd"
              value={companyType}
              onChange={(e) => setCompanyType(e.target.value)}
            />
          </div>

          <div className="mb-6 flex flex-col">
            <div className="text-zinc-900 font-medium">Working Period</div>
            <div className="md:flex items-center mt-2">
              <input
                type="text"
                className="w-full mr-2 border border-zinc-200 focus:outline-none rounded-md px-2 py-2"
                placeholder="From (Eg. 21 Oct 2018)"
                value={periodStart}
                onChange={(e) => setPeriodStart(e.target.value)}
              />
              <input
                type="text"
                className="w-full md:mt-0 ml-2 border border-zinc-200 focus:outline-none rounded-md mt-2 px-2 py-2"
                placeholder="To (Eg. Present)"
                value={periodEnd}
                onChange={(e) => setPeriodEnd(e.target.value)}
              />
            </div>
          </div>

          <div>
            <div className="text-zinc-900 font-medium">Responsiblities</div>
            <div className="mt-2 relative ">
              <input
                type="text"
                className="block p-2 w-full text-md text-zinc-900 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none"
                value={responsibility}
                placeholder="What all responsibilites you had in your company?"
                onChange={(e) => setResponsibility(e.target.value)}
              />
              <div
                className="flex items-center justify-center bg-primary-400 hover:bg-primary-300 text-white rounded-md absolute inset-y-0 right-0 px-2 mx-1 my-[4px] cursor-pointer text-sm"
                onClick={() => {
                  if (responsibility) {
                    setResponsibilities([...responsibilities, responsibility]);
                    setResponsibility("");
                  }
                }}
              >
                Add Responsibility
              </div>
            </div>
          </div>

          <div className="px-5">
            {responsibilities.length > 0 && (
              <ul className="list-image-[url(/icons/app/list_bullet.png)] ml-4 mt-4">
                {responsibilities.map((resp) => (
                  <li className="text-zinc-600 text-lg mt-2" key={resp}>
                    <div className="flex items-center justify-between">
                      <div>{resp}</div>
                      <div
                        onClick={() => {
                          setResponsibilities(
                            responsibilities.filter((item) => item != resp)
                          );
                        }}
                        className="cursor-pointer hover:text-zinc-800"
                      >
                        x
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="mt-4 flex items-center justify-end">
            <button
              onClick={() => setShowCreateExperienceModal(false)}
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

export default CreateExperienceModal;
