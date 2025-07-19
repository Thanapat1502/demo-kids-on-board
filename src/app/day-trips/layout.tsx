import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Phuket Day Trips & Tours with Child Seats - Family Island Adventures",
  description:
    "Family-friendly day trips and tours from Phuket with child seat safety. Visit Phi Phi Island, Phang Nga Bay, Similan Islands with imported Britax child seats. Professional guides and safe transportation included.",
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
    "Phuket day trips",
    "Phi Phi Island tours",
    "Phang Nga Bay tours",
    "Similan Islands tours",
    "family tours Phuket",
    "Phuket tours with child seats",
    "James Bond Island tour",
    "Phuket island hopping",
    "family adventures Thailand",
    "safe tours Phuket",
    "Phuket cultural tours",
    "Big Buddha Phuket tour",
    "Chalong Temple tour",
    "Phuket Old Town tour",
    "elephant sanctuary Phuket",
  ],
  openGraph: {
    title: "Phuket Day Trips & Tours with Child Seats - Family Island Adventures",
    description:
      "Family-friendly day trips and tours from Phuket with child seat safety. Visit Phi Phi Island, Phang Nga Bay, Similan Islands with professional guides.",
    url: "https://kids-onboard.com/day-trips",
    images: [
      {
        url: "/image/day-trips/og-day-trips.jpg",
        width: 1200,
        height: 630,
        alt: "Phuket Day Trips and Tours with Child Seats",
      },
    ],
  },
  twitter: {
    title: "Phuket Day Trips & Tours with Child Seats - Family Island Adventures",
    description:
      "Family-friendly day trips and tours from Phuket with child seat safety. Visit Phi Phi Island, Phang Nga Bay, Similan Islands.",
  },
  alternates: {
    canonical: "https://kids-onboard.com/day-trips",
  },
};

export default function DayTripsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
