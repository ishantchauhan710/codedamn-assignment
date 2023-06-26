import { getBase64 } from "@/util/imageUtil";
import { useAppContext } from "context/AppContext";
import { User } from "models/User";
import Image from "next/image";
import React, { MutableRefObject, useRef, useState } from "react";

const CoverImage = () => {
  const { user, reloadUser } = useAppContext();
  const [tempCoverPic, setTempCoverPic] = useState<string>(user.coverPic);

  const coverPicInputRef = useRef() as MutableRefObject<HTMLInputElement>;

  // CHANGE COVER IMAGE
  const updateCoverImage = async (img: File) => {
    const base64data = (await getBase64(img)) as string;

    const oldUserRaw = localStorage.getItem("user");
    if (oldUserRaw) {
      const newUser: User = JSON.parse(oldUserRaw);
      newUser.coverPic = base64data;
      localStorage.setItem("user", JSON.stringify(newUser));
      reloadUser();
    } else {
      alert("Local storage error");
    }

    setTempCoverPic(base64data);
  };

  return (
    <div className="relative bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500 h-44 rounded-t-xl">
      {user.coverPic && (
        <Image
          src={user.coverPic}
          alt="cover"
          style={{ objectFit: "cover" }}
          fill
          className="absolute w-full h-full"
        />
      )}

      <input
        type="file"
        accept="image/*;capture=camera"
        hidden
        ref={coverPicInputRef}
        onChange={(e) => {
          if (e.target.files) {
            updateCoverImage(e.target.files[0]);
          }
        }}
      />

      <button
        onClick={() => {
          coverPicInputRef.current.click();
        }}
        className="flex items-center justify-center text-white bg-black/70 hover:bg-black/80 p-2 border border-gray-300 rounded-lg absolute right-0 m-4"
      >
        <Image
          src="/icons/app/edit_profile_icon.png"
          width={16}
          height={16}
          alt="edit cover"
          className="mr-2"
        />
        Edit cover
      </button>
    </div>
  );
};

export default CoverImage;
