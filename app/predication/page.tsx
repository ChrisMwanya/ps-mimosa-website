"use client";

import { motion } from "framer-motion";
import { PlayCircle, Search, Filter } from "lucide-react";

import { sermons } from "@/lib/data/sermons";

export default function PredicationPage() {
  return (
    <div className="pt-20">
      {/* Hero Section for the page */}
      <section className="relative py-24 bg-primary text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/60 z-10" />
          <div 
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1438283173091-5dbf5c5a3206?q=80&w=2070&auto=format&fit=crop')" }}
          />
        </div>
        
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Le Seigneur vous parle
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Écoutez, réécoutez et partagez les messages partagés lors de nos cultes pour nourrir et fortifier votre foi au quotidien.
          </motion.p>
        </div>
      </section>

      {/* Filters and Search Section */}
      <section className="py-8 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
            {/* Search */}
            <div className="relative w-full md:max-w-md">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search size={18} className="text-foreground/50" />
              </div>
              <input 
                type="text" 
                placeholder="Rechercher un message, un thème..." 
                className="block w-full bg-secondary/50 border border-border rounded-full py-3 pl-12 pr-4 text-sm placeholder-foreground/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
              />
            </div>

            {/* Filters */}
            <div className="flex gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
              <button className="flex items-center gap-2 px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium hover:bg-secondary/80 transition-colors whitespace-nowrap">
                <Filter size={16} />
                Toutes les séries
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium hover:bg-secondary/80 transition-colors whitespace-nowrap">
                Orateurs
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium hover:bg-secondary/80 transition-colors whitespace-nowrap">
                Année
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Grid Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {sermons.map((sermon, index) => (
              <motion.a
                key={sermon.id}
                href={`/predication/${sermon.id}`}
                className="group block flex flex-col h-full"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="relative aspect-video rounded-2xl overflow-hidden mb-5 shadow-md group-hover:shadow-xl transition-all duration-300">
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url('${sermon.thumbnail}')` }}
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                    <PlayCircle size={64} className="text-white opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  
                  {/* Duration badge if needed */}
                  <div className="absolute bottom-3 right-3 bg-black/70 text-white text-xs font-medium px-2 py-1 rounded backdrop-blur-sm">
                    45:00
                  </div>
                </div>
                
                <div className="flex-1 flex flex-col">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-sm text-primary font-semibold tracking-wide uppercase">{sermon.series}</p>
                    <p className="text-xs text-foreground/60">{sermon.date}</p>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors leading-tight mb-3">
                    {sermon.title}
                  </h3>
                  <div className="mt-auto pt-4 border-t border-border flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-secondary-foreground font-bold text-xs">
                      {sermon.preacher.charAt(0)}
                    </div>
                    <p className="text-sm text-foreground/80 font-medium">{sermon.preacher}</p>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Load More Button */}
          <div className="mt-16 flex justify-center">
            <button className="px-8 py-3 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-full font-medium transition-colors">
              Charger plus de messages
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
