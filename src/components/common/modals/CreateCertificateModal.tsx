import { getLogoFromLanguage } from "@/util/imageUtil";
import { isValidateUrl } from "@/util/regexUtil";
import { useAppContext } from "context/AppContext";
import { User, UserCertificate } from "models/User";
import { useRouter } from "next/router";
import React, { useState } from "react";

const CreateCertificateModal = () => {
  const { setShowCreateCertificateModal, reloadUser } = useAppContext();

  const [certificateTitle, setCertificateTitle] = useState<string>("");
  const [certificateLanguage, setCertificateLanguage] = useState<string>("");
  const [certificateIssuedOn, setCertificateIssuedOn] = useState<string>("");

  const save = () => {
    if (certificateTitle && certificateLanguage && certificateIssuedOn) {
      const oldUserRaw = localStorage.getItem("user");
      if (oldUserRaw) {
        const newUser: User = JSON.parse(oldUserRaw);
        const certificate: UserCertificate = {
          title: certificateTitle,
          issuedDate: certificateIssuedOn,
          logo: getLogoFromLanguage(certificateLanguage),
        };
        newUser.certificates.push(certificate);
        localStorage.setItem("user", JSON.stringify(newUser));
        reloadUser();
        setShowCreateCertificateModal(false);
      } else {
        alert("Local storage error");
      }
    } else {
      alert("Please provide all the details");
    }
  };

  return (
    <div className="fixed top-0 left-0 right-0 bg-black/70 w-full h-full z-[21] flex items-center justify-center">
      <div className="bg-white rounded-md w-4/5 shadow-md">
        <div className="flex items-center justify-between p-4">
          <div className="text-zinc-800 font-bold text-2xl">
            Create Certificate
          </div>
          <div
            onClick={() => setShowCreateCertificateModal(false)}
            className="w-8 h-8 flex items-center justify-center text-zinc-800 text-2xl bg-zinc-300 hover:bg-zinc-400/80 cursor-pointer rounded-md"
          >
            x
          </div>
        </div>
        <hr className="h-[1px] bg-gray-200" />
        <div className="p-4 overflow-y-auto">
          <div className="mb-6 flex flex-col">
            <div className="text-zinc-900 font-medium">Certificate name</div>
            <input
              type="text"
              className="border border-zinc-200 focus:outline-none rounded-md mt-2 px-2 py-2"
              placeholder="Name of your certificate"
              value={certificateTitle}
              onChange={(e) => setCertificateTitle(e.target.value)}
            />
          </div>

          <div className="mb-6 flex flex-col">
            <div className="text-zinc-900 font-medium">
              Certificate language
            </div>
            <input
              type="text"
              className="border border-zinc-200 focus:outline-none rounded-md mt-2 px-2 py-2"
              placeholder="Eg. React"
              value={certificateLanguage}
              onChange={(e) => setCertificateLanguage(e.target.value)}
            />
          </div>

          <div className="mb-6 flex flex-col">
            <div className="text-zinc-900 font-medium">Share with</div>
            <input
              type="text"
              className="border border-zinc-200 focus:outline-none rounded-md mt-2 px-2 py-2"
              placeholder="Eg. 10 Dec 2021"
              value={certificateIssuedOn}
              onChange={(e) => setCertificateIssuedOn(e.target.value)}
            />
          </div>

          <div className="mt-4 flex items-center justify-end">
            <button
              onClick={() => setShowCreateCertificateModal(false)}
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

export default CreateCertificateModal;
