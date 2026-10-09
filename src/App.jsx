import { useEffect } from "react";
import info from "./info.js";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Section, { Tags } from "./components/Section.jsx";
import Timeline from "./components/Timeline.jsx";
import Projects from "./components/Projects.jsx";

const has = (a) => Array.isArray(a) && a.length > 0;

export default function App() {
  const { name, role, about, skills, experience, projects, achievements, education, contact, contactText, resume, theme } = info;

  useEffect(() => {
    document.title = `${name} — ${role}`;
    if (theme?.accent) document.documentElement.style.setProperty("--acc", theme.accent);
    if (theme?.accent2) document.documentElement.style.setProperty("--acc2", theme.accent2);
  }, [name, role, theme]);

  // Sections shown in order. Empty lists are skipped and renumbered.
  const blocks = [
    has(about) && { id: "about", label: "about", title: "About me", body: about.map((t, i) => <p key={i} className="lead">{t}</p>) },
    has(skills) && {
      id: "skills", label: "stack", title: "Skills",
      body: (
        <div className="grid">
          {skills.map((s) => (
            <div className="card" key={s.group}>
              <h3 className="small">{s.group}</h3>
              <Tags items={s.items} />
            </div>
          ))}
        </div>
      ),
    },
    has(experience) && { id: "experience", label: "experience", title: "Work experience", body: <Timeline items={experience} /> },
    has(projects) && { id: "projects", label: "projects", title: "Featured work", body: <Projects projects={projects} /> },
    has(achievements) && {
      id: "achievements", label: "impact", title: "Key achievements",
      body: (
        <div className="grid">
          {achievements.map((a) => (
            <div className="card" key={a.label}>
              <p className="stat">{a.value}</p>
              <p>{a.label}</p>
            </div>
          ))}
        </div>
      ),
    },
    has(education) && { id: "education", label: "education", title: "Education", body: <Timeline items={education} /> },
    {
      id: "contact", label: "contact", title: "Let's work together",
      body: (
        <>
          <p className="lead">{contactText}</p>
          <div className="btns">
            {contact.email && <a className="btn" href={`mailto:${contact.email}`}>✉ {contact.email}</a>}
            {contact.phone && <a className="btn" href={`tel:${contact.phone.replace(/\s+/g, "")}`}>{contact.phone}</a>}
            {contact.linkedin && <a className="btn" href={contact.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>}
            {contact.github && <a className="btn" href={contact.github} target="_blank" rel="noopener noreferrer">GitHub</a>}
            {contact.twitter && <a className="btn" href={contact.twitter} target="_blank" rel="noopener noreferrer">Twitter</a>}
            {contact.website && <a className="btn" href={contact.website} target="_blank" rel="noopener noreferrer">Website</a>}
            {resume && <a className="btn primary" href={resume} download>⬇ Download Resume</a>}
          </div>
          {contact.location && <p className="org" style={{ marginTop: 18 }}>Based in {contact.location}</p>}
        </>
      ),
    },
  ].filter(Boolean);

  return (
    <>
      <Navbar name={name} links={blocks.map((b) => ({ id: b.id, label: b.title === "Let's work together" ? "Contact" : b.id[0].toUpperCase() + b.id.slice(1) }))} />
      <main>
        <Hero info={info} />
        {blocks.map((b, i) => (
          <Section key={b.id} id={b.id} num={String(i + 1).padStart(2, "0")} label={b.label} title={b.title}>
            {b.body}
          </Section>
        ))}
      </main>
      <footer>© {new Date().getFullYear()} {name}</footer>
    </>
  );
}
