import { experiences } from "@/data/experience";
import { Helmet } from "react-helmet-async";

function fmt(date?: string) {
  if (!date) return "Présent";
  const [y, m] = date.split("-");
  return `${m}/${y}`;
}

export default function ExperiencePage() {
  return (
    <section className="grid gap-6">
      <Helmet>
        <title>Parcours — Portfolio</title>
        <meta
          name="description"
          content="Expériences professionnelles, stages et projets académiques."
        />
      </Helmet>

      <h2 className="text-2xl font-semibold">Parcours</h2>

      <ol className="relative border-s">
        {experiences.map((exp) => (
          <li key={exp.title + exp.start} className="ms-6 pb-6">
            <span className="absolute -start-1.5 mt-2 h-3 w-3 rounded-full bg-primary" />

            <h3 className="font-semibold">
              {exp.title}
              <span className="text-sm text-muted-foreground">
                {" "} @ {exp.company}
              </span>
            </h3>

            <p className="text-sm text-muted-foreground">
              {fmt(exp.start)} — {fmt(exp.end)}
              {exp.location ? ` • ${exp.location}` : ""}
            </p>

            <p className="mt-2">{exp.description}</p>

            {exp.tasks && (
              <ul className="list-disc ms-5 mt-2 text-sm">
                {exp.tasks.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            )}

            {exp.skills && (
              <div className="mt-3 flex flex-wrap gap-2 text-xs">
                {exp.skills.map((s) => (
                  <span
                    key={s}
                    className="border rounded px-2 py-0.5 text-muted-foreground"
                  >
                    {s}
                  </span>
                ))}
              </div>
            )}
          </li>
        ))}
      </ol>
    </section>
  );
}
