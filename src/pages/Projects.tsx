import { projects } from "@/data/projects";
import { Helmet } from "react-helmet-async";

export default function Projects() {
  return (
    <section className="grid gap-6">
      <Helmet>
        <title>Projets — Portfolio</title>
        <meta
          name="description"
          content="Liste des projets : applications web, IA, SIG, DevSecOps."
        />
      </Helmet>

      <h2 className="text-2xl font-semibold">Projets</h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p) => (
          <article
            key={p.title}
            className="border rounded-2xl p-4 hover:shadow"
          >
            <h3 className="font-semibold">{p.title}</h3>
            <p className="text-sm text-muted-foreground">{p.summary}</p>

            <div className="mt-3 flex flex-wrap gap-2 text-xs">
              {p.tags.map((t) => (
                <span key={t} className="border rounded px-2 py-0.5">
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-4 flex gap-3 text-sm">
              {p.link && (
                <a
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  className="underline"
                >
                  Demo
                </a>
              )}
              {p.repo && (
                <a
                  href={p.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="underline"
                >
                  Code
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
