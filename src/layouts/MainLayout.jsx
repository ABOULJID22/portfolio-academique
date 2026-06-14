import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BackToTopButton from '../components/BackToTopButton';

export default function MainLayout() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const targetId = location.hash.slice(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        const headerOffset = 86;
        const targetY = targetElement.getBoundingClientRect().top + window.scrollY - headerOffset;
        window.scrollTo({ top: targetY, behavior: 'smooth' });
        return;
      }
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname, location.hash]);

  return (
    <div className="min-h-screen bg-bg text-text">
      <Header />
      <div className="pt-[78px]">
        <Outlet />
      </div>
      <Footer />
      <BackToTopButton />
    </div>
  );
}
