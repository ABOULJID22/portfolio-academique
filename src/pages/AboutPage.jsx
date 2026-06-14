import {
  FiArrowUpRight,
  FiDownload,
  FiPlayCircle,
  FiCode,
  FiBookOpen,
  FiGlobe,
} from 'react-icons/fi';
import SectionHeader from '../components/SectionHeader';
import {
  aboutSkills,
  personalInfo,
  profileLinks,
  timelineItems,
} from '../data/portfolioData';
import profileImage from '../data/images/img1.png';

export default function AboutPage() {
  return (
    <main className="section-shell bg-white">
      <div className="portfolio-container">
        <SectionHeader
          badge="À propos de moi"
          title="Mon Parcours"
          description="Développeur Full Stack, professeur en informatique et créateur de contenu pédagogique numérique."
        />

        {/* ── Biographie ── */}
        <section className="soft-card mb-8 p-6 sm:p-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-10">
            {/* Avatar initiales */}
            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-primary-light/10 text-3xl font-extrabold text-primary-light ring-4 ring-primary-light/20">
              <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-full bg-gradient1">
                      <img src={profileImage} alt="Photo de profil" className="block h-full w-full object-cover object-center" />
              </div>              
            </div>
            <div>
              <h2 className="text-2xl font-extrabold text-dark">Mohamed ABOULJID</h2>
              <p className="mt-1 text-sm font-medium text-accent">
               Professeur  D'Informatique *_* Développeur Full Stack
              </p>
              <p className="mt-4 text-base leading-8 text-text">
               {/*  Professeur en informatique, je suis également développeur Full Stack. Mon parcours allie une solide formation
                en génie informatique, des expériences professionnelles variées (SaaS, IT, freelance), et une
                passion pour la transmission du savoir numérique. Je conçois des solutions web performantes et
                sécurisées, tout en accompagnant les apprenants dans la construction de leurs compétences
                informatiques de façon active et innovante. */}
                Professeur en informatique, développeur Full Stack et physicien,
                 je combine rigueur scientifique, compétences techniques et passion pour 
                 l’enseignement. Mon parcours allie une solide formation en 
                 génie informatique et une passion pour la transmission du
                  savoir numérique. Je conçois des solutions web performantes et sécurisées, tout 
                  en accompagnant les apprenants dans le développement de leurs compétences numériques
                   de manière active et innovante.

              </p>

              {/* Badges domaines */}
              <div className="mt-5 flex flex-wrap gap-2">
                {[
                  { icon: <FiCode size={13} />, label: "Full Stack & Mobile" },
                  { icon: <FiBookOpen size={13} />, label: "Didactique Informatique" },
                  { icon: <FiGlobe size={13} />, label: "SaaS & Architecture Web" },
                ].map(({ icon, label }) => (
                  <span
                    key={label}
                    className="inline-flex items-center gap-1.5 rounded-full border border-primary-light/30 bg-primary-light/5 px-3 py-1 text-xs font-semibold text-primary-light"
                  >
                    {icon}
                    {label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Grille principale ── */}
        <section className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">

          {/* ── Colonne gauche : Timeline + Compétences ── */}
          <article className="space-y-8">

            {/* Timeline */}
            <div className="soft-card p-6 sm:p-8">
              <h2 className="text-xl font-extrabold text-dark">Parcours & Expériences</h2>
              <p className="mt-2 text-sm text-text-light">
                Formation académique, expériences professionnelles et missions d&apos;enseignement.
              </p>

              <div className="relative mt-6 space-y-0 pl-5">
                {/* Ligne verticale */}
                <span
                  aria-hidden="true"
                  className="absolute left-[7px] top-2 h-[calc(100%-16px)] w-[2px] rounded-full bg-border"
                />

                {timelineItems.map((item, i) => (
                  <div key={i} className="relative pb-5 last:pb-0">
                    {/* Point */}
                    <span
                      aria-hidden="true"
                      className="absolute -left-[13px] top-[5px] h-3 w-3 rounded-full border-2 border-primary-light bg-white"
                    />
                    <div className="rounded-[14px] border border-border bg-bg p-4 transition hover:border-primary-light/40 hover:shadow-sm">
                      <div className="text-xs font-bold uppercase tracking-[0.14em] text-accent">
                        {item.year}
                      </div>
                      <h3 className="mt-1 text-sm font-bold text-dark">{item.title}</h3>
                      <p className="mt-0.5 text-sm text-text-light">{item.subtitle}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Compétences techniques */}
            <div className="soft-card p-6 sm:p-8">
              <h2 className="text-xl font-extrabold text-dark">Compétences</h2>
              <p className="mt-2 text-sm text-text-light">Technologies maîtrisées et domaines d&apos;expertise.</p>
              <div className="mt-5 grid gap-2 sm:grid-cols-2">
                {aboutSkills.map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center gap-2 rounded-[12px] border border-border bg-white px-4 py-3 text-sm font-medium text-text transition hover:border-primary-light/40"
                  >
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary-light" />
                    {skill}
                  </div>
                ))}
              </div>

            
            </div>
          </article>

          {/* ── Colonne droite : Infos, CV, YouTube, Langues, Loisirs ── */}
          <aside className="space-y-6">

            {/* Informations clés */}
            <div className="soft-card p-6 sm:p-8">
              <h3 className="text-lg font-bold text-dark">Informations Clés</h3>
              <div className="mt-5 space-y-3">
                {personalInfo.map((item) => (
                  <div key={item.label} className="rounded-[12px] border border-border bg-bg p-3">
                    <div className="text-xs font-semibold uppercase tracking-[0.14em] text-text-light">
                      {item.label}
                    </div>
                    <div className="mt-1 text-sm font-medium text-dark">{item.value}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* CV & YouTube */}
            <div className="soft-card p-6 sm:p-8">
              <h3 className="text-lg font-bold text-dark">CV & YouTube</h3>
              <p className="mt-2 text-sm text-text-light">
                Téléchargez mon CV ou visitez ma chaîne où je partage des tutoriels et ressources pédagogiques
                en informatique.
              </p>
              <div className="mt-5 space-y-3">
                <a
                  href={profileLinks.cv.href}
                  download
                  className="flex items-center justify-between rounded-[12px] border border-border bg-bg px-4 py-3 text-sm font-medium text-text transition hover:border-primary-light hover:text-primary-light"
                >
                  <span className="flex items-center gap-2">
                    <FiDownload size={16} />
                    {profileLinks.cv.label}
                  </span>
                  <FiArrowUpRight size={16} />
                </a>

                <a
                  href={profileLinks.youtube.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between rounded-[12px] border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700 transition hover:border-red-400 hover:bg-red-100"
                >
                  <span className="flex items-center gap-2">
                    <FiPlayCircle size={16} />
                    {profileLinks.youtube.label}
                  </span>
                  <FiArrowUpRight size={16} />
                </a>
              </div>

              {/* Description chaîne */}
              <div className="mt-4 rounded-[12px] border border-border bg-bg p-4 text-sm text-text">
                <p className="font-semibold text-dark">🎥 AbouL-code</p>
                <p className="mt-1 leading-6">
                  Tutoriels de programmation, ressources pédagogiques pour les apprenants en informatique,
                  développement web Full Stack et projets pratiques.
                </p>
              </div>
            </div>

            {/* Langues */}
            {/* <div className="soft-card p-6 sm:p-8">
              <h3 className="text-lg font-bold text-dark">Langues</h3>
              <div className="mt-4 space-y-2">
                {[
                  { lang: "Tamazight", level: "Langue maternelle", pct: 100 },
                  { lang: "Arabe", level: "Maîtrise", pct: 95 },
                  { lang: "Français", level: "Intermédiaire", pct: 70 },
                  { lang: "Anglais", level: "Intermédiaire", pct: 65 },
                ].map(({ lang, level, pct }) => (
                  <div key={lang}>
                    <div className="flex justify-between text-xs font-medium text-dark">
                      <span>{lang}</span>
                      <span className="text-text-light">{level}</span>
                    </div>
                    <div className="mt-1 h-1.5 w-full overflow-hidden rounded-full bg-border">
                      <div
                        className="h-full rounded-full bg-primary-light transition-all"
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div> */}

            {/* Certifications */}
            {/* <div className="soft-card p-6 sm:p-8">
              <h3 className="text-lg font-bold text-dark">Certifications</h3>
              <div className="mt-4 space-y-2 text-sm text-text">
                {[
                  { cert: "Marketing Numérique", org: "Google", year: "2023", num: "LT4 GQ3 4LH" },
                  { cert: "HTML5 & CSS3", org: "OpenClassrooms", year: "—", num: "" },
                  { cert: "Introduction à jQuery", org: "OpenClassrooms", year: "—", num: "" },
                ].map(({ cert, org, year, num }) => (
                  <div
                    key={cert}
                    className="flex items-start justify-between rounded-[12px] border border-border bg-bg px-3 py-3"
                  >
                    <div>
                      <p className="font-semibold text-dark">{cert}</p>
                      <p className="text-xs text-text-light">
                        {org} {year !== "—" && `· ${year}`}
                        {num && ` · N° ${num}`}
                      </p>
                    </div>
                    <span className="mt-0.5 shrink-0 rounded-full bg-primary-light/10 px-2 py-0.5 text-xs font-bold text-primary-light">
                      ✓
                    </span>
                  </div>
                ))}
              </div>
            </div> */}

            {/* Loisirs */}
           {/*  <div className="soft-card p-6 sm:p-8">
              <h3 className="text-lg font-bold text-dark">Loisirs</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {["Navigation & Recherche", "Jeu d'échecs", "Recherche scientifique", "Chasse"].map((h) => (
                  <span
                    key={h}
                    className="rounded-full border border-border bg-bg px-3 py-1 text-xs font-medium text-text"
                  >
                    {h}
                  </span>
                ))}
              </div>
            </div> */}

              {/* Stack technique détaillée */}
              <div className="mt-5 rounded-[12px] border border-border bg-bg p-4">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-text-light">
                  Stack technique détaillée
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {[
                    "PHP", "Laravel", "Filament", "Livewire",
                    "JavaScript", "React", "Next.js", "Node.js",
                    "Flutter", "Dart", "Python", "Java",
                    "MySQL", "MongoDB", "Oracle",
                    "TailwindCSS", "Bootstrap",
                    "Docker", "Git", "GitHub",
                    "VBA", "SQL", "NoSQL",
                    "Jira", "Trello",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-border bg-white px-2.5 py-1 text-xs font-medium text-text"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            <a href="#" className="btn-primary mt-8 inline-flex">
                <FiDownload /> Telecharger mon CV
              </a>
          </aside>
        </section>
      </div>
    </main>
  );
}