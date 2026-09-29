"use client";

import Image from "next/image";
import { useRef, useState } from "react";

interface MemberCardProps {
  name: string;
  role?: string;
  /** Omit while no photo is available yet — shows the member's initials
   * instead. */
  photoSrc?: string;
  /** Second photo, revealed on hover — matches the original site's
   * "who's behind the mask" effect. Omit if there isn't one. */
  hoverPhotoSrc?: string;
}

function initials(name: string) {
  return name
    .split(/\s+/)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

export function MemberCard({
  name,
  role,
  photoSrc,
  hoverPhotoSrc,
}: Readonly<MemberCardProps>) {
  const [showAlt, setShowAlt] = useState(false);
  const pointerType = useRef("mouse");

  return (
    <div className="text-center">
      <div
        className="relative aspect-[3/4] w-full overflow-hidden rounded-xl shadow-md"
        onPointerDown={(e) => {
          pointerType.current = e.pointerType;
        }}
        onPointerEnter={(e) => {
          if (e.pointerType === "mouse") setShowAlt(true);
        }}
        onPointerLeave={(e) => {
          if (e.pointerType === "mouse") setShowAlt(false);
        }}
        onClick={() => {
          // Touch has no hover, so a tap toggles the second photo instead.
          if (hoverPhotoSrc && pointerType.current !== "mouse") {
            setShowAlt((v) => !v);
          }
        }}
      >
        {photoSrc ? (
          <>
            <Image
              src={photoSrc}
              alt={name}
              fill
              sizes="(max-width: 640px) 50vw, 300px"
              className="object-cover"
            />
            {hoverPhotoSrc && (
              <Image
                src={hoverPhotoSrc}
                alt=""
                fill
                sizes="(max-width: 640px) 50vw, 300px"
                className={`object-cover transition-opacity duration-300 ${
                  showAlt ? "opacity-100" : "opacity-0"
                }`}
              />
            )}
          </>
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gray-200 dark:bg-gray-700">
            <span className="text-3xl font-heading font-bold text-gray-400 dark:text-gray-500">
              {initials(name)}
            </span>
          </div>
        )}
      </div>
      <p className="mt-3 font-heading font-bold text-gray-900 dark:text-white">
        {name}
      </p>
      {role && <p className="text-brand font-medium">{role}</p>}
    </div>
  );
}
