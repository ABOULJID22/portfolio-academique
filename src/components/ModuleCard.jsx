import { Link } from 'react-router-dom';
import ModuleIcon from './ModuleIcon';

export default function ModuleCard({ module }) {
  return (
    <article className="soft-card overflow-hidden transition duration-300 hover:-translate-y-1 hover:shadow-md">
      <div className="flex items-start gap-4 p-5">
        <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-[12px] text-lg ${module.accent}`}>
          <ModuleIcon module={module} />
        </div>
        <div>
          <div className="mb-1 text-[10px] font-bold uppercase tracking-[0.14em] text-primary-light">{module.semester}</div>
          <h3 className="text-sm font-bold text-dark">{module.title}</h3>
        </div>
      </div>
      <div className="h-px bg-border" />
      <div className="space-y-2 p-5">
        <p className="text-sm leading-6 text-text-light">{module.summary}</p>
        <Link to={`/modules/${module.slug}`} className="inline-flex items-center gap-2 text-sm font-semibold text-primary-light transition hover:text-primary">
          Ouvrir la page du module
        </Link>
      </div>
    </article>
  );
}
