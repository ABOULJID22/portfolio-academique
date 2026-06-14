import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

export default function BackToModulesButton() {
  return (
    <div className="fixed left-4 top-[92px] z-40 flex sm:left-6 lg:left-8" dir="ltr">
      <Link
        to="/#modules"
        className="inline-flex items-center gap-2 rounded-full border border-border bg-white/95 px-4 py-2 text-sm font-semibold text-text shadow-sm backdrop-blur transition hover:border-primary-light hover:text-primary-light hover:shadow-md"
      >
        <FiArrowLeft aria-hidden="true" />
        Retour aux modules
      </Link>
    </div>
  );
}
