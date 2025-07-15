"use client";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from "@heroui/react";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const menuItems = [
  { name: "Home", href: "/" },
  { name: "Airport Transfer", href: "/airport-transfer" },
  { name: "Day Trips", href: "/day-trips" },
  { name: "House for Rent", href: "/house-for-rent" },
  { name: "Contact Us", href: "/contact" },
];

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      className={`transition-all duration-500 ease-in-out ${
        pathname === "/"
          ? isScrolled
            ? "bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-lg fixed top-0 left-0 right-0 z-50"
            : "bg-white/10 backdrop-blur-sm border-b border-white/20 shadow-none fixed top-0 left-0 right-0 z-50"
          : "bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm"
      }`}
      maxWidth="xl"
      height="80px">
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full flex items-center justify-center">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-white">
                <path
                  d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5H6.5C5.84 5 5.28 5.42 5.08 6.01L3 12V20C3 20.55 3.45 21 4 21H5C5.55 21 6 20.55 6 20V19H18V20C18 20.55 18.45 21 19 21H20C20.55 21 21 20.55 21 20V12L18.92 6.01ZM6.5 16C5.67 16 5 15.33 5 14.5S5.67 13 6.5 13 8 13.67 8 14.5 7.33 16 6.5 16ZM17.5 16C16.67 16 16 15.33 16 14.5S16.67 13 17.5 13 19 13.67 19 14.5 18.33 16 17.5 16ZM5 11L6.5 6.5H17.5L19 11H5Z"
                  fill="currentColor"
                />
                <circle cx="12" cy="9" r="2" fill="white" />
                <circle cx="12" cy="9" r="1" fill="#3B82F6" />
              </svg>
            </div>
            <div>
              <div
                className={`font-bold text-xl transition-colors ${
                  pathname === "/" && !isScrolled
                    ? "text-white"
                    : "text-gray-900"
                }`}>
                Phuket Child Seat
              </div>
              <div
                className={`text-xs transition-colors ${
                  pathname === "/" && !isScrolled
                    ? "text-white/80"
                    : "text-gray-500"
                }`}>
                Safe Travel Services
              </div>
            </div>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-8" justify="center">
        {menuItems.map((item) => (
          <NavbarItem key={item.href} isActive={pathname === item.href}>
            <Link
              href={item.href}
              className={`font-semibold text-lg transition-colors relative ${
                pathname === item.href
                  ? pathname === "/" && !isScrolled
                    ? "text-white"
                    : "text-blue-600"
                  : pathname === "/" && !isScrolled
                  ? "text-white/90 hover:text-white"
                  : "text-gray-700 hover:text-blue-600"
              }`}>
              {item.name}
              {pathname === item.href && (
                <div
                  className={`absolute -bottom-1 left-0 right-0 h-0.5 rounded-full ${
                    pathname === "/" && !isScrolled ? "bg-white" : "bg-blue-600"
                  }`}></div>
              )}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <Button
            as={Link}
            href="/contact"
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-6 py-2"
            size="md">
            Book Now
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className="bg-white/95 backdrop-blur-md">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.name}-${index}`}>
            <Link
              href={item.href}
              className={`w-full font-semibold text-lg py-3 ${
                pathname === item.href ? "text-blue-600" : "text-gray-700"
              }`}
              size="lg">
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
        <NavbarMenuItem>
          <Button
            as={Link}
            href="/contact"
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold w-full mt-4">
            Book Now
          </Button>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
