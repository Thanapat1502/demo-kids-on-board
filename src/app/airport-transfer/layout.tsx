import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Airport Transfer Phuket with Child Seats - Safe Family Transport",
  description:
    "Professional airport transfer service in Phuket with imported Britax child seats. Safe transport to/from Phuket Airport to hotels in Phuket, Khao Lak, Krabi, and Koh Lanta. Licensed TAT operator with travel insurance.",
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
    "Phuket airport transfer",
    "airport taxi Phuket",
    "Phuket airport transport child seat",
    "family airport transfer Thailand",
    "Britax child seats Phuket",
    "safe airport transfer Phuket",
    "Phuket to Khao Lak transfer",
    "Phuket to Krabi transfer",
    "Phuket to Koh Lanta transfer",
    "rear facing child seats airport",
    "TAT licensed airport transfer",
    "Kampanart Travel airport",
  ],
  openGraph: {
    title: "Airport Transfer Phuket with Child Seats - Safe Family Transport",
    description:
      "Professional airport transfer service in Phuket with imported Britax child seats. Safe transport to/from Phuket Airport to hotels in Phuket, Khao Lak, Krabi, and Koh Lanta.",
    url: "https://kids-onboard.com/airport-transfer",
    images: [
      {
        url: "/image/airport-tranfer/og-airport-transfer.jpg",
        width: 1200,
        height: 630,
        alt: "Phuket Airport Transfer with Child Seats",
      },
    ],
  },
  twitter: {
    title: "Airport Transfer Phuket with Child Seats - Safe Family Transport",
    description:
      "Professional airport transfer service in Phuket with imported Britax child seats. Safe transport to/from Phuket Airport.",
  },
  alternates: {
    canonical: "https://kids-onboard.com/airport-transfer",
  },
};

export default function AirportTransferLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
