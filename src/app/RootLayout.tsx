import { NavLink, Outlet } from "react-router-dom";
import ThemeToggle from "@/components/ThemeToggle";

export default function RootLayout() {
  return (
    <div className="min-h-dvh bg-[#f5f0e6] text-neutral-900 dark:bg-zinc-900 dark:text-zinc-50">
      <header className="sticky top-0 border-b border-black/10 dark:border-zinc-800 backdrop-blur bg-[#f5f0e6]/80 dark:bg-zinc-900/80">
        <nav className="mx-auto max-w-6xl flex items-center justify-between p-4">
          <NavLink to="/" className="font-bold text-lg">
            MonPortfolio
          </NavLink>

          <div className="flex items-center gap-4 text-sm">
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                isActive ? "font-semibold underline" : ""
              }
            >
              Projets
            </NavLink>
            <NavLink
              to="/experience"
              className={({ isActive }) =>
                isActive ? "font-semibold underline" : ""
              }
            >
              Parcours
            </NavLink>
            <NavLink
              to="/education"
              className={({ isActive }) =>
                isActive ? "font-semibold underline" : ""
              }
            >
              Formations
            </NavLink>
            <NavLink
              to="/certifications"
              className={({ isActive }) =>
                isActive ? "font-semibold underline" : ""
              }
            >
              Certifications
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "font-semibold underline" : ""
              }
            >
              Contact
            </NavLink>

            {/* Bouton Dark / Light */}
            <ThemeToggle />
          </div>
        </nav>
      </header>

      <main className="mx-auto max-w-6xl p-6">
        <Outlet />
      </main>

      <footer className="border-t border-black/10 dark:border-zinc-800 py-6 text-center text-sm text-neutral-500 dark:text-zinc-400">
        © {new Date().getFullYear()} • AITLBIZ Kaoutar
      </footer>
    </div>
  );
}
