import type { Certification } from "@/data/certifications";
import clsx from "clsx";

function mmYYYY(s: string) {
  const [y, m] = s.split("-");
  return `${m}/${y}`;
}

type Props = {
  c: Certification;
  onView?: (c: Certification) => void;
};

export default function CertificationCard({ c, onView }: Props) {
  const isExpired =
    c.status === "expired" || (c.expiryDate && c.expiryDate < c.issueDate);

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
          className="w-28 h-20 object-contain rounded mb-3"
        />
      )}

      <h3 className="font-semibold leading-snug">{c.title}</h3>

      <p className="text-sm text-muted-foreground">
        {c.issuer} • {mmYYYY(c.issueDate)}
      </p>

      {c.skills?.length ? (
        <p className="mt-2 text-sm">Compétences : {c.skills.join(", ")}</p>
      ) : null}

      <div className="mt-3 flex items-center gap-3 text-sm">
        {c.image && (
          <button
            type="button"
            className="underline"
            onClick={() => onView?.(c)}
          >
            Voir le certificat
          </button>
        )}
        {isExpired && <span className="text-amber-600">Expirée</span>}
        {c.status === "revoked" && (
          <span className="text-red-600">Révoquée</span>
        )}
      </div>
    </article>
  );
}
