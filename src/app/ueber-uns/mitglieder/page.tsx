import type { Metadata } from "next";
import { SectionHeading } from "@emeki/band-site-kit";
import { PageHeader } from "../../page-header";

export const metadata: Metadata = {
  title: "Mitglieder",
  description: "Die Mitglieder der Guggenmusik Art-Rose nach Instrument.",
};

const SECTIONS: { instrument: string; members: string[] }[] = [
  {
    instrument: "Trompete",
    members: [
      "Rafael Derungs",
      "Aline Friemel",
      "Markus Muff",
      "Samuel Osterwalder",
    ],
  },
  { instrument: "Posaune", members: ["Simone Beer", "Kerstin Haas"] },
  { instrument: "Sousaphon", members: ["Dave Naarden"] },
  { instrument: "Horn", members: ["Christian Baumann"] },
  { instrument: "Lyra", members: ["Stefan Venetz"] },
  {
    instrument: "Rhythmus",
    members: ["Stefan Senn", "Franziska Hunziker", "Joy Birrer"],
  },
];

export default function MitgliederPage() {
  return (
    <>
      <PageHeader title="Mitglieder" />
      <div className="max-w-3xl mx-auto px-4 py-10">
        {SECTIONS.map(({ instrument, members }) => (
          <div key={instrument}>
            <SectionHeading title={instrument} className="my-6" />
            <ul className="text-center space-y-1 mb-4 text-gray-700 dark:text-gray-300 text-lg">
              {members.map((name) => (
                <li key={name}>{name}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
}
