export default function SectionHeader({ badge, title, description }) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
      <div className="section-badge justify-center">{badge}</div>
      <h2 className="section-title">{title}</h2>
      <p className="section-desc">{description}</p>
    </div>
  );
}
