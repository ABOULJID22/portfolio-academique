import { FiArrowLeft, FiArrowRight, FiArrowUpRight, FiAward, FiBook, FiBookOpen, FiCalendar, FiCheckCircle, FiCode, FiDownload, FiFileText, FiGlobe, FiLayers, FiMail, FiMapPin, FiMessageCircle, FiPlayCircle, FiStar, FiUser, FiVideo } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import SectionHeader from '../components/SectionHeader';
import { aboutSkills, contactDetails, driveLinks, externalLinks, heroStats, heroTags, personalInfo, profileLinks, socialLinks, timelineItems, administrativeDocuments } from '../data/portfolioData';
import heroBgImage from '../data/images/bg1.jpg';
import aboutBgImage from '../data/images/bg2.png';
import bg3 from '../data/images/bg3.png';
import bg4 from '../data/images/bg4.png';
import mom1 from '../data/images/momenta/mom1.jpeg';
import mom2 from '../data/images/momenta/mom2.jpeg';
import mom3 from '../data/images/momenta/mom3.jpeg';
import mom4 from '../data/images/momenta/mom4.jpeg';
import mom5 from '../data/images/momenta/mom5.jpeg';
import mom6 from '../data/images/momenta/mom6.jpeg';
import mom7 from '../data/images/momenta/mom7.jpeg';
import mom8 from '../data/images/momenta/mom8.jpeg';

import orientationHeroImage from '../data/images/orientation-tech/orientation-tech-hero.png';
import orientationLogoImage from '../data/images/orientation-tech/orientation-tech-logo.jpg';
import orientationIcon from '../data/images/orientation-tech/faviconOrientationTech.png';
import orientation1 from '../data/images/orientation-tech/orientation1.png';
import orientation3 from '../data/images/orientation-tech/orientation3.png';
import orientation2 from '../data/images/orientation-tech/orientation2.png';
import orientation4 from '../data/images/orientation-tech/orientation4.png';
import orientation5 from '../data/images/orientation-tech/orientation5.png';


import profileImage from '../data/images/img1.png';
import crmef1img from '../data/images/image-crmef/crmef5.webp';
import crmef2img from '../data/images/image-crmef/crmef2.webp';
import crmef3img from '../data/images/image-crmef/crmef3.webp';
import crmef4img from '../data/images/image-crmef/crmef4.webp';
import { useEffect, useState } from 'react';
import ModuleCard from '../components/ModuleCard';
import { crmefOverview, modulePages } from '../data/portfolioData';

import { motion } from 'framer-motion';

const iconByLabel = {
  Date: FiCalendar,
  Niveau: FiBookOpen,
  Lieu: FiMapPin,
};

// Animation Variants
const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { staggerChildren: 0.15, delayChildren: 0.2 } 
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } }
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0,
    transition: { type: 'spring', stiffness: 100, damping: 15 }
  },
  hover: { 
    y: -5, 
    transition: { duration: 0.2 }
  }
};

const fadeInUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  }
};

const resources = [
  { label: 'Rapport de stage MSP', icon: FiFileText, href: driveLinks.mspFolder },
  { label: 'Fiche pédagogique', icon: FiBookOpen, href: driveLinks.mspFolder },
  { label: 'Séquence Python', icon: FiBookOpen, href: driveLinks.mspFolder },
];

const pedagogicalDocuments = [
  'Carte personnelle',
  'Hymne national',
  'Emploi du temps',
  'Dates des épreuves et des examens unifiés',
  'Calendrier des congés',
  'Journées nationales et internationales',
  'Fiches pédagogiques',
  'Planification long terme',
  'instructions officielles && Livres scolaires',
];

const getResourceLink = (resource) => {
  if (resource.href && resource.href !== '#') {
    return resource.href;
  }

  return driveLinks.mspFolder;
};

const getAdministrativeDocLink = () => driveLinks.administrativeDocuments;

const getPedagogicalDocLink = () => driveLinks.pedagogicalResources;

const getPpeResourceLink = (resource) => {
  if (resource.href && resource.href !== '#') {
    return resource.href;
  }

  return driveLinks.ppeFolder;
};

const semesterTabs = [
  { id: 'sem1', label: 'Semestre 1' },
  { id: 'sem2', label: 'Semestre 2' },
];

const ppePillars = [
  {
    label: 'Profil apprenant',
    value: 'Identifier les intérêts, compétences et ambitions.',
    icon: FiUser,
  },
  {
    label: 'Diagnostic progressif',
    value: 'Croiser parcours scolaire, test personnalisé et Ikigai.',
    icon: FiCheckCircle,
  },
  {
    label: 'Recommandations IA',
    value: 'Proposer domaines numériques, métiers et formations.',
    icon: FiCode,
  },
];

const ppeSlides = [
  {
    badge: 'Vision du projet',
    title: "L'informatique au coeur des choix de demain",
    description: "OrientationTech accompagne les apprenants marocains vers les domaines numériques grâce à une démarche claire, progressive et pédagogique.",
    image: orientationHeroImage,
    imageMode: 'cover',
    points: ['Collège, lycée et supérieur', 'Domaines numériques', 'Aide à la décision'],
  },
  {
    badge: 'Identité',
    title: 'Une plateforme web simple et lisible',
    description: "Le projet met l'accent sur une expérience rassurante : comprendre son profil, explorer les pistes possibles et préparer son parcours.",
    image: orientation5,
    imageMode: 'cover',
    points: ['Interface pédagogique', 'Parcours guidé', 'Orientation scolaire'],
  },
  {
    badge: 'Prototype',
    title: 'Un outil complémentaire au conseiller',
    description: "La plateforme ne remplace pas le conseiller d'orientation : elle soutient la réflexion avec des indicateurs et des recommandations personnalisées.",
    image: orientation3,
    imageMode: 'cover',
    points: ['Test personnalisé', 'Analyse Ikigai', 'Métiers du futur'],
  },
   {
    badge: 'Identité',
    title: 'Une plateforme web simple et lisible',
    description: "Le projet met l'accent sur une expérience rassurante : comprendre son profil, explorer les pistes possibles et préparer son parcours.",
    image: orientation4,
    imageMode: 'cover',
    points: ['Interface pédagogique', 'Parcours guidé', 'Orientation scolaire'],
  },
   {
    badge: 'Identité',
    title: 'Une plateforme web simple et lisible',
    description: "Le projet met l'accent sur une expérience rassurante : comprendre son profil, explorer les pistes possibles et préparer son parcours.",
    image: orientation1,
    imageMode: 'cover',
    points: ['Interface pédagogique', 'Parcours guidé', 'Orientation scolaire'],
  },
];

const ppeResources = [
  {
    label: 'Rapport de projet',
    description: 'Contexte, objectifs, méthodologie, architecture et résultats.',
    icon: FiFileText,
    href: driveLinks.ppeFolder,
  },
  {
    label: 'Présentation',
    description: 'Support synthétique pour présenter OrientationTech.',
    icon: FiDownload,
    href: driveLinks.ppeFolder,
  },
  {
    label: 'Vidéo de démonstration',
    description: 'Parcours utilisateur et fonctionnalités principales.',
    icon: FiVideo,
    href: driveLinks.ppeVideo,
  },
];

