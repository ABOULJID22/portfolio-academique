import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FiArrowRight,
  FiAward,
  FiBarChart2,
  FiBookOpen,
  FiCalendar,
  FiCheckCircle,
  FiCode,
  FiCpu,
  FiDatabase,
  FiFilter,
  FiImage,
  FiLayers,
  FiMapPin,
  FiMonitor,
  FiTarget,
  FiUsers,
} from 'react-icons/fi';
import SectionHeader from '../components/SectionHeader';
import { getMspCategoryTone, getMspDayImage, mspImages, mspReport } from '../data/mspReportAssets';

const competencies = [
  {
    title: 'Posture professionnelle',
    text: 'Observer une classe réelle, prendre des initiatives mesurées et adopter une attitude responsable devant les élèves.',
    icon: FiUsers,
  },
  {
    title: 'Didactique de l’informatique',
    text: 'Faire progresser les élèves de l’algorithmique vers Python avec situations-problèmes, exemples et pratique guidée.',
    icon: FiCode,
  },
  {
    title: 'Gestion de salle informatique',
    text: 'Organiser les postes, gérer les difficultés techniques et accompagner les élèves pendant les travaux pratiques.',
    icon: FiMonitor,
  },
  {
    title: 'Évaluation et correction',
    text: 'Surveiller, corriger avec barème, analyser les erreurs fréquentes et garder une posture neutre pendant les devoirs.',
    icon: FiCheckCircle,
  },
  {
    title: 'Outils institutionnels',
    text: 'Utiliser Massar pour l’orientation, le suivi administratif, la saisie et la vérification des notes.',
    icon: FiDatabase,
  },
  {
    title: 'Analyse réflexive',
    text: 'Comparer les méthodes observées, identifier les points forts et formuler des recommandations pédagogiques.',
    icon: FiBarChart2,
  },
];

const filterMatchesDay = (filterKey, day) => {
  if (filterKey === 'all') return true;
  if (filterKey === 'Évaluation') return day.category?.includes('Évaluation') || day.tags?.some((tag) => tag.includes('évaluation'));
  if (filterKey === 'Massar') return day.category === 'Massar' || day.tags?.some((tag) => tag.toLowerCase().includes('massar'));
  return day.category === filterKey || day.tags?.some((tag) => tag.toLowerCase().includes(filterKey.toLowerCase()));
};

