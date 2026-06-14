import { Navigate, Route, Routes } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import MSPPage from './pages/MSPPage';
import CRMEFPage from './pages/CRMEFPage';
import ModuleDetailPage from './pages/ModuleDetailPage';

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="pr-abouljidmohamed" element={<HomePage />} />
        <Route path="msp" element={<MSPPage />} />
        <Route path="apropos" element={<Navigate to="/#apropos" replace />} />
        <Route path="contact" element={<Navigate to="/#contact" replace />} />
        <Route path="crmef" element={<CRMEFPage />} />
        <Route path="modules/:slug" element={<ModuleDetailPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}


