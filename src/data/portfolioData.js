import { FiBookOpen, FiCalendar, FiCode, FiCompass, FiDatabase, FiDownload, FiFileText, FiFolder, FiGlobe, FiHome, FiMail, FiMapPin, FiMonitor, FiPhone, FiUser } from 'react-icons/fi';
import { FaGithub, FaLinkedin, FaWhatsapp, FaYoutube } from 'react-icons/fa';
import {
  AlgorithmiqueIcon,
  AnalyseIcon,
  ArchitectureIcon,
  DeveloppementWebIcon,
  DidactiqueIcon,
  EthiquesIcon,
  EvaluationIcon,
  GestionDeuxIcon,
  GestionIcon,
  PlanificationIcon,
  ProductionIcon,
  RechercheIcon,
  ReseauxIcon,
  SciencesEducationIcon,
  TiceIcon,
  VieScolaireIcon,
} from '../components/ModuleSvgIcons';

export const driveLinks = {
  moduleSummaries: 'https://drive.google.com/drive/folders/1uiaqf_pK3IkbwCaweNQpx_oPqcrXveUt?usp=sharing',
  moduleSyllabi: 'https://drive.google.com/drive/folders/1jdM3WGT1M0XDEwCMsb-dGOftkU-OrSxC?usp=sharing',
  pedagogicalResources: 'https://drive.google.com/drive/folders/1fQvtHRBQEGplip2voewgGvxuhjcRrgHW?usp=sharing',
  administrativeDocuments: 'https://drive.google.com/drive/folders/1f7yhgND0Osjwlrfe3mCeYs0fZaN9bZXg?usp=drive_link',
  semester1Courses: 'https://drive.google.com/drive/folders/1Pc8ciVQhKutxULsT-hdte8A24zFgIc5U?usp=sharing',
  semester2Courses: 'https://drive.google.com/drive/folders/1hYyBGaGnTOxNzCvqC0Decm6BDUXxbGYk?usp=sharing',
  ppeFolder: 'https://drive.google.com/drive/folders/11WFsJB-PYrbyUS97c3UFDWzBsIdcgbSJ?usp=sharing',
  ppeVideo: 'https://canva.link/22ikgnlfoevqjuu',
  mspFolder: 'https://drive.google.com/drive/folders/1O8TRcPcW9K6VoYxwkQxp72mT5ISdXzjp?usp=sharing',
};

const DRIVE_FOLDER_URL = driveLinks.moduleSummaries;

const getModuleResourceHref = (semester, label) => {
  if (label.includes('Cours')) {
    return semester === 'Semestre 1' ? driveLinks.semester1Courses : driveLinks.semester2Courses;
  }

  if (label.includes('Syllabus')) {
    return driveLinks.moduleSyllabi;
  }

  return driveLinks.moduleSummaries;
};



export const navLinks = [
  { label: 'Accueil', path: '/' },
  { label: 'À propos de moi', path: '/#apropos' },
  { label: 'Modules', path: '/#modules' },
  { label: 'Documents', path: '/#documents' },
  { label: 'MSP', path: '/#msp' },
  { label: 'PPE', path: '/#ppe' },
  { label: 'CRMEF', path: '/#crmef' },
];

export const profileLinks = {
  cv: {
    label: 'Télécharger mon CV',
    href: '#',
  },
  youtube: {
    label: 'Ma chaine YouTube',
    href: 'https://www.youtube.com/@AbouL-code',
  },
};

export const contactDetails = [
  { label: 'Email', value: 'pr.abouljidmohamed@gmail.com', href: 'mailto:pr.abouljidmohamed@gmail.com', icon: FiMail },
  { label: 'Téléphone', value: '+212 6 715 40 452', href: 'tel:+212671540452', icon: FiPhone },
  { label: 'Localisation', value: 'Tiznit, Maroc', href: '#', icon: FiMapPin },
  { label: 'LinkedIn', value: 'https://www.linkedin.com/in/mohamedabouljid', href: 'https://www.linkedin.com/in/mohamedabouljid', icon: FaLinkedin },
  { label: 'YouTube', value: 'https://www.youtube.com/@AbouL-code', href: 'https://www.youtube.com/@AbouL-code', icon: FaYoutube },
];

export const heroStats = [
  { label: 'Semestres', value: '2' },
  { label: 'Modules', value: '16' },
  { label: 'MSP', value: '1' },
  { label: 'PFE', value: '1' },
];

export const heroTags = ['Algorithmique', 'Python', 'Multimédia', 'Didactique'];

