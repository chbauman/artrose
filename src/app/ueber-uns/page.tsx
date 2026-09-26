import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
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
      <div className="max-w-4xl mx-auto px-4 py-10">
        <SectionHeading title="Geschichte" />
        <div className="flex flex-col-reverse sm:flex-row items-center gap-6 mb-10">
          <p className="text-gray-700 dark:text-gray-300 text-lg flex-1">
            Die Guggenmusik Art-Rose wurde im Januar 1980 gegründet und stammt
            ursprünglich aus Langnau am Albis. An der GV vom 5. April 1991
            wurde die Zugehörigkeit der Gugge zu Thalwil beschlossen.
            Hauptsächlich ist die Gugge Art-Rose in der Region unterwegs. Pro
            Saison gibt es mindestens einen Auftritt bzw. ein Wochenende in
            der weiteren Umgebung (gesamte Schweiz und auch Ausland).
          </p>
          <Image
            src="/uberuns.jpg"
            alt=""
            width={483}
            height={362}
            className="w-full max-w-[307px] h-auto rounded-xl shadow-md shrink-0"
          />
        </div>

        <SectionHeading title="Proben" />
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <Image
            src="/probe.jpg"
            alt=""
            width={483}
            height={362}
            className="w-full sm:w-1/2 h-auto rounded-xl shadow-md shrink-0"
          />
          <p className="text-gray-700 dark:text-gray-300 text-lg flex-1">
            Unsere Proben finden jeweils am Dienstag um 20:00 Uhr in der
            Pfisterschüür in Thalwil statt. Der Rhythmus und die Bläser üben
            manchmal getrennt voneinander in unterschiedlichen Lokalitäten.
            Wer Interesse hat sich eine Probe anzuhören, kann unter{" "}
            <Link
              href="/kontakt"
              className="text-brand hover:text-brand-dark font-medium hover:underline"
            >
              Voranmeldung
            </Link>{" "}
            dies gerne tun. Musikalische Kenntnisse sind zwar von Vorteil,
            aber keine Voraussetzung! Wir freuen uns von dir zu hören!
          </p>
        </div>
      </div>
    </>
  );
}
