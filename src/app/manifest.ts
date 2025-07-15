import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Phuket Child Seat - Safe Travel Services",
    short_name: "Phuket Child Seat",
    description:
      "Professional travel services in Phuket with imported Britax child seats. Airport transfers, day trips, and tours with maximum safety for families.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#3B82F6",
    categories: ["travel", "transportation", "family", "tourism"],
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
