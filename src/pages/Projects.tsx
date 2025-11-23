// src/pages/Projects.tsx

import { projects } from "@/data/projects";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";

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

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5, // ease retiré car incompatible TS/Vercel
    },
  },
};

export default function Projects() {
  return (
    <motion.section
      className="grid gap-8"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <Helmet>
        <title>Projets — Portfolio</title>
        <meta
          name="description"
          content="Liste des projets : applications web Java / Thymeleaf et applications mobiles Android."
        />
      </Helmet>

      <motion.h2
        className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent"
        variants={cardVariants}
      >
        Projets
      </motion.h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, index) => (
          <motion.article
            key={p.title}
            variants={cardVariants}
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="group relative border-2 border-border rounded-2xl p-6 bg-card hover:bg-card/80 transition-all duration-300 hover:shadow-xl hover:border-primary/30 overflow-hidden"
          >
            {/* Gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="relative z-10">
              <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors duration-300">
                {p.title}
              </h3>

              {p.period && (
                <p className="text-xs text-muted-foreground mb-3 font-medium">
                  {p.period}
                </p>
              )}

              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {p.summary}
              </p>

              <div className="mt-4 flex flex-wrap gap-2 text-xs">
                {p.tags.map((t) => (
                  <motion.span
                    key={t}
                    className="border-2 border-border rounded-full px-3 py-1 bg-background/50 hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 cursor-default"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {t}
                  </motion.span>
                ))}
              </div>

              <div className="mt-6 flex gap-4 text-sm">
                {p.link && (
                  <motion.a
                    href={p.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium underline underline-offset-4 transition-all duration-300"
                    whileHover={{ x: 4 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Demo
                    <span className="text-xs">→</span>
                  </motion.a>
                )}
                {p.repo && (
                  <motion.a
                    href={p.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium underline underline-offset-4 transition-all duration-300"
                    whileHover={{ x: 4 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Code
                    <span className="text-xs">→</span>
                  </motion.a>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
}
