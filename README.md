# Portfolio – AITLBIZ Kaoutar

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




