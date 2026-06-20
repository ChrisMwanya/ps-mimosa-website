"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight, BookOpen, Heart, Info, User } from "lucide-react";

const options = [
  {
    title: "Ce en quoi nous croyons",
    description: "Découvrez notre confession de foi et les fondements bibliques de notre église.",
    icon: <BookOpen size={24} />,
    linkText: "Notre foi",
    href: "/croyances",
  },
  {
    title: "Donner votre vie à Jésus",
    description: "Prenez la décision la plus importante de votre vie et commencez une nouvelle marche.",
    icon: <Heart size={24} />,
    linkText: "En savoir plus",
    href: "/jesus",
  },
  {
    title: "À propos de nous",
    description: "Apprenez-en plus sur notre vision, notre mission et notre histoire en tant que famille.",
    icon: <Info size={24} />,
    linkText: "Notre histoire",
    href: "/a-propos",
  },
  {
    title: "Rencontrer le pasteur",
    description: "Faites la connaissance de notre équipe pastorale qui guide et sert notre communauté.",
    icon: <User size={24} />,
    linkText: "Voir l'équipe",
    href: "/pasteurs",
  }
];

export default function DiscoverSection() {
  return (
    <section className="bg-background py-24 text-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            Faites le prochain pas.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Peu importe où vous en êtes dans votre parcours spirituel, il y a une place pour vous ici.
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-12 lg:gap-y-0 lg:divide-x divide-border py-12"
        >
          {options.map((option, index) => (
            <div key={index} className="px-6 flex flex-col h-full">
              <div className="text-muted-foreground mb-6">
                {option.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{option.title}</h3>
              <p className="text-muted-foreground mb-8 flex-grow text-sm leading-relaxed">
                {option.description}
              </p>
              <Link 
                href={option.href}
                className="inline-flex items-center text-sm font-semibold hover:text-primary transition-colors group mt-auto"
              >
                {option.linkText} <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 flex justify-center"
        >
          <Link 
            href="/contact"
            className="px-6 py-3 bg-secondary hover:bg-secondary/80 text-secondary-foreground rounded-full text-sm font-medium transition-colors inline-flex items-center"
          >
            Nous contacter <ChevronRight size={16} className="ml-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
