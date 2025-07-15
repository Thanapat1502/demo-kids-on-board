import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Phuket Child Seat - Book Safe Family Travel Services",
  description:
    "Contact Kampanart Travel for safe family travel services in Phuket. Book airport transfers, day trips, tours, and house rentals with imported Britax child seats. WhatsApp, Line, email, and phone booking available.",
  keywords: [
    "contact Phuket child seat",
    "book Phuket tours",
    "Kampanart Travel contact",
    "Phuket travel booking",
    "WhatsApp booking Phuket",
    "Line booking Thailand",
    "Mr. Kam Phuket",
    "TAT licensed travel agent",
    "Phuket family travel contact",
    "book airport transfer Phuket",
    "Phuket tour operator contact",
    "safe travel booking Thailand",
  ],
  openGraph: {
    title: "Contact Phuket Child Seat - Book Safe Family Travel Services",
    description:
      "Contact Kampanart Travel for safe family travel services in Phuket. Book airport transfers, day trips, tours with imported Britax child seats.",
    url: "https://phuket-childseat.com/contact",
    images: [
      {
        url: "/image/contact/og-contact.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Phuket Child Seat - Kampanart Travel",
      },
    ],
  },
  twitter: {
    title: "Contact Phuket Child Seat - Book Safe Family Travel Services",
    description:
      "Contact Kampanart Travel for safe family travel services in Phuket. Book airport transfers, day trips, tours with child seats.",
  },
  alternates: {
    canonical: "https://phuket-childseat.com/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
