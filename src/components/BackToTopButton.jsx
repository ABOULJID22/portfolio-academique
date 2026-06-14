import { useEffect, useState } from 'react';
import { FiArrowUp } from 'react-icons/fi';

export default function BackToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={`fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-[12px] bg-gradient1 text-white shadow-md transition hover:-translate-y-1 ${visible ? 'opacity-100' : 'pointer-events-none opacity-0'}`}
      aria-label="Revenir en haut"
    >
      <FiArrowUp size={18} />
    </button>
  );
}
