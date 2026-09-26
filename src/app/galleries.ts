export interface Gallery {
  slug: string;
  title: string;
  /** Google Drive folder id, embedded via embeddedfolderview. */
  folderId: string;
}

export const GALLERIES: Gallery[] = [
  {
    slug: "gruppenfotos",
    title: "Gruppenfotos",
    folderId: "1Bo7VCeK8sJqyUgX-CWCstTf6ylFh9GtR",
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
