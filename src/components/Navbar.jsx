import { useState, useEffect } from "react";
import "../styles/Navbar.css";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`nav-header ${scrolled ? "nav-header--scrolled" : ""}`}>
      <div className="container nav-container">
        {/* Zone 1: Brand Wordmark */}
        <a href="#" className="nav-brand">
          <span className="nav-brand__initials">RK</span>
          <span className="nav-brand__name">Ruslan Kryzhanskiy</span>
        </a>

        {/* Zone 2: Navigation Links */}
        <nav className="nav-links">
          <a href="#experience" className="nav-link">
            Experience
          </a>
          <a href="#projects" className="nav-link">
            Case Studies
          </a>
          <a href="#skills" className="nav-link">
            Skills
          </a>
          <a href="#education" className="nav-link">
            Education
          </a>
          <a href="#about" className="nav-link">
            About
          </a>
        </nav>

        {/* Zone 3: Primary Action CTA */}
        <div className="nav-actions">
          <a href="#contact" className="nav-btn nav-btn--cta">
            Get in Touch
          </a>

          {/* Mobile menu trigger */}
          <button
            className="nav-burger"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
          >
            <span className={`burger-line ${isOpen ? "burger-line--open-1" : ""}`}></span>
            <span className={`burger-line ${isOpen ? "burger-line--open-2" : ""}`}></span>
            <span className={`burger-line ${isOpen ? "burger-line--open-3" : ""}`}></span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`nav-mobile-drawer ${isOpen ? "nav-mobile-drawer--open" : ""}`}>
        <div className="nav-mobile-content">
          <a href="#experience" className="nav-mobile-link" onClick={() => setIsOpen(false)}>
            01. Commercial Experience
          </a>
          <a href="#projects" className="nav-mobile-link" onClick={() => setIsOpen(false)}>
            02. Case Studies
          </a>
          <a href="#skills" className="nav-mobile-link" onClick={() => setIsOpen(false)}>
            03. Technical Skills
          </a>
          <a href="#education" className="nav-mobile-link" onClick={() => setIsOpen(false)}>
            04. Education & Certifications
          </a>
          <a href="#about" className="nav-mobile-link" onClick={() => setIsOpen(false)}>
            05. About Me
          </a>
          <div className="nav-mobile-actions">
            <a
              href="#contact"
              className="nav-mobile-btn nav-mobile-btn--highlight"
              onClick={() => setIsOpen(false)}
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
