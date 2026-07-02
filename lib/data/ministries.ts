import { Flame, Heart, Smile, Music, HandHeart, type LucideIcon } from "lucide-react";

export interface Ministry {
  id: string;
  label: string;
  title: string;
  description: string;
  vision: string;
  className: string;
  icon: LucideIcon;
  image: string;
  schedule: string;
  leader: string;
  gallery: string[];
}

export const ministries: Ministry[] = [
  {
    id: "jeunes",
    label: "Programme des Jeunes",
    title: "Développer une jeunesse qui influence la culture.",
    description: "Notre programme pour les jeunes est un espace dynamique où les adolescents et les jeunes adultes peuvent se rencontrer, grandir dans leur foi et découvrir leur véritable identité en Christ. À travers des rassemblements hebdomadaires, des temps de louange passionnés et des discussions authentiques, nous équipons la prochaine génération pour affronter les défis de la société actuelle avec une perspective biblique.",
    vision: "Parce que Jésus aime profondément la jeunesse, Il prend soin de l'avenir de nos familles en fortifiant nos jeunes. Dans ce département, Il guérit les cœurs blessés par le rejet, restaure l'estime de soi et bâtit un fondement solide pour que vos enfants deviennent des adultes épanouis, ancrés dans l'amour parfait du Père.",
    className: "bg-primary text-primary-foreground col-span-1",
    icon: Flame,
    image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=2070&auto=format&fit=crop",
    schedule: "Tous les vendredis à 18h30",
    leader: "Pasteur des Jeunes",
    gallery: [
      "https://images.unsplash.com/photo-1529156069898-49953eb1b5ce?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=800&auto=format&fit=crop"
    ]
  },
  {
    id: "femmes",
    label: "Programme des Femmes",
    title: "Bâtir une communauté authentique. Approfondir sa foi.",
    description: "Le ministère des femmes offre un cadre de soutien, de prière et de croissance spirituelle. Nous organisons régulièrement des déjeuners, des retraites et des études bibliques pour encourager chaque femme à découvrir son plein potentiel en Dieu. Que vous soyez mère, professionnelle, étudiante ou célibataire, vous trouverez ici une communauté bienveillante pour cheminer à vos côtés.",
    vision: "Jésus accordait une place centrale et pleine de dignité aux femmes de Son époque. À travers ce ministère, le Seigneur prend soin du pilier affectif de nos familles. Il vient consoler, renouveler les forces des mères, et apporter la paix dans les foyers, car une femme épanouie dans le Christ fait rayonner Son amour sur toute sa maison.",
    className: "bg-accent text-accent-foreground col-span-1",
    icon: Heart,
    image: "https://images.unsplash.com/photo-1529156069898-49953eb1b5ce?q=80&w=2070&auto=format&fit=crop",
    schedule: "Le 2ème samedi du mois à 10h00",
    leader: "Responsable du Ministère des Femmes",
    gallery: [
      "https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1529156069898-49953eb1b5ce?q=80&w=800&auto=format&fit=crop"
    ]
  },
  {
    id: "enfants",
    label: "Programme des Enfants",
    title: "En partenariat avec les parents pour développer la foi.",
    description: "Nous croyons que les enfants ne sont pas seulement l'église de demain, mais l'église d'aujourd'hui. L'école du dimanche (Ecodim) propose un enseignement biblique adapté à chaque tranche d'âge, avec des activités ludiques, des chants et des histoires captivantes. Notre but est d'éveiller leur curiosité spirituelle et de leur donner l'opportunité de rencontrer Jésus de manière personnelle.",
    vision: "« Laissez les petits enfants venir à moi » a dit Jésus. Il prend soin des plus petits de notre famille en déposant dans leur cœur la graine de l'Évangile. À travers ce département, Jésus protège leur innocence, leur apprend la bienveillance et les rassure sur le fait qu'ils ont un Père céleste qui veillera sur eux tous les jours de leur vie.",
    className: "bg-secondary text-secondary-foreground col-span-1",
    icon: Smile,
    image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=1962&auto=format&fit=crop",
    schedule: "Chaque dimanche pendant le culte principal",
    leader: "Directrice de l'Ecodim",
    gallery: [
      "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1473625247510-8ceb1760943f?q=80&w=800&auto=format&fit=crop"
    ]
  },
  {
    id: "adoration",
    label: "Ministère d'Adoration",
    title: "Inspirer votre foi et créer une atmosphère d'adoration.",
    description: "La louange et l'adoration sont au cœur de nos rassemblements. Ce ministère rassemble des musiciens et chanteurs dévoués qui utilisent leurs talents pour guider l'assemblée dans la présence de Dieu. Nous croyons que lorsque nous élevons nos voix ensemble, des chaînes sont brisées et des cœurs sont guéris.",
    vision: "Jésus prend soin de notre famille spirituelle en descendant au milieu de notre louange. À travers l'adoration, Il restaure notre paix intérieure, calme les tempêtes de nos vies familiales et réaligne nos cœurs sur Ses promesses. C'est le lieu où toute la famille (petits et grands) s'unit pour célébrer les bontés de Dieu.",
    className: "bg-foreground text-background col-span-1 md:col-span-2 min-h-[300px] md:min-h-[350px]",
    icon: Music,
    image: "https://images.unsplash.com/photo-1510511459019-5d26af37336c?q=80&w=2070&auto=format&fit=crop",
    schedule: "Répétitions les jeudis à 18h00",
    leader: "Directeur de Louange",
    gallery: [
      "https://images.unsplash.com/photo-1510511459019-5d26af37336c?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=800&auto=format&fit=crop"
    ]
  },
  {
    id: "priere",
    label: "Ministère de Prière",
    title: "Rechercher la face de Dieu et intercéder pour l'église.",
    description: "L'église est appelée à être une maison de prière. Ce groupe se tient à la brèche pour intercéder en faveur des besoins de l'église, des familles, de notre ville et des nations. Nous croyons fermement en la puissance de la prière pour transformer les situations impossibles et apporter la guérison.",
    vision: "À travers l'intercession, Jésus se tient comme notre grand Souverain Sacrificateur. Il prend soin de nos familles en portant nos fardeaux, en combattant nos combats invisibles et en protégeant nos foyers des attaques de l'ennemi. C'est ici que Jésus nous montre qu'aucune prière d'une mère, d'un père ou d'un enfant ne reste sans réponse.",
    className: "bg-muted text-foreground col-span-1 md:col-span-1 min-h-[300px] md:min-h-[350px]",
    icon: HandHeart,
    image: "https://images.unsplash.com/photo-1544427920-c49ccf08c221?q=80&w=2089&auto=format&fit=crop",
    schedule: "Lundi à Vendredi à 6h00 (Prière matinale)",
    leader: "Responsable de l'Intercession",
    gallery: [
      "https://images.unsplash.com/photo-1544427920-c49ccf08c221?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520695029323-9ee4bb9116e0?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?q=80&w=800&auto=format&fit=crop"
    ]
  }
];
