import { modulePages } from '../../data/portfolioData';

const slug = 's1-tice';

export default function S1TicePage() {
  const module = modulePages.find((item) => item.slug === slug);
  const resources = module?.resources ?? [];

  const getResourceLink = (resource) => {
    if (resource.href && resource.href !== '#') {
      return resource.href;
    }

    const query = `${module?.title ?? 'TICE'} ${resource.label} CRMEF`;
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
                TICE — Technologies de l&apos;Information et de la Communication pour l&apos;Enseignement
              </h1>

              <div className="mt-4 flex flex-wrap gap-2">
                {[
                  "Définition & Stratégie",
                  "Modèle SAMR",
                  "DigComp / DigCompEdu",
                  "TPACK",
                  "Identité numérique",
                  "Nétiquette",
                  "Licences CC",
                  "LMS & Vidéo",
                  "MOOC",
                  "Bimodal & Classe inversée",
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
            {resources.length > 0 ? (
              <ul className="mt-4 space-y-2">
                {resources.map((resource) => (
                  <li key={resource.label}>
                    <a
                      href={getResourceLink(resource)}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-between rounded-[10px] border border-border bg-bg px-3 py-2 text-sm text-text transition hover:border-primary-light/40 hover:bg-white"
                    >
                      <span>{resource.label}</span>
                      <span className="text-primary-light">Ouvrir</span>
                    </a>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-4 rounded-[10px] border border-dashed border-border bg-bg px-3 py-2 text-sm text-text-light">
                Les ressources seront ajoutees prochainement.
              </p>
            )}
          </aside>
        </section>

        <div className="space-y-8">

          {/* ══════════════════════════════════════════════
              SECTION 01 — DÉFINITION & STRATÉGIE TICE
          ══════════════════════════════════════════════ */}
          <section className="soft-card p-6 sm:p-8">
            <h2 className="text-xl font-extrabold text-dark">01. Définition &amp; Stratégie TICE</h2>

            <div className="mt-4 rounded-[12px] border border-border bg-bg p-4 text-sm leading-7 text-text">
              <p className="font-semibold text-dark">📌 Définition des TICE</p>
              <p className="mt-2">
                Les TICE intègrent les technologies numériques pour améliorer les processus
                d&apos;apprentissage et d&apos;enseignement. Elles favorisent la collaboration, améliorent
                l&apos;engagement et permettent un apprentissage flexible répondant aux divers besoins des
                apprenants.
              </p>
              <p className="mt-2">
                <span className="font-semibold">Outils incluent : </span>ordinateurs, tablettes,
                tableaux blancs interactifs, logiciels éducatifs, plateformes en ligne, connectivité
                Internet, contenu multimédia.
              </p>
            </div>

            {/* Stratégie Maroc */}
            <div className="mt-5">
              <h3 className="text-base font-bold text-dark">🇲🇦 Stratégie Nationale — Maroc</h3>
              <div className="mt-3 overflow-x-auto">
                <table className="w-full text-sm text-text">
                  <thead>
                    <tr className="border-b border-border text-left">
                      {["Année", "Texte / Programme", "Contenu essentiel"].map((h) => (
                        <th key={h} className="pb-2 pr-4 font-semibold text-dark last:pr-0">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {[
                      { a: "1999", t: "Charte nationale — Levier 10", c: "Recours aux NTIC pour optimiser les ressources éducatives et la formation continue." },
                      { a: "2005", t: "Programme GENIE", c: "4 axes : Infrastructure (salles multimédia + Internet), Formation des enseignants, Ressources numériques (portail TICE), Développement des usages." },
                      { a: "2015", t: "Vision stratégique 2015-2030", c: "Levier 20 : équipement, connexion internet, intégration TIC à tous niveaux, promotion qualité des apprentissages." },
                      { a: "2017", t: "Loi-cadre 51-17 — Projet 14", c: "16 projets : Projet 14 = Développer les usages des TIC dans l'éducation." },
                      { a: "2021+", t: "Nouveau Modèle de Développement", c: "Écosystème EdTech marocain : MOOC, applications pédagogiques, marketplaces, connexion de toutes les écoles publiques." },
                    ].map(({ a, t, c }) => (
                      <tr key={a}>
                        <td className="py-2 pr-4 font-bold text-primary-light">{a}</td>
                        <td className="py-2 pr-4 font-medium text-dark">{t}</td>
                        <td className="py-2 leading-6">{c}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Stratégie UNESCO */}
            <div className="mt-5">
              <h3 className="text-base font-bold text-dark">🌍 Référentiel UNESCO — 3 Niveaux</h3>
              <div className="mt-3 grid gap-3 sm:grid-cols-3">
                {[
                  { n: "Niveau 1", titre: "Acquisition des connaissances", desc: "Maîtrise des outils numériques de base." },
                  { n: "Niveau 2", titre: "Approfondissement", desc: "Comprendre et résoudre des problèmes complexes avec le numérique." },
                  { n: "Niveau 3", titre: "Création", desc: "Produire de nouveaux savoirs, innover et former des citoyens du XXIe siècle." },
                ].map(({ n, titre, desc }) => (
                  <div key={n} className="rounded-[12px] border border-border bg-bg p-4 text-sm">
                    <p className="text-xs font-bold uppercase tracking-wide text-accent">{n}</p>
                    <p className="mt-1 font-bold text-dark">{titre}</p>
                    <p className="mt-1 leading-6 text-text">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ══════════════════════════════════════════════
              SECTION 02 — MODÈLE SAMR
          ══════════════════════════════════════════════ */}
          <section className="soft-card p-6 sm:p-8">
            <h2 className="text-xl font-extrabold text-dark">
              02. Modèle SAMR — Ruben Puentedura (Harvard)
            </h2>
            <p className="mt-3 text-sm leading-7 text-text">
              Grille de référence en 4 niveaux qui aide l&apos;enseignant à évaluer la plus-value
              pédagogique de l&apos;usage du numérique. Il place la technologie au service de l&apos;élève,
              pas comme but en soi.
            </p>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {[
                {
                  code: "S — Substitution",
                  zone: "🔵 Amélioration",
                  def: "Le numérique REMPLACE l'outil traditionnel SANS changement fonctionnel.",
                  ex: "Traitement de texte à la place du stylo-papier.",
                  color: "border-blue-200 bg-blue-50",
                  badge: "text-blue-700",
                },
                {
                  code: "A — Augmentation",
                  zone: "🔵 Amélioration",
                  def: "Remplacement avec AMÉLIORATION fonctionnelle (nouvelles fonctionnalités).",
                  ex: "Correcteur orthographique, insertion de graphiques, mise en forme avancée.",
                  color: "border-blue-200 bg-blue-50",
                  badge: "text-blue-700",
                },
                {
                  code: "M — Modification",
                  zone: "🔴 Transformation",
                  def: "Le numérique RECONFIGURE significativement la tâche pédagogique.",
                  ex: "Écriture collaborative en temps réel via Google Docs avec annotations.",
                  color: "border-red-100 bg-red-50",
                  badge: "text-red-600",
                },
                {
                  code: "R — Redéfinition",
                  zone: "🔴 Transformation",
                  def: "Création de tâches ENTIÈREMENT NOUVELLES impossibles sans numérique.",
                  ex: "Production multimédia (texte + audio + vidéo) publiée en ligne, retours d'internautes.",
                  color: "border-red-100 bg-red-50",
                  badge: "text-red-600",
                },
              ].map(({ code, zone, def, ex, color, badge }) => (
                <div key={code} className={`rounded-[12px] border p-4 text-sm ${color}`}>
                  <div className="flex items-center justify-between">
                    <p className={`font-bold ${badge}`}>{code}</p>
                    <span className="text-xs font-semibold text-text-light">{zone}</span>
                  </div>
                  <p className="mt-2 text-text">{def}</p>
                  <p className="mt-1 rounded-[8px] bg-white px-3 py-1.5">
                    <span className="font-semibold text-dark">Ex : </span>{ex}
                  </p>
                </div>
              ))}
            </div>

            {/* Exemples disciplinaires */}
            <div className="mt-5">
              <h3 className="text-base font-bold text-dark">💡 Exemples disciplinaires</h3>
              <div className="mt-3 space-y-2 text-sm text-text">
                {[
                  { act: "Google Earth", prog: "Substitution → consultation carte | Redéfinition → exploration 3D immersive impossible sur papier." },
                  { act: "Dictée", prog: "Substitution → stylo | Augmentation → dictée vocale avec correction automatique." },
                  { act: "Théorème de Pythagore", prog: "Modification → démonstration interactive GeoGebra avec manipulation des points en temps réel." },
                  { act: "Journal scolaire", prog: "Redéfinition → journal multimédia en ligne diffusé mondialement avec retours extérieurs." },
                  { act: "Compte-rendu d'expérience", prog: "Modification → partage en ligne, vidéo de l'expérience + annotations collaboratives." },
                ].map(({ act, prog }) => (
                  <div key={act} className="flex gap-2 rounded-[10px] border border-border bg-bg px-3 py-2">
                    <span className="shrink-0 font-semibold text-dark">{act} :</span>
                    <span>{prog}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 rounded-[10px] bg-bg px-4 py-3 text-sm leading-7 text-text">
              <span className="font-semibold text-dark">🎯 Rôle de l&apos;enseignant : </span>
              Niveaux S &amp; A (« petit bain ») : aider à maîtriser l&apos;outil. Niveaux M &amp; R
              (« grand bain ») : transformer les pratiques, développer créativité, collaboration,
              communication. Ne pas rester uniquement au niveau S/A — viser la{" "}
              <strong>transformation pédagogique réelle</strong>.
            </div>
          </section>

          {/* ══════════════════════════════════════════════
              SECTION 03 — DIGCOMP & DIGCOMPEDU
          ══════════════════════════════════════════════ */}
          <section className="soft-card p-6 sm:p-8">
            <h2 className="text-xl font-extrabold text-dark">
              03. Compétences Numériques — DigComp 2.1 &amp; DigCompEdu
            </h2>
            <p className="mt-3 text-sm leading-7 text-text">
              <strong>DigComp 2.1</strong> (Commission européenne, JRC, 2017) est le cadre de référence
              des compétences numériques pour <em>tous les citoyens</em>.{" "}
              <strong>DigCompEdu</strong> est son équivalent spécifique aux éducateurs.
            </p>
            <p className="mt-2 rounded-[10px] bg-bg px-4 py-3 text-sm text-text">
              💡 <span className="font-semibold">Analogie : </span>DigComp = « permis de conduire »
              numérique | DigCompEdu = « guide du moniteur d&apos;auto-école »
            </p>

            {/* DigComp 5 domaines */}
            <div className="mt-5">
              <h3 className="text-base font-bold text-dark">
                🧑‍💻 DigComp 2.1 — 5 Domaines &amp; 21 compétences (8 niveaux)
              </h3>
              <div className="mt-3 overflow-x-auto">
                <table className="w-full text-sm text-text">
                  <thead>
                    <tr className="border-b border-border text-left">
                      {["N°", "Domaine", "Compétences principales"].map((h) => (
                        <th key={h} className="pb-2 pr-4 font-semibold text-dark last:pr-0">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {[
                      { n: "1", d: "Littératie informationnelle & données", c: "Parcourir/rechercher, Évaluer la crédibilité des sources, Gérer les données et contenus numériques." },
                      { n: "2", d: "Communication & collaboration", c: "Interagir, Partager, Citoyenneté numérique, Collaborer, Nétiquette, Identité numérique." },
                      { n: "3", d: "Création de contenus numériques", c: "Développer du contenu, Intégrer/réélaborer, Droits d'auteur & licences, Programmation." },
                      { n: "4", d: "Sécurité", c: "Protéger appareils & données personnelles, Santé & bien-être, Environnement numérique." },
                      { n: "5", d: "Résolution de problèmes", c: "Résoudre problèmes techniques, Identifier besoins technologiques, Usage créatif, Combler les lacunes." },
                    ].map(({ n, d, c }) => (
                      <tr key={n}>
                        <td className="py-2 pr-4 font-bold text-primary-light">{n}</td>
                        <td className="py-2 pr-4 font-medium text-dark">{d}</td>
                        <td className="py-2 leading-6">{c}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-2 text-xs text-text-light">
                ⚠️ 8 niveaux : de 1 (basique avec guidance) → 4 (indépendant) → 6 (avancé) → 8
                (hautement spécialisé).
              </p>
            </div>

            {/* DigCompEdu 6 domaines */}
            <div className="mt-6">
              <h3 className="text-base font-bold text-dark">
                🎓 DigCompEdu — 6 Domaines de compétences des éducateurs
              </h3>
              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                {[
                  { n: "1", d: "Engagement professionnel", desc: "Communication & collaboration numérique avec collègues/parents/administration.", comp: "Communication org., pratique réflexive, développement professionnel continu." },
                  { n: "2", d: "Ressources numériques", desc: "Sélectionner, créer, modifier & partager des ressources éducatives adaptées.", comp: "Sélection rigoureuse, création/modification, gestion & partage." },
                  { n: "3", d: "Enseignement & apprentissage", desc: "Orchestrer les outils numériques pour des stratégies pédagogiques efficaces.", comp: "Enseignement guidé, apprentissage collaboratif, auto-apprentissage." },
                  { n: "4", d: "Évaluation", desc: "Utiliser le numérique pour évaluer formativement et sommativement.", comp: "Stratégies d'évaluation, analyse résultats, rétroaction & planification." },
                  { n: "5", d: "Autonomisation des apprenants", desc: "Favoriser l'inclusion & l'engagement actif via le numérique.", comp: "Accessibilité/inclusion, différenciation pédagogique, engagement actif." },
                  { n: "6", d: "Compétence numérique des apprenants", desc: "Développer les compétences DigComp des élèves.", comp: "Littératie info-médias, communication, création contenu, usage responsable." },
                ].map(({ n, d, desc, comp }) => (
                  <div key={n} className="rounded-[12px] border border-border bg-bg p-4 text-sm">
                    <div className="flex items-center gap-2">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-light/10 text-xs font-bold text-primary-light">
                        {n}
                      </span>
                      <p className="font-bold text-dark">{d}</p>
                    </div>
                    <p className="mt-2 italic text-text-light">{desc}</p>
                    <p className="mt-1 text-text">
                      <span className="font-semibold">Compétences : </span>{comp}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ══════════════════════════════════════════════
              SECTION 04 — MODÈLE TPACK
          ══════════════════════════════════════════════ */}
          <section className="soft-card p-6 sm:p-8">
            <h2 className="text-xl font-extrabold text-dark">
              04. Modèle TPACK — Technological Pedagogical Content Knowledge
            </h2>
            <p className="mt-3 text-sm leading-7 text-text">
              TPACK décrit les 3 corps de connaissances fondamentaux que l&apos;enseignant doit intégrer
              harmonieusement pour réussir l&apos;intégration du numérique dans son enseignement.
            </p>

            <div className="mt-5 overflow-x-auto">
              <table className="w-full text-sm text-text">
                <thead>
                  <tr className="border-b border-border text-left">
                    {["Composante", "Signification française", "Question clé pour l'enseignant"].map((h) => (
                      <th key={h} className="pb-2 pr-4 font-semibold text-dark last:pr-0">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {[
                    { c: "CK — Content Knowledge", s: "Maîtrise disciplinaire (la matière enseignée)", q: "Que dois-je enseigner comme contenu ?" },
                    { c: "PK — Pedagogical Knowledge", s: "Méthodes & stratégies d'enseignement générales", q: "Comment dois-je enseigner ?" },
                    { c: "TK — Technological Knowledge", s: "Maîtrise des outils & technologies numériques", q: "Quels outils numériques puis-je utiliser ?" },
                    { c: "PCK", s: "Adapter les stratégies pédagogiques au contenu", q: "Quelle méthode pour CE contenu spécifique ?" },
                    { c: "TCK", s: "Technologie adaptée à la discipline", q: "Quel outil numérique pour CE concept disciplinaire ?" },
                    { c: "TPK", s: "Technologie au service de la pédagogie", q: "Comment cet outil améliore-t-il l'apprentissage ?" },
                    { c: "TPACK (intersection totale)", s: "Intégration harmonieuse des 3 dimensions", q: "Comment enseigner CE contenu AVEC cette technologie de façon efficace ?" },
                  ].map(({ c, s, q }) => (
                    <tr key={c}>
                      <td className="py-2 pr-4 font-bold text-primary-light">{c}</td>
                      <td className="py-2 pr-4 leading-6">{s}</td>
                      <td className="py-2 leading-6 italic text-text-light">{q}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* ══════════════════════════════════════════════
              SECTION 05 — IDENTITÉ NUMÉRIQUE & E-RÉPUTATION
          ══════════════════════════════════════════════ */}
          <section className="soft-card p-6 sm:p-8">
            <h2 className="text-xl font-extrabold text-dark">
              05. Identité Numérique &amp; E-Réputation
            </h2>
            <p className="mt-3 text-sm leading-7 text-text">
              L&apos;identité numérique = ensemble des traces et données personnelles d&apos;un individu ou
              d&apos;une organisation sur Internet (perçues par autrui). Toute la communauté éducative
              laisse des traces numériques qui forment son identité et impactent sa réputation en ligne.
            </p>

            {/* Composantes */}
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div>
                <h3 className="text-sm font-bold text-dark">🪪 Composantes de l&apos;identité numérique</h3>
                <div className="mt-3 grid gap-2 grid-cols-2">
                  {[
                    { c: "Identifiant", v: "Nom, prénom, pseudonyme" },
                    { c: "Avatar", v: "Photo de profil, représentation visuelle" },
                    { c: "Publications", v: "Ce que je partage (posts, articles, photos)" },
                    { c: "Expression", v: "Ce que je dis (commentaires, avis, messages)" },
                    { c: "Profession", v: "Métier, établissement, fonction" },
                    { c: "Réputation", v: "Ce que les autres disent sur moi" },
                    { c: "Audience", v: "Qui me connaît, qui me suit" },
                    { c: "Hobbies", v: "Centres d'intérêt exprimés en ligne" },
                  ].map(({ c, v }) => (
                    <div key={c} className="rounded-[8px] border border-border bg-bg px-3 py-2 text-sm text-text">
                      <span className="font-semibold text-dark">{c} : </span>{v}
                    </div>
                  ))}
                </div>
              </div>

              {/* 3 types de traces */}
              <div>
                <h3 className="text-sm font-bold text-dark">👣 3 Types de traces numériques</h3>
                <div className="mt-3 space-y-2 text-sm text-text">
                  {[
                    { t: "Volontaires", d: "Contenus publiés consciemment par l'individu.", ex: "Publications FB, CV en ligne, photos postées, avis." },
                    { t: "Involontaires", d: "Données collectées sans action directe de l'utilisateur.", ex: "Cookies, adresse IP, mots-clés de recherche, historique." },
                    { t: "Héritées", d: "Informations publiées par d'autres sans consentement.", ex: "Photos de classe partagées par autrui, mentions non désirées." },
                  ].map(({ t, d, ex }) => (
                    <div key={t} className="rounded-[10px] border border-border bg-bg px-3 py-3">
                      <p className="font-bold text-dark">{t}</p>
                      <p className="mt-1">{d}</p>
                      <p className="mt-1 italic text-text-light">{ex}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 5 étapes e-réputation */}
            <div className="mt-5">
              <h3 className="text-base font-bold text-dark">⭐ E-Réputation : 5 Étapes de construction</h3>
              <div className="relative mt-3 pl-5">
                <span aria-hidden className="absolute left-[7px] top-2 h-[calc(100%-12px)] w-[2px] rounded-full bg-border" />
                {[
                  { e: "1. Réfléchir", d: "Définir sa stratégie en ligne : Quoi ? Qui ? Où ? Quand ? Comment ? Pourquoi ?" },
                  { e: "2. Bâtir", d: "Créer des profils cohérents et professionnels sur les réseaux adaptés à sa stratégie." },
                  { e: "3. Entretenir", d: "Publier régulièrement des contenus de qualité, mettre à jour les profils, alimenter les réseaux." },
                  { e: "4. Veiller", d: "Surveiller ce qui se dit sur soi grâce à des outils de veille (Google Alertes, Mention, TinEye)." },
                  { e: "5. Nettoyer", d: "Répondre aux attaques de façon courtoise, supprimer contenus négatifs, recours juridiques si besoin." },
                ].map(({ e, d }) => (
                  <div key={e} className="relative pb-3 last:pb-0">
                    <span aria-hidden className="absolute -left-[13px] top-[5px] h-3 w-3 rounded-full border-2 border-primary-light bg-white" />
                    <div className="rounded-[8px] border border-border bg-bg px-4 py-2 text-sm text-text">
                      <span className="font-bold text-dark">{e} → </span>{d}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ══════════════════════════════════════════════
              SECTION 06 — NÉTIQUETTE
          ══════════════════════════════════════════════ */}
          <section className="soft-card p-6 sm:p-8">
            <h2 className="text-xl font-extrabold text-dark">06. Nétiquette — Règles de conduite sur Internet</h2>
            <p className="mt-3 text-sm leading-7 text-text">
              <strong>Nétiquette</strong> = net + étiquette. Règles de conduite pour garantir une
              communication respectueuse et appropriée sur Internet. Non juridiquement contraignantes,
              mais fortement recommandées.
            </p>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full text-sm text-text">
                <thead>
                  <tr className="border-b border-border text-left">
                    {["Catégorie", "Règles essentielles"].map((h) => (
                      <th key={h} className="pb-2 pr-4 font-semibold text-dark last:pr-0">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {[
                    { cat: "Comportement général", r: "Mêmes règles qu'en vie réelle | L'humain d'abord (penser à son interlocuteur) | Se montrer sous son meilleur jour | Pardonner les erreurs des novices." },
                    { cat: "Communication écrite", r: "Lire avant de poser des questions | Soigner la grammaire & la ponctuation | Éviter les MAJUSCULES (= cri en ligne)." },
                    { cat: "Vie privée & données", r: "Respecter la vie privée des autres | Ne pas transmettre sans accord | Utiliser BCC (pas CC) pour les emails collectifs." },
                    { cat: "Ressources & temps", r: "Ne pas monopoliser la bande passante | Aller droit au but | Réfléchir aux destinataires nécessaires." },
                    { cat: "Pouvoir & modération", r: "Pas d'abus de pouvoir (modérateurs, experts) | Signaler les erreurs en privé plutôt que publiquement." },
                    { cat: "Partage de contenu", r: "Ne pas partager photos/vidéos d'autrui sans consentement | Vérifier les sources avant de relayer (lutte contre fake news)." },
                    { cat: "Contexte professionnel", r: "Distinguer profil privé et profil professionnel | Adapter le ton selon la plateforme et l'audience." },
                    { cat: "Sécurité en ligne", r: "Ne pas partager mots de passe | Vérifier URLs avant de cliquer | Protéger ses données personnelles." },
                  ].map(({ cat, r }) => (
                    <tr key={cat}>
                      <td className="py-2 pr-4 font-medium text-dark">{cat}</td>
                      <td className="py-2 leading-6">{r}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* ══════════════════════════════════════════════
              SECTION 07 — RESSOURCES NUMÉRIQUES & LICENCES CC
          ══════════════════════════════════════════════ */}
          <section className="soft-card p-6 sm:p-8">
            <h2 className="text-xl font-extrabold text-dark">
              07. Ressources Numériques &amp; Licences Creative Commons
            </h2>

            {/* 4 catégories */}
            <div className="mt-5">
              <h3 className="text-base font-bold text-dark">
                ✅ 4 Catégories de critères pour évaluer une ressource numérique
              </h3>
              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                {[
                  {
                    cat: "📚 Pédagogiques",
                    items: ["Public cible, conformité au programme.", "Nature pédagogique (exercice/cours/simulation).", "Interactivité & auto-correction.", "Possibilité de personnalisation."],
                  },
                  {
                    cat: "📰 Éditoriaux",
                    items: ["Auteur/éditeur identifié, date de mise à jour récente.", "Label RIP (Reconnue d'Intérêt Pédagogique).", "Ergonomie de l'interface.", "Accessibilité pour élèves en situation de handicap."],
                  },
                  {
                    cat: "⚙️ Techniques",
                    items: ["Format du fichier, poids (vitesse de chargement).", "OS requis (Windows/Linux/Android).", "Type d'installation (locale/ENT/en ligne).", "Bande passante nécessaire."],
                  },
                  {
                    cat: "💰 Économiques & Juridiques",
                    items: ["Gratuit/payant, type d'abonnement.", "Licences d'utilisation, droits de reproduction.", "Conformité CNIL, protection des données personnelles des élèves."],
                  },
                ].map(({ cat, items }) => (
                  <div key={cat} className="rounded-[12px] border border-border bg-bg p-4 text-sm">
                    <p className="font-bold text-dark">{cat}</p>
                    <ul className="mt-2 list-disc space-y-1 pl-5 leading-6 text-text">
                      {items.map((i) => <li key={i}>{i}</li>)}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Licences CC */}
            <div className="mt-6">
              <h3 className="text-base font-bold text-dark">©️ Les 6 Licences Creative Commons</h3>
              <div className="mt-3 overflow-x-auto">
                <table className="w-full text-sm text-text">
                  <thead>
                    <tr className="border-b border-border text-left">
                      {["Licence", "Code", "Commercial", "Remix/Dérivés", "Partage identique"].map((h) => (
                        <th key={h} className="pb-2 pr-4 font-semibold text-dark last:pr-0">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {[
                      { l: "Attribution seule", code: "BY", com: "✅", remix: "✅", share: "Libre" },
                      { l: "Attribution + Partage identique", code: "BY-SA", com: "✅", remix: "✅", share: "✅ Obligatoire" },
                      { l: "Attribution + Pas de dérivés", code: "BY-ND", com: "✅", remix: "❌", share: "N/A" },
                      { l: "Attribution + Non commercial", code: "BY-NC", com: "❌", remix: "✅", share: "Libre" },
                      { l: "BY + NC + SA", code: "BY-NC-SA", com: "❌", remix: "✅", share: "✅ Obligatoire" },
                      { l: "BY + NC + Pas de dérivés", code: "BY-NC-ND", com: "❌", remix: "❌", share: "N/A" },
                    ].map(({ l, code, com, remix, share }) => (
                      <tr key={code}>
                        <td className="py-2 pr-4 text-dark">{l}</td>
                        <td className="py-2 pr-4 font-bold text-primary-light">{code}</td>
                        <td className="py-2 pr-4">{com}</td>
                        <td className="py-2 pr-4">{remix}</td>
                        <td className="py-2">{share}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-3 rounded-[10px] bg-bg px-4 py-2 text-xs text-text">
                ⚠️ La mention de l&apos;auteur (<strong>BY = Attribution</strong>) est{" "}
                <strong>TOUJOURS obligatoire</strong> dans toutes les licences CC.
              </p>
            </div>
          </section>

          {/* ══════════════════════════════════════════════
              SECTION 08 — LMS, VIDÉO ÉDUCATIVE & OUTILS
          ══════════════════════════════════════════════ */}
          <section className="soft-card p-6 sm:p-8">
            <h2 className="text-xl font-extrabold text-dark">08. LMS &amp; Outils Pédagogiques Numériques</h2>

            {/* LMS */}
            <div className="mt-5">
              <h3 className="text-base font-bold text-dark">🖥️ LMS — Learning Management System</h3>
              <p className="mt-2 text-sm leading-6 text-text">
                Plateforme numérique pour administrer, documenter, suivre, rapporter et délivrer des
                cours en ligne. Exemples : <strong>Moodle</strong> (open source), Canvas, Google
                Classroom, Blackboard.
              </p>
              <div className="mt-3 overflow-x-auto">
                <table className="w-full text-sm text-text">
                  <thead>
                    <tr className="border-b border-border text-left">
                      {["Fonctionnalité", "Description"].map((h) => (
                        <th key={h} className="pb-2 pr-4 font-semibold text-dark last:pr-0">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {[
                      { f: "Gestion des cours", d: "Création, organisation, structuration et distribution des contenus." },
                      { f: "Gestion des utilisateurs", d: "Enregistrement et gestion des apprenants, instructeurs, administrateurs." },
                      { f: "Suivi & rapports", d: "Suivi des progrès, évaluation des performances, tableaux de bord." },
                      { f: "Communication", d: "Forums de discussion, messagerie, annonces, notifications." },
                      { f: "Évaluation & feedback", d: "Tests, quiz, sondages, devoirs avec correction automatique ou manuelle." },
                      { f: "Avantages", d: "Accessibilité 24h/24, centralisation des ressources, personnalisation des parcours, économie de coûts." },
                    ].map(({ f, d }) => (
                      <tr key={f}>
                        <td className="py-2 pr-4 font-medium text-dark">{f}</td>
                        <td className="py-2 leading-6">{d}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Vidéo éducative */}
            <div className="mt-6">
              <h3 className="text-base font-bold text-dark">
                🎬 Vidéo Éducative — 3 Piliers d&apos;une vidéo efficace
              </h3>
              <p className="mt-2 text-sm text-text-light italic">
                Les élèves mémorisent 50% de ce qu&apos;ils voient ET entendent vs seulement 10% de ce
                qu&apos;ils lisent (Wiman &amp; Merierhenry).
              </p>
              <div className="mt-3 grid gap-3 sm:grid-cols-3">
                {[
                  {
                    p: "1. Charge cognitive",
                    rec: "Signalisation (zoom/mots-clés), Segmentation (6-10 min MAX), Élagage (supprimer musique/arrière-plan), Modalités appariées (visuel + auditif simultanés).",
                    outils: "Camtasia, OBS Studio, PowerPoint.",
                  },
                  {
                    p: "2. Motivation",
                    rec: "Durée idéale : 6 min (attention médiane), Ton conversationnel & enthousiaste, Créer ses propres vidéos (pas du contenu emprunté).",
                    outils: "Loom, Screencastify, Animaker.",
                  },
                  {
                    p: "3. Apprentissage actif",
                    rec: "Questions de guidage intégrées, Rétroaction immédiate, Donner le contrôle à l'élève (pause/retour arrière), Questions auto-évaluatives.",
                    outils: "Edpuzzle, H5P, TouchCast.",
                  },
                ].map(({ p, rec, outils }) => (
                  <div key={p} className="rounded-[12px] border border-border bg-bg p-4 text-sm">
                    <p className="font-bold text-dark">{p}</p>
                    <p className="mt-2 leading-6 text-text">{rec}</p>
                    <p className="mt-2 text-xs font-semibold text-primary-light">{outils}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Outils par catégorie */}
            <div className="mt-6">
              <h3 className="text-base font-bold text-dark">🛠️ Outils numériques par catégorie</h3>
              <div className="mt-3 grid gap-2 sm:grid-cols-2">
                {[
                  { cat: "Enregistreur d'écran", outils: "Camtasia, Loom, Screencastify, Screencast-O-Matic, OBS Studio" },
                  { cat: "Tableau blanc interactif", outils: "Explain Everything, ShowMe, Educreations, Jamboard" },
                  { cat: "Vidéos interactives", outils: "Edpuzzle, H5P, TouchCast, eduCanon" },
                  { cat: "Animations & créations", outils: "Powtoon, Animaker, VideoScribe, Explee, Genially" },
                  { cat: "Cartes mentales", outils: "MindMeister, XMind, Coggle, FreeMind, Miro" },
                  { cat: "Collaboration", outils: "Google Workspace (Docs/Slides), Padlet, Trello, Teams, Slack" },
                  { cat: "Évaluation interactive", outils: "Plickers (QCM + smartphone), Kahoot, Quizlet, Socrative, Mentimeter" },
                ].map(({ cat, outils }) => (
                  <div key={cat} className="flex gap-2 rounded-[10px] border border-border bg-bg px-3 py-2 text-sm text-text">
                    <span className="shrink-0 font-semibold text-dark">{cat} :</span>
                    <span className="text-text-light">{outils}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ══════════════════════════════════════════════
              SECTION 09 — MOOC
          ══════════════════════════════════════════════ */}
          <section className="soft-card p-6 sm:p-8">
            <h2 className="text-xl font-extrabold text-dark">09. MOOC — Massive Open Online Course</h2>
            <p className="mt-3 text-sm leading-7 text-text">
              Cours en ligne ouvert, massivement accessible, proposé par des universités ou institutions
              à destination de tous les apprenants du monde via Internet, sans condition d&apos;âge ou de
              diplôme.
            </p>

            {/* Caractéristiques */}
            <div className="mt-5">
              <h3 className="text-base font-bold text-dark">✨ Caractéristiques essentielles</h3>
              <div className="mt-3 grid gap-2 sm:grid-cols-3">
                {[
                  { c: "Massif", d: "Accessible à des milliers (voire des millions) d'apprenants simultanément." },
                  { c: "Ouvert", d: "Sans condition d'âge, de diplôme, de localisation — inscription libre." },
                  { c: "En ligne", d: "Accessible 24h/24, 7j/7 avec ordinateur + connexion Internet." },
                  { c: "Interactif", d: "Forums de discussion, devoirs corrigés, auto-évaluations, quiz, projets." },
                  { c: "Durée", d: "Généralement 4 à 8 semaines selon la filière." },
                  { c: "Certification", d: "Certificat à la fin (pas de diplôme officiel sauf exceptions) valorisable sur CV." },
                ].map(({ c, d }) => (
                  <div key={c} className="rounded-[10px] border border-border bg-bg px-3 py-3 text-sm text-text">
                    <span className="font-bold text-dark">{c} : </span>{d}
                  </div>
                ))}
              </div>
            </div>

            {/* Top plateformes */}
            <div className="mt-5">
              <h3 className="text-base font-bold text-dark">🏆 Top plateformes MOOC</h3>
              <div className="mt-3 overflow-x-auto">
                <table className="w-full text-sm text-text">
                  <thead>
                    <tr className="border-b border-border text-left">
                      {["Plateforme", "Spécificité", "Tarif"].map((h) => (
                        <th key={h} className="pb-2 pr-4 font-semibold text-dark last:pr-0">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {[
                      { p: "Coursera", s: "Universités de renommée (London, Stanford, Michigan), diplômes reconnus, crédits académiques.", t: "Gratuit → 400$/cours" },
                      { p: "edX", s: "Harvard, MIT, sciences & supérieur, crédits académiques, certificats reconnus.", t: "50 à 400$" },
                      { p: "Udemy", s: "Large diversité, cours par enseignants indépendants, pas d'abonnement payant obligatoire.", t: "20 à 40€" },
                      { p: "FUN-MOOC", s: "Plateforme française, universités françaises, cours majoritairement gratuits en français.", t: "Gratuit principalement" },
                      { p: "LinkedIn Learning", s: "Compétences professionnelles, certifications visibles sur profil LinkedIn, employeurs.", t: "Abonnement mensuel" },
                    ].map(({ p, s, t }) => (
                      <tr key={p}>
                        <td className="py-2 pr-4 font-bold text-primary-light">{p}</td>
                        <td className="py-2 pr-4 leading-6">{s}</td>
                        <td className="py-2 text-text-light">{t}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Avantages & Limites */}
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[12px] border border-green-200 bg-green-50 p-4 text-sm">
                <p className="font-bold text-green-700">👍 Avantages</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 leading-6 text-text">
                  {[
                    "Apprentissage à son propre rythme, sans horaires fixes.",
                    "Coût très réduit voire gratuit pour la plupart.",
                    "Accès aux cours des meilleures universités mondiales.",
                    "Certification valorisable sur le CV.",
                    "Couvre d'innombrables domaines (info, santé, management...).",
                  ].map((a) => <li key={a}>{a}</li>)}
                </ul>
              </div>
              <div className="rounded-[12px] border border-red-200 bg-red-50 p-4 text-sm">
                <p className="font-bold text-red-600">👎 Limites</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 leading-6 text-text">
                  {[
                    "Taux d'abandon élevé (manque d'autodiscipline & de motivation).",
                    "Qualité variable selon la plateforme choisie.",
                    "Beaucoup de contenus en anglais (barrière linguistique).",
                    "Pas de diplôme officiel reconnu par l'État (sauf exceptions).",
                    "Nécessite sens de l'organisation, autodiscipline et motivation.",
                  ].map((l) => <li key={l}>{l}</li>)}
                </ul>
              </div>
            </div>
          </section>

          {/* ══════════════════════════════════════════════
              SECTION 10 — BIMODAL, COMODAL & CLASSE INVERSÉE
          ══════════════════════════════════════════════ */}
          <section className="soft-card p-6 sm:p-8">
            <h2 className="text-xl font-extrabold text-dark">
              10. Enseignement Bimodal, Comodal &amp; Classe Inversée
            </h2>
            <p className="mt-3 text-sm leading-7 text-text">
              L&apos;enseignement bimodal permet d&apos;enseigner simultanément à des étudiants présents en
              classe ET à d&apos;autres à distance en visioconférence, au même moment et en temps réel.
            </p>

            {/* Comparaison modes */}
            <div className="mt-5">
              <h3 className="text-base font-bold text-dark">📊 Comparaison des modes d&apos;enseignement</h3>
              <div className="mt-3 overflow-x-auto">
                <table className="w-full text-sm text-text">
                  <thead>
                    <tr className="border-b border-border text-left">
                      {["Mode", "Définition", "Flexibilité", "Synchronisme"].map((h) => (
                        <th key={h} className="pb-2 pr-4 font-semibold text-dark last:pr-0">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {[
                      { m: "Présentiel traditionnel", d: "100% en classe physique.", f: "Faible", s: "Synchrone uniquement" },
                      { m: "FAD (À distance)", d: "100% en ligne, souvent asynchrone.", f: "Très élevée", s: "Asynchrone principalement" },
                      { m: "Bimodal", d: "Présence ET distance SIMULTANÉMENT (même cours en direct, 2 groupes).", f: "Moyenne", s: "Synchrone (2 groupes en même temps)" },
                      { m: "Comodal (HyFlex)", d: "Bimodal + option enregistrement asynchrone (3 choix pour l'étudiant).", f: "Très élevée", s: "Synchrone ET asynchrone" },
                      { m: "Hybride", d: "Alternance planifiée présence/distance selon calendrier.", f: "Moyenne", s: "Variable selon planning" },
                    ].map(({ m, d, f, s }) => (
                      <tr key={m}>
                        <td className="py-2 pr-4 font-bold text-primary-light">{m}</td>
                        <td className="py-2 pr-4 leading-6">{d}</td>
                        <td className="py-2 pr-4">{f}</td>
                        <td className="py-2">{s}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Conditions de réussite */}
            <div className="mt-5">
              <h3 className="text-base font-bold text-dark">
                ⚙️ Conditions de réussite de l&apos;enseignement bimodal
              </h3>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-text">
                {[
                  "Équipement : caméra de qualité (au moins HD), micro omnidirectionnel, tableau lisible à distance.",
                  "Plateforme : Zoom, Microsoft Teams ou Google Meet avec partage d'écran, chat et sondages.",
                  "Pédagogie inclusive : activités équitables pour les deux groupes (présents et distants).",
                  "Profils adaptés : étudiants sport-études, personnes éloignées, formation continue, situations de crise.",
                  "Limite : ne s'adapte pas à tous les types de cours (travaux pratiques, labos, etc.).",
                ].map((pt) => <li key={pt}>{pt}</li>)}
              </ul>
            </div>

            {/* Classe inversée */}
            <div className="mt-5">
              <h3 className="text-base font-bold text-dark">
                🏫 Classe Inversée (Flipped Classroom)
              </h3>
              <p className="mt-2 text-sm leading-6 text-text">
                <strong>Principe : </strong>l&apos;élève visionne la capsule vidéo du cours à la maison →
                le temps de classe est libéré pour les exercices, projets collaboratifs et interactions
                personnalisées.
              </p>
              <div className="mt-3 overflow-x-auto">
                <table className="w-full text-sm text-text">
                  <thead>
                    <tr className="border-b border-border text-left">
                      {["Avantages", "Outils utilisés"].map((h) => (
                        <th key={h} className="pb-2 pr-4 font-semibold text-dark last:pr-0">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {[
                      { a: "Apprentissage autonome hors classe", o: "Capsules vidéo : EDpuzzle, YouTube, Loom" },
                      { a: "Différenciation pédagogique facilitée", o: "Suivi : Moodle, Google Classroom" },
                      { a: "Temps d'interaction maximisé en classe", o: "Activités collaboratives : Google Docs, Padlet" },
                      { a: "Rétroaction personnalisée possible", o: "Évaluation : Kahoot, H5P, Quizlet" },
                    ].map(({ a, o }) => (
                      <tr key={a}>
                        <td className="py-2 pr-4 text-text">{a}</td>
                        <td className="py-2 text-text-light">{o}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          

        </div>
      </div>
    </main>
  );
}