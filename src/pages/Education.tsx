import { education } from "@/data/education";
import { Helmet } from "react-helmet-async";

function fmt(date?: string) {
  if (!date) return "Présent";
  // si c’est juste une année ("2020")
  if (!date.includes("-")) return date;
  const [y, m] = date.split("-");
  return `${m}/${y}`; // 09/2023
}

export default function EducationPage() {
  return (
    <section className="grid gap-6">
      <Helmet>
        <title>Formations — Portfolio</title>
        <meta
          name="description"
          content="Parcours scolaire : bac sciences physiques, FST MIPC, licence et master en informatique à l’ENS Cadi Ayyad."
        />
      </Helmet>

      <h2 className="text-2xl font-semibold">Formations</h2>

      <ol className="relative border-s">
        {education.map((e) => (
          <li key={e.id} className="ms-6 pb-6">
            <span className="absolute -start-1.5 mt-2 h-3 w-3 rounded-full bg-primary" />

            <h3 className="font-semibold">
              {e.title}
              <span className="block text-sm text-muted-foreground">
                @ {e.school}
              </span>
            </h3>

            <p className="text-sm text-muted-foreground">
              {fmt(e.start)} — {fmt(e.end)} • {e.location}
            </p>

            {e.details.length > 0 && (
              <ul className="mt-2 ms-5 list-disc text-sm">
                {e.details.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ol>
    </section>
  );
}
