import Link from "next/link";
import { MapPin, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand & Vision */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="font-bold text-2xl tracking-tight block mb-4">
              <span className="text-primary">Parole du Salut</span> Mimosa
            </Link>
            <p className="text-secondary-foreground/80 mb-6">
              Une église chaleureuse, une famille spirituelle. Nous croyons qu'une rencontre avec Jésus transforme la vie.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-secondary-foreground/60 hover:text-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="#" className="text-secondary-foreground/60 hover:text-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a href="#" className="text-secondary-foreground/60 hover:text-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg>
              </a>
            </div>
          </div>

          {/* Liens Rapides */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Liens Rapides</h3>
            <ul className="space-y-3">
              <li><Link href="#about" className="text-secondary-foreground/80 hover:text-primary transition-colors">À propos de nous</Link></li>
              <li><Link href="#jesus" className="text-secondary-foreground/80 hover:text-primary transition-colors">Connaître Jésus</Link></li>
              <li><Link href="#ministeres" className="text-secondary-foreground/80 hover:text-primary transition-colors">Nos ministères</Link></li>
              <li><Link href="#evenements" className="text-secondary-foreground/80 hover:text-primary transition-colors">Événements</Link></li>
              <li><Link href="#donner" className="text-secondary-foreground/80 hover:text-primary transition-colors">Donner</Link></li>
            </ul>
          </div>

          {/* Cultes */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Nos Cultes</h3>
            <ul className="space-y-3 text-secondary-foreground/80">
              <li>
                <span className="block font-medium">1er Culte</span>
                Dimanche à 08h00
              </li>
              <li>
                <span className="block font-medium">2ème Culte</span>
                Dimanche à 10h30
              </li>
              <li>
                <span className="block font-medium">Culte d'Enseignement</span>
                Mercredi à 17h30
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-secondary-foreground/80">
                <MapPin className="text-primary mt-1 flex-shrink-0" size={18} />
                <span>123 Avenue des Mimosas,<br/>Quartier, Ville, Pays</span>
              </li>
              <li className="flex items-center gap-3 text-secondary-foreground/80">
                <Phone className="text-primary flex-shrink-0" size={18} />
                <span>+123 456 789 000</span>
              </li>
              <li className="flex items-center gap-3 text-secondary-foreground/80">
                <Mail className="text-primary flex-shrink-0" size={18} />
                <span>contact@paroledusalutmimosa.org</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-secondary-foreground/60 text-sm">
            © {new Date().getFullYear()} Église Parole du Salut Mimosa. Tous droits réservés.
          </p>
          <div className="flex gap-4 text-sm text-secondary-foreground/60">
            <Link href="#" className="hover:text-primary transition-colors">Mentions légales</Link>
            <Link href="#" className="hover:text-primary transition-colors">Politique de confidentialité</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
