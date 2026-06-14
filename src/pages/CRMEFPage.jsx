import { useState } from 'react';
import SectionHeader from '../components/SectionHeader';
import ModuleCard from '../components/ModuleCard';
import { crmefOverview, modulePages } from '../data/portfolioData';
import { FiLayers } from 'react-icons/fi';

const semesterTabs = [
  { id: 'sem1', label: 'Semestre 1' },
  { id: 'sem2', label: 'Semestre 2' },
];

export default function CRMEFPage() {
  const [activeTab, setActiveTab] = useState('sem1');
  const sem1Modules = modulePages.filter((module) => module.semester === 'Semestre 1');
  const sem2Modules = modulePages.filter((module) => module.semester === 'Semestre 2');

  return (
    <main className="section-shell bg-white">
      <div className="portfolio-container">
        <SectionHeader badge="Ressources CRMEF" title="Mes Cours & Modules" description="Pages structurées pour retrouver rapidement les supports de formation, les synthèses et les fichiers de révision." />

        <section className="grid gap-5 md:grid-cols-3">
          {crmefOverview.map((item) => {
            const Icon = item.icon;
            return (
              <article key={item.title} className="soft-card p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-[14px] bg-sky-50 text-primary-light">
                  <Icon size={22} />
                </div>
                <h3 className="mt-4 text-lg font-bold text-dark">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-text-light">{item.description}</p>
              </article>
            );
          })}
        </section>

        <section className="mt-10">
          <div className="mb-6 flex flex-wrap gap-3 rounded-[14px] border border-border bg-bg p-2">
            {semesterTabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`rounded-[12px] px-5 py-3 text-sm font-semibold transition ${activeTab === tab.id ? 'bg-gradient1 text-white shadow-md' : 'text-text-light hover:bg-white'}`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {activeTab === 'sem1' ? (
            <div className="mt-8 grid gap-5 xl:grid-cols-2">
              {sem1Modules.map((module) => (
                <ModuleCard key={module.slug} module={module} />
              ))}
            </div>
          ) : (
            <div className="mt-8">
              <div className="mb-6 soft-card p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-[14px] bg-emerald-50 text-emerald-600">
                    <FiLayers size={22} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-dark">Semestre 2</h3>
                    <p className="mt-2 max-w-3xl text-sm leading-7 text-text-light">
                      Tous les modules du semestre 2 sont maintenant disponibles avec leurs pages dédiées.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid gap-5 xl:grid-cols-2">
                {sem2Modules.map((module) => (
                  <ModuleCard key={module.slug} module={module} />
                ))}
              </div>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
