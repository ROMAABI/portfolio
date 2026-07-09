import ScrollReveal from "./ScrollReveal";

export default function About() {
  return (
    <section id="about" aria-labelledby="about-heading">
      <div className="container">
        <ScrollReveal variant="left" delay={0}>
          <p className="section-label">who i am</p>
        </ScrollReveal>
        <div className="about-grid">
          <div className="about-text">
            <ScrollReveal variant="up" delay={120}>
              <h2 id="about-heading">
                Building the web<br /><span className="accent">one component</span> at a time.
              </h2>
            </ScrollReveal>
            <p>
              CS Engineering graduate from P.T. Lee Chengalvaraya Naicker College of Engineering &amp; Technology
              (Anna University), with internship experience at
              <em> Cognifyz IT Solutions</em> and
              <em> Anunta Technology</em>. I specialize in
              <em> React.js, Node.js, and REST APIs</em> — turning
              designs into fast, accessible web applications.
            </p>
            <p>
              When I&apos;m not coding, I&apos;m building local AI tools
              with Ollama &amp; LangChain, ricing my Hyprland
              desktop with anime-themed configs, or diving into
              cybersecurity on TryHackMe. I believe in writing
              code that&apos;s as beautiful as the UIs it creates.
            </p>
            <div className="about-stats">
              <div className="stat">
                <span className="stat-num accent">7.6</span>
                <span className="stat-label">CGPA</span>
              </div>
              <div className="stat">
                <span className="stat-num accent">8+</span>
                <span className="stat-label">Projects</span>
              </div>
              <div className="stat">
                <span className="stat-num accent">2</span>
                <span className="stat-label">Internships</span>
              </div>
              <div className="stat">
                <span className="stat-num accent">∞</span>
                <span className="stat-label">Rice attempts</span>
              </div>
            </div>
          </div>
          <div className="about-terminal">
            <div className="terminal-bar">
              <span className="t-dot red"></span>
              <span className="t-dot yellow"></span>
              <span className="t-dot green"></span>
              <span className="t-title mono">spix@arch ~ </span>
            </div>
            <div className="terminal-body mono">
              <p>
                <span className="t-prompt">❯</span>
                <span className="t-cmd">cat whoami.txt</span>
              </p>
              <p className="t-out">Name : Abimanyu A</p>
              <p className="t-out">Alias : spix</p>
              <p className="t-out">Focus : Front-End Dev + AI/LLM</p>
              <p className="t-out">Shell : fish 🐟</p>
              <p className="t-out">WM : Hyprland (HyDE)</p>
              <p className="t-out">Editor : Neovim</p>
              <p className="t-out">OS : Arch Linux btw</p>
              <p className="t-out">
                Status : <span className="accent">open to work ✓</span>
              </p>
              <p>
                <span className="t-prompt">❯</span>
                <span className="cursor-blink-static">▌</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
