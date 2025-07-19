import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Phuket House for Rent - Garden Style Resort in Laguna Area",
  description:
    "Garden house style resort for rent in prime Thalang location, Phuket. Family-friendly accommodation near Laguna complex, Bangtao Beach, and golf courses. Daily and weekly rental available with transportation services.",
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
    "Phuket house rental",
    "Laguna Phuket accommodation",
    "Thalang house for rent",
    "Bangtao Beach rental",
    "family house Phuket",
    "garden house Phuket",
    "Phuket vacation rental",
    "Surin Beach accommodation",
    "Layan Beach rental",
    "golf course accommodation Phuket",
    "family accommodation Thailand",
    "Phuket resort style house",
    "weekly rental Phuket",
    "daily rental Phuket",
  ],
  openGraph: {
    title: "Phuket House for Rent - Garden Style Resort in Laguna Area",
    description:
      "Garden house style resort for rent in prime Thalang location, Phuket. Family-friendly accommodation near Laguna complex and beaches.",
    url: "https://kids-onboard.com/house-for-rent",
    images: [
      {
        url: "/image/house-for-rent/og-house-rental.jpg",
        width: 1200,
        height: 630,
        alt: "Phuket Garden House for Rent - Laguna Area",
      },
    ],
  },
  twitter: {
    title: "Phuket House for Rent - Garden Style Resort in Laguna Area",
    description:
      "Garden house style resort for rent in prime Thalang location, Phuket. Family-friendly accommodation near Laguna complex.",
  },
  alternates: {
    canonical: "https://kids-onboard.com/house-for-rent",
  },
};

export default function HouseForRentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
