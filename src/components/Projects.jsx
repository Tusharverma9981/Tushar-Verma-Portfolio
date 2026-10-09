import { useEffect, useRef, useState } from "react";
import { Tags } from "./Section.jsx";

export default function Projects({ projects }) {
  const [active, setActive] = useState(null);
  const closeRef = useRef(null);
  const openerRef = useRef(null);

  useEffect(() => {
    if (active === null) return;
    const onKey = (e) => e.key === "Escape" && setActive(null);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      openerRef.current?.focus();
    };
  }, [active]);

  const p = active !== null ? projects[active] : null;

  return (
    <>
      <p className="hint">Click any project to read the full details.</p>
      <div className="grid">
        {projects.map((x, i) => (
          <button
            key={x.title}
            className="card click"
            onClick={(e) => {
              openerRef.current = e.currentTarget;
              setActive(i);
            }}
          >
            <h3>{x.title}</h3>
            <p>{x.summary}</p>
            <Tags items={x.tech} />
          </button>
        ))}
      </div>

      {p && (
        <div className="overlay" onClick={() => setActive(null)}>
          <div
            className="modal"
            role="dialog"
            aria-modal="true"
            aria-label={p.title}
            onClick={(e) => e.stopPropagation()}
          >
            <button ref={closeRef} className="close" aria-label="Close" onClick={() => setActive(null)}>
              ✕
            </button>
            <h3>{p.title}</h3>
            <p className="org">{p.summary}</p>
            <Tags items={p.tech} />
            <ul className="detail">
              {p.details.map((d, i) => (
                <li key={i}>{d}</li>
              ))}
            </ul>
            <div className="btns">
              {p.github && (
                <a className="btn primary" href={p.github} target="_blank" rel="noopener noreferrer">
                  View code
                </a>
              )}
              {p.live && (
                <a className="btn" href={p.live} target="_blank" rel="noopener noreferrer">
                  Live demo
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
