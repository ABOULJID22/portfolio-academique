import { Link } from 'react-router-dom';
import { FiArrowUpRight, FiFileText, FiMail, FiMapPin, FiPhone } from 'react-icons/fi';
import { contactDetails, navLinks, socialLinks } from '../data/portfolioData';
import profileImage from '../data/images/img1.png';

const footerNavigation = [
  {
    title: 'Navigation',
    links: navLinks,
  },
  {
    title: 'Espace CRMEF',
    links: [
      { label: 'Tous les modules', path: '/crmef' },
      { label: 'Semestre 1', path: '/crmef' },
      { label: 'Semestre 2', path: '/crmef' },
      { label: 'Documents administratifs', path: '/#documents' },
      { label: 'MSP', path: '/#msp' },
    ],
  },
];

const contactLabels = ['Email', 'Téléphone', 'Localisation'];

const isExternal = (href) => href.startsWith('http') || href.startsWith('mailto:');

export default function Footer() {
  const footerContact = contactDetails.filter((detail) => contactLabels.includes(detail.label));

  return (
    <footer className="border-t border-white/10 bg-dark text-white">
      <div className="portfolio-container py-12 sm:py-14">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr_1fr_1.05fr]">
          <section>
            <Link to="/" className="group inline-flex items-center gap-3">
              <span className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white p-[3px] shadow-[0_10px_28px_rgba(14,165,233,0.22)] ring-1 ring-white/25 transition duration-300 group-hover:scale-[1.03] group-hover:ring-sky-300/70">
                <span className="absolute inset-0 rounded-full bg-[conic-gradient(from_160deg,#38bdf8,#ffffff,#2563eb,#38bdf8)] opacity-80 blur-[1px]" aria-hidden="true" />
                <span className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-full bg-gradient1">
                  <img src={profileImage} alt="Logo Portfolio CRMEF" className="block h-full w-full scale-[1.28] object-cover object-[center_44%]" />
                </span>
              </span>
              <span>
                <span className="block text-xs font-bold uppercase tracking-[0.18em] text-sky-300">Portfolio CRMEF</span>
                <span className="mt-1 block text-lg font-extrabold text-white">Pr. Abouljid Mohamed</span>
              </span>
            </Link>

            <p className="mt-5 max-w-md text-sm leading-7 text-white/65">
              Portfolio numérique académique dédié à la formation CRMEF, aux ressources pédagogiques,
              aux modules d'informatique et aux productions professionnelles.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {['CRMEF 2025-2026', 'Informatique Collège', 'Marrakech-Safi'].map((tag) => (
                <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-white/70">
                  {tag}
                </span>
              ))}
            </div>
          </section>

          {footerNavigation.map((group) => (
            <nav key={group.title} aria-label={group.title}>
              <h2 className="text-sm font-bold uppercase tracking-[0.16em] text-sky-300">{group.title}</h2>
              <div className="mt-5 space-y-3">
                {group.links.map((link) => (
                  <Link
                    key={`${group.title}-${link.path}-${link.label}`}
                    to={link.path}
                    className="group flex w-fit items-center gap-2 text-sm font-medium text-white/65 transition hover:text-white"
                  >
                    <span className="h-px w-4 bg-white/20 transition group-hover:w-6 group-hover:bg-sky-300" />
                    {link.label}
                  </Link>
                ))}
              </div>
            </nav>
          ))}

          <section>
            <h2 className="text-sm font-bold uppercase tracking-[0.16em] text-sky-300">Contact</h2>
            <div className="mt-5 space-y-3">
              {footerContact.map((detail) => {
                const Icon = detail.label === 'Email' ? FiMail : detail.label === 'Téléphone' ? FiPhone : FiMapPin;
                return (
                  <a
                    key={detail.label}
                    href={detail.href}
                    target={isExternal(detail.href) ? '_blank' : undefined}
                    rel={isExternal(detail.href) ? 'noreferrer' : undefined}
                    className="flex items-start gap-3 text-sm text-white/65 transition hover:text-white"
                  >
                    <Icon className="mt-0.5 shrink-0 text-sky-300" size={16} />
                    <span>
                      <span className="block text-xs font-semibold uppercase tracking-[0.12em] text-white/40">{detail.label}</span>
                      <span className="mt-1 block leading-6">{detail.value}</span>
                    </span>
                  </a>
                );
              })}
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.label}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition hover:-translate-y-0.5 hover:border-sky-300/60 hover:bg-sky-300/10 hover:text-sky-200"
                  >
                    <Icon size={17} />
                  </a>
                );
              })}
            </div>

            <Link
              to="/#documents"
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-sky-300/25 bg-sky-300/10 px-4 py-2 text-sm font-semibold text-sky-100 transition hover:border-sky-200 hover:bg-sky-300/[0.15]"
            >
              <FiFileText size={16} />
              Voir les documents
              <FiArrowUpRight size={15} />
            </Link>
          </section>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-white/45 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Portfolio Numérique - CRMEF Marrakech-Safi. Tous droits réservés.</p>
          <div className="flex flex-wrap gap-4">
            <Link to="/#contact" className="transition hover:text-white/80">Contact</Link>
            <Link to="/#documents" className="transition hover:text-white/80">Documents</Link>
            <Link to="/crmef" className="transition hover:text-white/80">Modules CRMEF</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
