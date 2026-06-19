"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function FinalCall() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2070&auto=format&fit=crop')" }}
      >
        <div className="absolute inset-0 bg-primary/90 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Il y a une place pour vous.
          </h2>
          <p className="text-xl text-white/90 mb-10 leading-relaxed font-light">
            Nous serions honorés de vous accueillir ce dimanche. Vous n'avez pas besoin d'être parfait pour venir, venez simplement comme vous êtes.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="#cultes" 
              className="px-8 py-4 bg-white text-primary rounded-full font-bold text-lg hover:bg-white/90 transition-transform hover:scale-105 active:scale-95 shadow-xl"
            >
              Planifier ma visite
            </Link>
            <Link 
              href="#contact" 
              className="px-8 py-4 bg-black/20 text-white backdrop-blur-sm border border-white/30 rounded-full font-bold text-lg hover:bg-black/40 transition-transform hover:scale-105 active:scale-95"
            >
              Nous contacter
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
