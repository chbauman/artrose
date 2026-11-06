import type { Metadata } from "next";
import { stripMarkdownLinks, toISODate } from "@emeki/band-site-kit";

export const BASE_URL = "https://artrose.ch";
export const SITE_NAME = "Guggenmusik Art-Rose";

/** 1200x630 social-share image (cropped from the cover photo). */
export const OG_IMAGE = {
  url: "/og_image.jpg",
  width: 1200,
  height: 630,
  alt: "Guggenmusik Art-Rose an einem Auftritt",
};

/** Metadata for a single page. Each page needs its own canonical URL and
 * Open Graph data: a page that only sets a title would otherwise inherit the
 * site-wide values from the layout. */
export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const fullTitle = `${title} | ${SITE_NAME}`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: fullTitle,
      description,
      url: path,
      type: "website",
      locale: "de_CH",
      siteName: SITE_NAME,
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [OG_IMAGE.url],
    },
  };
}

/** Breadcrumb trail for a page, starting at the home page. */
export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Start", path: "/" }, ...items].map(
      (item, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: item.name,
        item: `${BASE_URL}${item.path === "/" ? "" : item.path}`,
      }),
    ),
  };
}

/** One MusicEvent per upcoming agenda row. */
export function eventsJsonLd(events: Record<string, string>[]) {
  return events.map((event) => {
    const place = stripMarkdownLinks(event.Ort ?? "");
    return {
      "@context": "https://schema.org",
      "@type": "MusicEvent",
      name: stripMarkdownLinks(event.Event ?? ""),
      startDate: toISODate(event.Datum),
      eventStatus: "https://schema.org/EventScheduled",
      eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
      location: { "@type": "Place", name: place, address: place },
      url: `${BASE_URL}/agenda`,
      performer: { "@type": "MusicGroup", name: SITE_NAME, url: BASE_URL },
    };
  });
}
