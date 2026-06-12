import { useState } from "react";
import "../styles/Navbar.css";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="nav">
      <a href="#" className="nav__logo">
        RK
      </a>
      <ul className="nav__list">
        <li className="nav__item">
          <a className="nav__link" href="#projects">
            Projects
          </a>
        </li>

        <li className="nav__item">
          <a className="nav__link" href="#about">
            About
          </a>
        </li>

        <li className="nav__item">
          <a className="nav__link" href="#contact">
            Contact
          </a>
        </li>
      </ul>

      <button className="nav__burger" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? (
          "x"
        ) : (
          <>
            <span></span>
            <span></span>
            <span></span>
          </>
        )}
      </button>

      <div className={`nav__mobile ${isOpen ? "nav__mobile--open" : ""}`}>
        <a
          className="nav__mobile-link"
          href="#projects"
          onClick={() => setIsOpen(false)}
        >
          Projects
        </a>
        <a
          className="nav__mobile-link"
          href="#about"
          onClick={() => setIsOpen(false)}
        >
          About
        </a>
        <a
          className="nav__mobile-link"
          href="#contact"
          onClick={() => setIsOpen(false)}
        >
          Contact
        </a>
      </div>
    </nav>
  );
};
