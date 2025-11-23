import { certifications } from "@/data/certifications";
import type { Certification } from "@/data/certifications";
import { useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import CertificationCard from "@/components/CertificationCard";

export default function CertificationsPage() {
  const [q, setQ] = useState("");
  const [selected, setSelected] = useState<Certification | null>(null);

  const list = useMemo(
    () =>
      certifications
        .filter((c) =>
          [c.title, c.issuer, ...(c.tags ?? []), ...(c.skills ?? [])]
            .join(" ")
            .toLowerCase()
            .includes(q.toLowerCase())
        )
        .sort((a, b) => b.issueDate.localeCompare(a.issueDate)),
    [q]
  );

  return (
    <>
      <section className="grid gap-6">
        <Helmet>
          <title>Certifications — Portfolio</title>
          <meta
            name="description"
            content="Certifications professionnelles : IA, Java, Cloud, et plus."
          />
        </Helmet>

        <div className="flex items-center justify-between gap-4">
          <h2 className="text-2xl font-semibold">Certifications</h2>
          <input
            placeholder="Filtrer (ex: NLP, Java, Azure)"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            className="border rounded-xl px-3 py-2 w-72"
            aria-label="Filtrer les certifications"
          />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {list.map((c) => (
            <CertificationCard
              key={c.title + c.issueDate}
              c={c}
              onView={setSelected}
            />
          ))}
        </div>
      </section>

      {/* Popup / Lightbox pour voir le certificat en grand */}
      {selected && selected.image && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-white rounded-2xl p-4 max-w-3xl w-[90%] max-h-[90vh] flex flex-col gap-3"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center">
              <h3 className="font-semibold text-lg">
                {selected.title}
              </h3>
              <button
                type="button"
                className="text-sm underline"
                onClick={() => setSelected(null)}
              >
                Fermer
              </button>
            </div>

            <img
              src={selected.image}
              alt={selected.imageAlt ?? selected.title}
              className="mx-auto max-h-[70vh] w-auto object-contain"
            />

            {selected.credentialUrl && (
              <a
                href={selected.credentialUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-2 text-sm underline self-start"
              >
                Vérifier ce certificat
              </a>
            )}
          </div>
        </div>
      )}
    </>
  );
}
