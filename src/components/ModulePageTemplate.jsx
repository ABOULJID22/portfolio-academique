import ModuleIcon from './ModuleIcon';

export default function ModulePageTemplate({ module }) {
  const getResourceLink = (resource) => {
    if (resource.href && resource.href !== '#') {
      return resource.href;
    }

    const query = `${module.title} ${resource.label} CRMEF`;
    return `https://drive.google.com/drive/search?q=${encodeURIComponent(query)}`;
  };

  return (
    <main className="section-shell">
      <div className="portfolio-container">
        <section className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <article className="soft-card overflow-hidden">
            <div className="bg-gradient1 p-6 text-white sm:p-8">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.16em]">
                <ModuleIcon module={module} className="h-4 w-4" />
                {module.semester}
              </div>
              <h1 className="mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">{module.title}</h1>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-white/75">{module.summary}</p>
            </div>

            <div className="grid gap-4 p-6 sm:grid-cols-3 sm:p-8">
              <div className="rounded-[14px] border border-border bg-bg p-4">
                <div className="text-xs font-semibold uppercase tracking-[0.14em] text-text-light">Module</div>
                <div className="mt-2 text-base font-bold text-dark">{module.title}</div>
              </div>
              <div className="rounded-[14px] border border-border bg-bg p-4">
                <div className="text-xs font-semibold uppercase tracking-[0.14em] text-text-light">Semestre</div>
                <div className="mt-2 text-base font-bold text-dark">{module.semester}</div>
              </div>
              <div className="rounded-[14px] border border-border bg-bg p-4">
                <div className="text-xs font-semibold uppercase tracking-[0.14em] text-text-light">Ressources</div>
                <div className="mt-2 text-base font-bold text-dark">{module.resources.length}</div>
              </div>
            </div>
          </article>

          <aside className="soft-card p-6 sm:p-8">
            <h2 className="text-lg font-bold text-dark">Ressources du module</h2>
            <div className="mt-5 space-y-3">
              {module.resources.map((resource) => (
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
      </div>
    </main>
  );
}
