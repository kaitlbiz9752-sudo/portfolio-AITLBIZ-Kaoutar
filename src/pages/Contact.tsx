import { Helmet } from "react-helmet-async";

export default function Contact() {
  return (
    <section className="grid gap-6 max-w-3xl mx-auto py-10">
      <Helmet>
        <title>Contact — Portfolio</title>
        <meta
          name="description"
          content="Contactez AITLBIZ Kaoutar — email, téléphone et informations personnelles."
        />
      </Helmet>

      <h1 className="text-3xl font-bold">Contact</h1>

      <p className="text-muted-foreground">
        Vous pouvez me contacter via les informations ci-dessous.
      </p>

      <div className="border rounded-2xl p-6 shadow-sm bg-white">
        <ul className="space-y-3 text-lg">
          <li>
            <span className="font-semibold">Nom complet :</span>{" "}
            AITLBIZ Kaoutar
          </li>

          <li>
            <span className="font-semibold">Email :</span>{" "}
            <a
              href="mailto:k.aitlbiz9752@uca.ac.ma"
              className="underline text-blue-600"
            >
              k.aitlbiz9752@uca.ac.ma
            </a>
          </li>

          <li>
            <span className="font-semibold">Téléphone :</span>{" "}
            <a href="tel:0712370489" className="underline text-blue-600">
              07 12 37 04 89
            </a>
          </li>
        </ul>
      </div>

      <p className="text-sm text-muted-foreground mt-4">
        Je réponds généralement sous 24h.
      </p>
    </section>
  );
}
