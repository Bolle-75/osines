import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "OSINES | Detección, Secado y Restauración",
  description:
    "OSINES ofrece detección de fugas, daños por agua, secado técnico y restauración profesional de inmuebles.",
  keywords: [
    "detección de fugas",
    "daños por agua",
    "secado técnico",
    "restauración",
    "humedades",
    "detección de agua",
    "OSINES",
  ],
  metadataBase: new URL("https://osines.com"),
  openGraph: {
    title: "OSINES | Detección, Secado y Restauración",
    description:
      "OSINES ofrece detección de fugas, daños por agua, secado técnico y restauración profesional de inmuebles.",
    url: "https://osines.com",
    siteName: "OSINES",
    locale: "es_ES",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}