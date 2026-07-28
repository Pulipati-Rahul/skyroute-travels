import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import Loader from "@/components/Loader";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

import type { Viewport } from "next";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: "SkyRoute Travels | Bespoke Luxury Tour Packages & Travel Agency",
  description:
    "Discover your next luxury adventure with SkyRoute Travels. We offer hand-crafted tour packages, private local guides, and 24/7 dedicated support for dream vacations in the Maldives, Bali, Switzerland, Kyoto, Dubai, and Paris.",
  keywords: [
    "SkyRoute Travels",
    "luxury travel agency",
    "bespoke tour packages",
    "Maldives overwater villas",
    "Bali custom travel",
    "Switzerland tour packages",
    "Kyoto private guide",
    "Dubai luxury vacation",
    "honeymoon travel agency",
  ],
  authors: [{ name: "SkyRoute Travels Team" }],
  openGraph: {
    title: "SkyRoute Travels | Bespoke Luxury Tour Packages & Travel Agency",
    description:
      "Crafting extraordinary, high-end journeys to the world's most breathtaking destinations. Explore custom packages and secure your dream getaway today.",
    type: "website",
    locale: "en_US",
    siteName: "SkyRoute Travels",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${playfairDisplay.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans text-charcoal bg-white">
        <Loader />
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  );
}
