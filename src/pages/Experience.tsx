import { experiences } from "@/data/experience";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";

function fmt(date?: string) {
  if (!date) return "Présent";
  const [y, m] = date.split("-");
  return `${m}/${y}`;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function ExperiencePage() {
  return (
    <motion.section
      className="grid gap-8"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <Helmet>
        <title>Parcours — Portfolio</title>
        <meta
          name="description"
          content="Expériences professionnelles, stages et projets académiques."
        />
      </Helmet>

      <motion.h2
        className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent"
        variants={itemVariants}
      >
        Parcours
      </motion.h2>

      <ol className="relative border-l-2 border-primary/30 ml-4">
        {experiences.map((exp, index) => (
          <motion.li
            key={exp.title + exp.start}
            className="mb-8 ml-8 relative"
            variants={itemVariants}
            whileHover={{ x: 8 }}
            transition={{ duration: 0.3 }}
          >
            {/* Timeline dot */}
            <motion.span
              className="absolute -left-[34px] top-2 h-4 w-4 rounded-full bg-primary border-4 border-background shadow-lg"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: index * 0.15 + 0.4, type: "spring", stiffness: 200 }}
            />
            
            {/* Content card */}
            <div className="relative border-2 border-border rounded-xl p-6 bg-card hover:bg-card/80 transition-all duration-300 hover:shadow-lg hover:border-primary/30 group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
              
              <div className="relative z-10">
                <h3 className="font-semibold text-lg group-hover:text-primary transition-colors duration-300">
                  {exp.title}
                  <span className="text-sm text-muted-foreground font-normal block mt-1">
                    @ {exp.company}
                  </span>
                </h3>

                <p className="text-sm text-muted-foreground mt-2 font-medium">
                  {fmt(exp.start)} — {fmt(exp.end)}
                  {exp.location ? ` • ${exp.location}` : ""}
                </p>

                <p className="mt-3 leading-relaxed">{exp.description}</p>

                {exp.tasks && (
                  <ul className="list-disc ms-5 mt-3 text-sm space-y-1.5">
                    {exp.tasks.map((t) => (
                      <motion.li
                        key={t}
                        className="text-muted-foreground"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.15 + 0.6 }}
                      >
                        {t}
                      </motion.li>
                    ))}
                  </ul>
                )}

                {exp.skills && (
                  <div className="mt-4 flex flex-wrap gap-2 text-xs">
                    {exp.skills.map((s) => (
                      <motion.span
                        key={s}
                        className="border-2 border-border rounded-full px-3 py-1 bg-background/50 hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 cursor-default"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {s}
                      </motion.span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </motion.li>
        ))}
      </ol>
    </motion.section>
  );
}
