import {
  AgendaProvider,
  FutureEvents,
  PastEvents,
  SectionHeading,
  fetchAgenda,
} from "@emeki/band-site-kit";
import { META_SHEET_ID, SHEET_ID } from "../site-config";
import { PageHeader } from "../page-header";
import { BreadcrumbJsonLd, JsonLd } from "../json-ld";
import { eventsJsonLd, pageMetadata } from "../seo";

export const metadata = pageMetadata({
  title: "Agenda: Auftritte und Termine",
  description:
    "Wo spielt die Guggenmusik Art-Rose als Nächstes? Alle kommenden und vergangenen Auftritte der Gugge aus Thalwil an der Fasnacht und bei weiteren Anlässen.",
  path: "/agenda",
});

export default async function AgendaPage() {
  const agenda = await fetchAgenda(SHEET_ID, META_SHEET_ID);
  const events = eventsJsonLd(agenda.future);

  return (
    <>
      <BreadcrumbJsonLd
        items={[{ name: "Agenda", path: "/agenda" }]}
      />
      {events.length > 0 && <JsonLd data={events} />}
      <PageHeader title="Agenda" />
      <div className="max-w-5xl mx-auto px-4 py-10">
        <AgendaProvider
          sheetId={SHEET_ID}
          metaSheetId={META_SHEET_ID}
          initialData={agenda}
        >
          <SectionHeading title="Kommende Auftritte" />
          <FutureEvents
            surfaceClassName="bg-surface"
            stripeClassName="odd:bg-surface-alt"
          />
          <SectionHeading title="Vergangene Auftritte" />
          <PastEvents
            surfaceClassName="bg-surface"
            stripeClassName="odd:bg-surface-alt"
          />
        </AgendaProvider>
      </div>
    </>
  );
}
