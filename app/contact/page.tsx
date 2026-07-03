"use client";

import { useState } from "react";
import { motion, Variants } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Navigation,
  Send,
  MessageCircle,
  ChevronDown,
  CheckCircle,
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
    transition: { staggerChildren: 0.12 },
  },
};

const staggerItem: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

/* ────────────────────────────────────────────────── */
/*  Data                                              */
/* ────────────────────────────────────────────────── */

const contactCards = [
  {
    icon: MapPin,
    title: "Adresse",
    lines: ["123 Avenue des Mimosas,", "Quartier, Ville, Pays"],
    action: {
      label: "Obtenir l'itinéraire",
      href: "https://maps.google.com",
      icon: Navigation,
      external: true,
    },
  },
  {
    icon: Phone,
    title: "Téléphone",
    lines: ["+123 456 789 000"],
    action: {
      label: "Appeler maintenant",
      href: "tel:+123456789000",
      icon: Phone,
      external: false,
    },
  },
  {
    icon: Mail,
    title: "Email",
    lines: ["contact@paroledusalutmimosa.org"],
    action: {
      label: "Envoyer un email",
      href: "mailto:contact@paroledusalutmimosa.org",
      icon: Mail,
      external: false,
    },
  },
  {
    icon: Clock,
    title: "Horaires des cultes",
    lines: [
      "Dimanche : 08h00 & 10h30",
      "Mercredi : 17h30 (Enseignement)",
    ],
    action: {
      label: "Voir les détails",
      href: "/a-propos",
      icon: Clock,
      external: false,
    },
  },
];

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);
const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);
const YoutubeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg>
);

const socials = [
  {
    name: "Facebook",
    icon: FacebookIcon,
    href: "#",
    color: "hover:bg-blue-600 hover:border-blue-600",
  },
  {
    name: "Instagram",
    icon: InstagramIcon,
    href: "#",
    color: "hover:bg-pink-600 hover:border-pink-600",
  },
  {
    name: "YouTube",
    icon: YoutubeIcon,
    href: "#",
    color: "hover:bg-red-600 hover:border-red-600",
  },
];

const subjects = [
  { value: "", label: "Choisir un sujet" },
  { value: "premiere-visite", label: "Je viens pour la première fois" },
  { value: "nouveau-depart", label: "J'ai donné ma vie à Jésus" },
  { value: "besoin-priere", label: "J'ai besoin de prière" },
  { value: "rejoindre-ministere", label: "Rejoindre un ministère" },
  { value: "question-generale", label: "Question générale" },
  { value: "autre", label: "Autre" },
];

