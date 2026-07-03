"use client";

import { motion, Variants } from "framer-motion";
import {
  Heart,
  BookOpen,
  Users,
  MessageCircle,
  Quote,
  ChevronDown,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const staggerItem: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

/* ────────────────────────────────────────────────── */
/*  Component                                         */
/* ────────────────────────────────────────────────── */

export default function PasteursPage() {
  return (
    <div className="bg-background min-h-screen">
      {/* ──── Hero ──── */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70 z-10" />
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=2232&auto=format&fit=crop')",
            }}
          />
        </div>

        <div className="relative z-20 max-w-4xl mx-auto px-4 text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
            <p className="text-sm md:text-base uppercase tracking-[0.3em] text-white/70 font-medium mb-6">
              Notre couple pastoral
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-8 leading-tight">
              Vos Pasteurs
            </h1>
            <p className="text-lg md:text-2xl text-white/85 font-light max-w-2xl mx-auto leading-relaxed">
              Appelés par Dieu, dévoués à la famille. Découvrez le cœur de ceux
              qui veillent sur notre communauté.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="mt-16"
          >
            <ChevronDown
              className="w-8 h-8 text-white/50 mx-auto animate-bounce"
              strokeWidth={1.5}
            />
          </motion.div>
        </div>
      </section>

      {/* ──── Le Couple Pastoral ──── */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* Photo */}
            <motion.div
              className="lg:w-1/2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <div className="relative">
                <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl">
                  <div
                    className="w-full h-full bg-cover bg-center"
                    style={{
                      backgroundImage:
                        "url('https://images.unsplash.com/photo-1516575334481-f85287c2c82d?q=80&w=2070&auto=format&fit=crop')",
                    }}
                  />
                </div>
                {/* Decorative accent */}
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/10 rounded-3xl -z-10" />
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/5 rounded-3xl -z-10" />
              </div>
            </motion.div>

            {/* Text */}
            <motion.div
              className="lg:w-1/2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-primary bg-primary/10 px-4 py-2 rounded-full mb-6">
                <Heart size={14} />
                Couple Pastoral
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
                Pasteur & Maman
              </h2>
              <p className="text-lg text-primary font-semibold mb-8">
                Fondateurs de Parole du Salut Mimosa
              </p>

              <div className="space-y-6 text-lg text-foreground/80 leading-relaxed">
                <p>
                  Animés par une passion profonde pour Dieu et pour les âmes,
                  notre couple pastoral dirige l'Église Parole du Salut Mimosa
                  avec amour, sagesse et dévouement. Leur vision est simple mais
                  puissante :{" "}
                  <strong className="text-foreground">
                    voir chaque personne connaître Jésus-Christ personnellement
                    et grandir dans sa foi
                  </strong>
                  .
                </p>
                <p>
                  Ensemble, ils forment un couple uni par la grâce de Dieu,
                  engagé dans le service de l'Église et de la communauté. Leur
                  ministère est fondé sur la Parole de Dieu, la prière et
                  l'amour inconditionnel pour chaque membre de la famille
                  spirituelle.
                </p>
                <p>
                  Que ce soit dans la prédication, le conseil pastoral, la prière
                  pour les malades ou l'accompagnement des familles, ils sont
                  présents et disponibles pour chacun.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ──── Citation / Parole du Pasteur ──── */}
      <section className="py-24 md:py-32 bg-primary text-primary-foreground overflow-hidden relative">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/5 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <Quote
              className="w-12 h-12 text-primary-foreground/40 mx-auto mb-8"
              strokeWidth={1.5}
            />
            <blockquote className="text-xl md:text-3xl font-serif italic leading-relaxed text-white mb-8 max-w-3xl mx-auto">
              «&nbsp;Notre plus grand désir est que chaque personne qui entre dans
              cette église puisse rencontrer Jésus, être transformée par Son
              amour, et repartir avec un nouveau souffle pour sa vie. Vous n'êtes
              pas ici par hasard — Dieu a un plan merveilleux pour vous.&nbsp;»
            </blockquote>
            <p className="text-lg text-primary-foreground/70 font-medium">
              — Pasteur, Parole du Salut Mimosa
            </p>
          </motion.div>
        </div>
      </section>

      {/* ──── Le Cœur de Leur Ministère ──── */}
      <section className="py-24 md:py-32 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-foreground tracking-tight mb-6">
              Le cœur de leur ministère
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Plus que des dirigeants, ils sont des serviteurs dévoués à la cause
              de Christ et au bien-être de chaque membre.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              {
                icon: BookOpen,
                title: "La Parole prêchée",
                description:
                  "Un enseignement fidèle, profond et pratique de la Bible, pour équiper chaque croyant à vivre sa foi au quotidien.",
              },
              {
                icon: Heart,
                title: "L'amour pastoral",
                description:
                  "Une porte toujours ouverte, une oreille attentive et un cœur généreux pour ceux qui traversent des moments difficiles.",
              },
              {
                icon: Users,
                title: "La famille d'abord",
                description:
                  "Ils croient fermement que des familles fortes bâtissent une église forte. Le foyer est le premier ministère.",
              },
              {
                icon: MessageCircle,
                title: "La prière et le conseil",
                description:
                  "Un engagement constant dans la prière d'intercession et le conseil biblique pour guider les âmes vers la restauration.",
              },
            ].map((item) => (
              <motion.div
                key={item.title}
                variants={staggerItem}
                className="group bg-background rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-border/50"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <item.icon
                    className="w-7 h-7 text-primary"
                    strokeWidth={1.5}
                  />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ──── Les Collaborateurs (Responsables de départements) ──── */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-foreground tracking-tight mb-6">
              Nos collaborateurs
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Entourant le couple pastoral, une équipe dévouée de responsables de
              départements sert l'église avec passion et excellence.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              {
                name: "Responsable Louange",
                role: "Département Louange & Adoration",
                image: "https://images.unsplash.com/photo-1516280440504-45ea078ffa9f?q=80&w=2070&auto=format&fit=crop",
              },
              {
                name: "Responsable Jeunesse",
                role: "Département des Jeunes",
                image: "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?q=80&w=2070&auto=format&fit=crop",
              },
              {
                name: "Responsable Enfants",
                role: "École du Dimanche (EcoDim)",
                image: "https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=2070&auto=format&fit=crop",
              },
              {
                name: "Responsable Accueil",
                role: "Département Accueil & Protocole",
                image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2069&auto=format&fit=crop",
              },
            ].map((collab, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                className="group relative rounded-2xl overflow-hidden bg-secondary/20 aspect-[3/4]"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url('${collab.image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-bold mb-1">{collab.name}</h3>
                  <p className="text-sm text-white/70 font-medium">
                    {collab.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ──── Un mot pour vous ──── */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
            {/* Image */}
            <motion.div
              className="lg:w-1/2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl">
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1544427920-c49ccfb85579?q=80&w=1932&auto=format&fit=crop')",
                  }}
                />
              </div>
            </motion.div>

            {/* Text */}
            <motion.div
              className="lg:w-1/2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 tracking-tight">
                Un mot personnel pour vous
              </h2>
              <div className="space-y-6 text-lg text-foreground/80 leading-relaxed">
                <p>
                  Si vous lisez ces lignes, c'est que Dieu est en train de faire
                  quelque chose dans votre cœur. Peut-être cherchez-vous une
                  église où vous sentir chez vous. Peut-être traversez-vous une
                  épreuve et avez besoin de soutien. Ou peut-être êtes-vous
                  simplement curieux.
                </p>
                <p>
                  Quelle que soit la raison,{" "}
                  <strong className="text-foreground">
                    nous vous accueillons à bras ouverts
                  </strong>
                  . Notre église est un lieu de grâce, pas de jugement. Un lieu où
                  l'on peut être authentique, poser ses fardeaux et laisser Dieu
                  agir.
                </p>
                <p>
                  Nous serions honorés de vous rencontrer. N'hésitez pas à venir
                  un dimanche ou à nous écrire — nous sommes là pour vous.
                </p>
              </div>

              <blockquote className="border-l-4 border-primary pl-6 py-3 my-8 italic text-foreground/70 text-base">
                «&nbsp;L'Éternel est mon berger : je ne manquerai de rien.&nbsp;»
                <span className="block text-sm font-normal mt-2 not-italic text-foreground/50">
                  — Psaume 23:1
                </span>
              </blockquote>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ──── Prendre rendez-vous ──── */}
      <section className="py-24 bg-secondary/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="space-y-8"
          >
            <h3 className="text-2xl md:text-4xl font-bold text-foreground">
              Envie de rencontrer vos pasteurs ?
            </h3>
            <p className="text-foreground/70 max-w-2xl mx-auto text-lg leading-relaxed">
              Que ce soit pour un échange, un conseil, un temps de prière ou
              simplement pour faire connaissance, notre couple pastoral est
              disponible pour vous. Prenez rendez-vous ou venez nous voir lors
              d'un culte.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
              <Link
                href="/contact"
                className="flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-bold rounded-full shadow-lg hover:bg-primary/90 hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <MessageCircle size={18} />
                Prendre contact
              </Link>
              <Link
                href="/a-propos"
                className="flex items-center justify-center gap-2 px-8 py-4 bg-background text-foreground font-bold rounded-full shadow-sm border border-border hover:bg-secondary/80 transition-all hover:-translate-y-1"
              >
                Découvrir l'église <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
