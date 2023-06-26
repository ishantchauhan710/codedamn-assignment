import Image from "next/image";
import React, { ReactNode } from "react";

interface ProfileImageProps {
  src: string;
  width: number;
  height: number;
  alt: string;
  className?: string;
  showBadge?: boolean;
  badgeValue?: number;
  badgePosition?: string;
}

const ProfileImage = ({
  src,
  width,
  height,
  alt,
  className,
  showBadge = true,
  badgeValue = 0,
  badgePosition = "bottom",
}: ProfileImageProps) => {
  return (
    <div className="relative">
      <div
        style={{ width: width, height: height }}
        className={`relative rounded-full overflow-hidden bg-gray-300 border-[4px] border-white ${className}`}
      >
        <Image
          src={src}
          alt={alt}
          style={{ objectFit: "cover" }}
          fill
          className="absolute w-full h-full"
        />
      </div>
      {showBadge && (
        <div
          className={`${
            badgePosition === "bottom"
              ? "bottom-0 right-0"
              : "top-0 right-0 mt-[-20px] mr-[-18px]"
          } ${
            width > 60 && badgePosition === "bottom"
              ? "mb-[-20px] mr-[-18px]"
              : "mb-[-14px] mr-[-16px]"
          } ${
            width > 60 && badgePosition === "top"
              ? "mt-[-20px] mr-[-18px]"
              : "mt-[-14px] mr-[-16px]"
          }  absolute `}
        >
          <div className="relative flex items-center justify-center">
            <Image
              src="/icons/app/profile_badge.png"
              alt="profile badge"
              width={width > 60 ? 80 : 45}
              height={width > 60 ? 80 : 45}
            />
            <span className="absolute text-white text-sm font-semibold mb-[4.5px] ml-[1px]">
              {badgeValue}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileImage;
