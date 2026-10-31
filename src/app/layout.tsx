import type { Metadata } from "next";

import "../styles/globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

const title = "Tattoo Studio";
const description =
  "Explore a realm of artistic expression at our Tattoo Studio. Immerse yourself in the fusion of creativity and craftsmanship as our skilled artists bring your vision to life. From vibrant designs to intricate black and gray work, we're here to make your inked memories unforgettable. Welcome to Ink Chronicles, where self-expression knows no bounds.";
const socialImage = {
  url: "/images/about-tablet-2x.png",
  width: 1540,
  height: 1000,
  alt: "Tattoo Studio",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  openGraph: {
    type: "website",
    siteName: title,
    title,
    description,
    images: [socialImage],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [socialImage],
  },
  icons: [
    {
      url: "/icons/favicon-dark.svg",
      media: "(prefers-color-scheme: light)",
      rel: "icon",
      type: "image/svg",
    },
    {
      url: "/icons/favicon-light.svg",
      media: "(prefers-color-scheme: dark)",
      rel: "icon",
      type: "image/svg",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>{children}</body>
    </html>
  );
}
