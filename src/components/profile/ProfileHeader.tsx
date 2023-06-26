import { useAppContext } from "context/AppContext";
import Image from "next/image";
import Link from "next/link";
import React, { MutableRefObject, useRef, useState } from "react";
import ProfileImage from "../util/ProfilePicture";
import { useRouter } from "next/router";
import { getBase64 } from "@/util/imageUtil";
import { User } from "models/User";
import CoverImage from "./profileheader/CoverImage";
import ProfileHeaderData from "./profileheader/ProfileHeaderData";

const ProfileHeader = () => {
  const { user } = useAppContext();

  return (
    <div className="shadow-sm">
      <CoverImage />
      <ProfileHeaderData />
    </div>
  );
};

export default ProfileHeader;
