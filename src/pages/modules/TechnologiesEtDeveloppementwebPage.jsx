import { modulePages } from '../../data/portfolioData';

const slug = 's2-technologies-developpement-web';

const tags = ['HTML', 'CSS', 'JavaScript', 'DOM', 'PHP', 'Client / Serveur'];

const ficheModule = [
  ['Module', 'Complément de formation - Technologies et développement web'],
  ['Cycle', "Qualification des cadres d'enseignement"],
  ['Filière', 'Qualification des enseignants du secondaire collégial et du secondaire qualifiant'],
  ['Spécialité', 'Informatique'],
  ['Finalité', 'Concevoir et développer des sites et applications Web statiques et dynamiques à visée éducative'],
];

const objectifs = [
  'Découvrir les notions fondamentales liées au développement Web.',
  'Concevoir des sites Web statiques interactives.',
  'Développer des sites Web statiques interactives.',
  'Développer des applications Web dynamiques en utilisant un langage de programmation Web.',
];

const prerequis = ['Bases de données', 'Programmation structurée', 'Connaissances de base en Internet'];

const contenusModule = [
  {
    axe: 'Introduction au développement Web',
    contenu: 'Origines du Web, différence Internet/Web, fonctionnement du Web, client Web, serveur Web et communication client/serveur.',
    commentaire: '-',
  },
  {
    axe: 'Sites Web statiques',
    contenu: 'HTML pour la structure, CSS pour la présentation, JavaScript pour l’interactivité et la manipulation de la page.',
    commentaire: 'Page Web vs application Web ; référencement et hébergement d’un site Web.',
  },
  {
    axe: 'Sites Web dynamiques',
    contenu: 'Différence statique/dynamique, modèle client/serveur, PHP, syntaxe, variables, structures, fonctions, tableaux, fichiers, erreurs, formulaires et sécurité.',
    commentaire: '-',
  },
];

const htmlPoints = [
  ['Présentation du langage HTML', 'Langage de balisage utilisé pour structurer une page Web.'],
  ['Structuration d’une page Web', 'Organisation de la page en zones : en-tête, corps, titres, paragraphes, listes, liens, tableaux et formulaires.'],
  ['Principales balises', 'Balises de structure, de texte, de lien, d’image, de tableau et de formulaire.'],
  ['Création d’une page Web', 'Production d’un fichier HTML lisible par le navigateur.'],
  ['Intégration de ressources', 'Ajout de feuilles CSS, scripts JavaScript, images et autres ressources dans la page.'],
];

const cssPoints = [
  ['Présentation de CSS', 'Langage de style associé au HTML pour gérer l’apparence.'],
  ['Mise en forme des composants HTML', 'Application de règles de style aux titres, paragraphes, tableaux, boutons, formulaires et sections.'],
  ['Classes et identifiants', 'Sélecteurs permettant de cibler précisément des éléments HTML.'],
  ['Optimisation des feuilles de style', 'Organisation des styles internes et externes afin de rendre le code plus lisible et réutilisable.'],
];

const jsPoints = [
  ['Présentation du langage JavaScript', 'Langage Web standard exécuté principalement dans le navigateur.'],
  ['Bases de JavaScript', 'Variables, affichage, types, conditions, boucles, fonctions et événements.'],
  ['Manipulation d’une page JavaScript', 'Utilisation du DOM pour sélectionner, modifier et réagir aux éléments de la page.'],
];

const phpPoints = [
  ['Historique et versions', 'Repères généraux sur l’évolution de PHP comme langage Web serveur.'],
  ['Fonctionnalités et fonctionnement', 'Traitement côté serveur, génération de contenu dynamique, gestion des formulaires et interactions avec les données.'],
  ['Syntaxe d’un programme PHP', 'Code placé dans des balises PHP, instructions terminées par des points-virgules, variables et fonctions.'],
];

const notionsPhp = [
  ['Variables en PHP', 'Une variable commence par le symbole $, possède un nom et peut contenir une valeur de type texte, entier, réel ou booléen.'],
  ['Structures de contrôle', 'Conditions et boucles permettant d’orienter l’exécution du programme.'],
  ['Fonctions en PHP', 'Blocs d’instructions nommés, réutilisables, déclarés avec function, pouvant recevoir des paramètres et retourner une valeur.'],
  ['Variables tableaux PHP', 'Structures permettant de stocker plusieurs valeurs dans une même variable organisée.'],
  ['Manipulation de fichiers', 'Lecture, écriture ou gestion de fichiers côté serveur selon les besoins de l’application.'],
  ['Gestion des erreurs', 'Contrôle des situations anormales afin d’améliorer la fiabilité de l’application.'],
  ['Données des formulaires', 'Récupération et traitement des informations envoyées par l’utilisateur.'],
  ['Sécurité des applications Web', 'Protection des données, validation des entrées et prudence dans le traitement des informations utilisateurs.'],
];

