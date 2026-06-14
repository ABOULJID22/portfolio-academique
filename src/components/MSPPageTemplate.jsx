import SectionHeader from './SectionHeader';

export default function MSPPageTemplate({ page }) {
  const Icon = page.icon;

  return (
    <main className="section-shell">
      <div className="portfolio-container">
        <SectionHeader badge={page.badge} title={page.title} description={page.description} />

        <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <article className="soft-card overflow-hidden">
            <div className="bg-gradient1 p-6 text-white sm:p-8">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.16em]">
                <Icon size={14} />
                {page.badge}
              </div>
              <h2 className="mt-4 text-2xl font-extrabold sm:text-3xl">{page.cardTitle}</h2>
              <p className="mt-2 max-w-2xl text-sm leading-7 text-white/75">{page.cardSubtitle}</p>
            </div>

            <div className="grid gap-4 p-6 sm:grid-cols-3 sm:p-8">
              {page.stats.map((stat) => (
                <div key={stat.label} className="rounded-[14px] border border-border bg-bg p-4">
                  <div className="text-xs font-semibold uppercase tracking-[0.14em] text-text-light">{stat.label}</div>
                  <div className="mt-2 text-base font-bold text-dark">{stat.value}</div>
                </div>
              ))}
            </div>
          </article>

          <aside className="soft-card p-6 sm:p-8">
            <h3 className="text-lg font-bold text-dark">Détails du stage</h3>
            <div className="mt-5 space-y-4 text-sm text-text">
              {page.details.map((detail) => (
                <div key={detail.label} className="flex items-start gap-3 rounded-[14px] border border-border bg-bg p-4">
                  <detail.icon className="mt-0.5 shrink-0 text-primary-light" size={18} />
                  <div>
                    <div className="text-xs font-bold uppercase tracking-[0.14em] text-text-light">{detail.label}</div>
                    <div className="mt-1 font-medium text-dark">{detail.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </aside>
        </section>

        <section className="mt-8 soft-card p-6 sm:p-8">
          <h3 className="text-lg font-bold text-dark">Ressources</h3>
          <div className="mt-5 grid gap-3 md:grid-cols-3">
            {page.resources.map((resource) => {
              const ResourceIcon = resource.icon;
              return (
                <a
                  key={resource.label}
                  href={resource.href}
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
