"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const ministries = [
  {
    title: "Enfants",
    description: "Un espace sécurisé et joyeux où vos enfants apprennent à connaître Jésus à leur niveau.",
    image: "https://images.unsplash.com/photo-1540479859555-17af45c78602?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Jeunes",
    description: "Une communauté vibrante pour les ados et jeunes adultes, centrée sur l'identité en Christ.",
    image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Femmes",
    description: "Des rencontres pour s'encourager, prier et grandir ensemble dans la foi.",
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2069&auto=format&fit=crop",
  },
  {
    title: "Hommes",
    description: "Bâtir des hommes forts, des pères responsables et des leaders selon le cœur de Dieu.",
    image: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&w=2070&auto=format&fit=crop",
  }
];

export default function MinistriesSection() {
  return (
    <section id="ministeres" className="py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground tracking-tight">Nos Ministères</h2>
          <p className="text-lg text-secondary-foreground/80">
            Il y a une place pour chacun à Parole du Salut. Découvrez comment vous impliquer et grandir avec des personnes qui partagent votre étape de vie.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ministries.map((ministry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative h-80 rounded-3xl overflow-hidden cursor-pointer"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url('${ministry.image}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-8 transition-colors group-hover:from-black/90">
                <h3 className="text-2xl font-bold text-white mb-2">{ministry.title}</h3>
                <p className="text-white/80 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0">
                  {ministry.description}
                </p>
                <div className="flex items-center text-primary font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                  En savoir plus <ArrowRight size={16} className="ml-2" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
