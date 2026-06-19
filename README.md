# Parole du Salut Mimosa - Site Web

Bienvenue sur le dépôt du site officiel de l'église **Parole du Salut Mimosa**. Ce projet vise à créer une expérience web immersive, chaleureuse et moderne, inspirée des meilleurs standards, afin de présenter Jésus-Christ et l'esprit de notre communauté.

## 🚀 Technologies

Ce site est construit avec des technologies web modernes :
- **Framework** : [Next.js](https://nextjs.org/) (App Router)
- **Langage** : [TypeScript](https://www.typescriptlang.org/)
- **Styling** : [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations** : [Framer Motion](https://www.framer.com/motion/)
- **Icônes** : [Lucide React](https://lucide.dev/)
- **Thème** : Mode Clair/Sombre (`next-themes`)

## 🎨 Design & UI

Le design est conçu pour être **"Mobile-first"**, très réactif et dynamique. 
Il utilise la charte graphique officielle de l'église, avec notamment :
- **Rich Black** (`#00072d`) pour le mode sombre.
- **Caribbean Green** (Bleu de la marque : `#123499`) pour les éléments principaux (boutons, accents).
- **Bangladesh Green** (`#0a2472`) et **Dark Blue** (`#051650`) pour les contrastes.

## 📦 Installation et Lancement Local

1. Clonez ce dépôt sur votre machine :
   ```bash
   git clone https://github.com/ChrisMwanya/ps-mimosa-website.git
   ```

2. Installez les dépendances :
   ```bash
   cd ps-mimosa-website
   npm install
   ```

3. Lancez le serveur de développement :
   ```bash
   npm run dev
   ```

4. Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur pour voir le résultat en direct.

## 🛠 Structure du Projet

- `app/` : Fichiers de routage Next.js (`layout.tsx`, `page.tsx`), et configuration des styles globaux (`globals.css`).
- `components/` : Contient tous les composants réutilisables.
  - `components/sections/` : Grandes sections de la page d'accueil (Hero, Jésus, Ministères, etc.)
  - `components/ui/` : Composants d'interface (Navbar, Footer, ThemeToggle, etc.)
- `public/` : Assets statiques (images, logo, polices).

## 🤝 Contribution

Si vous souhaitez contribuer, apporter des correctifs ou ajouter de nouvelles sections, n'hésitez pas à créer une branche et soumettre une *Pull Request*.
