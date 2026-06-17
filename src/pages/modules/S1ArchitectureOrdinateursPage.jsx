import { modulePages } from '../../data/portfolioData';
const slug = 's1-architecture-ordinateurs';

export default function S1ArchitectureOrdinateursPage() {
 const module = modulePages.find((item) => item.slug === slug);

  const getResourceLink = (resource) => {
    if (resource.href && resource.href !== '#') {
      return resource.href;
    }

    const query = `${module?.title ?? 'Architecture des ordinateurs'} ${resource.label} CRMEF`;
    return `https://drive.google.com/drive/search?q=${encodeURIComponent(query)}`;
  };

  return (
    <main className="section-shell bg-white">
      <div className="portfolio-container">

                    {/* ── En-tête ── */}
        <section className="mb-8 grid gap-6 lg:grid-cols-3">
          <article className="lg:col-span-2">
            {/* ── En-tête ── */}
            <div className="rounded-[16px] border border-border bg-bg p-6 sm:p-8">
              <div className="text-xs font-bold uppercase tracking-[0.16em] text-accent">
                CRMEF Marrakech · 2025-2026
              </div>
              <h1 className="mt-2 text-2xl font-extrabold text-dark sm:text-3xl">
                {module?.title ?? 'Architecture des ordinateurs'}
              </h1>
              <p className="mt-3 text-sm leading-7 text-text">
                Livret complet et detaille du module, avec les concepts fondamentaux de didactique, d&apos;epistemologie,
                de situations d&apos;apprentissage et de charge cognitive.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                { [
              "Information & Informatique",
              "Architecture Ordinateur",
              "Montage Matériel",
              "Numération & Codage",
              "Algèbre de Boole",
              "Portes Logiques",
              "CPU & Mémoires",
              "Karnaugh",
              "Circuits Combinatoires",
              "UAL",
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
              AXE 1 — Information, Informatique & Systèmes
          ══════════════════════════════════════════════ */}
          <section className="soft-card p-6 sm:p-8">
            <h2 className="text-xl font-extrabold text-dark">
              AXE 1 — Information, Informatique et Systèmes Informatiques
            </h2>
            <div className="mt-2 flex flex-wrap gap-2 text-xs text-text-light">
              {["Comprendre la notion d'information", "Situer l'informatique comme traitement automatique", "Vision fonctionnelle globale d'un système informatique"].map((o) => (
                <span key={o} className="rounded-full bg-bg border border-border px-3 py-1">{o}</span>
              ))}
            </div>

            {/* 1.1 Notion d'information */}
            <div className="mt-6">
              <h3 className="text-base font-bold text-dark">1.1 Notion d&apos;Information</h3>
              <div className="mt-3 overflow-x-auto">
                <table className="w-full text-sm text-text">
                  <thead>
                    <tr className="border-b border-border text-left">
                      {["Concept", "Définition", "Exemples"].map((h) => (
                        <th key={h} className="pb-2 pr-4 font-semibold text-dark last:pr-0">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {[
                      { c: "Donnée", d: "Valeur brute, non interprétée, issue de l'observation ou de la mesure. N'a pas de sens seule.", e: "25 | 101101 | « Ahmed » | 14/03/2026" },
                      { c: "Information", d: "Donnée traitée, organisée et interprétée, ayant du sens dans un contexte donné.", e: "« La température est de 25°C » | « Ahmed est absent »" },
                      { c: "Relation", d: "L'information = résultat du traitement des données.", e: "Données (notes) → Traitement → Information (moyenne : Admis/Ajourné)" },
                    ].map(({ c, d, e }) => (
                      <tr key={c}>
                        <td className="py-2 pr-4 font-bold text-primary-light whitespace-nowrap">{c}</td>
                        <td className="py-2 pr-4 leading-6">{d}</td>
                        <td className="py-2 leading-6 italic text-text-light">{e}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* 1.2 Formes, Nature, Support */}
            <div className="mt-6">
              <h3 className="text-base font-bold text-dark">1.2 Formes, Nature et Support de l&apos;Information</h3>
              <div className="mt-3 grid gap-3 sm:grid-cols-3">
                {[
                  { a: "Forme", def: "Manière dont l'information est représentée ou perçue (aspect visible).", ex: "Texte, Image, Son, Vidéo, Animation, Données numériques." },
                  { a: "Nature", def: "Degré de traitement et de signification (brut ↔ interprété).", ex: "Brute : tableau de notes | Traitée : moyenne calculée." },
                  { a: "Support", def: "Moyen matériel ou numérique pour stocker, transmettre ou afficher.", ex: "Papier, Écran, Disque dur, Clé USB, Serveur, Cloud." },
                ].map(({ a, def, ex }) => (
                  <div key={a} className="rounded-[12px] border border-border bg-bg p-4 text-sm">
                    <p className="font-bold text-dark">{a}</p>
                    <p className="mt-1 leading-6 text-text">{def}</p>
                    <p className="mt-1 italic text-text-light">{ex}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 1.3 Traitement */}
            <div className="mt-6">
              <h3 className="text-base font-bold text-dark">1.3 Traitement de l&apos;Information</h3>
              <p className="mt-2 text-sm text-text">
                Le traitement = ensemble d&apos;opérations automatiques sur des données d&apos;entrée pour produire une information exploitable.
              </p>
              <div className="mt-3 grid gap-4 sm:grid-cols-2">
                {/* Types de traitement */}
                <div className="rounded-[12px] border border-border bg-bg p-4 text-sm">
                  <p className="font-bold text-dark">Types de traitement</p>
                  <div className="mt-2 space-y-1">
                    {[
                      { t: "Manuel", d: "Effectué par l'être humain (ex : calcul de moyenne à la main)." },
                      { t: "Semi-automatique", d: "Partiellement assisté par une machine (ex : calculatrice)." },
                      { t: "Automatique", d: "Totalement pris en charge par le système informatique." },
                    ].map(({ t, d }) => (
                      <div key={t} className="rounded-[8px] bg-white px-3 py-2 text-text">
                        <span className="font-semibold text-dark">{t} : </span>{d}
                      </div>
                    ))}
                  </div>
                </div>
                {/* 4 catégories */}
                <div className="rounded-[12px] border border-border bg-bg p-4 text-sm">
                  <p className="font-bold text-dark">4 Catégories d&apos;opérations</p>
                  <div className="mt-2 space-y-1">
                    {[
                      { c: "Arithmétiques", o: "Addition, Soustraction, Multiplication, Division." },
                      { c: "Logiques", o: "Comparaison, Décision, Sélection." },
                      { c: "De gestion", o: "Tri, Recherche, Classement, Stockage." },
                      { c: "De transformation", o: "Codage/Décodage, Conversion de formats, Mise en forme." },
                    ].map(({ c, o }) => (
                      <div key={c} className="rounded-[8px] bg-white px-3 py-2 text-text">
                        <span className="font-semibold text-dark">{c} : </span>{o}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <p className="mt-3 rounded-[10px] bg-bg px-4 py-2 text-sm text-text">
                💡 <span className="font-semibold text-dark">Qui réalise le traitement ?</span> → Le CPU (processeur), en exécutant des instructions stockées en mémoire.
              </p>
            </div>

            {/* 1.4 Définition */}
            <div className="mt-6">
              <h3 className="text-base font-bold text-dark">1.4 Définition de l&apos;Informatique</h3>
              <div className="mt-3 rounded-[12px] border border-border bg-bg p-4 text-sm">
                <p className="text-text leading-6">
                  L&apos;informatique est la <strong>science du traitement automatique de l&apos;information</strong> à l&apos;aide d&apos;un ordinateur.
                </p>
                <p className="mt-2 font-mono text-primary-light">
                  INFORMAT<span className="underline">ique</span> = INFORMAT<span className="underline">ion</span> + auto<span className="underline">MATIQUE</span>
                </p>
              </div>
              <div className="mt-3 grid gap-3 sm:grid-cols-3">
                {[
                  { q: "Pourquoi «science» ?", r: "Repose sur des règles, modèles, algorithmes et méthodes formelles." },
                  { q: "Pourquoi «traitement» ?", r: "Opérations effectuées sur les données pour produire une information." },
                  { q: "Pourquoi «automatique» ?", r: "La machine exécute les instructions sans intervention humaine continue." },
                ].map(({ q, r }) => (
                  <div key={q} className="rounded-[12px] border border-border bg-bg p-4 text-sm">
                    <p className="font-bold text-dark">{q}</p>
                    <p className="mt-1 leading-6 text-text">{r}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 1.5 Système Informatique */}
            <div className="mt-6">
              <h3 className="text-base font-bold text-dark">1.5 Système Informatique</h3>
              <p className="mt-2 text-sm text-text">
                Ensemble organisé de ressources matérielles, logicielles et humaines permettant d&apos;acquérir, traiter, stocker et restituer de l&apos;information.
              </p>
              <p className="mt-2 rounded-[10px] bg-bg px-4 py-2 text-sm font-semibold text-dark">
                Système Informatique = Matériel (Hardware) + Logiciel (Software)
              </p>
              <div className="mt-3 overflow-x-auto">
                <table className="w-full text-sm text-text">
                  <thead>
                    <tr className="border-b border-border text-left">
                      {["Composante", "Description", "Exemples"].map((h) => (
                        <th key={h} className="pb-2 pr-4 font-semibold text-dark last:pr-0">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {[
                      { c: "Matériel (Hardware)", d: "Partie physique de l'ordinateur.", e: "CPU, RAM, Clavier, Écran, Disque dur." },
                      { c: "Logiciel de base", d: "Indispensable au fonctionnement du matériel.", e: "Windows, Linux, Mac OS." },
                      { c: "Logiciel d'application", d: "Répond aux besoins spécifiques de l'utilisateur.", e: "Word, Navigateur, Jeux, Encyclopédie." },
                      { c: "Données", d: "Informations traitées par le système.", e: "Fichiers texte, images, bases de données." },
                      { c: "Utilisateur", d: "Acteur humain qui interagit avec le système.", e: "Élève, enseignant, administrateur." },
                    ].map(({ c, d, e }) => (
                      <tr key={c}>
                        <td className="py-2 pr-4 font-bold text-primary-light whitespace-nowrap">{c}</td>
                        <td className="py-2 pr-4 leading-6">{d}</td>
                        <td className="py-2 leading-6 italic text-text-light">{e}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* 1.6 Schéma Fonctionnel */}
            <div className="mt-6">
              <h3 className="text-base font-bold text-dark">1.6 Schéma Fonctionnel d&apos;un Système Informatique</h3>
              <div className="mt-3 flex flex-col items-stretch gap-2 sm:flex-row sm:items-center">
                {[
                  { step: "ENTRÉE", fn: "Collecte via périphériques d'entrée", ex: "Clavier (saisie des notes)", color: "border-blue-200 bg-blue-50 text-blue-700" },
                  { step: "TRAITEMENT", fn: "Transformation automatique selon un programme", ex: "Calcul de la moyenne + comparaison au seuil", color: "border-orange-200 bg-orange-50 text-orange-700" },
                  { step: "SORTIE", fn: "Présentation ou stockage des résultats", ex: "Affichage : « Admis » ou « Ajourné »", color: "border-green-200 bg-green-50 text-green-700" },
                  { step: "STOCKAGE", fn: "Conservation permanente des données", ex: "Enregistrement en fichier / base de données", color: "border-purple-200 bg-purple-50 text-purple-700" },
                ].map(({ step, fn, ex, color }, i, arr) => (
                  <div key={step} className="flex flex-1 items-center gap-2">
                    <div className={`flex-1 rounded-[12px] border p-4 text-sm ${color}`}>
                      <p className="font-extrabold">{step}</p>
                      <p className="mt-1 text-xs leading-5">{fn}</p>
                      <p className="mt-1 text-xs italic opacity-80">{ex}</p>
                    </div>
                    {i < arr.length - 1 && (
                      <span className="hidden shrink-0 text-xl text-text-light sm:block">→</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ══════════════════════════════════════════════
              AXE 2 — Architecture et Fonctionnement
          ══════════════════════════════════════════════ */}
          <section className="soft-card p-6 sm:p-8">
            <h2 className="text-xl font-extrabold text-dark">
              AXE 2 — Architecture et Fonctionnement d&apos;un Ordinateur
            </h2>

            {/* 2.1 Von Neumann vs Harvard */}
            <div className="mt-5">
              <h3 className="text-base font-bold text-dark">2.1 Architectures de Base</h3>
              <div className="mt-3 grid gap-4 sm:grid-cols-2">
                {[
                  {
                    n: "Von Neumann",
                    p: "Données et programmes dans la même mémoire, traités par le processeur.",
                    ex: "Microsoft Word : le programme ET le texte « Bonjour » dans la même RAM.",
                    color: "border-blue-200 bg-blue-50",
                    badge: "text-blue-700",
                  },
                  {
                    n: "Harvard",
                    p: "Mémoire programmes séparée de la mémoire données, bus distincts.",
                    ex: "Microcontrôleurs, DSP : programme ROM ↔ données RAM séparées.",
                    color: "border-green-200 bg-green-50",
                    badge: "text-green-700",
                  },
                ].map(({ n, p, ex, color, badge }) => (
                  <div key={n} className={`rounded-[12px] border p-4 text-sm ${color}`}>
                    <p className={`font-bold text-lg ${badge}`}>{n}</p>
                    <p className="mt-2 leading-6 text-text">{p}</p>
                    <p className="mt-2 rounded-[8px] bg-white px-3 py-2 italic text-text-light">{ex}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 2.2 Unité centrale */}
            <div className="mt-6">
              <h3 className="text-base font-bold text-dark">2.2 Unité Centrale (Boîtier)</h3>
              <p className="mt-2 text-sm text-text">
                3 fonctions : ① Recevoir ② Traiter ③ Envoyer les informations.
              </p>
              <div className="mt-3 overflow-x-auto">
                <table className="w-full text-sm text-text">
                  <thead>
                    <tr className="border-b border-border text-left">
                      {["Composant", "Rôle"].map((h) => (
                        <th key={h} className="pb-2 pr-4 font-semibold text-dark last:pr-0">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {[
                      { c: "Carte mère (Motherboard)", r: "Connecte tous les composants : CPU, RAM, disque dur, périphériques." },
                      { c: "Bloc d'alimentation (PSU)", r: "Fournit l'électricité stable à tous les composants." },
                      { c: "Ventilateur / Dissipateur", r: "Refroidit le processeur, évite la surchauffe." },
                      { c: "Pile CMOS (CR2032)", r: "Maintient la date/heure et les paramètres BIOS quand l'ordinateur est éteint." },
                    ].map(({ c, r }) => (
                      <tr key={c}>
                        <td className="py-2 pr-4 font-bold text-primary-light whitespace-nowrap">{c}</td>
                        <td className="py-2 leading-6">{r}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-3 rounded-[10px] bg-bg px-4 py-2 text-xs text-text">
                <span className="font-semibold text-dark">Ports principaux : </span>
                USB, VGA/DVI/HDMI (image), Ethernet RJ45 (réseau), Jack 3.5mm (audio), PS/2 (claviers/souris), COM RS232.
              </p>
            </div>

            {/* 2.3 CPU */}
            <div className="mt-6">
              <h3 className="text-base font-bold text-dark">2.3 Le Processeur (CPU)</h3>
              <p className="mt-2 text-sm text-text">
                <strong>CPU = Central Processing Unit.</strong> Lit, interprète et exécute les instructions. Sans CPU, l&apos;ordinateur ne peut pas fonctionner.
              </p>
              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                {/* Parties du CPU */}
                <div className="rounded-[12px] border border-border bg-bg p-4 text-sm">
                  <p className="font-bold text-dark">Parties du CPU</p>
                  <div className="mt-2 space-y-1">
                    {[
                      { n: "UC — Unité de Contrôle", r: "Pilote le processeur : lit l'instruction en RAM, décode, envoie des signaux, gère le séquençage." },
                      { n: "UAL / ALU", r: "Calcule (+ − × ÷), réalise des opérations logiques (ET, OU, NON), compare des valeurs." },
                      { n: "Registres", r: "Mémoire interne ultra-rapide : stockent temporairement données, adresses, résultats." },
                      { n: "Horloge (Clock)", r: "Donne le rythme en Hz/GHz. Plus la fréquence est élevée, plus le CPU exécute d'étapes/seconde." },
                    ].map(({ n, r }) => (
                      <div key={n} className="rounded-[8px] bg-white px-3 py-2 text-text">
                        <span className="font-semibold text-dark">{n} : </span>{r}
                      </div>
                    ))}
                  </div>
                </div>
                {/* Facteurs de performance */}
                <div className="rounded-[12px] border border-border bg-bg p-4 text-sm">
                  <p className="font-bold text-dark">Facteurs de performance</p>
                  <div className="mt-2 space-y-1">
                    {[
                      { f: "Fréquence (GHz)", r: "Vitesse des cycles d'horloge (opérations par seconde)." },
                      { f: "Nombre de cœurs", r: "Permet des exécutions parallèles et un meilleur multitâche." },
                      { f: "Mémoire cache (L1/L2/L3)", r: "Mémoire très rapide qui réduit les accès à la RAM." },
                      { f: "Architecture / IPC", r: "Nombre d'instructions exécutées par cycle d'horloge." },
                      { f: "Largeur (32/64 bits)", r: "Capacité de traitement et d'adressage mémoire." },
                    ].map(({ f, r }) => (
                      <div key={f} className="rounded-[8px] bg-white px-3 py-2 text-text">
                        <span className="font-semibold text-dark">{f} : </span>{r}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* 2.4 Cycle FDE */}
            <div className="mt-6">
              <h3 className="text-base font-bold text-dark">2.4 Cycle Fetch–Decode–Execute (FDE)</h3>
              <div className="mt-3 flex flex-col gap-2 sm:flex-row">
                {[
                  { step: "1. FETCH", label: "Chargement", desc: "PC contient l'adresse → CPU lit l'instruction en RAM → placée dans registre IR.", res: "L'instruction est dans le CPU.", color: "bg-blue-50 border-blue-200 text-blue-700" },
                  { step: "2. DECODE", label: "Décodage", desc: "UC analyse l'instruction : type d'opération ? données ? registres ? → prépare signaux.", res: "Le CPU sait exactement quoi faire.", color: "bg-orange-50 border-orange-200 text-orange-700" },
                  { step: "3. EXECUTE", label: "Exécution", desc: "L'ALU réalise le calcul/la comparaison, ou le transfert de données.", res: "L'action demandée est faite.", color: "bg-green-50 border-green-200 text-green-700" },
                  { step: "4. WRITE BACK", label: "Écriture", desc: "Le résultat est écrit dans un registre ou en RAM → PC mis à jour.", res: "Prêt pour un nouveau cycle.", color: "bg-purple-50 border-purple-200 text-purple-700" },
                ].map(({ step, label, desc, res, color }) => (
                  <div key={step} className={`flex-1 rounded-[12px] border p-4 text-sm ${color}`}>
                    <p className="font-extrabold">{step}</p>
                    <p className="text-xs font-semibold opacity-80">({label})</p>
                    <p className="mt-2 text-xs leading-5 text-text">{desc}</p>
                    <p className="mt-2 rounded-[6px] bg-white px-2 py-1 text-xs font-semibold text-dark">✔ {res}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 2.5 Mémoires */}
            <div className="mt-6">
              <h3 className="text-base font-bold text-dark">2.5 Les Mémoires</h3>
              <div className="mt-3 overflow-x-auto">
                <table className="w-full text-sm text-text">
                  <thead>
                    <tr className="border-b border-border text-left">
                      {["Type", "Nature", "Rôle", "Caractéristiques"].map((h) => (
                        <th key={h} className="pb-2 pr-4 font-semibold text-dark last:pr-0">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {[
                      { t: "RAM", n: "Volatile (s'efface à l'extinction)", r: "Mémoire principale : charge et exécute programmes et données.", c: "Rapide, types : DRAM, SRAM, DDR4, DDR5." },
                      { t: "ROM", n: "Non volatile (données permanentes)", r: "Stocke le firmware/BIOS, données essentielles immuables.", c: "Durable, faible consommation, faible capacité." },
                      { t: "HDD", n: "Non volatile", r: "Stockage secondaire grande capacité à prix abordable.", c: "Plus lent (mécanique), grande capacité." },
                      { t: "SSD", n: "Non volatile", r: "Stockage rapide sans pièces mécaniques.", c: "Flash, rapide et fiable." },
                      { t: "Clé USB / Carte SD", n: "Non volatile", r: "Stockage portable.", c: "Flash, amovible, pratique." },
                    ].map(({ t, n, r, c }) => (
                      <tr key={t}>
                        <td className="py-2 pr-4 font-bold text-primary-light">{t}</td>
                        <td className="py-2 pr-4 leading-6">{n}</td>
                        <td className="py-2 pr-4 leading-6">{r}</td>
                        <td className="py-2 leading-6 italic text-text-light">{c}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* 2.6 Périphériques */}
            <div className="mt-6">
              <h3 className="text-base font-bold text-dark">2.6 Les Périphériques</h3>
              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                {[
                  { t: "🖱️ Entrée", d: "Envoie des informations vers l'ordinateur.", e: "Clavier, Souris, Scanner, Webcam, Microphone, Lecteur CD." },
                  { t: "🖥️ Sortie", d: "Reçoit les informations de l'ordinateur pour les présenter à l'utilisateur.", e: "Écran/Moniteur, Imprimante, Haut-parleur, Vidéoprojecteur." },
                  { t: "🔄 Entrée/Sortie", d: "Assure les deux fonctions simultanément.", e: "Casque + micro, Modem, Graveur CD/DVD, Écran tactile." },
                  { t: "💾 Stockage", d: "Conserve les données de façon permanente.", e: "Disque dur externe, Clé USB, Carte SD, SSD externe." },
                ].map(({ t, d, e }) => (
                  <div key={t} className="rounded-[12px] border border-border bg-bg p-4 text-sm">
                    <p className="font-bold text-dark">{t}</p>
                    <p className="mt-1 leading-6 text-text">{d}</p>
                    <p className="mt-1 italic text-text-light">{e}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 2.7 Bus */}
            <div className="mt-6">
              <h3 className="text-base font-bold text-dark">2.7 Les Bus de Communication</h3>
              <p className="mt-2 text-sm text-text">
                Les bus = routes électriques reliant le CPU aux autres composants (RAM, périphériques).
              </p>
              <div className="mt-3 grid gap-3 sm:grid-cols-3">
                {[
                  { b: "Bus de données", r: "Transporte les données entre composants." },
                  { b: "Bus d'adresses", r: "Indique l'emplacement mémoire où lire/écrire." },
                  { b: "Bus de contrôle", r: "Transmet les signaux de commande (lecture, écriture, interruption)." },
                ].map(({ b, r }) => (
                  <div key={b} className="rounded-[12px] border border-border bg-bg p-4 text-sm text-center">
                    <p className="font-bold text-dark">{b}</p>
                    <p className="mt-1 leading-6 text-text">{r}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ══════════════════════════════════════════════
              AXE 3 — Montage et Configuration Matérielle
          ══════════════════════════════════════════════ */}
          <section className="soft-card p-6 sm:p-8">
            <h2 className="text-xl font-extrabold text-dark">
              AXE 3 — Activité Pratique : Montage et Configuration Matérielle
            </h2>

            {/* 3.1 Sécurité */}
            <div className="mt-5">
              <h3 className="text-base font-bold text-dark">⚠️ 3.1 Règles de Sécurité Matérielle</h3>
              <div className="mt-3 grid gap-2 sm:grid-cols-2">
                {[
                  { r: "Débrancher l'ordinateur", o: "Éviter tout risque d'électrocution ou de court-circuit." },
                  { r: "Porter un bracelet antistatique", o: "Empêcher les décharges électrostatiques destructrices." },
                  { r: "Manipuler avec précaution", o: "Ne jamais toucher circuits imprimés, pins ou connecteurs dorés." },
                  { r: "Surface non conductrice", o: "Bois, plastique ou tapis antistatique — jamais sur métal." },
                  { r: "Ne jamais forcer", o: "Si un composant résiste, vérifier orientation et alignement." },
                  { r: "Organiser les vis", o: "Utiliser des bols ou sachets pour ne pas perdre les petites pièces." },
                ].map(({ r, o }) => (
                  <div key={r} className="flex gap-2 rounded-[10px] border border-border bg-bg px-3 py-2 text-sm text-text">
                    <span className="shrink-0 font-semibold text-dark">{r} :</span>
                    <span>{o}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 3.2 Démontage */}
            <div className="mt-6">
              <h3 className="text-base font-bold text-dark">🔧 3.2 Démontage — Étapes et Précautions</h3>
              <div className="mt-3 overflow-x-auto">
                <table className="w-full text-sm text-text">
                  <thead>
                    <tr className="border-b border-border text-left">
                      {["Étape", "Procédure", "Précaution"].map((h) => (
                        <th key={h} className="pb-2 pr-4 font-semibold text-dark last:pr-0">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {[
                      { e: "1. Arrêt & débranchement", p: "Arrêt normal → attendre extinction → débrancher câble alimentation.", pr: "Ne jamais couper en cours de fonctionnement." },
                      { e: "2. Ouverture du boîtier", p: "Dévisser les vis arrière → glisser panneau latéral.", pr: "Ne pas forcer." },
                      { e: "3. Dissipateur thermique", p: "Débrancher CPU_FAN → dévisser en croix → soulever doucement.", pr: "Ne pas forcer (pâte thermique)." },
                      { e: "4. Processeur (CPU)", p: "Appuyer sur le levier → tirer → saisir CPU par les bords.", pr: "Ne pas toucher les contacts, ne jamais forcer." },
                      { e: "5. RAM", p: "Appuyer sur les clips latéraux → barrette se soulève → saisir par les bords.", pr: "Ne pas toucher les contacts dorés." },
                      { e: "6. Alimentation (PSU)", p: "Débrancher tous câbles (24-pin, 8-pin CPU, SATA...) → dévisser → retirer.", pr: "Ordinateur totalement hors tension." },
                      { e: "7. Pile CMOS", p: "Appuyer sur clip métallique → pile se soulève → retirer.", pr: "Ne pas forcer le support." },
                      { e: "8. Disque dur 3.5''", p: "Débrancher câble SATA + alimentation → dévisser → tirer hors de la baie.", pr: "Surface antistatique." },
                      { e: "9. SSD M.2", p: "Dévisser petite vis → SSD se soulève à ~30° → tirer doucement.", pr: "Ne pas plier, tenir par les bords." },
                      { e: "10. Carte graphique (GPU)", p: "Dévisser fixation → appuyer sur loquet PCIe → tirer vers le haut.", pr: "Manipuler par les bords." },
                      { e: "11. Ventilateurs internes", p: "Débrancher câble → dévisser → retirer délicatement.", pr: "Tenir par le cadre, pas les pales." },
                      { e: "12. Carte mère", p: "Débrancher tous câbles → dévisser toutes les vis → soulever par les bords.", pr: "Ne jamais plier la carte." },
                    ].map(({ e, p, pr }) => (
                      <tr key={e}>
                        <td className="py-2 pr-4 font-bold text-primary-light whitespace-nowrap">{e}</td>
                        <td className="py-2 pr-4 leading-6">{p}</td>
                        <td className="py-2 leading-6 italic text-text-light">{pr}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* 3.3 Montage */}
            <div className="mt-6">
              <h3 className="text-base font-bold text-dark">🔩 3.3 Montage — Ordre d&apos;Installation</h3>
              <div className="mt-3 overflow-x-auto">
                <table className="w-full text-sm text-text">
                  <thead>
                    <tr className="border-b border-border text-left">
                      {["Ordre", "Composant", "Point clé"].map((h) => (
                        <th key={h} className="pb-2 pr-4 font-semibold text-dark last:pr-0">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {[
                      { o: "1", c: "Carte mère", k: "Aligner les trous → visser progressivement." },
                      { o: "2", c: "Processeur (CPU)", k: "Ouvrir levier → aligner encoches → abaisser levier." },
                      { o: "3", c: "Dissipateur + ventilateur CPU", k: "Appliquer pâte thermique → visser en croix → brancher CPU_FAN." },
                      { o: "4", c: "Mémoire RAM", k: "Ouvrir clips → aligner encoche → presser jusqu'au clic." },
                      { o: "5", c: "Carte graphique (GPU)", k: "Insérer dans slot PCIe → clic du loquet → visser fixation arrière." },
                      { o: "6", c: "Disques durs (HDD/SSD)", k: "Insérer baie → visser → brancher SATA + alimentation." },
                      { o: "7", c: "Alimentation (PSU)", k: "Placer → visser → brancher 24-pin, 8-pin CPU, SATA." },
                      { o: "8", c: "Ventilateurs internes", k: "Positionner → visser → brancher sur carte mère." },
                      { o: "9", c: "Pile CMOS", k: "Insérer dans support → vérifier contact." },
                      { o: "10", c: "Fermeture boîtier", k: "Remettre le panneau latéral → visser." },
                    ].map(({ o, c, k }) => (
                      <tr key={o}>
                        <td className="py-2 pr-4 font-bold text-primary-light">{o}</td>
                        <td className="py-2 pr-4 font-medium text-dark">{c}</td>
                        <td className="py-2 leading-6 text-text">{k}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* 3.4 Configurations */}
            <div className="mt-6">
              <h3 className="text-base font-bold text-dark">💻 3.4 Choisir une Configuration selon un Besoin</h3>
              <div className="mt-3 overflow-x-auto">
                <table className="w-full text-sm text-text">
                  <thead>
                    <tr className="border-b border-border text-left">
                      {["Composant", "Bureautique", "Gaming", "Montage / Design Vidéo"].map((h) => (
                        <th key={h} className="pb-2 pr-4 font-semibold text-dark last:pr-0">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {[
                      { c: "Processeur", b: "Standard (2-4 cœurs)", g: "Performant (6-8 cœurs)", m: "Multi-cœurs (8-12+)" },
                      { c: "Fréquence CPU", b: "Moyenne", g: "Élevée", m: "Très élevée" },
                      { c: "RAM", b: "8 Go DDR4", g: "16 Go DDR4/DDR5 rapide", m: "16–32 Go DDR4/DDR5 rapide" },
                      { c: "Stockage", b: "SSD 256 Go", g: "SSD 512 Go +", m: "SSD 512 Go + HDD secondaire" },
                      { c: "Carte graphique", b: "Intégrée", g: "Dédiée performante", m: "Dédiée puissante" },
                      { c: "Résumé", b: "Simple et économique", g: "Équilibrée", m: "Puissante, lourde et rapide" },
                    ].map(({ c, b, g, m }) => (
                      <tr key={c}>
                        <td className="py-2 pr-4 font-bold text-primary-light">{c}</td>
                        <td className="py-2 pr-4 leading-6">{b}</td>
                        <td className="py-2 pr-4 leading-6">{g}</td>
                        <td className="py-2 leading-6">{m}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* ══════════════════════════════════════════════
              AXE 4 — Numération et Codage
          ══════════════════════════════════════════════ */}
          <section className="soft-card p-6 sm:p-8">
            <h2 className="text-xl font-extrabold text-dark">
              AXE 4 — Numération et Codage de l&apos;Information
            </h2>

            {/* 4.1 Systèmes de numération */}
            <div className="mt-5">
              <h3 className="text-base font-bold text-dark">4.1 Les Systèmes de Numération</h3>
              <div className="mt-3 grid gap-3 sm:grid-cols-4">
                {[
                  { s: "Décimal", b: "10", sym: "0–9", u: "Vie quotidienne", color: "border-blue-200 bg-blue-50 text-blue-700" },
                  { s: "Binaire", b: "2", sym: "0, 1", u: "Base de l'informatique (machine)", color: "border-orange-200 bg-orange-50 text-orange-700" },
                  { s: "Octal", b: "8", sym: "0–7", u: "Représentation compacte du binaire", color: "border-green-200 bg-green-50 text-green-700" },
                  { s: "Hexadécimal", b: "16", sym: "0–9, A–F", u: "Adresses mémoire, codes couleur", color: "border-purple-200 bg-purple-50 text-purple-700" },
                ].map(({ s, b, sym, u, color }) => (
                  <div key={s} className={`rounded-[12px] border p-4 text-sm text-center ${color}`}>
                    <p className="text-xl font-extrabold">Base {b}</p>
                    <p className="mt-1 font-bold">{s}</p>
                    <p className="mt-2 rounded-[6px] bg-white px-2 py-1 font-mono text-xs text-dark">{sym}</p>
                    <p className="mt-2 text-xs leading-5">{u}</p>
                  </div>
                ))}
              </div>
              <p className="mt-3 rounded-[10px] bg-bg px-4 py-2 text-sm font-mono text-text">
                N = aₙ₋₁ × bⁿ⁻¹ + ... + a₁ × b¹ + a₀ × b⁰
              </p>
            </div>

            {/* 4.2 Conversions */}
            <div className="mt-6">
              <h3 className="text-base font-bold text-dark">4.2 Conversions entre Bases</h3>
              <div className="mt-3 overflow-x-auto">
                <table className="w-full text-sm text-text">
                  <thead>
                    <tr className="border-b border-border text-left">
                      {["Conversion", "Méthode", "Exemple"].map((h) => (
                        <th key={h} className="pb-2 pr-4 font-semibold text-dark last:pr-0">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {[
                      { cv: "Décimal → Binaire", m: "Divisions successives par 2 (lire les restes de bas en haut).", ex: "45₁₀ = 101101₂" },
                      { cv: "Binaire → Décimal", m: "Somme des poids : chaque bit × 2ⁱ.", ex: "1011₂ = 8+0+2+1 = 11₁₀" },
                      { cv: "Décimal → Hexadécimal", m: "Divisions successives par 16.", ex: "255₁₀ = FF₁₆" },
                      { cv: "Hexadécimal → Binaire", m: "Chaque chiffre hex = 4 bits.", ex: "A₁₆ = 1010₂ | F₁₆ = 1111₂" },
                      { cv: "Octal → Binaire", m: "Chaque chiffre octal = 3 bits.", ex: "7₈ = 111₂" },
                      { cv: "Binaire → Octal", m: "Grouper par 3 bits de droite à gauche.", ex: "110 111₂ = 67₈" },
                    ].map(({ cv, m, ex }) => (
                      <tr key={cv}>
                        <td className="py-2 pr-4 font-bold text-primary-light whitespace-nowrap">{cv}</td>
                        <td className="py-2 pr-4 leading-6">{m}</td>
                        <td className="py-2 font-mono text-xs font-semibold text-dark">{ex}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* 4.3 Opérations binaires */}
            <div className="mt-6">
              <h3 className="text-base font-bold text-dark">4.3 Opérations Binaires</h3>
              <div className="mt-3 grid gap-4 sm:grid-cols-2">
                {/* Addition */}
                <div className="rounded-[12px] border border-border bg-bg p-4 text-sm">
                  <p className="font-bold text-dark">◈ Addition binaire</p>
                  <div className="mt-2 space-y-1 font-mono text-xs text-text">
                    {["0 + 0 = 0 (pas de retenue)", "0 + 1 = 1 et 1 + 0 = 1 (pas de retenue)", "1 + 1 = 10₂ → on écrit 0, on retient 1", "1 + 1 + 1 = 11₂ → on écrit 1, on retient 1"].map((r) => (
                      <div key={r} className="rounded-[6px] bg-white px-2 py-1">{r}</div>
                    ))}
                  </div>
                  <p className="mt-2 rounded-[6px] bg-blue-50 border border-blue-200 px-2 py-1 font-mono text-xs text-blue-700">
                    (1011)₂ + (0110)₂ = (10001)₂ → 11₁₀ + 6₁₀ = 17₁₀
                  </p>
                </div>
                {/* Soustraction */}
                <div className="rounded-[12px] border border-border bg-bg p-4 text-sm">
                  <p className="font-bold text-dark">◈ Soustraction binaire</p>
                  <div className="mt-2 space-y-1 font-mono text-xs text-text">
                    {["0 - 0 = 0 | 1 - 0 = 1 | 1 - 1 = 0 (pas d'emprunt)", "0 - 1 = 1 avec emprunt de 1 (comme 10 - 7 en décimal)"].map((r) => (
                      <div key={r} className="rounded-[6px] bg-white px-2 py-1">{r}</div>
                    ))}
                  </div>
                  <p className="mt-2 rounded-[6px] bg-orange-50 border border-orange-200 px-2 py-1 font-mono text-xs text-orange-700">
                    (1010)₂ - (0011)₂ = (0111)₂ → 10₁₀ - 3₁₀ = 7₁₀
                  </p>
                </div>
              </div>
            </div>

            {/* 4.4 Entiers Relatifs */}
            <div className="mt-6">
              <h3 className="text-base font-bold text-dark">4.4 Codage des Entiers Relatifs</h3>
              <div className="mt-3 overflow-x-auto">
                <table className="w-full text-sm text-text">
                  <thead>
                    <tr className="border-b border-border text-left">
                      {["Méthode", "Principe", "Exemple : -5 sur 4 bits"].map((h) => (
                        <th key={h} className="pb-2 pr-4 font-semibold text-dark last:pr-0">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {[
                      { m: "Signe-Valeur Absolue (SVA)", p: "Bit de signe : 0 = positif, 1 = négatif + valeur absolue.", ex: "5 = 0101 → -5 = 1101" },
                      { m: "Complément à 1 (Cà1)", p: "Si négatif : inverser tous les bits (0↔1).", ex: "5 = 0101 → Cà1(-5) = 1010" },
                      { m: "Complément à 2 (Cà2) ★", p: "Cà1 + 1 → méthode utilisée par les ordinateurs.", ex: "1010 + 1 = 1011 (Cà2)" },
                    ].map(({ m, p, ex }) => (
                      <tr key={m}>
                        <td className="py-2 pr-4 font-bold text-primary-light whitespace-nowrap">{m}</td>
                        <td className="py-2 pr-4 leading-6">{p}</td>
                        <td className="py-2 font-mono text-xs text-dark">{ex}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-2 rounded-[10px] bg-bg px-4 py-2 text-xs text-text">
                💡 <span className="font-semibold text-dark">Cà2</span> est la représentation standard car l&apos;addition Cà2 fonctionne directement pour les positifs et les négatifs.
              </p>
            </div>

            {/* 4.5 Réels + 4.6 ASCII + 4.7 Gray */}
            <div className="mt-6">
              <h3 className="text-base font-bold text-dark">4.5–4.7 Codages des Réels, ASCII et Code Gray</h3>
              <div className="mt-3 grid gap-3 sm:grid-cols-3">
                <div className="rounded-[12px] border border-border bg-bg p-4 text-sm">
                  <p className="font-bold text-dark">Virgule flottante (IEEE 754)</p>
                  <p className="mt-2 text-text leading-6">
                    N = ± M × b^E (Signe + Mantisse + Exposant biaisé).
                  </p>
                  <div className="mt-2 space-y-1 text-xs text-text-light">
                    <p>• Simple (32 bits) : 1 + 8 + 23 bits.</p>
                    <p>• Double (64 bits) : 1 + 11 + 52 bits.</p>
                  </div>
                </div>
                <div className="rounded-[12px] border border-border bg-bg p-4 text-sm">
                  <p className="font-bold text-dark">Code ASCII</p>
                  <p className="mt-2 text-text leading-6">
                    7 bits = 128 caractères. Associe un entier à chaque caractère (lettres, chiffres, symboles).
                  </p>
                  <p className="mt-2 font-mono text-xs text-primary-light">
                    « A » = 65₁₀ = 41₁₆ = 01000001₂
                  </p>
                </div>
                <div className="rounded-[12px] border border-border bg-bg p-4 text-sm">
                  <p className="font-bold text-dark">Code Gray</p>
                  <p className="mt-2 text-text leading-6">
                    Deux nombres consécutifs ne diffèrent que par un seul bit.
                  </p>
                  <p className="mt-2 text-xs text-text-light">
                    Utilisé dans les encodeurs rotatifs et systèmes de détection d&apos;erreurs.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* ══════════════════════════════════════════════
              AXE 5 — Algèbre de Boole
          ══════════════════════════════════════════════ */}
          <section className="soft-card p-6 sm:p-8">
            <h2 className="text-xl font-extrabold text-dark">
              AXE 5 — Algèbre de Boole et Logique Combinatoire
            </h2>

            {/* 5.1 Variables booléennes */}
            <div className="mt-5">
              <h3 className="text-base font-bold text-dark">5.1 Variables Booléennes</h3>
              <p className="mt-2 text-sm text-text">
                L&apos;algèbre de Boole (George Boole, XIXᵉ s.) repose sur des variables ne prenant que 2 valeurs : <strong>0 (Faux)</strong> ou <strong>1 (Vrai)</strong>.
              </p>
              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                <div className="rounded-[12px] border border-red-200 bg-red-50 p-4 text-sm text-center">
                  <p className="text-2xl font-extrabold text-red-600">0</p>
                  <p className="mt-1 text-red-700">Faux / Bas / Ouvert / Arrêt / Signal inactif</p>
                </div>
                <div className="rounded-[12px] border border-green-200 bg-green-50 p-4 text-sm text-center">
                  <p className="text-2xl font-extrabold text-green-600">1</p>
                  <p className="mt-1 text-green-700">Vrai / Haut / Fermé / Marche / Signal actif</p>
                </div>
              </div>
              <p className="mt-2 rounded-[10px] bg-bg px-4 py-2 text-xs text-text">
                ⚠️ Dans les circuits : <span className="font-mono font-bold">1 + 1 = 1</span> (pas 2). Ce n&apos;est pas de l&apos;arithmétique mais de la logique de conditions.
              </p>
            </div>

            {/* 5.2 Opérateurs */}
            <div className="mt-6">
              <h3 className="text-base font-bold text-dark">5.2 Les 3 Opérateurs Fondamentaux</h3>
              <div className="mt-3 overflow-x-auto">
                <table className="w-full text-sm text-text">
                  <thead>
                    <tr className="border-b border-border text-left">
                      {["Opérateur", "Symbole", "Équation", "Description", "Table de vérité"].map((h) => (
                        <th key={h} className="pb-2 pr-4 font-semibold text-dark last:pr-0">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {[
                      { op: "ET (AND)", sym: "·", eq: "S = A · B", desc: "Vrai uniquement si TOUTES les entrées sont vraies.", tv: "00→0 | 01→0 | 10→0 | 11→1" },
                      { op: "OU (OR)", sym: "+", eq: "S = A + B", desc: "Vrai si AU MOINS UNE entrée est vraie.", tv: "00→0 | 01→1 | 10→1 | 11→1" },
                      { op: "NON (NOT)", sym: "¬ / barre", eq: "S = Ā", desc: "Inverse l'état d'entrée.", tv: "0→1 | 1→0" },
                    ].map(({ op, sym, eq, desc, tv }) => (
                      <tr key={op}>
                        <td className="py-2 pr-4 font-bold text-primary-light">{op}</td>
                        <td className="py-2 pr-4 font-mono font-bold">{sym}</td>
                        <td className="py-2 pr-4 font-mono text-xs">{eq}</td>
                        <td className="py-2 pr-4 leading-6">{desc}</td>
                        <td className="py-2 font-mono text-xs text-text-light">{tv}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-2 rounded-[10px] bg-bg px-4 py-2 text-xs text-text">
                <span className="font-semibold text-dark">Opérateurs dérivés : </span>
                XOR (⊕) : vrai si entrées différentes | NAND = NOT(AND) | NOR = NOT(OR)
              </p>
            </div>

            {/* 5.3 Théorèmes */}
            <div className="mt-6">
              <h3 className="text-base font-bold text-dark">5.3 Axiomes et Théorèmes Fondamentaux</h3>
              <div className="mt-3 grid gap-4 sm:grid-cols-2">
                {/* Variable unique */}
                <div className="rounded-[12px] border border-border bg-bg p-4 text-sm">
                  <p className="font-bold text-dark">◈ Théorèmes à une seule variable</p>
                  <div className="mt-2 grid grid-cols-2 gap-1 font-mono text-xs text-text">
                    {[
                      "A · 0 = 0", "A + 0 = A",
                      "A · 1 = A", "A + 1 = 1",
                      "A · A = A", "A + A = A",
                      "A · Ā = 0", "A + Ā = 1",
                      "Ā̄ = A (Double négation)", "",
                    ].map((t, i) => t ? (
                      <div key={i} className="rounded-[6px] bg-white px-2 py-1 text-center">{t}</div>
                    ) : <div key={i} />)}
                  </div>
                </div>
                {/* Plusieurs variables */}
                <div className="rounded-[12px] border border-border bg-bg p-4 text-sm">
                  <p className="font-bold text-dark">◈ Théorèmes à plusieurs variables</p>
                  <div className="mt-2 overflow-x-auto">
                    <table className="w-full text-xs text-text">
                      <thead>
                        <tr className="border-b border-border text-left">
                          {["Propriété", "ET", "OU"].map((h) => (
                            <th key={h} className="pb-1 pr-2 font-semibold text-dark">{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-border font-mono">
                        {[
                          { p: "Commutativité", et: "A·B = B·A", ou: "A+B = B+A" },
                          { p: "Associativité", et: "A·(B·C) = (A·B)·C", ou: "A+(B+C) = (A+B)+C" },
                          { p: "Distributivité", et: "A·(B+C) = A·B+A·C", ou: "A+(B·C) = (A+B)·(A+C)" },
                          { p: "Absorption", et: "A+A·B = A", ou: "A·(A+B) = A" },
                        ].map(({ p, et, ou }) => (
                          <tr key={p}>
                            <td className="py-1 pr-2 font-sans font-semibold text-dark">{p}</td>
                            <td className="py-1 pr-2">{et}</td>
                            <td className="py-1">{ou}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              {/* De Morgan */}
              <div className="mt-3 rounded-[12px] border border-border bg-bg p-4 text-sm">
                <p className="font-bold text-dark">◈ Théorèmes de De Morgan</p>
                <div className="mt-2 grid gap-2 sm:grid-cols-2">
                  <div className="rounded-[8px] bg-white px-3 py-2 font-mono text-xs text-text">
                    <span className="font-sans font-semibold text-dark">Loi 1 : </span>
                    (A · B)‾ = Ā + B̄ → NAND = OU avec entrées inversées
                  </div>
                  <div className="rounded-[8px] bg-white px-3 py-2 font-mono text-xs text-text">
                    <span className="font-sans font-semibold text-dark">Loi 2 : </span>
                    (A + B)‾ = Ā · B̄ → NOR = ET avec entrées inversées
                  </div>
                </div>
                <p className="mt-2 text-xs italic text-text-light">
                  💡 Règle mémo : «Couper la barre, changer le signe (· ↔ +)»
                </p>
              </div>
            </div>

            {/* 5.4 Fonctions logiques */}
            <div className="mt-6">
              <h3 className="text-base font-bold text-dark">5.4 Fonctions Logiques & Représentations</h3>
              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                {[
                  { r: "Expression algébrique", d: "Forme SDP (Somme de Produits) ou PDS (Produit de Sommes).", ex: "F = A·B + Ā·C" },
                  { r: "Table de vérité", d: "Liste exhaustive de toutes les combinaisons (2ᴺ lignes).", ex: "Tableau avec colonnes A, B, C, F." },
                  { r: "Tableau de Karnaugh", d: "Représentation 2D graphique pour simplification (2ⁿ cases).", ex: "Tableau 2×4 pour 3 variables." },
                  { r: "Logigramme", d: "Schéma graphique avec symboles de portes logiques.", ex: "Dessin avec portes AND, OR, NOT." },
                ].map(({ r, d, ex }) => (
                  <div key={r} className="rounded-[12px] border border-border bg-bg p-4 text-sm">
                    <p className="font-bold text-dark">{r}</p>
                    <p className="mt-1 leading-6 text-text">{d}</p>
                    <p className="mt-1 font-mono text-xs text-primary-light">{ex}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 5.5 Simplification Karnaugh */}
            <div className="mt-6">
              <h3 className="text-base font-bold text-dark">5.5 Simplification par Tableau de Karnaugh</h3>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-text">
                {[
                  "Les groupes ne contiennent que des 1 (mintermins).",
                  "Taille du groupe = puissance de 2 (1, 2, 4, 8...).",
                  "Groupes horizontaux ou verticaux (pas diagonaux).",
                  "Les groupes peuvent se chevaucher.",
                  "Les groupes peuvent s'enrouler autour du tableau.",
                  "Objectif : groupes les moins nombreux et les plus grands possible.",
                ].map((r) => <li key={r}>{r}</li>)}
              </ul>
              <div className="mt-3 rounded-[10px] bg-bg px-4 py-2 text-sm text-text">
                <span className="font-semibold text-dark">Exemple algébrique : </span>
                <span className="font-mono">A·B + A·B̄ = A·(B + B̄) = A·1 = A</span>
              </div>
            </div>
          </section>

          {/* ══════════════════════════════════════════════
              AXE 6 — Portes Logiques & Applications
          ══════════════════════════════════════════════ */}
          <section className="soft-card p-6 sm:p-8">
            <h2 className="text-xl font-extrabold text-dark">
              AXE 6 — Portes Logiques, Applications et Synthèse
            </h2>

            {/* 6.1 Portes de base */}
            <div className="mt-5">
              <h3 className="text-base font-bold text-dark">6.1 Portes Logiques de Base</h3>
              <p className="mt-2 text-sm text-text">
                Les portes logiques = briques élémentaires des circuits numériques. Chaque porte implémente une opération booléenne via des transistors.
              </p>
              <div className="mt-3 overflow-x-auto">
                <table className="w-full text-sm text-text">
                  <thead>
                    <tr className="border-b border-border text-left">
                      {["Porte", "Équation", "Table de vérité", "Analogie physique"].map((h) => (
                        <th key={h} className="pb-2 pr-4 font-semibold text-dark last:pr-0">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {[
                      { p: "NOT (Inverseur)", eq: "S = Ā", tv: "0→1 | 1→0", a: "Interrupteur inverseur (relais)" },
                      { p: "AND (ET)", eq: "S = A · B", tv: "00→0 | 01→0 | 10→0 | 11→1", a: "Interrupteurs en SÉRIE" },
                      { p: "OR (OU)", eq: "S = A + B", tv: "00→0 | 01→1 | 10→1 | 11→1", a: "Interrupteurs en PARALLÈLE" },
                      { p: "NAND (NON-ET)", eq: "S = (A·B)‾", tv: "00→1 | 01→1 | 10→1 | 11→0", a: "Inverse de AND" },
                      { p: "NOR (NON-OU)", eq: "S = (A+B)‾", tv: "00→1 | 01→0 | 10→0 | 11→0", a: "Inverse de OR" },
                      { p: "XOR (OU exclusif)", eq: "S = A ⊕ B", tv: "00→0 | 01→1 | 10→1 | 11→0", a: "Vrai si entrées DIFFÉRENTES" },
                    ].map(({ p, eq, tv, a }) => (
                      <tr key={p}>
                        <td className="py-2 pr-4 font-bold text-primary-light">{p}</td>
                        <td className="py-2 pr-4 font-mono text-xs">{eq}</td>
                        <td className="py-2 pr-4 font-mono text-xs text-text-light">{tv}</td>
                        <td className="py-2 leading-6">{a}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* 6.2 Triple correspondance */}
            <div className="mt-6">
              <h3 className="text-base font-bold text-dark">6.2 Correspondance Triple : Expression ↔ Table ↔ Logigramme</h3>
              <div className="mt-3 grid gap-3 sm:grid-cols-3">
                {[
                  { f: "Expression algébrique", d: "Combinaison de variables et opérateurs (SDP ou PDS).", ex: "F = A·B + Ā·C" },
                  { f: "Table de vérité", d: "Tableau avec toutes les combinaisons des entrées (2ᴺ lignes).", ex: "8 lignes pour A, B, C avec valeurs F calculées." },
                  { f: "Logigramme", d: "Schéma graphique avec symboles normalisés des portes.", ex: "NOT(A) → AND(Ā,C) → OR avec AND(A,B)." },
                ].map(({ f, d, ex }) => (
                  <div key={f} className="rounded-[12px] border border-border bg-bg p-4 text-sm text-center">
                    <p className="font-bold text-dark">{f}</p>
                    <p className="mt-2 leading-6 text-text">{d}</p>
                    <p className="mt-2 font-mono text-xs text-primary-light">{ex}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 6.3 Méthode de l'ingénieur */}
            <div className="mt-6">
              <h3 className="text-base font-bold text-dark">6.3 Méthode de l&apos;Ingénieur : De l&apos;Idée au Circuit</h3>
              <div className="relative mt-3 pl-5">
                <span aria-hidden className="absolute left-[7px] top-2 h-[calc(100%-12px)] w-[2px] rounded-full bg-border" />
                {[
                  { e: "1. Cahier des charges", a: "Comprendre le problème réel.", d: "Quand la sortie doit-elle être à 1 ?" },
                  { e: "2. Variables", a: "Définir entrées et sorties en binaire (0/1).", d: "Nommer : A, B, C... et F, S..." },
                  { e: "3. Table de vérité", a: "Lister les 2ᴺ combinaisons et la valeur souhaitée de la sortie.", d: "N variables → 2ᴺ lignes." },
                  { e: "4. Équation logique", a: "Écrire l'expression SDP à partir des lignes = 1.", d: "Extraire les mintermins." },
                  { e: "5. Simplification", a: "Algèbre de Boole ou tableau de Karnaugh.", d: "Réduire le nombre de termes." },
                  { e: "6. Logigramme", a: "Dessiner le schéma physique avec les portes.", d: "Schéma final prêt pour câblage." },
                ].map(({ e, a, d }) => (
                  <div key={e} className="relative pb-3 last:pb-0">
                    <span aria-hidden className="absolute -left-[13px] top-[5px] h-3 w-3 rounded-full border-2 border-primary-light bg-white" />
                    <div className="rounded-[8px] border border-border bg-bg px-4 py-2 text-sm text-text">
                      <span className="font-bold text-dark">{e} : </span>{a}
                      <span className="ml-2 italic text-text-light text-xs">→ {d}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 6.4 Étude de cas */}
            <div className="mt-6">
              <h3 className="text-base font-bold text-dark">🚗 6.4 Étude de Cas : Alarme Automobile</h3>
              <p className="mt-2 text-sm text-text">
                L&apos;alarme (A) doit sonner si ① portière ouverte avec clé sur le contact OU ② phares oubliés sans clé sur le contact.
              </p>
              <div className="mt-3 grid gap-4 sm:grid-cols-2">
                <div className="overflow-x-auto rounded-[12px] border border-border bg-bg p-4 text-sm">
                  <table className="w-full text-text">
                    <thead>
                      <tr className="border-b border-border text-left">
                        {["Variable", "0", "1"].map((h) => (
                          <th key={h} className="pb-2 pr-4 font-semibold text-dark last:pr-0">{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      {[
                        { v: "C (Contact)", z: "Clé retirée", u: "Clé présente" },
                        { v: "P (Portière)", z: "Fermée", u: "Ouverte" },
                        { v: "F (Phares)", z: "Éteints", u: "Allumés" },
                        { v: "A (Alarme)", z: "Silencieuse", u: "Sonne" },
                      ].map(({ v, z, u }) => (
                        <tr key={v}>
                          <td className="py-2 pr-4 font-bold text-primary-light">{v}</td>
                          <td className="py-2 pr-4 text-red-500">{z}</td>
                          <td className="py-2 text-green-600">{u}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="rounded-[12px] border border-border bg-bg p-4 text-sm">
                  <p className="font-bold text-dark">Expression simplifiée</p>
                  <p className="mt-3 rounded-[8px] bg-white px-3 py-2 font-mono text-base font-bold text-primary-light">
                    A = (C̄ · F) + (C · P)
                  </p>
                  <p className="mt-3 leading-6 text-text italic">
                    L&apos;alarme sonne si (pas de clé ET phares allumés) OU (clé présente ET portière ouverte).
                  </p>
                </div>
              </div>
            </div>

            {/* 6.5 Applications combinatoires */}
            <div className="mt-6">
              <h3 className="text-base font-bold text-dark">6.5 Applications en Logique Combinatoire</h3>
              <div className="mt-3 overflow-x-auto">
                <table className="w-full text-sm text-text">
                  <thead>
                    <tr className="border-b border-border text-left">
                      {["Circuit", "Rôle", "Portes utilisées"].map((h) => (
                        <th key={h} className="pb-2 pr-4 font-semibold text-dark last:pr-0">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {[
                      { c: "Half Adder", r: "Additionne 2 bits : Somme (S = A⊕B) + Retenue (R = A·B).", p: "XOR + AND" },
                      { c: "Full Adder", r: "Additionne 3 bits (A, B, Retenue entrante).", p: "XOR, AND, OR" },
                      { c: "Soustracteur", r: "Soustraction binaire (utilise le complément à 2).", p: "XOR, AND, NOT" },
                      { c: "Décodeur", r: "N entrées → 2ᴺ sorties (une seule active à la fois).", p: "AND + NOT" },
                      { c: "Codeur (Encodeur)", r: "2ᴺ entrées → N sorties (compresse l'information).", p: "OR" },
                      { c: "Transcodeur", r: "Convertit d'un code à un autre (ex : binaire → 7 segments).", p: "AND/OR/NOT" },
                      { c: "Comparateur", r: "Compare A et B → sorties E (=), S (>), I (<).", p: "XOR, AND, NOT" },
                      { c: "Multiplexeur (MUX)", r: "2ᴺ entrées → 1 sortie (sélection par adresse).", p: "AND + OR + NOT" },
                      { c: "Démultiplexeur (DEMUX)", r: "1 entrée → 2ᴺ sorties (distribution par adresse).", p: "AND + NOT" },
                    ].map(({ c, r, p }) => (
                      <tr key={c}>
                        <td className="py-2 pr-4 font-bold text-primary-light whitespace-nowrap">{c}</td>
                        <td className="py-2 pr-4 leading-6">{r}</td>
                        <td className="py-2 font-mono text-xs">{p}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* 6.6 UAL */}
            <div className="mt-6">
              <h3 className="text-base font-bold text-dark">6.6 L&apos;Unité Arithmétique et Logique (UAL)</h3>
              <p className="mt-2 text-sm leading-6 text-text">
                L&apos;UAL = assemblage de circuits combinatoires fonctionnant en parallèle : Additionneur + Soustracteur + Comparateur + Opérateurs logiques.
                Un MUX interne sélectionne le résultat selon le code opération envoyé par le processeur.
              </p>
              <p className="mt-2 rounded-[10px] bg-bg px-4 py-2 text-xs italic text-text">
                Toutes les opérations sont calculées instantanément, mais seule la réponse demandée passe vers la sortie.
              </p>
            </div>

            {/* 6.7 Combinatoire vs Séquentielle */}
            <div className="mt-6">
              <h3 className="text-base font-bold text-dark">6.7 Logique Combinatoire vs Logique Séquentielle</h3>
              <div className="mt-3 overflow-x-auto">
                <table className="w-full text-sm text-text">
                  <thead>
                    <tr className="border-b border-border text-left">
                      {["Critère", "Logique Combinatoire", "Logique Séquentielle"].map((h) => (
                        <th key={h} className="pb-2 pr-4 font-semibold text-dark last:pr-0">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {[
                      { cr: "Mémoire", co: "Aucune (amnésique)", sq: "Oui (mémorise les états précédents)." },
                      { cr: "Sortie dépend de", co: "Entrées actuelles uniquement.", sq: "Entrées actuelles + état passé." },
                      { cr: "Exemples", co: "Additionneur, MUX, Décodeur.", sq: "Bascules, Compteurs, Registres." },
                      { cr: "Représentation", co: "Table de vérité.", sq: "Diagramme d'états." },
                    ].map(({ cr, co, sq }) => (
                      <tr key={cr}>
                        <td className="py-2 pr-4 font-bold text-primary-light">{cr}</td>
                        <td className="py-2 pr-4 leading-6">{co}</td>
                        <td className="py-2 leading-6">{sq}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-2 rounded-[10px] bg-bg px-4 py-2 text-xs text-text">
                La logique séquentielle introduit le <strong>TEMPS</strong> et la <strong>MÉMOIRE</strong> dans les circuits → prochaine étape du module.
              </p>
            </div>

            {/* 6.8 Synthèse globale */}
            <div className="mt-6">
              <h3 className="text-base font-bold text-dark">6.8 Synthèse Globale du Module</h3>
              <div className="mt-3 overflow-x-auto">
                <table className="w-full text-sm text-text">
                  <thead>
                    <tr className="border-b border-border text-left">
                      {["Notion", "Lien avec le module"].map((h) => (
                        <th key={h} className="pb-2 pr-4 font-semibold text-dark last:pr-0">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {[
                      { n: "Information → Données", l: "Une frappe de touche = commutateur mécanique → code binaire (ex : A = 41₁₆ = 01000001₂)." },
                      { n: "Codage binaire", l: "Fondement de toute représentation : entiers, réels, caractères ASCII." },
                      { n: "Algèbre de Boole", l: "Outils mathématiques pour manipuler les données logiquement." },
                      { n: "Portes logiques", l: "Implémentation physique des opérations de Boole via transistors." },
                      { n: "Circuits combinatoires", l: "Assemblage de portes → fonctions complexes (UAL, MUX, Décodeur)." },
                      { n: "CPU / Architecture", l: "Des milliards de portes logiques orchestrées = intelligence numérique." },
                    ].map(({ n, l }) => (
                      <tr key={n}>
                        <td className="py-2 pr-4 font-bold text-primary-light whitespace-nowrap">{n}</td>
                        <td className="py-2 leading-6">{l}</td>
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