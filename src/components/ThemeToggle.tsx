import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function ThemeToggle() {
  // État du thème (false = clair, true = sombre)
  const [isDark, setIsDark] = useState(false);

  // 1) Initialisation après le montage du composant
  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    const initial = stored === "dark" || (!stored && prefersDark);
    setIsDark(initial);
  }, []);

  // 2) À chaque changement de isDark → on met à jour <html> + localStorage
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  return (
    <motion.button
      type="button"
      onClick={() => setIsDark((v) => !v)}
      className="inline-flex items-center gap-2 rounded-full border-2 border-border px-4 py-2 text-sm bg-background hover:bg-primary/10 transition-all duration-300"
      aria-label="Basculer le thème clair/sombre"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* petit rond pour l'icône (facultatif) */}
      <motion.span
        className="inline-block h-3 w-3 rounded-full bg-primary"
        aria-hidden="true"
        animate={{ rotate: isDark ? 180 : 0 }}
        transition={{ duration: 0.3 }}
      />
      <span>{isDark ? "Dark" : "Light"}</span>
    </motion.button>
  );
}
