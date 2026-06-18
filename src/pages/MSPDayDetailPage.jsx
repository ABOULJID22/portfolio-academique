import { Link, Navigate, useParams } from 'react-router-dom';
import {
  FiArrowLeft,
  FiAward,
  FiBookOpen,
  FiCalendar,
  FiCheckCircle,
  FiClock,
  FiFileText,
  FiLayers,
  FiMapPin,
  FiMonitor,
  FiTarget,
  FiTool,
} from 'react-icons/fi';
import { getMspCategoryTone, getMspDayImage, mspReport } from '../data/mspReportAssets';

const labelByKey = {
  time: 'Horaire',
  group: 'Groupe',
  theme: 'Thème',
  method: 'Méthode',
  objective: 'Objectif',
  teacher: 'Enseignant',
  situationProblem: 'Situation-problème',
};

const arraySectionLabels = {
  activities: 'Activités',
  phases: 'Phases de la séance',
  content: 'Contenus étudiés',
  strengths: 'Points forts',
  difficulties: 'Difficultés observées',
  traineeRole: 'Rôle du stagiaire',
};

export default function MSPDayDetailPage() {
  const { dayId } = useParams();
  const day = mspReport.days.find((item) => String(item.id) === String(dayId));

  if (!day) {
    return <Navigate to="/msp/rapport" replace />;
  }

  const image = getMspDayImage(day.id);
  const categoryTone = getMspCategoryTone(day.category);
  const infoItems = [
    { label: 'Date', value: day.displayDate, icon: FiCalendar },
    { label: 'Durée', value: day.duration, icon: FiClock },
    { label: 'Leçon', value: day.lesson, icon: FiBookOpen },
    { label: 'Catégorie', value: day.category, icon: FiLayers },
  ];

  return (
    <main className="overflow-hidden bg-bg">
      <section className="bg-gradient2 text-white">
        <div className="portfolio-container py-10 sm:py-14 lg:py-16">
          <Link
            to="/msp/rapport"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/15"
          >
            <FiArrowLeft size={16} />
            Retour au rapport MSP
          </Link>

          <div className="mt-8 grid items-center gap-8 lg:grid-cols-[1fr_0.82fr]">
            <div className="min-w-0">
              <span className={`inline-flex w-fit rounded-full border px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] ${categoryTone}`}>
                Journée {day.id} · {day.category}
              </span>
              <h1 className="mt-5 max-w-4xl break-words text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
                {day.shortTitle}
              </h1>
              <p className="mt-5 max-w-3xl break-words text-sm leading-7 text-white/75 sm:text-base">
                {day.context}
              </p>
            </div>

            <figure className="min-w-0 overflow-hidden rounded-card border border-white/10 bg-white/10 shadow-lg">
              <img src={image} alt={day.shortTitle} className="h-[260px] w-full object-cover sm:h-[360px]" />
              <figcaption className="break-words px-4 py-3 text-xs font-semibold uppercase leading-5 tracking-[0.14em] text-sky-100/80">
                Visuel extrait du rapport MSP, pages {day.sourcePages?.join(', ')}
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="portfolio-container space-y-8">
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {infoItems.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.label} className="soft-card p-5">
                  <Icon className="text-primary-light" size={22} />
                  <div className="mt-4 text-[11px] font-bold uppercase tracking-[0.16em] text-text-light">{item.label}</div>
                  <div className="mt-1 break-words text-sm font-extrabold text-dark">{item.value}</div>
                </article>
              );
            })}
          </div>

          <section className="grid gap-6 lg:grid-cols-[0.86fr_1.14fr]">
            <article className="soft-card p-6 sm:p-8">
              <SectionTitle icon={FiTarget} eyebrow="Objectif" title="Synthèse de la journée" />
              <p className="mt-5 text-sm leading-7 text-text">{day.context}</p>
              {day.conclusion ? (
                <div className="mt-5 rounded-2xl border border-blue-100 bg-blue-50 p-4 text-sm leading-7 text-primary">
                  {day.conclusion}
                </div>
              ) : null}
              <div className="mt-5 flex flex-wrap gap-2">
                {day.tags?.map((tag) => (
                  <span key={tag} className="rounded-full border border-primary-light/20 bg-white px-3 py-1 text-xs font-bold text-primary-light">
                    {tag}
                  </span>
                ))}
              </div>
            </article>

            <article className="soft-card p-6 sm:p-8">
              <SectionTitle icon={FiMonitor} eyebrow="Séances" title="Déroulement observé" />
              <div className="mt-5 space-y-5">
                {day.sessions?.map((session) => (
                  <SessionCard key={`${day.id}-${session.number}-${session.theme}`} session={session} />
                ))}
              </div>
            </article>
          </section>

          <section className="grid gap-6 lg:grid-cols-2">
            <ListPanel icon={FiCheckCircle} title="Compétences développées" items={day.skillsDeveloped} />
            <ListPanel icon={FiTool} title="Organisation et outils" items={[...(day.organization ?? []), ...(day.tools ?? [])]} />
          </section>

          <ExtraSections day={day} />
        </div>
      </section>
    </main>
  );
}

