import type { Metadata } from "next";
import {
  AgendaProvider,
  FutureEvents,
  PastEvents,
  SectionHeading,
  fetchAgenda,
} from "@emeki/band-site-kit";
import { META_SHEET_ID, SHEET_ID } from "../site-config";
import { PageHeader } from "../page-header";

export const metadata: Metadata = {
  title: "Agenda",
  description: "Alle kommenden und vergangenen Auftritte der Gugge Art-Rose.",
};

export default async function AgendaPage() {
  const agenda = await fetchAgenda(SHEET_ID, META_SHEET_ID);

  return (
    <>
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
