import { Helmet } from "react-helmet-async";

const FORM_ENDPOINT = "https://formspree.io/f/xldvodnz";
// 📝 Remplace l'URL ci-dessus par le lien de ton formulaire
// (Formspree, Getform, etc.)

export default function Contact() {
  return (
    <section className="grid gap-8">
      <Helmet>
        <title>Contact — Portfolio</title>
        <meta
          name="description"
          content="Contacter AITLBIZ Kaoutar par email ou via le formulaire de contact."
        />
      </Helmet>

      <h1 className="text-3xl font-semibold">Contact</h1>
      <p className="text-muted-foreground">
        Vous pouvez me contacter via les informations ci-dessous ou en
        remplissant le formulaire.
      </p>

      {/* Carte avec les infos directes */}
      <div className="rounded-2xl border bg-background/60 px-6 py-5 shadow-sm max-w-3xl">
        <p className="mb-3">
          <span className="font-semibold">Nom complet :</span>{" "}
          AITLBIZ Kaoutar
        </p>
        <p className="mb-1">
          <span className="font-semibold">Email :</span>{" "}
          <a
            href="mailto:k.aitlbiz9752@uca.ac.ma"
            className="underline"
          >
            k.aitlbiz9752@uca.ac.ma
          </a>
        </p>
        <p className="mb-1">
          <span className="font-semibold">Téléphone :</span>{" "}
          <a href="tel:0712370489" className="underline">
            07 12 37 04 89
          </a>
        </p>
        <p className="mt-3 text-sm text-muted-foreground">
          Je réponds généralement sous 24h.
        </p>
      </div>

      {/* Formulaire de contact */}
      <div className="max-w-xl">
        <h2 className="text-xl font-semibold mb-3">
          M&apos;envoyer un message
        </h2>
        <form
          action={FORM_ENDPOINT}
          method="POST"
          className="grid gap-4"
        >
          <div className="grid gap-1">
            <label htmlFor="name" className="text-sm font-medium">
              Nom complet
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="border rounded-xl px-3 py-2 bg-background"
              placeholder="Votre nom"
            />
          </div>

          <div className="grid gap-1">
            <label htmlFor="email" className="text-sm font-medium">
              Adresse email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="border rounded-xl px-3 py-2 bg-background"
              placeholder="vous@example.com"
            />
          </div>

          <div className="grid gap-1">
            <label htmlFor="subject" className="text-sm font-medium">
              Sujet
            </label>
            <input
              id="subject"
              name="subject"
              type="text"
              className="border rounded-xl px-3 py-2 bg-background"
              placeholder="Sujet du message"
            />
          </div>

          <div className="grid gap-1">
            <label htmlFor="message" className="text-sm font-medium">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              className="border rounded-xl px-3 py-2 bg-background resize-y"
              placeholder="Écrivez votre message ici..."
            />
          </div>

          {/* Champ caché facultatif pour savoir que ça vient du portfolio */}
          <input
            type="hidden"
            name="source"
            value="Portfolio AITLBIZ Kaoutar"
          />

          <button
            type="submit"
            className="mt-2 inline-flex items-center justify-center rounded-xl border px-4 py-2 text-sm font-medium hover:shadow"
          >
            Envoyer le message
          </button>
        </form>

        <p className="mt-3 text-xs text-muted-foreground">
          Les informations envoyées via ce formulaire seront stockées dans
          votre service de formulaires (Formspree / autre) et ne seront pas
          publiées.
        </p>
      </div>
    </section>
  );
}
