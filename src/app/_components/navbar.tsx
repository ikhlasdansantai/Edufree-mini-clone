"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Tentang Kami", href: "/not-found" },
    { label: "Kursus", href: "/kursus" },
    { label: "FAQ", href: "/not-found" },
    { label: "Blog", href: "/not-found" },
  ];

  const EnableNavbar = ["/", "/kursus", "/kursus/under-development"];
  const pathName = usePathname();

  return (
    <nav className={`max-w-[90rem] mx-auto px-4 py-8 justify-between item-center text-white ${EnableNavbar.includes(pathName) ? "flex" : "hidden"}`}>
      <div className="w-full flex justify-between items-center">
        <Link href="/" className="font-bold text-2xl cursor-pointer hover:opacity-90">
          [Edufree]
        </Link>
        <ul className="flex justify-between items-center gap-4 mr-10 space-x-4 max-md:hidden">
          {navLinks.map((nav) => (
            <li key={nav.label} className="hover:opacity-80 cursor-pointer">
              <Link href={nav.href}>{nav.label}</Link>
            </li>
          ))}
        </ul>
      </div>
      <Button variant="outline" size={"lg"} className="bg-transparent">
        Login
      </Button>
    </nav>
  );
}
