import type { Metadata } from "next";
import { PageHeader } from "../../page-header";

export const metadata: Metadata = {
  title: "Vorstand",
  description: "Der Vorstand der Guggenmusik Art-Rose.",
};

const VORSTAND = [
  { name: "Kerstin Haas", role: "Präsidentin" },
  { name: "Markus Muff", role: "Finanzen" },
  { name: "Joy Birrer", role: "Tourenmanagerin" },
  { name: "Samuel Osterwalder", role: "Tambi" },
  { name: "Franziska Hunziker", role: "Beisitzerin" },
];

export default function VorstandPage() {
  return (
    <>
      <PageHeader
        title="Vorstand"
        subtitle="Der Vorstand der Guggenmusik besteht aus den folgenden Mitgliedern:"
      />
      <div className="max-w-3xl mx-auto px-4 py-10">
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {VORSTAND.map(({ name, role }) => (
            <li
              key={name}
              className="text-center p-6 rounded-xl ring-1 ring-gray-200 dark:ring-gray-700"
            >
              <p className="font-heading text-lg font-bold text-gray-900 dark:text-white">
                {name}
              </p>
              <p className="text-brand font-medium">{role}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
