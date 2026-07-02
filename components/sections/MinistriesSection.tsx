"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight, Flame, Heart, Smile, Music, HandHeart } from "lucide-react";
import { cn } from "@/lib/utils";

import { ministries } from "@/lib/data/ministries";

export default function MinistriesSection() {
  return (
    <section id="ministeres" className="py-24 bg-background text-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4 tracking-tight"
          >
            Une place pour vous et votre famille
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Rejoignez nos petits groupes, impliquez-vous et découvrez des moyens pour toute votre famille de grandir dans la foi.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ministries.map((ministry, index) => (
            <motion.div
              key={ministry.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={cn(
                "relative rounded-3xl p-8 md:p-10 overflow-hidden flex flex-col justify-between group min-h-[320px]",
                ministry.className
              )}
            >
              {/* Background Watermark Icon */}
              <ministry.icon 
                className="absolute -right-8 -bottom-8 w-64 h-64 opacity-[0.05] transform group-hover:scale-110 transition-transform duration-700 pointer-events-none" 
                strokeWidth={1}
              />
              
              <div className="relative z-10">
                <p className="text-xs md:text-sm font-medium mb-4 opacity-80 tracking-wider uppercase">
                  {ministry.label}
                </p>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight max-w-[95%] md:max-w-[85%] leading-tight">
                  {ministry.title}
                </h3>
              </div>

              <Link 
                href={`/ministeres/${ministry.id}`}
                className="relative z-10 inline-flex items-center text-sm font-bold hover:opacity-80 transition-opacity mt-12 w-fit group/btn"
              >
                En savoir plus <ChevronRight size={16} className="ml-1 group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
