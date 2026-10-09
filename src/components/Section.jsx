export default function Section({ id, num, label, title, children }) {
  return (
    <section id={id} className="wrap section">
      <p className="eyebrow">
        {num} — {label}
      </p>
      <h2>{title}</h2>
      {children}
    </section>
  );
}

export function Tags({ items }) {
  return (
    <ul className="tags">
      {items.map((t) => (
        <li key={t}>{t}</li>
      ))}
    </ul>
  );
}
