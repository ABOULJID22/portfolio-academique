import { Navigate, useParams } from 'react-router-dom';
import { modulePages } from '../data/portfolioData';
import S1AlgorithmiqueProgrammationPage from './modules/S1AlgorithmiqueProgrammationPage';
import S1ArchitectureOrdinateursPage from './modules/S1ArchitectureOrdinateursPage';
import S1DidactiqueInformatiquePage from './modules/S1DidactiqueInformatiquePage';
import S1GestionPage from './modules/S1GestionPage';
import S1MethodologieRecherchePage from './modules/S1MethodologieRecherchePage';
import S1PlanificationPage from './modules/S1PlanificationPage';
import S1SciencesEducationPage from './modules/S1SciencesEducationPage';
import S1TicePage from './modules/S1TicePage';
import S2AnalysePratiquesProfessionnellesPage from './modules/S2AnalysePratiquesProfessionnellesPage';
import TechnologiesEtDeveloppementwebPage from './modules/TechnologiesEtDeveloppementwebPage';
import S2EthiquesPage from './modules/S2EthiquesPage';
import S2EvaluationPage from './modules/S2EvaluationPage';
import S2Gestion2Page from './modules/S2Gestion2Page';
import S2ProductionDidactiquePage from './modules/S2ProductionDidactiquePage';
import S2ReseauxInternetPage from './modules/S2ReseauxInternetPage';
import S2VieScolairePage from './modules/S2VieScolairePage';
import ModuleSimplePage from './modules/ModuleSimplePage';
import BackToModulesButton from '../components/BackToModulesButton';

const withBackToModules = (page) => (
  <>
    <BackToModulesButton />
    {page}
  </>
);

export default function ModuleDetailPage() {
  const { slug } = useParams();

  if (slug === 's2-base-donnees') {
    return <Navigate to="/modules/s2-technologies-developpement-web" replace />;
  }

  const module = modulePages.find((item) => item.slug === slug);

  if (!module) {
    return <Navigate to="/crmef" replace />;
  }

  if (slug === 's1-planification') {
    return withBackToModules(<S1PlanificationPage />);
  }

  if (slug === 's1-didactique-informatique') {
    return withBackToModules(<S1DidactiqueInformatiquePage />);
  }

  if (slug === 's1-architecture-ordinateurs') {
    return withBackToModules(<S1ArchitectureOrdinateursPage />);
  }

  if (slug === 's1-algorithmique-programmation') {
    return withBackToModules(<S1AlgorithmiqueProgrammationPage />);
  }

  if (slug === 's1-methodologie-recherche') {
    return withBackToModules(<S1MethodologieRecherchePage />);
  }

  if (slug === 's1-gestion') {
    return withBackToModules(<S1GestionPage />);
  }

  if (slug === 's1-tice') {
    return withBackToModules(<S1TicePage />);
  }

  if (slug === 's1-sciences-education') {
    return withBackToModules(<S1SciencesEducationPage />);
  }

  if (slug === 's2-gestion-2') {
    return withBackToModules(<S2Gestion2Page />);
  }

  if (slug === 's2-evaluation') {
    return withBackToModules(<S2EvaluationPage />);
  }

  if (slug === 's2-production-didactique') {
    return withBackToModules(<S2ProductionDidactiquePage />);
  }

  if (slug === 's2-analyse-pratiques-professionnelles') {
    return withBackToModules(<S2AnalysePratiquesProfessionnellesPage />);
  }

  if (slug === 's2-technologies-developpement-web') {
    return withBackToModules(<TechnologiesEtDeveloppementwebPage />);
  }

  if (slug === 's2-reseaux-internet') {
    return withBackToModules(<S2ReseauxInternetPage />);
  }

  if (slug === 's2-ethiques') {
    return withBackToModules(<S2EthiquesPage />);
  }

  if (slug === 's2-vie-scolaire') {
    return withBackToModules(<S2VieScolairePage />);
  }

  return withBackToModules(<ModuleSimplePage module={module} />);
}
