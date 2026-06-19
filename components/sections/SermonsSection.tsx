"use client";

import { motion } from "framer-motion";
import { PlayCircle } from "lucide-react";

const sermons = [
  {
    id: 1,
    title: "La foi qui déplace les montagnes",
    series: "Série : Les Fondements",
    date: "Dimanche dernier",
    thumbnail: "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?q=80&w=2070&auto=format&fit=crop",
    link: "#"
  },
  {
    id: 2,
    title: "Restaurés par Sa Grâce",
    series: "Série : Nouvelle Création",
    date: "Il y a 2 semaines",
    thumbnail: "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?q=80&w=2070&auto=format&fit=crop",
    link: "#"
  },
  {
    id: 3,
    title: "Vivre dans l'Esprit",
    series: "Série : Le Saint-Esprit",
    date: "Il y a 3 semaines",
    thumbnail: "https://images.unsplash.com/photo-1447023029226-ef8f6b52e3ea?q=80&w=2071&auto=format&fit=crop",
    link: "#"
  }
];

export default function SermonsSection() {
  return (
    <section id="messages" className="py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground tracking-tight">Messages récents</h2>
            <p className="text-lg text-secondary-foreground/80">
              Écoutez ou réécoutez nos dernières prédications pour nourrir votre foi.
            </p>
          </div>
          <a href="#" className="px-6 py-3 bg-background text-foreground rounded-full font-medium shadow-sm hover:shadow-md transition-all">
            Voir tous les messages
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sermons.map((sermon, index) => (
            <motion.a
              key={sermon.id}
              href={sermon.link}
              className="group block"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative aspect-video rounded-2xl overflow-hidden mb-4 shadow-sm group-hover:shadow-xl transition-all duration-300">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url('${sermon.thumbnail}')` }}
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                  <PlayCircle size={64} className="text-white opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all" />
                </div>
              </div>
              <p className="text-sm text-primary font-medium mb-1">{sermon.series} • {sermon.date}</p>
              <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">{sermon.title}</h3>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
