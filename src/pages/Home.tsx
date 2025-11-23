import { profile } from "@/data/profile";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import profilePhoto from "@/assets/profile.jpeg";

export default function Home() {
  return (
    <section className="grid gap-6 md:grid-cols-2 items-center">
      <Helmet>
        <title>{profile.name} — Portfolio</title>
        <meta
          name="description"
          content="Portfolio d'AITLBIZ Kaoutar, ingénieure en informatique : développement web et mobile, projets et formations."
        />
      </Helmet>

      {/* Colonne gauche : texte */}
      <div>
        <h1 className="text-4xl md:text-5xl font-bold">{profile.name}</h1>
        <p className="mt-2 text-xl">{profile.role}</p>
        <p className="mt-1 text-sm text-muted-foreground">
          {profile.location}
        </p>

        <p className="mt-4 text-muted-foreground">{profile.about}</p>

        {/* Liens navigation */}
        <div className="mt-6 flex gap-3">
          <Link to="/projects" className="underline">
            Voir les projets
          </Link>
          <Link to="/contact" className="underline">
            Contact
          </Link>
        </div>

        {/* Lien GitHub ajouté */}
        <p className="mt-4 text-sm">
          Retrouvez l’ensemble de mes projets sur mon GitHub :{" "}
          <a
            href="https://github.com/kaitlbiz9752-sudo"
            target="_blank"
            rel="noreferrer"
            className="underline font-medium"
          >
            github.com/kaitlbiz9752-sudo
          </a>
        </p>

        {/* Badges */}
        <div className="mt-6 flex flex-wrap gap-2 text-sm">
          <span className="rounded-full border px-3 py-1">
            Master IA (2025)
          </span>
        </div>
      </div>

      {/* Colonne droite : photo */}
      <div className="flex justify-center md:justify-end">
        <img
          src={profilePhoto}
          alt={profile.name}
          className="w-64 h-64 md:w-80 md:h-80 rounded-2xl object-cover border shadow-sm"
        />
      </div>
    </section>
  );
}