export const aboutSkills = [
  'Algorithmique & Programmation',
  'Pédagogie Active',
  'Multimédia Éducatif',
  'Réseaux Informatiques',
  "Didactique de l'Informatique",
  'Développement Web',
  'Bases de Données',
  'Intégration TICE ',
  "Gestion de projets Agile",
  "Intelligence Artificielle",
  'Création de contenus numériques',
  'Analyse de pratiques professionnelles',
  'Méthodologie de recherche',
  'Planification pédagogique',
  'Citoyenneté digitale',
  'Communication professionnelle',

];

export const personalInfo = [
  { label: 'Nom Complet', value: 'Pr. ABOULJID Mohamed', icon: FiUser },
  { label: "Rôle actuel", value: "Professeur & Développeur Full Stack" },
  { label: 'Ville', value: 'Tiznit, Maroc', icon: FiCompass },
  { label: "Email", value: "abouljid.mohamed@gmail.com" },
  { label: "Téléphone", value: "+212 671 540 452" },
  { label: "GitHub", value: "github.com/ABOULJID22" },
  { label: "LinkedIn", value: "linkedin.com/in/mohamedabouljid" },

];

export const timelineItems = [
  {
    year: '2025 – 2026',
    title: 'Formation CRMEF',
    subtitle: 'Marrakech-Safi · Prof. Informatique Collège',
    icon: FiBookOpen,
  },
  {
    year: "Déc. 2025 – Jan. 2026",
    title: "IT Support & Technicien Réseaux — CAF",
    subtitle: "Confederation Africaine de Football, Agadir",
  },
  {
    year: "Sep. – Oct. 2025",
    title: "Freelance Full Stack — SAS OffiTrade (France)",
    subtitle: "Plateforme dédiée aux pharmaciens (Laravel, Filament)",
  },
  {
    year: "Août – Sep. 2025",
    title: "Service Informatique — Kamed Transport",
    subtitle: "Gestion infrastructure IT, support technique, VBA",
  },
  {
    year: "Avr. – Mai 2025",
    title: "Développeur Full Stack — Digital Daba",
    subtitle: "Plateforme SaaS Factura (Laravel, Filament, Next.js)",
  },
  {
    year: "2024 – 2025",
    title: "Licence Pro — Génie Informatique",
    subtitle: "Faculté Polydisciplinaire de Taroudant",
  },
  {
    year: "Avr. 2024",
    title: "Stage — Ministère de l'Équipement et de l'Eau",
    subtitle: "Application de gestion des stocks et fonctionnaires (VBA/Python)",
  },
  {
    year: "2022 – 2024",
    title: "DTS — Développement Digital Web Full Stack",
    subtitle: "ISTA Mirleft (OFPPT)",
  },
  {
    year: "2019 – 2021",
    title: "Licence — Électronique & Télécommunication",
    subtitle: "Faculté des Sciences Appliquées – Aït Melloul",
  },
  {
    year: "2018",
    title: "Baccalauréat en Sciences Physiques",
    subtitle: "Lycée Mohamed El Jazouli, Tiznit",
  },
  /* {
    year: "2025 – 2026",
    title: "Professeur  D'Informatique — CRMEF",
    subtitle: "CRMEF Marrakech-Safi, filière Informatique Collège",
  }, */

];

