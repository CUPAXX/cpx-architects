"use client";

import { Navbar } from "@components/Navbar/Navbar";
import { MainBanner } from "@components/MainBanner/MainBanner";
import { Footer } from "@components/Footer/Footer";

export default function Home() {
  return (
    <div className="font-roboto">
      <Navbar />
      <MainBanner />
      <Footer />
    </div>
  );
}
