export default function Hero({ info }) {
  const { name, role, tagline, resume, heroStack, openToWork } = info;
  return (
    <section className="hero wrap" id="top">
      <div>
        <p className="hello">Hello, I'm</p>
        <h1 className="grad">{name}</h1>
        <p className="role">{role}</p>
        <p className="lead">{tagline}</p>
        <div className="btns">
          {resume && (
            <a className="btn primary" href={resume} download>
              ⬇ Download Resume
            </a>
          )}
          <a className="btn" href="#projects">View projects</a>
          <a className="btn" href="#contact">Get in touch</a>
        </div>
      </div>

      <div className="term" aria-hidden="true">
        <div className="term-bar">
          <i /><i /><i />
          <span>Developer.java</span>
        </div>
        <pre>
          <span className="k">public class</span> Developer {"{"}
          {"\n  "}
          <span className="k">String</span> name = <span className="s">"{name}"</span>;
          {"\n  "}
          <span className="k">String</span> role = <span className="s">"{role}"</span>;
          {"\n  "}
          <span className="k">String</span>[] stack = {"{"}
          {heroStack.map((t, i) => (
            <span key={t}>
              {i === 0 ? "" : ", "}
              <span className="s">"{t}"</span>
            </span>
          ))}
          {"};"}
          {"\n  "}
          <span className="k">boolean</span> openToWork = <span className="k">{String(!!openToWork)}</span>;
          {"\n}"}
        </pre>
      </div>
    </section>
  );
}
