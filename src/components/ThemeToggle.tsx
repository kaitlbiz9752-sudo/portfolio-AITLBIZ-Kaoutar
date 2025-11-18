import { useEffect, useState } from "react";

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
    <button
      type="button"
      onClick={() => setIsDark((v) => !v)}
      className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm bg-white/70 hover:bg-white dark:bg-zinc-800 dark:border-zinc-600 dark:text-zinc-50"
      aria-label="Basculer le thème clair/sombre"
    >
      {/* petit rond pour l’icône (facultatif) */}
      <span
        className="inline-block h-3 w-3 rounded-full bg-amber-400 dark:bg-zinc-100"
        aria-hidden="true"
      />
      <span>{isDark ? "Dark" : "Light"}</span>
    </button>
  );
}
