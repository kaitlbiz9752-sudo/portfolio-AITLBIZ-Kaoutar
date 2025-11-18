export type Education = {
  id: string;
  title: string;      // Intitulé (Master, Licence, Bac…)
  school: string;     // Nom de l’établissement
  start: string;      // "YYYY-MM" ou juste "YYYY"
  end?: string;       // "YYYY-MM" ou "YYYY" ou undefined (= Présent)
  location: string;   // Ville, pays
  details: string[];  // Puces de description
};

export const education: Education[] = [
  {
    id: "master-ens",
    title: "Master — Informatique (IA & Big Data)",
    school: "ENS – Université Cadi Ayyad",
    start: "2023-09",
    end: "2025-07",
    location: "Marrakech, Maroc",
    details: [
      "Spécialisation en Intelligence Artificielle, Deep Learning et Big Data.",
      "Développement de modèles CNN et NLP pour des cas réels.",
      "Projets en Python, TensorFlow, PyTorch et MLOps.",
      "Projet de recherche en IA appliquée."
    ]
  },
  {
    id: "licence-ens",
    title: "Licence en Informatique",
    school: "ENS – Université Cadi Ayyad",
    start: "2020-09",
    end: "2023-06",
    location: "Marrakech, Maroc",
    details: [
      "Programmation avancée : Java, Python, C et JavaScript.",
      "Développement Web, bases de données et génie logiciel.",
      "Projets de groupe et mini-applications full-stack.",
      "Projet de fin d’études en développement d’application."
    ]
  },
  {
    id: "fst-mipc",
    title: "Année universitaire — MIPC (Math/Info/Physique/Chimie)",
    school: "FST – Faculté des Sciences et Techniques",
    start: "2021-09",
    end: "2022-07",
    location: "Marrakech, Maroc",
    details: [
      "Renforcement en mathématiques, physique et algorithmique.",
      "Travaux pratiques encadrés et mini-projets scientifiques.",
      "Base solide pour poursuivre en informatique avancée."
    ]
  },
  {
    id: "bac-sp",
    title: "Baccalauréat — Sciences Physiques (option français)",
    school: "Lycée Ryad Ezzahya",
    start: "2020",
    location: "Marrakech, Maroc",
    details: [
      "Mention : Très Bien.",
      "Spécialisation en physique, mathématiques et sciences expérimentales.",
      "Participation à des projets et activités scientifiques."
    ]
  }
];
