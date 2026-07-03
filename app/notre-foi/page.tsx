"use client";

import { motion, Variants } from "framer-motion";
import {
  BookOpen,
  Cross,
  Flame,
  Crown,
  Users,
  ShieldCheck,
  Heart,
  Sparkles,
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
/*  Data                                              */
/* ────────────────────────────────────────────────── */

interface BeliefItem {
  icon: React.ElementType;
  title: string;
  summary: string;
  verses: string[];
  details: string[];
}

const beliefs: BeliefItem[] = [
  {
    icon: Crown,
    title: "Un seul Dieu en trois personnes",
    summary:
      "Nous croyons en un seul Dieu éternellement existant en trois personnes distinctes : le Père, le Fils et le Saint-Esprit, égaux en nature, en puissance et en gloire.",
    verses: [
      "Matthieu 28:19",
      "2 Corinthiens 13:13",
      "Deutéronome 6:4",
    ],
    details: [
      "Le Père est le Créateur souverain de toutes choses, source de tout amour et de toute vie.",
      "Le Fils, Jésus-Christ, est la Parole faite chair, vrai Dieu et vrai homme, né de la vierge Marie.",
      "Le Saint-Esprit est la personne divine qui convainc, régénère, sanctifie et donne la puissance aux croyants.",
    ],
  },
  {
    icon: BookOpen,
    title: "La Bible, Parole infaillible de Dieu",
    summary:
      "Nous croyons que la Bible, composée de l'Ancien et du Nouveau Testament, est la Parole de Dieu inspirée, infaillible et suffisante — notre seule règle de foi et de conduite.",
    verses: [
      "2 Timothée 3:16-17",
      "2 Pierre 1:20-21",
      "Psaume 119:105",
    ],
    details: [
      "Les Écritures sont inspirées par Dieu dans leur totalité et sans erreur dans les manuscrits originaux.",
      "La Bible est la norme suprême par laquelle toute conduite humaine, toute opinion et tout enseignement doivent être évalués.",
      "Le Saint-Esprit illumine le cœur du croyant pour comprendre et appliquer la Parole de Dieu.",
    ],
  },
  {
    icon: Cross,
    title: "Le salut par la grâce, en Jésus-Christ seul",
    summary:
      "Nous croyons que le salut est un don gratuit de Dieu, reçu par la foi en Jésus-Christ qui est mort pour nos péchés et ressuscité le troisième jour.",
    verses: [
      "Éphésiens 2:8-9",
      "Romains 10:9-10",
      "Jean 3:16",
      "Actes 4:12",
    ],
    details: [
      "Tous les êtres humains sont pécheurs et séparés de Dieu. Aucune œuvre humaine ne peut nous justifier devant Lui.",
      "Jésus-Christ, le Fils unique de Dieu, a pris sur Lui nos péchés à la croix, offrant le seul sacrifice parfait et suffisant.",
      "Quiconque se repent de ses péchés et met sa foi en Jésus-Christ reçoit le pardon, la vie éternelle et devient enfant de Dieu.",
    ],
  },
  {
    icon: Flame,
    title: "Le Saint-Esprit et ses dons",
    summary:
      "Nous croyons au baptême et à la puissance du Saint-Esprit qui équipe chaque croyant de dons spirituels pour l'édification de l'Église et le témoignage dans le monde.",
    verses: [
      "Actes 1:8",
      "1 Corinthiens 12:4-11",
      "Galates 5:22-23",
    ],
    details: [
      "Le Saint-Esprit habite en chaque croyant dès le moment de sa conversion et le scelle pour le jour de la rédemption.",
      "Les dons de l'Esprit — prophétie, guérison, langues, discernement, et bien d'autres — sont accordés selon la volonté souveraine de Dieu pour aujourd'hui.",
      "Le fruit de l'Esprit — amour, joie, paix, patience, bonté, bienveillance, fidélité, douceur, maîtrise de soi — est le signe visible d'une vie transformée.",
    ],
  },
  {
    icon: Users,
    title: "L'Église, Corps de Christ",
    summary:
      "Nous croyons que l'Église est le Corps de Christ, composé de tous les rachetés. L'Église locale est le lieu où les croyants grandissent ensemble dans la foi, l'amour et le service.",
    verses: [
      "Éphésiens 4:11-16",
      "Hébreux 10:24-25",
      "Actes 2:42-47",
    ],
    details: [
      "L'Église universelle rassemble tous ceux qui, en tout lieu et en tout temps, ont mis leur foi en Jésus-Christ.",
      "L'Église locale est appelée à pratiquer le baptême d'eau et la Sainte Cène comme ordonnances du Seigneur.",
      "Chaque membre est appelé à servir avec les dons qu'il a reçus, dans l'unité et l'amour fraternel.",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Le retour de Jésus-Christ",
    summary:
      "Nous croyons au retour personnel, visible et glorieux de Jésus-Christ. Il reviendra pour juger les vivants et les morts, et établir Son règne éternel.",
    verses: [
      "Actes 1:11",
      "1 Thessaloniciens 4:16-17",
      "Apocalypse 21:1-5",
    ],
    details: [
      "Jésus-Christ reviendra corporellement et visiblement, comme Il l'a promis, et tout genou fléchira devant Lui.",
      "Les croyants ressusciteront pour la vie éternelle avec Dieu dans un nouveau ciel et une nouvelle terre.",
      "Ce monde brisé sera restauré : plus de larmes, plus de douleur, plus de mort. Dieu fera toutes choses nouvelles.",
    ],
  },
];

/* ────────────────────────────────────────────────── */
/*  Component                                         */
/* ────────────────────────────────────────────────── */

export default function NotreFoiPage() {
  return (
    <div className="bg-background min-h-screen">
      {/* ──── Hero ──── */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70 z-10" />
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1504052434569-70ad5836ab65?q=80&w=2070&auto=format&fit=crop')",
            }}
          />
        </div>

        {/* Content */}
        <div className="relative z-20 max-w-4xl mx-auto px-4 text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
            <p className="text-sm md:text-base uppercase tracking-[0.3em] text-white/70 font-medium mb-6">
              Ce que nous croyons
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-8 leading-tight">
              Notre Foi
            </h1>
            <p className="text-lg md:text-2xl text-white/85 font-light max-w-2xl mx-auto leading-relaxed">
              Enracinés dans la Parole de Dieu, fondés sur l'amour de
              Jésus-Christ, guidés par le Saint-Esprit.
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

      {/* ──── Introduction ──── */}
      <section className="py-24 md:py-32 bg-background relative">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <Heart
              className="w-12 h-12 text-primary mx-auto mb-8"
              strokeWidth={1.5}
            />
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-8 tracking-tight">
              Pourquoi une confession de foi ?
            </h2>
            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed mb-6">
              Nous sommes une église chrétienne évangélique. Notre foi ne repose
              pas sur des traditions humaines, mais sur la révélation de Dieu
              dans la Bible. Ce document résume les vérités fondamentales que
              nous confessons ensemble et qui guident notre vie, notre adoration
              et notre mission.
            </p>
            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
              Chaque point de doctrine ci-dessous est ancré dans les Écritures.
              Nous vous invitons à les lire, à les méditer et, surtout, à
              rencontrer Celui qui est au centre de tout :{" "}
              <strong>Jésus-Christ</strong>.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ──── Beliefs Grid ──── */}
      <section className="py-20 md:py-28 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10"
          >
            {beliefs.map((belief) => (
              <motion.article
                key={belief.title}
                variants={staggerItem}
                className="group relative bg-background rounded-3xl p-8 md:p-10 shadow-sm hover:shadow-xl border border-border/50 transition-all duration-500 overflow-hidden"
              >
                {/* Watermark icon */}
                <belief.icon
                  className="absolute -right-6 -bottom-6 w-48 h-48 opacity-[0.03] group-hover:opacity-[0.06] group-hover:scale-110 transition-all duration-700 pointer-events-none"
                  strokeWidth={0.8}
                />

                <div className="relative z-10">
                  {/* Icon + Title */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                      <belief.icon
                        className="w-6 h-6 text-primary"
                        strokeWidth={1.5}
                      />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-foreground tracking-tight leading-tight pt-1">
                      {belief.title}
                    </h3>
                  </div>

                  {/* Summary */}
                  <p className="text-foreground/75 leading-relaxed mb-6">
                    {belief.summary}
                  </p>

                  {/* Detail bullets */}
                  <ul className="space-y-3 mb-8">
                    {belief.details.map((detail, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-sm text-foreground/70 leading-relaxed"
                      >
                        <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary/60" />
                        {detail}
                      </li>
                    ))}
                  </ul>

                  {/* Scripture references */}
                  <div className="flex flex-wrap gap-2">
                    {belief.verses.map((verse) => (
                      <span
                        key={verse}
                        className="inline-block text-xs font-medium px-3 py-1.5 rounded-full bg-primary/10 text-primary tracking-wide"
                      >
                        {verse}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ──── Central Verse ──── */}
      <section className="py-24 md:py-32 bg-primary text-primary-foreground overflow-hidden relative">
        {/* Decorative blobs */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/5 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <Sparkles
              className="w-12 h-12 text-primary-foreground/60 mx-auto mb-8"
              strokeWidth={1.5}
            />
            <blockquote className="text-2xl md:text-4xl font-serif italic leading-relaxed text-white mb-8">
              «&nbsp;Car Dieu a tant aimé le monde qu'il a donné son Fils unique, afin
              que quiconque croit en lui ne périsse point, mais qu'il ait la vie
              éternelle.&nbsp;»
            </blockquote>
            <p className="text-lg text-primary-foreground/70 font-medium">
              — Jean 3:16
            </p>
          </motion.div>
        </div>
      </section>

      {/* ──── Additional Convictions ──── */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-foreground tracking-tight mb-6">
              Nos convictions pratiques
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Au-delà des doctrines fondamentales, voici les convictions qui
              façonnent notre vie communautaire au quotidien.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-6"
          >
            {[
              {
                title: "La prière transforme",
                text: "Nous croyons que la prière est notre première ressource, pas la dernière. Elle change les circonstances, mais surtout, elle nous change nous.",
              },
              {
                title: "La louange est un mode de vie",
                text: "L'adoration ne se limite pas au dimanche. Elle est l'expression quotidienne de notre gratitude envers Dieu pour qui Il est et ce qu'Il a fait.",
              },
              {
                title: "L'évangélisation est la mission de chacun",
                text: "Tout chrétien est appelé à partager la bonne nouvelle de Jésus-Christ — non par obligation, mais par amour pour ceux qui ne le connaissent pas encore.",
              },
              {
                title: "La sainteté est un chemin, pas une destination",
                text: "Nous ne prétendons pas être parfaits. Nous sommes des pécheurs sauvés par grâce, en transformation continue par l'œuvre du Saint-Esprit.",
              },
              {
                title: "L'unité dans la diversité",
                text: "L'Église est une famille composée de personnes de toutes origines, cultures et parcours de vie — unis par la foi en un seul Seigneur, un seul baptême, un seul Dieu.",
              },
            ].map((item) => (
              <motion.div
                key={item.title}
                variants={staggerItem}
                className="group bg-secondary/40 hover:bg-secondary/60 rounded-2xl p-6 md:p-8 transition-all duration-300 border border-border/30"
              >
                <h3 className="text-lg md:text-xl font-bold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-foreground/70 leading-relaxed">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ──── CTA ──── */}
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
              Vous avez des questions ?
            </h3>
            <p className="text-foreground/70 max-w-2xl mx-auto text-lg leading-relaxed">
              La foi n'est pas un saut dans le vide — c'est une confiance
              fondée sur la vérité de Dieu. Si vous voulez en savoir plus,
              discuter de ces convictions ou simplement poser vos questions,
              nous serions honorés de vous accueillir.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
              <Link
                href="/jesus"
                className="flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-bold rounded-full shadow-lg hover:bg-primary/90 hover:shadow-xl transition-all hover:-translate-y-1"
              >
                Découvrir Jésus <ArrowRight size={18} />
              </Link>
              <Link
                href="/#footer"
                className="flex items-center justify-center gap-2 px-8 py-4 bg-background text-foreground font-bold rounded-full shadow-sm border border-border hover:bg-secondary/80 transition-all hover:-translate-y-1"
              >
                Nous contacter
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
