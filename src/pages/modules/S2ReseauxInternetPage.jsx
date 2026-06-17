
import { modulePages } from '../../data/portfolioData';
import ModuleSimplePage from './ModuleSimplePage';
import Image_reseau1 from '../../data/images/reseaux/Image_reseau1.png';
import Image_reseau2 from '../../data/images/reseaux/Image_reseau2.png';
import Image_reseau3 from '../../data/images/reseaux/Image_reseau3.png';
import Image_reseau4 from '../../data/images/reseaux/Image_reseau4.png';
import Image_reseau5 from '../../data/images/reseaux/Image_reseau5.png';
import Image_reseau6 from '../../data/images/reseaux/Image_reseau6.png';
import Image_reseau7 from '../../data/images/reseaux/Image_reseau7.png';
import Image_reseau8 from '../../data/images/reseaux/Image_reseau8.png';
import Image_reseau9 from '../../data/images/reseaux/Image_reseau9.png';




const slug = 's2-reseaux-internet';

export default function S2ReseauxInternetPage() {
  const module = modulePages.find((item) => item.slug === slug);

  const getResourceLink = (resource) => {
    if (resource.href && resource.href !== '#') {
      return resource.href;
    }
    const query = `${module?.title ?? 'Réseaux'} ${resource.label} CRMEF`;
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
            CRMEF Marrakech · Introduction aux Réseaux Informatiques · 2025-2026
          </div>
          <h1 className="mt-2 text-2xl font-extrabold text-dark sm:text-3xl">
            🖧 Introduction aux Réseaux
          </h1>
          <p className="mt-3 text-sm leading-7 text-text">
            Topologies · Classification · Modèle OSI · TCP/IP · Équipements
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {[
              "Définition & Intérêt",
              "Topologies réseaux",
              "Classification (4 critères)",
              "Supports physiques & sans fil",
              "Modèle OSI (7 couches)",
              "Services & Protocoles",
              "Dialogues vertical/horizontal",
              "Équipements d'interconnexion",
              "Architecture TCP/IP",
              "Encapsulation / Décapsulation",
              "TCP vs UDP",
              "Adressage IP",
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
              AXE 1 — Généralités sur les réseaux
          ══════════════════════════════════════════════ */}
          <section className="soft-card p-6 sm:p-8">
            <h2 className="text-xl font-extrabold text-dark">
              AXE 1 — Généralités sur les Réseaux
            </h2>

            {/* 1.1 Définition */}
            <div className="mt-5 rounded-[12px] border border-border bg-bg p-4 text-sm leading-7 text-text">
              <p className="font-bold text-dark">📌 1.1 Définition</p>
              <p className="mt-2">
                Un réseau informatique est un <strong>ensemble de ressources matérielles et logicielles</strong> permettant la circulation de données entre plusieurs appareils informatiques ou nœuds. La mise en réseau contribue aussi à <em>réduire les coûts d'exploitation</em> et à améliorer la <em>fiabilité et la performance</em> grâce à la redondance et à la scalabilité.
              </p>
            </div>

            {/* 1.2 Pourquoi mettre en réseau */}
            <div className="mt-5">
              <h3 className="text-base font-bold text-dark">1.2 Pourquoi mettre en réseau ?</h3>
              <div className="mt-3 overflow-x-auto">
                <table className="w-full text-sm text-text">
                  <thead>
                    <tr className="border-b border-border text-left">
                      {["Motivation", "Description", "Exemple"].map((h) => (
                        <th key={h} className="pb-2 pr-4 font-semibold text-dark last:pr-0">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {[
                      { m: "🖨️ Partage de ressources", d: "Partager imprimantes, disques durs entre plusieurs utilisateurs.", e: "Une seule imprimante pour toute l'école." },
                      { m: "💾 Partage d'applications", d: "Utiliser des logiciels partagés (SGBD, compilation).", e: "Accès centralisé à une base de données." },
                      { m: "📧 Communication", d: "E-mail, messagerie instantanée entre utilisateurs.", e: "Gmail, WhatsApp Web, Teams." },
                      { m: "📁 Transfert de données", d: "Envoyer des fichiers, voix (téléphone), vidéo.", e: "FTP, streaming vidéo, appels VoIP." },
                      { m: "🧮 Calcul distribué", d: "Répartir des calculs lourds sur plusieurs machines.", e: "Décryptage du génome humain." },
                      { m: "💰 Réduction des coûts", d: "Moins d'équipements individuels nécessaires.", e: "Imprimante et serveur partagés." },
                      { m: "🔁 Fiabilité", d: "Redondance, sauvegarde, scalabilité.", e: "Serveur de sauvegarde automatique." },
                    ].map(({ m, d, e }) => (
                      <tr key={m}>
                        <td className="py-2 pr-4 font-bold text-primary-light whitespace-nowrap align-top">{m}</td>
                        <td className="py-2 pr-4 leading-6 align-top">{d}</td>
                        <td className="py-2 leading-6 italic text-text-light align-top">{e}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* ══════════════════════════════════════════════
              AXE 2 — Topologies réseaux
          ══════════════════════════════════════════════ */}
          <section className="soft-card p-6 sm:p-8">
            <h2 className="text-xl font-extrabold text-dark">
              AXE 2 — Topologies Réseaux
            </h2>

            {/* Illustration topologies */}
            <div className="mt-5 overflow-hidden rounded-[12px] border border-border bg-bg">
              <img
                src={Image_reseau1}
                alt="Topologies réseaux : bus, étoile, anneau, maillée"
                className="img block object-cover object-center"
              />
              <p className="px-4 py-2 text-center text-xs italic text-text-light">
                Illustration : bus, étoile, anneau et maillée
              </p>
            </div>

            <div className="mt-5 overflow-x-auto">
              <table className="w-full text-sm text-text">
                <thead>
                  <tr className="border-b border-border text-left">
                    {["Topologie", "Principe", "Point fort", "Limite"].map((h) => (
                      <th key={h} className="pb-2 pr-4 font-semibold text-dark last:pr-0">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {[
                    { t: "🔴 Bus", p: "Tous les nœuds sont reliés à une même ligne.", f: "Simplicité", l: "Risque de panne globale du support.", color: "text-red-500" },
                    { t: "⭐ Étoile", p: "Tous les postes sont reliés à un équipement central.", f: "Très utilisée et facile à gérer.", l: "Dépendance au nœud central.", color: "text-blue-500" },
                    { t: "🔵 Anneau", p: "Les machines forment une boucle fermée.", f: "Circulation organisée.", l: "Panne d'un point peut perturber tout l'anneau.", color: "text-green-500" },
                    { t: "🌐 Maillée", p: "Chaque nœud possède plusieurs liaisons.", f: "Grande fiabilité.", l: "Coût et mise en œuvre élevés.", color: "text-purple-500" },
                  ].map(({ t, p, f, l, color }) => (
                    <tr key={t}>
                      <td className={`py-2 pr-4 font-bold whitespace-nowrap ${color}`}>{t}</td>
                      <td className="py-2 pr-4 leading-6">{p}</td>
                      <td className="py-2 pr-4 leading-6 text-green-600 font-medium">{f}</td>
                      <td className="py-2 leading-6 text-red-500 italic">{l}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* ══════════════════════════════════════════════
              AXE 3 — Classification des réseaux (4 critères)
          ══════════════════════════════════════════════ */}
          <section className="soft-card p-6 sm:p-8">
            <h2 className="text-xl font-extrabold text-dark">
              AXE 3 — Classification des Réseaux (4 Critères)
            </h2>

            {/* Critère 1 : nature du transfert */}
            <div className="mt-5">
              <h3 className="text-base font-bold text-dark">Critère 1 — Selon la nature du transfert</h3>

              {/* Illustration */}
              <div className="mt-3 overflow-hidden rounded-[12px] border border-border bg-bg">
                <img
                  src={Image_reseau2}
                  alt="Commutations : circuits, messages et paquets"
                  className=" img w-full object-contain"
                />
                <p className="px-4 py-2 text-center text-xs italic text-text-light">
                  Illustration : circuits, messages et paquets
                </p>
              </div>

              <div className="mt-4 space-y-3">
                {[
                  {
                    t: "⚡ Commutation de circuits",
                    p: "Construction physique d'un circuit dédié entre source et destination AVANT l'échange.",
                    av: ["Bande passante garantie", "Débit constant", "Séquencement respecté"],
                    in: ["Circuits non partagés → blocages possibles", "Source et destination doivent avoir le même débit"],
                    ex: "RTC (téléphone), RNIS, streaming.",
                    color: "border-blue-200 bg-blue-50", badge: "text-blue-700",
                  },
                  {
                    t: "📦 Commutation de messages",
                    p: "Le message est stocké dans chaque nœud, vérifié, puis retransmis (Store & Forward).",
                    av: ["Meilleure utilisation de la bande passante", "Pas de réservation"],
                    in: ["Temps de traitement très grands", "Non adapté aux contraintes temps réel"],
                    ex: "Système télégraphique, e-mail simple.",
                    color: "border-orange-200 bg-orange-50", badge: "text-orange-700",
                  },
                  {
                    t: "🌐 Commutation de paquets",
                    p: "Le message est découpé en petits paquets envoyés indépendamment et multiplexés.",
                    av: ["Partage de la bande passante", "Flexible, robuste"],
                    in: ["Séquencement non garanti", "Délais variables"],
                    ex: "Internet (IP), Ethernet, ATM.",
                    color: "border-green-200 bg-green-50", badge: "text-green-700",
                  },
                ].map(({ t, p, av, in: inc, ex, color, badge }) => (
                  <div key={t} className={`rounded-[12px] border p-4 text-sm ${color}`}>
                    <p className={`font-bold text-base ${badge}`}>{t}</p>
                    <p className="mt-2 leading-6 text-text">{p}</p>
                    <div className="mt-3 grid gap-2 sm:grid-cols-2">
                      <div className="rounded-[8px] bg-white p-2 text-xs">
                        <p className="font-semibold text-green-600">✅ Avantages</p>
                        <ul className="mt-1 list-disc space-y-0.5 pl-3 text-text-light">
                          {av.map((a) => <li key={a}>{a}</li>)}
                        </ul>
                      </div>
                      <div className="rounded-[8px] bg-white p-2 text-xs">
                        <p className="font-semibold text-red-500">⚠️ Inconvénients</p>
                        <ul className="mt-1 list-disc space-y-0.5 pl-3 text-text-light">
                          {inc.map((i) => <li key={i}>{i}</li>)}
                        </ul>
                      </div>
                    </div>
                    <p className="mt-2 text-xs italic text-text-light">
                      <span className="not-italic font-semibold text-dark">Exemples : </span>{ex}
                    </p>
                  </div>
                ))}
              </div>

              {/* Comparaison messages vs paquets */}
              <div className="mt-4">
                <p className="text-sm font-bold text-dark">Comparaison Messages vs Paquets</p>
                <div className="mt-2 overflow-x-auto">
                  <table className="w-full text-sm text-text">
                    <thead>
                      <tr className="border-b border-border text-left">
                        {["Critère", "Mode Messages", "Mode Paquets"].map((h) => (
                          <th key={h} className="pb-2 pr-4 font-semibold text-dark last:pr-0">{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      {[
                        { c: "Découpage", m: "Message entier transmis", p: "Message découpé en paquets de petite taille" },
                        { c: "Gestion d'erreur", m: "Retransmission du message entier", p: "Retransmission du seul paquet erroné" },
                        { c: "Temps de traversée", m: "Ttr(m) = plus long", p: "Ttr(p) = plus court (pipeline)" },
                        { c: "Flexibilité", m: "Faible", p: "Élevée (multiplexage temporel)" },
                      ].map(({ c, m, p }) => (
                        <tr key={c}>
                          <td className="py-2 pr-4 font-bold text-dark">{c}</td>
                          <td className="py-2 pr-4 leading-6 text-orange-600">{m}</td>
                          <td className="py-2 leading-6 text-green-600">{p}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Critère 2 : mode de connexion */}
            <div className="mt-7">
              <h3 className="text-base font-bold text-dark">Critère 2 — Selon le mode de connexion</h3>

              <div className="mt-3 overflow-hidden rounded-[12px] border border-border bg-bg">
                <img
                  src={Image_reseau3}
                  alt="Mode connecté et mode non connecté"
                  className="img w-full object-contain"
                />
                <p className="px-4 py-2 text-center text-xs italic text-text-light">
                  Illustration : mode connecté et mode non connecté
                </p>
              </div>

              <div className="mt-4 overflow-x-auto">
                <table className="w-full text-sm text-text">
                  <thead>
                    <tr className="border-b border-border text-left">
                      {["Critère", "Mode Connecté (CONS)", "Mode Non Connecté (CLNS)"].map((h) => (
                        <th key={h} className="pb-2 pr-4 font-semibold text-dark last:pr-0">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {[
                      { c: "Autre nom", cons: "Circuit Virtuel / Connection Oriented", clns: "Datagramme / Connection Less" },
                      { c: "Phase initiale", cons: "Établissement obligatoire d'une connexion", clns: "Aucune connexion préalable" },
                      { c: "Adressage", cons: "Paquet sans adresse (connexion pré-établie)", clns: "Adresses source + destination dans chaque paquet" },
                      { c: "Séquencement", cons: "Paquets reçus dans l'ordre", clns: "Datagrammes non séquencés" },
                      { c: "Présence destinataire", cons: "Obligatoire", clns: "Non nécessaire" },
                      { c: "Diffusion", cons: "Difficile", clns: "Aisée" },
                      { c: "Protocoles", cons: "TCP, ATM, RTC, RNIS, X.25", clns: "IP (UDP)" },
                      { c: "Norme", cons: "ISO 8208 / X.25", clns: "ISO 8473 / IP" },
                    ].map(({ c, cons, clns }) => (
                      <tr key={c}>
                        <td className="py-2 pr-4 font-bold text-dark">{c}</td>
                        <td className="py-2 pr-4 leading-6 text-blue-600">{cons}</td>
                        <td className="py-2 leading-6 text-orange-600">{clns}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-3 rounded-[10px] bg-bg border border-border px-3 py-2 text-xs italic text-text-light">
                💡 Étapes du mode connecté : ① Requête de connexion → ② Connexion établie → ③ Échange de données → ④ Requête de déconnexion → ⑤ Connexion fermée
              </p>
            </div>

            {/* Critère 3 : technique de transmission */}
            <div className="mt-7">
              <h3 className="text-base font-bold text-dark">Critère 3 — Selon la technique de transmission</h3>
              <div className="mt-3 space-y-2">
                {[
                  { t: "📡 Broadcast (Diffusion totale)", d: "Message envoyé vers TOUTES les machines du réseau via un canal partagé. Utilisation d'une adresse spéciale.", u: "LAN — Ethernet, IEEE 802.3", ill: "PC1 ──→ tous les PC", color: "border-blue-200 bg-blue-50 text-blue-700" },
                  { t: "📺 Multicast (Diffusion sélective)", d: "Message envoyé vers un sous-ensemble restreint de machines. Notion de groupe de diffusion.", u: "Streaming vidéo en groupe, IPTV", ill: "PC1 ──→ groupe G", color: "border-green-200 bg-green-50 text-green-700" },
                  { t: "🎯 Unicast (Point à point)", d: "Message envoyé vers UNE seule machine destinataire. Besoin d'un système d'adressage et de routage.", u: "WAN — Internet", ill: "PC1 ──→ PC2", color: "border-purple-200 bg-purple-50 text-purple-700" },
                ].map(({ t, d, u, ill, color }) => (
                  <div key={t} className={`rounded-[12px] border p-4 text-sm ${color}`}>
                    <p className="font-bold">{t}</p>
                    <p className="mt-2 leading-6 text-text">{d}</p>
                    <div className="mt-2 flex flex-wrap gap-2 text-xs">
                      <span className="rounded bg-white border border-current/20 px-2 py-0.5"><strong>Usage : </strong>{u}</span>
                      <span className="rounded bg-white border border-current/20 px-2 py-0.5 font-mono">{ill}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Critère 4 : étendue géographique */}
            <div className="mt-7">
              <h3 className="text-base font-bold text-dark">Critère 4 — Selon l&apos;étendue géographique</h3>
              <div className="mt-3 overflow-x-auto">
                <table className="w-full text-sm text-text">
                  <thead>
                    <tr className="border-b border-border text-left">
                      {["Type", "Signification", "Étendue", "Débit", "Caractéristiques & Exemples"].map((h) => (
                        <th key={h} className="pb-2 pr-4 font-semibold text-dark last:pr-0">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {[
                      { t: "🔵 PAN", s: "Personal Area Network", e: "~1–10 m (bureau, table)", d: "< 100 Mbps", c: "Bluetooth, Infrarouge." },
                      { t: "🟢 LAN", s: "Local Area Network", e: "Quelques km max (immeuble, campus)", d: "Quelques Mb/s → Gb/s", c: "Un seul type de média. Types : Ethernet, anneau. Délai borné." },
                      { t: "🟡 MAN", s: "Metropolitan Area Network", e: "Dizaines de km (ville)", d: "Haut débit", c: "LAN interconnectés par fibre optique. Ex : réseaux municipaux." },
                      { t: "🔴 WAN", s: "Wide Area Network", e: "Pays, continent, planète", d: "Très haut débit", c: "ATM, RNIS, X25. Ex : MarWan (éducation nationale Maroc), Internet." },
                      { t: "🌍 Internet", s: "Réseau mondial", e: "Planète entière", d: "Variable", c: "WAN mondial, base TCP/IP." },
                    ].map(({ t, s, e, d, c }) => (
                      <tr key={t}>
                        <td className="py-2 pr-4 font-bold text-primary-light whitespace-nowrap">{t}</td>
                        <td className="py-2 pr-4 text-xs italic">{s}</td>
                        <td className="py-2 pr-4 leading-6">{e}</td>
                        <td className="py-2 pr-4 font-mono text-xs">{d}</td>
                        <td className="py-2 leading-6 text-text-light">{c}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-2 rounded-[8px] bg-bg border border-border px-3 py-2 text-xs text-text">
                📡 <strong>W-WAN (sans fil) :</strong> Wi-Max, GPRS, UMTS, 3G, 4G, 5G
              </p>
            </div>
          </section>

          {/* ══════════════════════════════════════════════
              AXE 4 — Supports et éléments d'un réseau
          ══════════════════════════════════════════════ */}
          <section className="soft-card p-6 sm:p-8">
            <h2 className="text-xl font-extrabold text-dark">
              AXE 4 — Supports et Éléments d&apos;un Réseau
            </h2>

            {/* Éléments */}
            <div className="mt-5">
              <h3 className="text-base font-bold text-dark">4.1 Éléments d&apos;un réseau</h3>
              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                {[
                  { el: "🖥️ Nœuds", d: "Machines ou appareils connectés au réseau.", ex: "Poste de travail, serveur, imprimante, modem, routeur.", color: "border-blue-200 bg-blue-50 text-blue-700" },
                  { el: "🔌 Supports", d: "Canaux par lesquels circule l'information.", ex: "Câbles (physiques) ou ondes (immatériels).", color: "border-green-200 bg-green-50 text-green-700" },
                ].map(({ el, d, ex, color }) => (
                  <div key={el} className={`rounded-[12px] border p-4 text-sm ${color}`}>
                    <p className="font-bold">{el}</p>
                    <p className="mt-2 leading-6 text-text">{d}</p>
                    <p className="mt-1 text-xs italic text-text-light"><span className="not-italic font-semibold">Exemples : </span>{ex}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Supports physiques */}
            <div className="mt-6">
              <h3 className="text-base font-bold text-dark">4.2 Supports de transmission physiques</h3>
              <div className="mt-3 overflow-x-auto">
                <table className="w-full text-sm text-text">
                  <thead>
                    <tr className="border-b border-border text-left">
                      {["Support", "Structure", "Débit max", "Avantages", "Inconvénients"].map((h) => (
                        <th key={h} className="pb-2 pr-4 font-semibold text-dark last:pr-0">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {[
                      { s: "🔵 Paire torsadée (UTP/STP)", st: "2 fils de cuivre entrelacés. UTP = non blindé (RJ45), STP = blindé.", d: "100 Mbps – 10 Gbps", av: "Peu coûteux, facile à installer, connectique RJ45 standard.", in: "Sensible aux interférences (UTP)." },
                      { s: "🟡 Câble coaxial", st: "2 conducteurs de même axe + isolant + tresse. Ø : 1.2-4.4mm (fin) ou 2.6-9.5mm (épais).", d: "Jusqu'à 100 Mbps sur < 1 km", av: "Immunité aux interférences moyenne à élevée.", in: "Affaiblissement → répéteur tous les ~4 km. Coût moyen." },
                      { s: "🟢 Fibre optique monomode", st: "Un seul signal (une longueur d'onde).", d: "Plusieurs Gb/s sur plusieurs km", av: "Très haut débit, longues distances, immunité EM.", in: "Coût élevé, installation délicate." },
                      { s: "🔴 Fibre optique multimode", st: "Plusieurs longueurs d'onde (multiplexage).", d: "100 Mb/s – 1 Gb/s", av: "Moins cher que monomode.", in: "Distances plus courtes." },
                    ].map(({ s, st, d, av, in: inc }) => (
                      <tr key={s}>
                        <td className="py-2 pr-4 font-bold text-primary-light whitespace-nowrap align-top">{s}</td>
                        <td className="py-2 pr-4 leading-6 align-top text-xs">{st}</td>
                        <td className="py-2 pr-4 font-mono text-xs align-top">{d}</td>
                        <td className="py-2 pr-4 leading-6 text-green-600 text-xs align-top">{av}</td>
                        <td className="py-2 leading-6 text-red-500 text-xs align-top">{inc}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Supports immatériels */}
            <div className="mt-6">
              <h3 className="text-base font-bold text-dark">4.3 Supports de transmission immatériels (sans fil)</h3>
              <div className="mt-3 grid gap-2 sm:grid-cols-2">
                {[
                  { s: "📡 Transmission radio", u: "WAN depuis des décennies", t: "Faisceaux hertziens, satellites" },
                  { s: "📶 WLAN (Wi-Fi)", u: "Réseau local sans fil", t: "IEEE 802.11 (a/b/g/n/ac/ax)" },
                  { s: "📱 Réseaux mobiles", u: "Mobilité urbaine et nationale", t: "GSM, UMTS, 3G, 4G LTE, 5G" },
                  { s: "🌐 WirelessMAN", u: "Réseau métropolitain sans fil", t: "Wi-Max, GPRS" },
                ].map(({ s, u, t }) => (
                  <div key={s} className="rounded-[10px] border border-border bg-bg px-3 py-2 text-sm text-text">
                    <p className="font-bold text-dark">{s}</p>
                    <p className="mt-1 text-xs"><span className="font-semibold text-primary-light">Usage : </span>{u}</p>
                    <p className="text-xs italic text-text-light"><span className="not-italic font-semibold text-dark">Technologies : </span>{t}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ══════════════════════════════════════════════
              AXE 5 — Normalisation et modèle OSI
          ══════════════════════════════════════════════ */}
          <section className="soft-card p-6 sm:p-8">
            <h2 className="text-xl font-extrabold text-dark">
              AXE 5 — Normalisation et Modèle OSI
            </h2>

            <div className="mt-5 rounded-[12px] border border-border bg-bg p-4 text-sm leading-6 text-text">
              <p>La normalisation correspond à des <strong>règles communes</strong> que les entités désirant communiquer doivent respecter. Elle répond au problème d&apos;hétérogénéité des anciens systèmes propriétaires. En <strong>1984</strong>, l&apos;ISO a publié le document <strong>ISO 7498</strong> relatif au modèle de référence OSI pour l&apos;interconnexion de systèmes ouverts.</p>
            </div>

            {/* Protocoles propriétaires */}
            <div className="mt-4 overflow-x-auto">
              <table className="w-full text-sm text-text">
                <thead>
                  <tr className="border-b border-border text-left">
                    {["Protocole propriétaire", "Constructeur", "Problème"].map((h) => (
                      <th key={h} className="pb-2 pr-4 font-semibold text-dark last:pr-0">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {[
                    { p: "SNA (System Network Architecture)", c: "IBM", pb: "Incompatible avec DEC et autres." },
                    { p: "TCP/IP", c: "DoD (Département de la Défense US)", pb: "Ouvert, mais pas universellement adopté d'emblée." },
                    { p: "DNA (Digital Network Architecture)", c: "DEC", pb: "Fermé, propriétaire." },
                  ].map(({ p, c, pb }) => (
                    <tr key={p}>
                      <td className="py-2 pr-4 font-bold text-primary-light">{p}</td>
                      <td className="py-2 pr-4 leading-6">{c}</td>
                      <td className="py-2 leading-6 italic text-red-500">{pb}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Illustration OSI 7 couches */}
            <div className="mt-5 overflow-hidden rounded-[12px] border border-border bg-bg">
              <img
                src={Image_reseau4}
                alt="Les 7 couches du modèle OSI"
                className="img w-full object-contain"
              />
              <p className="px-4 py-2 text-center text-xs italic text-text-light">
                Illustration : les 7 couches du modèle OSI
              </p>
            </div>

            {/* Objectifs OSI */}
            <div className="mt-5">
              <h3 className="text-base font-bold text-dark">5.1 Objectifs du modèle OSI</h3>
              <div className="mt-3 grid gap-2 sm:grid-cols-2">
                {[
                  "Décomposer et structurer le système de communication en éléments directement réalisables (décomposition fonctionnelle).",
                  "Assurer le maximum d'indépendance vis-à-vis du matériel et du logiciel.",
                  "Décomposition en couches indépendantes : chaque couche accomplit une tâche ou offre un service.",
                  "Si on veut améliorer un service → on ne modifie QUE la couche concernée (modularité).",
                  "OSI est un modèle THÉORIQUE — pas une pile de protocoles à implémenter directement.",
                ].map((o) => (
                  <div key={o} className="flex items-start gap-2 rounded-[8px] border border-border bg-bg px-3 py-2 text-sm text-text">
                    <span className="mt-0.5 shrink-0 text-primary-light">▸</span>
                    <span>{o}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 7 couches OSI */}
            <div className="mt-6">
              <h3 className="text-base font-bold text-dark">5.2 Fonctions des 7 couches OSI</h3>
              <div className="mt-3 overflow-x-auto">
                <table className="w-full text-sm text-text">
                  <thead>
                    <tr className="border-b border-border text-left">
                      {["N°", "Couche", "Rôle principal", "Protocoles / Exemples", "Unité"].map((h) => (
                        <th key={h} className="pb-2 pr-4 font-semibold text-dark last:pr-0">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {[
                      { n: "7", c: "Application", r: "Interface avec l'utilisateur. Programmes d'application et fonctions applicatives génériques.", p: "HTTP, FTP, DNS, SMTP, SSH", u: "Données", color: "text-red-500" },
                      { n: "6", c: "Présentation", r: "Interprétation et formatage des données. Syntaxe, chiffrement, compression.", p: "SSL/TLS, JPEG, MPEG, ASCII", u: "Données", color: "text-orange-500" },
                      { n: "5", c: "Session", r: "Gestion du dialogue et reprise sur incidents entre applications.", p: "NetBIOS, RPC, SQL sessions", u: "Données", color: "text-yellow-600" },
                      { n: "4", c: "Transport", r: "Transfert bout en bout (utilisateur ↔ utilisateur). Séquencement et fragmentation.", p: "TCP (connecté), UDP (non connecté)", u: "Segment", color: "text-green-600" },
                      { n: "3", c: "Réseau", r: "Routage des paquets. Prévention et résolution de congestion. Adressage logique.", p: "IP, ICMP, IGMP, ARP, RIP, OSPF", u: "Paquet", color: "text-teal-600" },
                      { n: "2", c: "Liaison de données", r: "Gestion de la liaison. Contrôle d'erreurs. Contrôle de flux. Adressage MAC.", p: "Ethernet, Wi-Fi (802.11), PPP", u: "Trame", color: "text-blue-600" },
                      { n: "1", c: "Physique", r: "Interface avec le support physique. Codage des bits en signaux électriques/optiques.", p: "RJ45, câble coaxial, fibre optique", u: "Bits", color: "text-purple-600" },
                    ].map(({ n, c, r, p, u, color }) => (
                      <tr key={n}>
                        <td className={`py-2 pr-4 font-extrabold ${color}`}>{n}</td>
                        <td className={`py-2 pr-4 font-bold ${color} whitespace-nowrap`}>{c}</td>
                        <td className="py-2 pr-4 leading-6 text-xs">{r}</td>
                        <td className="py-2 pr-4 font-mono text-xs text-text-light">{p}</td>
                        <td className={`py-2 font-bold text-xs ${color}`}>{u}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-2 rounded-[8px] bg-bg border border-border px-3 py-2 text-xs text-text-light">
                💡 <strong className="text-dark">Architecture :</strong> Couches 1–4 = Services Transport (couches basses) | Couches 5–7 = Services Applicatifs (couches hautes)
              </p>
            </div>

            {/* Problème → couche responsable */}
            <div className="mt-6">
              <h3 className="text-base font-bold text-dark">5.3 Problème → Couche responsable</h3>
              <div className="mt-3 grid gap-2 sm:grid-cols-2">
                {[
                  { pr: "Codage des bits en signaux électriques", c: "Couche 1 — Physique" },
                  { pr: "Procédure de transmission + Détection des erreurs + Retransmission", c: "Couche 2 — Liaison" },
                  { pr: "Contrôle et mise à jour du routage + Contrôle de congestion", c: "Couche 3 — Réseau" },
                  { pr: "Séquencement des paquets + Fragmentation des données", c: "Couche 4 — Transport" },
                  { pr: "Aiguillage local vers une application", c: "Couche 5 — Session" },
                  { pr: "Formatage des données (syntaxe)", c: "Couche 6 — Présentation" },
                  { pr: "Programmes d'application utilisateur", c: "Couche 7 — Application" },
                ].map(({ pr, c }) => (
                  <div key={c} className="rounded-[10px] border border-border bg-bg px-3 py-2 text-sm text-text">
                    <p className="italic text-text-light">{pr}</p>
                    <p className="mt-1 font-bold text-primary-light">→ {c}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ══════════════════════════════════════════════
              AXE 6 — Services, Protocoles et Dialogues OSI
          ══════════════════════════════════════════════ */}
          <section className="soft-card p-6 sm:p-8">
            <h2 className="text-xl font-extrabold text-dark">
              AXE 6 — Services, Protocoles et Dialogues OSI
            </h2>

            {/* Définition protocole */}
            <div className="mt-5 rounded-[12px] border border-border bg-bg p-4 text-sm leading-6 text-text">
              <p className="font-bold text-dark">📌 6.1 Qu&apos;est-ce qu&apos;un protocole ?</p>
              <p className="mt-2">Un protocole est un <strong>ensemble de règles convenues</strong> entre deux équipements informatiques pour instaurer un dialogue compréhensible. Les principaux problèmes à traiter : procédure de transmission, détection des erreurs, codage des bits en signaux, retransmission, contrôle de flux, routage, séquencement, aiguillage local, formatage des données.</p>
            </div>

            {/* Illustration service vs protocole */}
            <div className="mt-4 overflow-hidden rounded-[12px] border border-border bg-bg">
              <img
                src={Image_reseau5}
                alt="Différence entre service et protocole"
                className="img w-full object-contain"
              />
              <p className="px-4 py-2 text-center text-xs italic text-text-light">
                Illustration : différence entre service et protocole
              </p>
            </div>

            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {[
                { t: "🎁 Service", d: "Fonctionnalité offerte par le réseau, par exemple une communication fiable de bout en bout.", color: "border-blue-200 bg-blue-50 text-blue-700" },
                { t: "📋 Protocole", d: "L'implémentation d'un service : il définit les règles, les formats des paquets, les messages échangés et les mécanismes utilisés.", color: "border-green-200 bg-green-50 text-green-700" },
              ].map(({ t, d, color }) => (
                <div key={t} className={`rounded-[12px] border p-4 text-sm ${color}`}>
                  <p className="font-bold">{t}</p>
                  <p className="mt-2 leading-6 text-text">{d}</p>
                </div>
              ))}
            </div>

            {/* Dialogues OSI */}
            <div className="mt-6">
              <h3 className="text-base font-bold text-dark">6.2 Dialogues OSI — Vertical et Horizontal</h3>

              <div className="mt-3 overflow-hidden rounded-[12px] border border-border bg-bg">
                <img
                  src={Image_reseau6}
                  alt="Échanges verticaux et horizontaux dans OSI"
                  className="img w-full object-contain"
                />
                <p className="px-4 py-2 text-center text-xs italic text-text-light">
                  Illustration : échanges verticaux et horizontaux dans OSI
                </p>
              </div>

              <div className="mt-4 overflow-x-auto">
                <table className="w-full text-sm text-text">
                  <thead>
                    <tr className="border-b border-border text-left">
                      {["Type de dialogue", "Direction", "Mécanisme", "Description"].map((h) => (
                        <th key={h} className="pb-2 pr-4 font-semibold text-dark last:pr-0">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {[
                      { t: "⬆️⬇️ Dialogue Vertical", d: "Entre couches adjacentes (N ↔ N±1)", m: "Primitives de service", desc: "Couche N+1 demande le service de la couche N. Local à la machine." },
                      { t: "↔️ Dialogue Horizontal", d: "Entre couches homologues à distance (N ↔ N' distant)", m: "Protocole de niveau N", desc: "Échange de messages entre couche N de l'émetteur et couche N du récepteur à travers le réseau. Les données de N+1 sont encapsulées dans N." },
                    ].map(({ t, d, m, desc }) => (
                      <tr key={t}>
                        <td className="py-2 pr-4 font-bold text-primary-light whitespace-nowrap align-top">{t}</td>
                        <td className="py-2 pr-4 leading-6 align-top">{d}</td>
                        <td className="py-2 pr-4 font-mono text-xs align-top">{m}</td>
                        <td className="py-2 leading-6 text-text-light align-top">{desc}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Encapsulation / Décapsulation */}
            <div className="mt-6">
              <h3 className="text-base font-bold text-dark">6.3 Encapsulation / Décapsulation</h3>
              <div className="mt-3 grid gap-2 sm:grid-cols-2 mb-4">
                <div className="rounded-[10px] border border-blue-200 bg-blue-50 px-3 py-2 text-sm text-blue-700">
                  <p className="font-bold">📤 À l&apos;émission</p>
                  <p className="mt-1 text-text">Chaque couche <strong>AJOUTE</strong> un en-tête (H) aux données → encapsulation</p>
                </div>
                <div className="rounded-[10px] border border-green-200 bg-green-50 px-3 py-2 text-sm text-green-700">
                  <p className="font-bold">📥 À la réception</p>
                  <p className="mt-1 text-text">Chaque couche <strong>RETIRE</strong> son en-tête → décapsulation</p>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-text">
                  <thead>
                    <tr className="border-b border-border text-left">
                      {["Couche", "Unité", "Ce qui est ajouté"].map((h) => (
                        <th key={h} className="pb-2 pr-4 font-semibold text-dark last:pr-0">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {[
                      { c: "7 — Application", u: "Données utilisateur", a: "[En-tête App] + [Données utilisateur]" },
                      { c: "4 — Transport", u: "Segment", a: "H4 + H5 + H6 + H7 + Données" },
                      { c: "3 — Réseau", u: "Paquet", a: "H3 + H4 + H5 + H6 + H7 + Données" },
                      { c: "2 — Liaison", u: "Trame", a: "H2 + H3 + H4 + H5 + H6 + H7 + Données + CTL (contrôle erreur)" },
                      { c: "1 — Physique", u: "Train de bits", a: "Transmission bit par bit sur le support physique" },
                    ].map(({ c, u, a }) => (
                      <tr key={c}>
                        <td className="py-2 pr-4 font-bold text-primary-light whitespace-nowrap">{c}</td>
                        <td className="py-2 pr-4 font-mono text-xs">{u}</td>
                        <td className="py-2 font-mono text-xs text-text-light">{a}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Point à point vs Bout en bout */}
            <div className="mt-6">
              <h3 className="text-base font-bold text-dark">6.4 Protocoles Point à Point vs Bout en Bout</h3>
              <div className="mt-3 overflow-x-auto">
                <table className="w-full text-sm text-text">
                  <thead>
                    <tr className="border-b border-border text-left">
                      {["Critère", "Protocole Point à Point", "Protocole Bout en Bout"].map((h) => (
                        <th key={h} className="pb-2 pr-4 font-semibold text-dark last:pr-0">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {[
                      { c: "Portée", pp: "Entre 2 machines adjacentes (sans intermédiaire)", be: "Entre les 2 systèmes d'extrémités finaux" },
                      { c: "Exemple", pp: "2 modems, 2 switchs voisins", be: "2 ordinateurs séparés par plusieurs routeurs" },
                      { c: "Rôle", pp: "Transport de l'information dans le réseau", be: "Vérifier l'intégrité + organiser le dialogue applicatif" },
                      { c: "Mode", pp: "Connecté OU non connecté", be: "Généralement connecté" },
                      { c: "Couches OSI", pp: "Couches 1–3 (physique, liaison, réseau)", be: "Couches 4–7 (transport, session, présentation, application)" },
                    ].map(({ c, pp, be }) => (
                      <tr key={c}>
                        <td className="py-2 pr-4 font-bold text-dark">{c}</td>
                        <td className="py-2 pr-4 leading-6 text-blue-600">{pp}</td>
                        <td className="py-2 leading-6 text-green-600">{be}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* ══════════════════════════════════════════════
              AXE 7 — Équipements d'interconnexion
          ══════════════════════════════════════════════ */}
          <section className="soft-card p-6 sm:p-8">
            <h2 className="text-xl font-extrabold text-dark">
              AXE 7 — Équipements d&apos;Interconnexion
            </h2>

            <div className="mt-5 overflow-hidden rounded-[12px] border border-border bg-bg">
              <img
                src={Image_reseau7}
                alt="Principaux équipements d'interconnexion"
                className="img w-full object-contain"
              />
              <p className="px-4 py-2 text-center text-xs italic text-text-light">
                Illustration : principaux équipements d&apos;interconnexion
              </p>
            </div>

            <div className="mt-5 space-y-3">
              {[
                {
                  eq: "🔌 Adaptateur réseau (Carte NIC)",
                  layer: "Couche 1 & 2",
                  role: "Interface entre le PC et le réseau",
                  fn: "Gère le protocole d'accès Ethernet (couche 2) + débit physique et codage bits (couche 1).",
                  ex: "Carte PCI, PCMCIA, intégrée.",
                  color: "border-gray-200 bg-gray-50 text-gray-700",
                },
                {
                  eq: "🔀 Hub (Concentrateur)",
                  layer: "Couche 1",
                  role: "Répéteur multi-ports",
                  fn: "Diffuse bit par bit l'information sur TOUS ses ports sans distinction.",
                  ex: "Hub 8 ports pour LAN simple.",
                  color: "border-orange-200 bg-orange-50 text-orange-700",
                },
                {
                  eq: "🔁 Switch (Commutateur)",
                  layer: "Couche 2",
                  role: "Hub intelligent",
                  fn: "Envoie SÉLECTIVEMENT la trame reçue vers le destinataire en fonction de son adresse MAC.",
                  ex: "Switch 24 ports pour réseau d'école.",
                  color: "border-blue-200 bg-blue-50 text-blue-700",
                },
                {
                  eq: "🌉 Pont (Bridge)",
                  layer: "Couche 2",
                  role: "Switch simplifié",
                  fn: "Un switch à DEUX ports uniquement. Relie deux segments de réseau.",
                  ex: "Pont Ethernet.",
                  color: "border-green-200 bg-green-50 text-green-700",
                },
                {
                  eq: "🌐 Routeur",
                  layer: "Couche 3",
                  role: "Interconnecte des sous-réseaux",
                  fn: "Aiguille les paquets entre différents réseaux en utilisant les adresses IP. \"Switchs évolués\".",
                  ex: "Routeur Wi-Fi, routeur Internet.",
                  color: "border-purple-200 bg-purple-50 text-purple-700",
                },
              ].map(({ eq, layer, role, fn, ex, color }) => (
                <div key={eq} className={`rounded-[12px] border p-4 text-sm ${color}`}>
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <p className="font-bold text-base">{eq}</p>
                    <span className="rounded-full border border-current/30 bg-white px-2 py-0.5 text-xs font-semibold">{layer}</span>
                  </div>
                  <p className="mt-2 text-xs italic font-semibold">{role}</p>
                  <p className="mt-2 leading-6 text-text">{fn}</p>
                  <p className="mt-1 text-xs text-text-light"><span className="not-italic font-semibold text-dark">Exemple : </span>{ex}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ══════════════════════════════════════════════
              AXE 8 — Architecture TCP/IP
          ══════════════════════════════════════════════ */}
          <section className="soft-card p-6 sm:p-8">
            <h2 className="text-xl font-extrabold text-dark">
              AXE 8 — Architecture TCP/IP
            </h2>

            {/* Illustration OSI vs TCP/IP */}
            <div className="mt-5 overflow-hidden rounded-[12px] border border-border bg-bg">
              <img
                src={Image_reseau8}
                alt="Correspondance entre OSI et TCP/IP"
                className="img w-full object-contain"
              />
              <p className="px-4 py-2 text-center text-xs italic text-text-light">
                Illustration : correspondance entre OSI et TCP/IP
              </p>
            </div>

            {/* TCP/IP vs OSI */}
            <div className="mt-5 overflow-x-auto">
              <table className="w-full text-sm text-text">
                <thead>
                  <tr className="border-b border-border text-left">
                    {["Couche TCP/IP", "Couches OSI correspondantes", "Protocoles principaux", "Rôle"].map((h) => (
                      <th key={h} className="pb-2 pr-4 font-semibold text-dark last:pr-0">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {[
                    { c: "📱 Application", osc: "Couches 7 + 6 + 5 (Application + Présentation + Session)", p: "HTTP, FTP, SMTP, DNS, Telnet, SSH", r: "Services applicatifs pour l'utilisateur.", color: "text-red-500" },
                    { c: "🚚 Transport", osc: "Couche 4 (Transport)", p: "TCP (connecté, fiable) / UDP (non connecté, rapide)", r: "Transfert bout en bout. Segmentation.", color: "text-green-500" },
                    { c: "🌐 Internet", osc: "Couche 3 (Réseau)", p: "IP, ICMP, IGMP, ARP", r: "Adressage logique et routage des paquets.", color: "text-blue-500" },
                    { c: "🔌 Interface Réseau", osc: "Couches 2 + 1 (Liaison + Physique)", p: "Ethernet, Wi-Fi, pilotes & cartes interfaces", r: "Transmission physique sur le support.", color: "text-purple-500" },
                  ].map(({ c, osc, p, r, color }) => (
                    <tr key={c}>
                      <td className={`py-2 pr-4 font-bold whitespace-nowrap ${color}`}>{c}</td>
                      <td className="py-2 pr-4 leading-6 text-xs">{osc}</td>
                      <td className="py-2 pr-4 font-mono text-xs text-text-light">{p}</td>
                      <td className="py-2 leading-6 text-xs">{r}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Encapsulation TCP/IP */}
            <div className="mt-6">
              <h3 className="text-base font-bold text-dark">8.1 Encapsulation et décapsulation dans TCP/IP</h3>

              <div className="mt-3 overflow-hidden rounded-[12px] border border-border bg-bg">
                <img
                  src={Image_reseau9}
                  alt="Encapsulation et décapsulation dans TCP/IP"
                  className="img w-full object-contain"
                />
                <p className="px-4 py-2 text-center text-xs italic text-text-light">
                  Illustration : encapsulation et décapsulation dans TCP/IP
                </p>
              </div>

              <div className="mt-4 overflow-x-auto">
                <table className="w-full text-sm text-text">
                  <thead>
                    <tr className="border-b border-border text-left">
                      {["Couche", "Unité transmise", "En-tête ajouté", "Contenu"].map((h) => (
                        <th key={h} className="pb-2 pr-4 font-semibold text-dark last:pr-0">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {[
                      { c: "Application", u: "Données utilisateur", h: "En-tête application", co: "[En-tête App] + [Données utilisateur]" },
                      { c: "Transport (TCP/UDP)", u: "Segment TCP", h: "En-tête TCP/UDP", co: "[H-TCP] + [En-tête App] + [Données]" },
                      { c: "Internet (IP)", u: "Datagramme IP", h: "En-tête IP", co: "[H-IP] + [H-TCP] + [En-tête App] + [Données]" },
                      { c: "Interface Réseau", u: "Trame Ethernet", h: "En-tête NIC + CRC", co: "[H-NIC] + [H-IP] + [H-TCP] + [Données] + [CRC]" },
                    ].map(({ c, u, h, co }) => (
                      <tr key={c}>
                        <td className="py-2 pr-4 font-bold text-primary-light whitespace-nowrap">{c}</td>
                        <td className="py-2 pr-4 font-mono text-xs">{u}</td>
                        <td className="py-2 pr-4 text-xs italic">{h}</td>
                        <td className="py-2 font-mono text-xs text-text-light">{co}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* TCP vs UDP */}
            <div className="mt-6">
              <h3 className="text-base font-bold text-dark">8.2 TCP vs UDP</h3>
              <div className="mt-3 overflow-x-auto">
                <table className="w-full text-sm text-text">
                  <thead>
                    <tr className="border-b border-border text-left">
                      {["Critère", "TCP (Transmission Control Protocol)", "UDP (User Datagram Protocol)"].map((h) => (
                        <th key={h} className="pb-2 pr-4 font-semibold text-dark last:pr-0">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {[
                      { c: "Mode", t: "Connecté (établit une connexion)", u: "Non connecté (datagramme)" },
                      { c: "Fiabilité", t: "Garantie : acquittement, retransmission", u: "Non garantie" },
                      { c: "Séquencement", t: "Oui (paquets ordonnés)", u: "Non (peut arriver dans le désordre)" },
                      { c: "Vitesse", t: "Plus lent (contrôle fort)", u: "Plus rapide" },
                      { c: "Usage", t: "HTTP, FTP, SMTP, SSH", u: "DNS, streaming, jeux en ligne, VoIP" },
                      { c: "Analogie", t: "📞 Appel téléphonique (connexion établie)", u: "📩 SMS (envoyé sans confirmation)" },
                    ].map(({ c, t, u }) => (
                      <tr key={c}>
                        <td className="py-2 pr-4 font-bold text-dark">{c}</td>
                        <td className="py-2 pr-4 leading-6 text-blue-600">{t}</td>
                        <td className="py-2 leading-6 text-orange-600">{u}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Adressage IP */}
            <div className="mt-6">
              <h3 className="text-base font-bold text-dark">8.3 Adressage IP (aperçu)</h3>
              <div className="mt-3 rounded-[10px] border border-border bg-bg px-4 py-2 text-sm text-text">
                <p>Une adresse IP (IPv4) = <strong>32 bits = 4 octets</strong> séparés par des points.</p>
                <p className="mt-1 font-mono text-primary-light">Exemple : 192.168.1.10</p>
              </div>
              <div className="mt-3 overflow-x-auto">
                <table className="w-full text-sm text-text">
                  <thead>
                    <tr className="border-b border-border text-left">
                      {["Classe", "Plage d'adresses", "Masque par défaut", "Usage"].map((h) => (
                        <th key={h} className="pb-2 pr-4 font-semibold text-dark last:pr-0">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {[
                      { cl: "🔵 A", pl: "1.0.0.0 – 126.0.0.0", m: "255.0.0.0 (/8)", u: "Très grandes organisations" },
                      { cl: "🟢 B", pl: "128.0.0.0 – 191.255.0.0", m: "255.255.0.0 (/16)", u: "Moyennes organisations" },
                      { cl: "🟡 C", pl: "192.0.0.0 – 223.255.255.0", m: "255.255.255.0 (/24)", u: "Petits réseaux (collèges, entreprises)" },
                      { cl: "🔴 Privées", pl: "10.x, 172.16-31.x, 192.168.x", m: "Variable", u: "Réseaux internes (non routables sur Internet)" },
                    ].map(({ cl, pl, m, u }) => (
                      <tr key={cl}>
                        <td className="py-2 pr-4 font-bold text-primary-light">{cl}</td>
                        <td className="py-2 pr-4 font-mono text-xs">{pl}</td>
                        <td className="py-2 pr-4 font-mono text-xs">{m}</td>
                        <td className="py-2 leading-6 italic text-text-light">{u}</td>
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