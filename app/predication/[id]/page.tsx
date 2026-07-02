import { notFound } from "next/navigation";
import { sermons } from "@/lib/data/sermons";
import Link from "next/link";
import { ArrowLeft, Calendar, User, BookOpen } from "lucide-react";

export default async function PredicationDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const sermon = sermons.find(s => s.id.toString() === id);

  if (!sermon) {
    notFound();
  }

  return (
    <div className="pt-20 bg-background min-h-screen">
      {/* Top Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Link 
          href="/predication" 
          className="inline-flex items-center text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
        >
          <ArrowLeft size={16} className="mr-2" />
          Retour aux prédications
        </Link>
      </div>

      {/* Video Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="aspect-video w-full bg-black rounded-2xl overflow-hidden shadow-2xl relative">
          <iframe 
            src={sermon.videoUrl} 
            title={sermon.title}
            className="w-full h-full absolute inset-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          ></iframe>
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Main Content (Left) */}
          <div className="lg:w-2/3">
            <div className="mb-8">
              <div className="flex items-center gap-4 text-sm text-primary font-semibold tracking-wide uppercase mb-3">
                <span className="flex items-center"><BookOpen size={16} className="mr-1.5" /> {sermon.series}</span>
                <span className="text-foreground/30">•</span>
                <span className="flex items-center text-foreground/60"><Calendar size={16} className="mr-1.5" /> {sermon.date}</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-foreground tracking-tight mb-6">
                {sermon.title}
              </h1>
            </div>

            <div className="prose prose-lg dark:prose-invert max-w-none text-foreground/80 leading-relaxed">
              <h3 className="text-xl font-semibold text-foreground mb-4">Résumé de la prédication</h3>
              <p>{sermon.summary}</p>
              
              <div className="mt-8 p-6 bg-secondary/50 rounded-xl border border-border">
                <h4 className="font-medium text-foreground mb-2">Points Clés à retenir :</h4>
                <ul className="list-disc pl-5 space-y-2 text-foreground/80 text-base">
                  <li>Une foi authentique se démontre par des actions concrètes.</li>
                  <li>Dieu est capable de restaurer même ce qui semble complètement perdu.</li>
                  <li>La prière et la dépendance au Saint-Esprit sont nos fondations.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Sidebar (Right) */}
          <div className="lg:w-1/3">
            <div className="sticky top-32 p-6 rounded-2xl border border-border bg-card shadow-sm">
              <h3 className="text-lg font-bold mb-6 flex items-center border-b border-border pb-4">
                <User size={20} className="mr-2 text-primary" /> À propos de l'orateur
              </h3>
              
              <div className="flex items-center gap-4 mb-6">
                <div 
                  className="w-16 h-16 rounded-full bg-cover bg-center border-2 border-primary/20"
                  style={{ backgroundImage: `url('${sermon.preacherImage}')` }}
                />
                <div>
                  <h4 className="font-bold text-foreground text-lg">{sermon.preacher}</h4>
                  <p className="text-sm text-foreground/60">Orateur</p>
                </div>
              </div>
              
              <p className="text-foreground/80 text-sm leading-relaxed mb-6">
                {sermon.preacherDetails}
              </p>

              <button className="w-full py-3 bg-secondary hover:bg-secondary/80 text-secondary-foreground font-medium rounded-xl transition-colors text-sm">
                Voir tous ses messages
              </button>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
