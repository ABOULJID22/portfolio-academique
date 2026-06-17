import { modulePages } from '../../data/portfolioData';

const slug = 's1-gestion';


export default function S1GestionPage() {
  const module = modulePages.find((item) => item.slug === slug);
  const moduleTitle = module?.title ?? 'Gestion des Apprentissages';
  const resources = module?.resources ?? [];

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

        <section className="mb-8 grid gap-6 lg:grid-cols-3">
          <article className="lg:col-span-2">
            {/* ── En-tête ── */}
            <div className="rounded-[16px] border border-border bg-bg p-6 sm:p-8">
              <div className="text-xs font-bold uppercase tracking-[0.16em] text-accent">
                CRMEF Marrakech · 2025-2026
              </div>
              <h1 className="mt-2 text-2xl font-extrabold text-dark sm:text-3xl">
                Module : {moduleTitle}
              </h1>
              <p className="mt-3 text-sm leading-7 text-text">
                {module?.summary ?? 'Gestion de classe, du temps et des interactions pédagogiques.'}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {[
                  'Gestion pédagogique',
                  "Situations d'apprentissage",
                  'Styles et méthodes',
                  'Motivation pédagogique',
                  'Communication pédagogique',
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
              SECTION 1 — QU'EST-CE QUE LA GESTION ?
          ══════════════════════════════════════════════ */}
          <section className="soft-card p-6 sm:p-8">
            <h2 className="text-xl font-extrabold text-dark">1. Qu&apos;est-ce que la Gestion ?</h2>

            <div className="mt-4 grid gap-4 sm:grid-cols-3">
              {[
                {
                  titre: "Sens général",
                  texte:
                    "La gestion consiste à planifier, organiser, diriger et contrôler des ressources (humaines, matérielles, temporelles) en vue d'atteindre des objectifs fixés.",
                },
                {
                  titre: "Sens pédagogique",
                  texte:
                    "L'art de créer et de maintenir, dans la classe, les conditions nécessaires à un enseignement efficace et à un apprentissage de qualité. Elle englobe toutes les décisions prises avant, pendant et après la séance. (Clermont, 1997)",
                },
                {
                  titre: "En contexte informatique",
                  texte:
                    "Capacité de l'enseignant à piloter simultanément les dimensions techniques (matériel, logiciel), didactiques (contenus, démarches) et humaines (groupes, interactions) propres aux séances en salle informatique.",
                },
              ].map(({ titre, texte }) => (
                <div key={titre} className="rounded-[12px] border border-border bg-bg p-4 text-sm">
                  <p className="font-bold text-primary-light">{titre}</p>
                  <p className="mt-2 leading-6 text-text">{texte}</p>
                </div>
              ))}
            </div>

            {/* 3 dimensions */}
            <div className="mt-5">
              <h3 className="text-base font-bold text-dark">▶ Les 3 Dimensions de la Gestion</h3>
              <div className="mt-3 overflow-x-auto">
                <table className="w-full text-sm text-text">
                  <thead>
                    <tr className="border-b border-border text-left">
                      {["Dimension", "Composantes", "Enjeux en informatique"].map((h) => (
                        <th key={h} className="pb-2 pr-4 font-semibold text-dark last:pr-0">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {[
                      {
                        d: "Pédagogique",
                        c: "Méthodes, stratégies d'enseignement, différenciation, motivation.",
                        e: "Choisir entre démonstration, TP guidés, apprentissage par problèmes.",
                      },
                      {
                        d: "Didactique",
                        c: "Transposition didactique, progression des contenus, adaptation.",
                        e: "Décomposer un algorithme complexe en étapes accessibles.",
                      },
                      {
                        d: "Relationnelle",
                        c: "Communication, climat de classe, gestion des conflits.",
                        e: "Maintenir un cadre bienveillant en salle informatique malgré la dispersion.",
                      },
                    ].map(({ d, c, e }) => (
                      <tr key={d}>
                        <td className="py-2 pr-4 font-medium text-dark">{d}</td>
                        <td className="py-2 pr-4 leading-6">{c}</td>
                        <td className="py-2 leading-6">{e}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* ══════════════════════════════════════════════
              SECTION 2 — POURQUOI GÉRER ?
          ══════════════════════════════════════════════ */}
          <section className="soft-card p-6 sm:p-8">
            <h2 className="text-xl font-extrabold text-dark">2. Pourquoi Gérer ?</h2>
            <p className="mt-3 text-sm leading-7 text-text">
              Une gestion efficace de classe existe dans les salles où le temps, l&apos;espace et le
              matériel sont utilisés de manière à maximiser les possibilités des élèves et à favoriser
              leur engagement scolaire.
            </p>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {/* Objectifs */}
              <div className="rounded-[12px] border border-border bg-bg p-4">
                <p className="text-sm font-bold text-dark">Objectifs de la gestion</p>
                <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-text">
                  {[
                    "Instaurer un climat de classe favorable à l'apprentissage.",
                    "Organiser l'espace, le temps et le matériel de façon optimale.",
                    "Assurer la cohérence et la continuité entre les différentes phases de la séance.",
                    "Réguler les interactions et maintenir l'attention des apprenants (cible : 80-90 % d'engagement).",
                    "Prévenir et gérer les comportements perturbateurs.",
                    "Développer l'autonomie, la responsabilisation et les habiletés sociales des élèves.",
                  ].map((pt) => <li key={pt}>{pt}</li>)}
                </ul>
              </div>

              {/* Notions associées */}
              <div className="rounded-[12px] border border-border bg-bg p-4">
                <p className="text-sm font-bold text-dark">Notions associées</p>
                <div className="mt-3 space-y-2 text-sm text-text">
                  {[
                    { n: "Planification", r: "Anticiper les activités d'enseignement-apprentissage — précède la gestion." },
                    { n: "Organisation", r: "Structurer les ressources, groupes et tâches pour que la séance se déroule dans de bonnes conditions." },
                    { n: "Régulation", r: "Ajuster en temps réel les activités en fonction des réactions des apprenants." },
                    { n: "Évaluation", r: "Porter un jugement sur les apprentissages pour réorienter les pratiques." },
                  ].map(({ n, r }) => (
                    <div key={n} className="rounded-[8px] border border-border bg-white px-3 py-2">
                      <span className="font-semibold text-dark">{n} : </span>{r}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* ══════════════════════════════════════════════
              SECTION 3 — COMPOSANTES DE LA GESTION
          ══════════════════════════════════════════════ */}
          <section className="soft-card p-6 sm:p-8">
            <h2 className="text-xl font-extrabold text-dark">
              3. Principes de Base — 5 Composantes de la Gestion
            </h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  titre: "◆ Administration des ressources",
                  items: [
                    "Gestion du temps (prescrit → disponible → d'apprentissage → d'engagement).",
                    "Gestion de l'espace (physique et numérique/ENT).",
                    "Gestion des ressources matérielles, humaines et technologiques.",
                  ],
                },
                {
                  titre: "◆ Établissement des attentes claires",
                  items: [
                    "Règles de classe / charte de travail.",
                    "Consignes et attentes explicites.",
                    "Routines et procédures stables.",
                    "Enseignement des comportements attendus.",
                  ],
                },
                {
                  titre: "◆ Développement des relations positives",
                  items: [
                    "Relation élève-enseignant(e) bienveillante.",
                    "Relation élève-élève et dynamique de groupe.",
                    "Lien avec les parents.",
                  ],
                },
                {
                  titre: "◆ Captation et maintien de l'attention",
                  items: [
                    "Activités d'enseignement-apprentissage engageantes.",
                    "Perception de la tâche (intérêt, signification, utilité).",
                    "Renforcement des comportements d'engagement.",
                  ],
                },
                {
                  titre: "◆ Intervention face à l'indiscipline",
                  items: [
                    "Prévenir les comportements perturbateurs.",
                    "Développer l'autocontrôle et la responsabilisation.",
                    "Contrôler et maîtriser les comportements perturbateurs si nécessaire.",
                  ],
                },
              ].map(({ titre, items }) => (
                <div key={titre} className="rounded-[12px] border border-border bg-bg p-4">
                  <p className="text-sm font-bold text-dark">{titre}</p>
                  <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-6 text-text">
                    {items.map((i) => <li key={i}>{i}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* ══════════════════════════════════════════════
              SECTION 4 — FONCTIONS DE LA GESTION
          ══════════════════════════════════════════════ */}
          <section className="soft-card p-6 sm:p-8">
            <h2 className="text-xl font-extrabold text-dark">4. Les Fonctions de la Gestion</h2>
            <p className="mt-3 text-sm leading-7 text-text">
              Ces quatre fonctions sont interdépendantes. Un enseignant efficace les mobilise de façon
              flexible et articulée.
            </p>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full text-sm text-text">
                <thead>
                  <tr className="border-b border-border text-left">
                    {["Fonction", "Quand ?", "Actions clés en informatique"].map((h) => (
                      <th key={h} className="pb-2 pr-4 font-semibold text-dark last:pr-0">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {[
                    {
                      f: "Planifier",
                      q: "Avant la séance",
                      a: "Fixer les objectifs, préparer ressources numériques, prévoir le phasage, anticiper les difficultés.",
                    },
                    {
                      f: "Organiser",
                      q: "Avant + pendant",
                      a: "Structurer l'espace (postes), groupes (binômes, groupes), tâches, ressources numériques partagées.",
                    },
                    {
                      f: "Animer",
                      q: "Pendant la séance",
                      a: "Conduire activités, réguler interactions, différencier, étayer/désétayer, maintenir l'attention.",
                    },
                    {
                      f: "Évaluer",
                      q: "Avant, pendant, après",
                      a: "Diagnostique → Formative → Sommative → Auto-évaluation des apprenants.",
                    },
                  ].map(({ f, q, a }) => (
                    <tr key={f}>
                      <td className="py-2 pr-4 font-bold text-primary-light">{f}</td>
                      <td className="py-2 pr-4 text-text-light">{q}</td>
                      <td className="py-2 leading-6">{a}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* ══════════════════════════════════════════════
              SECTION 5 — TYPOLOGIE DE LA GESTION
          ══════════════════════════════════════════════ */}
          <section className="soft-card p-6 sm:p-8">
            <h2 className="text-xl font-extrabold text-dark">5. Typologie de la Gestion</h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  titre: "Gestion de la matière",
                  desc: "Sélectionner, structurer, séquencer et transmettre les contenus disciplinaires (transposition didactique).",
                  items: [
                    "Choisir les notions essentielles.",
                    "Progresser du simple au complexe.",
                    "Reformuler les savoirs experts en activités accessibles.",
                    "Gérer les prérequis et exploiter les erreurs comme tremplin.",
                    "Actualiser régulièrement les contenus (langages, outils).",
                  ],
                },
                {
                  titre: "Gestion pédagogique",
                  desc: "Art d'administration relationnelle et formationnelle de l'enseignement : méthodes, techniques et principes adaptés.",
                  items: [
                    "Couvre depuis la planification jusqu'aux outputs de l'action éducative.",
                    "Inclut la relation enseignant-apprenants et la dynamique de groupe.",
                  ],
                },
                {
                  titre: "Gestion didactique",
                  desc: "Administration de toutes les actions et processus instaurés en classe pour des fins d'apprentissage.",
                  items: [
                    "Fondée sur la planification et préparation minutieuses.",
                    "Incite les élèves à construire les apprentissages via des situations-problèmes complexes.",
                  ],
                },
                {
                  titre: "Gestion de l'espace",
                  desc: "Organisation et utilisation optimale de l'environnement physique et numérique de travail.",
                  items: [
                    "Salle informatique : disposition des postes, accès matériel.",
                    "Espace numérique : ENT, dossiers partagés, réseau établissement.",
                    "Outils collaboratifs : documents partagés, wikis, forums.",
                  ],
                },
                {
                  titre: "Gestion du temps",
                  desc: "Planifier, répartir et réguler le temps pour optimiser le temps d'apprentissage effectif.",
                  items: [
                    "Phasage : accueil (5 min) → mise en situation (10 min) → activité principale (30-40 min) → synthèse (10 min) → clôture (5 min).",
                    "Minuteur projeté, consignes écrites, activités de dépassement pour les rapides.",
                    "Anticiper les problèmes techniques (plan B si réseau défaillant).",
                  ],
                },
                {
                  titre: "Gestion des supports didactiques",
                  desc: "Choisir et exploiter les aides et supports pédagogiques selon des critères définis.",
                  items: [
                    "Critères : adéquation aux objectifs, accessibilité, faisabilité technique, attractivité, interactivité.",
                    "Types : imprimés (fiches TP), numériques (slides, vidéos), en ligne (Scratch, Python.org), collaboratifs.",
                  ],
                },
              ].map(({ titre, desc, items }) => (
                <div key={titre} className="rounded-[12px] border border-border bg-bg p-4 text-sm">
                  <p className="font-bold text-dark">{titre}</p>
                  <p className="mt-1 italic text-primary-light">{desc}</p>
                  <ul className="mt-3 list-disc space-y-1 pl-5 leading-6 text-text">
                    {items.map((it) => <li key={it}>{it}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* ══════════════════════════════════════════════
              SECTION 6 — SITUATIONS D'APPRENTISSAGE (APC)
          ══════════════════════════════════════════════ */}
          <section className="soft-card p-6 sm:p-8">
            <h2 className="text-xl font-extrabold text-dark">
              6. Gestion des Situations d&apos;Apprentissage en Informatique (APC)
            </h2>
            <p className="mt-3 text-sm leading-7 text-text">
              Une situation d&apos;apprentissage est un ensemble de conditions et d&apos;activités organisées
              par l&apos;enseignant pour permettre aux apprenants d&apos;acquérir des connaissances ou des
              compétences. Elle place les élèves dans un contexte qui favorise la compréhension, la
              réflexion et la pratique.
            </p>

            <div className="mt-5 space-y-4">
              {[
                {
                  titre: "Situations d'exploration",
                  objectif:
                    "Mettre l'apprenant en contact avec un nouvel objet d'étude pour susciter sa curiosité, faire émerger ses représentations initiales et formuler des hypothèses avant l'apprentissage structuré.",
                  items: [
                    "Choisir un support concret, motivant et accessible.",
                    "Poser des questions ouvertes, faire parler les apprenants.",
                    "Guider sans donner immédiatement la solution.",
                    "Organiser la mise en commun et assurer la transition vers l'apprentissage.",
                    "Contexte : au début d'une leçon, avant un TP ou une nouvelle notion.",
                  ],
                },
                {
                  titre: "Situations didactiques",
                  objectif:
                    "Concevoir et conduire des situations structurées où l'apprenant construit ses connaissances à travers une démarche organisée (questionnement, hypothèses, généralisation).",
                  items: [
                    "Présenter une situation-problème claire et contextualisée.",
                    "Analyser et valider la compréhension du problème.",
                    "Recueillir et filtrer les hypothèses des apprenants.",
                    "Déduire et généraliser la notion enseignée.",
                    "Réinvestir dans des exercices pratiques.",
                  ],
                },
                {
                  titre: "Situations d'évaluation",
                  objectif:
                    "Concevoir des situations complexes et significatives pour évaluer les compétences de manière authentique.",
                  items: [
                    "Évaluation diagnostique : identifier les prérequis avant la séance.",
                    "Évaluation formative : réguler les apprentissages en temps réel.",
                    "Évaluation sommative : valider les acquis à la fin d'une séquence.",
                    "Traiter l'erreur positivement comme point de départ pour la remédiation.",
                    "Communiquer les critères d'évaluation aux apprenants.",
                  ],
                },
                {
                  titre: "Travaux pratiques (TP)",
                  objectif:
                    "Organiser et animer des séances de manipulation en salle informatique où les apprenants réalisent des tâches concrètes sur machine.",
                  items: [
                    "Préparer les postes, logiciels et fichiers à l'avance.",
                    "Distribuer des fiches consignes claires et structurées.",
                    "Circuler, observer et étayer individuellement.",
                    "Gérer les élèves rapides (tâches complémentaires) et les élèves en difficulté.",
                    "Prévoir un plan B en cas de panne technique.",
                  ],
                },
                {
                  titre: "Situations complexes",
                  objectif:
                    "Proposer des situations nécessitant la mobilisation de plusieurs ressources et compétences pour résoudre un problème authentique. L'apprenant agit de façon autonome sans indication de l'ordre d'utilisation des ressources.",
                  items: [
                    "Analyser le problème, identifier ses composantes et contraintes.",
                    "Formuler des hypothèses (brainstorming sans jugement initial).",
                    "Filtrer et évaluer la faisabilité des hypothèses.",
                    "Mettre en commun, généraliser et appliquer la solution.",
                    "Entraîner dans des contextes variés pour transférer les compétences.",
                  ],
                },
                {
                  titre: "Situations intégrant les TIC",
                  objectif:
                    "Intégrer les Technologies de l'Information et de la Communication dans les activités d'enseignement-apprentissage pour enrichir les expériences et développer les compétences numériques.",
                  items: [
                    "Utiliser des supports numériques interactifs (simulations, logiciels éducatifs).",
                    "Exploiter les outils collaboratifs en ligne (documents partagés, forums).",
                    "Proposer des ressources en ligne adaptées (Scratch, Python.org, MOOCs).",
                    "Enseigner l'utilisation critique et responsable des technologies.",
                    "Différencier via les plateformes numériques selon le rythme des apprenants.",
                  ],
                },
              ].map(({ titre, objectif, items }) => (
                <div key={titre} className="rounded-[12px] border border-border bg-bg p-5">
                  <p className="text-base font-bold text-dark">{titre}</p>
                  <p className="mt-2 rounded-[8px] bg-white px-3 py-2 text-sm italic text-primary-light">
                    {objectif}
                  </p>
                  <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-text">
                    {items.map((it) => <li key={it}>{it}</li>)}
                  </ul>
                </div>
              ))}

              {/* Articulation d'une séance complète */}
              <div className="rounded-[12px] border border-border bg-white p-5">
                <p className="text-base font-bold text-dark">
                  Articulation d&apos;une séance complète
                </p>
                <div className="relative mt-4 pl-5">
                  <span
                    aria-hidden
                    className="absolute left-[7px] top-2 h-[calc(100%-12px)] w-[2px] rounded-full bg-border"
                  />
                  {[
                    { e: "Situation d'exploration", r: "Active les représentations initiales." },
                    { e: "Situation didactique", r: "Construit les nouvelles connaissances." },
                    { e: "Travaux pratiques", r: "Ancre les savoirs dans la manipulation." },
                    { e: "Évaluation formative", r: "Régule et consolide." },
                    { e: "Synthèse", r: "Institutionnalise le savoir et prépare la séance suivante." },
                  ].map(({ e, r }) => (
                    <div key={e} className="relative pb-3 last:pb-0">
                      <span
                        aria-hidden
                        className="absolute -left-[13px] top-[5px] h-3 w-3 rounded-full border-2 border-primary-light bg-white"
                      />
                      <div className="rounded-[8px] border border-border bg-bg px-3 py-2 text-sm text-text">
                        <span className="font-semibold text-dark">{e} → </span>
                        {r}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* ══════════════════════════════════════════════
              SECTION 7 — STYLES D'ENSEIGNEMENT & D'APPRENTISSAGE
          ══════════════════════════════════════════════ */}
          <section className="soft-card p-6 sm:p-8">
            <h2 className="text-xl font-extrabold text-dark">
              7. Styles d&apos;Enseignement et Styles d&apos;Apprentissage
            </h2>

            {/* Styles d'enseignement */}
            <div className="mt-5">
              <h3 className="text-base font-bold text-dark">▶ Styles d&apos;Enseignement</h3>
              <p className="mt-2 text-sm leading-6 text-text">
                Le style d&apos;enseignement désigne la manière caractéristique dont un enseignant organise,
                anime et régule les situations d&apos;apprentissage.
              </p>
              <div className="mt-3 overflow-x-auto">
                <table className="w-full text-sm text-text">
                  <thead>
                    <tr className="border-b border-border text-left">
                      {["Style", "Caractéristiques", "Avantages"].map((h) => (
                        <th key={h} className="pb-2 pr-4 font-semibold text-dark last:pr-0">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {[
                      {
                        s: "Directif / Transmissif",
                        c: "L'enseignant transmet le savoir de façon structurée. Cours magistral.",
                        a: "Efficace pour présenter des notions nouvelles, gain de temps.",
                      },
                      {
                        s: "Démonstratif",
                        c: "Montrer → Faire faire → Faire formuler. L'enseignant montre les étapes.",
                        a: "Très adapté aux TP informatiques : manipulation guidée.",
                      },
                      {
                        s: "Interrogatif",
                        c: "Questions pour faire construire le savoir par l'apprenant (classe inversée).",
                        a: "Active les prérequis, favorise la réflexion critique.",
                      },
                      {
                        s: "Facilitateur / Découverte",
                        c: "L'enseignant crée les conditions, l'apprenant expérimente librement.",
                        a: "Développe l'autonomie et la créativité.",
                      },
                      {
                        s: "Collaboratif",
                        c: "Travaux en groupes, co-construction des savoirs.",
                        a: "Renforce les compétences sociales et l'entraide.",
                      },
                      {
                        s: "Par projet",
                        c: "Réalisation d'un projet concret structuré : recherche → planification → réalisation → évaluation.",
                        a: "Développe compétences transversales et motivation intrinsèque.",
                      },
                    ].map(({ s, c, a }) => (
                      <tr key={s}>
                        <td className="py-2 pr-4 font-medium text-dark">{s}</td>
                        <td className="py-2 pr-4 leading-6">{c}</td>
                        <td className="py-2 leading-6">{a}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Styles d'apprentissage */}
            <div className="mt-6">
              <h3 className="text-base font-bold text-dark">▶ Styles d&apos;Apprentissage</h3>
              <p className="mt-2 text-sm leading-6 text-text">
                Les préférences individuelles des apprenants dans la façon dont ils perçoivent et
                traitent l&apos;information.
              </p>
              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                {[
                  {
                    s: "👁️ Visuel",
                    p: "Apprend par l'image, les schémas, les couleurs.",
                    st: "Diagrammes, cartes mentales, supports visuels, vidéos.",
                  },
                  {
                    s: "🎧 Auditif",
                    p: "Apprend par l'écoute, les explications orales.",
                    st: "Exposés, discussions, commentaires audio, lectures à voix haute.",
                  },
                  {
                    s: "🤲 Kinesthésique",
                    p: "Apprend par la manipulation, l'action.",
                    st: "Travaux pratiques, manipulation directe, jeux de rôle, projets.",
                  },
                  {
                    s: "📖 Lecture / Écriture",
                    p: "Apprend par la lecture et la prise de notes.",
                    st: "Fiches de cours, résumés, exercices écrits structurés.",
                  },
                ].map(({ s, p, st }) => (
                  <div key={s} className="rounded-[12px] border border-border bg-bg p-4 text-sm">
                    <p className="font-bold text-dark">{s}</p>
                    <p className="mt-1 italic text-text-light">{p}</p>
                    <p className="mt-2 text-text">
                      <span className="font-semibold">Stratégies : </span>{st}
                    </p>
                  </div>
                ))}
              </div>
              <p className="mt-3 rounded-[10px] bg-bg px-4 py-3 text-sm leading-6 text-text">
                💡 Un enseignant efficace ne se limite pas à un seul style : il varie ses approches pour
                répondre à la diversité des profils{" "}
                <span className="font-semibold">(principe de différenciation pédagogique)</span>.
              </p>
            </div>
          </section>

          {/* ══════════════════════════════════════════════
              SECTION 8 — MÉTHODES D'ENSEIGNEMENT
          ══════════════════════════════════════════════ */}
          <section className="soft-card p-6 sm:p-8">
            <h2 className="text-xl font-extrabold text-dark">8. Méthodes d&apos;Enseignement</h2>
            <p className="mt-3 text-sm leading-7 text-text">
              Une méthode d&apos;enseignement est un ensemble structuré de procédés, de techniques et de
              démarches mis en œuvre par l&apos;enseignant pour atteindre les objectifs pédagogiques fixés.
            </p>
            <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  num: "1",
                  titre: "Résolution de problèmes",
                  desc: "Partir d'un problème concret pour développer compétences et réflexion critique.",
                  etapes: [
                    "Analyser et valider le problème.",
                    "Formuler des hypothèses (brainstorming).",
                    "Filtrer les hypothèses selon des critères.",
                    "Mettre en commun et généraliser la solution.",
                    "Entraîner dans des contextes variés.",
                  ],
                },
                {
                  num: "2",
                  titre: "Démonstrative",
                  desc: "L'enseignant détermine un chemin pédagogique structuré pour transmettre un savoir-faire.",
                  etapes: [
                    "Montrer : exécuter la procédure complète en expliquant (quoi, comment, pourquoi).",
                    "Faire faire : les apprenants reproduisent sous supervision directe.",
                    "Faire dire : chaque apprenant reformule les étapes à voix haute.",
                  ],
                },
                {
                  num: "3",
                  titre: "Découverte",
                  desc: "L'enseignant crée un scénario pédagogique ; les apprenants apprennent par essais-erreurs.",
                  etapes: [
                    "Faire faire à l'apprenant : expérimentation libre, tâtonnements.",
                    "Faire dire à l'apprenant : mise en commun des observations et découvertes.",
                    "L'enseignant reformule : synthèse et validation scientifique.",
                  ],
                },
                {
                  num: "4",
                  titre: "Interrogative (classe inversée)",
                  desc: "Les apprenants étudient le cours à domicile. En classe, l'enseignant approfondit par le questionnement.",
                  etapes: [
                    "Questionnement diagnostique sur le cours.",
                    "Questionnement approfondi (analytique : pourquoi ? exemples inversés ?).",
                    "Transition vers activités pratiques, travaux de groupe.",
                  ],
                },
                {
                  num: "5",
                  titre: "Ludique (jeux pédagogiques)",
                  desc: "L'enseignant crée un cadre ludique mobilisant essais, collaboration et plaisir.",
                  etapes: [
                    "Faire faire : quiz, jeu de rôle, défis en équipe.",
                    "Faire dire : débriefing — verbaliser actions, succès, erreurs.",
                    "L'enseignant reformule : reliance ludique ↔ objectifs pédagogiques.",
                  ],
                },
                {
                  num: "6",
                  titre: "Par projet",
                  desc: "Réalisation collaborative d'un projet concret structuré en plusieurs phases.",
                  etapes: [
                    "Recherche et définition du projet.",
                    "Planification des tâches et répartition des rôles.",
                    "Réalisation (production concrète).",
                    "Présentation et évaluation du projet.",
                  ],
                },
              ].map(({ num, titre, desc, etapes }) => (
                <div key={num} className="rounded-[12px] border border-border bg-bg p-4 text-sm">
                  <div className="flex items-center gap-2">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary-light/10 text-xs font-bold text-primary-light">
                      {num}
                    </span>
                    <p className="font-bold text-dark">{titre}</p>
                  </div>
                  <p className="mt-2 italic text-text-light">{desc}</p>
                  <ul className="mt-3 list-disc space-y-1 pl-5 leading-6 text-text">
                    {etapes.map((e) => <li key={e}>{e}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* ══════════════════════════════════════════════
              SECTION 9 — LA MOTIVATION PÉDAGOGIQUE
          ══════════════════════════════════════════════ */}
          <section className="soft-card p-6 sm:p-8">
            <h2 className="text-xl font-extrabold text-dark">9. La Motivation Pédagogique</h2>
            <p className="mt-3 text-sm leading-7 text-text">
              L&apos;ensemble des facteurs internes et externes qui poussent un apprenant à s&apos;engager
              dans une activité d&apos;apprentissage, à persévérer et à fournir des efforts pour atteindre
              un objectif.
            </p>

            {/* Intrinsèque / Extrinsèque */}
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {[
                {
                  type: "Motivation Intrinsèque",
                  source: "Vient de l'intérieur de l'apprenant (curiosité, plaisir, intérêt).",
                  ex: "Un élève apprend la programmation parce qu'il aime découvrir comment fonctionnent les applications.",
                  color: "border-green-200 bg-green-50",
                  badge: "text-green-700",
                },
                {
                  type: "Motivation Extrinsèque",
                  source: "Vient de facteurs externes (notes, récompenses, éviter punitions).",
                  ex: "Un élève fait son exercice pour avoir une bonne note.",
                  color: "border-yellow-200 bg-yellow-50",
                  badge: "text-yellow-700",
                },
              ].map(({ type, source, ex, color, badge }) => (
                <div key={type} className={`rounded-[12px] border p-4 text-sm ${color}`}>
                  <p className={`font-bold ${badge}`}>{type}</p>
                  <p className="mt-1 text-text"><span className="font-semibold">Source : </span>{source}</p>
                  <p className="mt-1 text-text"><span className="font-semibold">Exemple : </span>{ex}</p>
                </div>
              ))}
            </div>

            {/* Rôle de l'enseignant */}
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[12px] border border-border bg-bg p-4">
                <p className="text-sm font-bold text-dark">▶ Rôle de l&apos;enseignant</p>
                <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-text">
                  {[
                    "Créer un climat de classe positif et bienveillant.",
                    "Proposer des activités variées et significatives (proches de la réalité).",
                    "Valoriser les efforts des apprenants.",
                    "Donner des objectifs clairs et relier les apprentissages à la vie réelle.",
                    "Donner un feedback positif et corriger de manière constructive.",
                  ].map((pt) => <li key={pt}>{pt}</li>)}
                </ul>
              </div>

              <div className="rounded-[12px] border border-border bg-bg p-4">
                <p className="text-sm font-bold text-dark">▶ Facteurs influençant la motivation</p>
                <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-text">
                  {[
                    "L'intérêt pour la matière.",
                    "Le climat de classe.",
                    "Les méthodes d'enseignement.",
                    "La relation enseignant-apprenant.",
                    "La perception de la réussite.",
                  ].map((pt) => <li key={pt}>{pt}</li>)}
                </ul>
              </div>
            </div>

            {/* Stratégies de motivation */}
            <div className="mt-5">
              <p className="text-sm font-bold text-dark">▶ Stratégies de motivation</p>
              <div className="mt-3 overflow-x-auto">
                <table className="w-full text-sm text-text">
                  <thead>
                    <tr className="border-b border-border text-left">
                      {["Stratégie", "Mise en œuvre"].map((h) => (
                        <th key={h} className="pb-2 pr-4 font-semibold text-dark last:pr-0">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {[
                      { s: "Varier les méthodes", m: "Travail en groupe, projets, résolution de problèmes, activités pratiques." },
                      { s: "Situations significatives", m: "Proposer des contextes proches de la réalité des élèves." },
                      { s: "Donner du sens", m: "Expliquer pourquoi on apprend une notion (utilité concrète)." },
                      { s: "Encourager la participation", m: "Poser des questions, favoriser les échanges, valoriser les idées." },
                      { s: "Feedback positif", m: "Encourager les efforts, corriger de manière constructive." },
                    ].map(({ s, m }) => (
                      <tr key={s}>
                        <td className="py-2 pr-4 font-medium text-dark">{s}</td>
                        <td className="py-2 leading-6">{m}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* ══════════════════════════════════════════════
              SECTION 10 — LA COMMUNICATION PÉDAGOGIQUE
          ══════════════════════════════════════════════ */}
          <section className="soft-card p-6 sm:p-8">
            <h2 className="text-xl font-extrabold text-dark">10. La Communication Pédagogique</h2>
            <p className="mt-3 text-sm leading-7 text-text">
              L&apos;ensemble des échanges verbaux et non verbaux qui se déroulent entre l&apos;enseignant et
              les apprenants dans le cadre de la situation d&apos;enseignement-apprentissage. Elle vise à
              transmettre des savoirs, construire des connaissances et favoriser l&apos;interaction
              pédagogique.
            </p>

            {/* Éléments de communication */}
            <div className="mt-5">
              <h3 className="text-base font-bold text-dark">
                ▶ Éléments de la Communication Pédagogique
              </h3>
              <div className="mt-3 overflow-x-auto">
                <table className="w-full text-sm text-text">
                  <thead>
                    <tr className="border-b border-border text-left">
                      {["Élément", "Rôle", "Exemples"].map((h) => (
                        <th key={h} className="pb-2 pr-4 font-semibold text-dark last:pr-0">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {[
                      { el: "Émetteur", r: "Transmet le message.", ex: "Enseignant (ou apprenant lors d'une présentation)." },
                      { el: "Récepteur", r: "Reçoit et interprète le message.", ex: "Les apprenants." },
                      { el: "Message", r: "Contenu de la communication.", ex: "Explications, consignes, questions, informations." },
                      { el: "Canal", r: "Moyen de transmission.", ex: "Oral, écrit, numérique, gestes et expressions." },
                      { el: "Feedback", r: "Réponse du récepteur (vérification).", ex: "Réponse à une question, participation, réaction." },
                    ].map(({ el, r, ex }) => (
                      <tr key={el}>
                        <td className="py-2 pr-4 font-bold text-primary-light">{el}</td>
                        <td className="py-2 pr-4 leading-6">{r}</td>
                        <td className="py-2 leading-6">{ex}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* 3 formes */}
            <div className="mt-5">
              <h3 className="text-base font-bold text-dark">▶ 3 Formes de Communication</h3>
              <div className="mt-3 grid gap-3 sm:grid-cols-3">
                {[
                  {
                    f: "Verbale",
                    d: "Utilise la parole et les mots.",
                    ex: "Explication de leçon, questions, discussion.",
                  },
                  {
                    f: "Non verbale",
                    d: "Gestes, expressions, langage du corps.",
                    ex: "Regard, posture, gestes, expressions du visage.",
                  },
                  {
                    f: "Paraverbale",
                    d: "Manière de parler.",
                    ex: "Ton, rythme, intonation, volume de la voix.",
                  },
                ].map(({ f, d, ex }) => (
                  <div key={f} className="rounded-[12px] border border-border bg-bg p-4 text-sm">
                    <p className="font-bold text-dark">{f}</p>
                    <p className="mt-1 italic text-text-light">{d}</p>
                    <p className="mt-2 text-text"><span className="font-semibold">Ex : </span>{ex}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Conditions d'une communication efficace */}
            <div className="mt-5 rounded-[12px] border border-border bg-bg p-4">
              <p className="text-sm font-bold text-dark">
                ▶ Conditions d&apos;une Communication Efficace
              </p>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-text">
                {[
                  "Utiliser un langage clair, simple et adapté au niveau des apprenants.",
                  "Encourager la participation et pratiquer l'écoute active.",
                  "Varier les supports pédagogiques.",
                  "Vérifier régulièrement la compréhension des élèves.",
                  "Instaurer un climat de confiance dans la classe.",
                  "Réduire les obstacles : bruit, langage complexe, mauvaise organisation, problèmes techniques.",
                ].map((pt) => <li key={pt}>{pt}</li>)}
              </ul>
            </div>
          </section>

         

        </div>
      </div>
    </main>
  );
}