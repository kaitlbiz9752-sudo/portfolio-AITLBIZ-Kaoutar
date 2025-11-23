import { education } from "@/data/education";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";

function fmt(date?: string) {
  if (!date) return "Présent";
  if (!date.includes("-")) return date;
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
      // ❌ ease supprimé car incompatible TypeScript
    },
  },
};

export default function EducationPage() {
  return (
    <motion.section
      className="grid gap-8"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <Helmet>
        <title>Formations — Portfolio</title>
        <meta
          name="description"
          content="Parcours scolaire : bac sciences physiques, FST MIPC, licence et master en informatique à l'ENS Cadi Ayyad."
        />
      </Helmet>

      <motion.h2
        className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent"
        variants={itemVariants}
      >
        Formations
      </motion.h2>

      <ol className="relative border-l-2 border-primary/30 ml-4">
        {education.map((e, index) => (
          <motion.li
            key={e.id}
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
              transition={{
                delay: index * 0.15 + 0.4,
                type: "spring",
                stiffness: 200,
              }}
            />

            {/* Content card */}
            <div className="relative border-2 border-border rounded-xl p-6 bg-card hover:bg-card/80 transition-all duration-300 hover:shadow-lg hover:border-primary/30 group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />

              <div className="relative z-10">
                <h3 className="font-semibold text-lg group-hover:text-primary transition-colors duration-300">
                  {e.title}
                  <span className="block text-sm text-muted-foreground font-normal mt-1">
                    @ {e.school}
                  </span>
                </h3>

                <p className="text-sm text-muted-foreground mt-2 font-medium">
                  {fmt(e.start)} — {fmt(e.end)} • {e.location}
                </p>

                {e.details.length > 0 && (
                  <ul className="mt-3 ms-5 list-disc text-sm space-y-1.5">
                    {e.details.map((d, i) => (
                      <motion.li
                        key={d}
                        className="text-muted-foreground"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          delay: index * 0.15 + 0.6 + i * 0.1,
                        }}
                      >
                        {d}
                      </motion.li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </motion.li>
        ))}
      </ol>
    </motion.section>
  );
}
