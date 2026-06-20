"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const events = [
  {
    id: 1,
    title: "Let's Read The Bible",
    subtitle: "A BIBLE STUDY FOR FINDING STRENGTH IN CHRIST",
    image: "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?q=80&w=2000&auto=format&fit=crop",
    link: "#"
  },
  {
    id: 2,
    title: "Soirée de Louange Wash Tour",
    subtitle: "Prenez vos billets",
    image: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&w=2000&auto=format&fit=crop",
    link: "#"
  },
  {
    id: 3,
    title: "Retraite Spirituelle 2026",
    subtitle: "Inscrivez-vous dès maintenant",
    image: "https://images.unsplash.com/photo-1438283173091-5dbf5c5a3206?q=80&w=2000&auto=format&fit=crop",
    link: "#"
  }
];

export default function ConnectEventsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev >= events.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev <= 0 ? events.length - 1 : prev - 1));
  };

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(nextSlide, 8000);
    return () => clearInterval(timer);
  }, []);

  const slide = events[currentSlide] || events[0];

  return (
    <section className="py-12  text-secondary-foreground  overflow-hidden h-[100vh]">
      <div className="w-full h-full mx-auto px-4 sm:px-6 lg:px-8 flex flex-col pb-12">
        <div className="text-center mb-12 shrink-0">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            Plus de façons de rester connecté
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-3xl mx-auto"
          >
            Il y a toujours de nouvelles façons de participer à ce que Dieu fait à travers notre église, y compris les événements, la louange, les moments de communion et bien plus.
          </motion.p>
        </div>

        {/* 3D Peek-a-boo Carousel Container */}
        <div className="relative w-full flex-grow overflow-hidden flex items-center justify-center group">
          {events.map((slide, index) => {
            const offset = index - currentSlide;
            const direction = Math.sign(offset);
            let position = offset;
            
            // Wrap around for infinite effect
            if (Math.abs(offset) > events.length / 2) {
              position = offset - direction * events.length;
            }

            const isActive = position === 0;

            return (
              <motion.div
                key={slide.id}
                initial={false}
                animate={{
                  x: `${position * 105}%`,
                  scale: isActive ? 1 : 0.85,
                  opacity: isActive ? 1 : 0.4,
                  zIndex: isActive ? 20 : 10,
                }}
                transition={{ duration: 1, ease: "easeInOut" }}
                className="absolute w-[80%] md:w-[65%] lg:w-[60%] h-[85%] rounded-2xl md:rounded-[32px] overflow-hidden bg-black shadow-xl"
              >
                <div 
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-80"
                  style={{ backgroundImage: `url('${slide.image}')` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                </div>

                {/* Text Content */}
                <Link href={slide.link} className={cn("absolute inset-0 z-10 block", !isActive && "pointer-events-none")}>
                  <div className="absolute bottom-8 md:bottom-12 left-8 md:left-12 right-8 text-white max-w-3xl">
                    <AnimatePresence mode="wait">
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 20 }}
                          transition={{ duration: 0.5 }}
                          className="flex flex-col items-start"
                        >
                          <h3 className="text-3xl md:text-5xl font-bold mb-3 tracking-tight">{slide.title}</h3>
                          <p className="text-white/80 text-base md:text-lg font-medium mb-6">{slide.subtitle}</p>
                          <span className="inline-flex items-center text-sm font-semibold text-white hover:text-white/80 transition-colors group/cta">
                            Voir détails <ChevronRight size={16} className="ml-1 group-hover/cta:translate-x-1 transition-transform" />
                          </span>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </Link>
              </motion.div>
            );
          })}

          {/* Controls */}
          <div className="absolute left-4 top-1/2 -translate-y-1/2 z-30 opacity-0 group-hover:opacity-100 transition-opacity hidden sm:flex">
            <button 
              onClick={(e) => {
                e.preventDefault();
                prevSlide();
              }}
              className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center text-white hover:bg-black/60 transition-colors border border-white/10"
              aria-label="Previous"
            >
              <ChevronLeft size={24} />
            </button>
          </div>
          
          <div className="absolute right-4 top-1/2 -translate-y-1/2 z-30 opacity-0 group-hover:opacity-100 transition-opacity hidden sm:flex">
            <button 
              onClick={(e) => {
                e.preventDefault();
                nextSlide();
              }}
              className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center text-white hover:bg-black/60 transition-colors border border-white/10"
              aria-label="Next"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Carousel Dots */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-30 flex gap-2">
            {events.map((_, idx) => (
              <button 
                key={idx}
                onClick={(e) => {
                  e.preventDefault();
                  setCurrentSlide(idx);
                }}
                className={cn(
                  "h-1.5 rounded-full transition-all duration-300",
                  idx === currentSlide ? "w-6 bg-foreground" : "w-1.5 bg-foreground/30 hover:bg-foreground/50"
                )}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
