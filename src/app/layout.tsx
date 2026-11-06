import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import { Footer } from "@emeki/band-site-kit";
import "./globals.css";
import { Navbar } from "./navbar";
import { JsonLd } from "./json-ld";
import { BASE_URL, OG_IMAGE, SITE_NAME } from "./seo";
import { NAV_ITEMS, footerProps } from "./site-config";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  weight: ["600", "700"],
  subsets: ["latin"],
});

const title = `${SITE_NAME} – Fasnacht in Thalwil`;
const description =
  "Die Guggenmusik Art-Rose (Art Rose, Rösli vo Thalwil) aus Thalwil, gegründet 1980: Auftritte an der Fasnacht, Fotos, Mitglieder und Kontakt.";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: title,
    template: `%s | ${SITE_NAME}`,
  },
  description,
  keywords: [
    "Guggenmusik Art-Rose",
    "Art Rose",
    "Gugge Art Rose",
    "Rösli vo Thalwil",
    "Thalwil",
    "Fasnacht",
    "Gugge",
    "Guggenmusik",
    "Zürich",
  ],
  // Relative, so every page gets its own canonical URL (pages set an explicit
  // one via pageMetadata; this is the safe default for any that don't).
  alternates: {
    canonical: "./",
  },
  openGraph: {
    title,
    description,
    type: "website",
    locale: "de_CH",
    url: "./",
    siteName: SITE_NAME,
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [OG_IMAGE.url],
  },
  icons: {
    apple: "/apple-touch-icon.png",
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    other: [{ rel: "manifest", url: "/site.webmanifest" }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MusicGroup",
  name: SITE_NAME,
  alternateName: ["Art Rose", "Rösli vo Thalwil"],
  description,
  url: BASE_URL,
  logo: `${BASE_URL}/logo.png`,
  image: `${BASE_URL}${OG_IMAGE.url}`,
  email: "gugge.artrose@gmail.com",
  foundingDate: "1980",
  foundingLocation: { "@type": "Place", name: "Langnau am Albis" },
  genre: ["Guggenmusik"],
  location: {
    "@type": "Place",
    name: "Thalwil",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Thalwil",
      addressCountry: "CH",
    },
  },
  sameAs: [
    "https://www.instagram.com/gugge_art_rose/",
    "https://www.facebook.com/roeslivothalwil",
    "https://www.youtube.com/channel/UCZr8bojWJQ8BEVvB5r5pRog",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de">
      <body className={`${inter.variable} ${oswald.variable} antialiased`}>
        <JsonLd data={jsonLd} />
        <div className="min-h-screen flex flex-col">
          <Navbar
            logoSrc="/logo.png"
            logoAlt="Guggenmusik Art-Rose Logo"
            siteName="Art-Rose"
            items={NAV_ITEMS}
          />
          <div className="flex-grow">{children}</div>
          <Footer {...footerProps} />
        </div>
      </body>
    </html>
  );
}
