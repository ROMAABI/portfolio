import ScrollReveal from "./ScrollReveal";
import Slideshow from "./Slideshow";

const projects = [
  {
    featured: true,
    tag: "Featured",
    title: "Spidy AI",
    description:
      "Fully local, privacy-first AI voice assistant for Arch Linux. ReAct orchestrator loop, real-time STT/TTS via Whisper + Piper, persistent memory via ChromaDB, and dynamic tool calling — all offline.",
    tech: ["Python", "Ollama", "Whisper", "ChromaDB", "Piper TTS", "ReAct"],
    github: "https://github.com/ROMAABI/Spidy-AI",
    images: [
      { src: "/assets/spidy ai/spidyai.png", alt: "Spidy AI screenshot" },
      { src: "/assets/spidy ai/spidy ai 2.png", alt: "Spidy AI interface" },
      { src: "/assets/spidy ai/spidy ai 3.png", alt: "Spidy AI session" },
    ],
  },
  {
    featured: false,
    title: "Gemma TUI",
    description:
      "Terminal-based local AI assistant powered by Google Gemma 2 (2B) via Ollama. Persistent SQLite chat history, Markdown rendering, custom system prompts, code extraction, and full TUI with Textual — all offline, zero cloud dependencies.",
    tech: ["Python", "Textual", "llama.cpp", "SQLite", "Ollama", "Typer"],
    github: "https://github.com/ROMAABI/Gemma-TUI",
    images: [
      { src: "/assets/gemma tui/gemma tui.png", alt: "Gemma TUI screenshot" },

      { src: "/assets/gemma tui/gemma tui 2.png", alt: "Gemma TUI session" },
      { src: "/assets/gemma tui/gemma tui 3.png", alt: "Gemma TUI commands" },
      { src: "/assets/gemma tui/gemma tui 4.png", alt: "Gemma TUI theme" },
    ],
  },
  {
    featured: false,
    title: "HyDE Ricing",
    description:
      "Hyprland Dotfiles Ecosystem — 40+ themed variants with dynamic configuration switching, pywal color harmonization, and smooth rounded-corner aesthetics. Fully automated restore scripts and live reload.",
    tech: ["Hyprland", "Waybar", "Rofi", "Pywal", "Fish", "Neovim"],
    github: "https://github.com/ROMAABI/HyDE",
    images: [

      { src: "/assets/hyde rice/hyde rice.png", alt: "HyDE desktop" },
      { src: "/assets/hyde rice/showcase_1.png", alt: "HyDE showcase 1" },
      { src: "/assets/hyde rice/showcase_2.png", alt: "HyDE showcase 2" },
      { src: "/assets/hyde rice/showcase_3.png", alt: "HyDE showcase 3" },
      { src: "/assets/hyde rice/showcase_4.png", alt: "HyDE showcase 4" },
      { src: "/assets/hyde rice/theme_tokyo_1.png", alt: "Tokyo theme" },
      { src: "/assets/hyde rice/theme_gruvbox_1.png", alt: "Gruvbox theme" },
    ],
  },
  {
    featured: false,
    title: "Fit AI Buddy",
    description:
      "AI-powered fitness companion built with Flutter. Tracks workouts, nutrition, and progress with intelligent coaching suggestions. Features REST API backend for data persistence and real-time analytics.",
    tech: ["Flutter", "Dart", "REST APIs", "Node.js", "MongoDB"],
    github: "https://github.com/ROMAABI/Fit-AI-Buddy",
    images: [
      { src: "/assets/fit ai buddy/fit ai buddy.jpg", alt: "Fit AI Buddy screenshot" },
      { src: "/assets/fit ai buddy/fit ai buddy1.jpg", alt: "Fit AI Buddy dashboard" },
      { src: "/assets/fit ai buddy/fit ai buddy2.jpg", alt: "Fit AI Buddy workout" },
      { src: "/assets/fit ai buddy/fit ai buddy3.jpg", alt: "Fit AI Buddy nutrition" },
      { src: "/assets/fit ai buddy/fit ai buddy4.jpg", alt: "Fit AI Buddy progress" },
      { src: "/assets/fit ai buddy/fit ai buddy5.jpg", alt: "Fit AI Buddy settings" },
    ],
  },
  {
    featured: false,
    title: "PG / Rent Manager",
    description:
      "Full-stack rental management system with tenant tracking, payment scheduling, and receipt generation. Built with Node.js backend and responsive frontend.",
    tech: ["Node.js", "Express", "MongoDB", "EJS", "JavaScript"],
    github: "https://github.com/ROMAABI/PG-Rent-Manager",
    images: [
      { src: "/assets/pg rent/pg renr.png", alt: "PG Rent Manager screenshot" },
    ],
  },
];

function ProjectCard({ project }) {
  return (
    <div className={`project-card${project.featured ? " featured" : ""}`}>
      <div className="project-img-wrap">
        <Slideshow images={project.images} interval={4000} />
        {project.tag && <span className="project-tag">{project.tag}</span>}
      </div>
      <div className="project-body">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="project-tech">
          {project.tech.map((t) => (
            <span key={t} className="mono">
              {t}
            </span>
          ))}
        </div>
        <div className="project-links">
          <a
            href={project.github}
            target="_blank"
            rel="noopener"
            className="btn-ghost-sm"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
            Source
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-heading">
      <div className="container">
        <ScrollReveal variant="left" delay={0}>
          <p className="section-label">what i&apos;ve built</p>
        </ScrollReveal>
        <ScrollReveal variant="up" delay={120}>
          <h2 id="projects-heading">Projects</h2>
        </ScrollReveal>
        <ScrollReveal variant="fade" delay={240}>
          <div className="projects-grid">
            {projects.map((p) => (
              <ProjectCard key={p.title} project={p} />
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
