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
  credentialUrl?: string;
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
  },

  {
  title: "Certification Professionnelle en Traitement du langage naturel (NLP) en Python",
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
  ]
  },

  {
    title: "Fondamentaux et Concepts Avancés de la Programmation Java",
    issuer: "MLIAEdu — Plateforme de Certification Professionnelle",
    issueDate: "2025-10",
    skills: [
      "Java",
      "Programmation orientée objet",
      "Concepts avancés Java",
      "Gestion des exceptions",
      "Collections Java"
    ],
    tags: ["Java", "Programmation", "Développement"],
    image: "/certs/azure-az900.webp",
    imageAlt: "Certificat Java — Fondamentaux et Concepts Avancés",
    highlights: [
      "Score obtenu : 96%",
      "Progression des labs : 100%",
      "Certification délivrée le 4 octobre 2025"
    ]
  }
];
