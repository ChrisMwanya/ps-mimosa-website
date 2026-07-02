import { notFound } from "next/navigation";
import { ministries } from "@/lib/data/ministries";
import Link from "next/link";
import { ArrowLeft, Clock, User, HeartHandshake } from "lucide-react";

export default async function MinistereDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const ministry = ministries.find(m => m.id === id);

  if (!ministry) {
    notFound();
  }

  return (
    <div className="pt-20 bg-background min-h-screen">
      {/* Top Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Link 
          href="/ministeres" 
          className="inline-flex items-center text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
        >
          <ArrowLeft size={16} className="mr-2" />
          Retour aux ministères
        </Link>
      </div>

      {/* Hero Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="relative w-full h-[400px] rounded-3xl overflow-hidden shadow-xl">
          <div className="absolute inset-0 bg-black/40 z-10" />
          <div 
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url('${ministry.image}')` }}
          />
          <div className="absolute bottom-0 left-0 p-8 md:p-12 z-20">
            <span className="inline-block px-4 py-1.5 bg-primary text-primary-foreground rounded-full text-sm font-bold tracking-wider uppercase mb-4 shadow-sm">
              {ministry.label}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight max-w-3xl">
              {ministry.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Main Content (Left) */}
          <div className="lg:w-2/3">
            <div className="prose prose-lg dark:prose-invert max-w-none text-foreground/80 leading-relaxed">
              <p className="text-xl md:text-2xl text-foreground font-medium mb-8 leading-snug">
                {ministry.description}
              </p>
              
              <div className="my-12 p-8 bg-primary/5 rounded-2xl border border-primary/10 relative overflow-hidden">
                <HeartHandshake className="absolute -right-4 -bottom-4 w-40 h-40 text-primary/10" />
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-primary mb-4 flex items-center">
                    Jésus prend soin de notre famille
                  </h3>
                  <p className="text-lg text-foreground/90 italic">
                    "{ministry.vision}"
                  </p>
                </div>
              </div>

              <h3 className="text-xl font-bold text-foreground mb-4">Rejoignez-nous !</h3>
              <p>
                Ne restez pas isolé. Ce département est conçu pour vous offrir une famille dans la grande famille de l'église. Que vous cherchiez un soutien dans la prière, des amitiés solides, ou un cadre pour utiliser vos talents au service du Seigneur, il y a une place pour vous ici.
              </p>
            </div>
          </div>

          {/* Sidebar (Right) */}
          <div className="lg:w-1/3">
            <div className="sticky top-32 space-y-6">
              
              {/* Info Card */}
              <div className="p-6 rounded-2xl border border-border bg-card shadow-sm">
                <h3 className="text-lg font-bold mb-6 border-b border-border pb-4 text-foreground">
                  Informations pratiques
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Clock className="w-6 h-6 text-primary mt-0.5 mr-4 shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground">Horaires & Rencontres</h4>
                      <p className="text-foreground/70 text-sm mt-1">{ministry.schedule}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <User className="w-6 h-6 text-primary mt-0.5 mr-4 shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground">Responsable</h4>
                      <p className="text-foreground/70 text-sm mt-1">{ministry.leader}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <button className="w-full py-3 bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-xl transition-all shadow-sm">
                    S'impliquer
                  </button>
                </div>
              </div>
              
              {/* Secondary Card (Optional Contact/Support) */}
              <div className="p-6 rounded-2xl border border-border bg-secondary/50">
                <h4 className="font-bold text-foreground mb-2">Une question ?</h4>
                <p className="text-sm text-foreground/70 mb-4">
                  Notre équipe est disponible pour répondre à vos questions et vous accueillir chaleureusement.
                </p>
                <button className="text-primary font-medium text-sm hover:underline">
                  Contactez l'équipe
                </button>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Gallery Section */}
      {ministry.gallery && ministry.gallery.length > 0 && (
        <section className="bg-secondary/20 py-24 border-t border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-3xl font-bold text-foreground mb-12 text-center">
              La vie du ministère en images
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {ministry.gallery.map((imgUrl, index) => (
                <div 
                  key={index} 
                  className="relative aspect-square rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group"
                >
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url('${imgUrl}')` }}
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
