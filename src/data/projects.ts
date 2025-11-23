// src/data/projects.ts

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
    title: "Site de location de voitures (Java / Thymeleaf)",
    period: "2023",
    tags: ["Java", "Spring Boot", "Thymeleaf", "MySQL"],
    summary:
      "Application web de location de voitures développée avec Java, Spring Boot et Thymeleaf. Les clients peuvent rechercher un véhicule par catégorie, ville et période, puis effectuer une réservation en ligne. Un espace administrateur permet de gérer le parc de véhicules, les réservations et les clients.",
    repo: "https://github.com/kaitlbiz9752-sudo/Mini_Projet_Location_Voitures",
  },
  {
    title: "Application Android – Formulaire et navigation",
    period: "2022",
    tags: ["Android Studio", "Java", "Navigation", "Formulaire"],
    summary:
      "Application Android réalisée avec Android Studio. Elle contient plusieurs écrans reliés par un système de navigation, avec des formulaires pour saisir et afficher des informations. Le projet montre la gestion des intents, du cycle de vie d’une activité et de la validation de formulaires.",
    repo: "https://github.com/kaitlbiz9752-sudo/-TP3.Formulaire_navigation_activit-s",
  },
  {
    title: "Application Android – AppPizza",
    period: "2022",
    tags: ["Android Studio", "Java", "Commande", "Interface utilisateur"],
    summary:
      "Application mobile Android permettant de commander des pizzas. L’utilisateur choisit la taille, les ingrédients et la quantité, puis obtient un récapitulatif de sa commande. Le projet met l’accent sur la conception d’une interface conviviale et le passage de données entre écrans.",
    repo: "https://github.com/kaitlbiz9752-sudo/AppPizza",
  },
];
