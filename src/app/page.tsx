import Image from "next/image";
import Link from "next/link";
import {
  AgendaProvider,
  Cover,
  FutureEvents,
  SectionHeading,
  VideoEmbed,
  fetchAgenda,
  stripMarkdownLinks,
  toISODate,
} from "@emeki/band-site-kit";
import { META_SHEET_ID, SHEET_ID, coverProps } from "./site-config";

export default async function Home() {
  // There is no 'use client' directive, so this is called only
  // once at build time!
  const agenda = await fetchAgenda(SHEET_ID, META_SHEET_ID);

  const eventsJsonLd = agenda.future.map((event) => ({
    "@context": "https://schema.org",
    "@type": "MusicEvent",
    name: stripMarkdownLinks(event.Event ?? ""),
    startDate: toISODate(event.Datum),
    location: {
      "@type": "Place",
      name: stripMarkdownLinks(event.Ort ?? ""),
    },
    performer: {
      "@type": "MusicGroup",
      name: "Guggenmusik Art-Rose",
    },
  }));

  return (
    <>
      {eventsJsonLd.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(eventsJsonLd) }}
        />
      )}
      <Cover {...coverProps} />
      <div className="max-w-5xl mx-auto px-4">
        <SectionHeading title="Unterwegs als Cruella De Vil" />
        <Image
          src="/band_photo.jpg"
          alt="Art-Rose im Konfettiregen"
          width={1536}
          height={863}
          className="mx-auto mb-6 rounded-xl shadow-lg w-full h-auto"
          priority
        />
        <p className="mb-10 text-gray-700 dark:text-gray-300 text-lg text-center max-w-2xl mx-auto">
          Die Fasnachtssaison 2025 / 2026 hat gestartet, die Röslis sind
          unterwegs als Cruella De Vil aus dem Film 101 Dalmatiner.
        </p>

        <SectionHeading title="Wir suchen neue Mitglieder" />
        <p className="mb-6 text-gray-700 dark:text-gray-300 text-lg text-center max-w-2xl mx-auto">
          Würdest du gerne bei einer Probe reinschauen oder auch mal
          mitspielen? Dann melde dich bei uns, wir freuen uns auf Besuch und
          Unterstützung:{" "}
          <a
            href="mailto:gugge.artrose@gmail.com"
            className="text-brand hover:text-brand-dark font-medium hover:underline"
          >
            gugge.artrose@gmail.com
          </a>
          .
        </p>

        <SectionHeading title="Auftritte" />
        <p className="mb-3 text-gray-700 dark:text-gray-300 text-lg">
          Während der aktuellen Saison sind wir an folgenden Daten / Orten
          anzutreffen:
        </p>
        <AgendaProvider
          sheetId={SHEET_ID}
          metaSheetId={META_SHEET_ID}
          initialData={agenda}
        >
          <FutureEvents />
        </AgendaProvider>
        <p className="mt-6 text-center text-gray-700 dark:text-gray-300 text-lg">
          Fotos der letzten Saison findest du unter{" "}
          <Link
            href="/bilder"
            className="text-brand hover:text-brand-dark font-medium hover:underline"
          >
            Bilder
          </Link>
          .
        </p>

        <SectionHeading title="Live" />
        <VideoEmbed youtubeId="aJXLEY6w9OQ" title="Guggenmusik Art-Rose" />
      </div>
    </>
  );
}
