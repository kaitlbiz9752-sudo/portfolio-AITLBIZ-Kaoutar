import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";

const FORM_ENDPOINT = "https://formspree.io/f/xldvodnz";
// 📝 Remplace l'URL ci-dessus par le lien de ton formulaire
// (Formspree, Getform, etc.)

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
      duration: 0.6, // ⬅️ ease supprimé pour corriger TypeScript
    },
  },
};

export default function Contact() {
  return (
    <motion.section
      className="grid gap-8"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <Helmet>
        <title>Contact — Portfolio</title>
        <meta
          name="description"
          content="Contacter AITLBIZ Kaoutar par email ou via le formulaire de contact."
        />
      </Helmet>

      <motion.h1
        className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent"
        variants={itemVariants}
      >
        Contact
      </motion.h1>

      <motion.p
        className="text-muted-foreground text-lg"
        variants={itemVariants}
      >
        Vous pouvez me contacter via les informations ci-dessous ou en
        remplissant le formulaire.
      </motion.p>

      {/* Carte avec les infos directes */}
      <motion.div
        className="relative rounded-2xl border-2 border-border bg-card/60 px-6 py-5 shadow-lg hover:shadow-xl max-w-3xl transition-all duration-300 hover:border-primary/30 group overflow-hidden"
        variants={itemVariants}
        whileHover={{ scale: 1.02 }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="relative z-10 space-y-3">
          <p>
            <span className="font-semibold">Nom complet :</span>{" "}
            <span className="text-muted-foreground">AITLBIZ Kaoutar</span>
          </p>
          <p>
            <span className="font-semibold">Email :</span>{" "}
            <motion.a
              href="mailto:k.aitlbiz9752@uca.ac.ma"
              className="text-primary hover:text-primary/80 underline underline-offset-4 transition-colors duration-300 inline-flex items-center gap-1"
              whileHover={{ x: 4 }}
            >
              k.aitlbiz9752@uca.ac.ma
              <span className="text-xs">→</span>
            </motion.a>
          </p>
          <p>
            <span className="font-semibold">Téléphone :</span>{" "}
            <motion.a
              href="tel:0712370489"
              className="text-primary hover:text-primary/80 underline underline-offset-4 transition-colors duration-300 inline-flex items-center gap-1"
              whileHover={{ x: 4 }}
            >
              07 12 37 04 89
              <span className="text-xs">→</span>
            </motion.a>
          </p>
          <p className="mt-4 text-sm text-muted-foreground italic">
            Je réponds généralement sous 24h.
          </p>
        </div>
      </motion.div>

      {/* Formulaire de contact */}
      <motion.div className="max-w-xl" variants={itemVariants}>
        <h2 className="text-xl font-semibold mb-4">
          M&apos;envoyer un message
        </h2>
        <form action={FORM_ENDPOINT} method="POST" className="grid gap-5">
          <motion.div className="grid gap-2" variants={itemVariants}>
            <label htmlFor="name" className="text-sm font-medium">
              Nom complet
            </label>
            <motion.input
              id="name"
              name="name"
              type="text"
              required
              className="border-2 border-border rounded-xl px-4 py-3 bg-background focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300"
              placeholder="Votre nom"
              whileFocus={{ scale: 1.02 }}
            />
          </motion.div>

          <motion.div className="grid gap-2" variants={itemVariants}>
            <label htmlFor="email" className="text-sm font-medium">
              Adresse email
            </label>
            <motion.input
              id="email"
              name="email"
              type="email"
              required
              className="border-2 border-border rounded-xl px-4 py-3 bg-background focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300"
              placeholder="vous@example.com"
              whileFocus={{ scale: 1.02 }}
            />
          </motion.div>

          <motion.div className="grid gap-2" variants={itemVariants}>
            <label htmlFor="subject" className="text-sm font-medium">
              Sujet
            </label>
            <motion.input
              id="subject"
              name="subject"
              type="text"
              className="border-2 border-border rounded-xl px-4 py-3 bg-background focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300"
              placeholder="Sujet du message"
              whileFocus={{ scale: 1.02 }}
            />
          </motion.div>

          <motion.div className="grid gap-2" variants={itemVariants}>
            <label htmlFor="message" className="text-sm font-medium">
              Message
            </label>
            <motion.textarea
              id="message"
              name="message"
              required
              rows={5}
              className="border-2 border-border rounded-xl px-4 py-3 bg-background resize-y focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300"
              placeholder="Écrivez votre message ici..."
              whileFocus={{ scale: 1.02 }}
            />
          </motion.div>

          {/* Champ caché facultatif pour savoir que ça vient du portfolio */}
          <input
            type="hidden"
            name="source"
            value="Portfolio AITLBIZ Kaoutar"
          />

          <motion.button
            type="submit"
            className="mt-2 inline-flex items-center justify-center rounded-xl border-2 border-primary bg-primary/10 hover:bg-primary/20 text-foreground px-6 py-3 text-sm font-medium transition-all duration-300 hover:shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Envoyer le message
          </motion.button>
        </form>

        <motion.p
          className="mt-4 text-xs text-muted-foreground"
          variants={itemVariants}
        >
          Les informations envoyées via ce formulaire seront stockées dans
          votre service de formulaires (Formspree / autre) et ne seront pas
          publiées.
        </motion.p>
      </motion.div>
    </motion.section>
  );
}
