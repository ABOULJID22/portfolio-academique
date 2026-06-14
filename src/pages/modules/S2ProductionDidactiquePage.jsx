
import { modulePages } from '../../data/portfolioData';
import ModuleSimplePage from './ModuleSimplePage';

const slug = 's2-production-didactique';

export default function S2ProductionDidactiquePage() {
  const module = modulePages.find((item) => item.slug === slug);

  const getResourceLink = (resource) => {
    if (resource.href && resource.href !== '#') {
      return resource.href;
    }
    const query = `${module?.title ?? 'Production'} ${resource.label} CRMEF`;
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
            CRMEF · Atelier de Production Didactique · 2024-2025
          </div>
          <h1 className="mt-2 text-2xl font-extrabold text-dark sm:text-3xl">
            Production Didactique
          </h1>
          <p className="mt-3 text-sm leading-7 text-text">
            Fiche de synthèse détaillée — Module complet
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {[
              "Pyramide d'apprentissage",
              "Production didactique",
              "Ressource didactique",
              "Domaines & Axes",
              "Démarche 6 étapes",
              "Types de ressources",
              "Outils numériques",
              "Carte conceptuelle (Novak)",
              "Carte mentale (Buzan)",
              "Capsule vidéo",
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
              AXE 0 — Pyramide d'apprentissage
          ══════════════════════════════════════════════ */}
          <section className="soft-card p-6 sm:p-8">
            <h2 className="text-xl font-extrabold text-dark">
              AXE 0 — Pyramide d&apos;Apprentissage (Learning Pyramid)
            </h2>

            <p className="mt-3 text-sm leading-6 text-text">
              Le modèle de pyramide d&apos;apprentissage, également connu sous le nom <strong>«Cône d&apos;apprentissage»</strong>, suggère que certaines formes d&apos;apprentissage sont plus efficaces que d&apos;autres et que des méthodes d&apos;étude variées conduiront à un apprentissage plus profond et une rétention à plus long terme.
            </p>

            {/* Tableau pyramide */}
            <div className="mt-5 overflow-x-auto">
              <table className="w-full text-sm text-text">
                <thead>
                  <tr className="border-b border-border text-left">
                    {["Méthode", "Type", "Taux de rétention", "Niveau cognitif"].map((h) => (
                      <th key={h} className="pb-2 pr-4 font-semibold text-dark last:pr-0">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {[
                    { m: "Cours magistral / Conférence", t: "Passif", r: "5 %", n: "Définir, Lister", rowColor: "bg-red-50" },
                    { m: "Lecture", t: "Passif", r: "10 %", n: "Définir, Lister", rowColor: "bg-red-50/50" },
                    { m: "Audiovisuel", t: "Passif", r: "20 %", n: "Décrire, Démontrer", rowColor: "bg-orange-50" },
                    { m: "Démonstration", t: "Passif", r: "30 %", n: "Décrire, Démontrer", rowColor: "bg-orange-50/50" },
                    { m: "Discussion / Travail de groupe", t: "Actif", r: "50 %", n: "Appliquer, Expliquer", rowColor: "bg-yellow-50" },
                    { m: "Mise en pratique", t: "Actif", r: "75 %", n: "Analyser, Évaluer", rowColor: "bg-green-50" },
                    { m: "Enseigner aux autres / Application immédiate", t: "Actif", r: "90 %", n: "Créer, Évaluer", rowColor: "bg-green-100" },
                  ].map(({ m, t, r, n, rowColor }) => (
                    <tr key={m} className={rowColor}>
                      <td className="py-2 pr-4 font-medium text-dark">{m}</td>
                      <td className="py-2 pr-4">
                        <span className={`rounded-full px-2 py-0.5 text-xs font-semibold ${t === "Actif" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-600"}`}>
                          {t}
                        </span>
                      </td>
                      <td className="py-2 pr-4 font-extrabold text-primary-light">{r}</td>
                      <td className="py-2 italic text-text-light">{n}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Passif vs Actif */}
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <div className="rounded-[12px] border border-red-200 bg-red-50 p-4 text-sm">
                <p className="font-bold text-red-700">🔇 Enseignement PASSIF</p>
                <p className="mt-2 text-text leading-6">Écouter, Lire, Regarder, Démontrer.</p>
                <p className="mt-1 font-semibold text-red-600">Rétention faible : 5–30 %</p>
              </div>
              <div className="rounded-[12px] border border-green-200 bg-green-50 p-4 text-sm">
                <p className="font-bold text-green-700">⚡ Enseignement ACTIF</p>
                <p className="mt-2 text-text leading-6">Discussions de groupe, la pratique, l&apos;enseignement aux autres.</p>
                <p className="mt-1 font-semibold text-green-600">Rétention élevée : 50–90 %</p>
              </div>
            </div>
            <p className="mt-3 rounded-[10px] bg-bg border border-border px-4 py-2 text-xs text-text">
              💡 <span className="font-semibold text-dark">Plus l&apos;apprenant est actif et impliqué, plus sa rétention est élevée.</span> La production didactique vise justement à favoriser l&apos;apprentissage actif.
            </p>
          </section>

          {/* ══════════════════════════════════════════════
              AXE 1 — Définition de la production didactique
          ══════════════════════════════════════════════ */}
          <section className="soft-card p-6 sm:p-8">
            <h2 className="text-xl font-extrabold text-dark">
              AXE 1 — Définition de la Production Didactique
            </h2>

            <div className="mt-5 rounded-[12px] border border-border bg-bg p-4 text-sm leading-7 text-text">
              <p>
                La production didactique désigne le <strong>processus de production des outils, supports, et ressources didactiques</strong> par un enseignant ou un inspecteur, dans le but de faciliter l&apos;apprentissage d&apos;une discipline selon les objectifs pédagogiques.
              </p>
            </div>

            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              {[
                { icon: "📄", t: "Conception de supports", d: "Documents, exercices, vidéos, fiches pédagogiques..." },
                { icon: "🎯", t: "Stratégies pédagogiques", d: "Mise en œuvre de stratégies adaptées aux besoins des apprenants." },
                { icon: "💻", t: "Numérisation", d: "Numérisation de l'ensemble des ressources didactiques dans le processus enseignement-apprentissage." },
              ].map(({ icon, t, d }) => (
                <div key={t} className="rounded-[12px] border border-border bg-bg p-4 text-sm text-center">
                  <p className="text-2xl">{icon}</p>
                  <p className="mt-2 font-bold text-dark">{t}</p>
                  <p className="mt-1 leading-6 text-text">{d}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 rounded-[10px] bg-bg border border-border px-4 py-2 text-xs text-text">
              💡 <span className="font-semibold text-dark">La production didactique est au cœur du métier d&apos;enseignant</span> : elle traduit les objectifs du programme en ressources concrètes et utilisables.
            </p>
          </section>

          {/* ══════════════════════════════════════════════
              AXE 2 — Définition d'une ressource didactique
          ══════════════════════════════════════════════ */}
          <section className="soft-card p-6 sm:p-8">
            <h2 className="text-xl font-extrabold text-dark">
              AXE 2 — Définition d&apos;une Ressource Didactique
            </h2>

            <p className="mt-4 text-sm leading-6 text-text">
              Une ressource didactique désigne <strong>tout type de support ou outil didactique</strong> utilisé pour favoriser l&apos;apprentissage. Les ressources didactiques sont créées dans un but précis : aider les élèves à comprendre une notion ou à développer une compétence.
            </p>

            <div className="mt-4 grid gap-2 sm:grid-cols-3">
              {[
                { r: "📄 Document imprimé", ex: "Cours, fiche, exercice." },
                { r: "🎬 Vidéo / Capsule audiovisuelle", ex: "Tutoriel animé, enregistrement de cours." },
                { r: "🖥️ Plateforme interactive / Didacticiel", ex: "Moodle, Khan Academy, Scratch." },
                { r: "📝 Exercice en ligne / Quiz numérique", ex: "Kahoot, Google Forms, Quizlet." },
                { r: "🎮 Logiciel éducatif / Jeu pédagogique", ex: "Code.org, Minecraft Education." },
                { r: "🗺️ Carte conceptuelle / Carte mentale", ex: "MindMeister, Coggle, XMind." },
              ].map(({ r, ex }) => (
                <div key={r} className="rounded-[10px] border border-border bg-bg px-3 py-3 text-sm text-text">
                  <p className="font-semibold text-dark">{r}</p>
                  <p className="mt-1 italic text-text-light text-xs">{ex}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ══════════════════════════════════════════════
              AXE 3 — Caractéristiques de la ressource
          ══════════════════════════════════════════════ */}
          <section className="soft-card p-6 sm:p-8">
            <h2 className="text-xl font-extrabold text-dark">
              AXE 3 — Caractéristiques de la Ressource Didactique
            </h2>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {[
                { c: "✅ Pertinence", d: "Une ressource doit être directement liée aux objectifs pédagogiques visés." },
                { c: "🔓 Accessibilité", d: "Elle doit être facile à utiliser pour l'apprenant et l'enseignant." },
                { c: "💡 Clarté", d: "Elle doit être présentée de manière compréhensible pour les apprenants." },
                { c: "🔄 Interactivité", d: "Certaines ressources peuvent permettre à l'apprenant d'interagir avec le contenu (quiz, simulations, applications)." },
              ].map(({ c, d }) => (
                <div key={c} className="rounded-[12px] border border-border bg-bg p-4 text-sm">
                  <p className="font-bold text-dark">{c}</p>
                  <p className="mt-2 leading-6 text-text">{d}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ══════════════════════════════════════════════
              AXE 4 — Domaines de la production didactique
          ══════════════════════════════════════════════ */}
          <section className="soft-card p-6 sm:p-8">
            <h2 className="text-xl font-extrabold text-dark">
              AXE 4 — Domaines de la Production Didactique
            </h2>

            <div className="mt-5 overflow-x-auto">
              <table className="w-full text-sm text-text">
                <thead>
                  <tr className="border-b border-border text-left">
                    {["Domaine", "Description"].map((h) => (
                      <th key={h} className="pb-2 pr-4 font-semibold text-dark last:pr-0">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {[
                    { d: "📅 Planification des situations d'apprentissage et d'évaluation", desc: "Élaborer les planifications annuelles, de séquences, de séances, et préparer les situations d'apprentissage et d'évaluation." },
                    { d: "📚 Gestion des apprentissages", desc: "Concevoir et gérer les ressources qui facilitent le déroulement des apprentissages en classe (fiches, activités, supports...)." },
                    { d: "📊 Évaluation des apprentissages", desc: "Produire les instruments d'évaluation : situations-problèmes, grilles, QCM, épreuves écrites et pratiques." },
                    { d: "🩹 Soutien et Remédiation", desc: "Élaborer des ressources spécifiques pour les élèves en difficulté : activités de remédiation, soutien différencié." },
                  ].map(({ d, desc }) => (
                    <tr key={d}>
                      <td className="py-2 pr-4 font-bold text-primary-light align-top">{d}</td>
                      <td className="py-2 leading-6">{desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* ══════════════════════════════════════════════
              AXE 5 — Les axes de la production didactique
          ══════════════════════════════════════════════ */}
          <section className="soft-card p-6 sm:p-8">
            <h2 className="text-xl font-extrabold text-dark">
              AXE 5 — Les Axes de la Production Didactique
            </h2>

            <div className="mt-5 space-y-3">
              {[
                {
                  a: "📝 Production de documents pédagogiques",
                  def: "Ensemble des documents écrits produits par l'enseignant pour préparer et conduire l'enseignement.",
                  ex: "Planification annuelle, planification de séquences, fiches de préparation, fiches techniques, activités (construction, exploratoire, évaluation, soutien), scénario pédagogique.",
                  color: "border-blue-200 bg-blue-50",
                  badge: "text-blue-700",
                },
                {
                  a: "🖼️ Réalisation de supports pédagogiques",
                  def: "Conception de supports visuels, numériques ou physiques qui accompagnent le cours.",
                  ex: "Présentations PowerPoint, affiches, tableaux de synthèse, schémas, infographies.",
                  color: "border-green-200 bg-green-50",
                  badge: "text-green-700",
                },
                {
                  a: "💻 Production de ressources numériques",
                  def: "Création de ressources exploitant les outils numériques pour enrichir l'apprentissage.",
                  ex: "Cartes conceptuelles, cartes mentales, capsules vidéo, livres numériques, e-portfolio.",
                  color: "border-purple-200 bg-purple-50",
                  badge: "text-purple-700",
                },
                {
                  a: "📖 Production de manuels scolaires",
                  def: "Élaboration de manuels complets selon le programme officiel.",
                  ex: "Manuel de cours structuré avec compétences, objectifs, sommaire, activités, définitions, exercices.",
                  color: "border-orange-200 bg-orange-50",
                  badge: "text-orange-700",
                },
              ].map(({ a, def, ex, color, badge }) => (
                <div key={a} className={`rounded-[12px] border p-4 text-sm ${color}`}>
                  <p className={`font-bold ${badge}`}>{a}</p>
                  <p className="mt-2 leading-6 text-text">{def}</p>
                  <p className="mt-2 rounded-[8px] bg-white px-3 py-2 italic text-text-light text-xs leading-5">
                    <span className="not-italic font-semibold text-dark">Exemples : </span>{ex}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* ══════════════════════════════════════════════
              AXE 6 — Intérêt et importance
          ══════════════════════════════════════════════ */}
          <section className="soft-card p-6 sm:p-8">
            <h2 className="text-xl font-extrabold text-dark">
              AXE 6 — Intérêt et Importance de la Production Didactique
            </h2>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {[
                {
                  icon: "🧠",
                  title: "a. Faciliter la compréhension et clarifier les concepts abstraits",
                  content: "Les ressources didactiques aident à simplifier des concepts complexes en les rendant accessibles et compréhensibles. Elles permettent de varier les approches pédagogiques (visuelles, auditives, kinesthésiques) pour s'adapter aux différents styles d'apprentissage.",
                  ex: "En informatique, des notions abstraites comme les algorithmes ou les structures de données nécessitent des supports visuels, des exemples de code, et des exercices pratiques.",
                },
                {
                  icon: "🔥",
                  title: "b. Motiver les apprenants",
                  content: "Les ressources didactiques interactives (simulations, quiz, plateformes de codage en ligne) incitent les apprenants à pratiquer activement, renforçant ainsi l'apprentissage par l'expérience.",
                  ex: "Elles offrent des retours immédiats, ce qui est essentiel dans un environnement d'apprentissage de l'informatique.",
                },
                {
                  icon: "⏱️",
                  title: "c. Optimisation du temps d'enseignement",
                  content: "Les ressources pédagogiques permettent d'automatiser certaines étapes d'apprentissage (auto-correction d'exercices, diffusion de vidéos explicatives).",
                  ex: "Cela permet à l'enseignant de se concentrer sur l'accompagnement personnalisé des apprenants pendant le cours.",
                },
                {
                  icon: "🎨",
                  title: "d. Adaptation aux divers styles d'apprentissage",
                  content: "Les ressources didactiques permettent de répondre aux besoins de divers profils d'apprenants : visuels, auditifs, kinesthésiques, ou encore ceux ayant des besoins éducatifs particuliers.",
                  ex: "Un tutoriel vidéo pour un apprenant visuel, un exercice pratique en ligne pour un apprenant kinesthésique.",
                },
              ].map(({ icon, title, content, ex }) => (
                <div key={title} className="rounded-[12px] border border-border bg-bg p-4 text-sm">
                  <p className="text-2xl">{icon}</p>
                  <p className="mt-2 font-bold text-dark">{title}</p>
                  <p className="mt-2 leading-6 text-text">{content}</p>
                  <p className="mt-2 rounded-[8px] bg-white px-3 py-2 italic text-text-light text-xs leading-5">
                    <span className="not-italic font-semibold text-dark">📌 Exemple : </span>{ex}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* ══════════════════════════════════════════════
              AXE 7 — Démarche de production (6 étapes)
          ══════════════════════════════════════════════ */}
          <section className="soft-card p-6 sm:p-8">
            <h2 className="text-xl font-extrabold text-dark">
              AXE 7 — Démarche de Production — 6 Étapes Clés
            </h2>

            <p className="mt-3 text-sm leading-6 text-text">
              La production de ressources didactiques suit une démarche structurée pour garantir leur qualité et leur efficacité.
            </p>

            <div className="mt-5 overflow-x-auto">
              <table className="w-full text-sm text-text">
                <thead>
                  <tr className="border-b border-border text-left">
                    {["Étape", "Nom", "Actions clés", "Questions guidantes"].map((h) => (
                      <th key={h} className="pb-2 pr-4 font-semibold text-dark last:pr-0">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {[
                    {
                      e: "1",
                      n: "Analyse des besoins",
                      a: "Identifier les objectifs pédagogiques / Déterminer les caractéristiques des apprenants (niveau, âge...) / Prendre en compte le contexte d'utilisation.",
                      q: "Que doivent savoir ou savoir faire les apprenants ? / Quels obstacles cette ressource va-t-elle aider à surmonter ?",
                    },
                    {
                      e: "2",
                      n: "Conception",
                      a: "Définir le format de la ressource (texte, vidéo, jeu...) / Structurer le contenu de manière logique et progressive / Intégrer des éléments visuels et interactifs.",
                      q: "Quel est le meilleur format pour atteindre les objectifs ? / Comment organiser le contenu progressivement ?",
                    },
                    {
                      e: "3",
                      n: "Production (Réalisation)",
                      a: "Créer la ressource en utilisant les outils appropriés (logiciels de montage, plateformes de création...) / Veiller à la qualité technique et ergonomique.",
                      q: "La ressource est-elle lisible et bien présentée ? / Les éléments techniques sont-ils de qualité ?",
                    },
                    {
                      e: "4",
                      n: "Évaluation et Validation",
                      a: "Tester la ressource auprès d'un échantillon d'apprenants / Recueillir des feedbacks / Apporter des ajustements.",
                      q: "La ressource atteint-elle ses objectifs ? / Quelles améliorations apporter ?",
                    },
                    {
                      e: "5",
                      n: "Diffusion",
                      a: "Mettre la ressource à disposition des utilisateurs (enseignants, élèves...) / Assurer un suivi pour évaluer son impact.",
                      q: "Comment diffuser efficacement la ressource ? / Quel est son taux d'utilisation ?",
                    },
                    {
                      e: "6",
                      n: "Évaluation et Amélioration",
                      a: "Analyser les résultats obtenus après diffusion / Identifier les points à améliorer pour les versions futures.",
                      q: "Les résultats d'apprentissage se sont-ils améliorés ? / Que faut-il modifier ?",
                    },
                  ].map(({ e, n, a, q }) => (
                    <tr key={e}>
                      <td className="py-2 pr-4 align-top">
                        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary-light/10 text-sm font-extrabold text-primary-light">
                          {e}
                        </span>
                      </td>
                      <td className="py-2 pr-4 font-bold text-dark align-top whitespace-nowrap">{n}</td>
                      <td className="py-2 pr-4 leading-6 align-top">{a}</td>
                      <td className="py-2 italic text-text-light leading-6 align-top">{q}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* ══════════════════════════════════════════════
              AXE 8 — Types de ressources (4 catégories)
          ══════════════════════════════════════════════ */}
          <section className="soft-card p-6 sm:p-8">
            <h2 className="text-xl font-extrabold text-dark">
              AXE 8 — Types de Ressources Didactiques — 4 Catégories
            </h2>

            <p className="mt-3 text-sm leading-6 text-text">
              Les ressources didactiques peuvent être classées en plusieurs catégories en fonction de leur forme et de leur fonction.
            </p>

            <div className="mt-5 space-y-3">
              {[
                {
                  cat: "📄 Ressources textuelles",
                  desc: "Utilisées pour transmettre des informations théoriques.",
                  ex: "Manuels scolaires, fiches pédagogiques, supports de cours écrits, articles.",
                  info: "Un cours sur les composants d'un ordinateur avec : Compétence, objectifs, sommaire, activités, définitions, exercices.",
                  color: "border-blue-200 bg-blue-50",
                  badge: "text-blue-700",
                },
                {
                  cat: "🎬 Ressources audiovisuelles",
                  desc: "Utiles pour les apprenants visuels et auditifs, rendent l'apprentissage plus dynamique.",
                  ex: "Vidéos, capsules, tutoriels animés.",
                  info: "Une vidéo explicative sur le schéma fonctionnel d'un ordinateur, montrant l'emplacement de chaque composant et expliquant son rôle.",
                  color: "border-red-200 bg-red-50",
                  badge: "text-red-700",
                },
                {
                  cat: "🎮 Ressources interactives",
                  desc: "Permettent aux apprenants de pratiquer activement et d'interagir avec le contenu.",
                  ex: "Simulations, plateformes de codage en ligne, quiz interactifs.",
                  info: "Une simulation en ligne pour tester des algorithmes sans configurer un environnement local. Une vidéo interactive, Quiz interactif.",
                  color: "border-green-200 bg-green-50",
                  badge: "text-green-700",
                },
                {
                  cat: "🖥️ Ressources matérielles",
                  desc: "Outils physiques utilisés dans l'apprentissage.",
                  ex: "Ordinateurs, tablettes, robots éducatifs, cartes de circuits imprimés.",
                  info: "Robots mBot ou Arduino pour enseigner la programmation aux enfants.",
                  color: "border-purple-200 bg-purple-50",
                  badge: "text-purple-700",
                },
              ].map(({ cat, desc, ex, info, color, badge }) => (
                <div key={cat} className={`rounded-[12px] border p-4 text-sm ${color}`}>
                  <p className={`font-bold ${badge}`}>{cat}</p>
                  <p className="mt-2 leading-6 text-text">{desc}</p>
                  <div className="mt-2 grid gap-2 sm:grid-cols-2">
                    <div className="rounded-[8px] bg-white px-3 py-2 text-text">
                      <span className="font-semibold text-dark">Exemples : </span>{ex}
                    </div>
                    <div className="rounded-[8px] bg-white px-3 py-2 italic text-text-light text-xs leading-5">
                      <span className="not-italic font-semibold text-dark">📌 En informatique : </span>{info}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ══════════════════════════════════════════════
              AXE 9 — Ressources numériques (5 outils)
          ══════════════════════════════════════════════ */}
          <section className="soft-card p-6 sm:p-8">
            <h2 className="text-xl font-extrabold text-dark">
              AXE 9 — Production de Ressources Numériques — 5 Outils
            </h2>

            <div className="mt-5 overflow-x-auto">
              <table className="w-full text-sm text-text">
                <thead>
                  <tr className="border-b border-border text-left">
                    {["Outil", "Définition", "Utilisation pédagogique"].map((h) => (
                      <th key={h} className="pb-2 pr-4 font-semibold text-dark last:pr-0">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {[
                    { o: "🗺️ Carte conceptuelle", d: "Schéma ou outil graphique donnant une représentation visuelle structurée d'un ensemble de concepts reliés par des relations sémantiques.", u: "Modélisation des relations entre concepts algorithmiques, structuration des savoirs disciplinaires." },
                    { o: "🌿 Carte mentale (heuristique)", d: "Schéma représentant visuellement et organisant des concepts et idées sous forme arborescente autour d'un concept central.", u: "Résumé de cours, brainstorming, organisation d'une séquence pédagogique." },
                    { o: "🎬 Capsule vidéo", d: "Vidéo courte (1 à 5 minutes), synthétique, pour questionner, expliquer ou transmettre des savoirs.", u: "Cours à distance, classe inversée, formation en ligne, introduction d'une notion." },
                    { o: "📚 Livres numériques (E-book)", d: "Manuels ou supports de cours sous format numérique, interactifs ou statiques.", u: "Ressource en ligne accessible aux élèves, enrichie de liens, images, exercices intégrés." },
                    { o: "🗂️ E-portfolio", d: "Collection numérique des travaux et productions d'un apprenant permettant de tracer son parcours.", u: "Suivi des compétences acquises, documentation des projets réalisés par les élèves." },
                  ].map(({ o, d, u }) => (
                    <tr key={o}>
                      <td className="py-2 pr-4 font-bold text-primary-light whitespace-nowrap align-top">{o}</td>
                      <td className="py-2 pr-4 leading-6 align-top">{d}</td>
                      <td className="py-2 leading-6 italic text-text-light align-top">{u}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* ══════════════════════════════════════════════
              AXE 10 — Carte conceptuelle (Novak)
          ══════════════════════════════════════════════ */}
          <section className="soft-card p-6 sm:p-8">
            <h2 className="text-xl font-extrabold text-dark">
              AXE 10 — Carte Conceptuelle — Définition et Modèle Novak
            </h2>

            {/* 10.1 Définition */}
            <div className="mt-5 rounded-[12px] border border-border bg-bg p-4 text-sm leading-7 text-text">
              <p className="font-bold text-dark">📌 10.1 Définition</p>
              <p className="mt-2">
                Une carte conceptuelle est un <strong>schéma ou outil graphique qui donne une représentation visuelle structurée</strong> d&apos;un ensemble de concepts reliés par des relations sémantiques.
              </p>
            </div>

            {/* Composants */}
            <div className="mt-4">
              <p className="text-sm font-bold text-dark">Composants d&apos;une carte conceptuelle :</p>
              <div className="mt-3 grid gap-2 sm:grid-cols-2">
                {[
                  { c: "🔵 Nœuds", d: "Concepts ou idées représentés sous forme de boîtes ou de cercles." },
                  { c: "→ Arcs", d: "Lignes ou flèches reliant les concepts entre eux." },
                  { c: "🏷️ Mots de liaison", d: "Étiquettes sur les arcs qui expliquent les liens entre les concepts." },
                  { c: "📐 Propositions", d: "Unités de signification = [concept 1] + [mot de liaison] + [concept 2]." },
                ].map(({ c, d }) => (
                  <div key={c} className="rounded-[10px] border border-border bg-bg px-3 py-2 text-sm text-text">
                    <span className="font-semibold text-dark">{c} : </span>{d}
                  </div>
                ))}
              </div>
              <p className="mt-3 rounded-[8px] border border-border bg-white px-3 py-2 text-xs italic text-text-light">
                📌 <span className="not-italic font-semibold text-dark">Exemple : </span>
                Variable —«est de type»— Entier ; Algorithme —«contient»— Variable
              </p>
            </div>

            {/* 10.2 Novak */}
            <div className="mt-5">
              <h3 className="text-base font-bold text-dark">10.2 La carte conceptuelle selon Joseph D. Novak</h3>
              <p className="mt-2 text-sm text-text leading-6">
                Novak a développé la carte conceptuelle dans les années 1970 à l&apos;Université Cornell, en s&apos;appuyant sur la <strong>théorie de l&apos;apprentissage significatif d&apos;Ausubel</strong>.
              </p>
              <div className="mt-3 overflow-x-auto">
                <table className="w-full text-sm text-text">
                  <thead>
                    <tr className="border-b border-border text-left">
                      {["Élément", "Rôle dans la carte Novak"].map((h) => (
                        <th key={h} className="pb-2 pr-4 font-semibold text-dark last:pr-0">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {[
                      { el: "Concept central", r: "Représenté en haut de la hiérarchie, c'est l'idée principale autour de laquelle s'organise la carte." },
                      { el: "Connaissances organisées", r: "La carte représente les connaissances organisées, nécessaires pour l'enseignement et l'apprentissage efficaces." },
                      { el: "Question centrale", r: "Guide la construction de la carte ; elle est dépendante du contexte." },
                      { el: "Liens croisés", r: "Connexions entre des concepts de différentes branches, montrant des relations transversales." },
                      { el: "Hiérarchie", r: "Les concepts sont structurés hiérarchiquement du plus général (haut) au plus spécifique (bas)." },
                    ].map(({ el, r }) => (
                      <tr key={el}>
                        <td className="py-2 pr-4 font-bold text-primary-light whitespace-nowrap">{el}</td>
                        <td className="py-2 leading-6">{r}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* ══════════════════════════════════════════════
              AXE 11 — Carte mentale
          ══════════════════════════════════════════════ */}
          <section className="soft-card p-6 sm:p-8">
            <h2 className="text-xl font-extrabold text-dark">
              AXE 11 — Carte Mentale (Heuristique / Cognitive)
            </h2>

            {/* 11.1 Définition */}
            <div className="mt-5 rounded-[12px] border border-border bg-bg p-4 text-sm leading-7 text-text">
              <p className="font-bold text-dark">📌 11.1 Définition</p>
              <p className="mt-2">
                Une carte heuristique, carte cognitive ou carte mentale est un <strong>schéma supposé refléter le fonctionnement de la pensée</strong>.
              </p>
              <p className="mt-2">
                Elle permet de représenter visuellement et organiser des concepts et idées sous <strong>forme arborescente</strong>, mettant en lumière les liens qui existent entre un concept ou une idée et ses composantes.
              </p>
            </div>

            {/* 11.2 Comparaison */}
            <div className="mt-5">
              <h3 className="text-base font-bold text-dark">11.2 Carte Conceptuelle vs Carte Mentale</h3>
              <div className="mt-3 overflow-x-auto">
                <table className="w-full text-sm text-text">
                  <thead>
                    <tr className="border-b border-border text-left">
                      {["Critère", "Carte Conceptuelle", "Carte Mentale"].map((h) => (
                        <th key={h} className="pb-2 pr-4 font-semibold text-dark last:pr-0">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {[
                      { cr: "Structure", cc: "Réseau hiérarchique avec liens croisés.", cm: "Arborescente (branches depuis centre)." },
                      { cr: "Liens", cc: "Avec mots de liaison explicites.", cm: "Sans mots de liaison obligatoires." },
                      { cr: "Orientation", cc: "Théorique et sémantique (Novak).", cm: "Cognitive et créative (Buzan)." },
                      { cr: "Usage", cc: "Organisation des savoirs disciplinaires.", cm: "Brainstorming, résumé, planification." },
                      { cr: "Niveau d'analyse", cc: "Profond et structuré.", cm: "Rapide et visuel." },
                    ].map(({ cr, cc, cm }) => (
                      <tr key={cr}>
                        <td className="py-2 pr-4 font-bold text-primary-light whitespace-nowrap">{cr}</td>
                        <td className="py-2 pr-4 leading-6">{cc}</td>
                        <td className="py-2 leading-6">{cm}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* ══════════════════════════════════════════════
              AXE 12 — Capsule vidéo
          ══════════════════════════════════════════════ */}
          <section className="soft-card p-6 sm:p-8">
            <h2 className="text-xl font-extrabold text-dark">
              AXE 12 — La Capsule Vidéo
            </h2>

            {/* 12.1 Définition */}
            <div className="mt-5 rounded-[12px] border border-border bg-bg p-4 text-sm leading-7 text-text">
              <p className="font-bold text-dark">📌 12.1 Définition</p>
              <p className="mt-2">
                Une capsule vidéo est une <strong>vidéo d&apos;une durée courte</strong>, d&apos;environ 1 à 5 minutes, synthétique, qui a pour objet de :
              </p>
              <ul className="mt-2 list-disc space-y-1 pl-5">
                {[
                  "Questionner les apprenants sur une notion.",
                  "Expliquer un concept ou une procédure.",
                  "Transmettre des savoirs de manière concise.",
                  "Alimenter un cours à distance ou une formation en ligne (classe inversée).",
                ].map((pt) => <li key={pt}>{pt}</li>)}
              </ul>
            </div>

            {/* 12.2 Caractéristiques */}
            <div className="mt-5">
              <h3 className="text-base font-bold text-dark">12.2 Caractéristiques d&apos;une bonne capsule vidéo</h3>
              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                {[
                  { c: "⏱️ Durée courte", d: "1 à 5 minutes maximum pour maintenir l'attention." },
                  { c: "🎯 Objectif unique", d: "Centrée sur une seule notion ou compétence." },
                  { c: "💡 Clarté", d: "Langage simple, illustrations et schémas visuels." },
                  { c: "🔁 Autonomie", d: "L'élève peut la visionner seul, à son rythme, et la revoir." },
                  { c: "📚 Intégration pédagogique", d: "S'inscrit dans une séquence didactique cohérente." },
                ].map(({ c, d }) => (
                  <div key={c} className="rounded-[10px] border border-border bg-bg px-3 py-2 text-sm text-text">
                    <span className="font-semibold text-dark">{c} : </span>{d}
                  </div>
                ))}
              </div>
            </div>

            {/* 12.3 Utilisations pédagogiques */}
            <div className="mt-5">
              <h3 className="text-base font-bold text-dark">12.3 Utilisations pédagogiques</h3>
              <div className="mt-3 space-y-2">
                {[
                  { u: "🔄 Classe inversée (flipped classroom)", d: "Les élèves regardent la capsule à la maison, la classe est consacrée aux exercices." },
                  { u: "📡 Remédiation à distance", d: "Support pour les élèves absents ou en difficulté." },
                  { u: "🚀 Introduction d'une notion", d: "Mise en contexte avant l'activité en classe." },
                  { u: "📊 Évaluation", d: "Capsule-problème soumise à l'analyse des élèves." },
                ].map(({ u, d }) => (
                  <div key={u} className="flex gap-2 rounded-[10px] border border-border bg-bg px-3 py-2 text-sm text-text">
                    <span className="shrink-0 font-semibold text-dark">{u} :</span>
                    <span>{d}</span>
                  </div>
                ))}
              </div>
              <div className="mt-3 rounded-[10px] bg-bg border border-border px-4 py-3 text-sm">
                <span className="font-semibold text-dark">📌 Exemple : </span>
                <span className="italic text-text-light">
                  Une capsule de 3 min expliquant les structures conditionnelles en Python (if/else), avec un exemple de code animé et un mini-quiz final.
                </span>
              </div>
            </div>
          </section>

         

        </div>
      </div>
    </main>
  );
}
