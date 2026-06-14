export default function ModuleIcon({ module, className = 'h-6 w-6' }) {
  const Icon = module?.icon;

  if (Icon) {
    return <Icon className={className} aria-hidden="true" />;
  }

  return (
    <span className="text-lg leading-none" aria-hidden="true">
      {module?.emoji}
    </span>
  );
}