const rawModulePages = [
  {
    slug: 's1-didactique-informatique',
    semester: 'Semestre 1',
    code: 'S1 • Module 1',
    title: "Didactique de l'informatique",
    emoji: '📘',
    icon: DidactiqueIcon,
    accent: 'bg-sky-50 text-primary-light',
    summary: "Approches et méthodes pour enseigner efficacement l'informatique au collège.",
    resources: [
      { label: 'Résumé du module', icon: FiFileText, href: DRIVE_FOLDER_URL },
      { label: 'Cours && TD && Activites', icon: FiDownload, href: DRIVE_FOLDER_URL },
      { label: 'Syllabus', icon: FiFolder, href: DRIVE_FOLDER_URL },
    ],
  },
  {
    slug: 's1-sciences-education',
    semester: 'Semestre 1',
    code: 'S1 • Module 2',
    title: "Sciences de l'éducation",
    emoji: '🧪',
    icon: SciencesEducationIcon,
    accent: 'bg-amber-50 text-amber-600',
    summary: 'Fondements pédagogiques et psychologiques appliqués au contexte scolaire.',
    resources: [
      { label: 'Résumé du module', icon: FiFileText, href: DRIVE_FOLDER_URL },
      { label: 'Cours && TD && Activites', icon: FiDownload, href: DRIVE_FOLDER_URL },
      { label: 'Syllabus', icon: FiFolder, href: DRIVE_FOLDER_URL },
    ],
  },
  {
    slug: 's1-planification',
    semester: 'Semestre 1',
    code: 'S1 • Module 3',
    title: 'Planification',
    emoji: '🧠',
    icon: PlanificationIcon,
    accent: 'bg-emerald-50 text-emerald-600',
    summary: 'Planification annuelle, séquentielle et journalière des apprentissages.',
    resources: [
      { label: 'Résumé du module', icon: FiFileText, href: DRIVE_FOLDER_URL },
      { label: 'Cours && TD && Activites', icon: FiDownload, href: DRIVE_FOLDER_URL },
      { label: 'Syllabus', icon: FiFolder, href: DRIVE_FOLDER_URL },
    ],
  },
  {
    slug: 's1-gestion',
    semester: 'Semestre 1',
    code: 'S1 • Module 4',
    title: 'Gestion',
    emoji: '📐',
    icon: GestionIcon,
    accent: 'bg-fuchsia-50 text-fuchsia-600',
    summary: 'Gestion de classe, du temps et des interactions pédagogiques.',
    resources: [
      { label: 'Résumé du module', icon: FiFileText, href: DRIVE_FOLDER_URL },
      { label: 'Cours && TD && Activites', icon: FiDownload, href: DRIVE_FOLDER_URL },
      { label: 'Syllabus', icon: FiFolder, href: DRIVE_FOLDER_URL },
    ],
  },
  {
    slug: 's1-algorithmique-programmation',
    semester: 'Semestre 1',
    code: 'S1 • Module 5',
    title: 'Algorithmique et programmation',
    emoji: '🎯',
    icon: AlgorithmiqueIcon,
    accent: 'bg-orange-50 text-orange-600',
    summary: 'Concepts, exercices et stratégies d’apprentissage en algorithmique et code.',
    resources: [
      { label: 'Résumé du module', icon: FiFileText, href: DRIVE_FOLDER_URL },
      { label: 'Cours && TD && Activites', icon: FiDownload, href: DRIVE_FOLDER_URL },
      { label: 'Syllabus', icon: FiFolder, href: DRIVE_FOLDER_URL },
    ],
  },
  {
    slug: 's1-architecture-ordinateurs',
    semester: 'Semestre 1',
    code: 'S1 • Module 6',
    title: 'Architecture des ordinateurs',
    emoji: '🖥️',
    icon: ArchitectureIcon,
    accent: 'bg-cyan-50 text-cyan-700',
    summary: "Notions d'architecture matérielle et fonctionnement interne des systèmes.",
    resources: [
      { label: 'Résumé du module', icon: FiFileText, href: DRIVE_FOLDER_URL },
      { label: 'Cours && TD && Activites', icon: FiDownload, href: DRIVE_FOLDER_URL },
      { label: 'Syllabus', icon: FiFolder, href: DRIVE_FOLDER_URL },
    ],
  },
  {
    slug: 's1-methodologie-recherche',
    semester: 'Semestre 1',
    code: 'S1 • Module 7',
    title: 'Méthodologie de recherche',
    emoji: '🔎',
    icon: RechercheIcon,
    accent: 'bg-indigo-50 text-indigo-700',
    summary: 'Méthodes de recherche, collecte et structuration des sources académiques.',
    resources: [
      { label: 'Résumé du module', icon: FiFileText, href: DRIVE_FOLDER_URL },
      { label: 'Cours && TD && Activites', icon: FiDownload, href: DRIVE_FOLDER_URL },
      { label: 'Syllabus', icon: FiFolder, href: DRIVE_FOLDER_URL },
    ],
  },
  {
    slug: 's1-tice',
    semester: 'Semestre 1',
    code: 'S1 • Module 8',
    title: 'TICE',
    emoji: '💻',
    icon: TiceIcon,
    accent: 'bg-blue-50 text-blue-700',
    summary: "Intégration des TICE dans les apprentissages et la conception d'activités.",
    resources: [
      { label: 'Résumé du module', icon: FiFileText, href: DRIVE_FOLDER_URL },
      { label: 'Cours && TD && Activites', icon: FiDownload, href: DRIVE_FOLDER_URL },
      { label: 'Syllabus', icon: FiFolder, href: DRIVE_FOLDER_URL },
    ],
  },
  {
    slug: 's2-gestion-2',
    semester: 'Semestre 2',
    code: 'S2 • Module 1',
    title: 'Gestion 2',
    emoji: '📗',
    icon: GestionDeuxIcon,
    accent: 'bg-green-50 text-green-700',
    summary: 'Approfondissement des pratiques de gestion pédagogique et administrative.',
    resources: [
      { label: 'Résumé du module', icon: FiFileText, href: DRIVE_FOLDER_URL },
      { label: 'Cours && TD && Activites', icon: FiDownload, href: DRIVE_FOLDER_URL },
      { label: 'Syllabus', icon: FiFolder, href: DRIVE_FOLDER_URL },
    ],
  },
  {
    slug: 's2-evaluation',
    semester: 'Semestre 2',
    code: 'S2 • Module 2',
    title: 'Evaluation',
    emoji: '📝',
    icon: EvaluationIcon,
    accent: 'bg-lime-50 text-lime-700',
    summary: 'Conception d’évaluations, grilles et stratégies de remédiation.',
    resources: [
      { label: 'Résumé du module', icon: FiFileText, href: DRIVE_FOLDER_URL },
      { label: 'Cours && TD && Activites', icon: FiDownload, href: DRIVE_FOLDER_URL },
      { label: 'Syllabus', icon: FiFolder, href: DRIVE_FOLDER_URL },
    ],
  },
  {
    slug: 's2-production-didactique',
    semester: 'Semestre 2',
    code: 'S2 • Module 3',
    title: 'Production didactique',
    emoji: '🧩',
    icon: ProductionIcon,
    accent: 'bg-teal-50 text-teal-700',
    summary: 'Production de ressources, fiches et contenus didactiques numériques.',
    resources: [
      { label: 'Résumé du module', icon: FiFileText, href: DRIVE_FOLDER_URL },
      { label: 'Cours && TD && Activites', icon: FiDownload, href: DRIVE_FOLDER_URL },
      { label: 'Syllabus', icon: FiFolder, href: DRIVE_FOLDER_URL },
    ],
  },
  {
    slug: 's2-analyse-pratiques-professionnelles',
    semester: 'Semestre 2',
    code: 'S2 • Module 4',
    title: 'Analyse des pratiques professionnelle',
    emoji: '📊',
    icon: AnalyseIcon,
    accent: 'bg-rose-50 text-rose-700',
    summary: 'Observation et analyse critique des pratiques en contexte réel de classe.',
    resources: [
      { label: 'Résumé du module', icon: FiFileText, href: DRIVE_FOLDER_URL },
      { label: 'Cours && TD && Activites', icon: FiDownload, href: DRIVE_FOLDER_URL },
      { label: 'Syllabus', icon: FiFolder, href: DRIVE_FOLDER_URL },
    ],
  },
  {
    slug: 's2-technologies-developpement-web',
    semester: 'Semestre 2',
    code: 'S2 • Module 5',
    title: 'Technologies et développement web',
    emoji: '💻',
    icon: DeveloppementWebIcon,
    accent: 'bg-sky-50 text-sky-700',
    summary: 'Fondements du web, HTML, CSS, JavaScript et création de pages interactives dans un cadre pédagogique.',
    resources: [
      { label: 'Résumé du module', icon: FiFileText, href: DRIVE_FOLDER_URL },
      { label: 'Cours && TD && Activites', icon: FiDownload, href: DRIVE_FOLDER_URL },
      { label: 'Syllabus', icon: FiFolder, href: DRIVE_FOLDER_URL },
    ],
  },
  {
    slug: 's2-reseaux-internet',
    semester: 'Semestre 2',
    code: 'S2 • Module 6',
    title: 'Réseaux Et Internet',
    emoji: '🌐',
    icon: ReseauxIcon,
    accent: 'bg-violet-50 text-violet-700',
    summary: 'Réseaux informatiques, protocoles essentiels et usages pédagogiques.',
    resources: [
      { label: 'Résumé du module', icon: FiFileText, href: DRIVE_FOLDER_URL },
      { label: 'Cours && TD && Activites', icon: FiDownload, href: DRIVE_FOLDER_URL },
      { label: 'Syllabus', icon: FiFolder, href: DRIVE_FOLDER_URL },
    ],
  },
  {
    slug: 's2-ethiques',
    semester: 'Semestre 2',
    code: 'S2 • Module 7',
    title: 'Ethiques',
    emoji: '⚖️',
    icon: EthiquesIcon,
    accent: 'bg-stone-50 text-stone-700',
    summary: 'Éthique du numérique, responsabilité et citoyenneté digitale.',
    resources: [
      { label: 'Résumé du module', icon: FiFileText, href: DRIVE_FOLDER_URL },
      { label: 'Cours && TD && Activites', icon: FiDownload, href: DRIVE_FOLDER_URL },
      { label: 'Syllabus', icon: FiFolder, href: DRIVE_FOLDER_URL },
    ],
  },
  {
    slug: 's2-vie-scolaire',
    semester: 'Semestre 2',
    code: 'S2 • Module 8',
    title: 'Vie scolaire',
    emoji: '🏫',
    icon: VieScolaireIcon,
    accent: 'bg-yellow-50 text-yellow-700',
    summary: 'Cadre institutionnel, climat scolaire et collaboration éducative.',
    resources: [
      { label: 'Résumé du module', icon: FiFileText, href: DRIVE_FOLDER_URL },
      { label: 'Cours && TD && Activites', icon: FiDownload, href: DRIVE_FOLDER_URL },
      { label: 'Syllabus', icon: FiFolder, href: DRIVE_FOLDER_URL },
    ],
  },
];

