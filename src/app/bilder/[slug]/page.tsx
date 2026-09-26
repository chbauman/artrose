import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHeader } from "../../page-header";
import { GALLERIES } from "../../galleries";

export function generateStaticParams() {
  return GALLERIES.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const gallery = GALLERIES.find((g) => g.slug === slug);
  return {
    title: gallery?.title ?? "Bilder",
    description: `Fotos der Guggenmusik Art-Rose: ${gallery?.title ?? ""}.`,
  };
}

export default async function GalleryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const gallery = GALLERIES.find((g) => g.slug === slug);
  if (!gallery) {
    notFound();
  }

  return (
    <>
      <PageHeader title={gallery.title} />
      <div className="max-w-5xl mx-auto px-4 py-10">
        <iframe
          src={`https://drive.google.com/embeddedfolderview?orderBy=name%20desc&id=${gallery.folderId}#grid`}
          width="100%"
          height="800"
          title={gallery.title}
          className="border-0 rounded-xl shadow-md ring-1 ring-gray-200 dark:ring-gray-700"
        />
      </div>
    </>
  );
}
