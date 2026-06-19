"use client";

import { motion } from "framer-motion";
import { Users, Music, HandHeart, BookOpen, MessageCircleHeart } from "lucide-react";

const cards = [
  {
    title: "Accueil Chaleureux",
    description: "Vous êtes ici chez vous. Notre équipe est là pour vous recevoir avec le sourire.",
    icon: <HandHeart size={32} />,
    color: "bg-orange-100 text-orange-600",
  },
  {
    title: "Louange Vivante",
    description: "Des moments profonds et dynamiques pour exprimer notre amour à Dieu.",
    icon: <Music size={32} />,
    color: "bg-blue-100 text-blue-600",
  },
  {
    title: "Une Famille",
    description: "Bâtissez des relations authentiques au travers de nos groupes de maison.",
    icon: <Users size={32} />,
    color: "bg-green-100 text-green-600",
  },
  {
    title: "Enseignement",
    description: "La Parole de Dieu expliquée simplement, pour être vécue au quotidien.",
    icon: <BookOpen size={32} />,
    color: "bg-purple-100 text-purple-600",
  },
  {
    title: "Prière",
    description: "Nous croyons au pouvoir de l'intercession pour transformer les vies.",
    icon: <MessageCircleHeart size={32} />,
    color: "bg-rose-100 text-rose-600",
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function CommunitySection() {
  return (
    <section id="about" className="py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground tracking-tight">Plus qu'une église, une famille.</h2>
          <p className="text-lg text-secondary-foreground/80">
            Dès l'instant où vous franchissez nos portes, nous voulons que vous ressentiez l'amour de Dieu et la chaleur de notre communauté.
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {cards.map((card, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className={`bg-background rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${index === cards.length - 1 && cards.length % 3 !== 0 ? 'lg:col-span-1 lg:col-start-2' : ''}`}
            >
              <div className={`inline-flex p-4 rounded-2xl mb-6 ${card.color}`}>
                {card.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">{card.title}</h3>
              <p className="text-muted-foreground">{card.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
