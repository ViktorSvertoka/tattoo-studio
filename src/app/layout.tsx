import type { Metadata } from "next";

import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Tattoo Studio",
  description:
    "Explore a realm of artistic expression at our Tattoo Studio. Immerse yourself in the fusion of creativity and craftsmanship as our skilled artists bring your vision to life. From vibrant designs to intricate black and gray work, we're here to make your inked memories unforgettable. Welcome to Ink Chronicles, where self-expression knows no bounds.",
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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
