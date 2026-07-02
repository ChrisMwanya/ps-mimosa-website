"use client";

import { motion, Variants } from "framer-motion";
import { Heart, HandHeart, Sparkles, ArrowRight, MessageCircle } from "lucide-react";
import Link from "next/link";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

export default function JesusPage() {
  return (
    <div className="bg-background min-h-screen">
      
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/40 z-10" />
          <div 
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1490730141103-6cac27aaab94?q=80&w=2070&auto=format&fit=crop')" }}
          />
        </div>
        
        <div className="relative z-20 max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-6 leading-tight">
              Tu n'es pas arrivé ici <br /> par hasard.
            </h1>
            <p className="text-xl md:text-3xl text-white/90 font-light mb-12">
              Il t'attendait.
            </p>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="animate-bounce mt-12"
            >
              <div className="w-[1px] h-24 bg-white/50 mx-auto" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Le Cœur du Père */}
      <section className="py-24 md:py-32 bg-background relative">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <Heart className="w-12 h-12 text-primary mx-auto mb-8" strokeWidth={1.5} />
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-8 tracking-tight">
              Le cœur d'un Père qui cherche son enfant
            </h2>
            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed mb-6">
              Peut-être as-vous l'impression d'être allé trop loin, d'avoir fait trop d'erreurs, ou de ne plus mériter l'amour de Dieu. La vérité, c'est que Dieu ne vous regarde pas avec des yeux de condamnation. 
            </p>
            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
              Il vous regarde avec la tendresse absolue d'un Père qui voit son enfant perdu et qui n'a qu'un seul désir : courir vers lui, le serrer dans ses bras et le ramener à la maison. <strong>Rien de ce que vous avez fait ne peut épuiser Son amour pour vous.</strong>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Le Bon Berger (Seeking the lost) */}
      <section className="py-24 md:py-32 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <motion.div 
              className="md:w-1/2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                <div 
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: "url('https://images.unsplash.com/photo-1544427920-c49ccf08c221?q=80&w=2089&auto=format&fit=crop')" }}
                />
              </div>
            </motion.div>

            <motion.div 
              className="md:w-1/2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <HandHeart className="w-10 h-10 text-primary mb-6" strokeWidth={1.5} />
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Jésus est venu pour vous
              </h2>
              <div className="space-y-6 text-lg text-foreground/80 leading-relaxed">
                <p>
                  Jésus n'est pas venu pour ceux qui pensent être parfaits. Il a Lui-même dit : <em>"Ce ne sont pas les gens en bonne santé qui ont besoin de médecin, mais les malades."</em>
                </p>
                <p>
                  Il est le Bon Berger qui laisse les 99 autres brebis en sécurité pour partir à la recherche de celle qui s'est égarée, blessée par les ronces de la vie. Si vous êtes fatigué, affligé, brisé par le poids de la culpabilité ou des épreuves, c'est précisément <strong>vous</strong> qu'Il est venu chercher.
                </p>
                <blockquote className="border-l-4 border-primary pl-6 py-2 my-8 italic text-xl text-foreground font-medium">
                  "Venez à moi, vous tous qui êtes fatigués et chargés, et je vous donnerai du repos." <br/>
                  <span className="text-sm font-normal text-foreground/60 mt-2 block">— Matthieu 11:28</span>
                </blockquote>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* La Prière du Salut */}
      <section className="py-24 md:py-32 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <Sparkles className="w-12 h-12 text-primary-foreground/80 mx-auto mb-8" strokeWidth={1.5} />
            <h2 className="text-3xl md:text-5xl font-bold mb-8">
              L'invitation est ouverte
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-12 max-w-2xl mx-auto leading-relaxed">
              Il n'y a pas de rituel compliqué. Jésus est à la porte de votre cœur, et Il frappe. Tout ce que vous avez à faire, c'est de Lui ouvrir. Si vous souhaitez faire la paix avec Dieu aujourd'hui, vous pouvez faire cette prière, de tout votre cœur :
            </p>

            <div className="bg-background/10 backdrop-blur-sm p-8 md:p-12 rounded-3xl border border-white/20 text-left md:text-center max-w-3xl mx-auto shadow-2xl">
              <p className="text-lg md:text-2xl font-serif italic leading-relaxed text-white">
                "Seigneur Jésus, je reconnais que j'ai vécu loin de Toi et que j'ai besoin de Ton pardon. <br/><br/>
                Je crois que Tu es mort sur la croix pour mes péchés et que Tu es ressuscité pour me donner la vie éternelle. <br/><br/>
                Aujourd'hui, j'ouvre la porte de mon cœur. Je T'accepte comme mon Sauveur et mon Seigneur. Prends ma vie, guéris mes blessures, et fais de moi la personne que Tu veux que je sois. Amen."
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Action Buttons (Contact) */}
      <section className="py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="space-y-8"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-foreground">
              Nous voulons cheminer avec vous
            </h3>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              Si vous avez fait cette prière aujourd'hui, ou si vous traversez un moment difficile et avez simplement besoin d'une oreille attentive, notre équipe est là pour vous.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
              <Link 
                href="/contact?sujet=nouveau-depart" 
                className="flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-bold rounded-full shadow-lg hover:bg-primary/90 hover:shadow-xl transition-all hover:-translate-y-1"
              >
                J'ai donné ma vie à Jésus <ArrowRight size={18} />
              </Link>
              <Link 
                href="/contact?sujet=besoin-priere" 
                className="flex items-center justify-center gap-2 px-8 py-4 bg-secondary text-secondary-foreground font-bold rounded-full shadow-sm hover:bg-secondary/80 transition-all hover:-translate-y-1"
              >
                <MessageCircle size={18} /> J'ai besoin de prière
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
