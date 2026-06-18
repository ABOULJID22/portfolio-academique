import { modulePages } from '../../data/portfolioData';

import researchHeroImage from '../../data/images/recherche-action/recherche-action-1.jpeg';
import researchSheetImage from '../../data/images/recherche-action/recherche-action-2.jpeg';
import researchMapImage from '../../data/images/recherche-action/recherche-action-3.jpeg';
import researchMatrixImage from '../../data/images/recherche-action/recherche-action-4.jpeg';
import researchStatsImage from '../../data/images/recherche-action/recherche-action-5.jpeg';
import researchPlanImage from '../../data/images/recherche-action/recherche-action-6.jpeg';

const slug = 's1-methodologie-recherche';

const researchSummaryCards = [
  {
    label: "Sujet",
    value:
      "Défis de la vie en internat et foyer des élèves et leur lien avec la déviance et le décrochage scolaire.",
  },
  {
    label: "Type de recherche",
    value:
      "Recherche-action / recherche-intervention à dominante qualitative, fondée sur l'observation participante et l'immersion.",
  },
  {
    label: "Public concerné",
    value:
      "Résidents des internats et foyers des élèves, avec prise en compte des cadres éducatifs et administratifs.",
  },
  {
    label: "Outils mobilisés",
    value:
      "Observation de terrain, entretiens, données administratives et analyse des situations vécues.",
  },
];

const researchFindings = [
  {
    title: "Défis matériels",
    text: "Surpeuplement, hygiène limitée, nutrition peu adaptée et sentiment d'inconfort quotidien.",
    style: "border-amber-200 bg-amber-50 text-amber-700",
  },
  {
    title: "Défis organisationnels",
    text: "Temps libre mal encadré, zones peu surveillées et règles vécues comme uniquement punitives.",
    style: "border-sky-200 bg-sky-50 text-sky-700",
  },
  {
    title: "Défis sociaux",
    text: "Brimades, violences, isolement des nouveaux et recherche d'appartenance à des groupes informels.",
    style: "border-rose-200 bg-rose-50 text-rose-700",
  },
  {
    title: "Défis éducatifs",
    text: "Suivi scolaire insuffisant, baisse de motivation, absentéisme et risque de décrochage masqué.",
    style: "border-emerald-200 bg-emerald-50 text-emerald-700",
  },
];

const interventionPillars = [
  "Suivi scolaire intégré",
  "Animation culturelle et sportive",
  "Accompagnement psychologique",
  "Régulation sociale positive",
];

const researchGallery = [
  {
    src: researchSheetImage,
    title: "Fiche synthétique",
    text: "Vue globale du projet, du public visé, des outils de collecte et des indicateurs suivis.",
  },
  {
    src: researchMapImage,
    title: "Géographie de la déviance",
    text: "Repérage des zones sensibles: portes fermées, coins sombres et dortoirs surpeuplés.",
  },
  {
    src: researchMatrixImage,
    title: "Matrice des défis",
    text: "Lecture organisée des dimensions matérielles, organisationnelles, sociales et éducatives.",
  },
  {
    src: researchStatsImage,
    title: "Promesse et réalité",
    text: "Mise en tension entre le rôle attendu de l'internat et les indicateurs de décrochage.",
  },
  {
    src: researchPlanImage,
    title: "Plan d'intervention",
    text: "Quatre piliers opérationnels pour prévenir la déviance et renforcer la persévérance scolaire.",
  },
];

