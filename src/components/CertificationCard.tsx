import type { Certification } from "@/data/certifications";
import clsx from "clsx";
import { motion } from "framer-motion";

type Props = {
  c?: Certification;                     // on tolère undefined pour éviter les crashs
  onView?: (c: Certification) => void;   // pour ouvrir le popup
};

function mmYYYY(s: string) {
  const [y, m] = s.split("-");
  return `${m}/${y}`;
}

export default function CertificationCard({ c, onView }: Props) {
  // si jamais c n'est pas défini, on ne rend rien (évite l'erreur status)
  if (!c) return null;

  const isExpired =
    c.status === "expired" ||
    (c.expiryDate && c.expiryDate < c.issueDate);

  return (
    <motion.article
      className={clsx(
        "group relative border-2 border-border rounded-2xl p-6 bg-card hover:bg-card/80 transition-all duration-300 hover:shadow-xl hover:border-primary/30 overflow-hidden",
        isExpired && "opacity-80"
      )}
      aria-label={`Certification ${c.title}`}
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative z-10">
        {c.image && (
          <motion.div
            className="mb-4 cursor-pointer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onView && onView(c)}
          >
            <img
              src={c.image}
              alt={c.imageAlt ?? c.title}
              width={256}
              height={256}
              loading="lazy"
              className="w-28 h-28 object-contain rounded-lg border-2 border-border bg-background/50 p-2 hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-md"
            />
          </motion.div>
        )}

        <h3 className="font-semibold text-lg leading-snug group-hover:text-primary transition-colors duration-300 mb-2">
          {c.title}
        </h3>
        <p className="text-sm text-muted-foreground font-medium">
          {c.issuer} • {mmYYYY(c.issueDate)}
          {c.expiryDate ? ` → ${mmYYYY(c.expiryDate)}` : ""}
        </p>

        {c.skills?.length ? (
          <p className="mt-3 text-sm text-muted-foreground">
            <span className="font-medium">Compétences :</span> {c.skills.join(", ")}
          </p>
        ) : null}

        <div className="mt-4 flex flex-wrap items-center gap-3 text-sm">
          {/* 🔗 Bouton de vérification du certificat */}
          {c.credentialUrl && (
            <motion.a
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium underline underline-offset-4 hover:underline-offset-2 transition-all duration-300"
              href={c.credentialUrl}
              target="_blank"
              rel="noreferrer"
              whileHover={{ x: 4 }}
              whileTap={{ scale: 0.95 }}
            >
              Vérifier le certificat
              <span className="text-xs">→</span>
            </motion.a>
          )}

          {/* Indicateurs de statut, si tu les utilises un jour */}
          {isExpired && (
            <span className="text-primary/80 dark:text-primary/70 font-medium">
              Expirée
            </span>
          )}
          {c.status === "revoked" && (
            <span className="text-destructive font-medium">
              Révoquée
            </span>
          )}
        </div>
      </div>
    </motion.article>
  );
}
