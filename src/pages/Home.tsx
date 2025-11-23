import { profile } from "@/data/profile";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import profilePhoto from "@/assets/profile.jpeg";
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

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8, x: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const techVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.05,
      duration: 0.4,
      ease: "easeOut",
    },
  }),
};

const technologies = [
  "Java",
  "Spring Boot",
  "Thymeleaf",
  "Python",
  "Django",
  "Android",
  "Kotlin",
  "JavaScript",
  "React",
  "TailwindCSS",
  "MySQL",
  "Firebase",
];

export default function Home() {
  return (
    <motion.section
      className="grid gap-6 md:grid-cols-2 items-center min-h-[calc(100vh-200px)]"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <Helmet>
        <title>{profile.name} — Portfolio</title>
        <meta
          name="description"
          content="Portfolio professionnel : IA, SIG, DevSecOps, Android, projets et certifications."
        />
      </Helmet>

      {/* Colonne gauche : texte */}
      <motion.div variants={itemVariants}>
        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent"
          variants={itemVariants}
        >
          {profile.name}
        </motion.h1>

        <motion.p
          className="mt-2 text-xl md:text-2xl font-medium text-primary"
          variants={itemVariants}
        >
          {profile.role}
        </motion.p>
        <motion.p
          className="mt-1 text-sm text-muted-foreground"
          variants={itemVariants}
        >
          {profile.location}
        </motion.p>

        <motion.p
          className="mt-4 text-muted-foreground leading-relaxed"
          variants={itemVariants}
        >
          {profile.about}
        </motion.p>

        <motion.div
          className="mt-6 flex gap-4"
          variants={itemVariants}
        >
          <Link
            to="/projects"
            className="group relative inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-foreground bg-primary/10 hover:bg-primary/20 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            <span className="relative z-10">Voir les projets</span>
            <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/20 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Link>
          <Link
            to="/contact"
            className="group relative inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-foreground border-2 border-primary/30 hover:border-primary/60 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            <span className="relative z-10">Contact</span>
          </Link>
        </motion.div>

        <motion.p
          className="mt-6 text-sm text-muted-foreground"
          variants={itemVariants}
        >
          Retrouvez l'ensemble de mes projets sur mon GitHub :{" "}
          <a
            href="https://github.com/kaitlbiz9752-sudo"
            target="_blank"
            rel="noreferrer"
            className="underline font-medium text-primary hover:text-primary/80 transition-colors"
          >
            github.com/kaitlbiz9752-sudo
          </a>
        </motion.p>

        {/* Badges */}
        <motion.div
          className="mt-4 flex flex-wrap gap-2 text-sm"
          variants={itemVariants}
        >
          <span className="rounded-full border-2 border-primary/30 bg-primary/5 px-4 py-1.5 font-medium text-primary shadow-sm hover:shadow-md transition-shadow duration-300">
            Master IA (2025)
          </span>
        </motion.div>

        {/* Technologies */}
        <motion.div
          className="mt-8"
          variants={itemVariants}
        >
          <h3 className="text-lg font-semibold mb-4">Technologies & Outils</h3>

          <div className="flex flex-wrap gap-2 text-sm">
            {technologies.map((tech, i) => (
              <motion.span
                key={tech}
                custom={i}
                variants={techVariants}
                initial="hidden"
                animate="visible"
                className="border-2 border-border rounded-full px-4 py-1.5 bg-card hover:bg-primary/5 hover:border-primary/50 hover:scale-110 transition-all duration-300 cursor-default shadow-sm hover:shadow-md"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Colonne droite : photo */}
      <motion.div
        className="flex justify-center md:justify-end"
        variants={imageVariants}
      >
        <motion.div
          className="relative"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl blur-xl -z-10 animate-pulse-slow" />
          <img
            src={profilePhoto}
            alt={profile.name}
            className="w-64 h-64 md:w-80 md:h-80 rounded-2xl object-cover border-2 border-primary/20 shadow-2xl relative z-10"
          />
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-primary/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
