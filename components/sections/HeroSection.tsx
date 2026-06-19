"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ChevronRight, ChevronLeft, Navigation, Calendar, PlayCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const slides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1557683311-eac922347aa1?q=80&w=2029&auto=format&fit=crop",
    mainTitle: "Bienvenue À<br />Parole du Salut",
    subTitle: "Bienvenue à Parole du Salut Mimosa",
    subText: "Voyez ce que Dieu peut faire au travers de vous.",
    primaryBtn: { text: "Nous rejoindre", href: "#cultes" },
    secondaryBtn: { text: "Trouver l'itinéraire", href: "#about", icon: <Navigation size={18} /> },
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2070&auto=format&fit=crop",
    mainTitle: "Retraite des<br />Jeunes 2026",
    subTitle: "Un moment inoubliable",
    subText: "Rejoignez-nous du 12 au 14 Août pour une rencontre transformatrice.",
    primaryBtn: { text: "S'inscrire maintenant", href: "#evenements" },
    secondaryBtn: { text: "Voir le programme", href: "#evenements", icon: <Calendar size={18} /> },
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?q=80&w=2070&auto=format&fit=crop",
    mainTitle: "La foi qui déplace<br />les montagnes",
    subTitle: "Dernier message",
    subText: "Revivez le message puissant de ce dimanche.",
    primaryBtn: { text: "Regarder sur YouTube", href: "https://youtube.com", icon: <PlayCircle size={18} /> },
    secondaryBtn: { text: "Tous les messages", href: "#messages" },
  }
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev >= slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev <= 0 ? slides.length - 1 : prev - 1));
  };

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(nextSlide, 8000);
    return () => clearInterval(timer);
  }, []);

  const slide = slides[currentSlide] || slides[0];

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-background pt-20 transition-colors duration-300">
      <div className="relative w-full h-full p-0 sm:p-2 md:p-4">
        <div className="relative w-full h-full sm:rounded-lg overflow-hidden bg-background">
          
          <AnimatePresence>
            <motion.div
              key={currentSlide}
              className="absolute inset-0 z-0"
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            >
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url('${slide.image}')` }}
              >
                {/* Theme-aware gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-background/20" />
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Left Huge Text */}
          <div className="absolute inset-0 z-10 flex items-center justify-start pointer-events-none px-6 md:px-12 lg:px-24">
            <AnimatePresence mode="wait">
              <motion.h1 
                key={currentSlide}
                className="text-[12vw] sm:text-7xl md:text-8xl lg:text-[110px] font-bold text-foreground text-left tracking-tighter leading-[0.85] max-w-4xl"
                dangerouslySetInnerHTML={{ __html: slide.mainTitle }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6 }}
              />
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 hidden sm:flex">
            <button 
              onClick={prevSlide}
              className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-background/20 backdrop-blur-md flex items-center justify-center text-foreground hover:bg-background/40 transition-colors border border-foreground/10 shadow-sm"
            >
              <ChevronLeft size={24} />
            </button>
          </div>
          
          <div className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 hidden sm:flex">
            <button 
              onClick={nextSlide}
              className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-background/20 backdrop-blur-md flex items-center justify-center text-foreground hover:bg-background/40 transition-colors border border-foreground/10 shadow-sm"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Bottom Content Container */}
          <div className="absolute bottom-8 md:bottom-12 inset-x-0 z-20 px-6 md:px-12 flex flex-col lg:flex-row lg:items-end justify-between gap-6 md:gap-8">
            {/* Bottom Left: Title & Subtitle */}
            <div className="text-left overflow-hidden max-w-2xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2 tracking-tight">{slide.subTitle}</h2>
                  <p className="text-foreground/80 text-base md:text-lg">{slide.subText}</p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Bottom Right: Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 md:gap-4 shrink-0 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 md:gap-4 shrink-0 w-full"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <Link 
                    href={slide.primaryBtn.href}
                    className="w-full sm:w-auto px-6 md:px-8 py-3.5 bg-primary text-primary-foreground rounded-full font-bold text-[15px] hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                    target={slide.primaryBtn.href.startsWith("http") ? "_blank" : undefined}
                    rel={slide.primaryBtn.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  >
                    {slide.primaryBtn.icon}
                    {slide.primaryBtn.text}
                  </Link>
                  <Link 
                    href={slide.secondaryBtn.href}
                    className="w-full sm:w-auto px-6 md:px-8 py-3.5 bg-secondary text-secondary-foreground rounded-full font-bold text-[15px] hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                  >
                    {slide.secondaryBtn.icon}
                    {slide.secondaryBtn.text}
                  </Link>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Carousel Dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
            {slides.map((_, idx) => (
              <button 
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={cn(
                  "h-1.5 rounded-full transition-all duration-300",
                  idx === currentSlide ? "w-6 bg-foreground" : "w-1.5 bg-foreground/30 hover:bg-foreground/50"
                )}
              />
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
}
