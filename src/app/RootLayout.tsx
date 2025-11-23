import { NavLink, Outlet } from "react-router-dom";
import ThemeToggle from "@/components/ThemeToggle";
import { motion } from "framer-motion";

export default function RootLayout() {
  return (
    <div className="min-h-dvh bg-background text-foreground">
      <motion.header
        className="sticky top-0 z-50 border-b border-border/40 backdrop-blur-md bg-background/80 dark:bg-background/90 shadow-sm"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <nav className="mx-auto max-w-6xl flex items-center justify-between p-4">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <NavLink
              to="/"
              className="font-bold text-xl bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent hover:from-primary/80 hover:to-primary/50 transition-all duration-300"
            >
              MonPortfolio
            </NavLink>
          </motion.div>

          <div className="flex items-center gap-2 md:gap-4 text-sm">
            {[
              { to: "/projects", label: "Projets" },
              { to: "/experience", label: "Parcours" },
              { to: "/education", label: "Formations" },
              { to: "/certifications", label: "Certifications" },
              { to: "/contact", label: "Contact" },
            ].map((link, index) => (
              <motion.div
                key={link.to}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
              >
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    `relative px-3 py-2 rounded-lg transition-all duration-300 ${
                      isActive
                        ? "text-primary font-semibold"
                        : "text-muted-foreground hover:text-foreground"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {link.label}
                      {isActive && (
                        <motion.div
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full"
                          layoutId="activeTab"
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      )}
                    </>
                  )}
                </NavLink>
              </motion.div>
            ))}

            {/* Bouton Dark / Light */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
            >
              <ThemeToggle />
            </motion.div>
          </div>
        </nav>
      </motion.header>

      <main className="mx-auto max-w-6xl p-6 md:p-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Outlet />
        </motion.div>
      </main>

      <motion.footer
        className="border-t border-border/40 py-6 text-center text-sm text-muted-foreground mt-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        © {new Date().getFullYear()} • AITLBIZ Kaoutar
      </motion.footer>
    </div>
  );
}
