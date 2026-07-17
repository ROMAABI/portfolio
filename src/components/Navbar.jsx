import { useEffect, useRef, useState, useCallback } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const lastScrollY = useRef(0);
  const navbarRef = useRef(null);

  const toggleMenu = useCallback(
    (open) => {
      const isOpen = open !== undefined ? open : !menuOpen;
      setMenuOpen(isOpen);
      document.body.style.overflow = isOpen ? "hidden" : "";
    },
    [menuOpen]
  );

  useEffect(() => {
    const navbar = navbarRef.current;
    if (!navbar) return;

    const onScroll = () => {
      const y = window.scrollY;
      if (y > 40) {
        navbar.style.background = "rgba(10, 10, 20, 0.95)";
      } else {
        navbar.style.background = "rgba(10, 10, 20, 0.7)";
      }
      if (window.innerWidth <= 768) {
        if (y > lastScrollY.current && y > 200) {
          navbar.style.transform = "translateY(-100%)";
        } else {
          navbar.style.transform = "translateY(0)";
        }
      }
      lastScrollY.current = y;
    };

    const onKeyDown = (e) => {
      if (e.key === "Escape") toggleMenu(false);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [toggleMenu]);

  const handleNavClick = useCallback(
    (e, href) => {
      e.preventDefault();
      toggleMenu(false);
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    },
    [toggleMenu]
  );

  return (
    <>
      <nav id="navbar" ref={navbarRef} role="navigation" aria-label="Main navigation">
        <div className="nav-logo">
          spix<span className="accent">.</span>
        </div>
        <button
          className={`hamburger ${menuOpen ? "active" : ""}`}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          type="button"
          onClick={() => toggleMenu()}
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
        <ul className={`nav-links ${menuOpen ? "active" : ""}`} role="menubar">
          <li role="none">
            <a href="#about" role="menuitem" onClick={(e) => handleNavClick(e, "#about")}>
              About
            </a>
          </li>
          <li role="none">
            <a href="#skills" role="menuitem" onClick={(e) => handleNavClick(e, "#skills")}>
              Skills
            </a>
          </li>
          <li role="none">
            <a href="#experience" role="menuitem" onClick={(e) => handleNavClick(e, "#experience")}>
              Experience
            </a>
          </li>
          <li role="none">
            <a href="#projects" role="menuitem" onClick={(e) => handleNavClick(e, "#projects")}>
              Projects
            </a>
          </li>
          <li role="none">
            <a href="#contact" role="menuitem" onClick={(e) => handleNavClick(e, "#contact")}>
              Contact
            </a>
          </li>
          <li role="none">
            <a
              href="/assets/resume/abimanyu-resume.pdf"
              target="_blank"
              rel="noopener"
              className="nav-cta"
              role="menuitem"
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>
      <div
        className={`nav-overlay ${menuOpen ? "active" : ""}`}
        onClick={() => toggleMenu(false)}
      />
    </>
  );
}
