import type { Certification } from "@/data/certifications";
import clsx from "clsx";

type Props = {
  c?: Certification;                     // on tolère undefined pour éviter les crashs
  onView?: (c: Certification) => void;   // pour ouvrir le popup
};

function mmYYYY(s: string) {
  const [y, m] = s.split("-");
  return `${m}/${y}`;
}

export default function CertificationCard({ c, onView }: Props) {
  // si jamais c n’est pas défini, on ne rend rien (évite l’erreur status)
  if (!c) return null;

  const isExpired =
    c.status === "expired" ||
    (c.expiryDate && c.expiryDate < c.issueDate);

  return (
    <article
      className={clsx(
        "border rounded-2xl p-4 hover:shadow transition",
        isExpired && "opacity-80"
      )}
      aria-label={`Certification ${c.title}`}
    >
      {c.image && (
        <img
          src={c.image}
          alt={c.imageAlt ?? c.title}
          width={256}
          height={256}
          loading="lazy"
          className="w-24 h-24 object-contain rounded mb-3 cursor-pointer"
          onClick={() => onView && onView(c)} // ouvrir en grand si onView fourni
        />
      )}

      <h3 className="font-semibold leading-snug">{c.title}</h3>
      <p className="text-sm text-muted-foreground">
        {c.issuer} • {mmYYYY(c.issueDate)}
        {c.expiryDate ? ` → ${mmYYYY(c.expiryDate)}` : ""}
      </p>

      {c.skills?.length ? (
        <p className="mt-2 text-sm">
          Compétences : {c.skills.join(", ")}
        </p>
      ) : null}

      <div className="mt-3 flex flex-wrap items-center gap-3 text-sm">
        {/* 🔗 Bouton de vérification du certificat */}
        {c.credentialUrl && (
          <a
            className="underline"
            href={c.credentialUrl}
            target="_blank"
            rel="noreferrer"
          >
            Vérifier le certificat
          </a>
        )}

        {/* Indicateurs de statut, si tu les utilises un jour */}
        {isExpired && <span className="text-amber-600">Expirée</span>}
        {c.status === "revoked" && (
          <span className="text-red-600">Révoquée</span>
        )}
      </div>
    </article>
  );
}
