export type Experience = {
  title: string;
  company: string;
  period: string;
  location?: string;
  description: string[];
  tags: string[];

  // ✅ Ajouts pour correspondre à ce que Experience.tsx utilise
  start?: string;   // ex: "2024-03"
  end?: string;     // ex: "2024-07"
  tasks?: string[]; // utilisé dans exp.tasks
  skills?: string[]; // utilisé dans exp.skills
};

export const experiences: Experience[] = [
  {
    title: "Stagiaire Développeuse Python & Django",
    company: "Centre d’Innovation Digitale — Université Cadi Ayyad",
    period: "03/2024 — 07/2024",
    location: "Marrakech, Maroc",
    description: [
      "Développement d’une plateforme de gestion d’absences avec reconnaissance faciale",
      "Utilisation de Python, OpenCV et Django pour la détection et l’identification des visages",
      "Création d’une interface web avec templates Django",
      "Mise en place d’un tableau de bord pour l'administration"
    ],
    tags: ["Python", "Django", "OpenCV", "HTML/CSS"],

    // ✅ champs ajoutés pour Experience.tsx
    start: "2024-03",
    end: "2024-07",
    tasks: [
      "Développement d’une plateforme de gestion d’absences avec reconnaissance faciale",
      "Utilisation de Python, OpenCV et Django pour la détection et l’identification des visages",
      "Création d’une interface web avec templates Django",
      "Mise en place d’un tableau de bord pour l'administration"
    ],
    skills: ["Python", "Django", "OpenCV", "HTML/CSS"]
  },

  {
    title: "Projet Universitaire — Application de location de voitures",
    company: "Université Cadi Ayyad",
    period: "09/2023 — 01/2024",
    location: "Marrakech, Maroc",
    description: [
      "Développement d’un site complet de location de voitures",
      "Architecture MVC avec Java (JSP, Servlets, JDBC)",
      "Gestion des réservations, utilisateurs et voitures",
      "Base de données MySQL"
    ],
    tags: ["Java", "JSP", "Servlet", "MySQL", "MVC"],

    // ✅ champs ajoutés pour Experience.tsx
    start: "2023-09",
    end: "2024-01",
    tasks: [
      "Développement d’un site complet de location de voitures",
      "Architecture MVC avec Java (JSP, Servlets, JDBC)",
      "Gestion des réservations, utilisateurs et voitures",
      "Base de données MySQL"
    ],
    skills: ["Java", "JSP", "Servlet", "MySQL", "MVC"]
  },

  {
    title: "Stagiaire Développeuse Mobile Android",
    company: "Startup Digital Apps",
    period: "07/2023 — 09/2023",
    location: "Marrakech, Maroc",
    description: [
      "Développement d’une application mobile Android (Kotlin)",
      "Intégration Firebase Authentication & Cloud Firestore",
      "Gestion des profils utilisateurs et synchronisation des données",
      "Tests, débogage et optimisation de l’application"
    ],
    tags: ["Android", "Kotlin", "Firebase"],

    // ✅ champs ajoutés pour Experience.tsx
    start: "2023-07",
    end: "2023-09",
    tasks: [
      "Développement d’une application mobile Android (Kotlin)",
      "Intégration Firebase Authentication & Cloud Firestore",
      "Gestion des profils utilisateurs et synchronisation des données",
      "Tests, débogage et optimisation de l’application"
    ],
    skills: ["Android", "Kotlin", "Firebase"]
  }
];
