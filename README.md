# Portfolio – AITLBIZ Kaoutar

 **l’URL publique via vercel**

https://portfolio-aitlbiz-kaoutar-a65c.vercel.app/



## Démonstrtation Vidéo :










Portfolio personnel développé avec **React + TypeScript + Vite** et **Tailwind CSS v4**, pour présenter :

- Profil (photo, titre, localisation, mots-clés)
- Projets
- Parcours / Expériences
- Formations
- Certifications (avec affichage agrandi du certificat)
- Contact
- Mode clair / sombre (Dark Mode)
- Données structurées **JSON-LD** pour le SEO

---

## 1. Stack technique

- **Frontend**
  - [Vite](https://vitejs.dev/) – bundler / dev server
  - [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
  - [React Router](https://reactrouter.com/) – navigation SPA
  - [Tailwind CSS v4](https://tailwindcss.com/) – design utilitaire
  - [shadcn/ui](https://ui.shadcn.com/) (optionnel ici, mais prêt pour ajouter des composants)
  - [react-helmet-async](https://github.com/staylor/react-helmet-async) – gestion de `<title>` et `<meta>`
- **Qualité**
  - ESLint
  - Prettier

---

## 2. Pré-requis

- **Node.js** ≥ 18
- **npm** (installé avec Node)

Vérifier :

```bash
node -v
npm -v
```

## 3. Installation du projet

**Cloner le repo puis installer les dépendances :**


```text
git clone <url-de-ton-repo> mon-portfolio
cd mon-portfolio
npm install
```

**Les scripts disponibles sont définis dans package.json :**



```text
{
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "preview": "vite preview",
    "lint": "eslint . --ext .ts,.tsx",
    "format": "prettier -w ."
  }
}
```



## 4. Lancer le projet

```text
Mode développement
npm run dev
```



Puis ouvrir http://localhost:5173
 (ou le port affiché dans le terminal).



```text
npm run build
npm run preview
```



## 5. Architecture du projet

<img width="624" height="891" alt="image" src="https://github.com/user-attachments/assets/eac21acd-dbcb-4ff9-9fcb-ebf7549ecf23" />



<img width="657" height="1013" alt="image" src="https://github.com/user-attachments/assets/29554e86-aaba-4cb9-998d-009ec4ad63dc" />




## 6. Étapes de construction du projet


**6.1 Initialisation avec Vite + React + TS**


```text
npm create vite@latest mon-portfolio -- --template react-ts
cd mon-portfolio
npm install
```



Vite génère la structure de base avec main.tsx, App.tsx, etc.




**6.2 Ajout de Tailwind CSS v4**

Installation :



```text
npm i -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

tailwind.config.js :



```text
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "kaoutar-beige": "#f6efe5",
      },
    },
  },
  plugins: [],
};
```

postcss.config.js :



```text
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

src/index.css (version Tailwind v4) :


```text
@import "tailwindcss";

@layer base {
  :root {
    color-scheme: light;
  }

  body {
    @apply bg-kaoutar-beige text-zinc-900 min-h-screen;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  }

  .dark body {
    @apply bg-zinc-900 text-zinc-50;
  }
}
```



- Test rapide : dans App.tsx, utiliser une classe Tailwind (ex: className="p-6 bg-blue-500 text-white").
- Si tout s’affiche correctement, Tailwind est bien configuré.

**6.3 Routage + Layout global**



src/app/router.tsx


```text
import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./RootLayout";

import Home from "@/pages/Home";
import Projects from "@/pages/Projects";
import Experience from "@/pages/Experience";
import EducationPage from "@/pages/Education";
import CertificationsPage from "@/pages/Certifications";
import Contact from "@/pages/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "projects", element: <Projects /> },
      { path: "experience", element: <Experience /> },
      { path: "education", element: <EducationPage /> },
      { path: "certifications", element: <CertificationsPage /> },
      { path: "contact", element: <Contact /> },
    ],
  },
]);
```





src/app/RootLayout.tsx



```text
import { NavLink, Outlet } from "react-router-dom";
import ThemeToggle from "@/components/ThemeToggle";

export default function RootLayout() {
  return (
    <div className="min-h-screen bg-kaoutar-beige text-zinc-900 dark:bg-zinc-900 dark:text-zinc-50">
      <header className="sticky top-0 border-b bg-kaoutar-beige/70 dark:bg-zinc-900/70 backdrop-blur">
        <nav className="mx-auto max-w-6xl flex items-center justify-between p-4">
          <NavLink to="/" className="font-bold text-lg">
            MonPortfolio
          </NavLink>

          <div className="flex items-center gap-4 text-sm">
            <NavLink to="/projects">Projets</NavLink>
            <NavLink to="/experience">Parcours</NavLink>
            <NavLink to="/education">Formations</NavLink>
            <NavLink to="/certifications">Certifications</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <ThemeToggle />
          </div>
        </nav>
      </header>

      <main className="mx-auto max-w-6xl p-6">
        <Outlet />
      </main>

      <footer className="border-t py-6 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} • AITLBIZ Kaoutar
      </footer>
    </div>
  );
}
```



src/main.tsx


```text
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { RouterProvider } from "react-router-dom";
import { router } from "./app/router";
import { HelmetProvider } from "react-helmet-async";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </React.StrictMode>
);
```



**6.4 Données centralisées (src/data)**

Tous les contenus (profil, projets, formations, etc.) sont dans src/data/*.
Exemples :

src/data/profile.ts


```text
export const profile = {
  name: "AITLBIZ Kaoutar",
  role: "Ingénieur Logiciel / Chercheur",
  location: "Marrakech, Maroc",
  email: "k.aitlbiz9752@uca.ac.ma",
  socials: [
    { label: "GitHub", href: "https://github.com/monhandle" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/monhandle" },
  ],
  about: "IA, SIG, DevSecOps, Android.",
  skills: ["React", "TypeScript", "Node.js", "Docker", "Kubernetes", "GIS"],
};
```



src/data/projects.ts


```text
export type Project = {
  title: string;
  period?: string;
  tags: string[];
  summary: string;
  link?: string;
  repo?: string;
};

export const projects: Project[] = [
  {
    title: "Gestion d'absence avec reconnaissance faciale",
    period: "2024",
    tags: ["Python", "Django", "OpenCV"],
    summary:
      "Application web pour gérer les absences d'étudiants à l'aide de la reconnaissance faciale.",
    repo: "https://github.com/...",
  },
  // ...
];
```




- src/data/education.ts / src/data/experience.ts

Même principe : tableaux d’objets décrivant ton parcours.

**6.5 Pages principales**

Chaque page lit les données et les affiche.

- src/pages/Home.tsx



**La page affiche :**



```text
Nom, rôle, localisation

Description courte

Liens vers Projets et Contact

Badges (Master IA, AWS SAA)

Photo de profil

Balises <title> et <meta> via Helmet
```





- src/pages/Projects.tsx

Mappe le tableau projects et affiche chaque projet dans une carte.

- src/pages/Experience.tsx

Affiche les expériences (stages, projets associatifs, etc.) :


```texttitre, organisation, dates, description, mots-clés.```

- src/pages/Education.tsx

Affiche les formations en timeline :


```text
Bac (année, mention, lycée)

1re année FST MIPC

Licence Informatique ENS Cadi Ayyad

Master Informatique ENS Cadi Ayyad
```



- src/pages/Certifications.tsx

Page avec :



```text
Champ de filtre (par texte/tag)

Grille de cartes de certification (CertificationCard)

Chaque carte peut ouvrir une image agrandie du certificat dans un modal
```



- src/pages/Contact.tsx

Affiche les infos :


```text
Nom complet

Email cliquable (mailto:)

Téléphone (optionnel)
```


**6.6 Composant CertificationCard + modal**

- src/components/CertificationCard.tsx :


```text
Affiche l’image du badge (/certs/*.webp) en petit

Affiche titre, organisme, date, compétences

Bouton “Voir le certificat” → ouvre une version agrandie du certificat dans un overlay sur la même page (pas une nouvelle page)
```




**6.7 Dark Mode (ThemeToggle)**

- src/components/ThemeToggle.tsx :



```text
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(
    typeof window !== "undefined" &&
      (localStorage.getItem("theme") === "dark" ||
        (!localStorage.getItem("theme") &&
          window.matchMedia("(prefers-color-scheme: dark)").matches))
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <button
      className="border rounded-xl px-3 py-1 text-sm flex items-center gap-1"
      onClick={() => setDark((v) => !v)}
      aria-label="Basculer le thème"
    >
      {dark ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
}
```

- Enregistre le thème dans localStorage

- Applique la classe dark sur <html>

- Tailwind applique alors les classes dark:bg-..., dark:text-... dans RootLayout et index.css.

**6.8 JSON-LD (Knowledge Graph) pour le SEO**



**Dans Home.tsx, on a ajouté :**




- Import des données education et certifications



- Deux <script type="application/ld+json"> dans <Helmet>


```text
<Helmet>
  <title>{profile.name} — Portfolio</title>
  <meta
    name="description"
    content="Portfolio professionnel : IA, SIG, DevSecOps, Android, projets et certifications."
  />
  <script type="application/ld+json">{JSON.stringify(eduLd)}</script>
  <script type="application/ld+json">{JSON.stringify(certLd)}</script>
</Helmet>
```




**Résultat :**



**Les moteurs de recherche comprennent :**

- Dans quelles universités / écoles tu as étudié

- Quelles certifications officielles tu possèdes

## 7. Comment modifier le contenu


**7.1 Modifier tes projets**

- Fichier : src/data/projects.ts

- Ajouter / supprimer / modifier un objet dans projects.

- La page Projets se met automatiquement à jour.

**7.2 Modifier les expériences**

- Fichier : src/data/experience.ts

- Ajuster les dates, lieux, missions, technologies.

- La page Parcours lit ces données.

**7.3 Modifier les formations**



- Fichier : src/data/education.ts

- Ajouter le Bac, année FST, Licence ENS, Master ENS, etc.

- La page Formations affiche la timeline.

**7.4 Modifier les certifications**

- Fichier : src/data/certifications.ts

- Mettre à jour title, issuer, issueDate, skills, tags, image, credentialUrl, etc.

- Mettre les images dans public/certs/*.webp

**7.5 Modifier la couleur générale**

- Le beige global est défini dans tailwind.config.js et utilisé dans index.css / RootLayout.tsx :


```text
colors: {
  "kaoutar-beige": "#f6efe5",
},
```



## 8. Commandes utiles

- Formatage automatique du code :


```text
npm run format
```

- Linting TypeScript/React :


```text
npm run lint
```



-Dev server :


```text
npm run dev
```




-Build production :



```text
npm run build
npm run preview
```


## Déploiement d’un projet Vite sur Vercel

- Testez le build local :



```text
npm run build
```

**2. Créer un compte Vercel (ou se connecter)**

1. Aller sur : https://vercel.com

2. Se connecter via GitHub (recommandé).

3. Autoriser Vercel à accéder à vos dépôts GitHub.

**3. Créer un nouveau projet sur Vercel**


A. Sur la page d’accueil de Vercel, cliquez sur New Project :


https://vercel.com/new

2. Sélectionnez le repository GitHub contenant votre projet.

3. Cliquez sur Import.

**4. Configuration du framework**


| Option               | Valeur              |
| -------------------- | ------------------- |
| **Framework**        | Vite (auto-détecté) |
| **Build Command**    | `npm run build`     |
| **Output Directory** | `dist`              |



**Vercel détecte automatiquement Vite.**

- Configuration recommandée :

- Option	Valeur
- Framework	Vite (auto-détecté)
- Build Command	npm run build
- Output Directory	dist

**Si ce n’est pas détecté automatiquement, configurez :**



```text
Build Command: npm run build
Output Directory: dist
```


 **5. Lancer le déploiement**

1. Cliquez sur Deploy.

2. Vercel va :

3. installer les dépendances (npm install)

4. exécuter le build (npm run build)

5. héberger les fichiers du dossier dist

**À la fin du déploiement, vous obtiendrez une URL :**



https://nom-du-projet.vercel.app


## Votre site est maintenant en ligne 

**6. Vérifier que l’application SPA fonctionne**

**Pour un projet Vite, les routes d’une SPA doivent fonctionner :**

- Testez les liens internes (/about, /projects, etc.)

- Rechargez une page directement depuis l’URL pour vérifier que Vercel redirige bien vers index.html





 **7. Ajouter un domaine personnalisé (optionnel)**

1. Ouvrir votre projet dans Vercel.

2. Aller dans :


```text
Settings → Domains
```

3. Cliquez sur Add Domain.

4. Entrez votre domaine (ex : mon-portfolio.com)

5. Suivez les instructions DNS (A ou CNAME) chez votre fournisseur de domaine (OVH, Namecheap, etc.)

6. Une fois la configuration propagée, votre site sera accessible sur :

https://mon-portfolio.com

**8. Déploiement automatique**

- À chaque commit sur GitHub :

- Vercel reconstruit votre projet

- Déploie automatiquement la nouvelle version



**9. Commandes utiles**


- Installer les dépendances

```text
npm install
```


- Lancer le serveur local


```text
npm run dev
```



- Construire avant déploiement


```text
npm run build
```



**10. Résumé des étapes**

1. Préparer le projet Vite

2. Se connecter sur Vercel

3. Importer le repo GitHub

4. Choisir Framework : Vite

5. Build Command : npm run build

6. Output Directory : dist

7. Déployez



















