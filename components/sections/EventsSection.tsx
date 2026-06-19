"use client";

import { motion } from "framer-motion";
import { CalendarDays, MapPin } from "lucide-react";

const events = [
  {
    title: "Soirée de Louange & Adoration",
    date: "Vendredi 24 Juin",
    time: "18h30 - 20h30",
    location: "Auditorium Principal",
    category: "Louange",
  },
  {
    title: "Retraite des Jeunes",
    date: "12-14 Août",
    time: "Tout le weekend",
    location: "Centre de Retraite Mont Carmel",
    category: "Jeunes",
  },
  {
    title: "Séminaire sur la Famille",
    date: "Samedi 2 Septembre",
    time: "09h00 - 15h00",
    location: "Salle Polyvalente",
    category: "Enseignement",
  }
];

export default function EventsSection() {
  return (
    <section id="evenements" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground tracking-tight">À venir</h2>
            <p className="text-lg text-muted-foreground">
              Ne manquez pas nos prochains rassemblements et événements spéciaux.
            </p>
          </div>
          <a href="#" className="px-6 py-3 bg-secondary text-secondary-foreground rounded-full font-medium hover:bg-secondary/80 transition-all">
            Voir l'agenda complet
          </a>
        </div>

        <div className="space-y-6">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-secondary hover:bg-white hover:shadow-lg transition-all duration-300 p-6 md:p-8 rounded-2xl flex flex-col md:flex-row gap-6 md:items-center justify-between border border-transparent hover:border-border"
            >
              <div className="flex flex-col md:flex-row gap-6 md:items-center flex-1">
                <div className="bg-background group-hover:bg-primary/10 p-4 rounded-xl text-center min-w-[120px] transition-colors">
                  <div className="text-primary font-bold text-sm uppercase mb-1">{event.category}</div>
                  <div className="text-foreground font-bold">{event.date.split(' ')[0]}</div>
                  <div className="text-muted-foreground text-sm">{event.date.split(' ').slice(1).join(' ')}</div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{event.title}</h3>
                  <div className="flex flex-wrap gap-4 text-muted-foreground text-sm">
                    <span className="flex items-center gap-1"><CalendarDays size={16} /> {event.time}</span>
                    <span className="flex items-center gap-1"><MapPin size={16} /> {event.location}</span>
                  </div>
                </div>
              </div>
              <button className="w-full md:w-auto px-6 py-3 bg-foreground text-background group-hover:bg-primary group-hover:text-primary-foreground rounded-full font-medium transition-colors">
                S'inscrire
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
