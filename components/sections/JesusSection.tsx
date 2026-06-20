"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Heart } from "lucide-react";

export default function JesusSection() {
  return (
    <section id="jesus" className="py-24 bg-background">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-primary/10 rounded-full text-primary">
              <Heart size={40} />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground tracking-tight">
            Il est le cœur de notre message
          </h2>
          <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
            Parce que Dieu n'a pas voulu que tu évolues seul, il t'a envoyé son Fils Jésus. Nous ne prêchons pas une religion, mais une relation. Jésus-Christ est l'espoir de l'humanité, le seul capable de restaurer, de pardonner et de donner un sens véritable à notre existence.
          </p>
          <Link 
            href="/jesus" 
            className="inline-flex items-center justify-center px-8 py-4 bg-foreground text-background rounded-full font-medium hover:bg-foreground/90 transition-all shadow-md hover:shadow-lg"
          >
            Découvrir Jésus
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
