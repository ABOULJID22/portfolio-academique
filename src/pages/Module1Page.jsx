import ModulePageTemplate from '../components/ModulePageTemplate';
import { modulePages } from '../data/portfolioData';

export default function Module1Page() {
  return <ModulePageTemplate module={modulePages[0]} />;
}
