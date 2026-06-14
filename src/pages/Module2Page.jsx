import ModulePageTemplate from '../components/ModulePageTemplate';
import { modulePages } from '../data/portfolioData';

export default function Module2Page() {
  return <ModulePageTemplate module={modulePages[1]} />;
}
