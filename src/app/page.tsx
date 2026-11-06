import Image from "next/image";
import Link from "next/link";
import {
  AgendaProvider,
  Cover,
  FutureEvents,
  SectionHeading,
  VideoEmbed,
  fetchAgenda,
} from "@emeki/band-site-kit";
import { JsonLd } from "./json-ld";
import { eventsJsonLd } from "./seo";
import { META_SHEET_ID, SHEET_ID, coverProps } from "./site-config";

export default async function Home() {
  // There is no 'use client' directive, so this is called only
  // once at build time!
  const agenda = await fetchAgenda(SHEET_ID, META_SHEET_ID);

  const events = eventsJsonLd(agenda.future);

  return (
    <>
      {events.length > 0 && <JsonLd data={events} />}
      <Cover {...coverProps} />
      <div className="max-w-5xl mx-auto px-4">
        <SectionHeading title="Saison 2025 / 2026: Cruella De Vil" />
        <Image
          src="/band_photo.jpg"
          alt="Die Guggenmusik Art-Rose als Cruella De Vil auf der Bühne im Konfettiregen"
          width={1536}
          height={863}
          className="mx-auto mb-6 rounded-xl shadow-lg w-full h-auto"
          priority
        />
        <p className="mb-10 text-gray-700 dark:text-gray-300 text-lg text-center max-w-2xl mx-auto">
          In der Fasnachtssaison 2025 / 2026 waren die Röslis als Cruella De
          Vil aus dem Film 101 Dalmatiner unterwegs.
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
