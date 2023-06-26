import { useAppContext } from "context/AppContext";
import Image from "next/image";
import React from "react";

const Certificates = () => {
  const { user, setShowCreateCertificateModal } = useAppContext();
  return (
    <div className="portfolio-section">
      <div className="block sm:flex items-center justify-between">
        <div className="portfolio-label">Certificates</div>
        <div
          className="portfolio-label-action"
          onClick={() => setShowCreateCertificateModal(true)}
        >
          Add new certificate
        </div>
      </div>
      <div className="grid  grid-cols-1 sm:grid-cols-2  gap-4">
        {user.certificates.map((certificate) => (
          <div
            key={certificate.title}
            className="bg-zinc-100  text-zinc-700 cursor-pointer p-4 text-sm rounded-md mr-2 flex flex-col"
          >
            <Image
              src={certificate.logo}
              width={40}
              height={40}
              alt={certificate.logo}
            />

            <div className="text-zinc-700 font-semibold text-lg mt-4">
              {certificate.title}
            </div>
            <div className="text-zinc-700 text-sm font-light">
              Issued on {certificate.issuedDate}
            </div>
            <div
              onClick={() => alert("Credentials")}
              className="text-zinc-700/80 text-sm font-semibold  mt-2"
            >
              See Credentials
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certificates;