export const modulePages = rawModulePages.map((module) => ({
  ...module,
  resources: module.resources.map((resource) => ({
    ...resource,
    href: getModuleResourceHref(module.semester, resource.label),
  })),
}));

export const crmefOverview = [
  {
    title: 'Semestre 1',
    description: 'Didactique, épistémologie, apprentissage et planification pédagogique.',
    icon: FiBookOpen,
  },
  {
    title: 'Semestre 2',
    description: 'Sciences de l’éducation, évaluation et intégration numérique.',
    icon: FiGlobe,
  },
 /*  {
    title: 'Modules',
    description: 'Seize modules organisés par semestre avec pages dédiées.',
    icon: FiFolder,
  }, */
];

export const externalLinks = [
  {
    title: "Ministère de l'Éducation Nationale | وزارة التربية الوطنية",
    description: 'Portail officiel MEN – Maroc. Textes officiels, programmes et circulaires. | البوابة الرسمية - وزارة التربية الوطنية والتعليم الأولي والرياضة',
    url: 'https://www.men.gov.ma',
    label: 'men.gov.ma',
    icon: FiHome,
    accent: 'bg-sky-50 text-primary-light',
  },
  {
    title: 'Académie Régionale de Marrakech-Safi | الأكاديمية الجهوية مراكش اسفي',
    description: 'Académie régionale pour la formation et le développement pédagogique. | السلطة الإقليمية للتكوين والتطوير التربوي بجهة مراكش اسفي',
    url: 'https://marrakechsafi.men.gov.ma',
    label: 'marrakechsafi.men.gov.ma',
    icon: FiMapPin,
    accent: 'bg-indigo-50 text-indigo-600',
  },
  {
    title: 'CRMEF Marrakech-Safi | المركز الجهوي لمهن التربية',
    description: 'Centre de formation des enseignants. Formation initiale et continue. | مركز تكوين أساتذة التعليم بالمركز الجهوي لمهن التربية والتكوين',
    url: 'https://crmef-ms.men.gov.ma',
    label: 'crmef-ms.men.gov.ma',
    icon: FiBookOpen,
    accent: 'bg-purple-50 text-purple-600',
  },
  {
    title: 'Fondation Mohammed VI | مؤسسة محمد السادس',
    description: 'Soutien aux œuvres sociales et éducatives. | مؤسسة محمد السادس للنهوض بالأعمال الاجتماعية للتربية والتكوين',
    url: 'https://www.fm6.ma',
    label: 'fm6.ma',
    icon: FiCompass,
    accent: 'bg-emerald-50 text-emerald-600',
  },
  {
    title: 'Projet GENIE | مشروع جيني',
    description: 'Plateforme de ressources académiques et pédagogiques. | منصة الموارد الأكاديمية والتربوية للمشروع الوطني',
    url: 'https://genie.men.gov.ma',
    label: 'genie.men.gov.ma',
    icon: FiGlobe,
    accent: 'bg-cyan-50 text-cyan-700',
  },
  {
    title: 'Conseil Supérieur | المجلس الأعلى للتربية',
    description: 'Conseil supérieur de l\'éducation, formation et recherche scientifique. | المجلس الأعلى للتربية والتكوين والبحث العلمي',
    url: 'https://csefrs.men.gov.ma',
    label: 'csefrs.men.gov.ma',
    icon: FiFileText,
    accent: 'bg-rose-50 text-rose-600',
  },
  {
    title: 'Plateforme TAALIM TICE',
    description: 'Ressources numériques officielles pour les enseignants d\'informatique. | منصة تعليم تيس للموارد الرقمية',
    url: 'https://taalimtice.men.gov.ma',
    label: 'taalimtice.men.gov.ma',
    icon: FiMonitor,
    accent: 'bg-emerald-50 text-emerald-600',
  },
  {
    title: 'Massar Service',
    description: 'Système de gestion des établissements scolaires marocains. | النظام الموحد لتدبير المؤسسات التعليمية',
    url: 'https://massarservice.men.gov.ma',
    label: 'massarservice.men.gov.ma',
    icon: FiDatabase,
    accent: 'bg-amber-50 text-amber-600',
  },
  {
    title: 'Scratch – MIT',
    description: "Outil de programmation visuelle pour l'initiation algorithmique au collège. | أداة برمجة بصرية لتعليم الخوارزميات",
    url: 'https://scratch.mit.edu',
    label: 'scratch.mit.edu',
    icon: FiCode,
    accent: 'bg-orange-50 text-orange-600',
  },
  /* {
    title: 'W3Schools',
    description: "Référence web pour HTML, CSS, JavaScript, Python et les bases de l'informatique. | مرجع ويب شامل للبرمجة والتكنولوجيا",
    url: 'https://www.w3schools.com',
    label: 'w3schools.com',
    icon: FiGlobe,
    accent: 'bg-fuchsia-50 text-fuchsia-600',
  }, */
 /*  {
    title: 'Canva – Design Pédagogique',
    description: 'Création de supports visuels, fiches pédagogiques et présentations modernes. | إنشاء وسائط بصرية وأوراق عمل تعليمية',
    url: 'https://www.canva.com',
    label: 'canva.com',
    icon: FiMonitor,
    accent: 'bg-red-50 text-red-600',
  }, */
];

