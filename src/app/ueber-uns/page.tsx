import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@emeki/band-site-kit";
import { PageHeader } from "../page-header";
import { BreadcrumbJsonLd } from "../json-ld";
import { pageMetadata } from "../seo";

export const metadata = pageMetadata({
  title: "Über uns: Geschichte und Proben",
  description:
    "Die Guggenmusik Art-Rose wurde 1980 in Langnau am Albis gegründet und gehört seit 1991 zu Thalwil. Proben jeweils am Dienstag um 20:00 Uhr in der Pfisterschüür.",
  path: "/ueber-uns",
});

export default function UeberUnsPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[{ name: "Über uns", path: "/ueber-uns" }]}
      />
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
            alt="Musikerinnen und Musiker der Guggenmusik Art-Rose in Kostümen und Masken mit ihren Instrumenten vor dem grünen Fahnenbanner „D'Art Rose“"
            width={483}
            height={362}
            className="w-full max-w-[307px] h-auto rounded-xl shadow-md shrink-0"
          />
        </div>

        <SectionHeading title="Proben" />
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <Image
            src="/probe.jpg"
            alt="Probe der Guggenmusik Art-Rose: Bläserinnen und Bläser mit Trompeten und Tuben in einem Probenraum"
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
