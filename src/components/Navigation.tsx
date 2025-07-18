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

  // Pages that should have transparent navbar
  const transparentNavPages = [
    "/",
    "/airport-transfer",
    "/day-trips",
    "/house-for-rent",
    "/contact",
  ];
  const isTransparentPage = transparentNavPages.includes(pathname);

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
      className={`transition-all duration-700 ease-out ${isTransparentPage
        ? isScrolled
          ? "bg-white/90 backdrop-blur-xl border-b border-gray-100/50 shadow-sm fixed top-0 left-0 right-0 z-50"
          : "bg-transparent backdrop-blur-none border-b border-white/10 shadow-none fixed top-0 left-0 right-0 z-50"
        : "bg-white/90 backdrop-blur-xl border-b border-gray-100/50 shadow-sm"
        }`}
      maxWidth="xl"
      height="70px">
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className={`sm:hidden ${isTransparentPage && !isScrolled
            ? "text-white"
            : "text-gray-900"
            }`}
        />
        <NavbarBrand>
          <Link href="/" className="flex items-center">
            <div>
              <div
                className={`font-light text-xl md:text-2xl tracking-wide transition-colors duration-500 ${isTransparentPage && !isScrolled
                  ? "text-white"
                  : "text-gray-900"
                  }`}>
                Phuket Childseat
              </div>
            </div>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-12" justify="center">
        {menuItems.map((item) => (
          <NavbarItem key={item.href} isActive={pathname === item.href}>
            <Link
              href={item.href}
              className={`font-normal text-sm uppercase tracking-widest transition-all duration-300 relative group ${pathname === item.href
                ? isTransparentPage && !isScrolled
                  ? "text-white"
                  : "text-gray-900"
                : isTransparentPage && !isScrolled
                  ? "text-white/80 hover:text-white"
                  : "text-gray-600 hover:text-gray-900"
                }`}>
              {item.name}
              <div
                className={`absolute -bottom-1 left-0 h-px transition-all duration-300 ${pathname === item.href
                  ? "w-full"
                  : "w-0 group-hover:w-full"
                  } ${isTransparentPage && !isScrolled
                    ? "bg-white/60"
                    : "bg-gray-400"
                  }`}></div>
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <button
            onClick={() => window.location.href = '/contact'}
            className={`group relative overflow-hidden backdrop-blur-md font-medium text-sm uppercase tracking-wider px-5 md:px-10 py-3 transition-all duration-300 border shadow-lg hover:shadow-xl transform hover:scale-105 ${isTransparentPage && !isScrolled
              ? "bg-white/20 border-white/50 text-white hover:bg-white/30 hover:border-white/70"
              : "bg-blue-600/90 border-blue-600 text-white hover:bg-blue-700/90 hover:border-blue-700"
              }`}>
            <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
            <div className={`absolute inset-0 bg-gradient-to-t from-black/5 to-white/10`}></div>
            <span className="relative z-10">Book Now</span>
          </button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className="bg-white/90 backdrop-blur-xl border-t border-gray-100/50">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.name}-${index}`}>
            <Link
              href={item.href}
              className={`w-full font-light text-base uppercase tracking-wider py-4 transition-colors duration-300 ${pathname === item.href ? "text-gray-900" : "text-gray-600 hover:text-gray-900"
                }`}
              size="lg">
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
        <NavbarMenuItem>
          <button
            onClick={() => window.location.href = '/contact'}
            className="group relative overflow-hidden bg-blue-600 border border-blue-600 text-white hover:bg-blue-700 hover:border-blue-700 font-medium text-sm uppercase tracking-wider w-full py-4 mt-6 transition-all duration-300 shadow-lg hover:shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-white/10"></div>
            <span className="relative z-10">Book Now</span>
          </button>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
