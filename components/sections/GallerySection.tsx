"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const images = [
  {
    src: "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?q=80&w=2073&auto=format&fit=crop",
    className: "col-span-2 row-span-2 md:col-span-2 md:row-span-2",
    alt: "Culte d'adoration"
  },
  {
    src: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2070&auto=format&fit=crop",
    className: "col-span-1 row-span-1 md:col-span-1 md:row-span-1",
    alt: "Communauté de jeunes"
  },
  {
    src: "https://images.unsplash.com/photo-1540479859555-17af45c78602?q=80&w=2070&auto=format&fit=crop",
    className: "col-span-1 row-span-1 md:col-span-1 md:row-span-1",
    alt: "Ministère des enfants"
  },
  {
    src: "https://images.unsplash.com/photo-1470229722913-7c092fbdd59c?q=80&w=2070&auto=format&fit=crop",
    className: "col-span-2 row-span-1 md:col-span-2 md:row-span-1",
    alt: "Groupe d'amis"
  },
  {
    src: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=2070&auto=format&fit=crop",
    className: "col-span-1 row-span-1 md:col-span-1 md:row-span-1",
    alt: "Événement extérieur"
  },
  {
    src: "https://images.unsplash.com/photo-1509315811345-672d83ef2fbc?q=80&w=2070&auto=format&fit=crop",
    className: "col-span-2 row-span-1 md:col-span-2 md:row-span-1",
    alt: "Louange"
  },
  {
    src: "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2069&auto=format&fit=crop",
    className: "col-span-1 row-span-1 md:col-span-1 md:row-span-1",
    alt: "Groupe de femmes"
  }
];

export default function GallerySection() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4 tracking-tight"
          >
            La vie à Parole du Salut
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Découvrez des moments forts de notre communauté, nos cultes et nos événements.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px] md:auto-rows-[250px] grid-flow-dense">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={cn(
                "relative rounded-2xl md:rounded-[32px] overflow-hidden group cursor-pointer",
                image.className
              )}
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url('${image.src}')` }}
                aria-label={image.alt}
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