export const socialLinks = [
  { label: 'Email', href: 'mailto:pr.abouljidmohamed@gmail.com', icon: FiMail, className: 'bg-sky-50 text-primary-light' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/mohamedabouljid', icon: FaLinkedin, className: 'bg-sky-50 text-sky-500' },
  { label: 'WhatsApp', href: 'https://wa.me/212671540452', icon: FaWhatsapp, className: 'bg-emerald-50 text-emerald-600' },
  { label: 'GitHub', href: 'https://github.com/AbouL-code', icon: FaGithub, className: 'bg-amber-50 text-amber-600' },
];

export const administrativeDocuments = [
  {
    category: 'محاضر يومية && مؤسسية | Rapports Quotidiens && Institutionnels',
    categoryAr: 'محاضر يومية',
    categoryFr: 'Rapports Quotidiens',
    icon: FiCalendar,
    accent: 'bg-blue-50 text-blue-600',
    docs: [
      { name: 'محضر الدخول.xlsx', nameFr: 'Procès-verbal d\'entrée', type: 'xlsx', color: 'border-blue-200', url: 'https://drive.google.com/drive/folders/12MODbdi0QCDmgAKK7ZYRSWkXrjM3oFml' },
      { name: 'التقرير اليومي عن سير المؤسسة.docx', nameFr: 'Rapport quotidien sur la gestion de l\'institution', type: 'docx', color: 'border-blue-200', url: 'https://drive.google.com/drive/folders/12MODbdi0QCDmgAKK7ZYRSWkXrjM3oFml' },
      { name: 'في شأن محضر الخروج.pdf', nameFr: 'Procès-verbal de sortie', type: 'pdf', color: 'border-blue-200', url: 'https://drive.google.com/drive/folders/12MODbdi0QCDmgAKK7ZYRSWkXrjM3oFml' },
      { name: 'محضر الالتحاق بالعمل.docx', nameFr: 'PV de prise de fonction', type: 'docx', color: 'border-purple-200', url: 'https://drive.google.com/drive/folders/12MODbdi0QCDmgAKK7ZYRSWkXrjM3oFml' },
      { name: 'محضر المجلس التربوي.docx', nameFr: 'PV du conseil pédagogique', type: 'docx', color: 'border-purple-200', url: 'https://drive.google.com/drive/folders/12MODbdi0QCDmgAKK7ZYRSWkXrjM3oFml' },
      { name: 'محضر تجديد المكتب الاداري للتعاونية المدرسية.doc', nameFr: 'PV renouvellement bureau coopérative', type: 'doc', color: 'border-purple-200', url: 'https://drive.google.com/drive/folders/12MODbdi0QCDmgAKK7ZYRSWkXrjM3oFml' },
      { name: 'محضر تسليم و اسلم المهام.docx', nameFr: 'PV transmission de fonctions', type: 'docx', color: 'border-purple-200', url: 'https://drive.google.com/drive/folders/12MODbdi0QCDmgAKK7ZYRSWkXrjM3oFml' },
      { name: 'محضر مجلس قسم.xlsx', nameFr: 'PV conseil de classe', type: 'xlsx', color: 'border-purple-200', url: 'https://drive.google.com/drive/folders/12MODbdi0QCDmgAKK7ZYRSWkXrjM3oFml' },
      { name: 'نموذج محضر اجتماع المجلس التربوي.doc', nameFr: 'Modèle PV conseil pédagogique', type: 'doc', color: 'border-purple-200', url: 'https://drive.google.com/drive/folders/12MODbdi0QCDmgAKK7ZYRSWkXrjM3oFml' },
      { name: 'نموذج محضر اجتماع مجلس التدبير 2.docx', nameFr: 'Modèle PV conseil de gestion', type: 'docx', color: 'border-purple-200', url: 'https://drive.google.com/drive/folders/12MODbdi0QCDmgAKK7ZYRSWkXrjM3oFml' },
      { name: 'نموذج محضر المجلس التربوي.doc', nameFr: 'Modèle PV conseil pédagogique', type: 'doc', color: 'border-purple-200', url: 'https://drive.google.com/drive/folders/12MODbdi0QCDmgAKK7ZYRSWkXrjM3oFml' },
      { name: 'نموذج محضر المجلس التعليمي 2.doc', nameFr: 'Modèle PV conseil d\'établissement 2', type: 'doc', color: 'border-purple-200', url: 'https://drive.google.com/drive/folders/12MODbdi0QCDmgAKK7ZYRSWkXrjM3oFml' },
      { name: 'نموذج محضر المجلس التعليمي 3.doc', nameFr: 'Modèle PV conseil d\'établissement 3', type: 'doc', color: 'border-purple-200', url: 'https://drive.google.com/drive/folders/12MODbdi0QCDmgAKK7ZYRSWkXrjM3oFml' },
      { name: 'نموذج محضر تعاونية القسم.doc', nameFr: 'Modèle PV coopérative de classe', type: 'doc', color: 'border-purple-200', url: 'https://drive.google.com/drive/folders/12MODbdi0QCDmgAKK7ZYRSWkXrjM3oFml' },

    ],
  },
  {
    category: 'إخبارات وإشعارات | Notifications',
    categoryAr: 'إخبارات وإشعارات',
    categoryFr: 'Notifications et Avis',
    icon: FiFileText,
    accent: 'bg-amber-50 text-amber-600',
    docs: [
      { name: 'إخبار بإنجاز حصة دعم.docx', nameFr: 'Notification de séance de soutien', type: 'docx', color: 'border-amber-200', url: 'https://drive.google.com/drive/folders/12MODbdi0QCDmgAKK7ZYRSWkXrjM3oFml' },
      { name: 'إخبار بشهادة طبية.xlsx', nameFr: 'Certification médicale', type: 'xlsx', color: 'border-amber-200', url: 'https://drive.google.com/drive/folders/12MODbdi0QCDmgAKK7ZYRSWkXrjM3oFml' },
      { name: 'إشعار الحراسة العامة بمخالفة تلميذ(ة).docx', nameFr: 'Avis de manquement d\'élève', type: 'docx', color: 'border-amber-200', url: 'https://drive.google.com/drive/folders/12MODbdi0QCDmgAKK7ZYRSWkXrjM3oFml' },
      { name: 'إخبار تغيب موجه لولي الامر.docx', nameFr: 'Avis d\'absence aux parents', type: 'docx', color: 'border-amber-200', url: 'https://drive.google.com/drive/folders/12MODbdi0QCDmgAKK7ZYRSWkXrjM3oFml' },
    ],
  },
 /*  {
    category: 'محاضر مؤسسية | Procès-verbaux Institutionnels',
    categoryAr: 'محاضر مؤسسية',
    categoryFr: 'Procès-verbaux Institutionnels',
    icon: FiFolder,
    accent: 'bg-purple-50 text-purple-600',
    docs: [
      { name: 'محضر الالتحاق بالعمل.docx', nameFr: 'PV de prise de fonction', type: 'docx', color: 'border-purple-200', url: 'https://drive.google.com/drive/folders/12MODbdi0QCDmgAKK7ZYRSWkXrjM3oFml' },
      { name: 'محضر المجلس التربوي.docx', nameFr: 'PV du conseil pédagogique', type: 'docx', color: 'border-purple-200', url: 'https://drive.google.com/drive/folders/12MODbdi0QCDmgAKK7ZYRSWkXrjM3oFml' },
      { name: 'محضر تجديد المكتب الاداري للتعاونية المدرسية.doc', nameFr: 'PV renouvellement bureau coopérative', type: 'doc', color: 'border-purple-200', url: 'https://drive.google.com/drive/folders/12MODbdi0QCDmgAKK7ZYRSWkXrjM3oFml' },
      { name: 'محضر تسليم و اسلم المهام.docx', nameFr: 'PV transmission de fonctions', type: 'docx', color: 'border-purple-200', url: 'https://drive.google.com/drive/folders/12MODbdi0QCDmgAKK7ZYRSWkXrjM3oFml' },
      { name: 'محضر مجلس قسم.xlsx', nameFr: 'PV conseil de classe', type: 'xlsx', color: 'border-purple-200', url: 'https://drive.google.com/drive/folders/12MODbdi0QCDmgAKK7ZYRSWkXrjM3oFml' },
      { name: 'نموذج محضر اجتماع المجلس التربوي.doc', nameFr: 'Modèle PV conseil pédagogique', type: 'doc', color: 'border-purple-200', url: 'https://drive.google.com/drive/folders/12MODbdi0QCDmgAKK7ZYRSWkXrjM3oFml' },
      { name: 'نموذج محضر اجتماع مجلس التدبير 2.docx', nameFr: 'Modèle PV conseil de gestion', type: 'docx', color: 'border-purple-200', url: 'https://drive.google.com/drive/folders/12MODbdi0QCDmgAKK7ZYRSWkXrjM3oFml' },
      { name: 'نموذج محضر المجلس التربوي.doc', nameFr: 'Modèle PV conseil pédagogique', type: 'doc', color: 'border-purple-200', url: 'https://drive.google.com/drive/folders/12MODbdi0QCDmgAKK7ZYRSWkXrjM3oFml' },
      { name: 'نموذج محضر المجلس التعليمي 2.doc', nameFr: 'Modèle PV conseil d\'établissement 2', type: 'doc', color: 'border-purple-200', url: 'https://drive.google.com/drive/folders/12MODbdi0QCDmgAKK7ZYRSWkXrjM3oFml' },
      { name: 'نموذج محضر المجلس التعليمي 3.doc', nameFr: 'Modèle PV conseil d\'établissement 3', type: 'doc', color: 'border-purple-200', url: 'https://drive.google.com/drive/folders/12MODbdi0QCDmgAKK7ZYRSWkXrjM3oFml' },
      { name: 'نموذج محضر تعاونية القسم.doc', nameFr: 'Modèle PV coopérative de classe', type: 'doc', color: 'border-purple-200', url: 'https://drive.google.com/drive/folders/12MODbdi0QCDmgAKK7ZYRSWkXrjM3oFml' },
    ],
  }, */
  {
    category: 'الأنظمة الأساسية | Statuts et Normes',
    categoryAr: 'الأنظمة الأساسية',
    categoryFr: 'Statuts et Normes',
    icon: FiFileText,
    accent: 'bg-rose-50 text-rose-600',
    docs: [
      { name: 'النظام الاساسي الخاص بأطر الأكاديمية الجهوية', nameFr: 'Statut particulier des cadres académiques', type: 'pdf', color: 'border-rose-200', url: 'https://drive.google.com/drive/folders/12MODbdi0QCDmgAKK7ZYRSWkXrjM3oFml' },
      { name: 'النظام الاساسي العام للوظيفة العمومية', nameFr: 'Statut général de la fonction publique', type: 'pdf', color: 'border-rose-200', url: 'https://drive.google.com/drive/folders/12MODbdi0QCDmgAKK7ZYRSWkXrjM3oFml' },
      { name: 'التنظيم التربوي.xls', nameFr: 'Organisation pédagogique', type: 'xls', color: 'border-rose-200', url: 'https://drive.google.com/drive/folders/12MODbdi0QCDmgAKK7ZYRSWkXrjM3oFml' },
      { name: 'المرافق الصحية الإدارية و الصحية.docx', nameFr: 'Installations administratives et sanitaires', type: 'docx', color: 'border-rose-200', url: 'https://drive.google.com/drive/folders/12MODbdi0QCDmgAKK7ZYRSWkXrjM3oFml' },
    ],
  },
  {
    category: 'المذكرات والتعليمات | Mémorandums',
    categoryAr: 'المذكرات والتعليمات',
    categoryFr: 'Mémorandums et Directives',
    icon: FiMonitor,
    accent: 'bg-emerald-50 text-emerald-600',
    docs: [
      { name: 'مذكرة تاطير وتتبع المراقبة المستمرة للاعدادي الثانوي', nameFr: 'Mémorandum suivi évaluation continue', type: 'pdf', color: 'border-emerald-200', url: 'https://drive.google.com/drive/folders/12MODbdi0QCDmgAKK7ZYRSWkXrjM3oFml' },
      /* { name: 'مذكرة المراقبة للجذوع المشتركة', nameFr: 'Mémorandum évaluation troncs communs', type: 'pdf', color: 'border-emerald-200', url: 'https://drive.google.com/drive/folders/12MODbdi0QCDmgAKK7ZYRSWkXrjM3oFml' }, */
      { name: 'مقرر تنظيم السنة الدراسية', nameFr: 'Décision organisation année scolaire', type: 'pdf', color: 'border-emerald-200', url: 'https://drive.google.com/drive/folders/12MODbdi0QCDmgAKK7ZYRSWkXrjM3oFml' },
    ],
  },
];

