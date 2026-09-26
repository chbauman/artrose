import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import { Footer } from "@emeki/band-site-kit";
import "./globals.css";
import { Navbar } from "./navbar";
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

const title = "Guggenmusik Art-Rose";
const description =
  "Die Guggenmusik Art-Rose aus Thalwil (seit 1980) an der Fasnacht. Auftritte, Mitglieder und Kontakt.";
const baseUrl = "https://artrose.ch";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: title,
    template: "%s | Guggenmusik Art-Rose",
  },
  description,
  keywords: [
    "Guggenmusik Art-Rose",
    "Thalwil",
    "Fasnacht",
    "Gugge",
    "Guggenmusik",
    "Zürich",
  ],
  alternates: {
    canonical: baseUrl,
  },
  openGraph: {
    title,
    description,
    type: "website",
    locale: "de_CH",
    url: baseUrl,
    siteName: title,
    images: [
      {
        url: "/cover_art_rose.jpg",
        width: 1920,
        height: 887,
        alt: "Guggenmusik Art-Rose an einem Auftritt",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/cover_art_rose.jpg"],
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
  name: title,
  description,
  url: baseUrl,
  email: "gugge.artrose@gmail.com",
  foundingDate: "1980",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
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
