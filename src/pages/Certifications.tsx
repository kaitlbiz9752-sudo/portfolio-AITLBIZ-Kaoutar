import { certifications } from "@/data/certifications";
import type { Certification } from "@/data/certifications";
import { useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import CertificationCard from "@/components/CertificationCard";
import { motion, AnimatePresence } from "framer-motion";

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  return (
    <>
      <motion.section
        className="grid gap-8"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <Helmet>
          <title>Certifications — Portfolio</title>
          <meta
            name="description"
            content="Certifications professionnelles : IA, Java, Cloud, et plus."
          />
        </Helmet>

        <motion.div
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
          variants={containerVariants}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent"
            variants={containerVariants}
          >
            Certifications
          </motion.h2>
          <motion.input
            placeholder="Filtrer (ex: NLP, Java, Azure)"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            className="border-2 border-border rounded-xl px-4 py-2.5 w-full sm:w-72 bg-background focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300"
            aria-label="Filtrer les certifications"
            variants={containerVariants}
            whileFocus={{ scale: 1.02 }}
          />
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
        >
          {list.map((c, index) => (
            <motion.div
              key={c.title + c.issueDate}
              variants={containerVariants}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <CertificationCard c={c} onView={setSelected} />
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Popup / Lightbox pour voir le certificat en grand */}
      <AnimatePresence>
        {selected && selected.image && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
            onClick={() => setSelected(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="bg-card border-2 border-border rounded-2xl p-6 max-w-3xl w-full max-h-[90vh] flex flex-col gap-4 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
            >
              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-xl text-foreground">
                  {selected.title}
                </h3>
                <motion.button
                  type="button"
                  className="text-sm font-medium text-muted-foreground hover:text-foreground underline underline-offset-4 transition-colors duration-300"
                  onClick={() => setSelected(null)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Fermer
                </motion.button>
              </div>

              <motion.img
                src={selected.image}
                alt={selected.imageAlt ?? selected.title}
                className="mx-auto max-h-[70vh] w-auto object-contain rounded-lg border border-border"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              />

              {selected.credentialUrl && (
                <motion.a
                  href={selected.credentialUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 text-sm text-primary hover:text-primary/80 font-medium underline underline-offset-4 self-start inline-flex items-center gap-2 transition-colors duration-300"
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Vérifier ce certificat
                  <span className="text-xs">→</span>
                </motion.a>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
