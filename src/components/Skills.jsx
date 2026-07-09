import ScrollReveal from "./ScrollReveal";

const skillCards = [
  {
    num: "06",
    cat: "Front-End",
    c: "c1",
    tags: ["HTML5", "CSS3", "JS ES6+", "React.js", "Tailwind", "Bootstrap 5"],
  },
  {
    num: "05",
    cat: "Backend",
    c: "c2",
    tags: ["Node.js", "Express", "REST APIs", "JWT", "WebSockets"],
  },
  {
    num: "04",
    cat: "AI / LLM",
    c: "c3",
    tags: ["Ollama", "LangChain", "Transformers", "RAG pipelines"],
  },
  {
    num: "04",
    cat: "Database",
    c: "c4",
    tags: ["MongoDB", "PostgreSQL", "SQLite", "Redis"],
  },
  {
    num: "05",
    cat: "Mobile",
    c: "c5",
    tags: ["React Native", "Expo", "Responsive Design", "Mobile UI"],
  },
  {
    num: "03",
    cat: "Dev Env",
    c: "c6",
    tags: ["Git", "Docker", "Neovim", "Hyprland", "Fish/Zsh"],
    star: true,
  },
];

export default function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-heading">
      <div className="sk-wrap">
        <ScrollReveal variant="left" delay={0}>
          <p className="sk-label">what i use</p>
        </ScrollReveal>
        <ScrollReveal variant="up" delay={120}>
          <h2 className="sk-heading">
            My <span>Stack</span>
          </h2>
        </ScrollReveal>
        <ScrollReveal variant="up" delay={240}>
          <div className="sk-grid">
          {skillCards.map((card) => (
            <div className={`sk-card ${card.c}`} key={card.cat}>
              <div className="sk-num">{card.num}</div>
              <div className="sk-cat">{card.cat}</div>
              <div className="sk-tags">
                {card.tags.map((tag) => (
                  <span className="sk-tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
              {card.star && (
                <svg className="sk-star" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2l1.5 6.5L20 9l-5 4.5 1.5 7L12 16l-6.5 4.5L7 13.5 2 9l6.5-0.5L12 2z" fill="currentColor" opacity="0.15" />
                </svg>
              )}
            </div>
          ))}
        </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
