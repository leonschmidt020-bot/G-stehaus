import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";
import GrainOverlay from "@/components/ui/GrainOverlay";
import BackgroundCurves from "@/components/ui/BackgroundCurves";
import FloatingCallButton from "@/components/ui/FloatingCallButton";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SmoothScrollProvider>
      <BackgroundCurves />
      <GrainOverlay />
      <Header />
      <main className="flex-grow pt-20">{children}</main>
      <Footer />
      <FloatingCallButton />
    </SmoothScrollProvider>
  );
}
