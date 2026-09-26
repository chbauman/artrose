export interface Gallery {
  slug: string;
  title: string;
  /** Google Drive folder id, embedded via embeddedfolderview. */
  folderId: string;
  /** Optional intro shown above the folder embed, e.g. a single highlight
   * photo with a caption and a lead-in line of text. */
  intro?: {
    imageSrc: string;
    imageAlt: string;
    imageWidth: number;
    imageHeight: number;
    caption?: string;
    text?: string;
  };
}

export const GALLERIES: Gallery[] = [
  {
    slug: "gruppenfotos",
    title: "Gruppenfotos",
    folderId: "1Bo7VCeK8sJqyUgX-CWCstTf6ylFh9GtR",
    intro: {
      imageSrc: "/cover_art_rose.jpg",
      imageAlt: "Gugge Art-Rose in Thun",
      imageWidth: 1920,
      imageHeight: 887,
      caption: "An der Fasnacht in Thun, 1. Februar 2025",
      text: "Die Gruppenfotos der letzten paar Jahre befinden sich hier:",
    },
  },
  {
    slug: "saison-2025-26",
    title: "Saison 2025/26",
    folderId: "1JMVJD8sZGkQLtFpy_3kQ-saXX1rwzsRU",
  },
  {
    slug: "saison-2024-25",
    title: "Saison 2024/25",
    folderId: "1MJbofC-Gv0lL9U3I841cOI4ocR-HM2kA",
  },
  {
    slug: "saison-2023-24",
    title: "Saison 2023/24",
    folderId: "1GkBD6jqwwEXY4gEx48yPxmcn8aVbHtrk",
  },
  {
    slug: "saison-2022-23",
    title: "Saison 2022/23",
    folderId: "1R8SC3wXHkZ725IFmKPf_VpzXPYnYKGfj",
  },
  {
    slug: "saison-2021-22",
    title: "Saison 2021/22",
    folderId: "1Cupr3gl_i3opB6C3q7diiEVYOIcQc8fy",
  },
  {
    slug: "saison-2019-20",
    title: "Saison 2019/20",
    folderId: "1KSZQH0QX7DBdcq5x8fRZA55IEqfSsnPv",
  },
  {
    slug: "saison-2018-19",
    title: "Saison 2018/19",
    folderId: "1KVibjF0bROn9JmCcAnMADBpoEPITicPE",
  },
];
