import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHeader } from "../page-header";
import { GALLERIES } from "../galleries";

export const metadata: Metadata = {
  title: "Bilder",
  description: "Fotos der Guggenmusik Art-Rose.",
};

export default function BilderPage() {
  // The original site leaves the current, still-filling-up season off this
  // list — it's still reachable via the nav dropdown.
  const pastSeasons = GALLERIES.filter(
    (g) => g.slug !== "gruppenfotos" && g.slug !== "saison-2025-26",
  );

  return (
    <>
      <PageHeader title="Bilder" />
      <div className="max-w-5xl mx-auto px-4 py-10">
        <p className="mb-6 text-gray-700 dark:text-gray-300 text-lg text-center">
          Die Guggenmusik Art-Rose mit ihrem aktuellen Gwändli:
        </p>
        <figure>
          <Image
            src="/cover_art_rose.jpg"
            alt="Gugge Art-Rose in Thun"
            width={1920}
            height={887}
            className="mx-auto rounded-xl shadow-lg w-full h-auto"
          />
          <figcaption className="mt-2 text-center text-sm text-gray-500 dark:text-gray-400">
            An der Fasnacht in Thun, 1. Februar 2025
          </figcaption>
        </figure>

        <p className="mt-10 mb-3 text-gray-700 dark:text-gray-300 text-lg text-center">
          Mehr Gruppenfotos befinden sich unter{" "}
          <Link
            href="/bilder/gruppenfotos"
            className="text-brand hover:text-brand-dark font-medium hover:underline"
          >
            Gruppenfotos
          </Link>
          .
        </p>
        <p className="mb-3 text-gray-700 dark:text-gray-300 text-lg text-center">
          Bilder vergangener Auftritte sind hier auffindbar.
        </p>
        <ul className="max-w-md mx-auto space-y-1 text-center text-lg">
          {pastSeasons.map((g) => (
            <li key={g.slug}>
              <Link
                href={`/bilder/${g.slug}`}
                className="text-brand hover:text-brand-dark font-medium hover:underline"
              >
                {g.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
