import Image from "next/image";

export function PageHeader({
  title,
  subtitle,
  backgroundImageSrc = "/cover_art_rose.jpg",
}: Readonly<{
  title: string;
  subtitle?: string;
  /** Set to null to fall back to a plain dark background. */
  backgroundImageSrc?: string | null;
}>) {
  return (
    <div className="relative overflow-hidden bg-gray-900 dark:bg-black text-center py-14 px-4">
      {backgroundImageSrc && (
        <>
          <Image
            src={backgroundImageSrc}
            alt=""
            fill
            priority
            className="object-cover object-[50%_35%]"
          />
          <div className="absolute inset-0 bg-black/60" />
        </>
      )}
      <div className="relative">
        <h1 className="font-heading text-3xl md:text-4xl font-bold text-white">
          {title}
        </h1>
        <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-brand" />
        {subtitle && (
          <p className="mt-4 text-gray-300 text-base md:text-lg max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
