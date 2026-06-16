export default function SectionHeader({ badge, title, description }) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
      <div className="section-badge max-w-full flex-wrap justify-center text-center">{badge}</div>
      <h2 className="section-title break-words">{title}</h2>
      {description ? <p className="section-desc break-words">{description}</p> : null}
    </div>
  );
}
