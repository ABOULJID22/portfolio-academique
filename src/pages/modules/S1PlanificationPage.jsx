import { modulePages } from '../../data/portfolioData';

const slug = 's1-planification';

export default function S1PlanificationPage() {
  const module = modulePages.find((item) => item.slug === slug);
  const getResourceLink = (resource) => {
    if (resource.href && resource.href !== '#') {
      return resource.href;
    }

    const query = `${module?.title ?? 'Planification'} ${resource.label} CRMEF`;
    return `https://drive.google.com/drive/search?q=${encodeURIComponent(query)}`;
  };

  return (
    <main className="section-shell bg-white">
      <div className="portfolio-container">
        <section className="mb-8 grid gap-6 lg:grid-cols-3">
          <article className="lg:col-span-2">
            {/* ── En-tête ── */}
            <div className="rounded-[16px] border border-border bg-bg p-6 sm:p-8">
              <div className="text-xs font-bold uppercase tracking-[0.16em] text-accent">
                CRMEF Marrakech Safi · 2025-2026
              </div>
              <h1 className="mt-2 text-2xl font-extrabold text-dark sm:text-3xl">Planification</h1>
              <p className="mt-3 text-sm leading-7 text-text">
                Organiser les apprentissages de manière progressive, anticipée et structurée pour développer des compétences durables chez les apprenants.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {[
                  'Approche par compétences',
                  'Planification annuelle',
                  'Planification séquentielle',
                  'Fiche pédagogique',
                  'Évaluation et régulation',
                ].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-primary-light/30 bg-primary-light/5 px-3 py-1 text-xs font-semibold text-primary-light"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </article>

          <aside className="soft-card p-6 sm:p-8">
            <h2 className="text-sm font-bold uppercase tracking-[0.08em] text-accent">Ressources du module</h2>
            <div className="mt-4 space-y-3">
              {(module?.resources ?? []).map((resource) => (
                <a
                  key={resource.label}
                  href={getResourceLink(resource)}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between rounded-[14px] border border-border bg-white px-4 py-3 text-sm font-medium text-text transition hover:border-primary-light hover:text-primary-light"
                >
                  <span>{resource.label}</span>
                  <span aria-hidden="true">→</span>
                </a>
              ))}
            </div>
          </aside>
        </section>

<section className="mt-6 soft-card p-6 sm:p-8">
  <div className="space-y-6">

    {/* ── SECTION 1 — L'APPROCHE PAR COMPÉTENCES (APC) ── */}
    <section className="rounded-[14px] border border-border bg-bg p-5">
      <h2 className="text-xl font-bold text-dark">1. L&apos;Approche Par Compétences (APC)</h2>
      <p className="mt-3 text-sm leading-7 text-text">
        L&apos;APC est le cadre de référence adopté par le système éducatif marocain. Elle place l&apos;apprenant au
        centre du processus éducatif et vise à développer des compétences durables mobilisables dans des situations
        complexes. Dans ce cadre, le professeur n&apos;est plus un simple transmetteur de savoirs, mais un
        orienteur et médiateur qui conçoit des situations d&apos;apprentissage permettant à chaque apprenant de
        construire ses compétences de façon active (socioconstructivisme).
      </p>

      <div className="mt-4 rounded-[12px] border border-border bg-white p-4">
        <h3 className="text-base font-bold text-dark">Définition d&apos;une compétence</h3>
        <p className="mt-2 text-sm leading-7 text-text">
          Un <span className="font-semibold">savoir-agir</span> basé sur la mobilisation efficace de ressources{" "}
          <span className="font-semibold">internes</span> (acquis scolaires, expériences, intérêts) et{" "}
          <span className="font-semibold">externes</span> (enseignants, pairs, documents) dans des contextes
          complexes et variés.
        </p>
      </div>

      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <div className="rounded-[12px] border border-border bg-white p-4">
          <h3 className="text-base font-bold text-primary-light">5 Principes de l&apos;APC (Perrenoud)</h3>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-text">
            <li>Créer des situations didactiques porteuses de sens et d&apos;apprentissages.</li>
            <li>Différencier pour solliciter chaque apprenant dans sa zone proximale de développement.</li>
            <li>Développer une observation formative et une régulation interactive en situation.</li>
            <li>Maîtriser les effets des relations intersubjectives sur la communication didactique.</li>
            <li>Individualiser les parcours de formation dans les cycles pluriannuels d&apos;apprentissage.</li>
          </ul>
        </div>

        <div className="rounded-[12px] border border-border bg-white p-4">
          <h3 className="text-base font-bold text-primary-light">4 Valeurs et Principes</h3>
          <div className="mt-3 space-y-3 text-sm text-text">
            {[
              { p: "Significatif", d: "Ce qui est significatif pour l'apprenant résiste mieux à l'usure du temps → contextualiser les savoirs." },
              { p: "Apprentissage en situation", d: "La situation est l'outil primordial de l'intégration des savoirs." },
              { p: "Enseignement en cycles", d: "Structurer l'enseignement en cycles, hiérarchiser les compétences, évaluer le fondamental." },
              { p: "Différenciation", d: "Tenir compte des différences individuelles : chaque apprenant apprend à son rythme." },
            ].map(({ p, d }) => (
              <div key={p} className="rounded-[8px] bg-bg px-3 py-2">
                <span className="font-semibold text-dark">{p} : </span>
                <span>{d}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* ── SECTION 2 — QU'EST-CE QUE LA PLANIFICATION ? ── */}
    <section className="rounded-[14px] border border-border bg-bg p-5">
      <h2 className="text-xl font-bold text-dark">2. Qu&apos;est-ce que la planification ?</h2>
      <p className="mt-3 text-sm leading-7 text-text">
        La planification est une méthode consistant à choisir des objectifs et à proposer des moyens pour parvenir
        au développement d&apos;une compétence suivant une progression croissante, en organisant l&apos;opération
        enseignement-apprentissage par anticipation.
      </p>
    </section>

    <section className="rounded-[14px] border border-border bg-white p-5">
      <h3 className="text-lg font-bold text-dark">Deux dimensions essentielles</h3>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-text">
        <li>Choisir des objectifs clairs et des moyens adaptés pour développer une compétence.</li>
        <li>Organiser l&apos;enseignement-apprentissage de façon anticipée et structurée.</li>
      </ul>
    </section>

    {/* ── SECTION 3 — POURQUOI PLANIFIER ? ── */}
    <section className="rounded-[14px] border border-border bg-bg p-5">
      <h2 className="text-xl font-bold text-dark">3. Pourquoi planifier ?</h2>

      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <div className="rounded-[12px] border border-border bg-white p-4">
          <h4 className="text-base font-bold text-primary-light">Pour l&apos;apprenant</h4>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-text">
            <li>Faciliter les apprentissages progressifs.</li>
            <li>Intégrer les acquisitions dans des situations complexes.</li>
            <li>Adapter les contenus aux besoins réels et au contexte socioculturel.</li>
          </ul>
        </div>

        <div className="rounded-[12px] border border-border bg-white p-4">
          <h4 className="text-base font-bold text-primary-light">Pour l&apos;enseignant</h4>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-text">
            <li>Organiser son travail selon une logique institutionnelle.</li>
            <li>Avoir une vision globale anticipée de l&apos;évolution de son travail.</li>
            <li>Développer une pratique réflexive permanente.</li>
            <li>Construire progressivement les apprentissages avec les ressources pertinentes.</li>
          </ul>
        </div>
      </div>
    </section>

    {/* ── SECTION 4 — PLANIFIER QUOI ? ── */}
    <section className="rounded-[14px] border border-border bg-white p-5">
      <h2 className="text-xl font-bold text-dark">4. Planifier quoi ?</h2>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-text">
        <li>Les apprentissages dans un programme scolaire selon une progression pertinente et bien définie.</li>
        <li>Les évaluations et les moments d&apos;évaluations.</li>
        <li>Les moments de remédiation et de soutien (type de remédiation et de soutien).</li>
      </ul>
    </section>

    {/* ── SECTION 5 — PRINCIPES DE BASE ── */}
    <section className="rounded-[14px] border border-border bg-bg p-5">
      <h2 className="text-xl font-bold text-dark">5. Principes de base de la planification</h2>
      <div className="mt-4 grid gap-3 sm:grid-cols-3">
        {[
          { title: "Clarté", desc: "Comprendre les attentes pédagogiques des programmes d'informatique." },
          { title: "Structuration", desc: "Organiser des cours structurés et cohérents avec une progression logique." },
          { title: "Adaptation", desc: "Savoir adapter les plans en fonction des besoins et du niveau des apprenants." },
        ].map(({ title, desc }) => (
          <div key={title} className="rounded-[12px] border border-border bg-white p-4">
            <h4 className="text-base font-bold text-primary-light">{title}</h4>
            <p className="mt-2 text-sm leading-6 text-text">{desc}</p>
          </div>
        ))}
      </div>
    </section>

    {/* ── SECTION 6 — ÉTAPES DE LA PLANIFICATION ── */}
    <section className="rounded-[14px] border border-border bg-white p-5">
      <h2 className="text-xl font-bold text-dark">6. Les étapes de la planification</h2>
      <ol className="mt-3 list-decimal space-y-3 pl-5 text-sm leading-7 text-text">
        <li>
          <span className="font-semibold text-dark">Identification des Objectifs</span> — Déterminer clairement
          ce que les apprenants doivent atteindre (compétences visées, objectifs spécifiques).
        </li>
        <li>
          <span className="font-semibold text-dark">Conception des Contenus</span> — Créer des supports
          pédagogiques adaptés aux besoins spécifiques des apprenants.
        </li>
        <li>
          <span className="font-semibold text-dark">Évaluation</span> — Concevoir des évaluations fiables pour
          mesurer les progrès des apprenants.
        </li>
      </ol>
      <div className="mt-4 rounded-[10px] bg-bg px-4 py-3 text-sm leading-7 text-text">
        <span className="font-semibold">Comment planifier ?</span> Prendre connaissance des textes de
        compétences (Instructions Officielles), analyser la progression des contenus, et maîtriser les approches
        pédagogiques à adopter en classe.
      </div>
    </section>

    {/* ── SECTION 7 — TYPES DE PLANIFICATION ── */}
    <section className="rounded-[14px] border border-border bg-bg p-5">
      <h2 className="text-xl font-bold text-dark">7. Les différents types de planification</h2>
      <div className="mt-4 grid gap-4 sm:grid-cols-3">
        {[
          {
            label: "Long Terme",
            icon: "📅",
            items: [
              "Répartition annuelle du programme élaborée au début de l'année scolaire.",
              "Se base sur les textes de compétences (Instructions Officielles).",
              "Regroupe les modules / unités des deux semestres.",
              "Prend en compte les périodes d'examens et les vacances.",
            ],
          },
          {
            label: "Moyen Terme",
            icon: "🗓️",
            items: [
              "Organisation du travail par semestre, par module, par séquence.",
              "Étape essentielle entre la planification à long terme et à court terme.",
              "Envisagée dans la continuité du processus enseignement-apprentissage.",
            ],
          },
          {
            label: "Court Terme",
            icon: "📝",
            items: [
              "S'inscrit dans les planifications à long terme et à moyen terme.",
              "Concerne la planification d'une séquence, d'une leçon ou d'une séance.",
              "Correspond à la fiche pédagogique (préparation de séance).",
            ],
          },
        ].map(({ label, icon, items }) => (
          <div key={label} className="rounded-[12px] border border-border bg-white p-4">
            <h4 className="text-base font-bold text-primary-light">
              {icon} {label}
            </h4>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-text">
              {items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>

    {/* ── SECTION 8 — DOCUMENTS : CURRICULUM, LIVRE BLANC, PROGRAMME ── */}
    <section className="rounded-[14px] border border-border bg-white p-5">
      <h2 className="text-xl font-bold text-dark">8. Documents utilisés</h2>
      <div className="mt-4 space-y-3 text-sm leading-7 text-text">
        <div className="rounded-[12px] bg-bg px-4 py-3">
          <span className="font-semibold text-dark">Curriculum : </span>
          Ensemble structuré des contenus, compétences, méthodes et évaluations qui orientent
          l&apos;enseignement. Il constitue le cadre global de référence pour toute planification.
        </div>
        <div className="rounded-[12px] bg-bg px-4 py-3">
          <span className="font-semibold text-dark">Livre Blanc : </span>
          Document officiel de politique éducative qui fixe les orientations stratégiques et les grandes finalités
          du système éducatif marocain (Charte Nationale de l&apos;Éducation et de la Formation).
        </div>
        <div className="rounded-[12px] bg-bg px-4 py-3">
          <span className="font-semibold text-dark">Programme / Instructions Officielles (IO) : </span>
          Document de référence opérationnel organisé en 7 axes : cycle collégial dans le système éducatif,
          informatique enseignée, considérations pédagogiques générales et spécifiques, méthodologie, évaluation,
          et programme détaillé.
        </div>
      </div>
    </section>

    {/* ── SECTION 9 — MÉTHODOLOGIE DE L'ENSEIGNEMENT ── */}
    <section className="rounded-[14px] border border-border bg-bg p-5">
      <h2 className="text-xl font-bold text-dark">9. Méthodologie de l&apos;enseignement de l&apos;informatique</h2>
      <p className="mt-3 text-sm leading-7 text-text">
        L&apos;enseignement de l&apos;informatique repose sur trois phases clés :{" "}
        <span className="font-semibold">Planification</span>,{" "}
        <span className="font-semibold">Déroulement</span>, et{" "}
        <span className="font-semibold">Suivi/Évaluation</span>.
      </p>

      <div className="mt-4 space-y-4">
        {/* Phase 1 */}
        <div className="rounded-[12px] border border-border bg-white p-4">
          <h4 className="text-base font-bold text-primary-light">Phase 1 — Planification</h4>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-text">
            <li>Apprentissages ponctuels : acquisition de savoirs, savoir-faire et savoir-être.</li>
            <li>Activités d&apos;intégration : mobilisation des acquis dans des situations complexes.</li>
            <li>Évaluation formative : vérification continue des apprentissages.</li>
          </ul>
        </div>

        {/* Phase 2 */}
        <div className="rounded-[12px] border border-border bg-white p-4">
          <h4 className="text-base font-bold text-primary-light">Phase 2 — Déroulement (Méthodes pédagogiques)</h4>
          <div className="mt-3 overflow-x-auto">
            <table className="w-full text-sm text-text">
              <thead>
                <tr className="border-b border-border text-left">
                  <th className="pb-2 pr-4 font-semibold text-dark">Méthode</th>
                  <th className="pb-2 font-semibold text-dark">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {[
                  { m: "Expositive", d: "Transmission de connaissances structurées par l'enseignant." },
                  { m: "Démonstrative", d: "Montrer → Faire faire → Faire formuler." },
                  { m: "Interrogative", d: "Encourager l'apprenant à construire ses connaissances par questionnement." },
                  { m: "De découverte", d: "Apprentissage par expérimentation et collaboration." },
                  { m: "De résolution de problèmes", d: "Partir d'un problème concret pour développer compétences et réflexion." },
                  { m: "De projet", d: "Réalisation collaborative : recherche → planification → réalisation → évaluation." },
                ].map(({ m, d }) => (
                  <tr key={m}>
                    <td className="py-2 pr-4 font-medium text-dark">{m}</td>
                    <td className="py-2 leading-6">{d}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Phase 3 */}
        <div className="rounded-[12px] border border-border bg-white p-4">
          <h4 className="text-base font-bold text-primary-light">Phase 3 — Suivi et Évaluation</h4>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-text">
            <li>Analyse réflexive pour améliorer les pratiques pédagogiques.</li>
            <li>Outils : journal de bord, portfolio.</li>
            <li>Évaluation continue pour ajuster les approches selon les besoins.</li>
            <li>
              3 types :{" "}
              <span className="font-semibold">Diagnostique</span> (identifier les besoins) |{" "}
              <span className="font-semibold">Formative</span> (réguler) |{" "}
              <span className="font-semibold">Sommative</span> (évaluer la compétence).
            </li>
          </ul>
        </div>
      </div>
    </section>

    {/* ── SECTION 10 — TAXONOMIE DE BLOOM ── */}
    <section className="rounded-[14px] border border-border bg-white p-5">
      <h2 className="text-xl font-bold text-dark">10. Taxonomie de Bloom</h2>
      <p className="mt-3 text-sm leading-7 text-text">
        La taxonomie de Bloom classe les objectifs pédagogiques en 6 niveaux cognitifs, du plus simple au plus
        complexe. Elle permet à l&apos;enseignant de formuler des objectifs clairs et de choisir des activités
        adaptées à chaque niveau.
      </p>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full text-sm text-text">
          <thead>
            <tr className="border-b border-border text-left">
              <th className="pb-2 pr-3 font-semibold text-dark">Niveau</th>
              <th className="pb-2 pr-3 font-semibold text-dark">Verbes d&apos;action</th>
              <th className="pb-2 pr-3 font-semibold text-dark">Capacité visée</th>
              <th className="pb-2 font-semibold text-dark">Exemple Informatique</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {[
              {
                n: "6 — CRÉER",
                v: "Écrire, Modifier, Développer",
                c: "Produire quelque chose de nouveau en combinant des connaissances.",
                e: "Développer un simulateur de budget mensuel sous Excel.",
              },
              {
                n: "5 — ÉVALUER",
                v: "Évaluer, Justifier, Valoriser",
                c: "Porter un jugement argumenté selon des critères.",
                e: "Choisir la meilleure formule pour calculer la moyenne des notes.",
              },
              {
                n: "4 — ANALYSER",
                v: "Catégoriser, Comparer, Conclure",
                c: "Décomposer une situation pour voir la structure et relier causes/effets.",
                e: "Analyser la structure d'un algorithme et identifier ses erreurs.",
              },
              {
                n: "3 — APPLIQUER",
                v: "Montrer, Préparer, Produire",
                c: "Utiliser une règle ou une procédure dans une situation concrète.",
                e: "Utiliser la fonction SOMME dans Excel.",
              },
              {
                n: "2 — COMPRENDRE",
                v: "Expliquer, Reproduire, Décrire",
                c: "Expliquer une notion correctement.",
                e: "Comprendre le rôle d'un tableur.",
              },
              {
                n: "1 — CONNAÎTRE",
                v: "Mémoriser, Décrire, Énumérer",
                c: "Rappeler une information déjà vue.",
                e: "Définir ce qu'est un tableur Excel.",
              },
            ].map(({ n, v, c, e }) => (
              <tr key={n}>
                <td className="py-2 pr-3 font-semibold text-dark">{n}</td>
                <td className="py-2 pr-3">{v}</td>
                <td className="py-2 pr-3">{c}</td>
                <td className="py-2">{e}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>

    {/* ── SECTION 11 — LA FICHE PÉDAGOGIQUE ── */}
    <section className="rounded-[14px] border border-border bg-bg p-5">
      <h2 className="text-xl font-bold text-dark">11. La Fiche Pédagogique</h2>
      <p className="mt-3 text-sm leading-7 text-text">
        La fiche pédagogique (ou fiche de préparation de séance) est le document opérationnel de la planification
        à court terme. Elle détaille le déroulement d&apos;une séance d&apos;apprentissage selon une approche
        structurée.
      </p>

      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        {/* Informations générales */}
        <div className="rounded-[12px] border border-border bg-white p-4">
          <h3 className="text-base font-bold text-primary-light">Informations générales</h3>
          <ul className="mt-3 space-y-1 text-sm leading-7 text-text">
            {[
              { k: "Enseignant", v: "Nom et prénom" },
              { k: "Niveau", v: "Ex : 3ème Année Collège (3AC)" },
              { k: "Unité / Module", v: "Ex : Unité 2" },
              { k: "Séquence", v: "Ex : Présentation Assistée par Ordinateur" },
              { k: "Séance", v: "Ex : Création de fichiers multimédias" },
              { k: "Durée", v: "Ex : 1 heure" },
            ].map(({ k, v }) => (
              <li key={k}>
                <span className="font-semibold text-dark">{k} : </span>
                {v}
              </li>
            ))}
          </ul>
        </div>

        {/* Structure pédagogique */}
        <div className="rounded-[12px] border border-border bg-white p-4">
          <h3 className="text-base font-bold text-primary-light">Structure pédagogique</h3>
          <div className="mt-3 space-y-2 text-sm text-text">
            {[
              { k: "La compétence", v: "La compétence globale visée par la séquence. Ex : Produire un document multimédia." },
              { k: "Objectifs spécifiques", v: "Ce que l'apprenant sera capable de faire à la fin de la séance (formulés avec un verbe d'action)." },
              { k: "Prérequis", v: "Les savoirs et savoir-faire que l'apprenant doit déjà maîtriser avant la séance." },
              { k: "Savoir-faire", v: "Les compétences procédurales à acquérir (manipulations, techniques, méthodes)." },
              { k: "Savoir-être", v: "Les attitudes et comportements attendus (collaboration, communication, autonomie)." },
            ].map(({ k, v }) => (
              <div key={k} className="rounded-[8px] bg-bg px-3 py-2 leading-6">
                <span className="font-semibold text-dark">{k} : </span>
                {v}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Déroulement */}
      <div className="mt-4 rounded-[12px] border border-border bg-white p-4">
        <h3 className="text-base font-bold text-primary-light">Déroulement de la séance</h3>
        <div className="mt-3 grid gap-3 text-sm sm:grid-cols-3">
          {[
            {
              phase: "Mise en situation (15 min)",
              desc: "Rappel des prérequis (questions orales) + Présentation de la situation-problème.",
            },
            {
              phase: "Analyse / Construction (30 min)",
              desc: "Questionnement → Hypothèses → Investigation / Mise en commun → Généralisation.",
            },
            {
              phase: "Synthèse & Évaluation (10 min)",
              desc: "Quiz / Exercice pratique + correction + notation du cours.",
            },
          ].map(({ phase, desc }) => (
            <div key={phase} className="rounded-[8px] bg-bg px-3 py-3 leading-6 text-text">
              <p className="font-semibold text-dark">{phase}</p>
              <p className="mt-1">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ── SECTION 12 — FICHE MRP (Méthode de Résolution de Problème) ── */}
    <section className="rounded-[14px] border border-border bg-white p-5">
      <h2 className="text-xl font-bold text-dark">12. Fiche Pédagogique — Méthode de Résolution de Problème (MRP)</h2>
      <p className="mt-3 text-sm leading-7 text-text">
        La méthode de résolution de problèmes part d&apos;un problème concret (situation-problème) pour amener
        l&apos;apprenant à mobiliser ses ressources et construire ses connaissances de façon active.
      </p>

      {/* Structure générale MRP */}
      <div className="mt-4 rounded-[12px] border border-border bg-bg p-4">
        <h3 className="text-base font-bold text-dark">Structure générale de la Fiche MRP</h3>
        <div className="mt-3 overflow-x-auto">
          <table className="w-full text-sm text-text">
            <thead>
              <tr className="border-b border-border text-left">
                <th className="pb-2 pr-4 font-semibold text-dark">Rubrique</th>
                <th className="pb-2 font-semibold text-dark">Contenu attendu</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {[
                { r: "La compétence", c: "La compétence globale visée (ex : Produire un document multimédia)." },
                { r: "Objectifs spécifiques", c: "Verbes d'action + contenu + niveau taxonomique de Bloom." },
                { r: "Prérequis", c: "Savoirs et savoir-faire que l'apprenant doit déjà posséder." },
                { r: "Savoir-faire", c: "Compétences procédurales à acquérir lors de la séance." },
                { r: "Savoir-être", c: "Attitudes attendues (travail en groupe, communication, collaboration)." },
              ].map(({ r, c }) => (
                <tr key={r}>
                  <td className="py-2 pr-4 font-medium text-dark">{r}</td>
                  <td className="py-2 leading-6">{c}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Exemple complet MRP */}
      <div className="mt-4 rounded-[12px] border border-border bg-bg p-4">
        <h3 className="text-base font-bold text-dark">Exemple complet — Fiche MRP (3AC, Informatique)</h3>

        {/* En-tête fiche */}
        <div className="mt-3 grid gap-2 text-sm sm:grid-cols-2">
          {[
            { k: "Enseignant", v: "Mohamed ABOULJID" },
            { k: "Niveau", v: "3ème Année Collège (3AC)" },
            { k: "Unité", v: "Unité 2" },
            { k: "Séquence", v: "Présentation Assistée par Ordinateur" },
            { k: "Séance", v: "Création de fichiers multimédias" },
            { k: "Durée", v: "1 heure" },
            { k: "Compétence", v: "Produire un document multimédia." },
            { k: "Objectifs spécifiques", v: "Créer et insérer des liens hypertextes dans un document multimédia et configurer des boutons d'action." },
            { k: "Prérequis", v: "Savoir insérer des objets (images, formes, textes)." },
            { k: "Savoir-faire", v: "Insérer et configurer un lien hypertexte ; créer et paramétrer un bouton d'action." },
            { k: "Savoir-être", v: "Travailler par groupe : communiquer, collaborer, apprendre par pairs." },
          ].map(({ k, v }) => (
            <div key={k} className="rounded-[8px] bg-white px-3 py-2 text-sm leading-6 text-text">
              <span className="font-semibold text-dark">{k} : </span>
              {v}
            </div>
          ))}
        </div>

        {/* Déroulement MRP */}
        <h4 className="mt-5 text-sm font-bold text-dark">Déroulement de la séance</h4>
        <div className="mt-3 space-y-3 text-sm text-text">
          {[
            {
              phase: "Mise en situation — 15 min",
              enseignant: "Questions orales : « Quels objets pouvons-nous insérer sur une diapositive ? » → Présentation du problème : un club de 3AC souhaite passer de la diapositive Sommaire (n°2) à la diapositive vidéo (n°19) sans faire défiler toutes les autres.",
              apprenant: "Répondre aux questions orales. Rappeler l'insertion de textes, d'images. Écouter et assimiler le contexte de la situation-problème.",
              outils: "Tableau, PC, Vidéoprojecteur",
            },
            {
              phase: "Analyse / Construction — 30 min",
              enseignant: "Questionnement : « Comment passer du sommaire à la vidéo sans défiler ? » → Note les hypothèses → Filtre et valide : « mettre un bouton » / « ajouter un lien » → Généralisation : lien hypertexte + bouton d'action + étapes d'insertion.",
              apprenant: "Proposer des hypothèses. Discuter et sélectionner les meilleures. Comprendre les notions généralisées.",
              outils: "Tableau, PC, Vidéoprojecteur",
            },
            {
              phase: "Synthèse & Évaluation — 10 min",
              enseignant: "Exercice pratique : ouvrir fichier Marche_Verte, créer un lien du Sommaire vers la diapositive vidéo, insérer un bouton retour. Corriger l'exercice.",
              apprenant: "Faire l'exercice. Corriger. Noter le cours.",
              outils: "Tableau, Cahier, PC",
            },
          ].map(({ phase, enseignant, apprenant, outils }) => (
            <div key={phase} className="rounded-[10px] border border-border bg-white p-4">
              <p className="font-bold text-primary-light">{phase}</p>
              <div className="mt-2 grid gap-3 sm:grid-cols-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-dark">Enseignant</p>
                  <p className="mt-1 leading-6">{enseignant}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-dark">Apprenant</p>
                  <p className="mt-1 leading-6">{apprenant}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-dark">Outils didactiques</p>
                  <p className="mt-1 leading-6">{outils}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Exercices QCM */}
        <h4 className="mt-5 text-sm font-bold text-dark">Exercices d&apos;application</h4>

        <div className="mt-3 rounded-[10px] border border-border bg-white p-4">
          <p className="font-semibold text-dark">Exercice 1 : QCM de compréhension</p>
          <ol className="mt-3 list-decimal space-y-3 pl-5 text-sm leading-7 text-text">
            {[
              { q: "Pour insérer un lien hypertexte, on doit d'abord :", r: "b) Sélectionner le texte ou l'image ✓" },
              { q: "Un bouton d'action se trouve dans le menu :", r: "b) Insertion ✓" },
              { q: "Un lien hypertexte permet de :", r: "b) Naviguer vers une diapositive spécifique ✓" },
              { q: "Pour tester un lien hypertexte, il faut :", r: "b) Passer en mode diaporama ✓" },
              { q: "Le raccourci clavier pour créer un lien hypertexte est :", r: "c) Ctrl + K ✓" },
              { q: "Un bouton d'action « Retour » permet de :", r: "b) Revenir à la diapositive précédente ✓" },
              { q: "Pour modifier un lien existant, on fait :", r: "b) Clic droit → Modifier le lien hypertexte ✓" },
              { q: "Les boutons d'action se trouvent dans :", r: "a) Insertion → Formes → Boutons d'action ✓" },
            ].map(({ q, r }) => (
              <li key={q}>
                <span>{q}</span>
                <span className="ml-2 font-semibold text-primary-light">{r}</span>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-3 rounded-[10px] border border-border bg-white p-4">
          <p className="font-semibold text-dark">Exercice 2 : Vrai ou Faux</p>
          <ul className="mt-3 space-y-2 text-sm leading-7 text-text">
            {[
              { s: "Un lien hypertexte fonctionne en mode édition.", r: "Faux", note: "seulement en mode diaporama" },
              { s: "On peut créer un lien sur une image.", r: "Vrai", note: "" },
              { s: "Les boutons d'action se trouvent dans le menu « Accueil ».", r: "Faux", note: "menu « Insertion »" },
              { s: "Un bouton d'action peut émettre un son lors du clic.", r: "Vrai", note: "" },
              { s: "Il faut enregistrer la présentation avant de tester les liens.", r: "Faux", note: "pas obligatoire" },
              { s: "Un lien hypertexte est toujours souligné.", r: "Vrai", note: "pour le texte" },
              { s: "On peut lier vers une diapositive d'une autre présentation.", r: "Vrai", note: "" },
              { s: "Les boutons d'action ne peuvent pointer que vers la diapositive suivante.", r: "Faux", note: "plusieurs destinations possibles" },
            ].map(({ s, r, note }) => (
              <li key={s} className="flex items-start gap-2">
                <span
                  className={`mt-0.5 shrink-0 rounded-full px-2 py-0.5 text-xs font-bold ${
                    r === "Vrai"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-600"
                  }`}
                >
                  {r}
                </span>
                <span>
                  {s}
                  {note && <span className="ml-1 text-text/60">({note})</span>}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>

  </div>
</section>


      </div>
    </main>
  );
}
