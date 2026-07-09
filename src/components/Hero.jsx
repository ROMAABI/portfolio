import { useEffect, useState, useCallback } from "react";
import ParticlesCanvas from "./ParticlesCanvas";

const roles = [
  "Junior Front-End Developer",
  "React Enthusiast",
  "AI Tinkerer",
  "Arch Linux Rice Lord",
];

export default function Hero() {
  const [avatarError, setAvatarError] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayRole, setDisplayRole] = useState(roles[0]);
  const [glitchText, setGlitchText] = useState("");
  const [glitchDone, setGlitchDone] = useState(false);
  const originalName = "Abimanyu A";

  const cycleRoles = useCallback(() => {
    const next = (roleIndex + 1) % roles.length;
    setRoleIndex(next);
    let i = 0;
    const target = roles[next];
    const interval = setInterval(() => {
      setDisplayRole(
        target
          .split("")
          .map((char, idx) => {
            if (idx < i) return target[idx];
            if (char === " ") return " ";
            const chars = "!<>-_\\/[]{}—=+*^?#";
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("")
      );
      i++;
      if (i > target.length) {
        clearInterval(interval);
        setDisplayRole(target);
      }
    }, 50);
  }, [roleIndex]);

  useEffect(() => {
    const timer = setTimeout(cycleRoles, 1400);
    return () => clearTimeout(timer);
  }, [cycleRoles]);

  useEffect(() => {
    let i = 0;
    const chars = "!<>-_\\/[]{}—=+*^?#░▒▓█▌▐";
    const interval = setInterval(() => {
      setGlitchText(
        originalName
          .split("")
          .map((char, idx) => {
            if (idx < i) return originalName[idx];
            if (char === " ") return " ";
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("")
      );
      i++;
      if (i >= originalName.length) {
        clearInterval(interval);
        setGlitchText(originalName);
        setGlitchDone(true);
      }
    }, 60);
    return () => clearInterval(interval);
  }, []);

  const handleGlitchHover = useCallback(() => {
    if (!glitchDone) return;
    let i = 0;
    const chars = "!<>-_\\/[]{}—=+*^?#░▒▓█▌▐";
    const interval = setInterval(() => {
      setGlitchText(
        originalName
          .split("")
          .map((char, idx) => {
            if (idx < i) return originalName[idx];
            if (char === " ") return " ";
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("")
      );
      i++;
      if (i >= originalName.length) {
        clearInterval(interval);
        setGlitchText(originalName);
      }
    }, 30);
  }, [glitchDone]);

  return (
    <section id="hero" aria-label="Hero">
      <ParticlesCanvas />
      <div className="dot-grid" aria-hidden="true"></div>

      <div className="hero-content">
        <p className="hero-eyebrow">
          <span className="mono">~/dev</span> &nbsp;·&nbsp; Chennai, Tamil Nadu
        </p>

        <h1 className="hero-name" id="glitch-name" onMouseEnter={handleGlitchHover}>
          {glitchText || originalName}
        </h1>

        <p className="hero-role">
          <span className="role-line">{displayRole}</span>
          <span className="cursor-blink" aria-hidden="true">▌</span>
        </p>

        <p className="hero-desc">
          CS Engineering graduate building <em>React UIs</em>,
          full-stack web apps, and local-first <em>AI tools</em>. I
          ship clean, responsive interfaces and wire up everything
          from REST APIs to LLM backends.
          <em> Immediate joiner.</em>
        </p>

        <div className="hero-actions">
          <a href="#projects" className="btn-primary">view my work</a>
          <a href="#contact" className="btn-ghost">get in touch</a>
        </div>

        <div className="hero-socials">
          <a href="https://github.com/ROMAABI" target="_blank" rel="noopener" aria-label="GitHub profile">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/abimanyu-kvm/" target="_blank" rel="noopener" aria-label="LinkedIn profile">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
          <a href="mailto:abimanyuannadhurai18@gmail.com" aria-label="Email">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
            </svg>
          </a>
        </div>
      </div>

      <div className="hero-avatar-wrap">
        <div className="avatar-glow"></div>
        <div className="avatar-orbit-line"></div>
        <div className="avatar-orbit-line"></div>

        <div className="avatar-frame-corner afc-tl" aria-hidden="true">
          <svg viewBox="0 0 16 16" fill="none">
            <path d="M16,0 L0,0 L0,16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </div>
        <div className="avatar-frame-corner afc-tr" aria-hidden="true">
          <svg viewBox="0 0 16 16" fill="none">
            <path d="M0,0 L16,0 L16,16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </div>
        <div className="avatar-frame-corner afc-bl" aria-hidden="true">
          <svg viewBox="0 0 16 16" fill="none">
            <path d="M16,16 L0,16 L0,0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </div>
        <div className="avatar-frame-corner afc-br" aria-hidden="true">
          <svg viewBox="0 0 16 16" fill="none">
            <path d="M0,16 L16,16 L16,0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </div>

        <div className="avatar-img-wrap">
          {!avatarError ? (
            <img
              src="/assets/profile.png"
              alt="Abimanyu A"
              className="avatar-img"
              loading="lazy"
              onError={() => setAvatarError(true)}
            />
          ) : null}
          <div
            className="avatar-placeholder"
            aria-hidden="true"
            style={{ display: avatarError ? "flex" : "none" }}
          >
            <svg viewBox="0 0 120 120" fill="none">
              <rect width="120" height="120" rx="60" fill="#1a1a2e" />
              <text x="60" y="68" textAnchor="middle" fill="#4d5ee8" fontFamily="Syne, sans-serif" fontSize="40" fontWeight="800">A</text>
            </svg>
          </div>
        </div>
        <div className="avatar-badge mono">@spix</div>

        <div className="tech-badge tb-1 mono">React</div>
        <div className="tech-badge tb-2 mono">Node.js</div>
        <div className="tech-badge tb-3 mono">CSS3</div>
        <div className="tech-badge tb-4 mono">JS</div>
        <div className="tech-badge tb-5 mono">Flutter</div>
        <div className="tech-badge tb-6 mono">Python</div>
        <div className="tech-badge tb-7 mono">Arch</div>
        <div className="tech-badge tb-8 mono">Ollama</div>
        <div className="orbit-dot od-1"></div>
        <div className="orbit-dot od-2"></div>
        <div className="orbit-dot od-3"></div>
        <div className="orbit-dot od-4"></div>
        <div className="orbit-dot od-5"></div>
        <div className="orbit-dot od-6"></div>
      </div>
    </section>
  );
}
