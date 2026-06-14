import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import {
  FiArrowUpRight,
  FiBookOpen,
  FiCode,
  FiFileText,
  FiGrid,
  FiHome,
  FiLayers,
  FiMail,
  FiMenu,
  FiUser,
  FiX,
  FiAward,
} from 'react-icons/fi';
import { navLinks } from '../data/portfolioData';
import profileImage from '../data/images/img1.png';

const iconByPath = {
  '/': FiHome,
  '/#apropos': FiUser,
  '/#crmef': FiAward,
  '/#documents': FiFileText,
  '/#msp': FiLayers,
  '/#ppe': FiCode,
  '/#contact': FiMail,
  '/#modules': FiBookOpen,
};

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [shadow, setShadow] = useState(false);
  const location = useLocation();

  const isHashLinkActive = (path) => {
    const [targetPathname, targetHash] = path.split('#');
    const normalizedPathname = targetPathname || '/';
    return location.pathname === normalizedPathname && location.hash === `#${targetHash}`;
  };

  const isActiveLink = (path, navIsActive = false) => (path.includes('#') ? isHashLinkActive(path) : navIsActive);

  useEffect(() => {
    const onScroll = () => setShadow(window.scrollY > 12);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname, location.hash]);

  const linkClassName = (active) =>
    `group relative inline-flex items-center gap-2 rounded-full px-3.5 py-2 text-sm font-semibold transition-all duration-300 ${
      active
        ? 'bg-white text-dark shadow-sm'
        : 'text-white/75 hover:bg-white/10 hover:text-white'
    }`;

  const mobileLinkClassName = (active) =>
    `group flex items-center justify-between rounded-xl border px-4 py-3 text-sm font-semibold transition-all duration-300 ${
      active
        ? 'border-sky-300/40 bg-sky-300/[0.15] text-sky-100'
        : 'border-white/10 bg-white/[0.03] text-white/[0.78] hover:border-white/20 hover:bg-white/[0.08] hover:text-white'
    }`;

  const renderDesktopLink = (link) => {
    const Icon = iconByPath[link.path] || FiGrid;

    if (link.path.includes('#')) {
      const active = isActiveLink(link.path);

      return (
        <Link key={link.path} to={link.path} className={linkClassName(active)}>
          <Icon size={15} aria-hidden="true" />
          <span>{link.label}</span>
        </Link>
      );
    }

    return (
      <NavLink key={link.path} to={link.path} className={({ isActive }) => linkClassName(isActiveLink(link.path, isActive))}>
        {({ isActive }) => {
          const active = isActiveLink(link.path, isActive);

          return (
            <>
              <Icon size={15} aria-hidden="true" />
              <span>{link.label}</span>
              {active ? <span className="absolute inset-x-5 -bottom-1 h-px bg-sky-300" /> : null}
            </>
          );
        }}
      </NavLink>
    );
  };

  const renderMobileLink = (link) => {
    const Icon = iconByPath[link.path] || FiGrid;

    if (link.path.includes('#')) {
      const active = isActiveLink(link.path);

      return (
        <Link key={link.path} to={link.path} className={mobileLinkClassName(active)}>
          <span className="flex items-center gap-3">
            <Icon size={17} aria-hidden="true" />
            {link.label}
          </span>
          <FiArrowUpRight size={15} className="text-white/[0.35] transition group-hover:text-sky-200" aria-hidden="true" />
        </Link>
      );
    }

    return (
      <NavLink key={link.path} to={link.path} className={({ isActive }) => mobileLinkClassName(isActiveLink(link.path, isActive))}>
        {({ isActive }) => {
          const active = isActiveLink(link.path, isActive);

          return (
            <>
              <span className="flex items-center gap-3">
                <Icon size={17} aria-hidden="true" />
                {link.label}
              </span>
              <FiArrowUpRight
                size={15}
                className={`transition ${active ? 'text-sky-200' : 'text-white/[0.35] group-hover:text-sky-200'}`}
                aria-hidden="true"
              />
            </>
          );
        }}
      </NavLink>
    );
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-dark/[0.96] text-white backdrop-blur-2xl transition-shadow duration-300 ${
        shadow ? 'shadow-[0_12px_35px_rgba(15,23,42,0.28)]' : ''
      }`}
    >
      <div className="portfolio-container flex h-[78px] items-center justify-between gap-3 sm:gap-4">
        <Link
          to="/"
          className="group flex min-w-0 items-center gap-3 rounded-full pr-2 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-300"
        >
          <span className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white p-[3px] shadow-[0_10px_28px_rgba(14,165,233,0.24)] ring-1 ring-white/25 transition duration-300 group-hover:scale-[1.03] group-hover:ring-sky-300/70 sm:h-12 sm:w-12">
            <span className="absolute inset-0 rounded-full bg-[conic-gradient(from_160deg,#38bdf8,#ffffff,#2563eb,#38bdf8)] opacity-80 blur-[1px]" aria-hidden="true" />
            <span className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-full bg-gradient1">
              <img src={profileImage} alt="Logo Portfolio CRMEF" className="block h-full w-full scale-[1.28] object-cover object-[center_44%]" />
            </span>
          </span>

          <span className="min-w-0 leading-tight">
            <span className="block text-[0.68rem] font-extrabold uppercase tracking-[0.18em] text-sky-300 sm:text-[0.7rem]">
              Portfolio 
            </span>
            <span className="mt-1 block max-w-[145px] truncate text-sm font-extrabold tracking-[0.02em] text-white transition group-hover:text-sky-50 sm:max-w-none sm:text-[15px]">
              Pr. Abouljid Mohamed
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.04] p-1 lg:flex">
          {navLinks.map((link) => renderDesktopLink(link))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/#contact"
            className="hidden items-center gap-2 rounded-full border border-sky-300/25 bg-sky-300/10 px-4 py-2 text-sm font-bold text-sky-100 transition hover:border-sky-200/70 hover:bg-sky-300/[0.15] xl:inline-flex"
          >
            Contact
            <FiArrowUpRight size={15} aria-hidden="true" />
          </Link>

          <button
            type="button"
            onClick={() => setMobileOpen((value) => !value)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-white transition hover:border-sky-300/40 hover:bg-sky-300/10 lg:hidden"
            aria-label="Menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </div>

      {mobileOpen ? (
        <div className="border-t border-white/10 bg-dark/[0.98] lg:hidden">
          <div className="portfolio-container py-4">
            <div className="grid gap-2 sm:grid-cols-2">
              {navLinks.map((link) => renderMobileLink(link))}
            </div>

            <Link
              to="/#contact"
              className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-extrabold text-dark transition hover:bg-sky-50"
            >
              Contact
              <FiArrowUpRight size={15} aria-hidden="true" />
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
