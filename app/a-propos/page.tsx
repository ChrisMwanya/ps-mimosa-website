"use client";

import { motion, Variants } from "framer-motion";
import {
  Heart,
  Eye,
  Target,
  Users,
  BookOpen,
  MapPin,
  Clock,
  Navigation,
  ChevronDown,
  ArrowRight,
  Flame,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

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
/*  Data                                              */
/* ────────────────────────────────────────────────── */

const values = [
  {
    icon: BookOpen,
    title: "Fidélité à la Parole",
    description:
      "La Bible est notre fondement. Chaque enseignement, chaque décision et chaque vision est ancrée dans les Écritures.",
  },
  {
    icon: Heart,
    title: "L'amour comme signature",
    description:
      "Nous croyons que l'amour de Christ se manifeste dans l'accueil, la générosité et le soin mutuel entre frères et sœurs.",
  },
  {
    icon: Users,
    title: "La communauté comme famille",
    description:
      "L'Église n'est pas un bâtiment, c'est une famille. Nous grandissons ensemble, nous pleurons ensemble, nous célébrons ensemble.",
  },
  {
    icon: Flame,
    title: "La puissance du Saint-Esprit",
    description:
      "Nous croyons à la manifestation des dons de l'Esprit et à une vie chrétienne animée par Sa puissance transformatrice.",
  },
  {
    icon: Target,
    title: "L'évangélisation",
    description:
      "Chaque membre est un ambassadeur du Royaume. Notre mission est de porter la bonne nouvelle là où la lumière manque.",
  },
  {
    icon: Eye,
    title: "L'excellence dans le service",
    description:
      "Tout ce que nous faisons pour Dieu mérite le meilleur de nous-mêmes — dans la louange, l'accueil, la prédication et le service.",
  },
];

const timeline = [
  {
    year: "Les débuts",
    title: "Une vision, une prière",
    description:
      "Parole du Salut Mimosa est née d'une vision profonde : bâtir une communauté où chaque personne, peu importe son parcours, puisse rencontrer Jésus-Christ et être transformée par Son amour.",
  },
  {
    year: "La croissance",
    title: "Une famille qui grandit",
    description:
      "Ce qui a commencé comme un petit groupe de prière s'est transformé en une église vivante et dynamique. Des familles, des jeunes et des enfants ont trouvé leur place dans cette famille spirituelle.",
  },
  {
    year: "Aujourd'hui",
    title: "Une église en mouvement",
    description:
      "Aujourd'hui, Parole du Salut Mimosa est une communauté engagée dans la louange, l'enseignement de la Parole, le service et l'amour du prochain. Nous continuons à croire que Dieu a de grands projets pour nous.",
  },
  {
    year: "Demain",
    title: "La vision continue",
    description:
      "Nous croyons que le meilleur est à venir. Notre vision est de voir des vies transformées, des familles restaurées et une génération entière impactée par l'Évangile de Jésus-Christ.",
  },
];

/* ────────────────────────────────────────────────── */
/*  Component                                         */
/* ────────────────────────────────────────────────── */

export default function AProposPage() {
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
                "url('https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2070&auto=format&fit=crop')",
            }}
          />
        </div>

        <div className="relative z-20 max-w-4xl mx-auto px-4 text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
            <p className="text-sm md:text-base uppercase tracking-[0.3em] text-white/70 font-medium mb-6">
              Qui nous sommes
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-8 leading-tight">
              Parole du Salut
              <br />
              <span className="text-white/80 font-light">Mimosa</span>
            </h1>
            <p className="text-lg md:text-2xl text-white/85 font-light max-w-2xl mx-auto leading-relaxed">
              Une église chaleureuse, une famille spirituelle.
              <br />
              Découvrez notre histoire, notre vision et notre cœur.
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

      {/* ──── Introduction / Qui sommes-nous ──── */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* Image */}
            <motion.div
              className="lg:w-1/2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1557683311-eac922347aa1?q=80&w=2029&auto=format&fit=crop')",
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
              <Heart
                className="w-10 h-10 text-primary mb-6"
                strokeWidth={1.5}
              />
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-8 tracking-tight">
                Plus qu'une église,
                <br />
                une famille.
              </h2>
              <div className="space-y-6 text-lg text-foreground/80 leading-relaxed">
                <p>
                  <strong className="text-foreground">
                    Parole du Salut Mimosa
                  </strong>{" "}
                  est une église chrétienne évangélique qui croit en la
                  puissance transformatrice de l'Évangile de Jésus-Christ. Nous
                  sommes convaincus qu'une rencontre authentique avec Jésus peut
                  changer une vie, restaurer une famille et impacter toute une
                  communauté.
                </p>
                <p>
                  Dès l'instant où vous franchissez nos portes, nous voulons que
                  vous ressentiez l'amour de Dieu et la chaleur de notre
                  communauté. Ici, il n'y a pas de place pour le jugement —
                  seulement pour la grâce, l'accueil et la croissance ensemble.
                </p>
                <p>
                  Que vous soyez en recherche de sens, en quête de guérison, ou
                  simplement curieux, vous êtes les bienvenus{" "}
                  <strong className="text-foreground">
                    exactement tel que vous êtes
                  </strong>
                  .
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ──── Vision & Mission ──── */}
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
              Notre vision & notre mission
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Guidés par Dieu, animés par l'amour, envoyés pour servir.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Vision */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="relative bg-primary text-primary-foreground rounded-3xl p-10 md:p-12 overflow-hidden shadow-xl"
            >
              <Eye
                className="absolute -right-6 -bottom-6 w-48 h-48 opacity-[0.08] pointer-events-none"
                strokeWidth={0.8}
              />
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-6">
                  <Eye className="w-7 h-7" strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-6">
                  Notre Vision
                </h3>
                <p className="text-lg text-primary-foreground/90 leading-relaxed mb-4">
                  Voir des vies transformées par la puissance de l'Évangile, des
                  familles restaurées par la grâce de Dieu, et une génération
                  entière qui se lève pour porter la lumière de Christ dans un
                  monde qui en a besoin.
                </p>
                <blockquote className="border-l-4 border-white/30 pl-5 py-2 italic text-primary-foreground/80 text-base mt-6">
                  «&nbsp;Vous êtes la lumière du monde. Une ville située sur une
                  montagne ne peut être cachée.&nbsp;»
                  <span className="block text-sm font-normal mt-1 not-italic text-primary-foreground/60">
                    — Matthieu 5:14
                  </span>
                </blockquote>
              </div>
            </motion.div>

            {/* Mission */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="relative bg-background rounded-3xl p-10 md:p-12 overflow-hidden shadow-xl border border-border/50"
            >
              <Target
                className="absolute -right-6 -bottom-6 w-48 h-48 opacity-[0.04] pointer-events-none"
                strokeWidth={0.8}
              />
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <Target
                    className="w-7 h-7 text-primary"
                    strokeWidth={1.5}
                  />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                  Notre Mission
                </h3>
                <ul className="space-y-4 text-foreground/80 text-lg">
                  <li className="flex items-start gap-3">
                    <span className="mt-2 flex-shrink-0 w-2 h-2 rounded-full bg-primary" />
                    <span>
                      <strong className="text-foreground">Atteindre</strong> les
                      perdus avec l'amour inconditionnel de Jésus-Christ
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 flex-shrink-0 w-2 h-2 rounded-full bg-primary" />
                    <span>
                      <strong className="text-foreground">Enseigner</strong> la
                      Parole de Dieu de manière claire, pratique et puissante
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 flex-shrink-0 w-2 h-2 rounded-full bg-primary" />
                    <span>
                      <strong className="text-foreground">Équiper</strong>{" "}
                      chaque croyant pour vivre sa foi au quotidien et servir
                      avec ses dons
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 flex-shrink-0 w-2 h-2 rounded-full bg-primary" />
                    <span>
                      <strong className="text-foreground">Envoyer</strong> des
                      disciples qui impacteront leur famille, leur quartier et
                      leur ville
                    </span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ──── Notre Histoire (Timeline) ──── */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeInUp}
            className="text-center mb-20"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-foreground tracking-tight mb-6">
              Notre histoire
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              D'une simple prière à une communauté vivante — voici comment Dieu
              nous a conduits.
            </p>
          </motion.div>

          {/* Timeline */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="relative"
          >
            {/* Vertical line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                variants={staggerItem}
                className={`relative flex flex-col md:flex-row items-start mb-16 last:mb-0 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Dot */}
                <div className="absolute left-6 md:left-1/2 w-3 h-3 rounded-full bg-primary border-4 border-background -translate-x-1/2 mt-2 z-10 shadow-sm" />

                {/* Content */}
                <div
                  className={`ml-16 md:ml-0 md:w-1/2 ${
                    index % 2 === 0
                      ? "md:pr-16 md:text-right"
                      : "md:pl-16 md:text-left"
                  }`}
                >
                  <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-primary bg-primary/10 px-3 py-1.5 rounded-full mb-3">
                    {item.year}
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">
                    {item.title}
                  </h3>
                  <p className="text-foreground/70 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ──── Nos Valeurs ──── */}
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
              Nos valeurs
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Ces convictions guident chacun de nos pas, chaque ministère et
              chaque décision.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {values.map((value) => (
              <motion.div
                key={value.title}
                variants={staggerItem}
                className="group bg-background rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-border/50"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <value.icon
                    className="w-7 h-7 text-primary"
                    strokeWidth={1.5}
                  />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-foreground/70 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ──── Infos Pratiques (Cultes + Localisation) ──── */}
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
              Informations pratiques
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Tout ce qu'il faut savoir pour nous rendre visite.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Horaires */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="bg-secondary/40 rounded-3xl p-8 md:p-10 border border-border/30"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-bold text-foreground">
                  Horaires des cultes
                </h3>
              </div>

              <div className="space-y-4">
                {[
                  {
                    name: "1er Culte",
                    time: "Dimanche à 08h00",
                    description: "Culte de louange et d'adoration",
                  },
                  {
                    name: "2ème Culte",
                    time: "Dimanche à 10h30",
                    description: "Culte principal avec enseignement",
                  },
                  {
                    name: "Culte d'Enseignement",
                    time: "Mercredi à 17h30",
                    description: "Étude biblique approfondie",
                  },
                ].map((service) => (
                  <div
                    key={service.name}
                    className="bg-background rounded-2xl p-5 border border-border/50"
                  >
                    <div className="flex justify-between items-start mb-1">
                      <h4 className="font-bold text-foreground">
                        {service.name}
                      </h4>
                      <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                        {service.time}
                      </span>
                    </div>
                    <p className="text-sm text-foreground/60">
                      {service.description}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Localisation */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="bg-secondary/40 rounded-3xl p-8 md:p-10 border border-border/30"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-bold text-foreground">
                  Où nous trouver
                </h3>
              </div>

              <div className="space-y-6">
                <div className="bg-background rounded-2xl p-5 border border-border/50">
                  <p className="text-foreground/80 leading-relaxed mb-4">
                    123 Avenue des Mimosas,
                    <br />
                    Quartier, Ville, Pays
                  </p>
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary/80 transition-colors"
                  >
                    <Navigation size={18} />
                    Obtenir l'itinéraire
                  </a>
                </div>

                {/* Placeholder map */}
                <div className="relative h-48 rounded-2xl overflow-hidden bg-muted">
                  <div
                    className="absolute inset-0 bg-cover bg-center opacity-80"
                    style={{
                      backgroundImage:
                        "url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop')",
                    }}
                  />
                  <div className="absolute inset-0 bg-primary/20 flex items-center justify-center">
                    <div className="bg-background/90 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg">
                      <span className="text-sm font-semibold text-foreground flex items-center gap-2">
                        <MapPin size={16} className="text-primary" />
                        Voir sur Google Maps
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ──── CTA ──── */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="space-y-8"
          >
            <h3 className="text-2xl md:text-4xl font-bold">
              Votre place est déjà réservée.
            </h3>
            <p className="text-primary-foreground/85 max-w-2xl mx-auto text-lg leading-relaxed">
              Peu importe d'où vous venez ou ce que vous traversez, vous êtes
              les bienvenus ici. Venez comme vous êtes — et laissez Dieu faire
              le reste.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
              <Link
                href="/jesus"
                className="flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary font-bold rounded-full shadow-lg hover:bg-white/90 hover:shadow-xl transition-all hover:-translate-y-1"
              >
                Découvrir Jésus <ArrowRight size={18} />
              </Link>
              <Link
                href="/notre-foi"
                className="flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white font-bold rounded-full border border-white/20 hover:bg-white/20 transition-all hover:-translate-y-1"
              >
                Notre confession de foi
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
