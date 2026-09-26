"use client";

import Image from "next/image";

interface MemberCardProps {
  name: string;
  role?: string;
  photoSrc: string;
  /** Second photo, revealed on hover — matches the original site's
   * "who's behind the mask" effect. Omit if there isn't one. */
  hoverPhotoSrc?: string;
}

export function MemberCard({
  name,
  role,
  photoSrc,
  hoverPhotoSrc,
}: Readonly<MemberCardProps>) {
  return (
    <div className="text-center">
      <div className="group relative aspect-[3/4] w-full overflow-hidden rounded-xl shadow-md">
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
            className="object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          />
        )}
      </div>
      <p className="mt-3 font-heading font-bold text-gray-900 dark:text-white">
        {name}
      </p>
      {role && <p className="text-brand font-medium">{role}</p>}
    </div>
  );
}