/* ────────────────────────────────────────────────── */
/*  Component                                         */
/* ────────────────────────────────────────────────── */

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <div className="bg-background min-h-screen">
      {/* ──── Hero ──── */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70 z-10" />
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2069&auto=format&fit=crop')",
            }}
          />
        </div>

        <div className="relative z-20 max-w-4xl mx-auto px-4 text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
            <p className="text-sm md:text-base uppercase tracking-[0.3em] text-white/70 font-medium mb-6">
              Parlons ensemble
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-8 leading-tight">
              Contactez-nous
            </h1>
            <p className="text-lg md:text-2xl text-white/85 font-light max-w-2xl mx-auto leading-relaxed">
              Une question, un besoin de prière, ou simplement envie de nous
              connaître ? Nous serions ravis de vous entendre.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="mt-12"
          >
            <ChevronDown
              className="w-8 h-8 text-white/50 mx-auto animate-bounce"
              strokeWidth={1.5}
            />
          </motion.div>
        </div>
      </section>

      {/* ──── Contact Cards ──── */}
      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {contactCards.map((card) => (
              <motion.div
                key={card.title}
                variants={staggerItem}
                className="group bg-secondary/40 hover:bg-secondary/60 rounded-2xl p-6 md:p-8 transition-all duration-300 border border-border/30 flex flex-col"
              >
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  <card.icon
                    className="w-6 h-6 text-primary"
                    strokeWidth={1.5}
                  />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">
                  {card.title}
                </h3>
                <div className="space-y-1 mb-6 flex-grow">
                  {card.lines.map((line, i) => (
                    <p key={i} className="text-foreground/70 text-sm">
                      {line}
                    </p>
                  ))}
                </div>
                <a
                  href={card.action.href}
                  target={card.action.external ? "_blank" : undefined}
                  rel={card.action.external ? "noopener noreferrer" : undefined}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
                >
                  <card.action.icon size={16} />
                  {card.action.label}
                </a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ──── Form + Map ──── */}
      <section className="py-20 md:py-28 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-foreground tracking-tight mb-6">
              Envoyez-nous un message
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Remplissez le formulaire ci-dessous et nous vous répondrons dans
              les plus brefs délais.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-12">
            {/* Form */}
            <motion.div
              className="lg:col-span-3"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              {isSubmitted ? (
                <div className="bg-background rounded-3xl p-10 md:p-14 border border-border/50 shadow-sm text-center">
                  <div className="w-20 h-20 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle
                      className="w-10 h-10 text-green-600 dark:text-green-400"
                      strokeWidth={1.5}
                    />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                    Message envoyé !
                  </h3>
                  <p className="text-foreground/70 text-lg mb-8 max-w-md mx-auto">
                    Merci de nous avoir contactés. Notre équipe vous répondra
                    dans les meilleurs délais. Que Dieu vous bénisse !
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-full hover:bg-primary/90 transition-colors"
                  >
                    Envoyer un autre message
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="bg-background rounded-3xl p-8 md:p-10 border border-border/50 shadow-sm space-y-6"
                >
                  {/* Name row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="firstName"
                        className="block text-sm font-semibold text-foreground mb-2"
                      >
                        Prénom
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        placeholder="Votre prénom"
                        className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border/50 text-foreground placeholder-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="lastName"
                        className="block text-sm font-semibold text-foreground mb-2"
                      >
                        Nom
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                        placeholder="Votre nom"
                        className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border/50 text-foreground placeholder-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-foreground mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="votre@email.com"
                      className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border/50 text-foreground placeholder-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-semibold text-foreground mb-2"
                    >
                      Téléphone{" "}
                      <span className="text-foreground/40 font-normal">
                        (optionnel)
                      </span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="+243 ..."
                      className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border/50 text-foreground placeholder-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                    />
                  </div>

                  {/* Subject */}
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-semibold text-foreground mb-2"
                    >
                      Sujet
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      defaultValue=""
                      className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border/50 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all appearance-none"
                    >
                      {subjects.map((s) => (
                        <option
                          key={s.value}
                          value={s.value}
                          disabled={s.value === ""}
                        >
                          {s.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold text-foreground mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      placeholder="Écrivez votre message ici..."
                      className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border/50 text-foreground placeholder-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-bold rounded-full shadow-lg hover:bg-primary/90 hover:shadow-xl transition-all hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                        Envoi en cours...
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        Envoyer le message
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>

            {/* Sidebar */}
            <motion.div
              className="lg:col-span-2 space-y-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              {/* Map placeholder */}
              <div className="relative h-64 lg:h-80 rounded-3xl overflow-hidden shadow-sm border border-border/50">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop')",
                  }}
                />
                <div className="absolute inset-0 bg-primary/20 flex items-center justify-center">
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-background/90 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg hover:bg-background transition-colors"
                  >
                    <span className="text-sm font-semibold text-foreground flex items-center gap-2">
                      <MapPin size={16} className="text-primary" />
                      Voir sur Google Maps
                    </span>
                  </a>
                </div>
              </div>

              {/* Quick info */}
              <div className="bg-background rounded-3xl p-6 md:p-8 border border-border/50 shadow-sm">
                <h3 className="text-lg font-bold text-foreground mb-5 flex items-center gap-2">
                  <MessageCircle
                    size={20}
                    className="text-primary"
                    strokeWidth={1.5}
                  />
                  Besoin d'aide rapide ?
                </h3>
                <p className="text-foreground/70 text-sm leading-relaxed mb-6">
                  Si vous avez un besoin urgent de prière ou si vous traversez
                  un moment difficile, n'hésitez pas à nous appeler directement.
                  Notre équipe pastorale est là pour vous.
                </p>
                <a
                  href="tel:+123456789000"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-primary/10 text-primary font-semibold rounded-full hover:bg-primary/20 transition-colors text-sm"
                >
                  <Phone size={16} />
                  Appeler le pasteur
                </a>
              </div>

              {/* Socials */}
              <div className="bg-background rounded-3xl p-6 md:p-8 border border-border/50 shadow-sm">
                <h3 className="text-lg font-bold text-foreground mb-5">
                  Suivez-nous
                </h3>
                <div className="flex gap-3">
                  {socials.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.name}
                      className={`w-12 h-12 rounded-full border border-border/50 flex items-center justify-center text-foreground/70 hover:text-white transition-all duration-300 ${social.color}`}
                    >
                      <social.icon />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ──── FAQ rapide ──── */}
      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-foreground tracking-tight mb-6">
              Questions fréquentes
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Voici les réponses aux questions les plus courantes.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-4"
          >
            {[
              {
                q: "Dois-je être chrétien pour venir ?",
                a: "Absolument pas ! Nos portes sont ouvertes à tous, peu importe votre parcours, votre croyance ou votre situation. Vous êtes les bienvenus tel que vous êtes.",
              },
              {
                q: "Combien de temps dure un culte ?",
                a: "Nos cultes durent généralement entre 1h30 et 2h. Ils comprennent un temps de louange, de prière et un enseignement biblique. Une garderie est disponible pour les enfants.",
              },
              {
                q: "Comment puis-je m'impliquer dans un ministère ?",
                a: "Nous serions ravis de vous accueillir dans l'un de nos ministères ! Rendez-vous sur notre page Ministères ou contactez-nous directement pour en discuter.",
              },
              {
                q: "Y a-t-il un parking disponible ?",
                a: "Oui, un parking est disponible à proximité de l'église. Notre équipe d'accueil sera là pour vous guider dès votre arrivée.",
              },
              {
                q: "Proposez-vous des activités pour les enfants et les jeunes ?",
                a: "Oui ! Nous avons des ministères dédiés aux enfants (École du Dimanche) et aux jeunes. Chaque tranche d'âge a son propre programme adapté.",
              },
            ].map((faq, index) => (
              <motion.details
                key={index}
                variants={staggerItem}
                className="group bg-secondary/40 rounded-2xl border border-border/30 overflow-hidden"
              >
                <summary className="flex items-center justify-between p-6 cursor-pointer text-foreground font-bold text-lg hover:text-primary transition-colors list-none">
                  {faq.q}
                  <ChevronDown
                    size={20}
                    className="flex-shrink-0 ml-4 text-foreground/40 group-open:rotate-180 transition-transform duration-300"
                  />
                </summary>
                <div className="px-6 pb-6 -mt-1">
                  <p className="text-foreground/70 leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </motion.details>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
