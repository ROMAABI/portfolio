import { useEffect, useRef } from "react";
import ScrollReveal from "./ScrollReveal";

export default function Experience() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const cards = el.querySelectorAll(".timeline-card");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    cards.forEach((c) => observer.observe(c));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" aria-labelledby="exp-heading" ref={ref}>
      <div className="container">
        <ScrollReveal variant="left" delay={0}>
          <p className="section-label">my journey</p>
        </ScrollReveal>
        <ScrollReveal variant="up" delay={120}>
          <h2 id="exp-heading">Experience</h2>
        </ScrollReveal>
        <ScrollReveal variant="fade" delay={240}>
          <div className="timeline">
          <div className="timeline-card" data-year="2026">
            <div className="timeline-dot"></div>
            <div className="timeline-body">
              <span className="timeline-year mono">Apr 2026 – May 2026</span>
              <h3>Technical Intern — Cognifyz IT Solutions</h3>
              <p>
                Developed and optimized front-end UI components for responsiveness
                and cross-browser compatibility using React.js. Integrated REST
                APIs and handled structured JSON data in a collaborative team
                environment.
              </p>
            </div>
          </div>
          <div className="timeline-card" data-year="2026">
            <div className="timeline-dot"></div>
            <div className="timeline-body">
              <span className="timeline-year mono">Jan 2026 – Present</span>
              <h3>Associate / Trainee — Anunta Technology Management Services</h3>
              <p>
                Completed comprehensive corporate induction and technical
                onboarding. Engaged in foundational system management practices
                and technical workflow optimizations in an enterprise IT
                environment.
              </p>
            </div>
          </div>
          <div className="timeline-card" data-year="2026">
            <div className="timeline-dot"></div>
            <div className="timeline-body">
              <span className="timeline-year mono">2026</span>
              <h3>Fit AI Buddy — Final Year Project</h3>
              <p>
                AI-powered fitness tracker with React.js front-end, Groq API
                for intelligent coaching, TensorFlow Lite for on-device
                inference, and SQLite persistence. Built 10+ mobile-first
                responsive screens.
              </p>
            </div>
          </div>
          <div className="timeline-card" data-year="2025">
            <div className="timeline-dot"></div>
            <div className="timeline-body">
              <span className="timeline-year mono">2025</span>
              <h3>Spidy AI — Local Voice Assistant</h3>
              <p>
                Built a fully offline AI voice assistant for Arch Linux with
                faster-whisper STT, Ollama backend (kimi-k2), and a cyberpunk
                Textual TUI. Engineered a ReAct orchestrator loop with 12+
                modular tool-calling skills.
              </p>
            </div>
          </div>
          <div className="timeline-card" data-year="2024">
            <div className="timeline-dot"></div>
            <div className="timeline-body">
              <span className="timeline-year mono">2024</span>
              <h3>Self-Taught Front-End Journey</h3>
              <p>
                Mastered HTML5, CSS3, JavaScript, and React.js through hands-on
                projects. Became an Arch Linux power user and began deep-diving
                into AI/LLM development and desktop customization (HyDE/Hyprland).
              </p>
            </div>
          </div>
        </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
