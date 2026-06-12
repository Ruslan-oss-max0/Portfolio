import { useInView } from "../hooks/useInView";
import "../styles/ContactSection.css";

export const ContactSection = () => {
  const [ref, isVisible] = useInView();

  return (
    <footer
      className={`contact fade-in ${isVisible ? "visible" : ""}`}
      id="contact"
      ref={ref}
    >
      <h2 className="contact__title">Get In Touch</h2>

      <p>Open to junior front-end opportunities. Feel free to reach out.</p>

      <div className="contact__links">
        <a className="contact__link" href="mailto:kryzhanskiyruslan@gmail.com">
          Email
        </a>
        <a
          className="contact__link"
          href="https://github.com/Ruslan-oss-max0"
          target="_blank"
        >
          GitHub
        </a>
        <a
          className="contact__link"
          href="https://www.linkedin.com/in/ruslan-kryzhanskiy-431196245/"
          target="_blank"
        >
          LinkedIn
        </a>
      </div>

      <p className="contact__copy">© 2025 Ruslan Kryzhanskiy</p>
    </footer>
  );
};
