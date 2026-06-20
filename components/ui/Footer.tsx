import Link from "next/link";
import Image from "next/image";
import { MapPin, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          {/* Brand & Vision */}
          <div className="col-span-1 md:col-span-4">
            <Link href="/" className="inline-flex items-center gap-4 mb-6 group">
              <div className="bg-white/10 p-3 rounded-xl backdrop-blur-sm transition-colors group-hover:bg-white/20">
                <Image 
                  src="/identity/logo.png" 
                  alt="Logo Parole du Salut" 
                  width={200} 
                  height={80} 
                  className="w-auto h-12 object-contain brightness-0 invert" 
                />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl tracking-tight text-white leading-tight">Parole du Salut</span>
                <span className="text-white/70 font-medium tracking-wide">Mimosa</span>
              </div>
            </Link>
            <p className="text-white/80 mb-8 max-w-md text-lg leading-relaxed">
              Une église chaleureuse, une famille spirituelle. Nous croyons qu'une rencontre avec Jésus transforme la vie.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white hover:text-primary hover:-translate-y-1 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="#" className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white hover:text-primary hover:-translate-y-1 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a href="#" className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white hover:text-primary hover:-translate-y-1 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg>
              </a>
            </div>
          </div>

          {/* Liens Rapides */}
          <div className="col-span-1 md:col-span-2 md:pl-4">
            <h3 className="font-bold text-xl mb-6 tracking-tight">Liens Rapides</h3>
            <ul className="space-y-4">
              <li><Link href="#about" className="text-white/80 hover:text-white hover:translate-x-1 inline-block transition-all">À propos de nous</Link></li>
              <li><Link href="#jesus" className="text-white/80 hover:text-white hover:translate-x-1 inline-block transition-all">Connaître Jésus</Link></li>
              <li><Link href="#ministeres" className="text-white/80 hover:text-white hover:translate-x-1 inline-block transition-all">Nos ministères</Link></li>
              <li><Link href="#evenements" className="text-white/80 hover:text-white hover:translate-x-1 inline-block transition-all">Événements</Link></li>
              <li><Link href="#donner" className="text-white/80 hover:text-white hover:translate-x-1 inline-block transition-all">Donner</Link></li>
            </ul>
          </div>

          {/* Cultes */}
          <div className="col-span-1 md:col-span-3">
            <h3 className="font-bold text-xl mb-6 tracking-tight">Nos Cultes</h3>
            <ul className="space-y-5 text-white/80">
              <li className="flex flex-col bg-white/5 p-4 rounded-xl border border-white/10">
                <span className="font-semibold text-white mb-1">1er Culte</span>
                <span className="text-sm">Dimanche à 08h00</span>
              </li>
              <li className="flex flex-col bg-white/5 p-4 rounded-xl border border-white/10">
                <span className="font-semibold text-white mb-1">2ème Culte</span>
                <span className="text-sm">Dimanche à 10h30</span>
              </li>
              <li className="flex flex-col bg-white/5 p-4 rounded-xl border border-white/10">
                <span className="font-semibold text-white mb-1">Culte d'Enseignement</span>
                <span className="text-sm">Mercredi à 17h30</span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-1 md:col-span-3">
            <h3 className="font-bold text-xl mb-6 tracking-tight">Contact</h3>
            <ul className="space-y-5">
              <li className="flex items-start gap-4 text-white/80">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 text-white">
                  <MapPin size={18} />
                </div>
                <span className="mt-1 leading-relaxed">123 Avenue des Mimosas,<br/>Quartier, Ville, Pays</span>
              </li>
              <li className="flex items-center gap-4 text-white/80">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 text-white">
                  <Phone size={18} />
                </div>
                <span>+123 456 789 000</span>
              </li>
              <li className="flex items-center gap-4 text-white/80">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 text-white">
                  <Mail size={18} />
                </div>
                <span>contact@paroledusalutmimosa.org</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} Église Parole du Salut Mimosa. Tous droits réservés.
          </p>
          <div className="flex gap-6 text-sm text-white/60">
            <Link href="#" className="hover:text-white transition-colors">Mentions légales</Link>
            <Link href="#" className="hover:text-white transition-colors">Politique de confidentialité</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
