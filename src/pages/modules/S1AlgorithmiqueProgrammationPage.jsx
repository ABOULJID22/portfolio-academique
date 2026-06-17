import { modulePages } from '../../data/portfolioData';

const slug = 's1-algorithmique-programmation';

const tags = [
  'Algorithmique',
  'Pseudo-code',
  'Structures de contrôle',
  'Tableaux',
  'Fonctions',
  'Récursivité',
  'Python',
];

const planItems = [
  'Introduction à l’algorithmique et à la programmation',
  'Représentation d’un algorithme',
  'Composants d’un algorithme',
  'Structures de contrôle',
  'Types de données avancés : les tableaux',
  'Sous-algorithmes : fonctions et procédures',
  'Récursivité',
  'Algorithmes de tri',
  'Python : gestion des exceptions',
  'Python : chaînes de caractères',
  'Tableau comparatif : pseudo-code vs Python',
  'Synthèse et annexes pédagogiques',
];

const properties = [
  {
    name: 'Validité',
    desc: 'Aptitude de l’algorithme à réaliser exactement la tâche pour laquelle il a été conçu.',
  },
  {
    name: 'Robustesse',
    desc: 'Capacité à gérer des conditions anormales : entrées incorrectes, erreurs ou situations imprévues.',
  },
  {
    name: 'Réutilisabilité',
    desc: 'Possibilité de réutiliser l’algorithme pour résoudre des tâches équivalentes.',
  },
  {
    name: 'Complexité',
    desc: 'Nombre d’opérations élémentaires nécessaires pour résoudre le problème.',
  },
  {
    name: 'Efficacité',
    desc: 'Utilisation optimale des ressources disponibles : mémoire, temps processeur et lisibilité.',
  },
];

const programmeSteps = [
  {
    title: '1. Problème',
    text: 'Analyser le problème, comprendre la demande et identifier les contraintes.',
  },
  {
    title: '2. Modèle',
    text: 'Déterminer les données d’entrée, les variables, les traitements et les formules utiles.',
  },
  {
    title: '3. Algorithme',
    text: 'Concevoir une solution logique sous forme d’étapes organisées.',
  },
  {
    title: '4. Programme',
    text: 'Traduire l’algorithme dans un langage de programmation comme Python.',
  },
  {
    title: '5. Résultats',
    text: 'Exécuter, tester, corriger les erreurs et valider les résultats obtenus.',
  },
];

const organigrammeRows = [
  ['Ovale', 'DEBUT et FIN'],
  ['Parallélogramme', 'LIRE et ECRIRE'],
  ['Rectangle', 'TRAITEMENT ou CALCUL'],
  ['Losange', 'DÉCISION ou TEST'],
  ['Cercle', 'RENVOI / connecteur'],
];

const dataCategories = [
  ['Variable', 'Objet dont la valeur peut être modifiée pendant l’exécution.', 'Zone mémoire dans la RAM'],
  ['Constante', 'Objet dont la valeur reste fixe pendant tout le programme.', 'Valeur immuable'],
];

const numericTypes = [
  ['Byte / octet', '0 à 255'],
  ['Entier simple', '-32 768 à 32 767'],
  ['Entier long', '-2 147 483 648 à 2 147 483 647'],
  ['Réel simple', '±1,40×10⁻⁴⁵ à ±3,40×10³⁸'],
  ['Réel double', '±4,94×10⁻³²⁴ à ±1,79×10³⁰⁸'],
];

const arithmeticOperators = [
  ['+', 'Addition', 'X + Y', 'x + y'],
  ['-', 'Soustraction', 'X - Y', 'x - y'],
  ['*', 'Multiplication', 'X * Y', 'x * y'],
  ['/', 'Division', 'X / Y', 'x / y ou x // y'],
  ['^', 'Puissance', '2^3 = 8', '2**3'],
  ['Mod', 'Reste de division', '17 mod 5 = 2', '17 % 5'],
];

const relationalOperators = [
  ['=', '==', 'Égal'],
  ['<> ou ≠', '!=', 'Différent'],
  ['<', '<', 'Strictement inférieur'],
  ['>', '>', 'Strictement supérieur'],
  ['<=', '<=', 'Inférieur ou égal'],
  ['>=', '>=', 'Supérieur ou égal'],
];