export default function MSPReportPage() {
  const [activeFilter, setActiveFilter] = useState('all');
  const { meta, establishment, days, globalProgression, uiFilters } = mspReport;

  const filteredDays = useMemo(() => days.filter((day) => filterMatchesDay(activeFilter, day)), [activeFilter, days]);
  const totalSessions = useMemo(() => days.reduce((total, day) => total + (day.sessions?.length ?? 0), 0), [days]);
  const evaluationDays = useMemo(() => days.filter((day) => day.category?.includes('Évaluation')).length, [days]);

  const stats = [
    { label: 'Journées MSP', value: meta.totalDays, icon: FiCalendar },
    { label: 'Séances analysées', value: totalSessions, icon: FiLayers },
    { label: 'Postes Salle Génie', value: establishment.computerRoom.studentComputers, icon: FiCpu },
    { label: 'Évaluations suivies', value: evaluationDays, icon: FiAward },
  ];

  return (
    <main className="overflow-hidden bg-bg">
      <section className="bg-gradient2 text-white">
        <div className="portfolio-container py-12 sm:py-16 lg:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.95fr]">
            <div className="min-w-0">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-sky-100">
                <FiBookOpen size={15} />
                Rapport MSP · {meta.schoolYear}
              </span>
              <h1 className="mt-6 max-w-4xl break-words text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
                Mise en Situation Professionnelle au Lycée Ibn Abbad
              </h1>
              <p className="mt-6 max-w-3xl break-words text-sm leading-7 text-white/75 sm:text-base">
                Synthèse interactive du rapport MSP de {meta.trainee} : découverte du lycée, Salle Génie, pratiques
                d’enseignement en algorithmique et Python, évaluations, Massar et bilan des compétences professionnelles.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a href="#journees" className="btn-primary w-full sm:w-auto">
                  Voir les journées
                  <FiArrowRight size={17} />
                </a>
                <a href="#competences" className="btn-outline w-full sm:w-auto">
                  Compétences apprises
                </a>
              </div>
            </div>

            <div className="grid min-w-0 gap-4 sm:grid-cols-2">
              <figure className="min-w-0 overflow-hidden rounded-card border border-white/10 bg-white/10 shadow-lg sm:col-span-2">
                <img src={mspImages.school} alt="Façade du Lycée Ibn Abbad" className="h-60 w-full object-cover sm:h-72" />
              </figure>
              <figure className="min-w-0 overflow-hidden rounded-card border border-white/10 bg-white/10">
                <img src={mspImages.computerRoom2} alt=" Salle Génie du lycée" className=" h-full w-full object-cover " />
              </figure>
              <div className="min-w-0 rounded-card border border-white/10 bg-white/10 p-5">
                <div className="text-xs font-bold uppercase tracking-[0.16em] text-sky-200">Fiche du stage</div>
                <dl className="mt-4 space-y-3 text-sm">
                  <InfoLine label="Encadrant" value={meta.supervisor} />
                  <InfoLine label="Niveau" value={meta.level} />
                  <InfoLine label="Salle" value={`${meta.classroom} · ${establishment.computerRoom.studentComputers} postes`} />
                </dl>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="-mt-8">
        <div className="portfolio-container grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <article key={stat.label} className="soft-card p-5 shadow-md">
                <Icon className="text-primary-light" size={22} />
                <strong className="mt-4 block text-3xl font-extrabold text-dark">{stat.value}</strong>
                <span className="mt-1 block text-sm font-semibold text-text-light">{stat.label}</span>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section-shell">
        <div className="portfolio-container">
          <SectionHeader
            badge="Lycée et salle informatique"
            title="Un contexte réel d’enseignement"
            description="Le rapport présente le Lycée Ibn Abbad, son organisation, la Salle Génie et les conditions matérielles des séances d’informatique."
          />

          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <article className="soft-card overflow-hidden">
              <img src={mspImages.schoolPlan} alt="Plan intérieur du Lycée Ibn Abbad" className="h-64 w-full object-cover sm:h-80" />
              <div className="p-6">
                <div className="text-xs font-bold uppercase tracking-[0.16em] text-primary-light">Établissement d’accueil</div>
                <h2 className="mt-2 text-2xl font-extrabold text-dark">{establishment.name}</h2>
                <p className="mt-3 text-sm leading-7 text-text">
                  Lycée public qualifiant situé à {establishment.district}, relevant de {establishment.academy}. Le stage
                  s’appuie sur un cadre institutionnel complet : documents professionnels, rituels de classe et suivi pédagogique.
                </p>
              </div>
            </article>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { label: 'Adresse', value: establishment.address, icon: FiMapPin },
                { label: 'Ancienne appellation', value: establishment.oldName, icon: FiImage },
                { label: 'Systèmes', value: establishment.computerRoom.operatingSystems.join(' · '), icon: FiMonitor },
                { label: 'Outils', value: establishment.computerRoom.teachingTools.join(' · '), icon: FiTarget },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <article key={item.label} className="soft-card p-5">
                    <Icon className="text-primary-light" size={22} />
                    <div className="mt-4 text-[11px] font-bold uppercase tracking-[0.16em] text-text-light">{item.label}</div>
                    <div className="mt-1 text-sm font-bold leading-6 text-dark">{item.value}</div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section id="competences" className="section-shell bg-white">
        <div className="portfolio-container">
          <SectionHeader
            badge="Ce que j’ai appris"
            title="Compétences développées pendant la MSP"
            description="Les journées alternent observation, participation, pratique guidée, correction, autonomie et usage des outils institutionnels."
          />

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {competencies.map((competency) => {
              const Icon = competency.icon;
              return (
                <article key={competency.title} className="soft-card p-6 transition hover:-translate-y-1 hover:shadow-md">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-primary-light">
                    <Icon size={22} />
                  </div>
                  <h3 className="mt-5 text-lg font-extrabold text-dark">{competency.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-text-light">{competency.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="portfolio-container">
          <SectionHeader
            badge="Progression"
            title="Du premier contact au bilan final"
            description="La progression globale du rapport montre comment la posture professionnelle se construit étape par étape."
          />

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {globalProgression.map((step) => (
              <article key={step.step} className="soft-card p-5">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient1 text-sm font-extrabold text-white">
                    {step.step}
                  </span>
                  <h3 className="text-base font-extrabold text-dark">{step.label}</h3>
                </div>
                <p className="mt-4 text-sm leading-6 text-text-light">{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="journees" className="section-shell bg-white">
        <div className="portfolio-container">
          <SectionHeader
            badge="Journal MSP"
            title="10 journées sous forme de cartes détaillées"
            description="Filtrez par thème, puis ouvrez chaque carte pour consulter le déroulement, les activités, les compétences et les recommandations."
          />

          <div className="mb-8 flex flex-wrap justify-center gap-2">
            {uiFilters.map((filter) => (
              <button
                key={filter.key}
                type="button"
                onClick={() => setActiveFilter(filter.key)}
                className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-bold transition ${
                  activeFilter === filter.key
                    ? 'border-primary-light bg-primary-light text-white shadow-md'
                    : 'border-border bg-bg text-text hover:border-primary-light hover:text-primary-light'
                }`}
              >
                <FiFilter size={15} />
                {filter.label}
              </button>
            ))}
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {filteredDays.map((day) => (
              <DayCard key={day.id} day={day} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

function InfoLine({ label, value }) {
  return (
    <div>
      <dt className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/55">{label}</dt>
      <dd className="mt-1 break-words font-semibold text-white">{value}</dd>
    </div>
  );
}

function DayCard({ day }) {
  const image = getMspDayImage(day.id);
  const tone = getMspCategoryTone(day.category);
  const firstSkills = day.skillsDeveloped?.slice(0, 2) ?? [];

  return (
    <article className="soft-card group flex h-full flex-col overflow-hidden transition hover:-translate-y-1 hover:shadow-lg">
      <div className="relative h-48 overflow-hidden bg-slate-100">
        <img src={image} alt={day.shortTitle} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
        <div className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-xs font-extrabold text-primary-light shadow-sm">
          J{day.id}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex flex-wrap items-center gap-2">
          <span className={`rounded-full border px-3 py-1 text-[11px] font-bold uppercase tracking-[0.12em] ${tone}`}>
            {day.category}
          </span>
          <span className="text-xs font-bold text-text-light">{day.displayDate}</span>
        </div>

        <h3 className="mt-4 text-lg font-extrabold leading-tight text-dark">{day.shortTitle}</h3>
        <p className="mt-3 text-sm leading-6 text-text-light">{day.context}</p>

        <div className="mt-4 grid gap-2 text-xs font-semibold text-text">
          <span className="rounded-xl border border-border bg-bg px-3 py-2">{day.lesson}</span>
          <span className="rounded-xl border border-border bg-bg px-3 py-2">{day.duration}</span>
        </div>

        {firstSkills.length ? (
          <ul className="mt-4 space-y-2 text-sm leading-6 text-text">
            {firstSkills.map((skill) => (
              <li key={skill} className="flex gap-2">
                <FiCheckCircle className="mt-0.5 shrink-0 text-primary-light" size={16} />
                <span>{skill}</span>
              </li>
            ))}
          </ul>
        ) : null}

        <Link
          to={`/msp/rapport/journees/${day.id}`}
          className="mt-5 inline-flex items-center gap-2 self-start text-sm font-extrabold text-primary-light transition hover:text-primary"
        >
          Voir le détail de la journée
          <FiArrowRight size={16} />
        </Link>
      </div>
    </article>
  );
}
