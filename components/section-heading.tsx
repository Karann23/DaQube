export function SectionHeading({
  eyebrow, title, description, centered = false
}: {
  eyebrow: string; title: string; description?: string; centered?: boolean
}) {
  return (
    <div className={`section-heading ${centered ? "section-heading-center" : ""}`}>
      <span className="eyebrow"><span className="eyebrow-dot" />{eyebrow}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}