const logicalOperators = [
  ['ET', 'and', 'Vrai si les deux conditions sont vraies'],
  ['OU', 'or', 'Vrai si au moins une condition est vraie'],
  ['NON', 'not', 'Négation logique'],
  ['XOR', '-', 'Vrai si une seule condition est vraie'],
];

const truthTable = [
  ['V', 'V', 'V', 'V', 'F'],
  ['V', 'F', 'F', 'V', 'V'],
  ['F', 'V', 'F', 'V', 'V'],
  ['F', 'F', 'F', 'F', 'F'],
];

const table1d = [
  ['Valeurs', '10', '5', '8', '4', '7'],
  ['Indices', '0', '1', '2', '3', '4'],
];

const table2d = [
  ['', '0', '1', '2', '3'],
  ['0', '18', '89', '9', '2'],
  ['1', '67', '77', '85', '6'],
  ['2', '55', '66', '88', '9'],
];

const sortingAlgorithms = [
  {
    title: 'Tri par sélection',
    type: 'Itératif',
    desc: 'Recherche le plus petit élément restant puis le place à sa position définitive.',
    steps: ['Trouver le minimum', 'Échanger avec la position courante', 'Recommencer sur la partie restante'],
  },
  {
    title: 'Tri à bulles',
    type: 'Itératif',
    desc: 'Compare chaque élément avec son successeur et échange si l’ordre n’est pas correct.',
    steps: ['Parcourir la liste', 'Comparer deux voisins', 'Arrêter quand aucun échange n’est effectué'],
  },
  {
    title: 'Tri par insertion',
    type: 'Itératif',
    desc: 'Insère progressivement chaque élément dans la partie déjà triée.',
    steps: ['Prendre l’élément courant', 'Décaler les éléments plus grands', 'Insérer à la bonne position'],
  },
  {
    title: 'Tri par fusion',
    type: 'Récursif',
    desc: 'Divise la liste en sous-listes, les trie récursivement puis les fusionne.',
    steps: ['Diviser', 'Trier les sous-listes', 'Fusionner dans l’ordre'],
  },
  {
    title: 'Tri rapide',
    type: 'Récursif',
    desc: 'Choisit un pivot, partitionne la liste puis trie récursivement les deux parties.',
    steps: ['Choisir un pivot', 'Placer les plus petits à gauche', 'Trier les sous-listes'],
  },
];

const exceptionRows = [
  ['try', 'Contient les instructions susceptibles de provoquer une erreur.', 'Obligatoire'],
  ['except', 'Capture l’exception et applique un traitement adapté.', 'Peut cibler un type précis'],
  ['else', 'S’exécute uniquement si aucune exception n’est levée.', 'Optionnel'],
  ['finally', 'S’exécute dans tous les cas.', 'Idéal pour fermer un fichier ou libérer une ressource'],
  ['raise', 'Permet de lever volontairement une exception.', 'Utile pour signaler une situation anormale'],
];

const stringMethods = [
  ['upper()', 'Convertit en majuscules', '"maroc".upper() → "MAROC"'],
  ['lower()', 'Convertit en minuscules', '"MAROC".lower() → "maroc"'],
  ['capitalize()', 'Met la première lettre en majuscule', '"maroc".capitalize() → "Maroc"'],
  ['title()', 'Met la première lettre de chaque mot en majuscule', '"marrakech maroc".title()'],
  ['find(s)', 'Retourne l’indice de la première occurrence', 'a.find("e")'],
  ['count(s)', 'Compte le nombre d’occurrences', 'a.count("a")'],
  ['split()', 'Transforme une chaîne en liste', '"a b c".split()'],
  ['join(liste)', 'Assemble une liste en chaîne', '"***".join(["a", "b"])'],
  ['strip()', 'Supprime les espaces au début et à la fin', '" abc ".strip()'],
  ['replace(c1, c2)', 'Remplace toutes les occurrences', '"abc".replace("a", "x")'],
];

