import type { ComponentProps } from "react";
import { Cover, Footer } from "@emeki/band-site-kit";
import { GALLERIES } from "./galleries";
import type { NavItem } from "./navbar";

export const SHEET_ID =
  "https://docs.google.com/spreadsheets/d/1qaSlh4f5uCCRdCZ-35w15kAHBzoMPKkZU48AkvBe9uQ/export?format=csv&gid=0";

// Header-less (key, value) sheet — currently just a "no-gig-text" row for
// the empty-agenda message.
export const META_SHEET_ID =
  "https://docs.google.com/spreadsheets/d/1qaSlh4f5uCCRdCZ-35w15kAHBzoMPKkZU48AkvBe9uQ/gviz/tq?tqx=out:csv&sheet=Meta";

export const NAV_ITEMS: NavItem[] = [
  { label: "Agenda", href: "/agenda" },
  {
    label: "Bilder",
    href: "/bilder",
    children: GALLERIES.map((g) => ({
      label: g.title,
      href: `/bilder/${g.slug}`,
    })),
  },
  { label: "Kontakt", href: "/kontakt" },
  {
    label: "Über Uns",
    href: "/ueber-uns",
    children: [
      { label: "Vorstand", href: "/ueber-uns/vorstand" },
      { label: "Mitglieder", href: "/ueber-uns/mitglieder" },
    ],
  },
];

export const coverProps: ComponentProps<typeof Cover> = {
  bandName: "Guggenmusik Art-Rose",
  showTitle: true,
  tagline: "Thalwil, seit 1980",
  backgroundImageSrc: "/cover_art_rose.jpg",
  backgroundImageAlt: "Guggenmusik Art-Rose an einem Auftritt",
  backgroundImageWidth: 1920,
  backgroundImageHeight: 887,
  // Natural aspect is ~2.17:1; crop the sides a bit on mobile (taller ratio)
  // and the top/bottom a bit on desktop (wider ratio).
  backgroundAspectClassName: "aspect-[7/4] md:aspect-[5/2]",
  imageOverlayClassName: "bg-black/10 dark:bg-black/30",
  textPanelClassName: "bg-white/45 dark:bg-black/45 py-8",
  textColorClassName: "text-gray-900 dark:text-white",
};

export const footerProps: ComponentProps<typeof Footer> = {
  copyrightName: "Guggenmusik Art-Rose",
  logoSrc: "/logo.png",
  logoAlt: "Guggenmusik Art-Rose Logo",
  logoWidth: 40,
  logoHeight: 80,
  links: [
    { type: "email", href: "mailto:gugge.artrose@gmail.com" },
    { type: "instagram", href: "https://www.instagram.com/gugge_art_rose/" },
    { type: "facebook", href: "https://www.facebook.com/roeslivothalwil" },
    {
      type: "youtube",
      href: "https://www.youtube.com/channel/UCZr8bojWJQ8BEVvB5r5pRog",
    },
  ],
};
