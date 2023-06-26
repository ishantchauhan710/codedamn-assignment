import { isValidateUrl } from "@/util/regexUtil";
import { useAppContext } from "context/AppContext";
import { ResumeEducation, User, UserProject } from "models/User";
import { useRouter } from "next/router";
import React, { useState } from "react";

interface CreateEducationModalProps {
  education: ResumeEducation[];
  setEducation: React.Dispatch<React.SetStateAction<ResumeEducation[]>>;
}

const CreateEducationModal = ({
  education,
  setEducation,
}: CreateEducationModalProps) => {
  const { setShowCreateEducationModal, reloadUser } = useAppContext();

  const [schoolName, setSchoolName] = useState<string>("");
  const [periodStart, setPeriodStart] = useState<string>("");
  const [periodEnd, setPeriodEnd] = useState<string>("");
  const [schoolCourse, setSchoolCourse] = useState<string>("");
  const [schoolAbout, setSchoolAbout] = useState<string>("");
  const [schoolLocation, setSchoolLocation] = useState<string>("");

  const save = () => {
    if (
      !schoolCourse ||
      !schoolName ||
      !schoolLocation ||
      !periodStart ||
      !periodEnd ||
      !schoolAbout
    ) {
      alert("Please provide all the details");
      return;
    }

    const newEducation: ResumeEducation = {
      schoolName: schoolName,
      schoolLocation: schoolLocation,
      certification: schoolCourse,
      duration: periodStart + " to " + periodEnd,
      description: schoolAbout,
    };

    setEducation([...education, newEducation]);
    setShowCreateEducationModal(false);
  };

  return (
    <div className="fixed top-0 left-0 right-0 bg-black/70 w-full h-full z-[21] flex items-center justify-center">
      <div className="bg-white rounded-md  w-11/12 md:w-4/5  shadow-md">
        <div className="flex items-center justify-between p-4">
          <div className="text-zinc-800 font-bold text-2xl">Add education</div>
          <div
            onClick={() => setShowCreateEducationModal(false)}
            className="w-8 h-8 flex items-center justify-center text-zinc-800 text-2xl bg-zinc-300 hover:bg-zinc-400/80 cursor-pointer rounded-md"
          >
            x
          </div>
        </div>
        <hr className="h-[1px] bg-gray-200" />
        <div className="p-4 h-[450px] overflow-y-auto">
          <div className="mb-6 flex flex-col">
            <div className="text-zinc-900 font-medium">School name</div>
            <input
              type="text"
              className="border border-zinc-200 focus:outline-none rounded-md mt-2 px-2 py-2"
              placeholder="Eg. Harvard"
              value={schoolName}
              onChange={(e) => setSchoolName(e.target.value)}
            />
          </div>

          <div className="mb-6 flex flex-col">
            <div className="text-zinc-900 font-medium">Course</div>
            <input
              type="text"
              className="border border-zinc-200 focus:outline-none rounded-md mt-2 px-2 py-2"
              placeholder="Eg. Bachelors in Computer Science"
              value={schoolCourse}
              onChange={(e) => setSchoolCourse(e.target.value)}
            />
          </div>

          <div className="mb-6 flex flex-col">
            <div className="text-zinc-900 font-medium">About</div>
            <textarea
              rows={2}
              className="border border-zinc-200 focus:outline-none rounded-md mt-2 px-2 py-2"
              placeholder="CGPA / Percentage, Extra curricular activities etc"
              value={schoolAbout}
              onChange={(e) => setSchoolAbout(e.target.value)}
            />
          </div>

          <div className="mb-6 flex flex-col">
            <div className="text-zinc-900 font-medium">School location</div>
            <input
              type="text"
              className="border border-zinc-200 focus:outline-none rounded-md mt-2 px-2 py-2"
              placeholder="Eg. Mumbai, India"
              value={schoolLocation}
              onChange={(e) => setSchoolLocation(e.target.value)}
            />
          </div>

          <div className="mb-6 flex flex-col">
            <div className="text-zinc-900 font-medium">School Period</div>
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

          <div className="mt-4 flex items-center justify-end">
            <button
              onClick={() => setShowCreateEducationModal(false)}
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

export default CreateEducationModal;