const pseudoPythonRows = [
  ['Affectation', 'X <- 5', 'x = 5'],
  ['Lecture', 'LIRE(X)', 'x = input("...")'],
  ['Écriture', 'ECRIRE(X)', 'print(x)'],
  ['Condition simple', 'Si C Alors ... Finsi', 'if c: ...'],
  ['Condition complète', 'Si C Alors ... Sinon ... Finsi', 'if c: ... else: ...'],
  ['Boucle Tant que', 'Tant que C faire ... Fin TantQue', 'while c: ...'],
  ['Boucle Pour', 'Pour i <- 0 à N faire ... FinPour', 'for i in range(N): ...'],
  ['Fonction', 'Fonction F(...) : type ... Retourner R Fin', 'def f(...): return r'],
  ['Procédure', 'Procedure P(...) : ... Fin', 'def p(...): ...'],
  ['Modulo', '17 mod 5', '17 % 5'],
  ['Puissance', '2^3', '2**3'],
  ['Division entière', '17 div 5', '17 // 5'],
  ['Exception', 'Non applicable', 'try: ... except ...: ...'],
];

const synthesisPoints = [
  'Un algorithme transforme des entrées en sorties grâce à des traitements organisés.',
  'Les structures fondamentales sont : séquence, condition et répétition.',
  'Les tableaux permettent de stocker plusieurs valeurs de même type.',
  'Les fonctions et procédures améliorent la structuration, la lisibilité et la réutilisation du code.',
  'La récursivité exige toujours une condition d’arrêt claire.',
  'Les exceptions rendent les programmes Python plus robustes.',
  'Les chaînes de caractères Python sont immuables mais disposent de nombreuses méthodes puissantes.',
];

const miniProjects = [
  {
    title: 'Calculateur de moyenne',
    desc: 'Saisir trois notes, calculer la moyenne et afficher une appréciation.',
    skills: 'Variables, lecture, écriture, condition.',
  },
  {
    title: 'Gestion simple d’une liste de notes',
    desc: 'Stocker des notes dans un tableau, calculer le maximum, le minimum et la moyenne.',
    skills: 'Tableaux, boucles, fonctions.',
  },
  {
    title: 'Vérificateur de mot de passe',
    desc: 'Contrôler la longueur et la présence de chiffres ou caractères spéciaux.',
    skills: 'Chaînes, conditions, fonctions.',
  },
  {
    title: 'Tri de nombres',
    desc: 'Implémenter et comparer le tri à bulles et le tri par insertion.',
    skills: 'Boucles imbriquées, algorithmes de tri.',
  },
];

function CodeBlock({ children }) {
  return (
    <pre className="mt-3 overflow-x-auto rounded-[12px] border border-border bg-slate-950 p-4 text-xs leading-6 text-slate-100">
      <code>{children}</code>
    </pre>
  );
}

