import { FiBookOpen, FiCalendar, FiFileText, FiMapPin, FiVideo } from 'react-icons/fi';
import SectionHeader from '../components/SectionHeader';

const iconByLabel = {
  Date: FiCalendar,
  Niveau: FiBookOpen,
  Lieu: FiMapPin,
};

const resources = [
  { label: 'Rapport de stage MSP', icon: FiFileText, href: '#' },
  { label: 'Fiche pédagogique', icon: FiBookOpen, href: '#' },
  { label: 'Séquence Python', icon: FiBookOpen, href: '#' },
];

const getResourceLink = (resource) => {
  if (resource.href && resource.href !== '#') {
    return resource.href;
  }

  const query = `MSP ${resource.label} CRMEF`;
  return `https://drive.google.com/drive/search?q=${encodeURIComponent(query)}`;
};

export default function MSPPage() {
  return (
    <main className="section-shell">
      <div className="portfolio-container">
        <SectionHeader
          badge="Mise en Situation Professionnelle"
          title="MSP"
          description="Une seule page MSP regroupant les informations du stage et toutes les ressources."
        />

        <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <article className="soft-card overflow-hidden">
            <div className="bg-gradient1 p-6 text-white sm:p-8">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.16em]">
                <FiBookOpen size={14} />
                Stage pratique
              </div>
              <h2 className="mt-4 text-2xl font-extrabold sm:text-3xl">Mise en Situation Professionnelle</h2>
              <p className="mt-2 max-w-2xl text-sm leading-7 text-white/75">
                Immersion en classe, observation, animation pédagogique et évaluation pratique en contexte réel.
              </p>
            </div>

            <div className="grid gap-4 p-6 sm:grid-cols-3 sm:p-8">
              {[
                { label: 'Date', value: 'Février - Mars 2026' },
                { label: 'Niveau', value: 'Algorithmique et Python' },
                { label: 'Lieu', value: 'Lycée Ibn Abbad' },
              ].map((stat) => {
                const StatIcon = iconByLabel[stat.label];
                return (
                  <div key={stat.label} className="rounded-[14px] border border-border bg-bg p-4">
                    <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-text-light">
                      <StatIcon size={14} className="text-primary-light" />
                      {stat.label}
                    </div>
                    <div className="mt-2 text-base font-bold text-dark">{stat.value}</div>
                  </div>
                );
              })}
            </div>
          </article>

          <aside className="soft-card p-6 sm:p-8">
            <h3 className="text-lg font-bold text-dark">Détails du stage</h3>
            <div className="mt-5 space-y-4 text-sm text-text">
              {[
                { label: 'Période', value: 'Février - Juin 2026', icon: FiCalendar },
                { label: 'Niveau', value: 'Tronc Commun', icon: FiBookOpen },
                { label: 'Établissement', value: 'Lycée Ibn Abbad, Marrakech', icon: FiMapPin },
                { label: 'Documents', value: "Rapport, fiches pédagogiques, séquence Python, grille d'évaluation et photos", icon: FiFileText },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-3 rounded-[14px] border border-border bg-bg p-4">
                  <item.icon className="mt-0.5 shrink-0 text-primary-light" size={18} />
                  <div>
                    <div className="text-xs font-bold uppercase tracking-[0.14em] text-text-light">{item.label}</div>
                    <div className="mt-1 font-medium text-dark">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </aside>
        </section>

        <section className="mt-8 soft-card p-6 sm:p-8">
          <h3 className="text-lg font-bold text-dark">Ressources MSP</h3>
          <div className="mt-5 grid gap-3 md:grid-cols-3">
            {resources.map((resource) => {
              const ResourceIcon = resource.icon;
              return (
                <a
                  key={resource.label}
                  href={getResourceLink(resource)}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between gap-3 rounded-[14px] border border-border bg-white px-4 py-3 text-sm font-medium text-text transition hover:border-primary-light hover:text-primary-light"
                >
                  <span className="flex items-center gap-2">
                    <ResourceIcon size={16} />
                    {resource.label}
                  </span>
                  <span aria-hidden="true">→</span>
                </a>
              );
            })}
          </div>
        </section>
      </div>
    </main>
  );
}
