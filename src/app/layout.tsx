import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Phuket Child Seat - Safe Travel Services",
    template: "%s | Phuket Child Seat",
  },
  description:
    "Professional travel services in Phuket with child seat safety. Airport transfers, day trips, tours with imported Britax child seats from Sweden. Safe and convenient travel for families.",
  keywords: [
    "Phuket",
    "Child Seat",
    "Airport Transfer",
    "Day Trips",
    "Family Travel",
    "Safety",
    "Thailand",
    "Tours",
  ],
  authors: [{ name: "Kampanart Travel" }],
  creator: "Kampanart Travel",
  metadataBase: new URL("https://phuket-childseat.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://phuket-childseat.com",
    title: "Phuket Child Seat - Safe Travel Services",
    description:
      "Professional travel services in Phuket with child seat safety. Airport transfers, day trips, tours with imported Britax child seats from Sweden.",
    siteName: "Phuket Child Seat",
  },
  twitter: {
    card: "summary_large_image",
    title: "Phuket Child Seat - Safe Travel Services",
    description:
      "Professional travel services in Phuket with child seat safety. Airport transfers, day trips, tours with imported Britax child seats from Sweden.",
    creator: "@phuketchildseat",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Providers>
          <div className="min-h-screen flex flex-col">
            <Navigation />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
