export default function Timeline({ items }) {
  return (
    <ol className="timeline">
      {items.map((e, i) => (
        <li key={i}>
          <span className="meta">{e.period}</span>
          <h3>{e.role || e.degree}</h3>
          <p className="org">
            {[e.company || e.school, e.location].filter(Boolean).join(", ")}
          </p>
          {e.grade && <p className="org">{e.grade}</p>}
          {e.points && (
            <ul>
              {e.points.map((p, j) => (
                <li key={j}>{p}</li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ol>
  );
}
