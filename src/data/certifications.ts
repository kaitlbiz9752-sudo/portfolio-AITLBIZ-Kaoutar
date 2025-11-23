export type Certification = {
  title: string;
  issuer: string;
  issueDate: string;
  expiryDate?: string;
  skills?: string[];
  tags?: string[];
  image?: string;
  imageAlt?: string;
  status?: "valid" | "expired" | "revoked";
  credentialUrl?: string;   // lien de vérification
  highlights?: string[];
};

export const certifications: Certification[] = [
  {
    title: "Certification Professionnelle Hibernate & JPA",
    issuer: "MLIAEdu — Plateforme de Certification Professionnelle",
    issueDate: "2025-10",
    skills: [
      "Hibernate ORM",
      "Java Persistence API (JPA)",
      "Mapping Objet-Relationnel (ORM)",
      "Java EE",
      "Gestion de la persistance",
      "Repositories et EntityManager"
    ],
    tags: ["Hibernate", "JPA", "Java", "Backend"],
    image: "/certs/cka-kaoutar.webp",
    imageAlt: "Certificat MLIAEdu Hibernate & JPA — Kaoutar Aitlbiz",
    credentialUrl:
      "https://mliaedu.toubkalit.com/verify-certificate/28-4849f83c-de56-4927-9783-2c053949d27f-128363"
  },

  {
    title:
      "Certification Professionnelle en Traitement du langage naturel (NLP) en Python",
    issuer: "MLIAEdu — Plateforme de Certification Professionnelle",
    issueDate: "2025-11",
    skills: [
      "NLP",
      "Python",
      "Machine Learning appliqué au texte",
      "Tokenization & Embeddings",
      "Nettoyage et prétraitement du langage naturel"
    ],
    tags: ["NLP", "Python", "IA", "ML"],
    image: "/certs/aws-saa-kaoutar.webp",
    imageAlt: "Certificat de NLP en Python — Kaoutar Aitlbiz",
    highlights: [
      "Score obtenu : 95%",
      "Progression des labs : 100%",
      "Certification délivrée le 14 novembre 2025"
    ],
    credentialUrl:
      "https://mliaedu.toubkalit.com/verify-certificate/36-4849f83c-de56-4927-9783-2c053949d27f-744865"
  },

 {
   title:
     "Certification Professionnelle en Développement Front-End moderne avec React",
   issuer: "MLIAEdu — Plateforme de Certification Professionnelle",
   issueDate: "2025-11",
   skills: [
     "JavaScript (ES6+)",
     "React.js",
     "Hooks (useState, useEffect, useMemo...)",
     "Routing avec React Router",
     "Gestion d’état",
     "Composants réutilisables",
     "Consommation d’API REST",
     "Tailwind CSS",
     "Optimisation des performances"
   ],
   tags: ["React", "JavaScript", "Front-End", "Web"],
   image: "/certs/aws-saa-kaoutar.webp",
   imageAlt: "Certificat Développement Front-End React — Kaoutar Aitlbiz",
   highlights: [
     "Score obtenu : 97%",
     "Progression des labs : 100%",
     "Certification délivrée le 23 novembre 2025"
   ],
   credentialUrl:
     "https://mliaedu.toubkalit.com/verify-certificate/26-4849f83c-de56-4927-9783-2c053949d27f-371621"
 },

];
