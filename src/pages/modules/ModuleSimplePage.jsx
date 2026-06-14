import ModuleIcon from '../../components/ModuleIcon';

export default function ModuleSimplePage({ module }) {
  const getResourceLink = (resource) => {
    if (resource.href && resource.href !== '#') {
      return resource.href;
    }

    const query = `${module?.title ?? 'Module'} ${resource.label} CRMEF`;
    return `https://drive.google.com/drive/search?q=${encodeURIComponent(query)}`;
  };

  return (
    <main className="section-shell bg-white">
      <div className="portfolio-container">
        <section className="mb-8 grid gap-6 lg:grid-cols-3">
          <article className="lg:col-span-2">
            {/* ── En-tête ── */}
            <div className="rounded-[16px] border border-border bg-bg p-6 sm:p-8">
              <div className="text-xs font-bold uppercase tracking-[0.16em] text-accent">
                CRMEF Marrakech Safi · 2025-2026
              </div>
              <h1 className="mt-2 text-2xl font-extrabold text-dark sm:text-3xl">{module?.title ?? 'Module'}</h1>
              <p className="mt-3 text-sm leading-7 text-text">
                {module?.summary ?? 'Page du module CRMEF avec ressources et accès rapide aux documents.'}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {[module?.semester ?? 'Semestre', module?.code ?? 'Module CRMEF'].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-primary-light/30 bg-primary-light/5 px-3 py-1 text-xs font-semibold text-primary-light"
                  >
                    {tag}
                  </span>
                ))}
                <span className="inline-flex items-center gap-1.5 rounded-full border border-primary-light/30 bg-primary-light/5 px-3 py-1 text-xs font-semibold text-primary-light">
                  <ModuleIcon module={module} className="h-3.5 w-3.5" />
                  Parcours professionnel
                </span>
              </div>
            </div>
          </article>

          <aside className="soft-card p-6 sm:p-8">
            <h2 className="text-sm font-bold uppercase tracking-[0.08em] text-accent">Ressources du module</h2>
            <div className="mt-4 space-y-3">
              {(module?.resources ?? []).map((resource) => (
                <a
                  key={resource.label}
                  href={getResourceLink(resource)}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between rounded-[14px] border border-border bg-white px-4 py-3 text-sm font-medium text-text transition hover:border-primary-light hover:text-primary-light"
                >
                  <span>{resource.label}</span>
                  <span aria-hidden="true">→</span>
                </a>
              ))}
            </div>
          </aside>
        </section>

        <section className="mt-6 soft-card p-6 sm:p-8">
          <div className="rounded-[14px] border border-border bg-bg p-5">
            <h2 className="text-xl font-bold text-dark">Contenu du module</h2>
            <p className="mt-3 text-sm leading-7 text-text">
              Le contenu détaillé de ce module sera ajouté prochainement.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
