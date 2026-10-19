import { Geist, Geist_Mono } from "next/font/google";
import { LenisProvider } from "./components/LenisProvider/LenisProvider";
import "lenis/dist/lenis.css";
import "./globals.scss";
import { createPageMetadata, siteUrl } from './seo';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  ...createPageMetadata('/'),
  metadataBase: new URL(siteUrl),
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es-AR" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body><LenisProvider>{children}</LenisProvider></body>
    </html>
  );
}
