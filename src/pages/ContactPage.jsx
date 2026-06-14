import { FiArrowUpRight, FiMail, FiMessageCircle } from 'react-icons/fi';
import SectionHeader from '../components/SectionHeader';
import { contactDetails, socialLinks } from '../data/portfolioData';

export default function ContactPage() {
  return (
    <main className="section-shell bg-bg">
      <div className="portfolio-container">
        <SectionHeader
          badge="Contact"
          title="Restons en Contact"
          description="Vous pouvez me joindre pour collaboration pédagogique, échange de ressources et projets numériques."
        />

        <section className="grid gap-8 lg:grid-cols-[1fr_1fr]">
          <article className="soft-card p-6 sm:p-8">
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
                    <span className="flex items-start gap-3">
                      <Icon size={16} className="mt-0.5" />
                      <span>
                        <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-text-light">{detail.label}</span>
                        <span className="mt-1 block font-medium text-dark">{detail.value}</span>
                      </span>
                    </span>
                    <FiArrowUpRight size={16} />
                  </a>
                );
              })}
            </div>
          </article>

          <aside className="soft-card p-6 sm:p-8">
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
          </aside>
        </section>
      </div>
    </main>
  );
}
