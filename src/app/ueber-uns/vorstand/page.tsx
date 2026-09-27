import type { Metadata } from "next";
import { PageHeader } from "../../page-header";
import { MemberCard } from "../../member-card";

export const metadata: Metadata = {
  title: "Vorstand",
  description: "Der Vorstand der Guggenmusik Art-Rose.",
};

const VORSTAND = [
  {
    name: "Aline Friemel",
    role: "Präsidentin",
    photoSrc: "/members/aline.jpg",
    hoverPhotoSrc: "/members/aline_alt.jpg",
  },
  {
    name: "Markus Muff",
    role: "Finanzen",
    photoSrc: "/members/markus.jpg",
    hoverPhotoSrc: "/members/markus_alt.jpg",
  },
  {
    name: "Joy Birrer",
    role: "Tourenmanagerin",
    photoSrc: "/members/joy.jpg",
    hoverPhotoSrc: "/members/joy_alt.jpg",
  },
  {
    name: "Samuel Osterwalder",
    role: "Tambi",
    photoSrc: "/members/samuel.jpg",
    hoverPhotoSrc: "/members/samuel_alt.jpg",
  },
  {
    name: "Dave Naarden",
    role: "Beisitzer",
    photoSrc: "/members/dave.jpg",
    hoverPhotoSrc: "/members/dave_alt.jpg",
  },
];

export default function VorstandPage() {
  return (
    <>
      <PageHeader
        title="Vorstand"
      />
      <div className="max-w-4xl mx-auto px-4 py-10">
        <ul className="grid grid-cols-2 sm:grid-cols-3 gap-6 md:gap-8">
          {VORSTAND.map((member) => (
            <li key={member.name}>
              <MemberCard {...member} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
