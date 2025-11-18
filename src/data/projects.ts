export type Project = {
  title: string;
  period?: string;
  tags: string[];
  summary: string;
  link?: string;
  repo?: string;
  image?: string;
};

export const projects: Project[] = [
  {
    title: "Gestion d'absence avec reconnaissance faciale",
    period: "2024",
    tags: ["Python", "Django", "OpenCV", "Reconnaissance faciale"],
    summary:
      "Application web permettant de gérer les présences et absences des étudiants à partir de la reconnaissance faciale. "
      + "Les visages sont enregistrés, puis détectés automatiquement via OpenCV. "
      + "Les absences sont calculées et consultables par l’administration.",
    // link: "https://demo-absence.example.com",
    // repo: "https://github.com/kaoutar/gestion-absence-opencv",
  },

  {
    title: "Site de location de voitures",
    period: "2023",
    tags: ["Java", "JSP/Servlets", "JDBC", "MVC"],
    summary:
      "Site web de location de voitures développé en Java. "
      + "Le client peut rechercher un véhicule par catégorie, période et ville, puis effectuer une réservation en ligne. "
      + "Un espace administrateur permet de gérer le parc de véhicules, les réservations et les clients.",
    // link: "https://location-voiture.example.com",
    // repo: "https://github.com/kaoutar/site-location-voiture",
  },

  {
    title: "Application mobile Android",
    period: "2022",
    tags: ["Android Studio", "Kotlin", "Firebase"],
    summary:
      "Application mobile Android réalisée avec Android Studio et Kotlin. "
      + "Elle permet à l’utilisateur de créer un compte, de se connecter et de gérer ses données (ex. tâches, notes ou suivi d’activité). "
      + "Les données sont synchronisées dans le cloud via Firebase pour être accessibles depuis plusieurs appareils.",
    // link: "https://play.google.com/…",
    // repo: "https://github.com/kaoutar/app-android",
  },
];
