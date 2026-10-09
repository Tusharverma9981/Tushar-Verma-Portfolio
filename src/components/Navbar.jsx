import { useState } from "react";

export default function Navbar({ name, links }) {
  const [open, setOpen] = useState(false);
  return (
    <header className="nav">
      <a href="#top" className="logo">
        {"<"}
        {name.replace(/\s+/g, "")}
        {"/>"}
      </a>
      <button
        className="menu-btn"
        aria-expanded={open}
        aria-controls="nav-links"
        onClick={() => setOpen((o) => !o)}
      >
        Menu
      </button>
      <nav id="nav-links" className={"links" + (open ? " open" : "")}>
        {links.map((l) => (
          <a key={l.id} href={"#" + l.id} onClick={() => setOpen(false)}>
            {l.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
