import { modulePages } from '../../data/portfolioData';
import ModuleSimplePage from './ModuleSimplePage';

const slug = 's2-analyse-pratiques-professionnelles';

export default function S2AnalysePratiquesProfessionnellesPage() {
  const module = modulePages.find((item) => item.slug === slug);

  const getResourceLink = (resource) => {
    if (resource.href && resource.href !== '#') {
      return resource.href;
    }
    const query = `${module?.title ?? 'Analyse'} ${resource.label} CRMEF`;
    return `https://drive.google.com/drive/search?q=${encodeURIComponent(query)}`;
  };

  return (
    <main className="section-shell bg-white">
      <div className="portfolio-container">

        {/* ── En-tête + Ressources ── */}
        <section className="mb-8 grid gap-6 lg:grid-cols-3">
          <article className="lg:col-span-2">
            <div className="rounded-[16px] border border-border bg-bg p-6 sm:p-8">
          <div className="text-xs font-bold uppercase tracking-[0.16em] text-accent">
            CRMEF Casa-Settat · Naji Lahcen · 2024-2025
          </div>
          <h1 className="mt-2 text-2xl font-extrabold text-dark sm:text-3xl">
            Analyse des Pratiques Professionnelles
          </h1>
          <p className="mt-3 text-sm leading-7 text-text">
            Fiche de synthèse détaillée — Tous les axes du module
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {[
              "Pratiques professionnelles",
              "Analyse (Altet)",
              "APP en enseignement",
              "Domaines APP",
              "Objectifs & profil réflexif",
              "Dimensions APP",
              "Approches psychosociale/clinique/réflexive",
              "Démarche 5 phases",
              "Styles d'enseignement",
              "Grille Altet",
              "Obstacles APP",
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

        <div className="space-y-8">

          {/* ══════════════════════════════════════════════
              AXE 1 — Les pratiques professionnelles
          ══════════════════════════════════════════════ */}
          <section className="soft-card p-6 sm:p-8">
            <h2 className="text-xl font-extrabold text-dark">
              AXE 1 — Les Pratiques Professionnelles
            </h2>

            {/* 1.1 Définition générale */}
            <div className="mt-5 rounded-[12px] border border-border bg-bg p-4 text-sm leading-7 text-text">
              <p className="font-bold text-dark">📌 1.1 Définition générale</p>
              <p className="mt-2">
                Les pratiques professionnelles désignent l&apos;ensemble des <strong>actions, méthodes, techniques, stratégies, décisions et comportements</strong> adoptés par un individu ou un groupe dans le cadre de son activité professionnelle.
              </p>
              <p className="mt-2">
                Elles incluent les compétences, les processus, les outils et les savoir-faire utilisés pour accomplir les tâches spécifiques à un métier ou à une fonction.
              </p>
              <p className="mt-2 italic text-text-light">
                Ces pratiques sont souvent guidées par des normes, des règles éthiques et des objectifs organisationnels. Elles peuvent évoluer en fonction des contextes, des innovations et des exigences du marché.
              </p>
            </div>

            {/* 1.2 Dans l'enseignement */}
            <div className="mt-5">
              <h3 className="text-base font-bold text-dark">
                1.2 Les pratiques professionnelles dans l&apos;enseignement
              </h3>
              <p className="mt-2 text-sm text-text leading-6">
                Dans le contexte de l&apos;enseignement, les pratiques professionnelles désignent l&apos;ensemble des stratégies, approches et méthodes pédagogiques utilisées pour favoriser l&apos;apprentissage des élèves.
              </p>
              <div className="mt-3 overflow-x-auto">
                <table className="w-full text-sm text-text">
                  <thead>
                    <tr className="border-b border-border text-left">
                      {["Composante", "Description"].map((h) => (
                        <th key={h} className="pb-2 pr-4 font-semibold text-dark last:pr-0">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {[
                      { c: "Méthodes pédagogiques", d: "Techniques pour transmettre les connaissances et développer les compétences des élèves (apprentissage par projet, pédagogie différenciée, enseignement explicite...)." },
                      { c: "Organisation de la classe", d: "Gestion de l'espace, du temps et des interactions (gestion de groupe, différenciation des tâches...)." },
                      { c: "Évaluation des élèves", d: "Pratiques liées à l'évaluation des progrès via examens, évaluations formatives, retours réguliers." },
                      { c: "Relations avec les élèves", d: "Interactions pour instaurer un climat de confiance, encourager la motivation et l'autonomie." },
                      { c: "Réflexion professionnelle", d: "Auto-évaluation et recherche constante d'amélioration par la formation continue ou l'observation." },
                    ].map(({ c, d }) => (
                      <tr key={c}>
                        <td className="py-2 pr-4 font-bold text-primary-light whitespace-nowrap">{c}</td>
                        <td className="py-2 leading-6">{d}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* 1.3 Altet */}
            <div className="mt-5 rounded-[12px] border border-border bg-bg p-4 text-sm">
              <p className="font-bold text-dark">📖 1.3 La pratique selon Altet (2007)</p>
              <p className="mt-2 leading-6 text-text">
                Pour Altet (2007), la pratique représente le <strong>comportement individuel personnel</strong> d&apos;un individu, un ensemble de conduites conformément à des critères reconnus par une instance professionnelle.
              </p>
              <p className="mt-2 leading-6 text-text">
                Elle se manifeste dans la forme, les comportements, les méthodes reconnues, les choix, les stratégies, les décisions, les buts et les orientations adoptées par l&apos;enseignant.
              </p>
            </div>
          </section>

          {/* ══════════════════════════════════════════════
              AXE 2 — Qu'est-ce que l'analyse ?
          ══════════════════════════════════════════════ */}
          <section className="soft-card p-6 sm:p-8">
            <h2 className="text-xl font-extrabold text-dark">
              AXE 2 — Qu&apos;est-ce que l&apos;Analyse ?
            </h2>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[12px] border border-border bg-bg p-4 text-sm">
                <p className="font-bold text-dark">📌 2.1 Définition générale</p>
                <p className="mt-2 leading-6 text-text">
                  L&apos;analyse est le processus qui consiste à <strong>diviser un sujet ou un matériel complexe en petites parties</strong> afin d&apos;obtenir une meilleure compréhension.
                </p>
                <div className="mt-3 rounded-[8px] bg-white px-3 py-3 italic text-text-light text-xs leading-6">
                  «Selon Altet (2002) : Analyser signifie déterminer et identifier des éléments séparés, ainsi que réguler la relation entre ces éléments, et leur donner un sens.»
                </div>
                <p className="mt-3 leading-6 text-text">
                  C&apos;est une démarche intellectuelle ou scientifique visant à étudier en détail un sujet, un problème ou un ensemble de données pour mieux comprendre leur organisation, leurs relations et leurs implications.
                </p>
              </div>
              <div className="rounded-[12px] border border-border bg-bg p-4 text-sm">
                <p className="font-bold text-dark">🔍 2.2 Analyse des pratiques selon Altet</p>
                <p className="mt-2 leading-6 text-text">
                  Analyser les pratiques professionnelles signifie <strong>identifier et comprendre les éléments, les organiser et leur donner un sens</strong>, en s&apos;appuyant sur un modèle de référence pour une vision claire de la profession.
                </p>
                <p className="mt-3 leading-6 text-text">
                  C&apos;est un processus cognitif volontaire entrepris par l&apos;enseignant afin de diriger son attention vers lui-même et ses pratiques, dans le but de mieux comprendre ses tendances, ses orientations et ses choix pédagogiques.
                </p>
              </div>
            </div>
          </section>

          {/* ══════════════════════════════════════════════
              AXE 3 — L'APP dans l'enseignement
          ══════════════════════════════════════════════ */}
          <section className="soft-card p-6 sm:p-8">
            <h2 className="text-xl font-extrabold text-dark">
              AXE 3 — L&apos;APP dans l&apos;Enseignement
            </h2>

            {/* 3.1 Définition */}
            <div className="mt-5 rounded-[12px] border border-border bg-bg p-4 text-sm leading-7 text-text">
              <p className="font-bold text-dark">📌 3.1 Définition de l&apos;APP</p>
              <p className="mt-2">
                L&apos;analyse des pratiques professionnelles (APP) dans l&apos;enseignement est un <strong>processus cognitif volontaire</strong> entrepris par l&apos;enseignant afin de diriger son attention vers lui-même et vers ses pratiques.
              </p>
              <p className="mt-2">
                Son objectif est de mieux comprendre ses tendances, ses orientations et ses choix pédagogiques, puis de travailler à les développer en permanence.
              </p>
              <p className="mt-2 font-semibold text-dark">L&apos;APP repose sur des modèles de référence permettant une lecture rationnelle des événements. Son importance :</p>
              <ul className="mt-2 list-disc space-y-1 pl-5">
                {[
                  "Relier le côté théorique au côté pratique.",
                  "Soutenir la formation professionnelle autonome.",
                  "Développer une pensée critique pour construire des compétences professionnelles.",
                ].map((pt) => <li key={pt}>{pt}</li>)}
              </ul>
            </div>

            {/* 3.2 But + 3.3 Ce que l'APP n'est PAS */}
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[12px] border border-border bg-bg p-4 text-sm">
                <p className="font-bold text-dark">🎯 3.2 But de l&apos;APP dans l&apos;enseignement</p>
                <ul className="mt-3 list-disc space-y-1 pl-5 leading-6 text-text">
                  {[
                    "Comprendre et analyser ses pratiques afin de les améliorer continuellement.",
                    "Encourager l'autoréflexion de l'enseignant dans ses pratiques.",
                    "Les soumettre à une critique, individuellement ou collectivement.",
                    "Former des enseignants réfléchis et visionnaires.",
                    "Passer d'une pratique spontanée à une pratique raisonnée et systématique.",
                    "Stimuler la pensée réflexive de l'enseignant.",
                    "Encourager le perfectionnement continu dans l'enseignement.",
                  ].map((pt) => <li key={pt}>{pt}</li>)}
                </ul>
              </div>
              <div className="rounded-[12px] border border-red-200 bg-red-50 p-4 text-sm">
                <p className="font-bold text-red-700">🚫 3.3 Ce que l&apos;APP N&apos;est PAS</p>
                <p className="mt-3 leading-6 text-text">
                  Analyser la pratique éducative <strong>ne signifie pas</strong> son évaluation ni le jugement.
                </p>
                <p className="mt-3 rounded-[8px] bg-white px-3 py-3 italic leading-6 text-text-light">
                  L&apos;APP consiste plutôt à établir des relations, des liens, attribuer du sens et comprendre tout ce que fait l&apos;enseignant dans l&apos;exercice de ses fonctions. Elle contribue à l&apos;acquisition de nouveaux savoirs professionnels.
                </p>
              </div>
            </div>
          </section>

          {/* ══════════════════════════════════════════════
              AXE 4 — Domaines de l'APP
          ══════════════════════════════════════════════ */}
          <section className="soft-card p-6 sm:p-8">
            <h2 className="text-xl font-extrabold text-dark">
              AXE 4 — Domaines de l&apos;APP
            </h2>

            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              {[
                { d: "🏫 Pratiques en classe", desc: "Pratiques liées à l'enseignement en classe ou à l'extérieur de la classe.", color: "border-blue-200 bg-blue-50 text-blue-700" },
                { d: "📋 Situations formelles", desc: "Pratiques dans des formations, réunions, conseils de classe au sein de l'établissement.", color: "border-orange-200 bg-orange-50 text-orange-700" },
                { d: "🌐 Rayonnement", desc: "Pratiques en lien avec le rayonnement de l'établissement, à l'intérieur comme à l'extérieur.", color: "border-green-200 bg-green-50 text-green-700" },
              ].map(({ d, desc, color }) => (
                <div key={d} className={`rounded-[12px] border p-4 text-sm ${color}`}>
                  <p className="font-bold">{d}</p>
                  <p className="mt-2 leading-6 text-text">{desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-5 rounded-[12px] border border-border bg-bg p-4 text-sm">
              <p className="font-bold text-dark">🔎 4.2 Focus du module</p>
              <p className="mt-2 text-text leading-6">
                Dans ce module, l&apos;analyse se limite principalement aux pratiques liées à <strong>l&apos;enseignement en classe</strong>. La technique repose sur deux approches complémentaires :
              </p>
              <div className="mt-3 grid gap-2 sm:grid-cols-2">
                <div className="rounded-[8px] bg-white px-3 py-2 text-text">
                  <span className="font-semibold text-dark">Approche 1 : </span>
                  Observation et description des pratiques par des sujets extérieurs (formateurs, inspecteurs...).
                </div>
                <div className="rounded-[8px] bg-white px-3 py-2 text-text">
                  <span className="font-semibold text-dark">Approche 2 : </span>
                  Observation, récit et narration des pratiques par le praticien lui-même.
                </div>
              </div>
            </div>
          </section>

          {/* ══════════════════════════════════════════════
              AXE 5 — Objectifs de l'APP en classe
          ══════════════════════════════════════════════ */}
          <section className="soft-card p-6 sm:p-8">
            <h2 className="text-xl font-extrabold text-dark">
              AXE 5 — Objectifs de l&apos;APP en Classe
            </h2>

            <div className="mt-5 rounded-[12px] border border-border bg-bg p-4 text-sm leading-6 text-text">
              <p>
                L&apos;APP est une <strong>compétence qui peut s&apos;apprendre</strong>. Elle concerne en premier lieu l&apos;enseignant(e) lui-même, car la majeure partie du temps scolaire se déroule entre l&apos;enseignant et l&apos;apprenant.
              </p>
              <p className="mt-2">
                L&apos;analyse des pratiques ne consiste pas à traquer les erreurs, mais à <strong>observer les comportements habituels</strong> pendant la pratique pédagogique pour les analyser et en tirer profit.
              </p>
            </div>

            {/* 5.2 Objectifs spécifiques */}
            <div className="mt-5">
              <h3 className="text-base font-bold text-dark">5.2 Objectifs spécifiques</h3>
              <div className="mt-3 overflow-x-auto">
                <table className="w-full text-sm text-text">
                  <thead>
                    <tr className="border-b border-border text-left">
                      {["Objectif", "Contenu"].map((h) => (
                        <th key={h} className="pb-2 pr-4 font-semibold text-dark last:pr-0">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {[
                      { o: "👁️ Observer", c: "Aider l'enseignant à repérer et comprendre son comportement d'enseignement." },
                      { o: "🔍 Diagnostiquer", c: "Dégager des indicateurs de performance permettant de diagnostiquer ou analyser l'acte d'enseigner." },
                      { o: "🏷️ Identifier", c: "Identifier les points forts de la pratique pédagogique et les aspects à développer." },
                      { o: "💡 Comprendre", c: "Établir des relations, des liens et attribuer du sens à tout ce que fait l'enseignant." },
                      { o: "📈 Développer", c: "Contribuer à l'acquisition de nouveaux savoirs et au développement de compétences professionnelles." },
                    ].map(({ o, c }) => (
                      <tr key={o}>
                        <td className="py-2 pr-4 font-bold text-primary-light whitespace-nowrap">{o}</td>
                        <td className="py-2 leading-6">{c}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* 5.3 Profil du professeur réflexif */}
            <div className="mt-6">
              <h3 className="text-base font-bold text-dark">
                5.3 Profil du Professeur Réfléchi (Altet)
              </h3>
              <div className="mt-3 grid gap-2 sm:grid-cols-2">
                {[
                  { c: "S'interroge", d: "Remet en question ses pratiques et son fonctionnement." },
                  { c: "Chercheur", d: "Explore et recherche constamment de nouvelles connaissances." },
                  { c: "Proactif", d: "Prend des initiatives avant que les problèmes surviennent." },
                  { c: "Ouvert", d: "Réceptif aux idées nouvelles et aux expériences des autres." },
                  { c: "Innovateur", d: "Renouvelle ses méthodes et approches pédagogiques." },
                  { c: "Ambitieux", d: "Vise toujours l'excellence dans son enseignement." },
                  { c: "Ouvert à la critique", d: "Accepte le regard extérieur comme source de progrès." },
                ].map(({ c, d }) => (
                  <div key={c} className="flex gap-2 rounded-[10px] border border-border bg-bg px-3 py-2 text-sm text-text">
                    <span className="shrink-0 font-semibold text-dark">{c} :</span>
                    <span>{d}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ══════════════════════════════════════════════
              AXE 6 — Dimensions de l'APP en classe
          ══════════════════════════════════════════════ */}
          <section className="soft-card p-6 sm:p-8">
            <h2 className="text-xl font-extrabold text-dark">
              AXE 6 — Dimensions de l&apos;APP en Classe
            </h2>

            <p className="mt-3 text-sm leading-6 text-text">
              Les dimensions des pratiques éducatives sont multiples et interconnectées. Toutes ces dimensions sont imbriquées, de sorte que l&apos;analyse doit se concentrer sur les pratiques réelles dans leur intégralité.
            </p>

            <div className="mt-4 space-y-3">
              {[
                {
                  dim: "📚 Didactique — Contenu",
                  items: [
                    "Pertinence et véracité scientifique du contenu présenté.",
                    "Organisation structurée des contenus d'apprentissage.",
                    "Prise en compte et traitement des erreurs des apprenants.",
                    "Vérification du niveau de complexité des tâches demandées.",
                  ],
                  color: "border-blue-200 bg-blue-50",
                  badge: "text-blue-700",
                },
                {
                  dim: "🧩 Didactique — Méthodes",
                  items: [
                    "Intégration dans une progression cohérente.",
                    "Liaison logique entre activités.",
                    "Gestion des situations d'apprentissage.",
                    "Utilisation pertinente des supports didactiques.",
                  ],
                  color: "border-indigo-200 bg-indigo-50",
                  badge: "text-indigo-700",
                },
                {
                  dim: "🏫 Pédagogique",
                  items: [
                    "Situations d'apprentissage motivantes en lien avec le vécu des élèves.",
                    "S'appuyer sur les représentations des apprenants.",
                    "Planification selon les approches pédagogiques adoptées.",
                    "Gestion du temps en fonction de la répartition des activités.",
                    "Organisation de la classe (individuel, groupes, etc.).",
                  ],
                  color: "border-green-200 bg-green-50",
                  badge: "text-green-700",
                },
                {
                  dim: "💬 Communicationnelle & Interactive",
                  items: [
                    "Organiser la participation des apprenants.",
                    "Écouter les apprenants et leur répondre.",
                    "Prêter attention aux questions des apprenants.",
                    "Encourager les apprenants à participer.",
                    "Gérer l'interaction avec eux et entre eux.",
                    "Valoriser leurs interventions pour ajuster, soutenir et remédier.",
                  ],
                  color: "border-orange-200 bg-orange-50",
                  badge: "text-orange-700",
                },
                {
                  dim: "⚖️ Valeurs & Déontologie",
                  items: [
                    "Prise en compte des valeurs sociales, religieuses, nationales.",
                    "Respect de l'éthique et de la déontologie professionnelle.",
                  ],
                  color: "border-purple-200 bg-purple-50",
                  badge: "text-purple-700",
                },
              ].map(({ dim, items, color, badge }) => (
                <div key={dim} className={`rounded-[12px] border p-4 text-sm ${color}`}>
                  <p className={`font-bold ${badge}`}>{dim}</p>
                  <ul className="mt-2 list-disc space-y-1 pl-5 leading-6 text-text">
                    {items.map((it) => <li key={it}>{it}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* ══════════════════════════════════════════════
              AXE 7 — Les approches en APP
          ══════════════════════════════════════════════ */}
          <section className="soft-card p-6 sm:p-8">
            <h2 className="text-xl font-extrabold text-dark">
              AXE 7 — Les Approches en APP
            </h2>

            {/* Vue d'ensemble */}
            <div className="mt-5 overflow-x-auto">
              <table className="w-full text-sm text-text">
                <thead>
                  <tr className="border-b border-border text-left">
                    {["Approche", "Principe central", "Modalité"].map((h) => (
                      <th key={h} className="pb-2 pr-4 font-semibold text-dark last:pr-0">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {[
                    { a: "Psychosociale", p: "Comprendre les pratiques en tenant compte des dimensions psychologiques ET sociales.", m: "Analyse en groupe, cadre sécurisé, confrontation de perceptions." },
                    { a: "Clinique", p: "Partir de situations vécues pour explorer en profondeur le rapport personnel au travail.", m: "Cadre bienveillant et confidentiel, accompagnement sans jugement." },
                    { a: "Réflexive (fonctionnelle)", p: "Comprendre comment les pratiques fonctionnent et les améliorer par une réflexion structurée.", m: "Observer ce qu'on fait, comment, et pourquoi ; ajuster de manière consciente." },
                  ].map(({ a, p, m }) => (
                    <tr key={a}>
                      <td className="py-2 pr-4 font-bold text-primary-light whitespace-nowrap">{a}</td>
                      <td className="py-2 pr-4 leading-6">{p}</td>
                      <td className="py-2 leading-6 italic text-text-light">{m}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Détails des 3 approches */}
            <div className="mt-5 grid gap-4 sm:grid-cols-3">
              {[
                {
                  title: "🧠 7.2 Approche Psychosociale",
                  content: [
                    "Vise à comprendre et améliorer les pratiques en tenant compte des dimensions psychologiques (émotions, représentations, motivations individuelles) et sociales (relations, dynamique de groupe, influences institutionnelles).",
                    "Les pratiques ne peuvent pas être analysées uniquement sous l'angle technique : elles sont toujours influencées par le contexte social, les interactions avec les élèves, les collègues, les attentes de l'institution.",
                    "L'analyse se fait souvent en groupe, dans un cadre sécurisé, où chacun peut exprimer son vécu, confronter ses perceptions et coconstruire de nouvelles façons d'agir.",
                  ],
                  color: "border-blue-200 bg-blue-50",
                },
                {
                  title: "🛋️ 7.3 Approche Clinique",
                  content: [
                    "S'inspire des principes de la clinique en psychologie : elle part de situations vécues, racontées par les enseignants, pour explorer en profondeur leur rapport personnel au travail.",
                    "L'idée est de comprendre comment l'expérience subjective (ressenti, histoire personnelle, valeurs, désirs) influence les pratiques professionnelles.",
                    "Le cadre est bienveillant, confidentiel et soutenant : il s'agit d'accompagner chacun à élaborer ses propres solutions, sans jugement.",
                  ],
                  color: "border-green-200 bg-green-50",
                },
                {
                  title: "🔄 7.4 Approche Réflexive (Fonctionnelle)",
                  content: [
                    "Vise à comprendre comment les pratiques professionnelles fonctionnent concrètement et comment elles peuvent être améliorées par un travail de réflexion structurée.",
                    "L'idée est d'observer ce que l'on fait, comment on le fait, et pourquoi on le fait, en s'appuyant sur l'expérience réelle.",
                    "Orientée vers l'action : elle met l'accent sur la capacité de l'enseignant à réfléchir sur ses gestes professionnels et à ajuster ses pratiques de manière consciente et continue.",
                  ],
                  color: "border-purple-200 bg-purple-50",
                },
              ].map(({ title, content, color }) => (
                <div key={title} className={`rounded-[12px] border p-4 text-sm ${color}`}>
                  <p className="font-bold text-dark">{title}</p>
                  <div className="mt-3 space-y-2">
                    {content.map((c, i) => (
                      <p key={i} className="leading-6 text-text">{c}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ══════════════════════════════════════════════
              AXE 8 — Étapes de l'APP (5 phases)
          ══════════════════════════════════════════════ */}
          <section className="soft-card p-6 sm:p-8">
            <h2 className="text-xl font-extrabold text-dark">
              AXE 8 — Démarche de l&apos;APP en 5 Phases
            </h2>

            {/* 8.1 Les 5 étapes */}
            <div className="mt-5 overflow-x-auto">
              <table className="w-full text-sm text-text">
                <thead>
                  <tr className="border-b border-border text-left">
                    {["Étape", "Nom", "Description détaillée"].map((h) => (
                      <th key={h} className="pb-2 pr-4 font-semibold text-dark last:pr-0">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {[
                    { e: "1", n: "Description", d: "Exprimer clairement ce qui a été perçu et observé directement dans la situation vécue, en adoptant une posture d'observateur attentif. Présenter les faits (qui, quoi, où, quand, comment) sans interprétation ni jugement." },
                    { e: "2", n: "Problématisation", d: "Identifier la problématique centrale comme point de départ d'une démarche d'analyse. Cerner ce qui pose problème dans la situation observée." },
                    { e: "3", n: "Analyse", d: "Relier les différents éléments de la pratique entre eux pour construire du sens et éclairer les enjeux de l'action. Prendre du recul pour comprendre ce qui s'est joué." },
                    { e: "4", n: "Théorisation", d: "Se référer à des savoirs théoriques, des cadres de référence ou des modèles d'intervention pour enrichir la compréhension de la situation et identifier des axes d'amélioration." },
                    { e: "5", n: "Réinvestissement", d: "Imaginer des pistes d'action renouvelées et envisager comment réinvestir ces apprentissages dans de futures pratiques. Formaliser les enseignements retenus." },
                  ].map(({ e, n, d }) => (
                    <tr key={e}>
                      <td className="py-2 pr-4">
                        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary-light/10 text-sm font-extrabold text-primary-light">
                          {e}
                        </span>
                      </td>
                      <td className="py-2 pr-4 font-bold text-dark whitespace-nowrap">{n}</td>
                      <td className="py-2 leading-6">{d}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* 8.2 Exemple pratique en informatique */}
            <div className="mt-6">
              <h3 className="text-base font-bold text-dark">
                💻 8.2 Exemple Pratique en Informatique
              </h3>
              <p className="mt-2 text-sm italic text-text-light">
                Situation choisie : Un cours sur les algorithmes en Tronc commun où la moitié des élèves semblaient décrocher lors d&apos;une nouvelle notion.
              </p>
              <div className="mt-3 overflow-x-auto">
                <table className="w-full text-sm text-text">
                  <thead>
                    <tr className="border-b border-border text-left">
                      {["Phase", "Application concrète"].map((h) => (
                        <th key={h} className="pb-2 pr-4 font-semibold text-dark last:pr-0">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {[
                      { p: "1. Description", a: "Le jeudi 4 avril à 10h, en salle 11, pendant une séance sur les algorithmes, plusieurs élèves bavardaient. Une élève a quitté la salle sans demander. J'ai tenté de ramener le calme sans grand succès." },
                      { p: "2. Problématisation", a: "Gestion de classe difficile lors de l'introduction d'une nouvelle notion en fin de journée avant les vacances." },
                      { p: "3. Analyse", a: "Le choix du moment (fin de journée avant les vacances) n'était pas optimal. Je n'ai pas suffisamment varié les supports ou sollicité les élèves activement." },
                      { p: "4. Théorisation", a: "Recours aux théories de motivation scolaire et de gestion de classe (pédagogie différenciée, variété des approches)." },
                      { p: "5. Réinvestissement", a: "Introduire la notion à l'aide d'un jeu ou d'une activité dynamique. Prévoir un temps de recentrage. Mieux différencier selon les niveaux d'élèves." },
                    ].map(({ p, a }) => (
                      <tr key={p}>
                        <td className="py-2 pr-4 font-bold text-primary-light whitespace-nowrap">{p}</td>
                        <td className="py-2 leading-6">{a}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* 8.3 & 8.4 Détails phases Description et Analyse */}
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[12px] border border-border bg-bg p-4 text-sm">
                <p className="font-bold text-dark">🔎 8.3 Détail de la phase de Description</p>
                <div className="mt-3 space-y-1">
                  {[
                    { n: "1. Choix de la situation", d: "Sélectionner une situation vécue jugée significative, problématique ou interpellante (réussie, difficile, inattendue...)." },
                    { n: "2. Description factuelle", d: "Présentation précise et objective des faits sans interprétation ni jugement." },
                    { n: "3. Contexte", d: "Informations sur le cadre de travail, les personnes impliquées, les contraintes institutionnelles." },
                    { n: "4. Ressenti personnel", d: "Expression des émotions et impressions pendant ou après la situation." },
                  ].map(({ n, d }) => (
                    <div key={n} className="rounded-[8px] bg-white px-3 py-2 text-text">
                      <span className="font-semibold text-dark">{n} : </span>{d}
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-[12px] border border-border bg-bg p-4 text-sm">
                <p className="font-bold text-dark">🔬 8.4 Détail de la phase d&apos;Analyse</p>
                <ul className="mt-3 list-disc space-y-2 pl-5 leading-6 text-text">
                  {[
                    "Prise de recul pour comprendre les enjeux de la situation.",
                    "Interprétation des faits : qu'est-ce qui a bien ou moins bien fonctionné ? Pourquoi ?",
                    "Repérage des compétences mobilisées, des valeurs en jeu, des obstacles rencontrés.",
                  ].map((pt) => <li key={pt}>{pt}</li>)}
                </ul>
              </div>
            </div>
          </section>

          {/* ══════════════════════════════════════════════
              AXE 9 — Style d'enseignement
          ══════════════════════════════════════════════ */}
          <section className="soft-card p-6 sm:p-8">
            <h2 className="text-xl font-extrabold text-dark">
              AXE 9 — Style d&apos;Enseignement (Style Pédagogique)
            </h2>

            <div className="mt-5 rounded-[12px] border border-border bg-bg p-4 text-sm leading-6 text-text">
              <p className="font-bold text-dark">📌 9.1 Définition</p>
              <p className="mt-2">
                Le style d&apos;enseignement est un <strong>comportement personnel caractéristique</strong>, une façon individuelle de lier la relation d&apos;interaction avec l&apos;autre lors de la pratique pédagogique <em>(Altet, 1994)</em>.
              </p>
              <p className="mt-2">
                Les styles diffèrent d&apos;un enseignant à un autre selon : les caractéristiques de sa personnalité, son amour pour la profession, ses expressions verbales et corporelles (gestes, mimiques, ton de voix, rythme).
              </p>
            </div>

            {/* 9.2 Les 5 styles */}
            <div className="mt-5">
              <h3 className="text-base font-bold text-dark">9.2 Les 5 Styles d&apos;Enseignement</h3>
              <div className="mt-3 space-y-3">
                {[
                  {
                    s: "📢 Transmissif",
                    items: [
                      "Transmet les informations par exposé, cours magistral.",
                      "Centré sur le contenu.",
                      "L'enseignant = porteur du savoir.",
                      "Peu d'initiatives laissées aux élèves.",
                      "Autorité et rôle directif.",
                    ],
                    color: "border-red-200 bg-red-50",
                    badge: "text-red-700",
                  },
                  {
                    s: "❓ Interrogatif",
                    items: [
                      "Centré sur l'apprenant à partir de questions dirigées.",
                      "Répond aux seuls élèves avancés.",
                      "Tire son autorité des questions qu'il pose.",
                      "Complète les réponses des élèves.",
                    ],
                    color: "border-orange-200 bg-orange-50",
                    badge: "text-orange-700",
                  },
                  {
                    s: "🤝 Incitatif",
                    items: [
                      "Centré sur la relation humaine enseignant-apprenants.",
                      "L'apprenant = centre des apprentissages.",
                      "Veille sur l'indépendance de l'apprenant.",
                      "Encourage, corrige, ajuste, aide.",
                    ],
                    color: "border-yellow-200 bg-yellow-50",
                    badge: "text-yellow-700",
                  },
                  {
                    s: "🧭 Guide",
                    items: [
                      "Centré sur les situations interactives (brain-storming, débat...).",
                      "Propose des activités motivantes.",
                      "L'apprenant construit son savoir.",
                      "L'évaluation = outil de formation.",
                    ],
                    color: "border-green-200 bg-green-50",
                    badge: "text-green-700",
                  },
                  {
                    s: "🕊️ Permissif",
                    items: [
                      "L'apprenant = centre des apprentissages.",
                      "Rôle minimal de l'enseignant.",
                      "Laisse le champ à l'apprenant pour développer sa compétence.",
                      "Utilise les TICE.",
                    ],
                    color: "border-blue-200 bg-blue-50",
                    badge: "text-blue-700",
                  },
                ].map(({ s, items, color, badge }) => (
                  <div key={s} className={`rounded-[12px] border p-4 text-sm ${color}`}>
                    <p className={`font-bold ${badge}`}>{s}</p>
                    <ul className="mt-2 list-disc space-y-1 pl-5 leading-6 text-text">
                      {items.map((it) => <li key={it}>{it}</li>)}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ══════════════════════════════════════════════
              AXE 10 — Grille d'observation (Altet)
          ══════════════════════════════════════════════ */}
          <section className="soft-card p-6 sm:p-8">
            <h2 className="text-xl font-extrabold text-dark">
              AXE 10 — Grille d&apos;Observation des Pratiques Enseignantes (Altet)
            </h2>

            <p className="mt-3 text-sm leading-6 text-text">
              La grille d&apos;observation est l&apos;outil principal utilisé pour analyser une séquence d&apos;enseignement. Elle couvre les phases de mise en situation, les phases du déroulement du cours, et les activités de l&apos;enseignant et de l&apos;apprenant.
            </p>

            {/* 10.1 Structure */}
            <div className="mt-5 overflow-x-auto">
              <table className="w-full text-sm text-text">
                <thead>
                  <tr className="border-b border-border text-left">
                    {["Phase / Domaine", "Éléments observés"].map((h) => (
                      <th key={h} className="pb-2 pr-4 font-semibold text-dark last:pr-0">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {[
                    { ph: "1. Mise en situation", el: "Objectifs / Intérêt et sens de l'objet d'apprentissage / Énoncé de la compétence / Contrôle des prérequis." },
                    { ph: "2. Phase exploratoire (situation-problème)", el: "Tâche proposée / Clarté et précision des consignes / Mise en activité et productivité des élèves / Obstacles et ruptures / Complexité / Contextualisation / Sens et signification / Interactions / Liens avec d'autres disciplines / Utilisation des savoirs antérieurs." },
                    { ph: "3. Organisation de la classe", el: "Disposition des tables / Travail individuel / Travail en groupes." },
                    { ph: "4. Phase des apprentissages — Activité enseignant", el: "Mise à disposition des documents / Facilitation et guidage de la compréhension / Évaluation continue et remédiation / Accompagnement de la recherche / Exploitation des travaux de groupe / Structuration des acquisitions." },
                    { ph: "4. Phase des apprentissages — Activité apprenant", el: "Recherche / Participation aux activités du groupe / Interaction avec les pairs / Confrontation / Proposition d'idées / Activités individuelles / Construction du savoir / Résolution de la situation-problème." },
                    { ph: "5. Phase d'intégration", el: "Situations d'intégration / Remédiations / Activités métacognitives." },
                    { ph: "6. Phase d'évaluation", el: "Travail sur les erreurs / Remédiations / Situations d'évaluation complexes / Utilisation d'outils d'évaluation des compétences." },
                  ].map(({ ph, el }) => (
                    <tr key={ph}>
                      <td className="py-2 pr-4 font-bold text-primary-light align-top whitespace-nowrap">{ph}</td>
                      <td className="py-2 leading-6">{el}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* 10.2 Échelle d'évaluation */}
            <div className="mt-5 rounded-[12px] border border-border bg-bg p-4 text-sm">
              <p className="font-bold text-dark">📊 10.2 Échelle d&apos;évaluation de la grille (Altet)</p>
              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                <div className="rounded-[8px] bg-white px-3 py-3 text-text">
                  <p className="font-semibold text-dark">Version Oui/Non</p>
                  <p className="mt-1 leading-6">Chaque élément est coché si observé ou pas.</p>
                </div>
                <div className="rounded-[8px] bg-white px-3 py-3 text-text">
                  <p className="font-semibold text-dark">Version échelle 1–5</p>
                  <p className="mt-1 leading-6">Cotation de <span className="text-red-500 font-semibold">Insuffisant (1)</span> à <span className="text-green-600 font-semibold">Excellent (5)</span>.</p>
                </div>
              </div>
              <p className="mt-3 text-xs italic text-text-light">
                La colonne «Observations» permet de noter des commentaires qualitatifs sur chaque élément observé.
              </p>
            </div>
          </section>

          {/* ══════════════════════════════════════════════
              AXE 11 — Obstacles de l'APP
          ══════════════════════════════════════════════ */}
          <section className="soft-card p-6 sm:p-8">
            <h2 className="text-xl font-extrabold text-dark">
              AXE 11 — Obstacles de l&apos;APP
            </h2>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {/* Institutionnels */}
              <div className="rounded-[12px] border border-orange-200 bg-orange-50 p-4 text-sm">
                <p className="font-bold text-orange-700">🏛️ 11.1 Obstacles institutionnels &amp; professionnels</p>
                <ul className="mt-3 list-disc space-y-1 pl-5 leading-6 text-text">
                  {[
                    "La surcharge des tâches confiées à l'enseignant.",
                    "L'accent mis sur le contenu et l'obsession de terminer le programme.",
                    "Manque d'ouverture aux expériences des collègues pour une interaction constructive.",
                    "Manque de suivi du travail de l'enseignant et d'encadrement de sa performance.",
                    "L'habitude dominante de séparer la théorie de la pratique.",
                    "La non-activation des mécanismes des conseils de classe.",
                  ].map((pt) => <li key={pt}>{pt}</li>)}
                </ul>
              </div>
              {/* Individuels */}
              <div className="rounded-[12px] border border-red-200 bg-red-50 p-4 text-sm">
                <p className="font-bold text-red-700">🧍 11.2 Obstacles individuels &amp; personnels</p>
                <ul className="mt-3 list-disc space-y-1 pl-5 leading-6 text-text">
                  {[
                    "Manque d'encadrement et de suivi.",
                    "Excès de confiance en soi ou arrogance.",
                    "Peur du jugement extérieur.",
                    "Timidité et manque d'assurance.",
                    "Refus d'accepter la critique.",
                    "Non-maîtrise du contenu de la leçon.",
                    "Difficulté à prendre du recul sur ses propres pratiques.",
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