function DataTable({ headers, rows }) {
  return (
    <div className="mt-4 overflow-x-auto">
      <table className="w-full min-w-[620px] text-sm text-text">
        <thead>
          <tr className="border-b border-border bg-primary-light/5 text-left">
            {headers.map((header) => (
              <th key={header} className="px-3 py-3 font-bold text-dark">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-border">
          {rows.map((row, index) => (
            <tr key={`${row.join('-')}-${index}`} className="transition hover:bg-bg">
              {row.map((cell, cellIndex) => (
                <td
                  key={`${cell}-${cellIndex}`}
                  className={`px-3 py-3 leading-6 ${cellIndex === 0 ? 'font-semibold text-dark' : ''}`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function InfoCard({ title, children, accent = false }) {
  return (
    <div
      className={`rounded-[14px] border p-4 ${
        accent ? 'border-primary-light/25 bg-primary-light/5' : 'border-border bg-bg'
      }`}
    >
      <h3 className="text-sm font-bold text-dark">{title}</h3>
      <div className="mt-2 text-sm leading-7 text-text">{children}</div>
    </div>
  );
}

function SectionTitle({ number, title, subtitle }) {
  return (
    <div className="mb-5">
      <div className="text-xs font-bold uppercase tracking-[0.16em] text-accent">
        Section {number}
      </div>
      <h2 className="mt-1 text-xl font-extrabold text-dark sm:text-2xl">{title}</h2>
      {subtitle ? <p className="mt-2 text-sm leading-7 text-text">{subtitle}</p> : null}
    </div>
  );
}

export default function S1AlgorithmiqueProgrammationPage() {
  const module = modulePages.find((item) => item.slug === slug);

  const getResourceLink = (resource) => {
    if (resource.href && resource.href !== '#') {
      return resource.href;
    }

    const query = `${module?.title ?? 'Algorithmique et Programmation Python'} ${resource.label} CRMEF`;
    return `https://drive.google.com/drive/search?q=${encodeURIComponent(query)}`;
  };

  return (
    <main className="section-shell bg-white">
      <div className="portfolio-container">
        <section className="mb-8 grid gap-6 lg:grid-cols-3">
          <article className="lg:col-span-2">
            <div className="rounded-[16px] border border-border bg-bg p-6 sm:p-8">
              <div className="text-xs font-bold uppercase tracking-[0.16em] text-accent">
                CRMEF Marrakech · Semestre 1 · 2025-2026
              </div>
              <h1 className="mt-2 text-2xl font-extrabold text-dark sm:text-3xl">
                {module?.title ?? 'Algorithmique et Programmation Python'}
              </h1>
              <p className="mt-3 text-sm leading-7 text-text">
                Support pédagogique modernisé pour comprendre la pensée algorithmique, représenter une solution en
                pseudo-code, puis la traduire progressivement en Python robuste et lisible.
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-primary-light/30 bg-white px-3 py-1 text-xs font-semibold text-primary-light"
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

        <section className="soft-card p-6 sm:p-8">
          <SectionTitle
            number="0"
            title="Avant-propos et plan du rapport"
            subtitle="Ce module suit une progression logique : comprendre le problème, modéliser, écrire un algorithme, coder en Python, tester et améliorer."
          />

          <div className="grid gap-4 md:grid-cols-3">
            <InfoCard title="Objectifs" accent>
              Comprendre les concepts fondamentaux, représenter un algorithme et produire un code Python clair.
            </InfoCard>
            <InfoCard title="Compétences" accent>
              Analyser, modéliser, écrire, tester, corriger et documenter une solution informatique.
            </InfoCard>
            <InfoCard title="Méthode" accent>
              Passer du langage naturel au pseudo-code, puis du pseudo-code au programme Python.
            </InfoCard>
          </div>

          <div className="mt-6 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {planItems.map((item, index) => (
              <div key={item} className="rounded-[12px] border border-border bg-white px-4 py-3 text-sm text-text">
                <span className="mr-2 font-bold text-primary-light">{String(index + 1).padStart(2, '0')}</span>
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="mt-8 space-y-8">
          <section className="soft-card p-6 sm:p-8">
            <SectionTitle
              number="1"
              title="Introduction à l’Algorithmique et à la Programmation"
              subtitle="L’informatique relie la pensée humaine à l’exécution machine. Un problème est d’abord analysé, puis transformé en algorithme avant d’être traduit en programme."
            />

            <div className="grid gap-4 lg:grid-cols-3">
              <InfoCard title="Langage de programmation">
                Ensemble de mots-clés et de règles syntaxiques permettant d’écrire un programme exécutable.
              </InfoCard>
              <InfoCard title="Programme">
                Suite ordonnée d’instructions permettant à l’ordinateur d’exécuter une tâche précise.
              </InfoCard>
              <InfoCard title="Algorithme">
                Séquence logique d’étapes transformant des entrées en sorties pour résoudre un problème donné.
              </InfoCard>
            </div>

            <div className="mt-6">
              <h3 className="text-base font-bold text-dark">▶ Propriétés d’un bon algorithme</h3>
              <DataTable headers={['Propriété', 'Définition']} rows={properties.map((p) => [p.name, p.desc])} />
            </div>

            <div className="mt-6">
              <h3 className="text-base font-bold text-dark">▶ Étapes de réalisation d’un programme</h3>
              <div className="mt-3 grid gap-3 md:grid-cols-5">
                {programmeSteps.map((step) => (
                  <div key={step.title} className="rounded-[14px] border border-border bg-bg p-4">
                    <p className="text-sm font-bold text-primary-light">{step.title}</p>
                    <p className="mt-2 text-sm leading-6 text-text">{step.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="soft-card p-6 sm:p-8">
            <SectionTitle
              number="2"
              title="Représentation d’un Algorithme"
              subtitle="Un algorithme peut être représenté en langage humain, en pseudo-code ou sous forme d’organigramme."
            />

            <div className="grid gap-4 lg:grid-cols-3">
              <InfoCard title="Langage humain">
                Formulation en langue naturelle. Elle facilite la compréhension initiale mais manque de précision.
              </InfoCard>
              <InfoCard title="Pseudo-code" accent>
                Représentation textuelle proche d’un langage de programmation, sans syntaxe stricte.
              </InfoCard>
              <InfoCard title="Organigramme">
                Représentation graphique utilisant des symboles normalisés pour visualiser le flux logique.
              </InfoCard>
            </div>

            <div className="mt-6">
              <h3 className="text-base font-bold text-dark">▶ Exemple : calcul d’une moyenne</h3>
              <CodeBlock>{`Variables NT1, NT2, NT3, MOY : Réel
Début
  LIRE (NT1)
  LIRE (NT2)
  LIRE (NT3)
  MOY <- (NT1 + NT2 + NT3) / 3
  ECRIRE (MOY)
Fin`}</CodeBlock>
            </div>

            <DataTable headers={['Symbole', 'Instruction représentée']} rows={organigrammeRows} />
          </section>

          <section className="soft-card p-6 sm:p-8">
            <SectionTitle
              number="3"
              title="Composants d’un Algorithme"
              subtitle="Tout algorithme est organisé autour des entrées, des traitements et des sorties."
            />

            <div className="grid gap-4 md:grid-cols-3">
              <InfoCard title="Entrées / Inputs" accent>
                Données fournies par l’utilisateur ou par un autre système.
              </InfoCard>
              <InfoCard title="Traitements" accent>
                Calculs, affectations, tests et transformations appliqués aux données.
              </InfoCard>
              <InfoCard title="Sorties / Outputs" accent>
                Résultats affichés, retournés ou sauvegardés après traitement.
              </InfoCard>
            </div>

            <div className="mt-6 grid gap-6 lg:grid-cols-2">
              <div>
                <h3 className="text-base font-bold text-dark">▶ Variables et constantes</h3>
                <DataTable headers={['Catégorie', 'Description', 'Représentation mémoire']} rows={dataCategories} />
              </div>
              <div>
                <h3 className="text-base font-bold text-dark">▶ Types numériques</h3>
                <DataTable headers={['Type', 'Plage de valeurs']} rows={numericTypes} />
              </div>
            </div>

            <div className="mt-6">
              <h3 className="text-base font-bold text-dark">▶ Lecture, écriture et affectation</h3>
              <CodeBlock>{`Prix <- Lire ("Donner le prix : ")
Ecrire ("Net à payer : ", Net)

X <- 20
S <- n1 + n2
X <- Y`}</CodeBlock>
            </div>

            <div className="mt-6">
              <h3 className="text-base font-bold text-dark">▶ Opérateurs arithmétiques</h3>
              <DataTable
                headers={['Opérateur', 'Fonction', 'Exemple algorithmique', 'Équivalent Python']}
                rows={arithmeticOperators}
              />
            </div>

            <div className="mt-6 grid gap-6 lg:grid-cols-2">
              <div>
                <h3 className="text-base font-bold text-dark">▶ Opérateurs relationnels</h3>
                <DataTable headers={['Algo', 'Python', 'Signification']} rows={relationalOperators} />
              </div>
              <div>
                <h3 className="text-base font-bold text-dark">▶ Opérateurs logiques</h3>
                <DataTable headers={['Algo', 'Python', 'Signification']} rows={logicalOperators} />
              </div>
            </div>
          </section>

          <section className="soft-card p-6 sm:p-8">
            <SectionTitle
              number="4"
              title="Structures de Contrôle"
              subtitle="Les structures de contrôle organisent l’ordre d’exécution des instructions : séquence, condition et répétition."
            />

            <div className="grid gap-4 lg:grid-cols-3">
              <InfoCard title="Structure séquentielle">
                Les instructions s’exécutent dans l’ordre, du début vers la fin.
              </InfoCard>
              <InfoCard title="Structure conditionnelle" accent>
                Les instructions dépendent d’une condition logique : Si...Alors...Sinon.
              </InfoCard>
              <InfoCard title="Structure répétitive">
                Une séquence d’actions est répétée selon une condition ou un compteur.
              </InfoCard>
            </div>

            <div className="mt-6 grid gap-5 lg:grid-cols-2">
              <div>
                <h3 className="text-base font-bold text-dark">▶ Condition complète</h3>
                <CodeBlock>{`Si Condition Alors
  Séquence1
Sinon
  Séquence2
Finsi`}</CodeBlock>
              </div>
              <div>
                <h3 className="text-base font-bold text-dark">▶ Forme enchaînée</h3>
                <CodeBlock>{`Si Condition1 Alors
  Séquence1
SinonSi Condition2 Alors
  Séquence2
Sinon
  SéquenceN
Finsi`}</CodeBlock>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="text-base font-bold text-dark">▶ Table de vérité</h3>
              <DataTable headers={['C1', 'C2', 'C1 ET C2', 'C1 OU C2', 'C1 XOR C2']} rows={truthTable} />
            </div>

            <div className="mt-6 grid gap-5 lg:grid-cols-3">
              <div>
                <h3 className="text-base font-bold text-dark">Tant que</h3>
                <CodeBlock>{`Tant que Condition(s) faire
  Instruction(s)
Fin TantQue`}</CodeBlock>
              </div>
              <div>
                <h3 className="text-base font-bold text-dark">Répéter jusqu’à</h3>
                <CodeBlock>{`Répéter
  Instruction(s)
Jusqu'à Condition(s)`}</CodeBlock>
              </div>
              <div>
                <h3 className="text-base font-bold text-dark">Pour</h3>
                <CodeBlock>{`POUR Compteur <- Vi A Vf FAIRE
  Instruction(s)
FinPour`}</CodeBlock>
              </div>
            </div>
          </section>

          <section className="soft-card p-6 sm:p-8">
            <SectionTitle
              number="5"
              title="Types de Données Avancés : Les Tableaux"
              subtitle="Un tableau regroupe plusieurs valeurs de même type sous un même nom, accessibles par indice."
            />

            <div className="grid gap-6 lg:grid-cols-2">
              <div>
                <h3 className="text-base font-bold text-dark">▶ Tableau à une dimension</h3>
                <p className="mt-2 text-sm leading-7 text-text">
                  Exemple : <span className="font-mono">t : entier [0..4]</span> ou{' '}
                  <span className="font-mono">t : entier [5]</span>
                </p>
                <DataTable headers={['', '0', '1', '2', '3', '4']} rows={table1d} />
              </div>
              <div>
                <h3 className="text-base font-bold text-dark">▶ Tableau à deux dimensions</h3>
                <p className="mt-2 text-sm leading-7 text-text">
                  Exemple : <span className="font-mono">t : entier [0..2, 0..3]</span>
                </p>
                <DataTable headers={['', '0', '1', '2', '3']} rows={table2d} />
              </div>
            </div>

            <div className="mt-5 rounded-[12px] border border-primary-light/20 bg-primary-light/5 p-4 text-sm leading-7 text-text">
              <p className="font-semibold text-dark">Opérations essentielles</p>
              <p>Accès : <span className="font-mono">t[2]</span> · Affectation : <span className="font-mono">A &lt;- t[3]</span> · Modification : <span className="font-mono">t[3] &lt;- 99</span> · Parcours : boucle itérative.</p>
            </div>
          </section>

          <section className="soft-card p-6 sm:p-8">
            <SectionTitle
              number="6"
              title="Sous-Algorithmes : Fonctions et Procédures"
              subtitle="Les sous-algorithmes structurent un programme en blocs logiques réutilisables."
            />

            <div className="grid gap-4 md:grid-cols-2">
              <InfoCard title="Fonction" accent>
                Sous-algorithme qui calcule et retourne un seul résultat. Elle est utilisée dans une expression.
              </InfoCard>
              <InfoCard title="Procédure" accent>
                Bloc d’actions nommé qui ne retourne pas forcément une valeur unique, mais peut modifier plusieurs données.
              </InfoCard>
            </div>

            <div className="mt-6 grid gap-5 lg:grid-cols-2">
              <div>
                <h3 className="text-base font-bold text-dark">▶ Déclaration d’une fonction</h3>
                <CodeBlock>{`Fonction nom_fonction ([par1, par2, ...]) : type de retour
Variables
  nom_var : TypeVar
Début
  Actions
  Retourner Resultat
Fin`}</CodeBlock>
              </div>
              <div>
                <h3 className="text-base font-bold text-dark">▶ Déclaration d’une procédure</h3>
                <CodeBlock>{`Procedure nom_procedure ([par1, par2, ...]) :
Variables
  nom_var : TypeVar
Début
  Actions
Fin`}</CodeBlock>
              </div>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <InfoCard title="Passage par valeur">
                Les valeurs des arguments sont copiées. Une modification interne n’affecte pas les variables originales.
              </InfoCard>
              <InfoCard title="Passage par référence">
                Les paramètres pointent vers les variables originales. Une modification interne agit sur les données d’origine.
              </InfoCard>
            </div>
          </section>

          <section className="soft-card p-6 sm:p-8">
            <SectionTitle
              number="7"
              title="Récursivité"
              subtitle="La récursivité consiste à faire appeler une fonction par elle-même pour résoudre un problème de taille réduite."
            />

            <div className="grid gap-4 md:grid-cols-2">
              <InfoCard title="Condition d’arrêt" accent>
                Cas de base qui stoppe la récursion et évite les appels infinis.
              </InfoCard>
              <InfoCard title="Appel récursif" accent>
                Appel de la fonction vers un sous-problème plus simple ou plus petit.
              </InfoCard>
            </div>

            <div className="mt-6 grid gap-5 lg:grid-cols-2">
              <div>
                <h3 className="text-base font-bold text-dark">▶ Factorielle itérative</h3>
                <CodeBlock>{`Variables N, Fact : Entier
Début
  Fact <- 1
  Pour i <- 1 à N
    Fact <- Fact * i
  i suivant
  Ecrire (Fact)
Fin`}</CodeBlock>
              </div>
              <div>
                <h3 className="text-base font-bold text-dark">▶ Factorielle récursive</h3>
                <CodeBlock>{`Fonction Fact (N : Entier) : Entier
Début
  Si N = 1 Alors
    Retourner 1
  Sinon
    Retourner N * Fact (N-1)
  FinSi
Fin`}</CodeBlock>
              </div>
            </div>

            <div className="mt-5 rounded-[12px] border border-border bg-bg p-4 text-sm leading-7 text-text">
              <p className="font-semibold text-dark">Trace pour N = 4</p>
              <p className="font-mono text-xs">Fact(4) → 4 × Fact(3) → 3 × Fact(2) → 2 × Fact(1) → 1 → 24</p>
            </div>
          </section>

          <section className="soft-card p-6 sm:p-8">
            <SectionTitle
              number="8"
              title="Algorithmes de Tri"
              subtitle="Les algorithmes de tri organisent les éléments d’une liste selon un ordre croissant ou décroissant."
            />

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {sortingAlgorithms.map((algo) => (
                <div key={algo.title} className="rounded-[14px] border border-border bg-bg p-4">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-base font-bold text-dark">{algo.title}</h3>
                    <span className="rounded-full border border-primary-light/25 bg-white px-2 py-0.5 text-xs font-semibold text-primary-light">
                      {algo.type}
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-7 text-text">{algo.desc}</p>
                  <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-6 text-text">
                    {algo.steps.map((step) => (
                      <li key={step}>{step}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-6">
              <h3 className="text-base font-bold text-dark">▶ Exemple : tri par insertion</h3>
              <DataTable
                headers={['Étape', 'État de la liste']}
                rows={[
                  ['Départ', '12 — 5 — 2 — 7'],
                  ['Insertion de 5', '5 — 12 — 2 — 7'],
                  ['Insertion de 2', '2 — 5 — 12 — 7'],
                  ['Insertion de 7', '2 — 5 — 7 — 12'],
                ]}
              />
            </div>
          </section>

          <section className="soft-card p-6 sm:p-8">
            <SectionTitle
              number="9"
              title="Programmation Python : Gestion des Exceptions"
              subtitle="Une exception est un objet créé lorsqu’une erreur se produit durant l’exécution. Python permet de l’intercepter pour éviter l’arrêt brutal du programme."
            />

            <DataTable headers={['Bloc', 'Rôle', 'Particularité']} rows={exceptionRows} />

            <div className="mt-6 grid gap-5 lg:grid-cols-2">
              <div>
                <h3 className="text-base font-bold text-dark">▶ Structure complète</h3>
                <CodeBlock>{`try:
    pass
except Exception:
    pass
else:
    pass
finally:
    pass`}</CodeBlock>
              </div>
              <div>
                <h3 className="text-base font-bold text-dark">▶ Exemple pratique</h3>
                <CodeBlock>{`try:
    a = int(input("Entrez a : "))
    b = int(input("Entrez b : "))
    x = b / a
except (ValueError, ZeroDivisionError):
    print("Erreur de saisie ou division par zéro")
else:
    print("Résultat :", x)
finally:
    print("Suite du programme")`}</CodeBlock>
              </div>
            </div>
          </section>

          <section className="soft-card p-6 sm:p-8">
            <SectionTitle
              number="10"
              title="Programmation Python : Chaînes de Caractères"
              subtitle="Une chaîne de caractères Python est une suite de caractères de type str, notée entre apostrophes ou guillemets."
            />

            <div className="grid gap-4 lg:grid-cols-3">
              <InfoCard title="Indexation">
                Les indices commencent à 0. Les indices négatifs permettent d’accéder depuis la fin.
              </InfoCard>
              <InfoCard title="Slicing" accent>
                <span className="font-mono">a[n:m]</span> extrait une sous-chaîne de n jusqu’à m-1.
              </InfoCard>
              <InfoCard title="Immutabilité">
                Une chaîne ne se modifie pas directement ; il faut construire une nouvelle chaîne.
              </InfoCard>
            </div>

            <div className="mt-6">
              <h3 className="text-base font-bold text-dark">▶ Exemples d’indexation et de slicing</h3>
              <CodeBlock>{`a = "Marrakech"
print(a[0], a[1])      # M a
print(a[-1], a[-3])    # h e
print(a[:3])           # Mar
print(a[3:])           # rakech
print(a[5:9])          # kech`}</CodeBlock>
            </div>

            <DataTable headers={['Méthode', 'Description', 'Exemple']} rows={stringMethods} />
          </section>

          <section className="soft-card p-6 sm:p-8">
            <SectionTitle
              number="11"
              title="Tableau comparatif : Pseudo-code vs Python"
              subtitle="Ce tableau facilite le passage de l’algorithmique à la programmation concrète."
            />

            <DataTable headers={['Construction', 'Pseudo-code', 'Python']} rows={pseudoPythonRows} />
          </section>

          <section className="soft-card p-6 sm:p-8">
            <SectionTitle
              number="12"
              title="Synthèse et annexes pédagogiques"
              subtitle="Cette partie résume les connaissances essentielles et propose des activités de consolidation."
            />

            <div className="grid gap-6 lg:grid-cols-2">
              <div>
                <h3 className="text-base font-bold text-dark">▶ Points clés à retenir</h3>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-text">
                  {synthesisPoints.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-base font-bold text-dark">▶ Checklist de révision</h3>
                <div className="mt-3 space-y-2">
                  {[
                    'Je sais distinguer variable et constante.',
                    'Je sais écrire une condition simple et composée.',
                    'Je sais choisir entre Tant que, Répéter et Pour.',
                    'Je sais parcourir un tableau 1D et 2D.',
                    'Je sais expliquer la différence entre fonction et procédure.',
                    'Je sais écrire une fonction récursive avec condition d’arrêt.',
                    'Je sais utiliser try / except en Python.',
                  ].map((item) => (
                    <label key={item} className="flex gap-2 rounded-[10px] border border-border bg-bg px-3 py-2 text-sm text-text">
                      <input type="checkbox" className="mt-1" />
                      <span>{item}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-base font-bold text-dark">▶ Mini-projets proposés</h3>
              <div className="mt-3 grid gap-4 md:grid-cols-2">
                {miniProjects.map((project) => (
                  <div key={project.title} className="rounded-[14px] border border-border bg-bg p-4">
                    <h4 className="text-sm font-bold text-primary-light">{project.title}</h4>
                    <p className="mt-2 text-sm leading-7 text-text">{project.desc}</p>
                    <p className="mt-2 text-xs font-semibold uppercase tracking-[0.08em] text-accent">
                      Compétences : {project.skills}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-base font-bold text-dark">▶ Grille d’évaluation rapide</h3>
              <DataTable
                headers={['Critère', 'Insuffisant', 'Satisfaisant', 'Excellent']}
                rows={[
                  ['Analyse du problème', 'Données mal identifiées', 'Données principales correctes', 'Analyse complète et claire'],
                  ['Algorithme', 'Étapes incomplètes', 'Étapes logiques et compréhensibles', 'Solution optimisée et robuste'],
                  ['Code Python', 'Erreurs fréquentes', 'Code fonctionnel', 'Code lisible, structuré et commenté'],
                  ['Tests', 'Peu ou pas de tests', 'Tests de base réalisés', 'Tests variés et correction des cas limites'],
                ]}
              />
            </div>
          </section>
        </section>
      </div>
    </main>
  );
}
