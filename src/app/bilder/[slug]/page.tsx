import type { Metadata } from "next";
import Image from "next/image";
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
        {gallery.intro && (
          <>
            <figure>
              <Image
                src={gallery.intro.imageSrc}
                alt={gallery.intro.imageAlt}
                width={gallery.intro.imageWidth}
                height={gallery.intro.imageHeight}
                className="mx-auto rounded-xl shadow-lg w-full h-auto"
              />
              {gallery.intro.caption && (
                <figcaption className="mt-2 text-center text-sm text-gray-500 dark:text-gray-400">
                  {gallery.intro.caption}
                </figcaption>
              )}
            </figure>
            {gallery.intro.text && (
              <p className="mt-6 mb-6 text-gray-700 dark:text-gray-300 text-lg text-center">
                {gallery.intro.text}
              </p>
            )}
          </>
        )}
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