export default function HomePage() {
  const [activeTab, setActiveTab] = useState('sem1');
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [momentsCarouselIndex, setMomentsCarouselIndex] = useState(0);
  const [ppeCarouselIndex, setPpeCarouselIndex] = useState(0);
  const sem1Modules = modulePages.filter((module) => module.semester === 'Semestre 1');
  const sem2Modules = modulePages.filter((module) => module.semester === 'Semestre 2');
  
  const crmefImages = [crmef1img, crmef2img, crmef3img, crmef4img];
  const handleCarouselNext = () => {
    setCarouselIndex((prev) => (prev + 1) % crmefImages.length);
  };
  const handleCarouselPrev = () => {
    setCarouselIndex((prev) => (prev - 1 + crmefImages.length) % crmefImages.length);
  };

  const momentsImages = [mom1,mom7,mom2,mom3,mom4,mom5,mom6,mom8];
  const handleMomentsNext = () => {
    setMomentsCarouselIndex((prev) => (prev + 1) % momentsImages.length);
  };

  const handleMomentsPrev = () => {
    setMomentsCarouselIndex((prev) => (prev - 1 + momentsImages.length) % momentsImages.length);
  };

  const activePpeSlide = ppeSlides[ppeCarouselIndex];

  const handlePpeNext = () => {
    setPpeCarouselIndex((prev) => (prev + 1) % ppeSlides.length);
  };

  const handlePpePrev = () => {
    setPpeCarouselIndex((prev) => (prev - 1 + ppeSlides.length) % ppeSlides.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setMomentsCarouselIndex((prev) => (prev + 1) % momentsImages.length);
    }, 4500);

    return () => clearInterval(interval);
  }, [momentsImages.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      setPpeCarouselIndex((prev) => (prev + 1) % ppeSlides.length);
    }, 6500);

    return () => clearInterval(interval);
  }, []);
  return (
    <main className="overflow-x-hidden">
     
{/* Accueil */}
    <section

      id="home"
      className="relative flex min-h-[calc(100svh-64px)] items-center overflow-hidden rounded-b-2xl border-t border-white/10 bg-[#0B1020] text-white sm:min-h-[calc(100svh-72px)] xl:min-h-[calc(100svh-78px)]"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

        <div className="absolute right-[-35%] top-[-18%] h-[300px] w-[300px] rounded-full bg-blue-900/20 blur-[90px] sm:right-[-12%] sm:h-[420px] sm:w-[420px] lg:right-[-5%] lg:h-[500px] lg:w-[500px] lg:blur-[120px]" />
        <div className="absolute bottom-[-18%] left-[-35%] h-[260px] w-[260px] rounded-full bg-sky-400/10 blur-[80px] sm:left-[-12%] sm:h-[360px] sm:w-[360px] lg:left-[-5%] lg:h-[400px] lg:w-[400px] lg:blur-[100px]" />

        <div
          className="absolute inset-0 opacity-20 [mask-image:radial-gradient(ellipse_at_center,black,transparent)]"
          style={{
            backgroundImage:
              "linear-gradient(135deg, rgba(15, 23, 42, 0.96) 0%, rgba(30, 58, 138, 0.70) 45%, rgba(59, 130, 246, 0.45) 100%)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="portfolio-container relative z-10 py-10 sm:py-12 md:py-16 lg:py-20">
        <div className="grid items-center gap-8 sm:gap-10 md:gap-12 lg:gap-16 lg:grid-cols-2">
          {/* Left */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex min-w-0 max-w-[22rem] flex-col items-start sm:max-w-none"
          >
           {/*  <motion.div variants={itemVariants} className="mb-4 sm:mb-5 md:mb-6 flex items-center gap-2 sm:gap-3">
              <span className="h-[1px] w-6 sm:w-8 bg-sky-400" />
              <span className="font-mono text-[8px] sm:text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] sm:tracking-[0.25em] md:tracking-[0.3em] text-sky-300">
                CRMEF Marrakech-Safi · Promotion 2025-2026
              </span>
              <FiStar className="text-cyan-300 h-3 w-3 sm:h-4 sm:w-4" />
            </motion.div> */}

            <motion.h1
              variants={itemVariants}
              className="font-academic text-4xl leading-tight tracking-tight sm:text-5xl md:text-6xl lg:leading-none"
            >
              Pr. ABOULJID <br />
              <span className="italic text-sky-300">Mohamed</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mt-5 max-w-xl text-sm font-light leading-relaxed text-slate-300 sm:mt-6 sm:text-base md:mt-8 md:text-lg"
            >
              Portfolio numérique académique dédié à l'enseignement de l'informatique.
              Un espace regroupant{" "}
              <span className="font-semibold text-white">ressources pédagogiques</span>,
              analyses de stages <span className="font-semibold text-white">MSP</span> et réalisations didactiques.
            </motion.p>

            <motion.div variants={itemVariants} className="mt-5 flex flex-wrap gap-3 sm:mt-6 sm:gap-4 md:mt-8 md:gap-6">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group relative rounded-full border border-white/10 bg-white/5 p-2 sm:p-2.5 md:p-3 transition-all hover:border-sky-400/50 hover:bg-sky-400/10"
                  >
                    <Icon size={16} className="sm:w-5 sm:h-5 md:w-5 md:h-5 text-slate-300 transition-colors group-hover:text-sky-300" />
                    <span className="absolute -bottom-7 sm:-bottom-8 left-1/2 -translate-x-1/2 text-[8px] sm:text-[9px] md:text-[10px] font-mono uppercase text-sky-300 opacity-0 transition-all group-hover:opacity-100 whitespace-nowrap">
                      {social.label}
                    </span>
                  </a>
                );
              })}
            </motion.div>

            <motion.div variants={itemVariants} className="mt-8 sm:mt-10 md:mt-12 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 md:gap-5">
              <Link
                to="/crmef"
                className="group relative inline-flex items-center justify-center sm:justify-start gap-2 sm:gap-3 rounded-full bg-sky-400 px-6 sm:px-7 md:px-8 py-3 sm:py-3.5 md:py-4 text-xs sm:text-sm font-bold text-slate-950 transition-all duration-300 hover:-translate-y-1 hover:pr-10 sm:hover:pr-12 hover:bg-sky-300 hover:text-white w-full sm:w-auto"
              >
                <FiBook className="transition-transform duration-300 group-hover:scale-110 h-4 w-4 sm:h-5 sm:w-5" />
                Voir mes cours
                <FiArrowRight className="absolute right-4 sm:right-5 opacity-0 transition-all duration-300 group-hover:opacity-100 h-4 w-4 sm:h-5 sm:w-5" />
              </Link>

              <Link
                to="/#msp"
                className="group relative inline-flex items-center justify-center sm:justify-start gap-2 sm:gap-3 rounded-full border border-white/15 bg-white/7 px-6 sm:px-7 md:px-8 py-3 sm:py-3.5 md:py-4 text-xs sm:text-sm font-bold text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-sky-400/35 hover:bg-white/12 w-full sm:w-auto"
              >
                <FiMapPin className="transition-transform duration-300 group-hover:scale-110 h-4 w-4 sm:h-5 sm:w-5" />
                Mes stages MSP
              </Link>
            </motion.div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative w-full max-w-[22.5rem] justify-self-center sm:max-w-md lg:max-w-none"
            style={{
              backgroundImage: `
                linear-gradient(135deg, rgba(5, 15, 35, 0.94) 0%, rgba(10, 28, 65, 0.88) 45%, rgba(18, 54, 120, 0.82) 100%),
                url(${heroBgImage})
              `,
              backgroundSize: "contain",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute -inset-2 sm:-inset-3 md:-inset-4 -z-10 bg-gradient-to-tr from-sky-500/20 to-blue-500/20 blur-xl sm:blur-2xl" />

            <div className="relative z-10 border border-white/10 bg-white/5 p-2 backdrop-blur-md transition-transform duration-500 hover:rotate-0 sm:rotate-2 sm:p-3 md:p-4">
              <div
                style={{
                  backgroundImage: `
                    linear-gradient(135deg, #050f23f0 0%, #0a1c41e0 45%, #0F172A 100%),
                    url(${aboutBgImage})
                  `,
                  backgroundSize: "100% 100%",
                  backgroundPosition: "center",
                }}
                className="relative border border-white/5 p-4 sm:p-6 md:p-8"
              >
                <motion.div 
                  className="relative mx-auto mb-6 sm:mb-7 md:mb-8 h-44 w-44 sm:h-48 sm:w-48 md:h-52 md:w-52 lg:h-56 lg:w-56 group"
                  initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  {/* Shadow & Depth Layers */}
                  <motion.div 
                    className="absolute inset-0 z-0 rounded-lg sm:rounded-2xl border-2 sm:border-3 lg:border-4 border-sky-400/60 translate-x-2 sm:translate-x-3 lg:translate-x-4 translate-y-2 sm:translate-y-3 lg:translate-y-4 blur-sm"
                    animate={{ 
                      boxShadow: [
                        "0 0 20px rgba(56, 189, 248, 0.2)",
                        "0 0 30px rgba(56, 189, 248, 0.4)",
                        "0 0 20px rgba(56, 189, 248, 0.2)"
                      ]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                  
                  {/* Primary Frame Border */}
                  <motion.div 
                    className="absolute inset-0 z-[2] rounded-lg sm:rounded-2xl border-2 sm:border-3 lg:border-4 border-sky-400 shadow-lg shadow-sky-400/50"
                    animate={{ 
                      boxShadow: [
                        "0 0 15px rgba(56, 189, 248, 0.3), inset 0 0 10px rgba(56, 189, 248, 0.1)",
                        "0 0 25px rgba(56, 189, 248, 0.5), inset 0 0 15px rgba(56, 189, 248, 0.2)",
                        "0 0 15px rgba(56, 189, 248, 0.3), inset 0 0 10px rgba(56, 189, 248, 0.1)"
                      ]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />

                  {/* Image Container */}
                  <motion.div 
                    className="relative z-10 h-full w-full overflow-hidden rounded-md sm:rounded-lg lg:rounded-xl bg-gradient-to-br from-slate-900 to-slate-800 p-0.5 sm:p-1"
                    whileHover={{ boxShadow: "0 0 30px rgba(56, 189, 248, 0.6)" }}
                  >
                    <motion.img
                      src={profileImage}
                      alt="Profil"
                      className="h-full w-full object-cover rounded-sm sm:rounded-md lg:rounded-lg"
                      animate={{ scale: 1.28 }}
                      whileHover={{ scale: 1.32 }}
                      whileTap={{ scale: 1.28 }}
                      transition={{ duration: 0.5 }}
                    />
                  </motion.div>

                  {/* Corner Accent Top-Right */}
                  <motion.div 
                    className="absolute -top-1 sm:-top-2 -right-1 sm:-right-2 z-[3] h-8 sm:h-10 lg:h-12 w-8 sm:w-10 lg:w-12 border-t-2 sm:border-t-3 lg:border-t-4 border-r-2 sm:border-r-3 lg:border-r-4 border-sky-300 rounded-tr-lg sm:rounded-tr-xl lg:rounded-tr-2xl"
                    animate={{ 
                      boxShadow: [
                        "0 0 10px rgba(125, 211, 252, 0.4)",
                        "0 0 20px rgba(125, 211, 252, 0.7)",
                        "0 0 10px rgba(125, 211, 252, 0.4)"
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                  />
                  
                  {/* Corner Accent Bottom-Left */}
                  <motion.div 
                    className="absolute -bottom-1 sm:-bottom-2 -left-1 sm:-left-2 z-[3] h-8 sm:h-10 lg:h-12 w-8 sm:w-10 lg:w-12 border-b-2 sm:border-b-3 lg:border-b-4 border-l-2 sm:border-l-3 lg:border-l-4 border-sky-300 rounded-bl-lg sm:rounded-bl-xl lg:rounded-bl-2xl"
                    animate={{ 
                      boxShadow: [
                        "0 0 10px rgba(125, 211, 252, 0.4)",
                        "0 0 20px rgba(125, 211, 252, 0.7)",
                        "0 0 10px rgba(125, 211, 252, 0.4)"
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                  />
                </motion.div>

                <div className="mb-6 sm:mb-7 md:mb-8 text-center">
                  <h2 className="font-academic text-xl sm:text-2xl md:text-3xl text-white">Pr. ABOULJID Mohamed</h2>
                  <p className="mt-1 sm:mt-2 font-semibold tracking-[0.24em] text-[10px] sm:text-[11px] uppercase tracking-widest text-sky-300">
                    Professeur d'Informatique
                  </p>
                </div>

                <div className="space-y-2 sm:space-y-2.5 md:space-y-3">
                  {[
                    { icon: FiAward, label: "Institution", val: "CRMEF Marrakech" },
                    { icon: FiBook, label: "Spécialité", val: "Informatique au collège" },
                    { icon: FiMapPin, label: "PROMOTION", val: "2025-2026" },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex flex-col gap-1 border-b border-white/5 p-2 font-mono text-[9px] sm:flex-row sm:items-center sm:justify-between sm:p-2.5 sm:text-[10px] md:p-3"
                    >
                      <span className="flex items-center gap-2 uppercase text-slate-400">
                        <item.icon size={11} className="sm:w-3 sm:h-3 md:w-3.5 md:h-3.5 text-sky-300" />
                        {item.label}
                      </span>
                      <span className="break-words text-slate-200 sm:text-right">{item.val}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg className="relative block h-12 w-full animate-wave sm:h-20 lg:h-[120px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.14-17.73,250.45,16.88C824.6,87.71,881.7,116.3,943.3,117.44c61.6,1.14,123.1-15.71,184.7-31.4"
            fill="none"
            stroke="#ffffff"
            strokeWidth="2"
            strokeDasharray="10,10"
          />
          <path
            d="M0,120 L1200,120 L1200,0 C1100,80 800,20 600,60 C400,100 200,40 0,80 Z"
            fill="url(#grad)"
            opacity="0.4"
          />
          <defs>
            <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#1E3A8A" />
              <stop offset="100%" stopColor="#0B1020" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>






{/* mon parcours */}
      <motion.section
        id="apropos"
        className="section-shell"
        style={{
          backgroundImage: `linear-gradient(rgba(248,250,252,0.94), rgba(255,255,255,0.47)), url(${bg4})`,
          backgroundSize: 'contain',
          backgroundPosition: 'center center',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
      >
            <div className="portfolio-container" >
              <SectionHeader
                badge="À propos de moi"
                title="Mon Parcours"
                description="Développeur Full Stack, professeur en informatique et créateur de contenu pédagogique numérique."
              />

              <motion.section 
                className="soft-card mb-8 p-5 sm:p-8"  
                style={{
                  backgroundImage: `linear-gradient(rgba(248,250,252,0.94), rgba(255,255,255,0.47)), url(${bg4})`,
                  backgroundSize: 'contain',
                  backgroundPosition: 'center center',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardVariants}
              >
                <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:items-start sm:gap-10 sm:text-left">
                  <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-primary-light/10 text-3xl font-extrabold text-primary-light ring-4 ring-primary-light/20">
                    <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-full bg-gradient1">
                      <img src={profileImage} alt="Photo de profil" className="block  scale-[1.18] h-full w-full object-cover object-center"  />
                    </div>
                  </div>
                  <div className="min-w-0">
                    <h2 className="text-xl font-extrabold text-dark sm:text-2xl">Mohamed ABOULJID</h2>
                    <p className="mt-1 text-sm font-medium text-accent">Professeur d&apos;Informatique *_* Développeur Full Stack</p>
                    <p className="mt-4 text-base leading-8 text-text">
{/*                       Professeur en informatique, je suis également développeur Full Stack. Mon parcours allie une solide formation
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

                    <div className="mt-6 rounded-l-card border-l-4 border-primary-light bg-gradient-to-r from-sky-50 to-cyan-50 px-4 py-5 text-sm italic leading-7 text-primary sm:px-6 sm:text-[15px] sm:leading-8">
                      « L&apos;informatique n&apos;est pas seulement une matiere a enseigner, c&apos;est un outil de pensee. Mon objectif est de donner aux eleves les competences numeriques essentielles pour leur epanouissement dans un monde en constante evolution. »
                    </div>

                    <div className="mt-5 flex flex-wrap justify-center gap-2 sm:justify-start">
                      {[
                        { icon: <FiCode size={13} />, label: 'Full Stack & Mobile' },
                        { icon: <FiBookOpen size={13} />, label: 'Didactique Informatique' },
                        { icon: <FiGlobe size={13} />, label: 'SaaS & Architecture Web' },
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
              </motion.section>

              <motion.section 
                className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={containerVariants}
              >
                <motion.article 
                className="space-y-8"
                variants={containerVariants}
              >
                <motion.div 
                  className="soft-card p-5 sm:p-8"
                  variants={itemVariants}
                >
                    <h2 className="text-lg font-extrabold text-dark sm:text-xl">Parcours & Expériences</h2>
                    <p className="mt-2 text-sm text-text-light">
                      Formation académique, expériences professionnelles et missions d&apos;enseignement.
                    </p>

                    <div className="relative mt-6 space-y-0 pl-5">
                      <span
                        aria-hidden="true"
                        className="absolute left-[7px] top-2 h-[calc(100%-16px)] w-[2px] rounded-full bg-border"
                      />

                      {timelineItems.map((item, i) => (
                        <div key={i} className="relative pb-5 last:pb-0">
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
                  </motion.div>
                  <motion.a 
                    href="./src/data/cv/CV_Dec2025_Mohamed_Abouljid.pdf" 
                    className="download btn-primary mt-8 w-full sm:w-auto" target="_blank" 
                    variants={itemVariants}
                  >
                    <FiDownload /> Telecharger mon CV
                  </motion.a>
                
                </motion.article>

                <motion.aside 
                  className="space-y-6"
                  variants={containerVariants}
                >
                  {/*  <div className="soft-card p-6 sm:p-8">
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
                  </div> */}

                  <motion.div className="soft-card p-5 sm:p-6" variants={itemVariants}>
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

                    <div className="mt-4 rounded-[12px] border border-border bg-bg p-4 text-sm text-text">
                      <p className="font-semibold text-dark">AbouL-code</p>
                      <p className="mt-1 leading-6">
                        Tutoriels de programmation, ressources pédagogiques pour les apprenants en informatique,
                        développement web Full Stack et projets pratiques.
                      </p>
                    </div>
                  </motion.div>

                  <motion.div className="mt-5 rounded-[12px] border border-border bg-bg p-4" variants={itemVariants}>
                    <p className="text-xs font-bold uppercase tracking-[0.14em] text-text-light">
                      Stack technique détaillée
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {[
                        'PHP', 'Laravel', 'Filament', 'Livewire',
                        'JavaScript', 'React', 'Next.js', 'Node.js',
                        'Flutter', 'Dart', 'Python', 'Java',
                        'MySQL', 'MongoDB', 'Oracle',
                        'TailwindCSS', 'Bootstrap',
                        'Docker', 'Git', 'GitHub',
                        'VBA', 'SQL', 'NoSQL',
                        'Jira', 'Trello',
                      ].map((tech) => (
                        <span
                          key={tech}
                          className="rounded-md border border-border bg-white px-2.5 py-1 text-xs font-medium text-text"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>

                    <motion.div className="soft-card p-5 sm:p-8" variants={itemVariants}>
                    <h2 className="text-lg font-extrabold text-dark sm:text-xl">Compétences</h2>
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
                  </motion.div>
                </motion.aside>
              </motion.section>
            </div>
      </motion.section>

{/* moments */}
      <motion.div
        className="portfolio-container grid gap-8 py-12 sm:py-16 lg:grid-cols-[1.15fr_0.85fr]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <motion.div className="relative" variants={itemVariants}>
          <div className="mx-auto w-full max-w-xl">
            <div className="relative h-[310px] sm:h-[420px] md:h-[460px]">
              {momentsImages.map((image, index) => {
                const isActive = index === momentsCarouselIndex;
                const isNext = index === (momentsCarouselIndex + 1) % momentsImages.length;
                const isPrev = index === (momentsCarouselIndex - 1 + momentsImages.length) % momentsImages.length;

                return (
                  <motion.article
                    key={`${image}-${index}`}
                    className="absolute inset-0"
                    initial={false}
                    animate={{
                      x: isActive ? 0 : isNext ? 36 : isPrev ? -36 : 0,
                      scale: isActive ? 1 : 0.84,
                      opacity: isActive ? 1 : 0.55,
                      rotate: isActive ? 0 : isNext ? 6 : isPrev ? -6 : 0,
                      zIndex: isActive ? 30 : isNext || isPrev ? 20 : 10,
                    }}
                    transition={{ duration: 0.55, ease: 'easeOut' }}
                  >
                    <div className="group relative h-full overflow-hidden rounded-2xl border border-white/70 bg-slate-950 shadow-[0_25px_70px_rgba(15,23,42,0.25)] sm:rounded-[2rem]">
                      <img
                        src={image}
                        alt={`Moments ${index + 1}`}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent" />

                      <div className="absolute left-4 right-4 top-4 flex flex-col items-start gap-2 text-white/90 sm:left-6 sm:right-6 sm:top-6 sm:flex-row sm:items-center sm:justify-between">
                        <div className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[9px] font-bold uppercase tracking-[0.16em] backdrop-blur-md sm:text-[10px] sm:tracking-[0.22em]">
                          CRMEF Marrakech
                        </div>
                        <div className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[9px] font-semibold backdrop-blur-md sm:text-[10px]">
                          Promotion 2025-2026
                        </div>
                      </div>

                      <div className="absolute inset-x-0 bottom-0 p-4 sm:p-8">
                        <div className="flex items-center justify-between gap-3">
                          <button
                            type="button"
                            onClick={handleMomentsPrev}
                            aria-label="Slide précédent"
                            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition hover:bg-white/20"
                          >
                            <FiArrowLeft size={16} />
                          </button>
                          <button
                            type="button"
                            onClick={handleMomentsNext}
                            aria-label="Slide suivant"
                            className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-sky-400 text-slate-950 transition hover:bg-sky-300"
                          >
                            <FiArrowRight size={16} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </div>

            <div className="mt-5 flex items-center justify-center gap-2">
              {momentsImages.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setMomentsCarouselIndex(index)}
                  className={`h-2.5 rounded-full transition-all ${index === momentsCarouselIndex ? 'w-10 bg-primary-light' : 'w-2.5 bg-border'}`}
                  aria-label={`Aller au slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div className="space-y-4" variants={containerVariants}>
          <motion.div className="soft-card p-5 sm:p-6" variants={itemVariants}>
            <h3 className="text-lg font-bold text-dark">Cadre de Formation</h3>
            <p className="mt-3 text-sm leading-7 text-text">
              Formation professionnelle au CRMEF Marrakech-Safi, orientée pédagogie numérique, didactique de
              l&apos;informatique et pratique de classe au collège.
            </p>
          </motion.div>

          <motion.div className="soft-card p-5 sm:p-6" variants={itemVariants}>
            <h3 className="text-lg font-bold text-dark">Objectif Global</h3>
            <p className="mt-3 text-sm leading-7 text-text">
              Construire un profil de professeur d&apos;informatique capable de planifier, enseigner, évaluer et
              accompagner les élèves dans des situations d&apos;apprentissage progressives et concrètes.
            </p>
          </motion.div>
        </motion.div>
      </motion.div>

{/* formation crmef Mes Cours*/}
    

      <motion.section className="mt-10" id="crmef" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}>
        

          <motion.section className="section-shell " style={{
          backgroundImage: `linear-gradient(rgba(248,250,252,0.94), rgba(255,255,255,0.47)), url(${bg4})`,
          backgroundSize: 'contain',
          backgroundPosition: 'center center',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
        }}
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants}
      >


        <div className="portfolio-container">
              <SectionHeader badge="Ressources CRMEF" title="Mes Cours & Modules"  />

              <motion.div 
                className="mb-10 grid items-center gap-8 lg:mb-12 lg:grid-cols-2"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.div className="space-y-6" variants={itemVariants}>
                  <div>
                    <h3 className="mb-4 text-xl font-bold text-dark sm:text-2xl">A Propos du CRMEF</h3>
                    <div className="space-y-4 text-sm leading-7 text-text sm:text-base sm:leading-8">
                      <p>
                        Le Centre Regional des Metiers de l'Education et de la Formation (CRMEF) de Marrakech-Safi est situe a <span className="font-semibold text-primary-light">Arset Sinko, Boulevard Al Mouzdalifa, Marrakech 40000</span>.
                      </p>
                      <p>
                        C'est un etablissement public de formation relevant du Ministere de l'Education Nationale et de la Formation Professionnelle.
                      </p>
                      <p className="font-semibold">Il assure principalement :</p>
                      <ul className="space-y-2 pl-5 border-l-4 border-primary-light">
                        <li>✓ La formation initiale des enseignants stagiaires</li>
                        <li>✓ La formation des cadres de l'administration pedagogique</li>
                        <li>✓ Le developpement de la recherche scientifique en pedagogie et en didactique</li>
                      </ul>
                    </div>
                  </div>
                </motion.div>

                <motion.div className="relative" variants={itemVariants}>
                  <div className="relative h-64 overflow-hidden rounded-2xl border-2 border-primary-light/30 shadow-lg sm:h-80 sm:rounded-3xl lg:h-96">
                    <motion.div
                      key={carouselIndex}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                      className="absolute inset-0"
                    >
                      <img
                        src={crmefImages[carouselIndex]}
                        alt={`CRMEF ${carouselIndex + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                  </div>

                  <div className="flex items-center justify-between mt-6 px-2">
                    <motion.button
                      onClick={handleCarouselPrev}
                      className="flex items-center justify-center w-10 h-10 rounded-full bg-primary-light text-white transition-all hover:scale-110"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      &larr;
                    </motion.button>
                    <div className="flex gap-2">
                      {crmefImages.map((_, idx) => (
                        <motion.button
                          key={idx}
                          onClick={() => setCarouselIndex(idx)}
                          className={`w-2 h-2 rounded-full transition ${
                            idx === carouselIndex ? 'bg-primary-light' : 'bg-border'
                          }`}
                          whileHover={{ scale: 1.3 }}
                        />
                      ))}
                    </div>
                    <motion.button
                      onClick={handleCarouselNext}
                      className="flex items-center justify-center w-10 h-10 rounded-full bg-primary-light text-white transition-all hover:scale-110"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      &rarr;
                    </motion.button>
                  </div>
                </motion.div>
              </motion.div>

        
        </div>


        
          </motion.section>
          <motion.section id="modules" className="section-shell portfolio-container overflow-hidden"
          style={{
          backgroundImage: `linear-gradient(rgba(248,250,252,0.94), rgba(255,255,255,0.47)), url(${bg4})`,
          backgroundSize: 'contain',
          backgroundPosition: 'center center',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
        }}
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants}
          >
              <motion.div className="mb-6 flex flex-col gap-3 pointer-events-auto sm:flex-row sm:flex-wrap sm:items-center" variants={containerVariants}>
          {semesterTabs.map((tab) => (
            <motion.button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`w-full rounded-[12px] px-5 py-3 text-sm font-semibold transition pointer-events-auto cursor-pointer sm:w-auto ${activeTab === tab.id ? 'bg-gradient1 text-white shadow-md' : 'text-text-light hover:bg-white'}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              variants={itemVariants}
            >
              <div className="flex justify-center gap-2 items-center">
                  <FiLayers size={22} />{tab.label}
                </div>
            </motion.button>
          ))}
        </motion.div>

        {activeTab === 'sem1' ? (
          <motion.div 
            className="mt-8 grid gap-5 xl:grid-cols-2" 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {sem1Modules.map((module) => (
              <motion.div key={module.slug} variants={itemVariants}>
                <ModuleCard module={module} />
              </motion.div>
            ))}
          </motion.div>
              ) : (
          <motion.div 
            className="mt-8"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.div 
              className="grid gap-5 xl:grid-cols-2" 
              variants={containerVariants}
            >
              {sem2Modules.map((module) => (
                <motion.div key={module.slug} variants={itemVariants}>
                  <ModuleCard module={module} />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
          </motion.section>
        
      </motion.section>
  


{/* msp */}
      <motion.section id="msp" className="section-shell portfolio-container my-8 overflow-hidden sm:my-12" 
      initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}
      style={{
                backgroundImage: `linear-gradient(rgba(255,255,255,0.47), rgba(248,250,252,0.94)), url(${bg4})`,
                backgroundSize: 'contain',
                backgroundPosition: 'center center',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
              }}>
        <SectionHeader
          badge="Mise en Situation Professionnelle"
          title="MSP"
          description="Une immersion complète regroupant les informations du stage et l'ensemble des ressources pédagogiques."
        />

        <motion.div className="grid gap-8 lg:grid-cols-12" variants={containerVariants}>
          
          {/* MAIN CARD: Hero Section */}
          <motion.article className="lg:col-span-7 group relative overflow-hidden rounded-3xl border border-border bg-white shadow-sm transition-all duration-300 hover:shadow-xl" variants={itemVariants}>
            {/* Background Decoration */}
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary-light/10 blur-3xl transition-all group-hover:bg-primary-light/20" />
            
            <div className="bg-gradient-to-br from-primary-dark via-primary-light to-primary-light p-5 text-black sm:p-8 lg:p-10">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/20 px-3 py-1 text-[10px] font-bold uppercase tracking-widest backdrop-blur-md">
                <FiBookOpen size={14} />
                Stage pratique
              </div>
              <h2 className="mt-6 text-2xl font-extrabold tracking-tight sm:text-4xl">
                Mise en Situation <br /> Professionnelle
              </h2>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-black">
                Immersion active en milieu scolaire : observation, conception de séquences et animation pédagogique en contexte réel.
              </p>
            </div>

            {/* Stats Quick View */}
            <div className="grid gap-4 p-5 sm:grid-cols-3 sm:p-8">
              {[
                { label: 'Période', value: 'Fév - Juin 2026', icon: FiCalendar },
                { label: 'Année scolaire', value: '2025-2026', icon: FiBookOpen },
                { label: 'Lieu', value: 'Lycée Ibn Abbad', icon: FiMapPin },
              ].map((stat) => (
                <div key={stat.label} className="group/item flex flex-col gap-2 rounded-2xl border border-border bg-bg/50 p-4 transition-all hover:border-primary-light hover:bg-white">
                  <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-text-light">
                    <stat.icon size={14} className="text-primary-light" />
                    {stat.label}
                  </div>
                  <div className="text-sm font-bold text-dark group-hover/item:text-primary-dark transition-colors">
                    {stat.value}
                  </div>
                </div>
              ))}  
            </div>
          </motion.article>

          {/* SIDE CARD: Detailed Info */}
          <motion.aside className="rounded-3xl border border-border bg-white p-5 shadow-sm transition-all hover:shadow-md sm:p-8 lg:col-span-5" variants={itemVariants}>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-8 w-1 bg-primary-light rounded-full" />
              <h3 className="text-xl font-bold text-dark">Détails du stage</h3>
            </div>
            
            <div className="space-y-4">
              {[
                { label: 'Niveau', value: 'Tronc Commun ', icon: FiBookOpen, color: 'bg-blue-50 text-blue-600' },
                { label: 'Établissement', value: 'Lycée Ibn Abbad, Marrakech', icon: FiMapPin, color: 'bg-red-50 text-red-600' },
                { label: 'Livrables', value: "Rapport, fiches pédagogiques, séquence Python", icon: FiFileText, color: 'bg-green-50 text-green-600' },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4 rounded-2xl p-4 transition-all hover:bg-gray-50 border border-transparent hover:border-border">
                  <div className={`flex shrink-0 items-center justify-center rounded-xl p-2 ${item.color}`}>
                    <item.icon size={20} />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold uppercase tracking-wider text-text-light">{item.label}</div>
                    <div className="mt-0.5 text-sm font-medium text-dark">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.aside>
        </motion.div>

        {/* RESOURCES SECTION: Modern Grid */}
        <motion.div className="mt-12" variants={containerVariants}>
          <div className="mb-6 flex flex-col items-start gap-3 px-2 sm:flex-row sm:items-center sm:justify-between">
            <h3 className="flex items-center gap-2 text-lg font-bold text-dark sm:text-xl">
              <FiCheckCircle className="text-primary-light" />
              Ressources MSP
            </h3>
            <span className="text-xs font-medium text-text-light bg-bg px-3 py-1 rounded-full border border-border">
              {resources.length} documents disponibles
            </span>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3" variants={containerVariants}>
            {resources.map((resource) => {
              const ResourceIcon = resource.icon;
              return (
                <motion.a
                  key={resource.label}
                  href={getResourceLink(resource)}
                  target="_blank"
                  rel="noreferrer"
                  className="group relative flex items-center justify-between rounded-2xl border border-border bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:border-primary-light hover:shadow-lg hover:shadow-primary-light/10"
                  variants={itemVariants}
                >
                  <div className="flex min-w-0 items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-bg text-primary-light transition-colors group-hover:bg-primary-light group-hover:text-white">
                      <ResourceIcon size={20} />
                    </div>
                    <span className="min-w-0 text-sm font-semibold text-dark transition-colors group-hover:text-primary-dark">
                      {resource.label}
                    </span>
                  </div>
                  <FiArrowRight className="text-text-light transition-all group-hover:translate-x-1 group-hover:text-primary-light" />
                </motion.a>
              );
            })}
          </div>
        </motion.div>
      </motion.section>

{/* PPE */}
      <motion.section
        id="ppe"
        className="section-shell overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.47), rgba(248,250,252,0.94)), url(${bg4})`,
          backgroundSize: 'contain',
          backgroundPosition: 'center center',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
        }}
      >
        <div className="portfolio-container">
          <SectionHeader
            badge="Projet Personnel Encadré"
            title="PPE - OrientationTech"
            description="Une plateforme intelligente d'orientation scolaire pour aider les élèves marocains à découvrir leur profil, leurs intérêts et les domaines numériques adaptés à leur parcours."
          />

          <motion.div className="grid gap-8 lg:grid-cols-[1.02fr_0.98fr]" variants={containerVariants}>
            <motion.article
              className="relative overflow-hidden rounded-3xl border border-blue-100 bg-white/90 p-6 shadow-sm backdrop-blur-xl transition hover:shadow-xl sm:p-8"
              variants={itemVariants}
            >
              <div className="absolute -right-16 -top-16 h-52 w-52 rounded-full bg-sky-300/20 blur-3xl" aria-hidden="true" />
              <div className="absolute -bottom-16 -left-16 h-44 w-44 rounded-full bg-blue-600/10 blur-3xl" aria-hidden="true" />

              <div className="relative">
                <div className="flex flex-wrap items-center gap-4">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-100 bg-white shadow-sm">
                    <img src={orientationIcon} alt="Logo OrientationTech" className="h-10 w-10 object-contain" />
                  </span>
                  <div>
                    <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-primary-light">OrientationTech</p>
                    <h2 className="mt-1 text-2xl font-extrabold text-dark sm:text-3xl">Orientation scolaire intelligente</h2>
                  </div>
                </div>

                <p className="mt-6 max-w-3xl text-sm leading-7 text-text sm:text-base">
                  OrientationTech est une plateforme web destinée aux élèves du collège, du lycée et aux étudiants du supérieur.
                  Elle combine profil étudiant, diagnostic académique, test personnalisé, analyse Ikigai et intelligence artificielle
                  pour proposer des recommandations sur les domaines numériques, les métiers et les formations possibles.
                </p>

                <div className="mt-7 grid gap-4 md:grid-cols-3">
                  {ppePillars.map((pillar) => {
                    const Icon = pillar.icon;
                    return (
                      <div key={pillar.label} className="rounded-2xl border border-border bg-white/80 p-4 shadow-sm">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-primary-light">
                          <Icon size={19} aria-hidden="true" />
                        </div>
                        <h3 className="mt-4 text-sm font-extrabold text-dark">{pillar.label}</h3>
                        <p className="mt-2 text-xs leading-5 text-text-light">{pillar.value}</p>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-7 flex flex-wrap gap-2">
                  {['IA éducative',
  'Ikigai',
  'Métiers du futur',
  'Transformation digitale',
  'Orientation professionnelle',
  'Tests d\'intérêts',
  'Découverte de soi',
  'Parcours d\'études',
  'Orientation scolaire',
  'Domaines numériques',
  'Recommandations IA',
  'Plan d’action personnalisé',
  'Formations'].map((tag) => (
                    <span key={tag} className="rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-bold text-primary-light">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>

            <motion.aside className="overflow-hidden rounded-3xl border border-blue-100 bg-white shadow-sm" variants={itemVariants}>
              <div className="relative h-[240px] overflow-hidden bg-slate-950 sm:h-[320px] lg:h-[340px]">
                <img
                  src={activePpeSlide.image}
                  alt={activePpeSlide.title}
                  className={`h-full w-full transition duration-500 ${
                    activePpeSlide.imageMode === 'contain' ? 'bg-white object-contain p-4 sm:p-8' : 'object-cover'
                  }`}
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/85 via-slate-950/35 to-transparent p-4 text-white sm:p-5">
                  <span className="inline-flex rounded-full bg-white/15 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] backdrop-blur">
                    {activePpeSlide.badge}
                  </span>
                  <h3 className="mt-3 text-lg font-extrabold leading-tight sm:text-2xl">{activePpeSlide.title}</h3>
                </div>

                <button
                  type="button"
                  onClick={handlePpePrev}
                  className="absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-white/80 text-primary-light shadow-sm backdrop-blur transition hover:bg-white sm:left-4 sm:h-10 sm:w-10"
                  aria-label="Slide précédent PPE"
                >
                  <FiArrowLeft size={18} aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={handlePpeNext}
                  className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-white/80 text-primary-light shadow-sm backdrop-blur transition hover:bg-white sm:right-4 sm:h-10 sm:w-10"
                  aria-label="Slide suivant PPE"
                >
                  <FiArrowRight size={18} aria-hidden="true" />
                </button>
              </div>

              <div className="p-5 sm:p-7">
                <p className="text-sm leading-7 text-text">{activePpeSlide.description}</p>
                <div className="mt-5 grid gap-2">
                  {activePpeSlide.points.map((point) => (
                    <div key={point} className="flex items-center gap-3 rounded-2xl border border-border bg-bg/70 px-4 py-3 text-sm font-semibold text-dark">
                      <FiCheckCircle className="shrink-0 text-primary-light" size={17} aria-hidden="true" />
                      {point}
                    </div>
                  ))}
                </div>

                <div className="mt-5 flex items-center justify-center gap-2">
                  {ppeSlides.map((slide, index) => (
                    <button
                      key={slide.title}
                      type="button"
                      onClick={() => setPpeCarouselIndex(index)}
                      className={`h-2.5 rounded-full transition-all ${
                        index === ppeCarouselIndex ? 'w-8 bg-primary-light' : 'w-2.5 bg-blue-100 hover:bg-blue-200'
                      }`}
                      aria-label={`Afficher la slide PPE ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </motion.aside>
          </motion.div>

          <motion.div className="mt-8 grid gap-4 md:grid-cols-3" variants={containerVariants}>
            {ppeResources.map((resource) => {
              const ResourceIcon = resource.icon;
              return (
                <motion.a
                  key={resource.label}
                  href={getPpeResourceLink(resource)}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex h-full items-start gap-4 rounded-3xl border border-border bg-white/90 p-5 shadow-sm transition hover:-translate-y-1 hover:border-primary-light hover:shadow-lg hover:shadow-primary-light/10"
                  variants={itemVariants}
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-primary-light transition group-hover:bg-primary-light group-hover:text-white">
                    <ResourceIcon size={21} aria-hidden="true" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm font-extrabold text-dark">{resource.label}</span>
                    <span className="mt-2 block text-xs leading-5 text-text-light">{resource.description}</span>
                    <span className="mt-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-primary-light">
                      Consulter <FiArrowRight size={14} aria-hidden="true" />
                    </span>
                  </span>
                </motion.a>
              );
            })}
          </motion.div>
        </div>
      </motion.section>

{/* contact */}     

      <motion.section
            id="contact"
            className="section-shell overflow-hidden"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}
            style={{
              backgroundImage: `linear-gradient(rgba(248,250,252,0.94), rgba(255, 255, 255, 0.47)), url(${bg4})`,
              backgroundSize: 'contain',
              backgroundPosition: 'center center',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(20px)',
            }}
          >
            <div className="portfolio-container">
              <SectionHeader
                badge="Contact"
                title="Restons en Contact"
                description="Vous pouvez me joindre pour collaboration pédagogique, échange de ressources et projets numériques."
              />

              <motion.section className="grid gap-8 lg:grid-cols-[1fr_1fr]" variants={containerVariants}>
                <motion.article className="soft-card p-5 sm:p-8" variants={itemVariants}>
                  <h2 className="text-xl font-bold text-dark">Coordonnées</h2>
                  <div className="mt-5 space-y-3">
                    {contactDetails.map((detail) => {
                      const Icon = detail.icon;
                      return (
                        <a
                          key={detail.label}
                          href={detail.href}
                          target={detail.href.startsWith('mailto:') || detail.href.startsWith('http') ? '_blank' : undefined}
                          rel={detail.href.startsWith('mailto:') || detail.href.startsWith('http') ? 'noreferrer' : undefined}
                          className="flex items-start justify-between gap-4 rounded-[12px] border border-border bg-white px-4 py-3 text-sm text-text transition hover:border-primary-light hover:text-primary-light"
                        >
                          <span className="flex min-w-0 items-start gap-3">
                            <Icon size={16} className="mt-0.5" />
                            <span className="min-w-0">
                              <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-text-light">{detail.label}</span>
                              <span className="mt-1 block break-words font-medium text-dark">{detail.value}</span>
                            </span>
                          </span>
                          <FiArrowUpRight size={16} className="shrink-0" />
                        </a>
                      );
                    })}
                  </div>
                </motion.article>

                <motion.aside className="soft-card p-5 sm:p-8" variants={itemVariants}>
                  <h2 className="text-xl font-bold text-dark">Message Rapide</h2>
                  <p className="mt-2 text-sm leading-7 text-text-light">
                    Pour un premier contact rapide, utilisez l&apos;email ou WhatsApp. Vous pouvez aussi suivre mes contenus sur les réseaux professionnels.
                  </p>
                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {socialLinks.map((social) => {
                      const Icon = social.icon;
                      return (
                        <a
                          key={social.label}
                          href={social.href}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center justify-center gap-2 rounded-[12px] border border-border bg-white px-4 py-3 text-sm font-semibold text-text transition hover:border-primary-light hover:text-primary-light"
                        >
                          <Icon size={16} /> {social.label}
                        </a>
                      );
                    })}
                  </div>

                  <div className="mt-8 rounded-[14px] border border-border bg-bg p-5">
                    <div className="flex items-center gap-2 text-sm font-semibold text-dark">
                      <FiMessageCircle size={16} /> Disponibilité
                    </div>
                    <p className="mt-2 text-sm text-text-light">
                      Réponse sous 24h à 48h pour les demandes pédagogiques et projets de ressources numériques.
                    </p>
                    <a href="mailto:pr.abouljidmohamed@gmail.com" target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary-light">
                      <FiMail size={15} /> Envoyer un email
                    </a>
                  </div>
                </motion.aside>
              </motion.section>
            </div>
      </motion.section>

{/* Documents Administratifs */}
      <motion.section id="documents" className="section-shell " initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants} style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.47), rgba(248,250,252,0.94)), url(${bg4})`,
          backgroundSize: 'contain',
          backgroundPosition: 'center center',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
        }}>
        <div className="portfolio-container">
          <SectionHeader
            badge="Documents Administratifs"
            title="وثائق إدارية | Fichiers Institutionnels"
            description="Ensemble complet des documents administratifs, procès-verbaux, statuts et mémorandums stockés sur Google Drive | مجموعة شاملة من الوثائق الإدارية والمحاضر والأنظمة"
          />



          <motion.div className="space-y-4" variants={containerVariants} >
            {administrativeDocuments.map((category) => {
              const Icon = category.icon;
              return (
                <motion.div key={category.category} className="overflow-hidden rounded-2xl border border-border bg-white shadow-sm sm:rounded-3xl" variants={itemVariants}>
                  {/* Header de catégorie */}
                  <div className={`${category.accent} flex items-center gap-4 px-4 py-5 sm:px-6`}>
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/30">
                      <Icon size={24} />
                    </div>
                    <div className="min-w-0">
                      <h3 className="break-words text-sm font-bold text-dark sm:text-base">{category.category}</h3>
                      <p className="text-xs text-text-light mt-0.5">{category.docs.length} documents</p>
                    </div>
                  </div>

                  {/* Grille de documents */}
                  <motion.div className="p-4 sm:p-6" variants={containerVariants}>
                    <motion.div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3" variants={containerVariants}>
                      {category.docs.map((doc, idx) => (
                        <motion.a
                          key={idx}
                          href={getAdministrativeDocLink(doc)}
                          target="_blank"
                          rel="noreferrer"
                          className={`group flex items-start gap-3 rounded-2xl border-2 ${doc.color} bg-white p-4 transition-all hover:shadow-md hover:border-gray-400`}
                          variants={itemVariants}
                        >
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gray-100 text-sm font-bold text-gray-600 group-hover:bg-sky-100 group-hover:text-sky-600 transition">
                            {doc.type.toUpperCase()}
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-xs font-semibold text-dark truncate group-hover:text-primary-light transition">
                              {doc.name}
                            </p>
                            <p className="text-xs text-text-light mt-1 truncate">
                              {doc.nameFr}
                            </p>
                          </div>
                          <FiArrowRight size={16} className="mt-1 shrink-0 text-text-light group-hover:text-primary-light transition" />
                        </motion.a>
                      ))}
                    </motion.div>
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>

        
        </div>
      </motion.section>

{/* Documents pedagogiques */}

      <motion.section
        id="documents-pedagogiques"
        className="section-shell"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.47), rgba(248,250,252,0.94)), url(${bg4})`,
          backgroundSize: 'contain',
          backgroundPosition: 'center center',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
        }}
      >
        <div className="portfolio-container">
          <SectionHeader
            badge=" وثائق تربوية | Documents pédagogiques"
            title="موارد تربوية | Ressources pédagogiques "
            description=".وثائق ومراجع مفيدة للتنظيم التربوي والحياة المدرسية | Documents et références utiles pour l'organisation pédagogique et la vie scolaire"
          />

          <motion.div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3" variants={containerVariants}>
            {pedagogicalDocuments.map((doc, index) => (
              <motion.a
                key={doc}
                href={getPedagogicalDocLink(doc)}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between gap-3 rounded-2xl border border-border bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:border-primary-light hover:shadow-md"
                variants={itemVariants}
              >
                <div className="flex min-w-0 items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-bg text-primary-light transition-colors group-hover:bg-primary-light group-hover:text-white">
                    <FiBookOpen size={18} />
                  </div>
                  <div className="min-w-0">
                    <p className="break-words text-sm font-semibold text-dark">{doc}</p>
                    <p className="text-xs text-text-light">Document {index + 1}</p>
                  </div>
                </div>
                <FiArrowRight size={16} className="shrink-0 text-text-light transition-all group-hover:translate-x-1 group-hover:text-primary-light" />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </motion.section>

{/* Liens Importants */}
      <motion.section  className="section-shell bg-bg" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}        
      style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.47), rgba(248,250,252,0.94)), url(${bg4})`,
          backgroundSize: 'contain',
          backgroundPosition: 'center center',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
        }}>
        <div className="portfolio-container">
          <SectionHeader badge="Ressources Externes" title="Liens Importants" description="Plateformes officielles, outils pedagogiques et ressources professionnelles utiles" />
          <motion.div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3" variants={containerVariants}>
            {externalLinks.map((link) => {
              const Icon = link.icon;
              return (
                <motion.a key={link.url} href={link.url} target="_blank" rel="noreferrer" className="soft-card block p-6 transition hover:-translate-y-1 hover:shadow-md" variants={itemVariants}>
                  <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-[14px] text-2xl ${link.accent}`}>
                    <Icon size={22} />
                  </div>
                  <h3 className="text-base font-bold text-dark">{link.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-text-light">{link.description}</p>
                  <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-primary-light">
                    <FiArrowRight /> {link.label}
                  </div>
                </motion.a>
              );
            })}
          </motion.div>
        </div>
      </motion.section>

    
    </main>
  );
}
