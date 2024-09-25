import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@components/Navbar/Navbar";
import { Footer } from "@components/Footer/Footer";

export const metadata: Metadata = {
  title: "CPX Architects",
  description: "Sinple profile company CPX Architects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-roboto relative">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
