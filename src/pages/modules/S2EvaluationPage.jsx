
import { modulePages } from '../../data/portfolioData';

const slug = 's2-evaluation';

export default function S2EvaluationPage() {
  const module = modulePages.find((item) => item.slug === slug);

  const getResourceLink = (resource) => {
    if (resource.href && resource.href !== '#') {
      return resource.href;
    }
    const query = `${module?.title ?? 'Évaluation'} ${resource.label} CRMEF`;
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
            CRMEF · Évaluation des Apprentissages · 2025-2026
          </div>
          <h1 className="mt-2 text-2xl font-extrabold text-dark sm:text-3xl">
            Évaluation des Apprentissages
          </h1>
          <p className="mt-3 text-sm leading-7 text-text">
            Fiche de Résumé Complet — Tous les axes du module · Tableaux synthétiques · Outils pratiques
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {[
              "Introduction à l'évaluation",
              "Typologies & Fonctions",
              "Instruments d'évaluation",
              "Techniques & Conditions",
              "APC & Situations-problèmes",
              "Analyse statistique",
              "Interprétation des résultats",
              "Cadre référentiel d'examen",
              "Rapport d'analyse des résultats",
              "Décision pédagogique",
              "Soutien & Remédiation",
              "Pédagogie différenciée",
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
              AXE 1 — Introduction à l'évaluation
          ══════════════════════════════════════════════ */}
          <section className="soft-card p-6 sm:p-8">
            <h2 className="text-xl font-extrabold text-dark">
              AXE 1 — Introduction à l&apos;Évaluation
            </h2>

            {/* 1.1 Définitions */}
            <div className="mt-5">
              <h3 className="text-base font-bold text-dark">1.1 Définitions</h3>
              <p className="mt-2 text-sm leading-6 text-text">
                Au sens étymologique, <strong>«évaluation»</strong> signifie déterminer la valeur de quelque chose (du latin <em>Valere</em>). C&apos;est une composante intégrante du processus d&apos;apprentissage : elle vise à <strong>soutenir l&apos;apprentissage</strong>, pas seulement à mesurer un résultat.
              </p>
              <div className="mt-4 space-y-3">
                {[
                  {
                    who: "De Keitele (1985)",
                    def: "Examiner le degré d'adéquation entre un ensemble d'informations et un ensemble de critères adéquats aux objectifs fixés, en vue de prendre une décision.",
                    color: "border-blue-200 bg-blue-50",
                    badge: "text-blue-700",
                  },
                  {
                    who: "Renald Legendre (1993)",
                    def: "Opération qui consiste à estimer, à apprécier, à porter un jugement de valeur... en vue d'une prise de décision.",
                    color: "border-green-200 bg-green-50",
                    badge: "text-green-700",
                  },
                  {
                    who: "Tyler (1950)",
                    def: "Le processus de l'évaluation consiste essentiellement à déterminer dans quelle mesure les objectifs sont en voie d'être atteints.",
                    color: "border-purple-200 bg-purple-50",
                    badge: "text-purple-700",
                  },
                ].map(({ who, def, color, badge }) => (
                  <div key={who} className={`rounded-[12px] border p-4 text-sm ${color}`}>
                    <p className={`font-bold ${badge}`}>📖 {who}</p>
                    <p className="mt-2 italic leading-6 text-text">&laquo;{def}&raquo;</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 1.2 Typologies */}
            <div className="mt-6">
              <h3 className="text-base font-bold text-dark">1.2 Typologies d&apos;évaluation</h3>
              <div className="mt-3 overflow-x-auto">
                <table className="w-full text-sm text-text">
                  <thead>
                    <tr className="border-b border-border text-left">
                      {["Type", "Moment", "Objectif principal", "Exemple"].map((h) => (
                        <th key={h} className="pb-2 pr-4 font-semibold text-dark last:pr-0">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {[
                      { t: "🔍 Diagnostique", m: "Début de séquence", o: "Identifier les prérequis et le profil", e: "Exercices basés sur les acquis précédents", color: "text-blue-600" },
                      { t: "📝 Formative", m: "Tout au long", o: "Réguler l'apprentissage, sans sanction", e: "Interrogation orale / écrite courte", color: "text-green-600" },
                      { t: "📊 Sommative", m: "Fin de séquence", o: "Bilan des acquis, note", e: "Devoir en classe, examen blanc", color: "text-orange-600" },
                      { t: "🎓 Certificative", m: "Fin de cycle", o: "Délivrer un diplôme ou certificat", e: "Examen national", color: "text-red-600" },
                    ].map(({ t, m, o, e, color }) => (
                      <tr key={t}>
                        <td className={`py-2 pr-4 font-bold whitespace-nowrap ${color}`}>{t}</td>
                        <td className="py-2 pr-4 italic text-text-light">{m}</td>
                        <td className="py-2 pr-4 leading-6">{o}</td>
                        <td className="py-2 leading-6 text-text-light">{e}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* 1.3 Fonctions */}
            <div className="mt-6">
              <h3 className="text-base font-bold text-dark">1.3 Fonctions de l&apos;évaluation</h3>
              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                {[
                  { f: "🧭 Orientation", d: "Guider l'apprenant vers des activités ou études adaptées à son profil.", color: "border-blue-200 bg-blue-50 text-blue-700" },
                  { f: "🔄 Régulation", d: "Exploiter les erreurs pour construire un plan de remédiation et ajuster l'enseignement.", color: "border-green-200 bg-green-50 text-green-700" },
                  { f: "✅ Validation", d: "Reconnaître les acquis en fin d'apprentissage et vérifier la maîtrise des compétences visées.", color: "border-orange-200 bg-orange-50 text-orange-700" },
                  { f: "🎓 Certification", d: "Délivrer un diplôme attestant des compétences à l'issue d'un cycle.", color: "border-purple-200 bg-purple-50 text-purple-700" },
                ].map(({ f, d, color }) => (
                  <div key={f} className={`rounded-[12px] border p-4 text-sm ${color}`}>
                    <p className="font-bold">{f}</p>
                    <p className="mt-2 leading-6 text-text">{d}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 1.4 Formes */}
            <div className="mt-6">
              <h3 className="text-base font-bold text-dark">1.4 Formes d&apos;évaluation</h3>
              <div className="mt-3 grid gap-3 sm:grid-cols-3">
                {[
                  { f: "🪞 Auto-évaluation", d: "L'élève apprécie lui-même ses démarches, sa progression, ses difficultés et ses stratégies." },
                  { f: "🤝 Évaluation mutuelle", d: "Deux ou plusieurs élèves s'engagent dans une évaluation réciproque de leurs progressions." },
                  { f: "⚖️ Co-évaluation", d: "L'auto-évaluation de l'élève est confrontée à l'évaluation de l'enseignant." },
                ].map(({ f, d }) => (
                  <div key={f} className="rounded-[12px] border border-border bg-bg p-4 text-sm">
                    <p className="font-bold text-dark">{f}</p>
                    <p className="mt-2 leading-6 text-text">{d}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 1.5 Numérique */}
            <div className="mt-6">
              <h3 className="text-base font-bold text-dark">1.5 Évaluation à l&apos;ère du numérique</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {[
                  { tool: "🎮 Kahoot / Quizz / Wooclap", use: "Quiz interactifs et ludiques" },
                  { tool: "📋 Google Forms / Microsoft Forms", use: "Création rapide de tests" },
                  { tool: "🗂️ Portfolios numériques", use: "Suivi de la progression des apprenants" },
                  { tool: "📡 Flickers", use: "Évaluation sans appareils pour les élèves" },
                  { tool: "🖥️ LMS (Moodle, etc.)", use: "Gestion et correction automatisée des évaluations" },
                ].map(({ tool, use }) => (
                  <div key={tool} className="rounded-[10px] border border-border bg-bg px-3 py-2 text-sm text-text">
                    <span className="font-semibold text-dark">{tool} : </span>
                    <span className="italic text-text-light">{use}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ══════════════════════════════════════════════
              AXE 2 — Élaboration des instruments
          ══════════════════════════════════════════════ */}
          <section className="soft-card p-6 sm:p-8">
            <h2 className="text-xl font-extrabold text-dark">
              AXE 2 — Élaboration des Instruments d&apos;Évaluation
            </h2>

            {/* 2.1 Situation d'évaluation */}
            <div className="mt-5 rounded-[12px] border border-border bg-bg p-4 text-sm">
              <p className="font-bold text-dark">📌 2.1 Situation d&apos;évaluation</p>
              <p className="mt-2 leading-6 text-text">
                Une situation d&apos;évaluation désigne les <strong>moments clés et décisifs</strong> permettant d&apos;attester le niveau d&apos;acquisition d&apos;une compétence et d&apos;en déterminer le degré.
              </p>
              <p className="mt-2 text-xs italic text-text-light">
                Caractéristiques : compétences clairement définies, précision des activités et conditions, disponibilité des conditions objectives.
              </p>
              <div className="mt-3 overflow-x-auto">
                <table className="w-full text-sm text-text">
                  <thead>
                    <tr className="border-b border-border text-left">
                      {["Type de résultat", "Exemples d'activités"].map((h) => (
                        <th key={h} className="pb-2 pr-4 font-semibold text-dark last:pr-0">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {[
                      { t: "📚 Résultats cognitifs (Savoirs)", e: "Tests objectifs, tests rédactionnels, tests oraux." },
                      { t: "🛠️ Résultats procéduraux (Savoir-faire)", e: "Réaliser un schéma, proposer un graphique, produire un rapport." },
                      { t: "💬 Résultats affectifs (Savoir-être)", e: "Mesurer attitudes, convictions, comportements, réactions." },
                    ].map(({ t, e }) => (
                      <tr key={t}>
                        <td className="py-2 pr-4 font-bold text-primary-light whitespace-nowrap">{t}</td>
                        <td className="py-2 leading-6">{e}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* 2.2 Étapes d'élaboration */}
            <div className="mt-5">
              <h3 className="text-base font-bold text-dark">2.2 Étapes d&apos;élaboration d&apos;une situation d&apos;évaluation</h3>
              <div className="relative mt-3 pl-5">
                <span aria-hidden className="absolute left-[7px] top-2 h-[calc(100%-12px)] w-[2px] rounded-full bg-border" />
                {[
                  "Déterminer l'objectif : formatif ou sommatif.",
                  "Identifier le contenu : degré de la compétence à évaluer.",
                  "Préciser le moment de passation.",
                  "Choisir la forme des situations d'évaluation.",
                  "Déterminer le nombre et type de questions.",
                  "Formuler les questions et la grille de correction (critères, indicateurs).",
                ].map((step, i) => (
                  <div key={i} className="relative pb-2 last:pb-0">
                    <span aria-hidden className="absolute -left-[13px] top-[5px] h-3 w-3 rounded-full border-2 border-primary-light bg-white" />
                    <div className="rounded-[8px] border border-border bg-bg px-4 py-2 text-sm text-text">
                      <span className="font-bold text-dark">Étape {i + 1} : </span>{step}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 2.3 Épreuves pratiques */}
            <div className="mt-5">
              <h3 className="text-base font-bold text-dark">2.3 Épreuves pratiques et écrites en informatique</h3>
              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                {[
                  { e: "💻 Épreuve pratique", c: "Fonctionnement du code, choix des structures, lisibilité, gestion des cas limites.", color: "border-blue-200 bg-blue-50 text-blue-700" },
                  { e: "📝 Épreuve écrite", c: "Maîtrise des concepts, qualité du raisonnement, algorithme, justification.", color: "border-green-200 bg-green-50 text-green-700" },
                ].map(({ e, c, color }) => (
                  <div key={e} className={`rounded-[12px] border p-4 text-sm ${color}`}>
                    <p className="font-bold">{e}</p>
                    <p className="mt-2 leading-6 text-text">{c}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 2.4 Processus en 4 étapes */}
            <div className="mt-5">
              <h3 className="text-base font-bold text-dark">2.4 Processus de l&apos;évaluation (4 étapes)</h3>
              <div className="mt-3 flex flex-col gap-2 sm:flex-row">
                {[
                  { n: "1", name: "Élaboration", c: "Objectifs, compétences, tableau de spécification, nombre/type d'exercices, grille." },
                  { n: "2", name: "Collecte", c: "Critères, indicateurs, grilles, barème, correction." },
                  { n: "3", name: "Jugement", c: "Analyse, identification des difficultés, décision pédagogique ou administrative." },
                  { n: "4", name: "Communication", c: "Transmission aux élèves, direction, parents et suivi." },
                ].map(({ n, name, c }) => (
                  <div key={n} className="flex-1 rounded-[12px] border border-border bg-bg p-3 text-sm text-center">
                    <span className="flex h-8 w-8 mx-auto items-center justify-center rounded-full bg-primary-light/10 text-sm font-extrabold text-primary-light">
                      {n}
                    </span>
                    <p className="mt-2 font-bold text-dark">{name}</p>
                    <p className="mt-1 leading-5 text-text">{c}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ══════════════════════════════════════════════
              AXE 3 — Techniques et conditions
          ══════════════════════════════════════════════ */}
          <section className="soft-card p-6 sm:p-8">
            <h2 className="text-xl font-extrabold text-dark">
              AXE 3 — Techniques et Conditions des Outils d&apos;Évaluation
            </h2>

            {/* 3.1 Techniques */}
            <div className="mt-5">
              <h3 className="text-base font-bold text-dark">3.1 Techniques d&apos;élaboration de test</h3>
              <div className="mt-3 grid gap-2 sm:grid-cols-2">
                {[
                  { t: "❓ QCM / QCU", d: "Choix entre plusieurs propositions, une ou plusieurs correctes." },
                  { t: "✅ Vrai / Faux", d: "Jugement sur l'exactitude d'une affirmation." },
                  { t: "✏️ Texte lacunaire", d: "Compléter des mots ou phrases manquants." },
                  { t: "🔗 Association (Matching)", d: "Relier deux colonnes d'éléments." },
                  { t: "🔢 Ordonnancement", d: "Classer des éléments selon un ordre logique." },
                  { t: "💬 Question courte", d: "Réponse d'un mot, un nombre ou une phrase." },
                  { t: "📄 Développement", d: "Réponse rédigée à une consigne ouverte." },
                  { t: "🔍 Étude de cas", d: "Analyse d'une situation complexe avec réponse longue." },
                ].map(({ t, d }) => (
                  <div key={t} className="rounded-[10px] border border-border bg-bg px-3 py-2 text-sm text-text">
                    <span className="font-semibold text-dark">{t} : </span>{d}
                  </div>
                ))}
              </div>
            </div>

            {/* 3.2 Conditions de qualité */}
            <div className="mt-6">
              <h3 className="text-base font-bold text-dark">3.2 Conditions de qualité d&apos;un outil d&apos;évaluation</h3>
              <div className="mt-3 overflow-x-auto">
                <table className="w-full text-sm text-text">
                  <thead>
                    <tr className="border-b border-border text-left">
                      {["Condition", "Définition"].map((h) => (
                        <th key={h} className="pb-2 pr-4 font-semibold text-dark last:pr-0">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {[
                      { c: "✅ Validité (Crédibilité)", d: "L'outil mesure ce qu'il est censé mesurer." },
                      { c: "🔁 Fidélité (Constance)", d: "Résultats cohérents et reproductibles dans le temps." },
                      { c: "⚖️ Objectivité", d: "Résultats indépendants du jugement subjectif des correcteurs." },
                      { c: "🌐 Inclusivité", d: "Couvre plusieurs domaines et dimensions de la personnalité." },
                      { c: "🛠️ Faisabilité", d: "Simple à administrer, corriger et interpréter dans les conditions habituelles." },
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

            {/* 3.3 Cadre référentiel */}
            <div className="mt-6">
              <h3 className="text-base font-bold text-dark">3.3 Cadre référentiel d&apos;examen — résumé des points forts</h3>
              <p className="mt-2 text-sm leading-6 text-text">
                Le cadre référentiel d&apos;examen est un <strong>document officiel de pilotage</strong>. Il définit les règles,
                les objectifs et les critères d&apos;évaluation d&apos;une épreuve. Il sert à harmoniser la préparation,
                la conception des sujets, la correction et l&apos;interprétation des résultats.
              </p>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {[
                  {
                    k: "🎯 Objectifs de l'évaluation",
                    v: "Préciser ce que l'épreuve cherche à mesurer : connaissances, compétences et savoir-faire.",
                    color: "border-blue-200 bg-blue-50 text-blue-700",
                  },
                  {
                    k: "🏆 Compétences évaluées",
                    v: "Déterminer les compétences à mobiliser : analyser, résoudre, argumenter, coder, justifier.",
                    color: "border-green-200 bg-green-50 text-green-700",
                  },
                  {
                    k: "📚 Contenus évalués",
                    v: "Lister les notions, thèmes et parties du programme officiel réellement concernés par l'épreuve.",
                    color: "border-purple-200 bg-purple-50 text-purple-700",
                  },
                  {
                    k: "📋 Types d'épreuves",
                    v: "Clarifier la nature de l'examen : écrit, oral ou pratique, avec durée, supports et outils autorisés.",
                    color: "border-orange-200 bg-orange-50 text-orange-700",
                  },
                  {
                    k: "📊 Critères, barème et notation",
                    v: "Présenter les éléments attendus, la répartition des points et parfois une grille d'évaluation.",
                    color: "border-teal-200 bg-teal-50 text-teal-700",
                  },
                  {
                    k: "📈 Niveau d'exigence",
                    v: "Définir le niveau attendu pour réussir : connaissance, compréhension, application, analyse.",
                    color: "border-red-200 bg-red-50 text-red-700",
                  },
                ].map(({ k, v, color }) => (
                  <div key={k} className={`rounded-[12px] border p-4 text-sm ${color}`}>
                    <p className="font-bold">{k}</p>
                    <p className="mt-2 leading-6 text-text">{v}</p>
                  </div>
                ))}
              </div>

              <div className="mt-4 rounded-[12px] border border-primary-light/20 bg-primary-light/5 p-4 text-sm leading-7 text-text">
                <p className="font-bold text-dark">💡 Points forts à retenir</p>
                <ul className="mt-2 list-disc space-y-1 pl-5">
                  <li>Il garantit la cohérence entre programme, compétences, sujets et correction.</li>
                  <li>Il rend l&apos;évaluation plus transparente pour les élèves, enseignants et correcteurs.</li>
                  <li>Il facilite la construction d&apos;un barème juste, explicite et comparable.</li>
                  <li>Il aide l&apos;enseignant à préparer les apprenants selon les attentes réelles de l&apos;épreuve.</li>
                </ul>
              </div>

              <div className="mt-4 overflow-x-auto">
                <table className="w-full text-sm text-text">
                  <thead>
                    <tr className="border-b border-border text-left">
                      {["Élément du cadre", "Utilité pour l'enseignant", "Exemple en informatique"].map((h) => (
                        <th key={h} className="pb-2 pr-4 font-semibold text-dark last:pr-0">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {[
                      {
                        e: "Objectifs",
                        u: "Savoir exactement ce qu'il faut évaluer.",
                        x: "Évaluer la capacité à analyser un problème et proposer un algorithme.",
                      },
                      {
                        e: "Compétences",
                        u: "Construire des consignes alignées avec les apprentissages.",
                        x: "Écrire, corriger et commenter un code Python ou JavaScript.",
                      },
                      {
                        e: "Critères et barème",
                        u: "Corriger avec objectivité et réduire les écarts entre correcteurs.",
                        x: "Correction du code, lisibilité, nommage, justification et résultat obtenu.",
                      },
                      {
                        e: "Niveau d'exigence",
                        u: "Adapter la difficulté au niveau visé.",
                        x: "Passer de la restitution à l'application puis à l'analyse de code.",
                      },
                    ].map(({ e, u, x }) => (
                      <tr key={e}>
                        <td className="py-2 pr-4 font-bold text-primary-light whitespace-nowrap">{e}</td>
                        <td className="py-2 pr-4 leading-6">{u}</td>
                        <td className="py-2 leading-6 italic text-text-light">{x}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* ══════════════════════════════════════════════
              AXE 4 — Évaluation par compétences (APC)
          ══════════════════════════════════════════════ */}
          <section className="soft-card p-6 sm:p-8">
            <h2 className="text-xl font-extrabold text-dark">
              AXE 4 — Évaluation par Approche Compétences en Informatique
            </h2>

            {/* 4.1 Situation-problème */}
            <div className="mt-5 rounded-[12px] border border-border bg-bg p-4 text-sm">
              <p className="font-bold text-dark">📌 4.1 Situation-problème (APC)</p>
              <p className="mt-2 leading-6 text-text">
                Dans l&apos;approche par compétences (APC), l&apos;évaluation se fait via des <strong>situations-problèmes</strong> qui obligent l&apos;apprenant à mobiliser ses ressources de manière intégrée.
              </p>
              <div className="mt-3 rounded-[8px] border border-border bg-white px-3 py-3 italic text-text-light text-xs leading-6">
                <span className="not-italic font-bold text-dark">Zeitoun : </span>
                «Situation dans laquelle l&apos;apprenant est face à un problème qui le déconcerte et dont il doit chercher la solution par lui-même.»
              </div>
            </div>

            {/* Caractéristiques */}
            <div className="mt-5">
              <h3 className="text-base font-bold text-dark">Caractéristiques d&apos;une bonne situation-problème</h3>
              <div className="mt-3 grid gap-2 sm:grid-cols-3">
                {[
                  { c: "🌍 Réelle", d: "Ancrée dans le contexte socioculturel de l'apprenant." },
                  { c: "🎯 Adéquate", d: "Adaptée aux spécificités et niveaux des apprenants." },
                  { c: "🌐 Globale", d: "Développe les trois dimensions de la personnalité." },
                  { c: "💡 Claire", d: "Rédigée sans ambiguïté, une seule interprétation." },
                  { c: "✅ Faisable", d: "Réalisable dans les conditions et contraintes disponibles." },
                  { c: "🔥 Motivante", d: "Progressive : du simple au complexe." },
                ].map(({ c, d }) => (
                  <div key={c} className="rounded-[10px] border border-border bg-bg px-3 py-2 text-sm text-text">
                    <p className="font-bold text-dark">{c}</p>
                    <p className="mt-1 leading-5">{d}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 4.2 Résolution de problèmes */}
            <div className="mt-5 rounded-[12px] border border-border bg-bg p-4 text-sm">
              <p className="font-bold text-dark">💻 4.2 Résolution de problèmes en informatique</p>
              <p className="mt-2 text-text leading-6">L&apos;évaluation s&apos;effectue à travers des <strong>tâches authentiques</strong> :</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 leading-6 text-text">
                {[
                  "Analyser un problème et concevoir une solution algorithmique.",
                  "Écrire, corriger et commenter du code (Python, etc.).",
                  "Comprendre l'architecture d'un système ou d'un réseau.",
                  "Travailler sur des structures de données : listes, arbres, graphes.",
                  "Modéliser une base de données et formuler des requêtes SQL.",
                ].map((t) => <li key={t}>{t}</li>)}
              </ul>
            </div>
          </section>

          {/* ══════════════════════════════════════════════
              AXE 5 — Analyse et interprétation
          ══════════════════════════════════════════════ */}
          <section className="soft-card p-6 sm:p-8">
            <h2 className="text-xl font-extrabold text-dark">
              AXE 5 — Analyse et Interprétation des Résultats
            </h2>

            {/* 5.1 Critères et indicateurs */}
            <div className="mt-5">
              <h3 className="text-base font-bold text-dark">5.1 Critères et indicateurs</h3>
              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                {[
                  { c: "🎯 Critère", q: "Sur quoi j'évalue ?", d: "Élément général sur lequel l'apprenant est évalué.", color: "border-blue-200 bg-blue-50 text-blue-700" },
                  { c: "🔎 Indicateur", q: "Comment je sais que c'est atteint ?", d: "Élément précis et observable permettant de mesurer le niveau d'atteinte du critère.", color: "border-green-200 bg-green-50 text-green-700" },
                ].map(({ c, q, d, color }) => (
                  <div key={c} className={`rounded-[12px] border p-4 text-sm ${color}`}>
                    <p className="font-bold">{c}</p>
                    <p className="mt-1 text-xs italic">{q}</p>
                    <p className="mt-2 leading-6 text-text">{d}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 5.2 Grille critériée */}
            <div className="mt-6">
              <h3 className="text-base font-bold text-dark">5.2 Grille d&apos;évaluation critériée</h3>
              <div className="mt-3 overflow-x-auto">
                <table className="w-full text-sm text-text">
                  <thead>
                    <tr className="border-b border-border text-left">
                      {["Critère", "Indicateurs d'observation"].map((h) => (
                        <th key={h} className="pb-2 pr-4 font-semibold text-dark last:pr-0">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {[
                      { c: "Compréhension du sujet", i: "Reformule correctement la consigne, identifie les idées clés." },
                      { c: "Qualité de la présentation", i: "Structure logique, orthographe correcte, lisibilité." },
                      { c: "Application des connaissances", i: "Utilise les méthodes appropriées, choisit les bons outils." },
                      { c: "Esprit critique", i: "Justifie ses choix, remet en question les hypothèses." },
                    ].map(({ c, i }) => (
                      <tr key={c}>
                        <td className="py-2 pr-4 font-bold text-primary-light whitespace-nowrap">{c}</td>
                        <td className="py-2 leading-6">{i}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* 5.3 Outils statistiques */}
            <div className="mt-6">
              <h3 className="text-base font-bold text-dark">5.3 Interprétation des résultats — outils d&apos;analyse</h3>
              <p className="mt-2 text-sm leading-6 text-text">
                L&apos;interprétation des résultats permet de dépasser la simple note. Elle aide l&apos;enseignant à comprendre
                le niveau global de la classe, la dispersion des résultats, la qualité des exercices et les besoins de remédiation.
              </p>

              <div className="mt-4 overflow-x-auto">
                <table className="w-full text-sm text-text">
                  <thead>
                    <tr className="border-b border-border text-left">
                      {["Outil", "Rôle professionnel", "Lecture rapide"].map((h) => (
                        <th key={h} className="pb-2 pr-4 font-semibold text-dark last:pr-0">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {[
                      {
                        o: "📊 Moyenne",
                        r: "Somme des notes divisée par le nombre d'élèves.",
                        l: "Donne une vision générale du niveau de la classe, mais ne suffit pas seule.",
                      },
                      {
                        o: "📐 Étendue",
                        r: "Différence entre la note la plus élevée et la note la plus basse.",
                        l: "Étendue élevée = forte disparité entre élèves ; prévoir différenciation.",
                      },
                      {
                        o: "📏 Médiane",
                        r: "Valeur centrale qui partage les résultats en deux parties égales.",
                        l: "Utile quand quelques notes extrêmes faussent la moyenne.",
                      },
                      {
                        o: "📉 Variance",
                        r: "Moyenne des carrés des écarts entre chaque note et la moyenne.",
                        l: "Variance faible = résultats proches ; variance élevée = écarts importants.",
                      },
                      {
                        o: "σ Écart-type",
                        r: "Racine carrée de la variance.",
                        l: "Faible = classe homogène ; élevé = classe hétérogène.",
                      },
                      {
                        o: "✅ Coefficient de facilité",
                        r: "Nombre de réponses correctes ÷ nombre total d'apprenants.",
                        l: "Proche de 1 = exercice facile ; proche de 0 = exercice difficile ; idéal souvent entre 0,3 et 0,7.",
                      },
                      {
                        o: "❌ Coefficient de difficulté",
                        r: "Nombre de réponses incorrectes ÷ nombre total d'apprenants.",
                        l: "Proche de 1 = exercice très difficile ; proche de 0 = exercice très facile.",
                      },
                      {
                        o: "⚖️ Coefficient de discrimination",
                        r: "Mesure la capacité d'un item à distinguer les élèves forts des élèves faibles.",
                        l: "Proche de 1 = très bon ; proche de 0 = faible ; négatif = item mal conçu.",
                      },
                    ].map(({ o, r, l }) => (
                      <tr key={o}>
                        <td className="py-2 pr-4 font-bold text-primary-light whitespace-nowrap align-top">{o}</td>
                        <td className="py-2 pr-4 leading-6 align-top">{r}</td>
                        <td className="py-2 leading-6 italic text-text-light align-top">{l}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {[
                  {
                    title: "🟢 Résultats homogènes et moyenne satisfaisante",
                    action: "Consolider les acquis par des exercices d'approfondissement et maintenir le rythme.",
                    color: "border-green-200 bg-green-50 text-green-700",
                  },
                  {
                    title: "🟠 Moyenne faible mais dispersion faible",
                    action: "Reprendre la notion avec toute la classe, car la difficulté est probablement collective.",
                    color: "border-orange-200 bg-orange-50 text-orange-700",
                  },
                  {
                    title: "🔵 Moyenne correcte mais dispersion élevée",
                    action: "Mettre en place des groupes de besoins : soutien pour certains, enrichissement pour d'autres.",
                    color: "border-blue-200 bg-blue-50 text-blue-700",
                  },
                  {
                    title: "🔴 Item très facile, très difficile ou discriminant négatif",
                    action: "Réviser la formulation de la question, le niveau d'exigence ou l'alignement avec les objectifs.",
                    color: "border-red-200 bg-red-50 text-red-700",
                  },
                ].map(({ title, action, color }) => (
                  <div key={title} className={`rounded-[12px] border p-4 text-sm ${color}`}>
                    <p className="font-bold">{title}</p>
                    <p className="mt-2 leading-6 text-text">{action}</p>
                  </div>
                ))}
              </div>

              <div className="mt-4 rounded-[12px] border border-primary-light/20 bg-primary-light/5 p-4 text-sm leading-7 text-text">
                <p className="font-bold text-dark">💡 Points forts à retenir</p>
                <ul className="mt-2 list-disc space-y-1 pl-5">
                  <li>La moyenne mesure le niveau général, mais elle doit être complétée par la médiane et l&apos;écart-type.</li>
                  <li>L&apos;étendue, la variance et l&apos;écart-type permettent de repérer l&apos;hétérogénéité du groupe.</li>
                  <li>Les coefficients de facilité, difficulté et discrimination évaluent aussi la qualité des questions.</li>
                  <li>L&apos;objectif final est pédagogique : décider d&apos;une remédiation, d&apos;un soutien ou d&apos;un enrichissement.</li>
                </ul>
              </div>
            </div>

            {/* 5.4 Prise de décision */}
            <div className="mt-6">
              <h3 className="text-base font-bold text-dark">5.4 Interprétation et prise de décision</h3>
              <div className="mt-3 grid gap-3 sm:grid-cols-3">
                {[
                  { t: "🔍 Diagnostique", d: "Adapter les objectifs, proposer une remédiation préventive.", color: "border-blue-200 bg-blue-50 text-blue-700" },
                  { t: "📝 Formative", d: "Modifier la démarche d'enseignement, réguler les apprentissages.", color: "border-green-200 bg-green-50 text-green-700" },
                  { t: "📊 Sommative", d: "Classer, orienter, certifier, sélectionner.", color: "border-orange-200 bg-orange-50 text-orange-700" },
                ].map(({ t, d, color }) => (
                  <div key={t} className={`rounded-[12px] border p-4 text-sm ${color}`}>
                    <p className="font-bold">{t}</p>
                    <p className="mt-2 leading-6 text-text">{d}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>


          {/* ══════════════════════════════════════════════
              AXE 5 bis — Rapport d'analyse des résultats
          ══════════════════════════════════════════════ */}
          <section className="soft-card p-6 sm:p-8">
            <h2 className="text-xl font-extrabold text-dark">
              AXE 5 bis — Rapport d&apos;Analyse et d&apos;Interprétation des Résultats
            </h2>

            <div className="mt-5 rounded-[14px] border border-primary-light/20 bg-primary-light/5 p-5 text-sm leading-7 text-text">
              <p className="font-bold text-dark">📌 Finalité professionnelle</p>
              <p className="mt-2">
                Le rapport d&apos;analyse des résultats transforme les notes en informations pédagogiques exploitables.
                Il ne se limite pas au calcul de la moyenne : il croise les <strong>indices statistiques</strong>,
                les <strong>indices psychométriques</strong> et les observations de classe afin de décider d&apos;une
                remédiation collective, différenciée ou centrée sur la qualité des items.
              </p>
            </div>

            {/* Synthèse du rapport */}
            <div className="mt-6">
              <h3 className="text-base font-bold text-dark">5 bis.1 Structure synthétique du rapport</h3>
              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                {[
                  {
                    title: "📊 Indices statistiques descriptifs",
                    desc: "Décrire le niveau global et la dispersion de la classe : moyenne, médiane, maximum, minimum, étendue, variance et écart-type.",
                    color: "border-blue-200 bg-blue-50 text-blue-700",
                  },
                  {
                    title: "🧪 Indices psychométriques",
                    desc: "Étudier la qualité des items : facilité, difficulté et discrimination pour savoir si une question est pertinente, trop facile, trop difficile ou ambiguë.",
                    color: "border-green-200 bg-green-50 text-green-700",
                  },
                  {
                    title: "🔁 Interprétation croisée",
                    desc: "Croiser les indicateurs pour distinguer une difficulté collective, une hétérogénéité de classe ou un problème de formulation d&apos;item.",
                    color: "border-purple-200 bg-purple-50 text-purple-700",
                  },
                  {
                    title: "🛠️ Stratégies de remédiation",
                    desc: "Traduire chaque signal statistique en action pédagogique : reprise collective, groupes de besoins, tutorat ou amélioration de l&apos;épreuve.",
                    color: "border-orange-200 bg-orange-50 text-orange-700",
                  },
                ].map(({ title, desc, color }) => (
                  <div key={title} className={`rounded-[12px] border p-4 text-sm ${color}`}>
                    <p className="font-bold">{title}</p>
                    <p className="mt-2 leading-6 text-text">{desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Indices statistiques */}
            <div className="mt-6">
              <h3 className="text-base font-bold text-dark">5 bis.2 Indices statistiques : lecture pédagogique</h3>
              <div className="mt-3 overflow-x-auto">
                <table className="w-full text-sm text-text">
                  <thead>
                    <tr className="border-b border-border text-left">
                      {["Indicateur", "Ce qu'il mesure", "Interprétation pédagogique"].map((h) => (
                        <th key={h} className="pb-2 pr-4 font-semibold text-dark last:pr-0">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {[
                      {
                        i: "Moyenne",
                        m: "Niveau général de la classe.",
                        p: "Utile pour un premier diagnostic, mais insuffisante sans la médiane et la dispersion.",
                      },
                      {
                        i: "Médiane",
                        m: "Valeur centrale après classement des notes.",
                        p: "Si elle est nettement inférieure à la moyenne, quelques bonnes notes peuvent masquer un groupe important en difficulté.",
                      },
                      {
                        i: "Maximum / Minimum",
                        m: "Résultats extrêmes.",
                        p: "Maximum élevé = présence d&apos;élèves maîtrisant bien ; minimum très faible = remédiation urgente pour certains élèves.",
                      },
                      {
                        i: "Étendue",
                        m: "Écart entre la note maximale et la note minimale.",
                        p: "Étendue élevée = classe très hétérogène ; prévoir des groupes de besoin.",
                      },
                      {
                        i: "Variance",
                        m: "Dispersion autour de la moyenne.",
                        p: "Variance faible = notes proches ; variance élevée = écarts importants entre les élèves.",
                      },
                      {
                        i: "Écart-type",
                        m: "Racine carrée de la variance.",
                        p: "Supérieur à 3 ou 4 points sur 20 : hétérogénéité significative et différenciation nécessaire.",
                      },
                    ].map(({ i, m, p }) => (
                      <tr key={i}>
                        <td className="py-2 pr-4 font-bold text-primary-light whitespace-nowrap align-top">{i}</td>
                        <td className="py-2 pr-4 leading-6 align-top">{m}</td>
                        <td className="py-2 leading-6 italic text-text-light align-top">{p}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Indices psychométriques */}
            <div className="mt-6">
              <h3 className="text-base font-bold text-dark">5 bis.3 Indices psychométriques : qualité des items</h3>
              <div className="mt-3 grid gap-3 sm:grid-cols-3">
                {[
                  {
                    title: "✅ Coefficient de facilité",
                    formula: "F = réponses correctes / total des élèves",
                    interp: "F proche de 1 : item très facile ; F proche de 0 : item très difficile. Zone intéressante : 0,3 à 0,7.",
                    color: "border-green-200 bg-green-50 text-green-700",
                  },
                  {
                    title: "❌ Coefficient de difficulté",
                    formula: "D = réponses incorrectes / total des élèves",
                    interp: "D proche de 1 : item difficile ; D proche de 0 : item facile. Il complète la lecture du coefficient de facilité.",
                    color: "border-orange-200 bg-orange-50 text-orange-700",
                  },
                  {
                    title: "⚖️ Coefficient de discrimination",
                    formula: "ID = (Rs - Ri) / N",
                    interp: "Il indique si l&apos;item distingue les élèves performants des élèves en difficulté. Un ID négatif signale un item à supprimer ou reconstruire.",
                    color: "border-purple-200 bg-purple-50 text-purple-700",
                  },
                ].map(({ title, formula, interp, color }) => (
                  <div key={title} className={`rounded-[12px] border p-4 text-sm ${color}`}>
                    <p className="font-bold">{title}</p>
                    <p className="mt-2 rounded-[8px] bg-white px-3 py-2 font-mono text-xs text-dark">{formula}</p>
                    <p className="mt-2 leading-6 text-text">{interp}</p>
                  </div>
                ))}
              </div>

              <div className="mt-4 overflow-x-auto">
                <table className="w-full text-sm text-text">
                  <thead>
                    <tr className="border-b border-border text-left">
                      {["Indice de discrimination", "Interprétation", "Décision"].map((h) => (
                        <th key={h} className="pb-2 pr-4 font-semibold text-dark last:pr-0">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {[
                      { v: "0,40 et plus", i: "Excellent pouvoir discriminant", d: "Conserver l'item" },
                      { v: "0,30 à 0,39", i: "Bon pouvoir discriminant", d: "Conserver avec amélioration légère possible" },
                      { v: "0,20 à 0,29", i: "Discrimination acceptable", d: "Révision possible" },
                      { v: "0,10 à 0,19", i: "Faible discrimination", d: "Révision fortement recommandée" },
                      { v: "Moins de 0,10", i: "Discrimination très faible", d: "À revoir ou supprimer" },
                      { v: "Négatif", i: "Les élèves faibles réussissent mieux que les forts", d: "Supprimer ou reconstruire l'item" },
                    ].map(({ v, i, d }) => (
                      <tr key={v}>
                        <td className="py-2 pr-4 font-bold text-primary-light whitespace-nowrap">{v}</td>
                        <td className="py-2 pr-4 leading-6">{i}</td>
                        <td className="py-2 leading-6 italic text-text-light">{d}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Grille d'interprétation croisée */}
            <div className="mt-6">
              <h3 className="text-base font-bold text-dark">5 bis.4 Grille d&apos;interprétation croisée</h3>
              <div className="mt-3 overflow-x-auto">
                <table className="w-full text-sm text-text">
                  <thead>
                    <tr className="border-b border-border text-left">
                      {["Situation observée", "Cause probable", "Signal pédagogique"].map((h) => (
                        <th key={h} className="pb-2 pr-4 font-semibold text-dark last:pr-0">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {[
                      {
                        s: "Moyenne faible + écart-type faible",
                        c: "Difficulté collective sur les apprentissages.",
                        a: "Remédiation générale nécessaire.",
                      },
                      {
                        s: "Moyenne faible + écart-type élevé",
                        c: "Groupe hétérogène et lacunes inégales.",
                        a: "Différenciation pédagogique.",
                      },
                      {
                        s: "Médiane très inférieure à la moyenne",
                        c: "Présence d&apos;élèves très en difficulté.",
                        a: "Soutien ciblé pour le groupe inférieur.",
                      },
                      {
                        s: "Coefficient de facilité inférieur à 0,3 sur plusieurs items",
                        c: "Items trop difficiles ou enseignement insuffisant.",
                        a: "Réviser les items et renforcer les apprentissages.",
                      },
                      {
                        s: "Coefficient de facilité supérieur à 0,7 sur la majorité des items",
                        c: "Items trop faciles.",
                        a: "Revoir le niveau d&apos;exigence de l&apos;épreuve.",
                      },
                      {
                        s: "Discrimination faible ou négative",
                        c: "Item ambigu, mal formulé, hors objectif ou trompeur.",
                        a: "Réviser, supprimer ou reconstruire l&apos;item.",
                      },
                    ].map(({ s, c, a }) => (
                      <tr key={s}>
                        <td className="py-2 pr-4 font-bold text-dark align-top">{s}</td>
                        <td className="py-2 pr-4 leading-6 align-top">{c}</td>
                        <td className="py-2 leading-6 text-primary-light font-semibold align-top">{a}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Stratégies de remédiation */}
            <div className="mt-6">
              <h3 className="text-base font-bold text-dark">5 bis.5 Stratégies de remédiation issues du rapport</h3>
              <div className="mt-3 space-y-3">
                {[
                  {
                    title: "🔁 Remédiation collective",
                    desc: "À utiliser quand la moyenne est basse et la dispersion faible. Reprendre les notions, réexpliquer avec supports variés et proposer des exercices gradués.",
                    color: "border-blue-200 bg-blue-50 text-blue-700",
                  },
                  {
                    title: "🎯 Remédiation différenciée",
                    desc: "À utiliser quand la classe est hétérogène. Créer des groupes de besoins : soutien ciblé, consolidation et approfondissement.",
                    color: "border-green-200 bg-green-50 text-green-700",
                  },
                  {
                    title: "🧩 Remédiation sur les items",
                    desc: "À utiliser quand les questions sont trop faciles, trop difficiles ou peu discriminantes. Corriger la formulation, les distracteurs et l&apos;alignement avec les objectifs.",
                    color: "border-orange-200 bg-orange-50 text-orange-700",
                  },
                ].map(({ title, desc, color }) => (
                  <div key={title} className={`rounded-[12px] border p-4 text-sm ${color}`}>
                    <p className="font-bold">{title}</p>
                    <p className="mt-2 leading-6 text-text">{desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Tableau de décision rapide */}
            <div className="mt-6">
              <h3 className="text-base font-bold text-dark">5 bis.6 Tableau de décision rapide</h3>
              <div className="mt-3 overflow-x-auto">
                <table className="w-full text-sm text-text">
                  <thead>
                    <tr className="border-b border-border text-left">
                      {["Indice observé", "Action pédagogique prioritaire"].map((h) => (
                        <th key={h} className="pb-2 pr-4 font-semibold text-dark last:pr-0">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {[
                      { i: "Moyenne < 10/20", a: "Remédiation sur les apprentissages ciblés." },
                      { i: "Écart-type > 4", a: "Différenciation pédagogique et groupes de besoins." },
                      { i: "F < 0,3 sur un item", a: "Réviser l&apos;item et renforcer l&apos;enseignement correspondant." },
                      { i: "F > 0,7 sur un item", a: "Revoir le niveau de difficulté de l&apos;item." },
                      { i: "ID < 0,20", a: "Revoir la formulation, les distracteurs et l&apos;objectif évalué." },
                      { i: "ID négatif", a: "Supprimer ou reconstruire l&apos;item." },
                    ].map(({ i, a }) => (
                      <tr key={i}>
                        <td className="py-2 pr-4 font-bold text-primary-light whitespace-nowrap">{i}</td>
                        <td className="py-2 leading-6">{a}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-4 rounded-[12px] border border-green-200 bg-green-50 p-4 text-sm leading-7 text-text">
                <p className="font-bold text-green-700">🎓 Principe directeur</p>
                <p className="mt-2">
                  L&apos;évaluation au service de l&apos;apprentissage signifie que chaque donnée chiffrée doit être
                  traduite en action pédagogique concrète et contextualisée. Un bon diagnostic commence par
                  une lecture rigoureuse des résultats, puis se prolonge par une remédiation adaptée.
                </p>
              </div>
            </div>
          </section>

          {/* ══════════════════════════════════════════════
              AXE 6 — Soutien et remédiation
          ══════════════════════════════════════════════ */}
          <section className="soft-card p-6 sm:p-8">
            <h2 className="text-xl font-extrabold text-dark">
              AXE 6 — Stratégies de Soutien et de Remédiation
            </h2>

            {/* 6.1 Concepts clés */}
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {[
                {
                  who: "🤝 Soutien pédagogique (Astolfi, 1996)",
                  def: "Ensemble d'aides mises en œuvre pour compenser les difficultés d'apprentissage des élèves, dans le but de favoriser leur réussite scolaire.",
                  color: "border-blue-200 bg-blue-50 text-blue-700",
                },
                {
                  who: "🔧 Remédiation (Éduscol)",
                  def: "Ensemble de démarches pédagogiques pour permettre aux élèves en difficulté de surmonter leurs obstacles et de reconstruire des compétences non acquises.",
                  color: "border-red-200 bg-red-50 text-red-700",
                },
              ].map(({ who, def, color }) => (
                <div key={who} className={`rounded-[12px] border p-4 text-sm ${color}`}>
                  <p className="font-bold">{who}</p>
                  <p className="mt-2 italic leading-6 text-text">&laquo;{def}&raquo;</p>
                </div>
              ))}
            </div>

            {/* 6.2 Types de soutien */}
            <div className="mt-5">
              <h3 className="text-base font-bold text-dark">6.2 Types de soutien</h3>
              <div className="mt-3 overflow-x-auto">
                <table className="w-full text-sm text-text">
                  <thead>
                    <tr className="border-b border-border text-left">
                      {["Critère de classification", "Types"].map((h) => (
                        <th key={h} className="pb-2 pr-4 font-semibold text-dark last:pr-0">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {[
                      { cr: "⏱️ Ordre chronologique", ty: "Préventif (avant) · De suivi (pendant) · Curatif (après)" },
                      { cr: "🧠 Domaine de personnalité", ty: "Cognitif/Méthodologique · Psychologique · Social" },
                      { cr: "👥 Nombre d'apprenants", ty: "Individuel · Collectif / En groupe" },
                      { cr: "🏫 Entité organisatrice", ty: "Intégré (enseignant) · Institutionnel · Externe" },
                    ].map(({ cr, ty }) => (
                      <tr key={cr}>
                        <td className="py-2 pr-4 font-bold text-primary-light whitespace-nowrap">{cr}</td>
                        <td className="py-2 leading-6">{ty}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* 6.3 Approches pédagogiques */}
            <div className="mt-6">
              <h3 className="text-base font-bold text-dark">6.3 Approches pédagogiques du soutien</h3>
              <div className="mt-3 space-y-3">
                {[
                  {
                    a: "🎨 Pédagogie différenciée",
                    author: "Louis Legrand, 1973",
                    p: "Diversifier contenus, méthodes et supports pour adapter l'apprentissage aux différences individuelles (physiologiques, cognitives, affectives, socioculturelles).",
                    color: "border-blue-200 bg-blue-50",
                    badge: "text-blue-700",
                  },
                  {
                    a: "❌ Pédagogie de l'erreur",
                    author: "Bachelard",
                    p: "L'erreur est un phénomène normal et positif, source d'apprentissage. La connaissance progresse à travers une série d'erreurs.",
                    color: "border-orange-200 bg-orange-50",
                    badge: "text-orange-700",
                  },
                  {
                    a: "🧠 Intelligences multiples",
                    author: "Howard Gardner, 1983",
                    p: "Chaque apprenant possède plusieurs formes d'intelligence : linguistique, logico-mathématique, spatiale, kinésique, musicale, interpersonnelle, intrapersonnelle, naturaliste.",
                    color: "border-purple-200 bg-purple-50",
                    badge: "text-purple-700",
                  },
                ].map(({ a, author, p, color, badge }) => (
                  <div key={a} className={`rounded-[12px] border p-4 text-sm ${color}`}>
                    <div className="flex items-start justify-between">
                      <span className={`rounded-full bg-white border border-border px-2 py-0.5 text-xs text-text-light`}>{author}</span>
                      <p className={`font-bold ${badge}`}>{a}</p>
                    </div>
                    <p className="mt-3 leading-6 text-text">{p}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 6.4 Procédures */}
            <div className="mt-6">
              <h3 className="text-base font-bold text-dark">6.4 Procédures de mise en place du soutien</h3>
              <div className="relative mt-3 pl-5">
                <span aria-hidden className="absolute left-[7px] top-2 h-[calc(100%-12px)] w-[2px] rounded-full bg-border" />
                {[
                  "Identification des difficultés et lacunes par l'évaluation diagnostique.",
                  "Classification des erreurs selon leur type, nature et fréquence.",
                  "Analyse des causes et constitution de groupes de besoins.",
                  "Élaboration d'un plan correctif ciblé et adapté.",
                  "Mise en œuvre des activités de remédiation.",
                  "Évaluation de l'efficacité du soutien et ajustement si nécessaire.",
                ].map((step, i) => (
                  <div key={i} className="relative pb-2 last:pb-0">
                    <span aria-hidden className="absolute -left-[13px] top-[5px] h-3 w-3 rounded-full border-2 border-primary-light bg-white" />
                    <div className="rounded-[8px] border border-border bg-bg px-4 py-2 text-sm text-text">
                      <span className="font-bold text-dark">Étape {i + 1} : </span>{step}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          

        </div>
      </div>
    </main>
  );
}