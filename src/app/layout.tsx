import type { Metadata } from "next";

import "../styles/globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "https://tattoo-studio-navy.vercel.app");

const title = "Tattoo Studio";
const description =
  "Express your individuality with custom tattoos by the artists at Good Luck Tattoo Studio.";
const socialImage = {
  url: "/images/og-preview.jpg",
  width: 1200,
  height: 630,
  type: "image/jpeg",
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
