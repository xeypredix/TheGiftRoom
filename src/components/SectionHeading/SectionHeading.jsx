export default function SectionHeading({ title, subtitle, align = "center" }) {
  return (
    <div className={`section-heading section-heading--${align}`}>
      <h2 className="section-heading__title">{title}</h2>
      {subtitle && <p className="section-heading__subtitle">{subtitle}</p>}
    </div>
  );
}
