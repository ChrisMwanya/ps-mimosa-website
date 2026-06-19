"use client";

import { motion } from "framer-motion";
import { Clock, MapPin, Navigation } from "lucide-react";

export default function WorshipInfo() {
  return (
    <section id="cultes" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute right-0 top-0 w-1/2 h-full bg-secondary/50 rounded-l-full blur-3xl -z-10 opacity-50" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground tracking-tight">
              Rejoignez-nous ce dimanche
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Venez tel que vous êtes. Nos cultes sont des moments de célébration, de prière et d'enseignement ancrés dans la Bible. Vous y trouverez une ambiance joyeuse et contemporaine.
            </p>
            
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="mt-1 bg-primary/10 p-3 rounded-full text-primary h-fit">
                  <Clock size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Horaires des Cultes</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li><strong className="text-foreground">1er Culte :</strong> Dimanche à 08h00</li>
                    <li><strong className="text-foreground">2ème Culte :</strong> Dimanche à 10h30</li>
                    <li><strong className="text-foreground">Culte d'Enseignement :</strong> Mercredi à 17h30</li>
                  </ul>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="mt-1 bg-primary/10 p-3 rounded-full text-primary h-fit">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Notre Adresse</h3>
                  <p className="text-muted-foreground mb-4">
                    123 Avenue des Mimosas,<br/>
                    Quartier, Ville, Pays
                  </p>
                  <a 
                    href="https://maps.google.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary font-medium hover:text-primary/80 transition-colors"
                  >
                    <Navigation size={18} />
                    Obtenir l'itinéraire
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl"
          >
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1544427920-c49ccfb85579?q=80&w=1932&auto=format&fit=crop')" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
              <p className="text-white text-xl font-medium">Une place vous est réservée.</p>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
