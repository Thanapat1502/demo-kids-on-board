import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/private/",
          "/admin/",
          "/api/",
          "/_next/",
          "/.*\\.json$",
          "/.*\\.xml$",
        ],
        crawlDelay: 1,
      },
      // Allow search engines to crawl important pages
      {
        userAgent: "Googlebot",
        allow: [
          "/",
          "/airport-transfer",
          "/day-trips",
          "/house-for-rent",
          "/contact",
        ],
        disallow: ["/private/", "/admin/", "/api/"],
      },
      {
        userAgent: "Bingbot",
        allow: [
          "/",
          "/airport-transfer",
          "/day-trips",
          "/house-for-rent",
          "/contact",
        ],
        disallow: ["/private/", "/admin/", "/api/"],
      },
    ],
    sitemap: "https://kids-onboard.com/sitemap.xml",
    host: "https://kids-onboard.com",
  };
}
