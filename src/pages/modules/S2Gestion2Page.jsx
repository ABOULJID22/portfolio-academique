
import { modulePages } from '../../data/portfolioData';
import ModuleSimplePage from './ModuleSimplePage';

const slug = 's2-gestion-2';

export default function S2Gestion2Page() {
  const module = modulePages.find((item) => item.slug === slug);

  const getResourceLink = (resource) => {
    if (resource.href && resource.href !== '#') {
      return resource.href;
    }
    const query = `${module?.title ?? 'Gestion'} ${resource.label} CRMEF`;
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
            CRMEF · Gestion (2) — Module Complet · 2024-2025
          </div>
          <h1 className="mt-2 text-2xl font-extrabold text-dark sm:text-3xl">
            Gestion de Classe
          </h1>
          <p className="mt-3 text-sm leading-7 text-text">
            Fiche de synthèse détaillée · <span className="font-semibold">Pr. ATOUBI El Mostafa</span>
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {[
              "Définition & Composantes",
              "Dynamique de groupe",
              "3 Pères fondateurs",
              "Styles de leadership",
              "Communication & Interactions",
              "Techniques d'animation",
              "Résolution de conflits",
              "TIC & Motivation",
              "Gestion de l'espace",
              "Gestion des imprévus",
              "Gestion du temps",
              "Activités professionnalisantes",
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
              AXE 1 — Gestion de classe
          ══════════════════════════════════════════════ */}
          <section className="soft-card p-6 sm:p-8">
            <h2 className="text-xl font-extrabold text-dark">
              AXE 1 — Gestion de Classe
            </h2>

            {/* 1.1 Définition */}
            <div className="mt-5 rounded-[12px] border border-border bg-bg p-4 text-sm leading-7 text-text">
              <p className="font-bold text-dark">📌 1.1 Notion et Définition</p>
              <p className="mt-2">
                La gestion de classe concerne <strong>l&apos;ensemble des interventions effectuées en classe par un enseignant</strong> à l&apos;égard de ses élèves pour favoriser l&apos;apprentissage. Ces interventions sont extrêmement diversifiées : pédagogiques, sociales, affectives, disciplinaires, organisationnelles...
              </p>
              <div className="mt-3 grid gap-2 sm:grid-cols-2">
                <div className="rounded-[10px] border border-green-200 bg-green-50 px-3 py-2 text-sm text-green-700">
                  <p className="font-semibold">→ Prévenir et gérer efficacement les écarts de conduite des élèves</p>
                </div>
                <div className="rounded-[10px] border border-blue-200 bg-blue-50 px-3 py-2 text-sm text-blue-700">
                  <p className="font-semibold">→ Établir et maintenir un environnement favorisant l&apos;enseignement et l&apos;apprentissage</p>
                </div>
              </div>
              <p className="mt-3 rounded-[8px] bg-white border border-border px-3 py-2 text-xs italic text-text-light">
                💡 <span className="not-italic font-semibold text-dark">Idée clé :</span> La gestion de classe ne se résume pas à &apos;avoir de la discipline&apos;. C&apos;est un processus continu qui nécessite planification, flexibilité, adaptabilité et réflexion constante.
              </p>
            </div>

            {/* 1.2 Composantes */}
            <div className="mt-6">
              <h3 className="text-base font-bold text-dark">1.2 Composantes de la gestion de classe</h3>
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
                      { c: "📋 Qualité de l'enseignement", d: "Planification et organisation des interventions pédagogiques en lien avec la motivation des élèves." },
                      { c: "⚙️ Fonctionnement de la classe", d: "Mise en place de règles et de procédures efficaces et leur maintien par des interventions appropriées." },
                      { c: "🤝 Interactions sociales", d: "Interactions verbales et non verbales entre enseignant et élèves, et entre les élèves eux-mêmes." },
                      { c: "🎯 Direction de la classe", d: "Capacité de percevoir ce qui se passe en classe, d'intervenir pour maintenir l'attention, gérer les transitions, réduire les interruptions." },
                      { c: "⏱️ Quantité de l'enseignement", d: "Maximiser le temps pendant lequel l'apprenant est réellement engagé dans une activité." },
                      { c: "🏫 Environnement favorable", d: "Aménager l'espace pour favoriser l'engagement des élèves, réduire les distractions, créer un cadre sécuritaire et attrayant." },
                      { c: "📞 Communication avec les parents", d: "Établir une communication ouverte et régulière avec les parents pour renforcer le partenariat école-famille." },
                      { c: "🔧 Gestion des comportements", d: "Stratégies de correction : avertissements verbaux, conséquences logiques, récompenses positives pour comportements adéquats." },
                      { c: "🎨 Différenciation pédagogique", d: "Adapter les méthodes d'enseignement, les activités et les évaluations aux besoins individuels des élèves." },
                    ].map(({ c, d }) => (
                      <tr key={c}>
                        <td className="py-2 pr-4 font-bold text-primary-light whitespace-nowrap align-top">{c}</td>
                        <td className="py-2 leading-6">{d}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* 1.3 Ce que l'on gère */}
            <div className="mt-6">
              <h3 className="text-base font-bold text-dark">1.3 Ce que l&apos;on gère en classe</h3>
              <div className="mt-3 grid gap-2 sm:grid-cols-3">
                {[
                  "🏛️ La gestion de l'espace de la classe",
                  "🖊️ La gestion de l'espace du tableau (écriture, organisation, présentation)",
                  "⏰ La gestion du temps d'enseignement et du temps d'apprentissage",
                  "📊 La gestion des hétérogénéités des niveaux",
                  "⚡ La gestion de l'imprévu : conflits, incidents...",
                  "❌ La gestion de l'erreur",
                  "📚 La gestion du contenu",
                  "🧘 La gestion du stress et des émotions",
                  "👥 Les ressources humaines (relations enseignant/apprenants et apprenants/apprenants)",
                ].map((g) => (
                  <div key={g} className="flex items-start gap-2 rounded-[10px] border border-border bg-bg px-3 py-2 text-sm text-text">
                    <span>{g}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ══════════════════════════════════════════════
              1.4 Théories de la dynamique du groupe
          ══════════════════════════════════════════════ */}
          <section className="soft-card p-6 sm:p-8">
            <h2 className="text-xl font-extrabold text-dark">
              1.4 Théories de la Dynamique du Groupe
            </h2>

            {/* Définition */}
            <div className="mt-5 rounded-[12px] border border-border bg-bg p-4 text-sm leading-7 text-text">
              <p className="font-bold text-dark">📌 Définition (Kurt Lewin)</p>
              <p className="mt-2">
                La dynamique de groupe est le <strong>processus de fonctionnement d&apos;un groupe</strong> dans lequel les membres s&apos;adaptent aux différentes situations en modifiant leur structure relationnelle afin de maintenir un équilibre. Elle désigne l&apos;ensemble des phénomènes, mécanismes et processus psychiques et sociologiques qui émergent dans les petits groupes sociaux <strong>(4 à 20 individus)</strong>.
              </p>
            </div>

            {/* 3 Pères fondateurs */}
            <div className="mt-5">
              <h3 className="text-base font-bold text-dark">1.4.2 Les 3 Pères fondateurs de la dynamique de groupe</h3>
              <div className="mt-3 space-y-3">
                {[
                  {
                    who: "Elton Mayo (1880-1949)",
                    period: "1927-1932",
                    contrib: "Étude à Hawthorne (Chicago) sur l'impact des conditions de travail. Tout changement — même négatif — améliore la productivité. Découverte du rôle du groupe comme facteur de motivation.",
                    concept: "Effet Hawthorne : la motivation sociale est aussi importante que la motivation économique.",
                    color: "border-blue-200 bg-blue-50",
                    badge: "text-blue-700",
                  },
                  {
                    who: "Jacob Moreno (1889-1974)",
                    period: "Années 1930",
                    contrib: "Met au point la sociométrie : méthode d'analyse des relations au sein d'un groupe. Un sociogramme visualise les affinités et antipathies entre membres.",
                    concept: "Sociométrie / Sociogramme : l'organisation d'un groupe dépend aussi de données affectives.",
                    color: "border-green-200 bg-green-50",
                    badge: "text-green-700",
                  },
                  {
                    who: "Kurt Lewin (1890-1947)",
                    period: "Années 1930-40",
                    contrib: "Fondateur de la psychologie sociale. Crée l'expression 'dynamique de groupe'. La dynamique est régie par un 'champ de forces' : rôles, communication, leadership, normes, valeurs, buts.",
                    concept: "Champ de forces / Expérience sur les styles de commandement (Lewin-Lippitt).",
                    color: "border-purple-200 bg-purple-50",
                    badge: "text-purple-700",
                  },
                ].map(({ who, period, contrib, concept, color, badge }) => (
                  <div key={who} className={`rounded-[12px] border p-4 text-sm ${color}`}>
                    <div className="flex items-start justify-between">
                      <span className="rounded-full bg-white border border-border px-2 py-0.5 text-xs text-text-light">{period}</span>
                      <p className={`font-bold text-base ${badge}`}>{who}</p>
                    </div>
                    <p className="mt-3 leading-6 text-text">{contrib}</p>
                    <div className="mt-2 rounded-[8px] bg-white px-3 py-2 text-xs text-text-light italic">
                      <span className="not-italic font-semibold text-dark">Concept clé : </span>{concept}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Types de groupes */}
            <div className="mt-6">
              <h3 className="text-base font-bold text-dark">1.4.3 Types de groupes</h3>
              <div className="mt-3 overflow-x-auto">
                <table className="w-full text-sm text-text">
                  <thead>
                    <tr className="border-b border-border text-left">
                      {["Type", "Caractéristiques"].map((h) => (
                        <th key={h} className="pb-2 pr-4 font-semibold text-dark last:pr-0">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {[
                      { t: "👥 La foule", c: "Individus réunis en grand nombre (centaines), sans but commun explicite. Ont la solitude en commun." },
                      { t: "🎯 La bande", c: "Individus réunis volontairement, à la recherche du semblable. Apporte sécurité et soutien affectif." },
                      { t: "⭐ Groupe primaire (restreint)", c: "4 à 20 individus. Relations personnelles entre tous les membres. But commun actif, interdépendance, rôles différenciés, langage propre." },
                      { t: "🌐 Groupe large", c: "25 à 50 personnes. Discussion autour d'un thème commun. Limité dans le temps." },
                      { t: "🏢 Groupe secondaire (organisation)", c: "Fonctionne selon des institutions. Relations formelles, indirectes, impersonnelles." },
                    ].map(({ t, c }) => (
                      <tr key={t}>
                        <td className="py-2 pr-4 font-bold text-primary-light whitespace-nowrap align-top">{t}</td>
                        <td className="py-2 leading-6">{c}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-3 rounded-[10px] bg-bg border border-border px-3 py-2 text-xs italic text-text-light">
                💡 <span className="not-italic font-semibold text-dark">Seul le groupe primaire (restreint)</span> constitue un &apos;groupe&apos; au sens fort, objet de la dynamique des groupes. Il faut au moins 3 individus pour un groupe, mais les phénomènes groupaux se manifestent pleinement à partir de 4.
              </p>
            </div>

            {/* Critères d'un groupe */}
            <div className="mt-6">
              <h3 className="text-base font-bold text-dark">1.4.4 Critères d&apos;un groupe (4 critères)</h3>
              <div className="mt-3 grid gap-2 sm:grid-cols-2">
                {[
                  { cr: "🗣️ Relations interpersonnelles", d: "Les individus communiquent personnellement avec tous les membres." },
                  { cr: "🎯 But commun", d: "L'intérêt de chacun se confond avec l'intérêt du groupe." },
                  { cr: "🔄 Influence réciproque", d: "Interdépendance entre les membres." },
                  { cr: "🏗️ Organisation", d: "Chaque membre a son rôle ou statut ; les valeurs et normes de groupe se créent." },
                ].map(({ cr, d }) => (
                  <div key={cr} className="rounded-[10px] border border-border bg-bg px-3 py-2 text-sm text-text">
                    <p className="font-bold text-dark">{cr}</p>
                    <p className="mt-1 leading-5">{d}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 7 Caractéristiques */}
            <div className="mt-6">
              <h3 className="text-base font-bold text-dark">1.4.5 — 7 Caractéristiques des groupes primaires</h3>
              <div className="mt-3 overflow-x-auto">
                <table className="w-full text-sm text-text">
                  <thead>
                    <tr className="border-b border-border text-left">
                      {["N°", "Caractéristique", "Description"].map((h) => (
                        <th key={h} className="pb-2 pr-4 font-semibold text-dark last:pr-0">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {[
                      { n: "1", c: "⚡ Interactions", d: "Chaque membre agit et réagit par rapport aux autres de façon directe, sans intermédiaire (inter-influence)." },
                      { n: "2", c: "📜 Émergence de normes", d: "Des règles de conduite naissent progressivement : le code des valeurs du groupe." },
                      { n: "3", c: "🎯 Buts collectifs communs", d: "La communauté de buts est le ciment du groupe." },
                      { n: "4", c: "💬 Émotions et sentiments collectifs", d: "Émotions partagées qui engagent à des actions et réactions collectives." },
                      { n: "5", c: "🌿 Structure informelle", d: "Répartition affective (sympathie/antipathie), influence, membres populaires/rejetés, sous-groupes informels." },
                      { n: "6", c: "🧠 Inconscient collectif", d: "L'histoire commune du groupe, son passé, influencent ses réactions sans que les membres en soient conscients." },
                      { n: "7", c: "⚖️ Équilibre interne", d: "Le groupe maintient un double équilibre : interne et avec l'environnement. Tout événement perturbateur pousse le groupe à reconstituer un nouvel équilibre." },
                    ].map(({ n, c, d }) => (
                      <tr key={n}>
                        <td className="py-2 pr-4 align-top">
                          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary-light/10 text-xs font-extrabold text-primary-light">{n}</span>
                        </td>
                        <td className="py-2 pr-4 font-bold text-dark whitespace-nowrap align-top">{c}</td>
                        <td className="py-2 leading-6">{d}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Styles de leadership */}
            <div className="mt-6">
              <h3 className="text-base font-bold text-dark">1.4.6 La notion de leader et styles de commandement</h3>
              <p className="mt-2 text-sm leading-6 text-text">
                Le leader est celui qui assure le commandement et la direction d&apos;un groupe. Il s&apos;agit d&apos;un rôle fondamental autour duquel le groupe se structure.
              </p>
              <div className="mt-3 space-y-3">
                {[
                  {
                    s: "👑 Autoritaire",
                    d: "Prend toutes les décisions. Se tient à l'écart des activités. Impose son autorité.",
                    e: "Apathie ou rébellion chez les membres. Forte dépendance. Aucune initiative quand le leader est absent.",
                    color: "border-red-200 bg-red-50",
                    badge: "text-red-700",
                    efColor: "text-red-600",
                  },
                  {
                    s: "🤝 Démocratique",
                    d: "Fait des propositions. Les décisions sont prises en commun avec le groupe. Membre actif du groupe.",
                    e: "Le plus fort taux de satisfaction et de performance. Groupe actif et efficace même en l'absence du leader.",
                    color: "border-green-200 bg-green-50",
                    badge: "text-green-700",
                    efColor: "text-green-600",
                  },
                  {
                    s: "🌊 Laissez-faire",
                    d: "Répond aux demandes mais laisse une totale liberté au groupe. Très permissif.",
                    e: "Les membres sont actifs mais improductifs. Performance la plus mauvaise.",
                    color: "border-orange-200 bg-orange-50",
                    badge: "text-orange-700",
                    efColor: "text-orange-600",
                  },
                ].map(({ s, d, e, color, badge, efColor }) => (
                  <div key={s} className={`rounded-[12px] border p-4 text-sm ${color}`}>
                    <p className={`font-bold ${badge}`}>{s}</p>
                    <p className="mt-2 leading-6 text-text">{d}</p>
                    <div className={`mt-2 rounded-[8px] bg-white px-3 py-2 text-xs font-medium ${efColor}`}>
                      <span className="text-dark font-semibold">Effets observés (Lewin-Lippitt) : </span>{e}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Avantages/Inconvénients */}
            <div className="mt-6">
              <h3 className="text-base font-bold text-dark">1.4.7 Avantages et inconvénients de la dynamique de groupe en classe</h3>
              <div className="mt-3 grid gap-4 sm:grid-cols-2">
                <div className="rounded-[12px] border border-green-200 bg-green-50 p-4 text-sm">
                  <p className="font-bold text-green-700">✅ Avantages</p>
                  <ul className="mt-2 list-disc space-y-1 pl-4 leading-6 text-text">
                    {[
                      "Favorise la participation active des élèves aux apprentissages.",
                      "Développe les compétences sociales : communication, coopération, résolution de conflits.",
                      "Stimule la réflexion critique et le questionnement des opinions.",
                      "Encourage la créativité et la recherche de solutions innovantes.",
                      "Valorise la diversité culturelle, sociale et ethnique.",
                    ].map((a) => <li key={a}>{a}</li>)}
                  </ul>
                </div>
                <div className="rounded-[12px] border border-red-200 bg-red-50 p-4 text-sm">
                  <p className="font-bold text-red-700">⚠️ Inconvénients</p>
                  <ul className="mt-2 list-disc space-y-1 pl-4 leading-6 text-text">
                    {[
                      "Certains élèves plus réservés peuvent être exclus de la dynamique.",
                      "Risque de conflits et tensions internes dans le groupe.",
                      "Différences de compétences qui créent des déséquilibres.",
                      "Nécessite plus de temps que l'apprentissage individuel.",
                      "Biais de groupe : les membres peuvent adopter des positions sans raisonnement indépendant.",
                    ].map((i) => <li key={i}>{i}</li>)}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* ══════════════════════════════════════════════
              1.5 Communication & Interactions
          ══════════════════════════════════════════════ */}
          <section className="soft-card p-6 sm:p-8">
            <h2 className="text-xl font-extrabold text-dark">
              1.5 Formes de Communication et des Interactions
            </h2>

            <div className="mt-5 overflow-x-auto">
              <table className="w-full text-sm text-text">
                <thead>
                  <tr className="border-b border-border text-left">
                    {["Type", "Description", "Exemples pratiques"].map((h) => (
                      <th key={h} className="pb-2 pr-4 font-semibold text-dark last:pr-0">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {[
                    { t: "🗣️ Communication verbale", d: "Transmission d'informations par le langage oral ou écrit.", e: "Cours magistral, questions-réponses, consignes écrites, explications." },
                    { t: "🙌 Communication non verbale", d: "Messages transmis par le corps, les gestes, les mimiques, les postures.", e: "Expression du visage, contact visuel, gestuelle, proximité spatiale, ton de la voix." },
                    { t: "➡️ Unidirectionnelle", d: "Flux d'information dans un seul sens (enseignant → élèves).", e: "Exposé, lecture de cours, explication." },
                    { t: "↔️ Bidirectionnelle", d: "Échange entre deux personnes ou entre enseignant et élève.", e: "Dialogue, entretien individuel, corrections orales." },
                    { t: "🌐 Multidirectionnelle", d: "Interactions entre plusieurs membres du groupe.", e: "Débat, discussion en groupe, travail collaboratif, brainstorming." },
                  ].map(({ t, d, e }) => (
                    <tr key={t}>
                      <td className="py-2 pr-4 font-bold text-primary-light whitespace-nowrap align-top">{t}</td>
                      <td className="py-2 pr-4 leading-6 align-top">{d}</td>
                      <td className="py-2 leading-6 italic text-text-light align-top">{e}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-5 rounded-[12px] border border-border bg-bg p-4 text-sm">
              <p className="font-bold text-dark">🔄 Interactions en classe</p>
              <div className="mt-3 grid gap-2 sm:grid-cols-3">
                {[
                  { i: "Enseignant → Élève(s)", d: "Transmission, questionnement, évaluation, feedback.", color: "border-blue-200 bg-blue-50 text-blue-700" },
                  { i: "Élève → Enseignant", d: "Réponses, questions, demandes d'aide.", color: "border-green-200 bg-green-50 text-green-700" },
                  { i: "Élève → Élève(s)", d: "Coopération, entraide, discussions, travail de groupe.", color: "border-purple-200 bg-purple-50 text-purple-700" },
                ].map(({ i, d, color }) => (
                  <div key={i} className={`rounded-[10px] border p-3 text-sm ${color}`}>
                    <p className="font-bold">{i}</p>
                    <p className="mt-1 leading-5 text-text">{d}</p>
                  </div>
                ))}
              </div>
              <p className="mt-3 text-xs italic text-text-light">
                💡 La qualité des interactions détermine en grande partie le <strong>climat de la classe</strong> et l&apos;efficacité des apprentissages.
              </p>
            </div>
          </section>

          {/* ══════════════════════════════════════════════
              1.6 Techniques d'animation
          ══════════════════════════════════════════════ */}
          <section className="soft-card p-6 sm:p-8">
            <h2 className="text-xl font-extrabold text-dark">
              1.6 Techniques d&apos;Animation de la Classe
            </h2>

            <div className="mt-5 space-y-3">
              {[
                {
                  t: "🏝️ Travail en groupe / Îlot",
                  d: "Élèves groupés en îlots de 3-5 pour travailler ensemble sur une tâche commune.",
                  app: "Projets de développement collaboratif, conception d'algorithmes en équipe.",
                  color: "border-blue-200 bg-blue-50", badge: "text-blue-700",
                },
                {
                  t: "💬 Discussion / Débat",
                  d: "Échange d'arguments sur un sujet donné, l'enseignant anime et guide.",
                  app: "Débat sur le choix d'une solution algorithmique, comparaison de langages de programmation.",
                  color: "border-green-200 bg-green-50", badge: "text-green-700",
                },
                {
                  t: "🧠 Brainstorming",
                  d: "Production libre d'idées sans jugement, puis tri et analyse collectif.",
                  app: "Recherche de solutions à un problème informatique, conception d'une interface.",
                  color: "border-purple-200 bg-purple-50", badge: "text-purple-700",
                },
                {
                  t: "👥 Apprentissage par les pairs (Pair learning)",
                  d: "Les élèves s'enseignent mutuellement, en binômes ou petits groupes.",
                  app: "Entraide sur la correction de code, vérification mutuelle d'algorithmes.",
                  color: "border-orange-200 bg-orange-50", badge: "text-orange-700",
                },
                {
                  t: "🎭 Jeu de rôle",
                  d: "Les élèves jouent des rôles définis pour simuler une situation.",
                  app: "Simuler le fonctionnement d'un réseau, jouer les rôles de client/serveur.",
                  color: "border-red-200 bg-red-50", badge: "text-red-700",
                },
                {
                  t: "❓ Questionnement socratique",
                  d: "Guidage par des questions successives pour amener l'élève à construire son savoir.",
                  app: "Questions guidantes lors de la conception d'un algorithme : 'Que se passe-t-il si... ?'",
                  color: "border-teal-200 bg-teal-50", badge: "text-teal-700",
                },
                {
                  t: "🏠 Classe inversée (Flipped classroom)",
                  d: "Les élèves découvrent le contenu à la maison (capsule vidéo), la classe est réservée aux exercices.",
                  app: "Vidéo sur les bases Python à la maison, exercices de programmation en classe.",
                  color: "border-indigo-200 bg-indigo-50", badge: "text-indigo-700",
                },
              ].map(({ t, d, app, color, badge }) => (
                <div key={t} className={`rounded-[12px] border p-4 text-sm ${color}`}>
                  <p className={`font-bold ${badge}`}>{t}</p>
                  <p className="mt-2 leading-6 text-text">{d}</p>
                  <div className="mt-2 rounded-[8px] bg-white px-3 py-2 text-xs italic text-text-light">
                    <span className="not-italic font-semibold text-dark">💻 En informatique : </span>{app}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ══════════════════════════════════════════════
              1.7 Résolution des conflits
          ══════════════════════════════════════════════ */}
          <section className="soft-card p-6 sm:p-8">
            <h2 className="text-xl font-extrabold text-dark">
              1.7 Résolution des Conflits et des Tensions
            </h2>

            {/* Sources */}
            <div className="mt-5">
              <h3 className="text-base font-bold text-dark">Sources et types de conflits en classe</h3>
              <div className="mt-3 grid gap-2 sm:grid-cols-2">
                {[
                  { s: "👥 Entre apprenants", d: "Disputes, rivalités, incompatibilités de caractère, travail de groupe difficile." },
                  { s: "👨‍🏫 Apprenant / Enseignant", d: "Refus d'autorité, sentiment d'injustice, malentendus." },
                  { s: "📚 Liés au contenu", d: "Difficultés d'apprentissage, frustration, sentiment d'incompétence." },
                  { s: "🌐 Liés au groupe", d: "Pression de conformité, rejet, exclusion, biais de groupe." },
                ].map(({ s, d }) => (
                  <div key={s} className="rounded-[10px] border border-border bg-bg px-3 py-2 text-sm text-text">
                    <p className="font-bold text-dark">{s}</p>
                    <p className="mt-1 leading-5">{d}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Stratégies */}
            <div className="mt-5">
              <h3 className="text-base font-bold text-dark">Stratégies de résolution</h3>
              <div className="mt-3 space-y-2">
                {[
                  { s: "🛡️ Prévention proactive", d: "Établir des règles claires, explicites et connues de tous dès le début de l'année.", a: "Afficher les règles de la salle informatique, impliquer les élèves dans leur rédaction.", color: "border-green-200 bg-green-50 text-green-700" },
                  { s: "👂 Écoute active", d: "Donner la parole à chaque partie, reformuler, faire preuve d'empathie avant d'intervenir.", a: "Entretien individuel avec l'élève en difficulté ou en conflit.", color: "border-blue-200 bg-blue-50 text-blue-700" },
                  { s: "🤝 Médiation", d: "Faire intervenir un tiers neutre (enseignant, autre élève désigné) pour faciliter la résolution.", a: "Désigner un médiateur dans un groupe en conflit lors d'un projet collaboratif.", color: "border-purple-200 bg-purple-50 text-purple-700" },
                  { s: "⚖️ Conséquences logiques", d: "Appliquer des conséquences en lien direct avec le comportement problématique.", a: "Un élève qui perturbe perd l'accès à l'ordinateur pour un temps limité.", color: "border-orange-200 bg-orange-50 text-orange-700" },
                  { s: "🌟 Renforcement positif", d: "Valoriser et récompenser les comportements adéquats pour les encourager.", a: "Féliciter publiquement un élève qui aide ses camarades ou respecte les règles.", color: "border-yellow-200 bg-yellow-50 text-yellow-700" },
                  { s: "🔍 Approche résolution de problèmes", d: "Impliquer les parties en conflit dans la recherche de solutions mutuellement acceptables.", a: "Réunion de groupe pour identifier le problème et proposer des solutions ensemble.", color: "border-teal-200 bg-teal-50 text-teal-700" },
                ].map(({ s, d, a, color }) => (
                  <div key={s} className={`rounded-[12px] border p-3 text-sm ${color}`}>
                    <p className="font-bold">{s}</p>
                    <p className="mt-1 leading-6 text-text">{d}</p>
                    <p className="mt-1 italic text-xs text-text-light">
                      <span className="not-italic font-semibold text-dark">Application : </span>{a}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ══════════════════════════════════════════════
              1.8 TIC et motivation
          ══════════════════════════════════════════════ */}
          <section className="soft-card p-6 sm:p-8">
            <h2 className="text-xl font-extrabold text-dark">
              1.8 TIC et Motivation en Enseignement-Apprentissage
            </h2>

            <div className="mt-5 rounded-[12px] border border-border bg-bg p-4 text-sm">
              <p className="font-bold text-dark">🎯 Rôle des TIC dans la motivation</p>
              <div className="mt-3 grid gap-2 sm:grid-cols-2">
                {[
                  "Rendre l'apprentissage plus interactif, vivant et stimulant.",
                  "Permettre une personnalisation de l'apprentissage (rythme, niveau, contenu).",
                  "Offrir un retour immédiat sur les productions des élèves (auto-correction, feedback instantané).",
                  "Favoriser l'apprentissage actif et l'engagement cognitif.",
                  "Réduire les obstacles psychologiques (anonymat, droit à l'erreur dans les simulations).",
                ].map((r) => (
                  <div key={r} className="flex items-start gap-2 rounded-[8px] bg-white border border-border px-3 py-2 text-text">
                    <span className="mt-0.5 shrink-0 text-primary-light">▸</span>
                    <span>{r}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-5 overflow-x-auto">
              <table className="w-full text-sm text-text">
                <thead>
                  <tr className="border-b border-border text-left">
                    {["Outil TIC", "Description", "Lien avec la motivation"].map((h) => (
                      <th key={h} className="pb-2 pr-4 font-semibold text-dark last:pr-0">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {[
                    { o: "💻 Plateformes de codage", d: "Scratch, Code.org, Replit, Trinket...", m: "Apprentissage actif, retour immédiat, progression par niveaux." },
                    { o: "🔬 Simulations interactives", d: "Cisco Packet Tracer, simulateurs d'algorithmes.", m: "Mise en situation réelle, exploration sans risque, apprentissage par l'expérimentation." },
                    { o: "🎮 Quiz et sondages en ligne", d: "Kahoot, Quizziz, Mentimeter, Wooclap.", m: "Gamification, compétition positive, feedback immédiat, plaisir d'apprendre." },
                    { o: "🎬 Capsules vidéo", d: "Vidéos courtes 1-5 min pour introduction, révision ou remédiation.", m: "Autonomie, rythme personnalisé, classe inversée." },
                    { o: "🌐 Environnements collaboratifs", d: "Google Classroom, Teams, Moodle, Padlets...", m: "Coopération, partage, sentiment d'appartenance au groupe." },
                  ].map(({ o, d, m }) => (
                    <tr key={o}>
                      <td className="py-2 pr-4 font-bold text-primary-light whitespace-nowrap align-top">{o}</td>
                      <td className="py-2 pr-4 leading-6 align-top italic text-text-light">{d}</td>
                      <td className="py-2 leading-6 align-top">{m}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* ══════════════════════════════════════════════
              AXE 2 — Organisation de la classe
          ══════════════════════════════════════════════ */}
          <section className="soft-card p-6 sm:p-8">
            <h2 className="text-xl font-extrabold text-dark">
              AXE 2 — Organisation de la Classe
            </h2>

            {/* 3 moments clés */}
            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              {[
                { m: "🏗️ ÉTABLIR", d: "Mettre en place des conditions propices (règles, procédures).", color: "border-blue-200 bg-blue-50 text-blue-700" },
                { m: "⚙️ MAINTENIR", d: "Assurer des conditions propices (rythme, transitions, routines).", color: "border-green-200 bg-green-50 text-green-700" },
                { m: "🔧 RÉTABLIR", d: "Identifier et résoudre les problématiques de gestion de classe.", color: "border-orange-200 bg-orange-50 text-orange-700" },
              ].map(({ m, d, color }) => (
                <div key={m} className={`rounded-[12px] border p-4 text-sm text-center ${color}`}>
                  <p className="font-extrabold text-lg">{m}</p>
                  <p className="mt-2 leading-6 text-text">{d}</p>
                </div>
              ))}
            </div>

            {/* 2.1 Gestion de l'espace */}
            <div className="mt-6">
              <h3 className="text-base font-bold text-dark">2.1 Gestion de l&apos;espace</h3>
              <div className="mt-3 overflow-x-auto">
                <table className="w-full text-sm text-text">
                  <thead>
                    <tr className="border-b border-border text-left">
                      {["Aspect", "Recommandations pratiques"].map((h) => (
                        <th key={h} className="pb-2 pr-4 font-semibold text-dark last:pr-0">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {[
                      { a: "📐 Disposition générale", r: "Maximiser l'espace disponible / Assurer suffisamment d'espace pour que les élèves se déplacent confortablement." },
                      { a: "🔲 Modèle en U (transmissif)", r: "Tables disposées en U, enseignant au centre / Favorise la vue sur le tableau et les échanges enseignant-élèves." },
                      { a: "🏝️ Modèle en îlot", r: "Tables groupées par 4-6 élèves face à face / Favorise le travail collaboratif et les échanges entre pairs." },
                      { a: "📏 Modèle traditionnel (rang)", r: "Tables en rangées face au tableau / Adapté aux cours magistraux et évaluations." },
                      { a: "🖥️ Visibilité des écrans/projecteurs", r: "Tous les élèves doivent avoir une bonne visibilité des écrans et projecteurs utilisés." },
                      { a: "🚶 Circulation", r: "Assurer des espaces de passage dégagés, éviter d'encombrer la classe." },
                      { a: "📦 Rangement", r: "Étagères, bacs de rangement, casiers / Maintenir un espace de travail propre et organisé." },
                    ].map(({ a, r }) => (
                      <tr key={a}>
                        <td className="py-2 pr-4 font-bold text-primary-light whitespace-nowrap align-top">{a}</td>
                        <td className="py-2 leading-6">{r}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* 2.2 Gestion des imprévus */}
            <div className="mt-6">
              <h3 className="text-base font-bold text-dark">2.2 Gestion des Imprévus (matériels informatiques et logiciels)</h3>
              <div className="mt-3 space-y-2">
                {[
                  { ti: "💻 Panne d'ordinateur", s: "Prévoir des activités alternatives sur papier / Rediriger l'élève vers un poste de remplacement / Avoir une activité de secours préparée." },
                  { ti: "🌐 Problème de connexion internet", s: "Avoir des ressources hors ligne disponibles / Prévoir des exercices ne nécessitant pas internet / Supports imprimés de secours." },
                  { ti: "🐛 Logiciel qui ne se lance pas ou bug", s: "Connaître les procédures de redémarrage / Avoir des alternatives (autre logiciel, version en ligne) / Documenter les problèmes récurrents." },
                  { ti: "⚡ Coupure de courant", s: "Activité sans ordinateur préparée / Exercices papier sur l'algorithmique ou la théorie." },
                  { ti: "❌ Élève bloqué sur une erreur de code", s: "Protocole de dépannage en autonomie (lire le message d'erreur, chercher seul 5 min) / Demande d'aide au pair / Puis à l'enseignant." },
                  { ti: "🛡️ Virus ou perte de données", s: "Procédures de sauvegarde régulières / Utilisation d'espaces cloud (Drive, OneDrive) / Antivirus à jour." },
                ].map(({ ti, s }) => (
                  <div key={ti} className="rounded-[10px] border border-border bg-bg px-3 py-3 text-sm text-text">
                    <p className="font-bold text-dark">{ti}</p>
                    <p className="mt-1 leading-6">{s}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 2.3 Gestion du contexte */}
            <div className="mt-6">
              <h3 className="text-base font-bold text-dark">2.3 Gestion du contexte — Moyens et matériels</h3>
              <div className="mt-3 overflow-x-auto">
                <table className="w-full text-sm text-text">
                  <thead>
                    <tr className="border-b border-border text-left">
                      {["Situation matérielle", "Adaptation pédagogique"].map((h) => (
                        <th key={h} className="pb-2 pr-4 font-semibold text-dark last:pr-0">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {[
                      { s: "👥 Un ordinateur pour 2 élèves", a: "Activités de pair-programming, alternance des rôles (pilote/navigateur), travail coopératif." },
                      { s: "🚫 Pas de connexion internet", a: "Ressources locales sur le réseau interne, supports imprimés, logiciels installés hors ligne." },
                      { s: "📵 Absence de TBI/Projecteur", a: "Tableaux blancs, fiches élèves, travail en groupe autonome." },
                      { s: "💿 Logiciel non installé", a: "Version portable (USB), version en ligne, alternative équivalente." },
                    ].map(({ s, a }) => (
                      <tr key={s}>
                        <td className="py-2 pr-4 font-bold text-primary-light whitespace-nowrap align-top">{s}</td>
                        <td className="py-2 leading-6">{a}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* 2.4 Gestion du temps */}
            <div className="mt-6">
              <h3 className="text-base font-bold text-dark">2.4 Gestion du temps</h3>
              <div className="mt-3 overflow-x-auto">
                <table className="w-full text-sm text-text">
                  <thead>
                    <tr className="border-b border-border text-left">
                      {["Niveau", "Description", "Éléments clés"].map((h) => (
                        <th key={h} className="pb-2 pr-4 font-semibold text-dark last:pr-0">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {[
                      { n: "🗓️ Temps global (annuel)", d: "Planification annuelle de la progression.", e: "Répartition des séquences / Placement des évaluations / Ajustement au calendrier officiel." },
                      { n: "📚 Temps de la séquence", d: "Organisation des séances sur un thème ou une compétence.", e: "Progression des activités / Temps d'introduction, construction, application, évaluation." },
                      { n: "⏱️ Temps de la séance", d: "Gestion du déroulement d'une séance (1h-2h).", e: "Durée de chaque étape / Transitions / Éviter les temps morts." },
                      { n: "⚡ Temps de l'activité", d: "Gestion microtemporelle pendant une tâche.", e: "Consignes claires / Indication de la durée / Rappel à mi-parcours." },
                    ].map(({ n, d, e }) => (
                      <tr key={n}>
                        <td className="py-2 pr-4 font-bold text-primary-light whitespace-nowrap align-top">{n}</td>
                        <td className="py-2 pr-4 leading-6 align-top">{d}</td>
                        <td className="py-2 leading-6 align-top">{e}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* ══════════════════════════════════════════════
              AXE 3 — Pratiques professionnelles
          ══════════════════════════════════════════════ */}
          <section className="soft-card p-6 sm:p-8">
            <h2 className="text-xl font-extrabold text-dark">
              AXE 3 — Place de la Gestion de Classe dans les Pratiques Professionnelles
            </h2>

            <p className="mt-3 text-sm leading-6 text-text">
              La gestion de classe est un acte professionnel de l&apos;enseignant qui recouvre plusieurs dimensions : aménagement et organisation de l&apos;espace physique, établissement et application des règles, modalités de gestion du temps scolaire, modes d&apos;utilisation du matériel scolaire.
            </p>

            {/* 3.1 Activités professionnalisantes */}
            <div className="mt-5">
              <h3 className="text-base font-bold text-dark">3.1 Activités professionnalisantes en enseignement de l&apos;informatique</h3>
              <div className="mt-3 space-y-3">
                {[
                  {
                    a: "🎭 Jeu de rôle",
                    def: "Les participants jouent des rôles définis pour simuler des situations professionnelles ou pédagogiques réelles.",
                    modal: [
                      "Simuler le fonctionnement d'un réseau : élèves jouent les rôles de client, serveur, routeur.",
                      "Jouer les rôles d'un utilisateur et d'un technicien pour un dépannage.",
                      "Simuler une réunion de projet informatique.",
                      "Jeu de rôle sur la cybersécurité (attaquant/défenseur).",
                    ],
                    color: "border-blue-200 bg-blue-50", badge: "text-blue-700",
                  },
                  {
                    a: "🖥️ Simulations",
                    def: "Reproduction virtuelle ou physique d'une situation réelle permettant l'expérimentation sans risque.",
                    modal: [
                      "Simulation de réseaux informatiques (Cisco Packet Tracer, GNS3).",
                      "Simulation d'algorithmes (trace d'exécution pas à pas).",
                      "Simulation de bases de données.",
                      "Simulation de circuits électroniques (Tinkercad).",
                      "Environnements de programmation bac à sable (sandbox).",
                    ],
                    color: "border-green-200 bg-green-50", badge: "text-green-700",
                  },
                  {
                    a: "🚀 Projets pédagogiques",
                    def: "Réalisation collective d'un projet informatique concret sur plusieurs séances.",
                    modal: [
                      "Création d'un site web.",
                      "Développement d'une application simple.",
                      "Conception d'une base de données.",
                      "Projet d'algorithmique par groupes.",
                    ],
                    color: "border-purple-200 bg-purple-50", badge: "text-purple-700",
                  },
                  {
                    a: "🔍 Observation et analyse de pratiques",
                    def: "Observer des séances d'enseignement réelles puis analyser les pratiques observées.",
                    modal: [
                      "Grille d'observation de la gestion de classe.",
                      "Analyse des interactions enseignant-élèves.",
                      "Évaluation de la gestion du temps et de l'espace.",
                    ],
                    color: "border-orange-200 bg-orange-50", badge: "text-orange-700",
                  },
                  {
                    a: "🏫 Stages en milieu professionnel",
                    def: "Immersion dans une classe réelle sous la supervision d'un enseignant tuteur.",
                    modal: [
                      "Prise en charge progressive de la classe.",
                      "Expérimentation des stratégies de gestion.",
                      "Réflexion sur sa propre pratique (journal de bord).",
                    ],
                    color: "border-teal-200 bg-teal-50", badge: "text-teal-700",
                  },
                  {
                    a: "🎤 Micro-enseignement",
                    def: "Séances d'enseignement courtes devant un petit groupe (pairs ou élèves) suivies d'une analyse critique.",
                    modal: [
                      "Préparer et présenter une séance de 15-20 min.",
                      "Enregistrement vidéo pour auto-analyse.",
                      "Feedback des pairs et du formateur.",
                    ],
                    color: "border-indigo-200 bg-indigo-50", badge: "text-indigo-700",
                  },
                ].map(({ a, def, modal, color, badge }) => (
                  <div key={a} className={`rounded-[12px] border p-4 text-sm ${color}`}>
                    <p className={`font-bold text-base ${badge}`}>{a}</p>
                    <p className="mt-2 leading-6 text-text">{def}</p>
                    <div className="mt-2 rounded-[8px] bg-white px-3 py-3 text-sm text-text">
                      <p className="font-semibold text-dark text-xs mb-1">💻 Modalités en informatique :</p>
                      <ul className="list-disc space-y-0.5 pl-4 leading-5 text-xs text-text-light">
                        {modal.map((m) => <li key={m}>{m}</li>)}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-4 rounded-[10px] bg-bg border border-border px-4 py-2 text-xs italic text-text-light">
                💡 <span className="not-italic font-semibold text-dark">Les activités professionnalisantes</span> permettent de développer les compétences de gestion de classe dans un cadre sécurisé et réflexif, en combinant théorie et pratique selon une approche par compétences.
              </p>
            </div>
          </section>



        </div>
      </div>
    </main>
  );
}