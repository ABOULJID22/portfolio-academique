import { modulePages } from '../../data/portfolioData';

const slug = 's1-didactique-informatique';



export default function S1DidactiqueInformatiquePage(){
  const module = modulePages.find((item) => item.slug === slug);

  const getResourceLink = (resource) => {
    if (resource.href && resource.href !== '#') {
      return resource.href;
    }

    const query = `${module?.title ?? 'Didactique de l\'informatique'} ${resource.label} CRMEF`;
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
              <h1 className="mt-2 text-2xl font-extrabold text-dark sm:text-3xl">
                {module?.title ?? 'Didactique de l\'informatique'}
              </h1>
              <p className="mt-3 text-sm leading-7 text-text">
                Livret complet et detaille du module, avec les concepts fondamentaux de didactique, d&apos;epistemologie,
                de situations d&apos;apprentissage et de charge cognitive.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {[
                  'Didactique générale',
                  'Transposition didactique',
                  'Contrat didactique',
                  'Situation problème',
                  'Charge cognitive',
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

        <section className="mt-6 space-y-8">

          {/* ══════════════════════════════════════════════
              SECTION 1 — PÉDAGOGIE ET DIDACTIQUE
          ══════════════════════════════════════════════ */}
          <section className="soft-card p-6 sm:p-8">
            <h2 className="text-xl font-extrabold text-dark">
              1. Pédagogie et Didactique
            </h2>

            {/* Tableau comparatif */}
            <div className="mt-5 overflow-x-auto">
              <table className="w-full text-sm text-text" border="1">
                <thead>
                  <tr className="border-b border-border text-left">
                    <th className="pb-2 pr-4 font-semibold text-dark">Critère</th>
                    <th className="pb-2 pr-4 font-semibold text-primary-light">Didactique</th>
                    <th className="pb-2 font-semibold text-accent">Pédagogie</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {[
                    {
                      c: "Étymologie",
                      d: "Du grec didaktikόs : « doué pour l'enseignement »",
                      p: "Du grec paidagōgos : « celui qui conduit l'enfant »",
                    },
                    {
                      c: "Question centrale",
                      d: "Quoi enseigner ? Pourquoi ? Comment structurer le savoir ?",
                      p: "Comment accompagner et guider l'élève dans son apprentissage ?",
                    },
                    {
                      c: "Objet principal",
                      d: "Le savoir et sa transformation pour l'enseignement",
                      p: "La relation enseignant-élève, le développement global de l'élève",
                    },
                    {
                      c: "Portée",
                      d: "Spécifique à chaque discipline (didactique des maths, de l'info...)",
                      p: "Transversale : gestion de classe, motivation, différenciation",
                    },
                    {
                      c: "Exemples",
                      d: "Séquencer : variables → fonctions → récursivité en Python",
                      p: "Différenciation pédagogique, tutorat entre pairs, groupes de niveaux",
                    },
                  ].map(({ c, d, p }) => (
                    <tr key={c}>
                      <td className="py-2 pr-4 font-medium text-dark">{c}</td>
                      <td className="py-2 pr-4 leading-6">{d}</td>
                      <td className="py-2 leading-6">{p}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Complémentarité */}
            <div className="mt-5 rounded-[12px] border border-primary-light/20 bg-primary-light/5 p-4 text-sm leading-7 text-text">
              <p className="font-semibold text-dark">▶ Complémentarité indissociable</p>
              <p className="mt-1">
                Un enseignant exerce simultanément les deux : la didactique lui dit{" "}
                <em>quoi enseigner</em> et comment structurer le savoir ; la pédagogie lui dit
                comment <em>accompagner ses élèves</em> dans ce parcours.
              </p>
              <p className="mt-2">
                <span className="font-semibold">Exemple concret :</span> face à une classe
                hétérogène en informatique, la pédagogie guide la différenciation (groupes de
                niveaux, tutorat) tandis que la didactique guide le séquençage des notions.
              </p>
            </div>

            {/* Savoir vs Connaissance */}
            <div className="mt-5">
              <h3 className="text-base font-bold text-dark">▶ Savoir vs Connaissance</h3>
              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                {[
                  {
                    title: "Le Savoir",
                    rows: [
                      { k: "Nature", v: "Existe hors de tout sujet connaissant. Codifié dans des ouvrages de référence." },
                      { k: "Légitimation", v: "Légitimé par une institution qui le produit." },
                      { k: "Remarque", v: "Processus d'institutionnalisation requis." },
                    ],
                  },
                  {
                    title: "La Connaissance",
                    rows: [
                      { k: "Nature", v: "Propre à chaque individu — ce que l'élève s'est approprié." },
                      { k: "Légitimation", v: "Vit dans une situation qui la caractérise." },
                      { k: "Remarque", v: "Peut être erronée — base pour le diagnostic didactique." },
                    ],
                  },
                ].map(({ title, rows }) => (
                  <div key={title} className="rounded-[12px] border border-border bg-bg p-4">
                    <p className="text-sm font-bold text-dark">{title}</p>
                    <div className="mt-2 space-y-1.5 text-sm text-text">
                      {rows.map(({ k, v }) => (
                        <p key={k}>
                          <span className="font-semibold">{k} : </span>{v}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ══════════════════════════════════════════════
              SECTION 2 — ÉPISTÉMOLOGIE DE L'INFORMATIQUE
          ══════════════════════════════════════════════ */}
          <section className="soft-card p-6 sm:p-8">
            <h2 className="text-xl font-extrabold text-dark">
              2. Épistémologie de l&apos;Informatique
            </h2>
            <p className="mt-3 text-sm leading-7 text-text">
              L&apos;épistémologie est la branche de la philosophie qui étudie la nature, les méthodes
              et la validité de la connaissance scientifique. Appliquée à l&apos;informatique, elle
              aide l&apos;enseignant à comprendre ce qu&apos;est la discipline et comment en enseigner
              les contenus de façon réfléchie.
            </p>

            {/* 3 dimensions */}
            <div className="mt-5">
              <h3 className="text-base font-bold text-dark">
                ▶ L&apos;informatique : Science, Technologie ou Art ?
              </h3>
              <div className="mt-3 grid gap-3 sm:grid-cols-3">
                {[
                  { title: "Science fondamentale", desc: "Algorithmique, théorie de l'information, calculabilité." },
                  { title: "Ingénierie", desc: "Conception de systèmes, programmation, architecture." },
                  { title: "Pratique sociale & créative", desc: "Impact sur la société, création d'applications, résolution de problèmes concrets." },
                ].map(({ title, desc }) => (
                  <div key={title} className="rounded-[12px] border border-border bg-bg p-4">
                    <p className="text-sm font-bold text-primary-light">{title}</p>
                    <p className="mt-1 text-sm leading-6 text-text">{desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Types de connaissances */}
            <div className="mt-5">
              <h3 className="text-base font-bold text-dark">▶ Types de connaissances produites</h3>
              <div className="mt-3 grid gap-2 sm:grid-cols-2">
                {[
                  { k: "Concepts abstraits", v: "algorithme, information, complexité, abstraction, récursivité." },
                  { k: "Artefacts concrets", v: "logiciels, systèmes, protocoles, applications." },
                  { k: "Méthodes", v: "décomposition, reconnaissance de motifs, généralisation." },
                  { k: "Modèles", v: "simulation, bases de données, intelligence artificielle." },
                  { k: "Normes sociales", v: "formats de fichiers, protocoles de communication, licences open source." },
                ].map(({ k, v }) => (
                  <div key={k} className="flex gap-2 rounded-[10px] border border-border bg-bg px-3 py-2 text-sm text-text">
                    <span className="shrink-0 font-semibold text-dark">{k} :</span>
                    <span>{v}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 6 approches épistémologiques */}
            <div className="mt-5">
              <h3 className="text-base font-bold text-dark">
                ▶ 6 Approches épistémologiques
              </h3>
              <div className="mt-3 space-y-3">
                {[
                  {
                    approche: "Mécaniste",
                    principe: "L'ordinateur au centre — exécution déterministe, syntaxe, mécanismes internes.",
                    forts: "Rigueur, compréhension fine de la machine.",
                    limites: "Réduit l'informatique à l'exécution mécanique, peut démotiver.",
                    posture: "Transmetteur : il montre, explique, corrige.",
                  },
                  {
                    approche: "Cognitive",
                    principe: "Informatique = science de la résolution de problèmes et de la modélisation.",
                    forts: "Développe l'autonomie, favorise la créativité.",
                    limites: "Peut négliger les aspects techniques, abstraction excessive.",
                    posture: "Facilitateur : il pose des défis, guide sans donner la solution.",
                  },
                  {
                    approche: "Constructiviste",
                    principe: "Apprentissage par construction progressive ; erreurs = occasions d'apprendre.",
                    forts: "Apprentissage durable, développe la métacognition.",
                    limites: "Chronophage, nécessite un guidage fin.",
                    posture: "Accompagnateur : observe, identifie les obstacles, aide ciblée.",
                  },
                  {
                    approche: "Socio-constructiviste",
                    principe: "On apprend mieux en collaborant ; conflit socio-cognitif fait progresser.",
                    forts: "Compétences transversales, motivation par entraide.",
                    limites: "Bonne gestion de classe requise, évaluation individuelle complexe.",
                    posture: "Médiateur : organise les interactions, facilite les échanges.",
                  },
                  {
                    approche: "Socio-culturelle",
                    principe: "Informatique = pratique sociale et politique ; enjeux éthiques et citoyens.",
                    forts: "Esprit critique, contextualise, donne du sens.",
                    limites: "Perçue éloignée de la technique, culture générale requise.",
                    posture: "Enseignant citoyen critique : questionne les usages des technologies.",
                  },
                  {
                    approche: "Créative",
                    principe: "Informatique = espace de création et d'expression.",
                    forts: "Grande motivation, valorise les productions personnelles.",
                    limites: "Risque de négliger les fondamentaux, évaluation subjective.",
                    posture: "Coach créatif : encourage, valorise les idées originales.",
                  },
                ].map(({ approche, principe, forts, limites, posture }) => (
                  <div key={approche} className="rounded-[12px] border border-border bg-bg p-4 text-sm">
                    <p className="font-bold text-primary-light">{approche}</p>
                    <p className="mt-1 text-text"><span className="font-semibold text-dark">Principe : </span>{principe}</p>
                    <div className="mt-2 grid gap-1 sm:grid-cols-3">
                      <p className="text-text"><span className="font-semibold text-dark">✓ Points forts : </span>{forts}</p>
                      <p className="text-text"><span className="font-semibold text-dark">✗ Limites : </span>{limites}</p>
                      <p className="text-text"><span className="font-semibold text-dark">Posture : </span>{posture}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Histoire */}
            <div className="mt-5">
              <h3 className="text-base font-bold text-dark">▶ Histoire de l&apos;informatique — Jalons clés</h3>
              <div className="relative mt-3 space-y-0 pl-5">
                <span aria-hidden className="absolute left-[7px] top-2 h-[calc(100%-12px)] w-[2px] rounded-full bg-border" />
                {[
                  { y: "Antiquité", t: "Abaques babyloniens, bouliers chinois." },
                  { y: "XVIIe s.", t: "Machine à calculer de Pascal et Leibniz." },
                  { y: "XIXe s.", t: "Machine analytique de Charles Babbage (précurseur de l'ordinateur)." },
                  { y: "1946", t: "ENIAC — premier ordinateur électronique programmable (Eckert & Mauchly)." },
                  { y: "1970s", t: "Premiers ordinateurs personnels (Apple II, Commodore PET, IBM)." },
                  { y: "1989", t: "Invention du World Wide Web par Tim Berners-Lee." },
                  { y: "Aujourd'hui", t: "IA, informatique quantique, Internet des objets." },
                ].map(({ y, t }) => (
                  <div key={y} className="relative pb-3 last:pb-0">
                    <span aria-hidden className="absolute -left-[13px] top-[5px] h-3 w-3 rounded-full border-2 border-primary-light bg-white" />
                    <div className="rounded-[10px] border border-border bg-bg px-3 py-2 text-sm text-text">
                      <span className="font-bold text-dark">{y} : </span>{t}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ══════════════════════════════════════════════
              SECTION 3 — THÉORIES D'APPRENTISSAGE
          ══════════════════════════════════════════════ */}
          <section className="soft-card p-6 sm:p-8">
            <h2 className="text-xl font-extrabold text-dark">3. Les Théories d&apos;Apprentissage</h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {[
                {
                  title: "Behaviorisme",
                  auteurs: "Pavlov, Skinner",
                  def: "Apprentissage = modification observable du comportement par stimulus-réponse.",
                  points: [
                    "Stimulus → Réponse → Renforcement.",
                    "Rôle central de l'environnement extérieur.",
                    "Application : exercices répétitifs, feedback immédiat, quiz automatisés.",
                    "Limites : ignore les processus mentaux internes.",
                  ],
                },
                {
                  title: "Cognitivisme",
                  auteurs: "Piaget, Bruner",
                  def: "Apprentissage = traitement de l'information dans la mémoire.",
                  points: [
                    "L'apprenant traite, stocke et récupère l'information.",
                    "Mémoire à court terme (travail) → mémoire à long terme.",
                    "Application : schémas, cartes mentales, structurer la progression.",
                    "Importance des prérequis et des schémas cognitifs existants.",
                  ],
                },
                {
                  title: "Constructivisme",
                  auteurs: "Piaget, Vygotski",
                  def: "Apprentissage = construction active de connaissances par l'apprenant.",
                  points: [
                    "On apprend en faisant, en manipulant, en expérimentant.",
                    "Les erreurs sont des étapes normales du processus d'apprentissage.",
                    "Application : TP, situations-problèmes, essais-erreurs en programmation.",
                    "Zone proximale de développement : ce que l'élève peut faire avec aide.",
                  ],
                },
                {
                  title: "Connectivisme",
                  auteurs: "Siemens, 2005",
                  def: "Apprentissage = création de connexions dans des réseaux numériques.",
                  points: [
                    "Savoir distribué dans des réseaux humains et numériques.",
                    "Capacité à naviguer et filtrer l'information est une compétence clé.",
                    "Application : apprentissage en ligne, MOOCs, réseaux collaboratifs.",
                    "Adapté au contexte des NTIC et de l'auto-apprentissage numérique.",
                  ],
                },
              ].map(({ title, auteurs, def, points }) => (
                <div key={title} className="rounded-[12px] border border-border bg-bg p-4">
                  <div className="flex items-start justify-between">
                    <p className="text-base font-bold text-dark">{title}</p>
                    <span className="ml-2 shrink-0 rounded-full border border-border bg-white px-2 py-0.5 text-xs text-text-light">
                      {auteurs}
                    </span>
                  </div>
                  <p className="mt-2 text-sm font-medium italic text-primary-light">{def}</p>
                  <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-text">
                    {points.map((pt) => <li key={pt}>{pt}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* ══════════════════════════════════════════════
              SECTION 4 — CONCEPTS GÉNÉRAUX DE DIDACTIQUE
          ══════════════════════════════════════════════ */}
          <section className="soft-card p-6 sm:p-8">
            <h2 className="text-xl font-extrabold text-dark">
              4. Didactique de l&apos;Informatique : Concepts Généraux
            </h2>

            {/* Triangle didactique */}
            <div className="mt-5">
              <h3 className="text-base font-bold text-dark">▶ Le Triangle Didactique (Yves Chevallard)</h3>
              <p className="mt-2 text-sm leading-7 text-text">
                Modèle représentant les 3 éléments clés de l&apos;acte d&apos;enseigner et leurs interactions dynamiques.
              </p>
              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                {[
                  {
                    sommet: "Enseignant",
                    role: "Planifie, présente, facilite, évalue.",
                    axe: "Axe Épistémologique (Savoir ↔ Enseignant)",
                    dim: "Savante : transposition, trame conceptuelle, structure de la discipline.",
                  },
                  {
                    sommet: "Élève",
                    role: "Assimile, comprend, applique. Chaque élève a des besoins et styles différents.",
                    axe: "Axe Psychologique (Savoir ↔ Élève)",
                    dim: "Cognitive : processus cognitifs, représentations, obstacles.",
                  },
                  {
                    sommet: "Savoir",
                    role: "Connaissances, concepts, compétences et valeurs à transmettre.",
                    axe: "Axe Praxéologique (Enseignant ↔ Élève)",
                    dim: "Actionnelle : gestes professionnels, gestion de classe, situations.",
                  },
                ].map(({ sommet, role, axe, dim }) => (
                  <div key={sommet} className="rounded-[12px] border border-border bg-bg p-4 text-sm">
                    <p className="text-base font-bold text-primary-light">{sommet}</p>
                    <p className="mt-1 text-text">{role}</p>
                    <p className="mt-2 font-semibold text-dark">{axe}</p>
                    <p className="mt-1 text-text-light">{dim}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Transposition didactique */}
            <div className="mt-6">
              <h3 className="text-base font-bold text-dark">▶ La Transposition Didactique (Bachelard &amp; Chevallard)</h3>
              <p className="mt-2 text-sm leading-7 text-text">
                Processus par lequel un contenu issu d&apos;un domaine de connaissance (<em>le savoir savant</em>) est
                transformé et adapté pour être enseigné (<em>le savoir enseigné</em>).
              </p>
              <div className="mt-3 grid gap-3 sm:grid-cols-3">
                {[
                  { etape: "Savoir Savant", acteur: "Chercheurs, université", resultat: "Connaissances expertes et formalisées." },
                  { etape: "Transposition externe", acteur: "Noosphère (inspecteurs, auteurs de manuels, universitaires)", resultat: "Savoir à enseigner : programme scolaire codifié." },
                  { etape: "Transposition interne", acteur: "L'enseignant", resultat: "Savoir enseigné : adapté, simplifié, contextualisé pour la classe." },
                ].map(({ etape, acteur, resultat }) => (
                  <div key={etape} className="rounded-[12px] border border-border bg-bg p-4 text-sm">
                    <p className="font-bold text-dark">{etape}</p>
                    <p className="mt-1 text-text-light">{acteur}</p>
                    <p className="mt-1 text-text">{resultat}</p>
                  </div>
                ))}
              </div>
              <div className="mt-3 rounded-[10px] bg-bg px-4 py-3 text-sm leading-7 text-text">
                <span className="font-semibold">Exemple informatique : </span>
                La récursivité (savoir savant : fonctions mathématiques récursives) → Savoir à enseigner :
                fonctions récursives en Python → Savoir enseigné : « une fonction qui s&apos;appelle
                elle-même, illustrée par la factorielle ».
              </div>
            </div>

            {/* Trame conceptuelle */}
            <div className="mt-6">
              <h3 className="text-base font-bold text-dark">▶ La Trame Conceptuelle</h3>
              <p className="mt-2 text-sm leading-7 text-text">
                Carte organisée des concepts clés d&apos;un domaine révélant leurs relations hiérarchiques.
                Elle aide à choisir l&apos;ordre d&apos;introduction des notions et à éviter les ruptures conceptuelles.
              </p>
              <div className="mt-3 space-y-2 text-sm text-text">
                {[
                  { dom: "Programmation", seq: "variables → types → structures de contrôle → fonctions → POO → complexité" },
                  { dom: "Réseaux", seq: "protocole → modèle OSI → couche physique → IP/TCP → DNS → HTTP → sécurité" },
                  { dom: "Bases de données", seq: "donnée/info → table → clé primaire → relation → SQL → normalisation" },
                ].map(({ dom, seq }) => (
                  <div key={dom} className="rounded-[10px] border border-border bg-bg px-4 py-3">
                    <span className="font-semibold text-dark">{dom} : </span>
                    <span className="font-mono text-xs">{seq}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Niveaux de formulation */}
            <div className="mt-6">
              <h3 className="text-base font-bold text-dark">▶ Niveaux de Formulation d&apos;un Concept</h3>
              <div className="mt-3 overflow-x-auto">
                <table className="w-full text-sm text-text">
                  <thead>
                    <tr className="border-b border-border text-left">
                      {["Niveau", "Description", "Exemple : Boucle", "Exemple : Adresse IP"].map((h) => (
                        <th key={h} className="pb-2 pr-4 font-semibold text-dark last:pr-0">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {[
                      {
                        n: "Bas — Débutant",
                        d: "Formulation simple, métaphore, analogie du quotidien.",
                        b: "« Répéter plusieurs fois la même action, comme tourner les pages d'un livre. »",
                        ip: "« Le numéro d'identité de ton ordinateur, comme une adresse postale. »",
                      },
                      {
                        n: "Intermédiaire",
                        d: "Définition technique progressivement précise.",
                        b: "« Structure for/while répétée tant qu'une condition est vraie. »",
                        ip: "« Identifiant numérique sur 32 bits, structuré en 4 octets. »",
                      },
                      {
                        n: "Élevé — Avancé",
                        d: "Formulation scientifique rigoureuse, complexité algorithmique.",
                        b: "« Mécanisme de contrôle de flux itératif, analyse de complexité temporelle O(n). »",
                        ip: "« Protocole d'adressage IPv4/IPv6, masque de sous-réseau, routage. »",
                      },
                    ].map(({ n, d, b, ip }) => (
                      <tr key={n}>
                        <td className="py-2 pr-4 font-medium text-dark">{n}</td>
                        <td className="py-2 pr-4 leading-6">{d}</td>
                        <td className="py-2 pr-4 leading-6 italic">{b}</td>
                        <td className="py-2 leading-6 italic">{ip}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Erreurs en didactique */}
            <div className="mt-6">
              <h3 className="text-base font-bold text-dark">▶ Les Erreurs en Didactique</h3>
              <p className="mt-2 text-sm leading-7 text-text">
                L&apos;erreur est un écart entre la performance réalisée et un but attendu. En didactique,
                l&apos;erreur n&apos;est plus une faute à sanctionner, mais un <strong>indice précieux</strong> sur le
                fonctionnement du processus d&apos;apprentissage.
              </p>
              <div className="mt-3 overflow-x-auto">
                <table className="w-full text-sm text-text">
                  <thead>
                    <tr className="border-b border-border text-left">
                      {["Source de l'erreur", "Symptôme informatique", "Remédiation"].map((h) => (
                        <th key={h} className="pb-2 pr-4 font-semibold text-dark last:pr-0">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {[
                      { s: "Rapport au savoir mal appliqué", sym: "Généralisation excessive (croire que toutes les boucles fonctionnent de manière identique).", r: "Multiplier les exemples contrastifs." },
                      { s: "Choix didactiques inadaptés", sym: "Utilisation d'outils avancés sans en comprendre les limites.", r: "Introduire les limites explicitement." },
                      { s: "Contrat didactique", sym: "L'élève applique un algorithme de tri même quand inutile, car leçon récente.", r: "Varier les situations, éviter la prévisibilité." },
                      { s: "Représentations initiales", sym: "« L'ordinateur comprend ce que je veux dire. »", r: "Faire émerger et déconstruire les représentations." },
                    ].map(({ s, sym, r }) => (
                      <tr key={s}>
                        <td className="py-2 pr-4 font-medium text-dark">{s}</td>
                        <td className="py-2 pr-4 leading-6">{sym}</td>
                        <td className="py-2 leading-6">{r}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Représentations initiales */}
            <div className="mt-6">
              <h3 className="text-base font-bold text-dark">▶ Représentations / Conceptions Initiales</h3>
              <p className="mt-2 text-sm leading-7 text-text">
                Modèles mentaux que chaque élève a construits avant tout enseignement. Ils sont cohérents
                pour l&apos;élève mais peuvent être incorrects.
              </p>
              <p className="mt-2 text-sm font-semibold text-dark">6 étapes pour les prendre en compte (Astolfi, 1996) :</p>
              <ol className="mt-2 list-decimal space-y-1 pl-5 text-sm leading-7 text-text">
                {[
                  "Les entendre : écoute positive et bienveillante.",
                  "Les comprendre : analyser le raisonnement sous-jacent.",
                  "Les faire identifier : prise de conscience par l'élève.",
                  "Les faire comparer : décentration des points de vue.",
                  "Les faire discuter : provoquer des conflits sociocognitifs.",
                  "Les suivre : surveiller l'évolution à court et moyen terme.",
                ].map((e) => <li key={e}>{e}</li>)}
              </ol>
            </div>

            {/* Obstacles */}
            <div className="mt-6">
              <h3 className="text-base font-bold text-dark">▶ Obstacles et Objectif-Obstacle (Martinand, 1982)</h3>
              <p className="mt-2 text-sm leading-7 text-text">
                L&apos;objectif-obstacle est une situation dans laquelle l&apos;élève est confronté à un défi
                nécessitant une résolution cognitive — un moteur puissant de l&apos;apprentissage.
              </p>
              <div className="mt-3 grid gap-2 sm:grid-cols-2">
                {[
                  { o: "Obstacle de langage", d: "« objet » en POO ≠ signification ordinaire → confusion durable." },
                  { o: "Obstacle de simplification", d: "« le Wi-Fi c'est sans fil » → lacunes sur les ondes, la sécurité." },
                  { o: "Obstacle lié au savoir", d: "Pointeurs en C — intrinsèquement abstraits, aucune métaphore parfaite." },
                  { o: "Obstacle généré par le manuel", d: "Schéma OSI linéaire masquant les interactions dynamiques." },
                  { o: "Obstacle pédagogique", d: "Partir du code avant de modéliser le problème → manque de pensée algorithmique." },
                ].map(({ o, d }) => (
                  <div key={o} className="rounded-[10px] border border-border bg-bg px-3 py-3 text-sm text-text">
                    <span className="font-semibold text-dark">{o} : </span>{d}
                  </div>
                ))}
              </div>
            </div>

            {/* Conflit sociocognitif et modèles */}
            <div className="mt-6">
              <h3 className="text-base font-bold text-dark">▶ Conflit Sociocognitif et Modèles Didactiques</h3>
              <p className="mt-2 text-sm leading-7 text-text">
                Le conflit sociocognitif est la confrontation de points de vue différents entre pairs,
                qui déstabilise les représentations initiales et favorise la construction de nouvelles
                connaissances (Vygotski).
              </p>
              <div className="mt-3 overflow-x-auto">
                <table className="w-full text-sm text-text">
                  <thead>
                    <tr className="border-b border-border text-left">
                      {["Modèle didactique", "Caractéristiques", "Application en informatique"].map((h) => (
                        <th key={h} className="pb-2 pr-4 font-semibold text-dark last:pr-0">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {[
                      { m: "Transmissif", c: "L'enseignant transmet le savoir structuré. Élève récepteur passif.", a: "Cours magistral sur les structures de données." },
                      { m: "Béhavioriste", c: "Exercices répétitifs, renforcement positif, évaluation par réponse correcte.", a: "Exercices de syntaxe Python avec correction automatique." },
                      { m: "Constructiviste", c: "Élève construit le savoir par ses actions. Situations-problèmes.", a: "TP de découverte : tester, observer, déduire." },
                      { m: "Socio-constructiviste", c: "Construction collective, pair programming, débat.", a: "Projets collaboratifs, revue de code entre pairs." },
                    ].map(({ m, c, a }) => (
                      <tr key={m}>
                        <td className="py-2 pr-4 font-medium text-dark">{m}</td>
                        <td className="py-2 pr-4 leading-6">{c}</td>
                        <td className="py-2 leading-6">{a}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* ══════════════════════════════════════════════
              SECTION 5 — THÉORIE DE LA SITUATION DIDACTIQUE
          ══════════════════════════════════════════════ */}
          <section className="soft-card p-6 sm:p-8">
            <h2 className="text-xl font-extrabold text-dark">
              5. Théorie de la Situation Didactique (Guy Brousseau)
            </h2>
            <p className="mt-3 text-sm leading-7 text-text">
              Cadre théorique décrivant les conditions nécessaires à un apprentissage authentique.
              L&apos;apprenant apprend réellement lorsqu&apos;il est confronté à une{" "}
              <strong>situation adidactique</strong> (sans aide directe de l&apos;enseignant).
            </p>

            {/* Contrat didactique */}
            <div className="mt-5">
              <h3 className="text-base font-bold text-dark">▶ Le Contrat Didactique</h3>
              <div className="mt-3 overflow-x-auto">
                <table className="w-full text-sm text-text">
                  <thead>
                    <tr className="border-b border-border text-left">
                      {["Concept", "Définition", "Impact sur l'apprentissage"].map((h) => (
                        <th key={h} className="pb-2 pr-4 font-semibold text-dark last:pr-0">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {[
                      { c: "Contrat didactique", d: "Règles implicites liant enseignant et élèves sur les droits et devoirs de chacun par rapport au savoir.", i: "Peut provoquer des effets pervers si l'élève tente de « deviner » ce qu'attend l'enseignant plutôt que de comprendre." },
                      { c: "Topogenèse", d: "Répartition des responsabilités du savoir entre l'enseignant et l'élève.", i: "Trop de topogenèse côté enseignant → effet Topaze (il donne la réponse)." },
                      { c: "Chronogenèse", d: "Gestion de l'avancement temporel du savoir dans la classe.", i: "Avancer trop vite empêche la construction du savoir." },
                    ].map(({ c, d, i }) => (
                      <tr key={c}>
                        <td className="py-2 pr-4 font-medium text-dark">{c}</td>
                        <td className="py-2 pr-4 leading-6">{d}</td>
                        <td className="py-2 leading-6">{i}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* 6 phases */}
            <div className="mt-6">
              <h3 className="text-base font-bold text-dark">▶ Les 6 Phases d&apos;une Situation Didactique</h3>
              <div className="relative mt-3 space-y-0 pl-5">
                <span aria-hidden className="absolute left-[7px] top-2 h-[calc(100%-12px)] w-[2px] rounded-full bg-border" />
                {[
                  { n: "1. Enrôlement", d: "L'enseignant conçoit un problème préservant le sens de la connaissance visée — situation fondamentale." },
                  { n: "2. Dévolution", d: "L'enseignant transfère à l'élève la responsabilité d'une situation adidactique et en accepte les conséquences." },
                  { n: "3. Action", d: "Zone adidactique : travail de recherche, manipulation et élucidation par les élèves. L'enseignant n'intervient pas." },
                  { n: "4. Formulation", d: "Les élèves expriment et formulent les résultats de leurs recherches et manipulations." },
                  { n: "5. Validation", d: "L'élève propose une résolution et la défend face à ses pairs — discussion visant à prouver ou réfuter." },
                  { n: "6. Institutionnalisation", d: "L'enseignant décontextualise et dépersonnalise les connaissances pour leur conférer le statut de savoir scolaire." },
                ].map(({ n, d }) => (
                  <div key={n} className="relative pb-3 last:pb-0">
                    <span aria-hidden className="absolute -left-[13px] top-[5px] h-3 w-3 rounded-full border-2 border-primary-light bg-white" />
                    <div className="rounded-[10px] border border-border bg-bg px-4 py-3 text-sm text-text">
                      <span className="font-bold text-dark">{n} : </span>{d}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Situation-problème */}
            <div className="mt-6">
              <h3 className="text-base font-bold text-dark">▶ La Situation-Problème</h3>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-text">
                {[
                  "Nouvelle pour les élèves, inscrite dans un contexte réel.",
                  "Ouverte (pas de solution unique a priori).",
                  "Atteignable avec un niveau d'effort raisonnable.",
                  "Révèle un conflit cognitif dont la résolution franchit un obstacle didactique.",
                  "Activité individuelle ou collective (conflits sociocognitifs en groupe).",
                ].map((pt) => <li key={pt}>{pt}</li>)}
              </ul>
            </div>

            {/* Variables didactiques */}
            <div className="mt-6">
              <h3 className="text-base font-bold text-dark">▶ Les Variables Didactiques</h3>
              <p className="mt-2 text-sm leading-7 text-text">
                Paramètres d&apos;une situation que l&apos;enseignant peut modifier pour déclencher un changement
                de stratégie chez les élèves.
              </p>
              <div className="mt-3 overflow-x-auto">
                <table className="w-full text-sm text-text">
                  <thead>
                    <tr className="border-b border-border text-left">
                      {["Type", "Description", "Exemple en informatique"].map((h) => (
                        <th key={h} className="pb-2 pr-4 font-semibold text-dark last:pr-0">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {[
                      { t: "Pédagogique", d: "Adapter la tâche au niveau et capacités des élèves (différenciation).", e: "Changer la taille du jeu de données à trier." },
                      { t: "Didactique proprement dite", d: "Modification entraîne un changement dans la hiérarchie des stratégies de résolution.", e: "Passer de 10 à 10 000 données → l'élève doit abandonner le tri à bulles." },
                      { t: "Cognitive", d: "Nature des opérations, taille des nombres, type de situation.", e: "Entiers simples vs listes imbriquées." },
                      { t: "Ergonomique", d: "Nombre de données et d'opérations à gérer simultanément.", e: "Réduire le nombre de fonctions à appeler." },
                      { t: "Informationnelle", d: "Complexité de l'énoncé, ordre des infos, présence d'infos inutiles.", e: "Énoncé avec données superflues à identifier." },
                    ].map(({ t, d, e }) => (
                      <tr key={t}>
                        <td className="py-2 pr-4 font-medium text-dark">{t}</td>
                        <td className="py-2 pr-4 leading-6">{d}</td>
                        <td className="py-2 leading-6">{e}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Effets didactiques */}
            <div className="mt-6">
              <h3 className="text-base font-bold text-dark">▶ Les Effets Didactiques (Phénomènes pervers)</h3>
              <div className="mt-3 space-y-3">
                {[
                  {
                    effet: "Effet Topaze",
                    desc: "L'enseignant aide tellement l'élève qu'il finit par donner la réponse. L'élève réussit mais n'apprend pas.",
                    eviter: "Poser des questions ouvertes, laisser du temps de réflexion, guider sans donner la réponse.",
                  },
                  {
                    effet: "Effet Jourdain",
                    desc: "L'enseignant accepte des réponses vagues comme preuve de compréhension.",
                    eviter: "Changer la nature des questions posées, ralentir pour mieux avancer.",
                  },
                  {
                    effet: "Effet Pygmalion",
                    desc: "Les attentes de l'enseignant (+ou−) déterminent les résultats des élèves (prophétie autoréalisatrice).",
                    eviter: "Maintenir des attentes élevées pour TOUS les élèves.",
                  },
                  {
                    effet: "Abus d'analogie",
                    desc: "L'apprenant attribue à l'analogie des propriétés qui ne correspondent pas au concept réel (ex : « copier = photocopie » masque le modèle mémoire Python).",
                    eviter: "Dire explicitement les limites de l'analogie. Introduire le vrai concept technique.",
                  },
                  {
                    effet: "Glissement métacognitif",
                    desc: "L'enseignant remplace le savoir complexe par des outils, méthodes ou astuces — l'outil prend la place du savoir.",
                    eviter: "L'outil doit rester au service du savoir. Évaluer le fond, pas la forme.",
                  },
                ].map(({ effet, desc, eviter }) => (
                  <div key={effet} className="rounded-[12px] border border-border bg-bg p-4 text-sm">
                    <p className="font-bold text-dark">{effet}</p>
                    <p className="mt-1 text-text">{desc}</p>
                    <p className="mt-2 rounded-[8px] bg-white px-3 py-2">
                      <span className="font-semibold text-primary-light">Comment l&apos;éviter : </span>
                      {eviter}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ══════════════════════════════════════════════
              SECTION 6 — CHARGE COGNITIVE & MULTIMÉDIA
          ══════════════════════════════════════════════ */}
          <section className="soft-card p-6 sm:p-8">
            <h2 className="text-xl font-extrabold text-dark">
              6. Charge Cognitive &amp; Théorie d&apos;Apprentissage Multimédia
            </h2>

            {/* Types de mémoire */}
            <div className="mt-5">
              <h3 className="text-base font-bold text-dark">
                A. Théorie de la Charge Cognitive (John Sweller, 1988)
              </h3>
              <p className="mt-2 text-sm leading-7 text-text">
                Explique comment la mémoire de travail humaine, limitée en capacité et en durée, traite
                les informations pendant l&apos;apprentissage.
              </p>
              <h4 className="mt-4 text-sm font-bold text-dark">▶ Les Types de Mémoire</h4>
              <div className="mt-3 overflow-x-auto">
                <table className="w-full text-sm text-text">
                  <thead>
                    <tr className="border-b border-border text-left">
                      {["Type de mémoire", "Caractéristiques", "Rôle dans l'apprentissage"].map((h) => (
                        <th key={h} className="pb-2 pr-4 font-semibold text-dark last:pr-0">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {[
                      { t: "Mémoire sensorielle", c: "Enregistrement automatique, bref, inconscient des informations sensorielles.", r: "Porte d'entrée — sélection de l'information pertinente (attention)." },
                      { t: "Mémoire de travail", c: "Capacité LIMITÉE — maintien temporaire et manipulation des informations (quelques secondes).", r: "Traitement actif de l'information. Peut être saturée (surcharge cognitive)." },
                      { t: "Mémoire sémantique", c: "Mémoire des faits et connaissances générales. Capacité ILLIMITÉE.", r: "Stockage des savoirs formels." },
                      { t: "Mémoire épisodique", c: "Souvenir d'événements contextualisés (où, quand, comment).", r: "Apprentissage par situations concrètes et mémorables." },
                      { t: "Mémoire implicite / procédurale", c: "Automatismes et savoir-faire acquis (faire du vélo, taper au clavier).", r: "Automatisation des compétences répétées." },
                    ].map(({ t, c, r }) => (
                      <tr key={t}>
                        <td className="py-2 pr-4 font-medium text-dark">{t}</td>
                        <td className="py-2 pr-4 leading-6">{c}</td>
                        <td className="py-2 leading-6">{r}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* 3 types de charge */}
            <div className="mt-6">
              <h4 className="text-sm font-bold text-dark">▶ Les 3 Types de Charge Cognitive</h4>
              <div className="mt-3 grid gap-3 sm:grid-cols-3">
                {[
                  {
                    type: "Charge intrinsèque",
                    source: "Complexité de la tâche et connaissances préalables de l'apprenant.",
                    impact: "Inévitable — liée à la difficulté réelle du contenu.",
                    role: "Moduler : décomposer en sous-tâches, prérequis bien établis.",
                    color: "border-yellow-200 bg-yellow-50",
                    badge: "text-yellow-700",
                  },
                  {
                    type: "Charge extrinsèque",
                    source: "Présentation de la tâche et manière d'enseigner.",
                    impact: "Inutile — ne contribue pas à l'apprentissage.",
                    role: "Baisser : supprimer les éléments superflus, clarifier les consignes.",
                    color: "border-red-200 bg-red-50",
                    badge: "text-red-600",
                  },
                  {
                    type: "Charge germane",
                    source: "Processus d'apprentissage et transfert en mémoire à long terme.",
                    impact: "Utile — construction des schémas cognitifs.",
                    role: "Favoriser : activités de sens, connexions avec l'existant.",
                    color: "border-green-200 bg-green-50",
                    badge: "text-green-700",
                  },
                ].map(({ type, source, impact, role, color, badge }) => (
                  <div key={type} className={`rounded-[12px] border p-4 text-sm ${color}`}>
                    <p className={`font-bold ${badge}`}>{type}</p>
                    <p className="mt-1 text-text"><span className="font-semibold">Source : </span>{source}</p>
                    <p className="mt-1 text-text"><span className="font-semibold">Impact : </span>{impact}</p>
                    <p className="mt-1 text-text"><span className="font-semibold">Rôle enseignant : </span>{role}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Techniques réduction */}
            <div className="mt-5">
              <h4 className="text-sm font-bold text-dark">▶ Techniques pour réduire la charge cognitive</h4>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-text">
                <li>Supprimer toutes les informations non nécessaires (focus sur l&apos;essentiel).</li>
                <li>Souligner les informations les plus pertinentes (gras, italique, flèches, graphiques).</li>
                <li>Combiner images, textes et narration de façon simplifiée et planifiée.</li>
                <li>Illustrer les présentations avec des termes proches pour éviter les associations coûteuses.</li>
              </ul>
            </div>

            {/* Mayer */}
            <div className="mt-6">
              <h3 className="text-base font-bold text-dark">
                B. Théorie de l&apos;Apprentissage Multimédia (Richard E. Mayer)
              </h3>
              <p className="mt-2 text-sm leading-7 text-text italic">
                « Bien conçu, le multimédia fait apprendre. » — R. Mayer
              </p>
              <p className="mt-2 text-sm leading-7 text-text">
                Cadre théorique expliquant comment les personnes apprennent plus profondément à partir de
                mots et d&apos;images combinés que de mots seuls. Repose sur 3 fondements cognitifs.
              </p>

              {/* 3 fondements */}
              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                {[
                  { f: "Double voie (Double codage)", d: "Deux canaux séparés : canal verbal/auditif (mots, sons) et canal visuel/pictural (images, graphiques, vidéos).", i: "Combiner texte oral + images plutôt que texte écrit + images." },
                  { f: "Capacité limitée", d: "Chaque canal ne peut traiter qu'une quantité limitée d'informations à la fois.", i: "Éviter la surcharge d'un canal (trop de texte à l'écran en même temps)." },
                  { f: "Traitement actif", d: "L'apprentissage significatif requiert : Sélection → Organisation → Intégration avec les connaissances antérieures.", i: "Concevoir des ressources guidant l'élève dans ce processus actif." },
                ].map(({ f, d, i }) => (
                  <div key={f} className="rounded-[12px] border border-border bg-bg p-4 text-sm">
                    <p className="font-bold text-primary-light">{f}</p>
                    <p className="mt-1 text-text">{d}</p>
                    <p className="mt-2 rounded-[8px] bg-white px-2 py-2">
                      <span className="font-semibold text-dark">Implication : </span>{i}
                    </p>
                  </div>
                ))}
              </div>

              {/* 12 principes de Mayer */}
              <div className="mt-6">
                <h4 className="text-sm font-bold text-dark">▶ Les 12 Principes de Mayer</h4>

                {/* Groupe 1 */}
                <p className="mt-3 text-xs font-bold uppercase tracking-wide text-accent">
                  Groupe 1 — Réduire le traitement inutile (5 principes)
                </p>
                <div className="mt-2 overflow-x-auto">
                  <table className="w-full text-sm text-text">
                    <thead>
                      <tr className="border-b border-border text-left">
                        {["Principe", "Description", "Application en informatique"].map((h) => (
                          <th key={h} className="pb-2 pr-4 font-semibold text-dark last:pr-0">{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      {[
                        { p: "Cohérence", d: "Exclure tout élément superflu (images décoratives, musiques).", a: "Pas de GIFs animés dans un diaporama sur les algorithmes." },
                        { p: "Signalisation", d: "Mettre en évidence les infos essentielles (flèches, couleurs, titres).", a: "Surligner les mots-clés dans le code commenté." },
                        { p: "Redondance", d: "Éviter texte écrit + texte oral simultanément. Narration orale + images est plus efficace.", a: "Commenter un algorithme à l'oral, ne pas lire le texte projeté." },
                        { p: "Contiguïté spatiale", d: "Rapprocher mots et images correspondants sur l'écran.", a: "Légende d'un schéma réseau directement au-dessus du composant." },
                        { p: "Contiguïté temporelle", d: "Présenter simultanément narration et animation.", a: "Animation du tri bulles + commentaire audio en simultané." },
                      ].map(({ p, d, a }) => (
                        <tr key={p}>
                          <td className="py-2 pr-4 font-medium text-dark">{p}</td>
                          <td className="py-2 pr-4 leading-6">{d}</td>
                          <td className="py-2 leading-6">{a}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Groupe 2 */}
                <p className="mt-5 text-xs font-bold uppercase tracking-wide text-accent">
                  Groupe 2 — Gérer la complexité (3 principes)
                </p>
                <div className="mt-2 overflow-x-auto">
                  <table className="w-full text-sm text-text">
                    <thead>
                      <tr className="border-b border-border text-left">
                        {["Principe", "Description", "Application"].map((h) => (
                          <th key={h} className="pb-2 pr-4 font-semibold text-dark last:pr-0">{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      {[
                        { p: "Segmentation", d: "Découper une leçon complexe en séquences courtes.", a: "Diviser un cours réseau en 5 capsules de 5 min." },
                        { p: "Pré-entraînement", d: "Introduire les concepts clés AVANT la leçon détaillée.", a: "Présenter les notions de base avant les séquences conditionnelles." },
                        { p: "Modalité", d: "Utiliser narration ORALE plutôt que texte écrit pour commenter une animation.", a: "Commenter un schéma réseau à l'oral plutôt qu'en texte." },
                      ].map(({ p, d, a }) => (
                        <tr key={p}>
                          <td className="py-2 pr-4 font-medium text-dark">{p}</td>
                          <td className="py-2 pr-4 leading-6">{d}</td>
                          <td className="py-2 leading-6">{a}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Groupe 3 */}
                <p className="mt-5 text-xs font-bold uppercase tracking-wide text-accent">
                  Groupe 3 — Favoriser le traitement actif (4 principes)
                </p>
                <div className="mt-2 overflow-x-auto">
                  <table className="w-full text-sm text-text">
                    <thead>
                      <tr className="border-b border-border text-left">
                        {["Principe", "Description", "Application"].map((h) => (
                          <th key={h} className="pb-2 pr-4 font-semibold text-dark last:pr-0">{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      {[
                        { p: "Multimédia", d: "Mots + images plus efficaces que mots seuls.", a: "Toujours associer schéma à l'explication." },
                        { p: "Personnalisation", d: "Langage conversationnel, 2ème personne (« tu », « vous »).", a: "« Tu dois corriger ce script... » plutôt que « L'apprenant doit... »" },
                        { p: "Voix", d: "Voix humaine naturelle et chaleureuse pour la narration.", a: "Capsule vidéo avec voix enseignant, pas voix de synthèse." },
                        { p: "Image (formateur)", d: "La présence de la tête parlante n'améliore pas l'apprentissage. Mieux vaut montrer ce dont on parle.", a: "Privilégier le screencast avec commentaire audio." },
                      ].map(({ p, d, a }) => (
                        <tr key={p}>
                          <td className="py-2 pr-4 font-medium text-dark">{p}</td>
                          <td className="py-2 pr-4 leading-6">{d}</td>
                          <td className="py-2 leading-6">{a}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Applications pratiques */}
              <div className="mt-6">
                <h4 className="text-sm font-bold text-dark">▶ Applications pratiques des principes de Mayer</h4>
                <div className="mt-3 grid gap-3 sm:grid-cols-3">
                  {[
                    {
                      outil: "Diaporamas (PowerPoint)",
                      principes: "Contiguïté spatiale, Cohérence, Signalisation.",
                      conseils: "Texte près des images ; pas d'images décoratives ; flèches, titres clairs. Les diapositives = support élève, pas prompteur.",
                    },
                    {
                      outil: "Capsules vidéo",
                      principes: "Modalité, Segmentation, Redondance.",
                      conseils: "Commentaire audio sur image/animation. Vidéos < 7 min. Éviter tout le texte à l'écran.",
                    },
                    {
                      outil: "Exercices & Évaluations",
                      principes: "Personnalisation, Contiguïté spatiale.",
                      conseils: "Consignes claires avec images directement pertinentes. Images à côté des questions concernées.",
                    },
                  ].map(({ outil, principes, conseils }) => (
                    <div key={outil} className="rounded-[12px] border border-border bg-bg p-4 text-sm">
                      <p className="font-bold text-dark">{outil}</p>
                      <p className="mt-1 text-xs font-semibold text-primary-light">{principes}</p>
                      <p className="mt-2 text-text">{conseils}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Limites */}
              <div className="mt-5 rounded-[12px] border border-border bg-bg p-4 text-sm leading-7 text-text">
                <p className="font-semibold text-dark">▶ Limites et adaptations</p>
                <ul className="mt-2 list-disc space-y-1 pl-5">
                  <li><span className="font-semibold">Effet d&apos;inversion de l&apos;expertise :</span> certains principes sont plus efficaces pour les novices. Un schéma légendé aide un débutant mais peut sembler redondant pour un expert.</li>
                  <li>Le support multimédia n&apos;est qu&apos;un point de départ : l&apos;élève doit manipuler, discuter, créer et résoudre des problèmes pour apprendre en profondeur.</li>
                  <li>Les principes s&apos;appliquent aussi aux simulations interactives, à la réalité virtuelle et augmentée.</li>
                </ul>
              </div>
            </div>
          </section>

          

        </section>
      </div>
    </main>
  );
}