import type { Metadata } from "next";
import { SectionHeading } from "@emeki/band-site-kit";
import { PageHeader } from "../page-header";

export const metadata: Metadata = {
  title: "Kontakt",
  description: "Kontaktiere die Guggenmusik Art-Rose.",
};

export default function KontaktPage() {
  return (
    <>
      <PageHeader title="Kontakt" />
      <div className="max-w-3xl mx-auto px-4 py-10">
        <p className="mb-6 text-gray-700 dark:text-gray-300 text-lg text-center">
          Hast du Lust bei uns mitzumachen, hast du irgendwelche Ideen? Oder
          willst du nur eine Kontaktadresse um uns etwas zu schreiben?
          Schreib uns einfach eine Mail an{" "}
          <a
            href="mailto:gugge.artrose@gmail.com"
            className="text-brand hover:text-brand-dark font-medium hover:underline"
          >
            gugge.artrose@gmail.com
          </a>{" "}
          oder kontaktiere uns über unsere Social-Media-Kanäle.
        </p>

        <SectionHeading title="Gönner" />
        <p className="mb-6 text-gray-700 dark:text-gray-300 text-lg text-center">
          Das Überleben als Verein ist heutzutage keine leichte Aufgabe. Falls
          du unseren Verein gerne finanziell unterstützen möchtest, freuen wir
          uns über einen beliebigen Betrag von dir.
        </p>
        <div className="text-center text-gray-700 dark:text-gray-300 text-lg space-y-1">
          <p className="font-semibold">Postkonto: 15-511573-9</p>
          <p>Markus Muff</p>
          <p>Gugge Art-Rose</p>
          <p>8135 Langnau am Albis</p>
          <p className="mt-3">CH71 0900 0000 1551 1573 9</p>
          <p>BIC: POFICHBEXXX</p>
        </div>
      </div>
    </>
  );
}
