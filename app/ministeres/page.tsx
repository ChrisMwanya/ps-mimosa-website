"use client";

import { motion } from "framer-motion";
import { ministries } from "@/lib/data/ministries";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export default function MinisteresPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-32 bg-primary text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/50 z-10" />
          <div 
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=2070&auto=format&fit=crop')" }}
          />
        </div>
        
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Jésus prend soin de votre Famille
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            L'Église n'est pas seulement un lieu de rassemblement, c'est la famille de Dieu en action. À travers nos différents départements, nous croyons que Jésus Christ Lui-même vient répondre aux besoins spécifiques de chaque membre de votre foyer. Que vous soyez parent, jeune, enfant ou célibataire, Il a prévu un espace pour vous restaurer et vous faire grandir.
          </motion.p>
        </div>
      </section>

      {/* Grid Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ministries.map((ministry, index) => (
              <motion.div
                key={ministry.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={cn(
                  "relative rounded-3xl p-8 md:p-10 overflow-hidden flex flex-col justify-between group min-h-[350px] shadow-sm hover:shadow-xl transition-all duration-300 border border-border/50",
                  ministry.className,
                  ministry.id === "adoration" ? "lg:col-span-2" : "",
                  ministry.id === "priere" ? "lg:col-span-1" : ""
                )}
              >
                {/* Background Watermark Icon */}
                <ministry.icon 
                  className="absolute -right-8 -bottom-8 w-64 h-64 opacity-[0.05] transform group-hover:scale-110 transition-transform duration-700 pointer-events-none" 
                  strokeWidth={1}
                />
                
                <div className="relative z-10 flex flex-col h-full">
                  <div>
                    <p className="text-xs md:text-sm font-medium mb-3 opacity-80 tracking-wider uppercase">
                      {ministry.label}
                    </p>
                    <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 leading-tight">
                      {ministry.title}
                    </h3>
                  </div>
                  
                  <div className="mt-auto">
                    <Link 
                      href={`/ministeres/${ministry.id}`}
                      className="inline-flex items-center text-sm font-bold hover:opacity-80 transition-opacity mt-8 w-fit group/btn bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm"
                    >
                      Découvrir ce ministère <ChevronRight size={16} className="ml-1 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
