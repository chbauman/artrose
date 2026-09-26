import type { Metadata } from "next";
import { SectionHeading } from "@emeki/band-site-kit";
import { PageHeader } from "../../page-header";
import { MemberCard } from "../../member-card";

export const metadata: Metadata = {
  title: "Mitglieder",
  description: "Die Mitglieder der Guggenmusik Art-Rose nach Instrument.",
};

interface Member {
  name: string;
  photoSrc: string;
  hoverPhotoSrc?: string;
}

const SECTIONS: { instrument: string; members: Member[] }[] = [
  {
    instrument: "Trompete",
    members: [
      {
        name: "Rafael Derungs",
        photoSrc: "/members/rafael.jpg",
        hoverPhotoSrc: "/members/rafael_alt.jpg",
      },
      {
        name: "Aline Friemel",
        photoSrc: "/members/aline.jpg",
        hoverPhotoSrc: "/members/aline_alt.jpg",
      },
      {
        name: "Markus Muff",
        photoSrc: "/members/markus.jpg",
        hoverPhotoSrc: "/members/markus_alt.jpg",
      },
      {
        name: "Samuel Osterwalder",
        photoSrc: "/members/samuel.jpg",
        hoverPhotoSrc: "/members/samuel_alt.jpg",
      },
    ],
  },
  {
    instrument: "Posaune",
    members: [
      {
        name: "Simone Beer",
        photoSrc: "/members/simone.jpg",
        hoverPhotoSrc: "/members/simone_alt.jpg",
      },
      {
        name: "Kerstin Haas",
        photoSrc: "/members/kerstin.jpg",
        hoverPhotoSrc: "/members/kerstin_alt.jpg",
      },
    ],
  },
  {
    instrument: "Sousaphon",
    members: [
      {
        name: "Dave Naarden",
        photoSrc: "/members/dave.jpg",
        hoverPhotoSrc: "/members/dave_alt.jpg",
      },
    ],
  },
  {
    instrument: "Horn",
    members: [
      {
        name: "Christian Baumann",
        photoSrc: "/members/christian.jpg",
        hoverPhotoSrc: "/members/christian_alt.jpg",
      },
    ],
  },
  {
    instrument: "Lyra",
    members: [{ name: "Stefan Venetz", photoSrc: "/members/stefan_venetz.jpg" }],
  },
  {
    instrument: "Rhythmus",
    members: [
      {
        name: "Stefan Senn",
        photoSrc: "/members/stefan_senn.jpg",
        hoverPhotoSrc: "/members/stefan_senn_alt.jpg",
      },
      {
        name: "Franziska Hunziker",
        photoSrc: "/members/franziska.jpg",
        hoverPhotoSrc: "/members/franziska_alt.jpg",
      },
      {
        name: "Joy Birrer",
        photoSrc: "/members/joy.jpg",
        hoverPhotoSrc: "/members/joy_alt.jpg",
      },
    ],
  },
];

export default function MitgliederPage() {
  return (
    <>
      <PageHeader title="Mitglieder" />
      <div className="max-w-4xl mx-auto px-4 py-10">
        {SECTIONS.map(({ instrument, members }) => (
          <div key={instrument}>
            <SectionHeading title={instrument} className="my-6" />
            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-6 md:gap-8 mb-10">
              {members.map((member) => (
                <li key={member.name}>
                  <MemberCard {...member} />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
}
