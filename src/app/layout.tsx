import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingContactButton from "@/components/FloatingContactButton";
// import LoadingComponent from "@/components/LoadingComponent";

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
    default:
      "Phuket Child Seat - Safe Travel Services with Imported Britax Seats",
    template: "%s | Phuket Child Seat - Safe Family Travel",
  },
  description:
    "Professional travel services in Phuket with imported Britax child seats from Sweden. Airport transfers, day trips, tours, and house rentals with maximum safety for families. Licensed TAT operator with travel insurance included.",
  keywords: [
    "Phuket transfer",
    "transferphuket",
    "phukettravel",
    "trips phuket",
    "phuket carseat",
    "taxi with baby seat",
    "phuket childseat",
    "kids on board",
    "rear facing car seat",
    "Phuket child seat",
    "airport transfer Phuket",
    "Phuket day trips",
    "family travel Thailand",
    "Britax child seats",
    "Phuket tours with child seats",
    "safe travel Phuket",
    "Phuket taxi child seat",
    "Kampanart Travel",
    "Phuket family transport",
    "Thailand child safety",
    "Phuket house rental",
    "Laguna Phuket transport",
    "Phi Phi Island tours",
    "Phang Nga Bay tours",
    "Phuket airport taxi",
    "rear facing child seats",
    "TAT licensed Phuket",
  ],
  authors: [{ name: "Kampanart Travel", url: "https://kids-onboard.com" }],
  creator: "Kampanart Travel - Mr. Kam",
  publisher: "Kampanart Travel",
  metadataBase: new URL("https://kids-onboard.com"),
  alternates: {
    canonical: "https://kids-onboard.com",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kids-onboard.com",
    title:
      "Phuket Child Seat - Safe Travel Services with Imported Britax Seats",
    description:
      "Professional travel services in Phuket with imported Britax child seats from Sweden. Airport transfers, day trips, tours, and house rentals with maximum safety for families.",
    siteName: "Phuket Child Seat",
    images: [
      {
        url: "/image/seo.png",
        width: 1200,
        height: 630,
        alt: "Phuket Child Seat - Safe Family Travel Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Phuket Child Seat - Safe Travel Services with Imported Britax Seats",
    description:
      "Professional travel services in Phuket with imported Britax child seats from Sweden. Airport transfers, day trips, tours with maximum safety for families.",
    creator: "@phuketchildseat",
    images: ["/image/seo.png"],
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
  category: "Travel & Transportation",
  classification: "Business",
  other: {
    "geo.region": "TH-83",
    "geo.placename": "Phuket, Thailand",
    "geo.position": "7.8804;98.3923",
    ICBM: "7.8804, 98.3923",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    name: "Phuket Childseat - Kampanart Travel",
    description:
      "Professional travel services in Phuket with imported Britax child seats from Sweden. Airport transfers, day trips, tours, and house rentals with maximum safety for families.",
    url: "https://kids-onboard.com",
    logo: "https://kids-onboard.com/logo.png",
    image: "https://kids-onboard.com/image/seo.png",
    telephone: "+66815372657",
    email: "kam.phuket@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Thalang",
      addressRegion: "Phuket",
      addressCountry: "Thailand",
      postalCode: "83110",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "7.8804",
      longitude: "98.3923",
    },
    areaServed: [
      {
        "@type": "City",
        name: "Phuket",
      },
      {
        "@type": "City",
        name: "Khao Lak",
      },
      {
        "@type": "City",
        name: "Krabi",
      },
      {
        "@type": "City",
        name: "Koh Lanta",
      },
    ],
    serviceType: [
      "Airport Transfer",
      "Day Trips",
      "Tours",
      "House Rental",
      "Child Seat Services",
    ],
    priceRange: "$$",
    currenciesAccepted: "THB, USD",
    paymentAccepted: "Cash, Bank Transfer",
    openingHours: "Mo-Su 00:00-23:59",
    sameAs: [
      "https://wa.me/66815372657",
      "https://line.me/ti/p/~kampanart-travel",
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Preload critical resources */}
        <link
          rel="preload"
          href="/image/main-banner/1.jpg"
          as="image"
          type="image/jpeg"
        />
        <link
          rel="preload"
          href="/image/seo.png"
          as="image"
          type="image/png"
        />
        {/* DNS prefetch for external resources */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Providers>
          {/* <LoadingComponent /> */}
          <div className="min-h-screen flex flex-col">
            <Navigation />
            <main className="flex-1">{children}</main>
            <Footer />
            <FloatingContactButton />
          </div>
        </Providers>
      </body>
    </html>
  );
}
