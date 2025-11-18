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
  highlights?: string[]; // ✅ ajout pour corriger l'erreur TS
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
    imageAlt: "Certificat MLIAEdu Hibernate & JPA — Kaoutar Aitlbiz"
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
    title: "Microsoft Certified: Azure Fundamentals (AZ-900)",
    issuer: "Microsoft",
    issueDate: "2023-11",
    skills: ["Azure", "Cloud Fundamentals"],
    tags: ["Azure", "Cloud", "AZ-900"],
    image: "/certs/azure-az900.webp",
    imageAlt: "Certificat AZ-900"
  }
];
