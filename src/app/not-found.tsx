import Link from "next/link";
import { PageHeader } from "./page-header";

export default function NotFound() {
  return (
    <>
      <PageHeader title="404 – Seite nicht gefunden" />
      <div className="max-w-3xl mx-auto px-4 py-10 text-center">
        <p className="mb-3 text-gray-700 dark:text-gray-300 text-lg">
          Diese Seite existiert leider nicht.
        </p>
        <p className="text-gray-700 dark:text-gray-300 text-lg">
          <Link
            href="/"
            className="text-brand underline hover:text-brand-dark"
          >
            Zurück zur Startseite
          </Link>
        </p>
      </div>
    </>
  );
}