export default function S1MethodologieRecherchePage() {

  const module = modulePages.find((item) => item.slug === slug);

  const getResourceLink = (resource) => {
    if (resource.href && resource.href !== '#') {
      return resource.href;
    }

    const query = `${module?.title ?? 'Methodologie de recherche'} ${resource.label} CRMEF`;
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
                CRMEF Marrakech · 2025-2026
              </div>
              <h1 className="mt-2 text-2xl font-extrabold text-dark sm:text-3xl">
                {module?.title ?? 'Méthodologie de recherche'}
              </h1>
              <p className="mt-3 text-sm leading-7 text-text">
                Page organisée en deux parties : une recherche-action réalisée dans le cadre du module, puis le
                résumé du cours avec les notions essentielles de méthodologie de recherche.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {[
              "Introduction RA",
              "Problème de recherche",
              "Revue de littérature",
              "Objectifs & Hypothèses",
              "Échantillonnage quantitatif",
              "Analyse quantitative",
              "Collecte qualitative",
              "Analyse qualitative",
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

        <section id="recherche-action" className="mb-8 overflow-hidden rounded-[16px] border border-border bg-white shadow-sm">
          <div className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="p-6 sm:p-8">
              <div className="text-xs font-bold uppercase tracking-[0.16em] text-accent">
                Recherche-action réalisée
              </div>
              <h2 className="mt-2 text-2xl font-extrabold leading-tight text-dark sm:text-3xl">
                Défis de la vie en internat et foyer des élèves
              </h2>
              <p className="mt-4 text-sm leading-7 text-text">
                Cette recherche analyse comment les conditions d&apos;hébergement, d&apos;encadrement et de suivi
                peuvent favoriser des comportements déviants ou un décrochage scolaire progressif. Elle propose
                une intervention éducative réaliste pour transformer l&apos;internat en espace de protection,
                d&apos;accompagnement et de réussite.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {["Recherche-intervention", "Observation participante", "Immersion de terrain", "Plan d'action"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-primary-light/30 bg-primary-light/5 px-3 py-1 text-xs font-semibold text-primary-light"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {[
                  { k: "Réalisé par", v: "ABOULJED Mohamed · ELASRI Sabir · AIT TATA Saleh" },
                  { k: "Encadré par", v: "Dr. BARIBI Soufiane" },
                  { k: "Cadre", v: "Méthodologie de recherche · CRMEF Marrakech" },
                ].map(({ k, v }) => (
                  <div key={k} className="rounded-[12px] border border-border bg-bg px-4 py-3 text-sm">
                    <p className="text-xs font-bold uppercase tracking-[0.08em] text-accent">{k}</p>
                    <p className="mt-1 font-semibold leading-6 text-dark">{v}</p>
                  </div>
                ))}
              </div>
            </div>
            <figure className="relative min-h-[260px] bg-bg">
              <img
                src={researchHeroImage}
                alt="Illustration d'un élève arrivant à l'internat"
                className=" h-full min-h-[260px] w-full object-cover"
              />
            </figure>
          </div>
        </section>

        <section className="mb-8 grid gap-6 lg:grid-cols-3">
          <article className="soft-card p-6 sm:p-8 lg:col-span-2">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <div className="text-xs font-bold uppercase tracking-[0.16em] text-accent">
                  En bref
                </div>
                <h2 className="mt-2 text-xl font-extrabold text-dark">
                  Synthèse professionnelle de la recherche
                </h2>
              </div>
              <span className="text-sm font-semibold text-primary-light">Recherche-action</span>
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {researchSummaryCards.map(({ label, value }) => (
                <div key={label} className="rounded-[12px] border border-border bg-bg p-4 text-sm">
                  <p className="font-bold text-dark">{label}</p>
                  <p className="mt-2 leading-6 text-text">{value}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-[12px] border border-primary-light/20 bg-primary-light/5 p-4 text-sm leading-7 text-text">
              <p className="font-bold text-dark">Problématique centrale</p>
              <p className="mt-2">
                Dans quelle mesure les défis de la vie en internat et foyer des élèves, dans leurs dimensions
                matérielles, organisationnelles, sociales et éducatives, contribuent-ils à l&apos;émergence de
                comportements déviants et au décrochage scolaire chez les apprenants ?
              </p>
            </div>
          </article>

          <aside className="soft-card p-6 sm:p-8">
            <h2 className="text-sm font-bold uppercase tracking-[0.08em] text-accent">
              Objectifs clés
            </h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-text">
              <li>Diagnostiquer la réalité quotidienne des internats et foyers.</li>
              <li>Analyser les formes de déviance observées chez les résidents.</li>
              <li>Comprendre le lien entre conditions d&apos;hébergement, absentéisme et décrochage.</li>
              <li>Proposer un plan d&apos;intervention éducative applicable.</li>
            </ul>
          </aside>
        </section>

        <section className="mb-8 soft-card p-6 sm:p-8">
          <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <div className="text-xs font-bold uppercase tracking-[0.16em] text-accent">
                Diagnostic de terrain
              </div>
              <h2 className="mt-2 text-xl font-extrabold text-dark">
                Constats principaux
              </h2>
              <p className="mt-3 text-sm leading-7 text-text">
                Le diagnostic montre que l&apos;internat peut devenir un levier de réussite lorsqu&apos;il protège,
                accompagne et structure la vie collective. À l&apos;inverse, l&apos;absence d&apos;encadrement intégré
                transforme certains espaces en facteurs de stress, d&apos;isolement et de désengagement scolaire.
              </p>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {researchFindings.map(({ title, text, style }) => (
                  <div key={title} className={`rounded-[12px] border p-4 text-sm ${style}`}>
                    <p className="font-bold">{title}</p>
                    <p className="mt-2 leading-6 text-text">{text}</p>
                  </div>
                ))}
              </div>
            </div>

            <figure className="overflow-hidden rounded-[14px] border border-border bg-bg">
              <img
                src={researchMatrixImage}
                alt="Matrice des défis de la vie en internat"
                className="h-full min-h-[280px] w-full object-contain"
              />
            </figure>
          </div>
        </section>

        <section className="mb-8 soft-card p-6 sm:p-8">
          <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
            <figure className="overflow-hidden rounded-[14px] border border-border bg-bg">
              <img
                src={researchPlanImage}
                alt="Plan d'intervention en quatre piliers"
                className="h-full min-h-[280px] w-full object-contain"
              />
            </figure>

            <div>
              <div className="text-xs font-bold uppercase tracking-[0.16em] text-accent">
                Intervention proposée
              </div>
              <h2 className="mt-2 text-xl font-extrabold text-dark">
                Un plan d&apos;action en quatre piliers
              </h2>
              <p className="mt-3 text-sm leading-7 text-text">
                La recherche recommande de dépasser la simple logique d&apos;hébergement pour installer un
                dispositif éducatif continu, associant soutien scolaire, animation, médiation et participation
                des élèves à la vie collective.
              </p>

              <div className="mt-5 grid gap-2">
                {interventionPillars.map((pillar, index) => (
                  <div key={pillar} className="flex items-center gap-3 rounded-[10px] border border-border bg-bg px-4 py-3 text-sm text-text">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary-light/10 font-bold text-primary-light">
                      {index + 1}
                    </span>
                    <span className="font-semibold text-dark">{pillar}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="text-xs font-bold uppercase tracking-[0.16em] text-accent">
                Images de la recherche
              </div>
              <h2 className="mt-2 text-xl font-extrabold text-dark">
                Supports visuels intégrés
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-6 text-text-light">
              Les visuels résument la logique du projet : diagnostic, facteurs de risque et intervention.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {researchGallery.map(({ src, title, text }) => (
              <article key={title} className="overflow-hidden rounded-[14px] border border-border bg-white shadow-sm">
                <img src={src} alt={title} className="h-52 w-full bg-bg object-contain" />
                <div className="p-4">
                  <h3 className="text-base font-bold text-dark">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-text">{text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="resume-cours" className="mb-6 rounded-[16px] border border-border bg-bg p-6 sm:p-8">
          <div className="text-xs font-bold uppercase tracking-[0.16em] text-accent">
            Résumé du cours
          </div>
          <h2 className="mt-2 text-2xl font-extrabold text-dark">
            Notions essentielles de méthodologie de recherche
          </h2>
          <p className="mt-3 text-sm leading-7 text-text">
            Le cours existant est conservé ci-dessous : introduction à la recherche-action, problématique,
            revue de littérature, hypothèses, collecte et analyse des données quantitatives et qualitatives.
          </p>
        </section>


        <div className="space-y-8">

          {/* ══════════════════════════════════════════════
              SITUATION 1 — Introduction à la Recherche-Action
          ══════════════════════════════════════════════ */}
          <section className="soft-card p-6 sm:p-8">
            <h2 className="text-xl font-extrabold text-dark">
              Situation 1 — Introduction à la Recherche-Action
            </h2>

            {/* 1.1 & 1.2 Définitions */}
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[12px] border border-border bg-bg p-4 text-sm">
                <p className="font-bold text-dark">📌 Définition générale</p>
                <p className="mt-2 leading-6 text-text">
                  La recherche-action = recherches avec une <strong>action délibérée de transformation de la réalité</strong>.
                </p>
                <div className="mt-3 space-y-1">
                  <div className="rounded-[8px] bg-white px-3 py-2 text-text">
                    ① Transformer la réalité éducative.
                  </div>
                  <div className="rounded-[8px] bg-white px-3 py-2 text-text">
                    ② Produire des connaissances sur ces transformations.
                  </div>
                </div>
              </div>
              <div className="rounded-[12px] border border-border bg-bg p-4 text-sm">
                <p className="font-bold text-dark">🏫 Définition en éducation</p>
                <p className="mt-2 leading-6 text-text">
                  Démarche menée par les <strong>praticiens</strong> (enseignants, administrateurs) dans leur propre contexte éducatif.
                </p>
                <p className="mt-2 leading-6 text-text">
                  Permet aux enseignants de devenir des <strong>praticiens réflexifs</strong> et de prendre des décisions basées sur des preuves tangibles.
                </p>
              </div>
            </div>

            {/* 1.3 RA vs Recherche classique */}
            <div className="mt-6">
              <h3 className="text-base font-bold text-dark">
                1.3 Recherche-Action VS Recherche Classique
              </h3>
              <div className="mt-3 overflow-x-auto">
                <table className="w-full text-sm text-text">
                  <thead>
                    <tr className="border-b border-border text-left">
                      {["Critère", "Recherche-Action", "Recherche Classique"].map((h) => (
                        <th key={h} className="pb-2 pr-4 font-semibold text-dark last:pr-0">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {[
                      { c: "Qui fait la recherche ?", ra: "Les praticiens (enseignants)", rc: "Experts externes" },
                      { c: "Sur qui ?", ra: "Sur eux-mêmes et leurs pratiques", rc: "Sur d'autres personnes" },
                      { c: "Objectif", ra: "Améliorer la pratique", rc: "Développer des théories" },
                      { c: "Questions de recherche", ra: "Besoins locaux et problèmes concrets", rc: "Prédéterminées par des experts" },
                      { c: "Posture du chercheur", ra: "Subjectif, impliqué, engagé", rc: "Objectif, détaché, impartial" },
                      { c: "Direction du changement", ra: "De bas en haut (processus démocratique)", rc: "De haut en bas (hiérarchique)" },
                      { c: "Théorie & pratique", ra: "Frontières floues — intégrées", rc: "Séparées" },
                      { c: "Résultats", ra: "Directement appliqués à la pratique", rc: "Implémentés par d'autres praticiens" },
                    ].map(({ c, ra, rc }) => (
                      <tr key={c}>
                        <td className="py-2 pr-4 font-medium text-dark">{c}</td>
                        <td className="py-2 pr-4 leading-6 text-green-700">{ra}</td>
                        <td className="py-2 leading-6 text-text-light">{rc}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* 1.4 Quand utiliser + 1.5 Caractéristiques */}
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[12px] border border-border bg-bg p-4 text-sm">
                <p className="font-bold text-dark">🕐 1.4 Quand utiliser la Recherche-Action ?</p>
                <ul className="mt-3 list-disc space-y-1 pl-5 leading-6 text-text">
                  {[
                    "Résoudre un problème rencontré dans la classe.",
                    "Améliorer la pratique enseignante.",
                    "Répondre aux besoins spécifiques des élèves.",
                  ].map((pt) => <li key={pt}>{pt}</li>)}
                </ul>
              </div>
              <div className="rounded-[12px] border border-border bg-bg p-4 text-sm">
                <p className="font-bold text-dark">✨ 1.5 Cinq caractéristiques principales</p>
                <div className="mt-2 space-y-1">
                  {[
                    { c: "Constructiviste", d: "Construction du savoir par l'apprenant via ses expériences." },
                    { c: "Situationnelle", d: "Ancrée dans des contextes éducatifs réels et concrets." },
                    { c: "Pratique", d: "Vise à résoudre des problèmes concrets de l'enseignement quotidien." },
                    { c: "Systématique", d: "Suit une méthodologie bien définie et organisée en étapes." },
                    { c: "Cyclique", d: "Boucles répétées : évaluation → amélioration → réévaluation." },
                  ].map(({ c, d }) => (
                    <div key={c} className="rounded-[8px] bg-white px-3 py-2 text-text">
                      <span className="font-semibold text-dark">{c} : </span>{d}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 1.6 Étapes */}
            <div className="mt-6">
              <h3 className="text-base font-bold text-dark">
                1.6 Étapes de conduite d&apos;un projet de Recherche-Action
              </h3>
              <div className="relative mt-3 pl-5">
                <span aria-hidden className="absolute left-[7px] top-2 h-[calc(100%-12px)] w-[2px] rounded-full bg-border" />
                {[
                  { e: "1. Identifier un problème à étudier" },
                  { e: "2. Trouver des ressources pour aider à résoudre le problème" },
                  { e: "3. Identifier les informations dont vous aurez besoin" },
                  { e: "4. Mise en œuvre de la collecte des données" },
                  { e: "5. Analyser les données" },
                  { e: "6. Élaborer un plan d'action" },
                  { e: "7. Mettre en œuvre le plan et réfléchir (réflexivité)" },
                ].map(({ e }) => (
                  <div key={e} className="relative pb-2 last:pb-0">
                    <span aria-hidden className="absolute -left-[13px] top-[5px] h-3 w-3 rounded-full border-2 border-primary-light bg-white" />
                    <div className="rounded-[8px] border border-border bg-bg px-4 py-2 text-sm text-text">{e}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* 1.7 Compétence visée */}
            <div className="mt-5 rounded-[12px] border border-border bg-bg p-4 text-sm italic leading-7 text-text">
              <span className="not-italic font-semibold text-dark">🎯 Compétence visée (CRMEF) : </span>
              L&apos;enseignant stagiaire doit être en mesure de proposer des solutions pratiques et réalisables liées à une matière, au groupe d&apos;apprenants ou à l&apos;école, résultat d&apos;une recherche pédagogique-action tenant compte des références législatives, des besoins du système éducatif marocain, des particularités de l&apos;acte didactique/pédagogique et de l&apos;environnement social et culturel de l&apos;école.
            </div>
          </section>

          {/* ══════════════════════════════════════════════
              SITUATION 2 — Identification d'un Problème
          ══════════════════════════════════════════════ */}
          <section className="soft-card p-6 sm:p-8">
            <h2 className="text-xl font-extrabold text-dark">
              Situation 2 — Identification d&apos;un Problème de Recherche
            </h2>

            <div className="mt-5 rounded-[12px] border border-border bg-bg p-4 text-sm leading-7 text-text">
              <p className="font-semibold text-dark">📌 Définition</p>
              <p className="mt-2">
                Un problème de recherche = une question ou un <strong>manque de connaissance qui nécessite une investigation</strong>.
              </p>
              <p className="mt-2">
                Différent de : l&apos;objectif (ce qu&apos;on cherche à faire), les questions de recherche (comment on explore), les hypothèses (ce qu&apos;on prédit).
              </p>
            </div>

            {/* 2.2 Critères */}
            <div className="mt-5">
              <h3 className="text-base font-bold text-dark">2.2 Critères pour identifier un bon problème de recherche</h3>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-text">
                {[
                  "Être observable et mesurable.",
                  "Être ancré dans un contexte éducatif réel.",
                  "Avoir une portée pédagogique ou didactique.",
                  "Pouvoir faire l'objet d'une collecte de données.",
                ].map((pt) => <li key={pt}>{pt}</li>)}
              </ul>
            </div>

            {/* 2.3 Quantitatif vs Qualitatif */}
            <div className="mt-5">
              <h3 className="text-base font-bold text-dark">2.3 Problème Quantitatif vs Qualitatif</h3>
              <div className="mt-3 grid gap-4 sm:grid-cols-2">
                <div className="rounded-[12px] border border-blue-200 bg-blue-50 p-4 text-sm">
                  <p className="font-bold text-blue-700">📊 Quantitatif</p>
                  <p className="mt-2 leading-6 text-text">Mesurable, variables numériques, généralisation.</p>
                  <p className="mt-2 rounded-[8px] bg-white px-3 py-2 italic text-text-light">
                    Ex : Effet de la technologie sur les scores des élèves.
                  </p>
                </div>
                <div className="rounded-[12px] border border-green-200 bg-green-50 p-4 text-sm">
                  <p className="font-bold text-green-700">🔍 Qualitatif</p>
                  <p className="mt-2 leading-6 text-text">Exploratoire, phénomène central, compréhension en profondeur.</p>
                  <p className="mt-2 rounded-[8px] bg-white px-3 py-2 italic text-text-light">
                    Ex : Pourquoi les étudiants n&apos;assistent pas aux cours à distance ?
                  </p>
                </div>
              </div>
            </div>

            {/* 2.4 Exercice type */}
            <div className="mt-5 rounded-[12px] border border-border bg-bg p-4 text-sm">
              <p className="font-bold text-dark">💡 Exercice type — Situation 2</p>
              <p className="mt-2 italic text-text">Problème initial : «Manque d&apos;étudiants dans les classes à distance»</p>
              <div className="mt-2 space-y-2">
                <div className="flex gap-2 rounded-[8px] bg-white px-3 py-2 text-text">
                  <span className="shrink-0 font-semibold text-dark">→ Problème de recherche :</span>
                  <span>Étudier pourquoi les étudiants ne fréquentent pas les classes d&apos;éducation à distance.</span>
                </div>
                <div className="flex gap-2 rounded-[8px] bg-white px-3 py-2 text-text">
                  <span className="shrink-0 font-semibold text-dark">→ Question de recherche :</span>
                  <span>Est-ce que l&apos;utilisation de la technologie web dissuade les étudiants de s&apos;inscrire ?</span>
                </div>
              </div>
            </div>
          </section>

          {/* ══════════════════════════════════════════════
              SITUATION 3 — Revue de la Littérature
          ══════════════════════════════════════════════ */}
          <section className="soft-card p-6 sm:p-8">
            <h2 className="text-xl font-extrabold text-dark">
              Situation 3 — Revue de la Littérature
            </h2>

            <div className="mt-5 rounded-[12px] border border-border bg-bg p-4 text-sm leading-7 text-text">
              <p className="font-semibold text-dark">📌 Définition</p>
              <p className="mt-2">
                Une revue de la littérature = <strong>résumé décrivant l&apos;état passé et actuel de la recherche</strong> sur le sujet d&apos;une étude.
              </p>
            </div>

            {/* 3.2 Pourquoi */}
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[12px] border border-border bg-bg p-4 text-sm">
                <p className="font-bold text-dark">❓ Pourquoi est-elle importante ?</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 leading-6 text-text">
                  {[
                    "Valider l'originalité du projet de recherche.",
                    "Repérer des lacunes → nouvelles questions de recherche.",
                    "Identifier des pratiques susceptibles d'améliorer l'apprentissage.",
                    "Renforcer les compétences de recherche.",
                    "Apprendre comment rédiger une recherche.",
                    "Trouver des exemples et modèles pour ses propres recherches.",
                    "Convaincre le comité de la connaissance du sujet.",
                  ].map((pt) => <li key={pt}>{pt}</li>)}
                </ul>
              </div>

              {/* 3.3 Quant vs Qual */}
              <div className="rounded-[12px] border border-border bg-bg p-4 text-sm">
                <p className="font-bold text-dark">📐 3.3 Quantitative vs Qualitative</p>
                <div className="mt-3 overflow-x-auto">
                  <table className="w-full text-xs text-text">
                    <thead>
                      <tr className="border-b border-border text-left">
                        {["Critère", "Quantitative", "Qualitative"].map((h) => (
                          <th key={h} className="pb-2 pr-2 font-semibold text-dark last:pr-0">{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      {[
                        { c: "Quantité au début", q: "Conséquente", ql: "Minimale" },
                        { c: "Usage au début", q: "Justifie la nécessité / donne une orientation", ql: "Justifie la nécessité de l'étude" },
                        { c: "Usage à la fin", q: "Confirme ou réfute des prédictions antérieures", ql: "Soutient ou modifie les résultats existants" },
                      ].map(({ c, q, ql }) => (
                        <tr key={c}>
                          <td className="py-1 pr-2 font-medium text-dark">{c}</td>
                          <td className="py-1 pr-2 leading-5">{q}</td>
                          <td className="py-1 leading-5">{ql}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* 3.4 Étapes */}
            <div className="mt-5">
              <h3 className="text-base font-bold text-dark">3.4 Étapes de réalisation d&apos;une revue de la littérature</h3>
              <div className="relative mt-3 pl-5">
                <span aria-hidden className="absolute left-[7px] top-2 h-[calc(100%-12px)] w-[2px] rounded-full bg-border" />
                {[
                  { e: "Étape 1", d: "Identifier les mots-clés (2–3 mots clés du titre provisoire)." },
                  { e: "Étape 2", d: "Localiser la littérature : encyclopédies, revues, livres, thèses, sites institutionnels." },
                  { e: "Étape 3", d: "Évaluer et sélectionner de manière critique (qualité, rigueur, pertinence)." },
                  { e: "Étape 4", d: "Organiser la littérature (prendre des notes structurées)." },
                  { e: "Étape 5", d: "Rédiger la revue (méthode classique en note de bas de page ou auteur-date)." },
                ].map(({ e, d }) => (
                  <div key={e} className="relative pb-2 last:pb-0">
                    <span aria-hidden className="absolute -left-[13px] top-[5px] h-3 w-3 rounded-full border-2 border-primary-light bg-white" />
                    <div className="rounded-[8px] border border-border bg-bg px-4 py-2 text-sm text-text">
                      <span className="font-bold text-dark">{e} : </span>{d}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 3.5 Évaluer un article */}
            <div className="mt-5 rounded-[12px] border border-border bg-bg p-4 text-sm">
              <p className="font-bold text-dark">📖 3.5 Comment évaluer un article scientifique ?</p>
              <div className="mt-3 grid gap-2 sm:grid-cols-3">
                {[
                  { s: "Introduction", v: "Thème de recherche + questions/hypothèses." },
                  { s: "Méthodologie", v: "Comment les hypothèses ont été testées." },
                  { s: "Résultats", v: "Ce qui a été trouvé." },
                  { s: "Discussion", v: "Interprétations des résultats." },
                  { s: "Conclusions", v: "Conclusions et perspectives." },
                ].map(({ s, v }) => (
                  <div key={s} className="rounded-[8px] bg-white px-3 py-2 text-text">
                    <span className="font-semibold text-dark">{s} : </span>{v}
                  </div>
                ))}
              </div>
            </div>

            {/* 3.6 Plagiat */}
            <div className="mt-5">
              <h3 className="text-base font-bold text-dark">⚠️ 3.6 Plagiat — Définition &amp; Types</h3>
              <p className="mt-2 text-sm text-text">
                Le plagiat : s&apos;approprier les mots ou idées de quelqu&apos;un d&apos;autre et les présenter comme siens.
              </p>
              <div className="mt-3 overflow-x-auto">
                <table className="w-full text-sm text-text">
                  <thead>
                    <tr className="border-b border-border text-left">
                      {["Situation de plagiat", "Description"].map((h) => (
                        <th key={h} className="pb-2 pr-4 font-semibold text-dark last:pr-0">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {[
                      { s: "Copie textuelle sans source", d: "Copier un passage sans guillemets ni référence." },
                      { s: "Paraphrase sans source", d: "Résumer l'idée d'un auteur en ses propres mots sans le citer." },
                      { s: "Images/données sans source", d: "Insérer des graphiques, tableaux sans mentionner l'origine." },
                      { s: "Traduction sans source", d: "Traduire un texte sans mentionner la provenance." },
                      { s: "Travail d'autrui", d: "Présenter le travail d'une autre personne comme le sien." },
                      { s: "Achat de travail en ligne", d: "Acheter un devoir ou mémoire sur internet." },
                    ].map(({ s, d }) => (
                      <tr key={s}>
                        <td className="py-2 pr-4 font-bold text-red-500 whitespace-nowrap">{s}</td>
                        <td className="py-2 leading-6">{d}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-3 grid gap-2 sm:grid-cols-2">
                <div className="rounded-[10px] bg-bg border border-border px-4 py-3 text-sm text-text">
                  <span className="font-semibold text-dark">Méthode classique : </span>
                  Appel de note en exposant avant les guillemets de fin (note de bas de page).
                </div>
                <div className="rounded-[10px] bg-bg border border-border px-4 py-3 text-sm text-text">
                  <span className="font-semibold text-dark">Méthode auteur-date : </span>
                  Référence entre parenthèses (Michaud, 2011, p.268), avec bibliographie finale.
                </div>
              </div>
            </div>
          </section>

          {/* ══════════════════════════════════════════════
              SITUATION 4 — Objectifs, Questions & Hypothèses
          ══════════════════════════════════════════════ */}
          <section className="soft-card p-6 sm:p-8">
            <h2 className="text-xl font-extrabold text-dark">
              Situation 4 — Objectif, Questions &amp; Hypothèses de Recherche
            </h2>

            {/* 4.1 Triangulation */}
            <div className="mt-5">
              <h3 className="text-base font-bold text-dark">4.1 Triangulation : Objectif → Questions → Hypothèses</h3>
              <div className="mt-3 overflow-x-auto">
                <table className="w-full text-sm text-text">
                  <thead>
                    <tr className="border-b border-border text-left">
                      {["Élément", "Définition", "Exemple (informatique)"].map((h) => (
                        <th key={h} className="pb-2 pr-4 font-semibold text-dark last:pr-0">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {[
                      { el: "Objectif de recherche", d: "L'idée principale de l'étude (1 phrase).", ex: "Examiner la relation entre l'utilisation d'Internet et les résultats des élèves." },
                      { el: "Questions de recherche", d: "Réduisent l'objectif en questions spécifiques.", ex: "Les communications Internet affectent-elles les performances en classe ?" },
                      { el: "Hypothèses", d: "Prédictions sur les résultats (quantitatif uniquement).", ex: "Les élèves dont les parents communiquent via Internet ont des notes plus élevées." },
                    ].map(({ el, d, ex }) => (
                      <tr key={el}>
                        <td className="py-2 pr-4 font-bold text-primary-light whitespace-nowrap">{el}</td>
                        <td className="py-2 pr-4 leading-6">{d}</td>
                        <td className="py-2 leading-6 italic text-text-light">{ex}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* 4.2 Variables */}
            <div className="mt-6">
              <h3 className="text-base font-bold text-dark">4.2 Les Variables</h3>
              <div className="mt-3 overflow-x-auto">
                <table className="w-full text-sm text-text">
                  <thead>
                    <tr className="border-b border-border text-left">
                      {["Type de variable", "Définition", "Exemple"].map((h) => (
                        <th key={h} className="pb-2 pr-4 font-semibold text-dark last:pr-0">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {[
                      { t: "Variable indépendante (VI)", d: "Influence ou affecte un résultat.", ex: "Utilisation de simulations visuelles." },
                      { t: "Variable dépendante (VD)", d: "Dépend de la VI, c'est le résultat mesuré.", ex: "Scores de compréhension des algorithmes." },
                      { t: "Variable de contrôle", d: "VI secondaire qu'on élimine comme explication.", ex: "Sexe, statut socio-économique." },
                      { t: "Variable de traitement", d: "VI catégorielle (activité reçue ou non).", ex: "Gamification vs enseignement traditionnel." },
                      { t: "Variable en catégories", d: "Petit nombre de groupes (score discret).", ex: "Garçons/Filles, Collège/Lycée." },
                      { t: "Variable continue", d: "Score le long d'un continuum (intervalle).", ex: "Score d'estime de soi (1–5)." },
                    ].map(({ t, d, ex }) => (
                      <tr key={t}>
                        <td className="py-2 pr-4 font-bold text-primary-light whitespace-nowrap">{t}</td>
                        <td className="py-2 pr-4 leading-6">{d}</td>
                        <td className="py-2 leading-6 italic text-text-light">{ex}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* 4.3 Types de questions */}
            <div className="mt-6">
              <h3 className="text-base font-bold text-dark">4.3 Types de Questions de Recherche Quantitative</h3>
              <div className="mt-3 grid gap-3 sm:grid-cols-3">
                {[
                  {
                    t: "Descriptive",
                    s: "À quelle fréquence [participants] [variable] ?",
                    ex: "À quelle fréquence les élèves du collège utilisent-ils les sites web éducatifs ?",
                    color: "border-blue-200 bg-blue-50 text-blue-700",
                  },
                  {
                    t: "Relationnelle",
                    s: "Quel est le lien entre [VI] et [VD] ?",
                    ex: "Quelle est la relation entre maîtrise du français et réussite en informatique ?",
                    color: "border-green-200 bg-green-50 text-green-700",
                  },
                  {
                    t: "Comparative",
                    s: "En quoi [groupe 1] diffère-t-il de [groupe 2] en termes de [VD] ?",
                    ex: "Différences d'utilisation des réseaux sociaux entre filles et garçons ?",
                    color: "border-purple-200 bg-purple-50 text-purple-700",
                  },
                ].map(({ t, s, ex, color }) => (
                  <div key={t} className={`rounded-[12px] border p-4 text-sm ${color}`}>
                    <p className="font-bold">{t}</p>
                    <p className="mt-1 rounded-[6px] bg-white px-2 py-1 font-mono text-xs text-dark">{s}</p>
                    <p className="mt-2 italic leading-5">{ex}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 4.4 Hypothèses */}
            <div className="mt-6">
              <h3 className="text-base font-bold text-dark">4.4 Types d&apos;Hypothèses</h3>
              <div className="mt-3 overflow-x-auto">
                <table className="w-full text-sm text-text">
                  <thead>
                    <tr className="border-b border-border text-left">
                      {["Type", "Description", "Exemple"].map((h) => (
                        <th key={h} className="pb-2 pr-4 font-semibold text-dark last:pr-0">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {[
                      { t: "Hypothèse nulle (H₀)", d: "Aucune relation / aucune différence.", ex: "Les activités collaboratives n'ont aucun effet significatif sur les performances en codage." },
                      { t: "H. alt. non directionnelle", d: "Prédit un changement sans préciser la direction.", ex: "Les activités collaboratives ont un effet significatif sur les performances." },
                      { t: "H. alt. directionnelle", d: "Prédit la direction du changement (+/-).", ex: "Les activités collaboratives améliorent significativement les performances en codage." },
                    ].map(({ t, d, ex }) => (
                      <tr key={t}>
                        <td className="py-2 pr-4 font-bold text-primary-light whitespace-nowrap">{t}</td>
                        <td className="py-2 pr-4 leading-6">{d}</td>
                        <td className="py-2 leading-6 italic text-text-light">{ex}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* 4.5 & 4.6 Structures */}
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[12px] border border-border bg-bg p-4 text-sm">
                <p className="font-bold text-dark">📝 4.5 Structure objectif quantitatif</p>
                <p className="mt-3 rounded-[8px] bg-white px-3 py-3 italic leading-6 text-text">
                  «Le but de cette étude est de tester la théorie [X] en reliant [VI] à [VD] pour [participants] sur [site de recherche].»
                </p>
              </div>
              <div className="rounded-[12px] border border-border bg-bg p-4 text-sm">
                <p className="font-bold text-dark">📝 4.6 Structure objectif qualitatif</p>
                <p className="mt-3 rounded-[8px] bg-white px-3 py-3 italic leading-6 text-text">
                  «Le but de cette étude qualitative est de [explorer/découvrir/comprendre/décrire] [phénomène central] pour [participants] au [site de recherche].»
                </p>
              </div>
            </div>
          </section>

          {/* ══════════════════════════════════════════════
              SITUATION 5 — Collecte Quantitative & Échantillonnage
          ══════════════════════════════════════════════ */}
          <section className="soft-card p-6 sm:p-8">
            <h2 className="text-xl font-extrabold text-dark">
              Situation 5 — Collecte de Données Quantitatives &amp; Échantillonnage
            </h2>

            {/* 5.1 Étapes */}
            <div className="mt-5">
              <h3 className="text-base font-bold text-dark">5.1 Cinq étapes du processus de collecte</h3>
              <div className="mt-3 flex flex-col gap-2 sm:flex-row">
                {[
                  { n: "1", e: "Déterminer les participants (unité d'analyse, population, échantillon)." },
                  { n: "2", e: "Obtenir les autorisations (participants + établissement)." },
                  { n: "3", e: "Déterminer les types d'informations à collecter." },
                  { n: "4", e: "Localiser et sélectionner les instruments de collecte." },
                  { n: "5", e: "Administrer l'instrument pour collecter les données." },
                ].map(({ n, e }) => (
                  <div key={n} className="flex-1 rounded-[12px] border border-border bg-bg p-3 text-sm text-center">
                    <span className="flex h-7 w-7 mx-auto items-center justify-center rounded-full bg-primary-light/10 text-sm font-bold text-primary-light">
                      {n}
                    </span>
                    <p className="mt-2 leading-5 text-text">{e}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 5.2 Population vs Échantillon */}
            <div className="mt-6">
              <h3 className="text-base font-bold text-dark">5.2 Population vs Échantillon</h3>
              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                {[
                  { c: "Population", d: "Groupe d'individus ayant la même caractéristique (ex : tous les enseignants)." },
                  { c: "Échantillon", d: "Sous-groupe de la population cible étudié pour généraliser." },
                  { c: "Unité d'analyse", d: "Niveau où les données sont collectées (individu, famille, école...)." },
                  { c: "Erreur d'échantillonnage", d: "Différence entre l'estimation de l'échantillon et le score réel de la population." },
                ].map(({ c, d }) => (
                  <div key={c} className="rounded-[10px] border border-border bg-bg px-4 py-3 text-sm text-text">
                    <span className="font-bold text-dark">{c} : </span>{d}
                  </div>
                ))}
              </div>
            </div>

            {/* 5.3 Probabiliste */}
            <div className="mt-6">
              <h3 className="text-base font-bold text-dark">5.3 Techniques d&apos;échantillonnage probabiliste</h3>
              <div className="mt-3 overflow-x-auto">
                <table className="w-full text-sm text-text">
                  <thead>
                    <tr className="border-b border-border text-left">
                      {["Technique", "Description", "Exemple"].map((h) => (
                        <th key={h} className="pb-2 pr-4 font-semibold text-dark last:pr-0">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {[
                      { t: "Aléatoire simple", d: "Tout individu a une probabilité égale d'être sélectionné.", ex: "Tirage au sort dans une liste de 500 élèves." },
                      { t: "Systématique", d: "Choisir chaque Nième individu (N = taille pop / taille échantillon).", ex: "Pop 1000, éch 200 → N=5 → choisir 1 sur 5." },
                      { t: "Stratifié", d: "Diviser la population en strates, puis tirage dans chaque strate.", ex: "Pop 9000 (3000F + 6000H) → éch 300 (100F + 200H)." },
                      { t: "Par grappes (clusters)", d: "Sélection en 2 étapes : d'abord des groupes, puis des individus.", ex: "Sélection d'écoles, puis d'élèves dans ces écoles." },
                    ].map(({ t, d, ex }) => (
                      <tr key={t}>
                        <td className="py-2 pr-4 font-bold text-primary-light whitespace-nowrap">{t}</td>
                        <td className="py-2 pr-4 leading-6">{d}</td>
                        <td className="py-2 leading-6 italic text-text-light">{ex}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* 5.4 Non probabiliste */}
            <div className="mt-5">
              <h3 className="text-base font-bold text-dark">5.4 Techniques non probabilistes</h3>
              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                {[
                  { t: "De commodité", d: "Participants disponibles et prêts à participer." },
                  { t: "Boule de neige", d: "Les participants recommandent d'autres participants." },
                ].map(({ t, d }) => (
                  <div key={t} className="rounded-[10px] border border-border bg-bg px-4 py-3 text-sm text-text">
                    <span className="font-bold text-dark">{t} : </span>{d}
                  </div>
                ))}
              </div>
            </div>

            {/* 5.5 & 5.6 Types de données & instruments */}
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[12px] border border-border bg-bg p-4 text-sm">
                <p className="font-bold text-dark">📊 5.5 Types de données à collecter</p>
                <div className="mt-2 space-y-1">
                  {[
                    { t: "Données de performance", u: "Évaluer la capacité (test de réussite, test d'intelligence)." },
                    { t: "Données attitudinales", u: "Mesurer les sentiments envers un sujet éducatif." },
                    { t: "Données comportementales", u: "Observer et enregistrer des comportements spécifiques." },
                    { t: "Informations factuelles", u: "Sources publiques sur une population ou un échantillon." },
                  ].map(({ t, u }) => (
                    <div key={t} className="rounded-[8px] bg-white px-3 py-2 text-text">
                      <span className="font-semibold text-dark">{t} : </span>{u}
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-[12px] border border-border bg-bg p-4 text-sm">
                <p className="font-bold text-dark">🛠️ 5.6 & 5.7 Instruments & Scores</p>
                <p className="mt-2 text-text leading-6">
                  Un instrument = outil de mesure (test, questionnaire, feuille de scores, journal, liste de contrôle, inventaire).
                </p>
                <p className="mt-2 text-text">3 options : ① Développer soi-même ② Localiser et modifier ③ Utiliser dans son intégralité.</p>
                <div className="mt-3 space-y-1">
                  {[
                    { s: "Score élémentaire", d: "Score individuel attribué à chaque question." },
                    { s: "Score additionné", d: "Somme des scores d'un individu sur plusieurs questions." },
                    { s: "Score de différence", d: "Représente un changement (pré-test → post-test)." },
                  ].map(({ s, d }) => (
                    <div key={s} className="rounded-[8px] bg-white px-3 py-2 text-text">
                      <span className="font-semibold text-dark">{s} : </span>{d}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* ══════════════════════════════════════════════
              SITUATION 6 — Analyse Quantitative
          ══════════════════════════════════════════════ */}
          <section className="soft-card p-6 sm:p-8">
            <h2 className="text-xl font-extrabold text-dark">
              Situation 6 — Analyse &amp; Interprétation des Données Quantitatives
            </h2>

            {/* 6.1 Étapes */}
            <div className="mt-5">
              <h3 className="text-base font-bold text-dark">6.1 Étapes du processus d&apos;analyse</h3>
              <div className="relative mt-3 pl-5">
                <span aria-hidden className="absolute left-[7px] top-2 h-[calc(100%-12px)] w-[2px] rounded-full bg-border" />
                {[
                  "Préparer les données pour l'analyse (notation, scores, logiciel).",
                  "Choisir les méthodes statistiques adaptées.",
                  "Analyser les données (descriptive + inférentielle).",
                  "Représenter les résultats (tableaux, graphiques).",
                  "Interpréter les résultats.",
                ].map((e, i) => (
                  <div key={i} className="relative pb-2 last:pb-0">
                    <span aria-hidden className="absolute -left-[13px] top-[5px] h-3 w-3 rounded-full border-2 border-primary-light bg-white" />
                    <div className="rounded-[8px] border border-border bg-bg px-4 py-2 text-sm text-text">
                      <span className="font-bold text-dark">Étape {i + 1} : </span>{e}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 6.2 & 6.3 Statistiques */}
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[12px] border border-border bg-bg p-4 text-sm">
                <p className="font-bold text-dark">📈 6.2 Statistiques Descriptives</p>
                <div className="mt-3 space-y-1">
                  {[
                    { m: "Tendance centrale", i: "Moyenne, Médiane, Mode." },
                    { m: "Variabilité", i: "Variance, Écart-type, Étendue." },
                    { m: "Position relative", i: "Score Z, Rang centile." },
                  ].map(({ m, i }) => (
                    <div key={m} className="rounded-[8px] bg-white px-3 py-2 text-text">
                      <span className="font-semibold text-dark">{m} : </span>{i}
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-[12px] border border-border bg-bg p-4 text-sm">
                <p className="font-bold text-dark">🔬 6.3 Statistiques Inférentielles</p>
                <p className="mt-1 text-xs text-text-light italic">
                  Analyser un échantillon pour tirer des conclusions sur la population.
                </p>
                <div className="mt-3 space-y-1">
                  {[
                    { t: "T-test (test de Student)", u: "Comparer les moyennes de 2 groupes." },
                    { t: "ANOVA", u: "Comparer les moyennes de 3 groupes ou plus." },
                    { t: "ANCOVA", u: "ANOVA avec variable de contrôle." },
                    { t: "Chi-carré (Chi-Square)", u: "Tester l'association entre 2 variables catégorielles." },
                  ].map(({ t, u }) => (
                    <div key={t} className="rounded-[8px] bg-white px-3 py-2 text-text">
                      <span className="font-semibold text-dark">{t} : </span>{u}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 6.4 Logiciels + 6.5 Cas d'étude */}
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[12px] border border-border bg-bg p-4 text-sm">
                <p className="font-bold text-dark">💻 6.4 Logiciels statistiques</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {["SPSS", "MS Excel", "Minitab", "JMP", "SYSTAT", "SAS"].map((l) => (
                    <span key={l} className="rounded-full border border-primary-light/30 bg-primary-light/5 px-3 py-1 text-xs font-semibold text-primary-light">
                      {l}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-[12px] border border-border bg-bg p-4 text-sm">
                <p className="font-bold text-dark">🖥️ 6.5 Cas d&apos;étude — Outils Numériques en Classe (Scratch)</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 leading-6 text-text">
                  <li>Les élèves utilisant l&apos;outil obtiennent-ils de meilleures performances ?</li>
                  <li>Participent-ils davantage ?</li>
                </ul>
                <p className="mt-2 text-text">
                  <span className="font-semibold text-dark">H₀ : </span>Les moyennes des scores des deux groupes sont égales.
                </p>
                <p className="mt-1 text-text">
                  <span className="font-semibold text-dark">H₁ : </span>Le nombre d&apos;interactions avec Scratch a un effet significatif sur les scores finaux.
                </p>
              </div>
            </div>
          </section>

          {/* ══════════════════════════════════════════════
              SITUATION 7 — Collecte de Données Qualitatives
          ══════════════════════════════════════════════ */}
          <section className="soft-card p-6 sm:p-8">
            <h2 className="text-xl font-extrabold text-dark">
              Situation 7 — Collecte de Données Qualitatives
            </h2>

            <div className="mt-5 rounded-[12px] border border-border bg-bg p-4 text-sm leading-7 text-text">
              <p className="font-semibold text-dark">📌 Principe</p>
              <p className="mt-2">
                Dans les études qualitatives, l&apos;intention n&apos;est pas de <strong>généraliser</strong> mais de développer une <strong>exploration approfondie d&apos;un phénomène central</strong>.
              </p>
              <p className="mt-1">
                → Technique utilisée : <strong>Échantillonnage ciblé (intentionnel)</strong>.
              </p>
            </div>

            {/* 7.2 Techniques qualitatives */}
            <div className="mt-5">
              <h3 className="text-base font-bold text-dark">7.2 Techniques d&apos;échantillonnage qualitatif</h3>
              <div className="mt-3 overflow-x-auto">
                <table className="w-full text-sm text-text">
                  <thead>
                    <tr className="border-b border-border text-left">
                      {["Technique", "Description", "Quand l'utiliser ?"].map((h) => (
                        <th key={h} className="pb-2 pr-4 font-semibold text-dark last:pr-0">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {[
                      { t: "Variation maximale", d: "Individus qui diffèrent sur une caractéristique.", q: "Explorer la diversité des perspectives." },
                      { t: "Cas extrême", d: "Cas aberrant ou aux caractéristiques extrêmes.", q: "Étudier un cas exceptionnel (récompensé ou problématique)." },
                      { t: "Cas typique", d: "Personne ou site représentatif de la population.", q: "Explorer ce qui est «normal»." },
                      { t: "Homogène", d: "Individus partageant un trait ou caractéristique similaire.", q: "Explorer un sous-groupe spécifique." },
                      { t: "Critique", d: "Cas exceptionnel riche en informations.", q: "Violence dans une école après incident." },
                      { t: "Opportuniste", d: "Émerge au cours de l'étude selon les événements.", q: "Profiter d'opportunités inattendues." },
                      { t: "Boule de neige", d: "Les participants recommandent d'autres.", q: "Population difficile à atteindre." },
                      { t: "Confirmation/infirmation", d: "Pour confirmer ou réfuter des résultats préliminaires.", q: "Validation des résultats en cours d'étude." },
                    ].map(({ t, d, q }) => (
                      <tr key={t}>
                        <td className="py-2 pr-4 font-bold text-primary-light whitespace-nowrap">{t}</td>
                        <td className="py-2 pr-4 leading-6">{d}</td>
                        <td className="py-2 leading-6 italic text-text-light">{q}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* 7.3 Types de données */}
            <div className="mt-6">
              <h3 className="text-base font-bold text-dark">7.3 Types de données qualitatives</h3>
              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                <div className="rounded-[12px] border border-border bg-bg p-4 text-sm">
                  <p className="font-bold text-dark">① Observations</p>
                  <ul className="mt-2 list-disc space-y-1 pl-5 leading-6 text-text">
                    <li>Notes de terrain : en tant que participant ou observateur.</li>
                  </ul>
                </div>
                <div className="rounded-[12px] border border-border bg-bg p-4 text-sm">
                  <p className="font-bold text-dark">② Entretiens &amp; Questionnaires</p>
                  <ul className="mt-2 list-disc space-y-1 pl-5 leading-6 text-text">
                    {[
                      "Entretien non structuré et ouvert (notes ou enregistrement).",
                      "Entretien semi-structuré (enregistrement + transcription).",
                      "Entrevues de groupe de discussion (focus group).",
                      "Questionnaire à questions ouvertes.",
                    ].map((pt) => <li key={pt}>{pt}</li>)}
                  </ul>
                </div>
                <div className="rounded-[12px] border border-border bg-bg p-4 text-sm">
                  <p className="font-bold text-dark">③ Documents</p>
                  <ul className="mt-2 list-disc space-y-1 pl-5 leading-6 text-text">
                    {[
                      "Journal de l'enseignant ou du participant, lettres personnelles.",
                      "Documents publics (notes de service, procès-verbaux).",
                      "Documents scolaires (rapports de présence, taux d'abandon).",
                      "Autobiographies, biographies, portfolios d'élèves.",
                      "E-mails et données électroniques.",
                    ].map((pt) => <li key={pt}>{pt}</li>)}
                  </ul>
                </div>
                <div className="rounded-[12px] border border-border bg-bg p-4 text-sm">
                  <p className="font-bold text-dark">④ Matériel Audiovisuel</p>
                  <ul className="mt-2 list-disc space-y-1 pl-5 leading-6 text-text">
                    {[
                      "Enregistrements vidéo, photographies, cahiers des élèves.",
                      "Demander aux participants de prendre des photos/vidéos.",
                    ].map((pt) => <li key={pt}>{pt}</li>)}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* ══════════════════════════════════════════════
              SITUATION 8 — Analyse de Données Qualitatives
          ══════════════════════════════════════════════ */}
          <section className="soft-card p-6 sm:p-8">
            <h2 className="text-xl font-extrabold text-dark">
              Situation 8 — Analyse de Données Qualitatives
            </h2>

            {/* 8.1 Pourquoi */}
            <div className="mt-5">
              <h3 className="text-base font-bold text-dark">8.1 Pourquoi analyser les données qualitatives ?</h3>
              <div className="mt-3 grid gap-3 sm:grid-cols-3">
                {[
                  { r: "Identifier des tendances et thèmes." },
                  { r: "Comprendre les motifs derrière des comportements." },
                  { r: "Enrichir les résultats quantitatifs." },
                ].map(({ r }) => (
                  <div key={r} className="rounded-[12px] border border-border bg-bg p-4 text-sm text-center text-text">
                    {r}
                  </div>
                ))}
              </div>
            </div>

            {/* 8.2 Étapes */}
            <div className="mt-6">
              <h3 className="text-base font-bold text-dark">8.2 Étapes d&apos;analyse qualitative</h3>
              <div className="mt-3 overflow-x-auto">
                <table className="w-full text-sm text-text">
                  <thead>
                    <tr className="border-b border-border text-left">
                      {["Étape", "Description"].map((h) => (
                        <th key={h} className="pb-2 pr-4 font-semibold text-dark last:pr-0">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {[
                      { e: "1. Collecte & organisation", d: "Regrouper transcriptions, notes, documents. Anonymiser les participants. Vérifier cohérence et clarté." },
                      { e: "2. Transcription", d: "Transcription verbatim (texte exact) ou sélective (passages pertinents)." },
                      { e: "3. Codage", d: "Attribution de mots-clés (codes) à des segments de texte." },
                      { e: "4. Identification des thèmes", d: "Regrouper les codes en catégories plus larges." },
                      { e: "5. Analyse & interprétation", d: "Description des résultats + recherche de relations entre thèmes." },
                      { e: "6. Validation", d: "Triangulation et retour aux participants." },
                      { e: "7. Présentation", d: "Citations, tableaux, nuages de mots, diagrammes." },
                    ].map(({ e, d }) => (
                      <tr key={e}>
                        <td className="py-2 pr-4 font-bold text-primary-light whitespace-nowrap">{e}</td>
                        <td className="py-2 leading-6">{d}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* 8.3 Codage */}
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[12px] border border-border bg-bg p-4 text-sm">
                <p className="font-bold text-dark">🏷️ 8.3 Types de codage</p>
                <div className="mt-3 space-y-2">
                  {[
                    { t: "Inductif (exploratoire)", d: "Les thèmes émergent directement des données.", ex: "«L'outil est motivant» → Code : Motivation." },
                    { t: "Déductif (dirigé)", d: "Utilisation de catégories prédéfinies.", ex: "«J'ai eu des difficultés» → Catégorie : Obstacles." },
                  ].map(({ t, d, ex }) => (
                    <div key={t} className="rounded-[8px] bg-white px-3 py-2 text-text">
                      <p className="font-semibold text-dark">{t}</p>
                      <p className="mt-1">{d}</p>
                      <p className="mt-1 italic text-text-light text-xs">{ex}</p>
                    </div>
                  ))}
                </div>
                <p className="mt-3 text-xs text-text">
                  <span className="font-semibold text-dark">Outils : </span>
                  Manuellement (Excel ou papier) | Logiciels : NVivo, Atlas.ti
                </p>
              </div>

              {/* 8.5 Identification des thèmes */}
              <div className="rounded-[12px] border border-border bg-bg p-4 text-sm">
                <p className="font-bold text-dark">🗂️ 8.5 Identification des thèmes — Exemple</p>
                <div className="mt-3 space-y-2">
                  {[
                    { th: "Engagement", codes: "Motivation, Participation active, Intérêt." },
                    { th: "Obstacles", codes: "Difficultés techniques, Manque de formation, Résistance au changement." },
                    { th: "Impact pédagogique", codes: "Amélioration des résultats, Autonomie, Compréhension accrue." },
                  ].map(({ th, codes }) => (
                    <div key={th} className="rounded-[8px] bg-white px-3 py-2 text-text">
                      <span className="font-semibold text-dark">{th} : </span>{codes}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 8.6 Validation + 8.7 Présentation */}
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[12px] border border-border bg-bg p-4 text-sm">
                <p className="font-bold text-dark">✅ 8.6 Validation par Triangulation</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 leading-6 text-text">
                  {[
                    "Comparer les données qualitatives avec des données quantitatives.",
                    "Retour aux participants : demander leur avis sur l'analyse.",
                    "Croiser plusieurs sources (observations + entretiens + documents).",
                  ].map((pt) => <li key={pt}>{pt}</li>)}
                </ul>
              </div>
              <div className="rounded-[12px] border border-border bg-bg p-4 text-sm">
                <p className="font-bold text-dark">📊 8.7 Présentation des résultats qualitatifs</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 leading-6 text-text">
                  {[
                    "Intégrer des citations pertinentes pour illustrer les thèmes.",
                    "Tableaux pour organiser les codes et thèmes.",
                    "Nuages de mots pour visualiser les fréquences.",
                    "Diagrammes pour montrer les liens entre catégories.",
                  ].map((pt) => <li key={pt}>{pt}</li>)}
                </ul>
              </div>
            </div>
          </section>

         

        </div>
      </div>
    </main>
  );
}
