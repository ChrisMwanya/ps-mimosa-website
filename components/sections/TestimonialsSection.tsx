"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "J'ai trouvé bien plus qu'une église, j'ai trouvé une famille qui m'a soutenu dans les moments les plus sombres de ma vie. Jésus a restauré mon foyer.",
    name: "Marie & Paul",
    role: "Membres depuis 3 ans",
  },
  {
    quote: "L'enseignement pratique de la Parole a complètement changé ma perspective sur le travail et mes relations. Je vis ma foi au quotidien.",
    name: "Thomas L.",
    role: "Jeune professionnel",
  },
  {
    quote: "Arrivée seule dans cette ville, j'ai été accueillie avec une chaleur incroyable. Je sais maintenant que Dieu a un plan parfait pour ma vie.",
    name: "Sarah M.",
    role: "Étudiante",
  }
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground tracking-tight">Des vies transformées</h2>
          <p className="text-lg text-muted-foreground">
            Découvrez comment la grâce de Dieu agit concrètement dans la vie de nos membres.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testi, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-secondary p-8 rounded-3xl relative"
            >
              <Quote size={40} className="text-primary/20 absolute top-6 left-6" />
              <p className="text-foreground relative z-10 text-lg italic mb-8 mt-4 leading-relaxed">
                &quot;{testi.quote}&quot;
              </p>
              <div>
                <h4 className="font-bold text-foreground">{testi.name}</h4>
                <p className="text-sm text-muted-foreground">{testi.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