function SectionTitle({ icon: Icon, eyebrow, title }) {
  return (
    <div>
      <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.16em] text-primary-light">
        <Icon size={15} />
        {eyebrow}
      </div>
      <h2 className="mt-2 text-xl font-extrabold text-dark sm:text-2xl">{title}</h2>
    </div>
  );
}

function ListPanel({ icon: Icon, title, items = [] }) {
  if (!items.length) return null;

  return (
    <article className="soft-card p-6 sm:p-8">
      <SectionTitle icon={Icon} eyebrow="MSP" title={title} />
      <ul className="mt-5 space-y-3 text-sm leading-6 text-text">
        {items.map((item) => (
          <li key={typeof item === 'string' ? item : JSON.stringify(item)} className="flex gap-3">
            <FiCheckCircle className="mt-0.5 shrink-0 text-primary-light" size={17} />
            <span>{typeof item === 'string' ? item : Object.values(item).filter(Boolean).join(' · ')}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

function SessionCard({ session }) {
  const scalarEntries = Object.entries(session).filter(([key, value]) => !['number', ...Object.keys(arraySectionLabels)].includes(key) && typeof value === 'string');
  const arrayEntries = Object.entries(arraySectionLabels)
    .map(([key, label]) => ({ key, label, items: session[key] }))
    .filter((entry) => Array.isArray(entry.items) && entry.items.length > 0);

  return (
    <article className="rounded-2xl border border-border bg-bg p-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h3 className="text-base font-extrabold text-dark">Séance {session.number}</h3>
        {session.time ? (
          <span className="rounded-full bg-white px-3 py-1 text-xs font-bold text-primary-light">{session.time}</span>
        ) : null}
      </div>

      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        {scalarEntries.map(([key, value]) => (
            <div key={key} className="min-w-0 rounded-xl border border-border bg-white px-4 py-3">
              <div className="text-[10px] font-bold uppercase tracking-[0.14em] text-text-light">{labelByKey[key] ?? key}</div>
            <div className="mt-1 break-words text-sm font-semibold text-dark">{value}</div>
          </div>
        ))}
      </div>

      <div className="mt-4 space-y-4">
        {arrayEntries.map((entry) => (
          <div key={entry.key}>
            <h4 className="text-sm font-extrabold text-dark">{entry.label}</h4>
            <StructuredList items={entry.items} />
          </div>
        ))}
      </div>
    </article>
  );
}

function StructuredList({ items }) {
  return (
    <div className="mt-3 space-y-2">
      {items.map((item, index) => {
        if (typeof item === 'string') {
          return (
            <div key={item} className="flex min-w-0 gap-2 rounded-xl bg-white px-4 py-3 text-sm leading-6 text-text">
              <span className="mt-0.5 shrink-0 text-primary-light">▸</span>
              <span className="min-w-0 break-words">{item}</span>
            </div>
          );
        }

        return (
          <div key={`${item.phase ?? item.method ?? index}`} className="min-w-0 rounded-xl border border-border bg-white p-4 text-sm leading-6 text-text">
            <div className="font-extrabold text-dark">{item.phase ?? item.method ?? item.exercise ?? `Point ${index + 1}`}</div>
            <div className="mt-2 grid gap-2">
              {Object.entries(item)
                .filter(([key]) => !['phase', 'method', 'exercise'].includes(key))
                .map(([key, value]) => (
                  <p key={key}>
                    <span className="font-bold text-primary-light">{labelByKey[key] ?? key} : </span>
                    {Array.isArray(value) ? value.join(' · ') : value}
                  </p>
                ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

function ExtraSections({ day }) {
  const sections = [
    { title: 'Gestion de l’enseignant', icon: FiAward, items: day.teacherManagement },
    { title: 'Méthodes observées', icon: FiLayers, items: day.methodsObserved },
    { title: 'Contenu de l’évaluation', icon: FiFileText, items: day.assessmentContent },
    { title: 'Fonctions Python étudiées', icon: FiBookOpen, items: day.pythonFunctions },
    { title: 'Étapes Massar', icon: FiMapPin, items: day.massarSteps ?? day.massarGradeEntryProcedure },
    { title: 'Intérêts pédagogiques', icon: FiTarget, items: day.educationalInterests ?? day.pedagogicalInterests },
    { title: 'Recommandations', icon: FiCheckCircle, items: day.recommendations },
  ].filter((section) => Array.isArray(section.items) && section.items.length > 0);

  if (!sections.length) return null;

  return (
    <section className="grid gap-6 lg:grid-cols-2">
      {sections.map((section) => (
        <article key={section.title} className="soft-card p-6 sm:p-8">
          <SectionTitle icon={section.icon} eyebrow="Détail" title={section.title} />
          <StructuredList items={section.items} />
        </article>
      ))}
    </section>
  );
}
