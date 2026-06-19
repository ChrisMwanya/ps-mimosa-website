"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, Search } from "lucide-react";
import Image from "next/image";
import { ThemeToggle } from "./ThemeToggle";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 10);
  });

  const links = [
    { name: "Prédications", href: "#messages" },
    { name: "Ministères", href: "#ministeres" },
    { name: "Jésus", href: "#jesus" },
    { name: "PS Mimosas", href: "#about" },
    { name: "Contacts", href: "#footer" },
  ];

  return (
    <motion.header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        "bg-background text-foreground",
        isScrolled ? "shadow-md" : ""
      )}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Left: Menu & Logo */}
          <div className="flex items-center">
            <button className="text-foreground hover:text-foreground/80 transition-colors mr-2">
              <Menu size={28} strokeWidth={1.5} />
            </button>
            <Link href="/" className="font-bold tracking-tight flex items-center text-foreground">
              <Image 
                src="/identity/logo.png" 
                alt="Logo Parole du Salut Mimosa" 
                width={60} 
                height={60} 
                className="w-14 h-14 object-contain"
              />
              <div className="flex flex-col leading-none ml-2">
                <span className="font-bold text-[17px]">Parole du Salut</span>
                <span className="font-medium text-[10px] tracking-[0.2em] text-foreground/60 uppercase mt-0.5">Mimosa</span>
              </div>
            </Link>
          </div>
          
          {/* Center: Search */}
          <div className="hidden md:flex flex-1 max-w-xl mx-8">
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search size={16} className="text-foreground/50" />
              </div>
              <input 
                type="text" 
                placeholder="Search" 
                className="block w-full bg-transparent border border-border rounded-full py-2.5 pl-11 pr-4 text-sm placeholder-foreground/50 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
              />
            </div>
          </div>

          {/* Right: Links & Profile */}
          <div className="hidden lg:flex items-center space-x-7">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-[15px] font-medium text-foreground/90 hover:text-primary transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <ThemeToggle />
          </div>
        </div>
      </div>
    </motion.header>
  );
}
