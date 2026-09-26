import type { Metadata } from "next";
import { SectionHeading } from "@emeki/band-site-kit";
import { PageHeader } from "../page-header";

export const metadata: Metadata = {
  title: "Über Uns",
  description: "Geschichte und Proben der Guggenmusik Art-Rose.",
};

export default function UeberUnsPage() {
  return (
    <>
      <PageHeader title="Über Uns" />
      <div className="max-w-3xl mx-auto px-4 py-10">
        <SectionHeading title="Geschichte" />
        <p className="mb-6 text-gray-700 dark:text-gray-300 text-lg">
          Die Guggenmusik Art-Rose wurde im Januar 1980 gegründet und stammt
          ursprünglich aus Langnau am Albis. An der GV vom 5. April 1991
          wurde die Zugehörigkeit der Gugge zu Thalwil beschlossen.
          Hauptsächlich ist die Gugge Art-Rose in der Region unterwegs. Pro
          Saison gibt es mindestens einen Auftritt bzw. ein Wochenende in der
          weiteren Umgebung (gesamte Schweiz und auch Ausland).
        </p>

        <SectionHeading title="Proben" />
        <p className="mb-6 text-gray-700 dark:text-gray-300 text-lg">
          Unsere Proben finden jeweils am Dienstag um 20:00 Uhr in der
          Pfisterschüür in Thalwil statt. Der Rhythmus und die Bläser üben
          manchmal getrennt voneinander in unterschiedlichen Lokalitäten. Wer
          Interesse hat sich eine Probe anzuhören, kann unter Voranmeldung
          dies gerne tun. Musikalische Kenntnisse sind zwar von Vorteil, aber
          keine Voraussetzung! Wir freuen uns von dir zu hören!
        </p>
      </div>
    </>
  );
}
