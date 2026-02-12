import type { Metadata } from "next";
import { Noto_Serif, Montserrat } from "next/font/google";
import "./globals.css";
import React from "react";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";
import GrainOverlay from "@/components/ui/GrainOverlay";
import BackgroundCurves from "@/components/ui/BackgroundCurves";
import FloatingCallButton from "@/components/ui/FloatingCallButton";

const notoSerif = Noto_Serif({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700"],
  display: "swap",
  adjustFontFallback: true,
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Das Gästehaus Eimeldingen | Zimmer nahe Basel & A5",
  description:
    "6 gemütliche Zimmer mit Klimaanlage, WLAN und Parkplatz in Eimeldingen. Direkt an der A5, 10 Min. von Basel. Einzel ab 68 €, Doppel ab 90 €.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${notoSerif.variable} ${montserrat.variable} dark scroll-smooth`}
    >
      <body className="antialiased flex flex-col min-h-screen bg-[var(--background)] text-[var(--foreground)]">
        <SmoothScrollProvider>
          <BackgroundCurves />
          <GrainOverlay />
          <Header />
          <main className="flex-grow pt-20">{children}</main>
          <Footer />
          <FloatingCallButton />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