const technologies = [
  ['HTML', 'Structurer le contenu d’une page Web.', 'Développement de sites Web statiques.'],
  ['CSS', 'Présenter et mettre en forme les composants HTML.', 'Feuilles de style, classes, identifiants, styles internes et externes.'],
  ['JavaScript', 'Ajouter de l’interactivité et manipuler la page.', 'Bases du langage, affichage, variables, fonctions, DOM.'],
  ['PHP', 'Créer des traitements côté serveur et des pages dynamiques.', 'Variables, structures de contrôle, fonctions, tableaux, fichiers, erreurs, formulaires, sécurité.'],
];

function Section({ id, title, children }) {
  return (
    <section id={id} className="soft-card scroll-mt-24 p-6 sm:p-8">
      <h2 className="text-xl font-extrabold text-dark sm:text-2xl">{title}</h2>
      <div className="mt-5 space-y-5">{children}</div>
    </section>
  );
}

function DataTable({ headers, rows }) {
  return (
    <div className="overflow-x-auto rounded-[14px] border border-border">
      <table className="w-full min-w-[640px] text-sm text-text">
        <thead className="bg-primary-light text-white">
          <tr>
            {headers.map((header) => (
              <th key={header} className="px-4 py-3 text-left font-semibold">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-border bg-white">
          {rows.map((row, index) => (
            <tr key={`${row[0]}-${index}`} className="odd:bg-bg/60">
              {row.map((cell, cellIndex) => (
                <td key={`${cell}-${cellIndex}`} className="px-4 py-3 align-top leading-6">
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

function CodeBlock({ language = 'code', children }) {
  return (
    <div className="overflow-hidden rounded-[14px] border border-border bg-slate-950">
      <div className="border-b border-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-slate-300">
        {language}
      </div>
      <pre className="overflow-x-auto p-4 text-xs leading-6 text-slate-100 sm:text-sm">
        <code>{children}</code>
      </pre>
    </div>
  );
}

function InfoCard({ title, children }) {
  return (
    <div className="rounded-[14px] border border-border bg-bg p-4">
      <h3 className="text-base font-bold text-dark">{title}</h3>
      <div className="mt-2 text-sm leading-7 text-text">{children}</div>
    </div>
  );
}

export default function TechnologiesEtDeveloppementwebPage() {
  const module = modulePages.find((item) => item.slug === slug);

  const getResourceLink = (resource) => {
    if (resource.href && resource.href !== '#') {
      return resource.href;
    }

    const query = `${module?.title ?? 'Technologies et développement web'} ${resource.label} CRMEF`;
    return `https://drive.google.com/drive/search?q=${encodeURIComponent(query)}`;
  };

  const navItems = [
    ['fiche', 'Fiche du module'],
    ['competences', 'Compétences'],
    ['contenus', 'Contenus'],
    ['axe1', 'Introduction Web'],
    ['axe2', 'Sites statiques'],
    ['axe3', 'PHP dynamique'],
    ['mise-en-oeuvre', 'Mise en œuvre'],
    ['evaluation', 'Évaluation'],
  ];

  return (
    <main className="section-shell bg-white">
      <div className="portfolio-container">
        <section className="mb-8 grid gap-6 lg:grid-cols-3">
          <article className="lg:col-span-2">
            <div className="rounded-[18px] border border-border bg-bg p-6 sm:p-8">
              <div className="text-xs font-bold uppercase tracking-[0.16em] text-accent">
                CRMEF Marrakech Safi · Informatique · S2
              </div>
              <h1 className="mt-2 text-2xl font-extrabold text-dark sm:text-3xl">
                {module?.title ?? 'Technologies et Développement Web'}
              </h1>
              <p className="mt-3 text-sm leading-7 text-text">
                Section complète du module sous forme de résumé professionnel : fonctionnement du Web,
                sites statiques avec HTML/CSS/JavaScript, manipulation du DOM et développement dynamique avec PHP.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {tags.map((tag) => (
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

        <section className="space-y-8">
          <Section id="fiche" title="1. Fiche synthétique du module">
            <DataTable headers={['Élément', 'Synthèse']} rows={ficheModule} />
          </Section>

          <Section id="competences" title="2. Compétence visée, objectifs et prérequis">
            <InfoCard title="Compétence visée">
              Au terme du module, le bénéficiaire est capable d’utiliser les technologies les plus récentes
              pour concevoir et développer des sites et des applications Web statiques et dynamiques pour des fins éducatives.
            </InfoCard>

            <div className="grid gap-4 lg:grid-cols-2">
              <InfoCard title="Objectifs du module">
                <ul className="list-disc space-y-1 pl-5">
                  {objectifs.map((objectif) => (
                    <li key={objectif}>{objectif}</li>
                  ))}
                </ul>
              </InfoCard>
              <InfoCard title="Prérequis">
                <ul className="list-disc space-y-1 pl-5">
                  {prerequis.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </InfoCard>
            </div>

            <DataTable
              headers={['Composantes', 'Cours', 'Travaux dirigés', 'Activités pratiques', 'Autres', 'Évaluation', 'VH global']}
              rows={[['Module', '6 h (18%)', '- (-)', '24 h (70%)', '- (-)', '4 h (12%)', '34 h (100%)']]}
            />
          </Section>

          <Section id="contenus" title="3. Contenus du module">
            <p className="text-sm leading-7 text-text">
              Le contenu du module s’organise autour de trois grands axes : introduction au développement Web,
              développement de sites Web statiques et développement de sites Web dynamiques.
            </p>
            <DataTable
              headers={['Axe', 'Contenu synthétique', 'Commentaires du syllabus']}
              rows={contenusModule.map((item) => [item.axe, item.contenu, item.commentaire])}
            />
          </Section>

          <Section id="axe1" title="4. Axe 1 — Introduction au développement Web">
            <div className="grid gap-4 lg:grid-cols-3">
              <InfoCard title="Définition et origines du Web">
                Le développement Web désigne la conception de ressources accessibles depuis un navigateur :
                pages, sites, applications et services interactifs.
              </InfoCard>
              <InfoCard title="Internet et Web">
                Internet est l’infrastructure mondiale de réseaux. Le Web est un service utilisant Internet
                pour consulter des ressources reliées par des liens hypertextes.
              </InfoCard>
              <InfoCard title="Fonctionnement du Web">
                Le navigateur demande une ressource au serveur. Le serveur traite la requête et renvoie
                une réponse affichable par le client Web.
              </InfoCard>
            </div>
            <DataTable
              headers={['Élément', 'Rôle']}
              rows={[
                ['Client Web', 'Navigateur ou application qui demande une ressource Web et affiche le résultat.'],
                ['Serveur Web', 'Machine ou logiciel qui héberge les ressources et répond aux requêtes.'],
                ['Communication client/serveur', 'Échange entre demande du client et réponse du serveur.'],
              ]}
            />
          </Section>

          <Section id="axe2" title="5. Axe 2 — Développement de sites Web statiques">
            <p className="text-sm leading-7 text-text">
              Un site Web statique repose principalement sur des fichiers HTML, CSS et JavaScript servis au navigateur.
              Son contenu est généralement envoyé tel qu’il est stocké, même s’il peut devenir interactif côté client grâce à JavaScript.
            </p>

            <div className="grid gap-5 lg:grid-cols-2">
              <div>
                <h3 className="text-base font-bold text-primary-light">5.1 Les fondamentaux de HTML</h3>
                <div className="mt-3">
                  <DataTable headers={['Point du syllabus', 'Résumé']} rows={htmlPoints} />
                </div>
              </div>
              <CodeBlock language="HTML">{`<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <title>Page Web</title>
</head>
<body>
  <h1>Titre de la page</h1>
  <p>Contenu principal.</p>
</body>
</html>`}</CodeBlock>
            </div>

            <div className="grid gap-5 lg:grid-cols-2">
              <div>
                <h3 className="text-base font-bold text-primary-light">5.2 Les feuilles de style CSS</h3>
                <div className="mt-3">
                  <DataTable headers={['Point du syllabus', 'Résumé']} rows={cssPoints} />
                </div>
              </div>
              <CodeBlock language="CSS">{`body {
  font-family: Arial, sans-serif;
  margin: 0;
}

.card {
  border: 1px solid #ddd;
  padding: 16px;
}

#titre {
  color: #0F4C81;
}`}</CodeBlock>
            </div>

            <div className="grid gap-5 lg:grid-cols-2">
              <div>
                <h3 className="text-base font-bold text-primary-light">5.3 JavaScript et DOM</h3>
                <p className="mt-2 text-sm leading-7 text-text">
                  JavaScript complète HTML et CSS en ajoutant le comportement et l’interactivité côté client.
                  Le DOM permet de sélectionner, modifier et faire réagir les éléments de la page.
                </p>
                <div className="mt-3">
                  <DataTable headers={['Point du syllabus', 'Résumé']} rows={jsPoints} />
                </div>
              </div>
              <CodeBlock language="JavaScript">{`const bouton = document.querySelector('button');

bouton.addEventListener('click', function () {
  alert('Bonjour !');
});`}</CodeBlock>
            </div>

            <DataTable
              headers={['Notion', 'Synthèse']}
              rows={[
                ['Page Web', 'Document Web consultable dans un navigateur.'],
                ['Application Web', 'Solution plus interactive proposant des traitements et services à l’utilisateur.'],
                ['Référencement', 'Organisation et optimisation permettant une meilleure visibilité du site.'],
                ['Hébergement', 'Mise en ligne des fichiers et services nécessaires au fonctionnement du site ou de l’application.'],
              ]}
            />
          </Section>

          <Section id="axe3" title="6. Axe 3 — Développement de sites Web dynamiques avec PHP">
            <p className="text-sm leading-7 text-text">
              Un site Web dynamique produit des pages dont le contenu peut changer selon les données,
              les utilisateurs, les formulaires ou les traitements réalisés côté serveur. PHP représente ici
              le langage de programmation Web utilisé pour introduire cette dimension dynamique.
            </p>

            <DataTable
              headers={['Aspect', 'Site statique', 'Site dynamique']}
              rows={[
                ['Contenu', 'Principalement fixe, défini dans les fichiers.', 'Produit ou adapté selon les traitements et données.'],
                ['Traitement', 'Côté client avec HTML/CSS/JS.', 'Côté serveur avec PHP et interaction possible avec des données.'],
                ['Usage', 'Présentation, information, pages simples.', 'Formulaires, gestion de données, espace utilisateur, services.'],
              ]}
            />

            <div className="grid gap-5 lg:grid-cols-2">
              <div>
                <h3 className="text-base font-bold text-primary-light">6.1 Présentation du langage PHP</h3>
                <div className="mt-3">
                  <DataTable headers={['Point PHP prévu', 'Résumé']} rows={phpPoints} />
                </div>
              </div>
              <CodeBlock language="PHP">{`<?php
$nom = "Sara";
echo "Bonjour " . $nom;
?>`}</CodeBlock>
            </div>

            <div>
              <h3 className="text-base font-bold text-primary-light">6.2 Notions PHP prévues dans le syllabus</h3>
              <div className="mt-3">
                <DataTable headers={['Notion', 'Résumé professionnel']} rows={notionsPhp} />
              </div>
            </div>

            <div className="grid gap-5 lg:grid-cols-2">
              <CodeBlock language="PHP — fonction">{`<?php
function addition($a, $b) {
  return $a + $b;
}

echo addition(5, 3);
?>`}</CodeBlock>
              <CodeBlock language="PHP — tableau">{`<?php
$notes = [12, 15, 14];

foreach ($notes as $note) {
  echo $note . "<br>";
}
?>`}</CodeBlock>
            </div>
          </Section>

          <Section id="mise-en-oeuvre" title="7. Mise en œuvre du module">
            <div className="grid gap-4 lg:grid-cols-3">
              <InfoCard title="Modalités">
                <ul className="list-disc space-y-1 pl-5">
                  <li>Exposé interactif et classe inversée.</li>
                  <li>Activités pratiques de mise en œuvre.</li>
                  <li>Autoformation et formation en ligne.</li>
                </ul>
              </InfoCard>
              <InfoCard title="Activités de formation">
                Construction de pages Web statiques, intégration de JavaScript, distinction entre statique et dynamique,
                installation d’un environnement PHP et construction d’applications dynamiques simples.
              </InfoCard>
              <InfoCard title="Réinvestissement professionnel">
                Le module soutient la transposition didactique du savoir savant vers le savoir à enseigner afin de concevoir
                des situations d’enseignement-apprentissage adaptées.
              </InfoCard>
            </div>
          </Section>

          <Section id="evaluation" title="8. Évaluation et synthèse professionnelle">
            <DataTable
              headers={['Modalité', 'Poids dans la note globale']}
              rows={[
                ['Contrôle continu', '25%'],
                ['Examen de fin de module', '75%'],
              ]}
            />

            <InfoCard title="Synthèse finale">
              Le module Technologies et développement Web articule progressivement les savoirs fondamentaux du Web
              et leur mise en pratique. Il part de la compréhension du fonctionnement Web et de la communication client/serveur,
              puis aborde la production de pages statiques avec HTML et CSS, l’interactivité avec JavaScript et DOM,
              et enfin la construction d’applications dynamiques avec PHP.
            </InfoCard>

            <DataTable headers={['Technologie', 'Rôle principal', 'Place dans le module']} rows={technologies} />
          </Section>
        </section>
      </div>
    </main>
  );
}
