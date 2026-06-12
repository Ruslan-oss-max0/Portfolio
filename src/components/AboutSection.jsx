import { useInView } from "../hooks/useInView";
import "../styles/AboutSection.css";

export const AboutSection = () => {
  const [ref, isVisible] = useInView();

  return (
    <section
      className={`about fade-in ${isVisible ? "visible" : ""}`}
      id="about"
      ref={ref}
    >
      <h2 className="about__title">About Me</h2>

      <div className="about__content">
        <p className="about__text">
          My path into front-end development started with Python. While learning
          it, I discovered I could build websites — and that realization changed
          my direction completely. I taught myself HTML and CSS, progressed into
          JavaScript, completed the front-end section of a full-stack course at
          Mate Academy, and continued building projects in my own time to go
          beyond the curriculum.
        </p>

        <p className="about__text">
          I am now looking for my first professional role. Over the past year, I
          have been learning independently — reading documentation, solving
          problems on platforms like Codewars, and building projects from
          scratch. When I get stuck, I research, experiment, and stay with the
          problem until I find the answer. That habit has taught me more than
          any course module. At the same time, I know there are things
          self-study cannot provide: working on a real codebase, collaborating
          with experienced developers, and understanding how technical decisions
          are made in a professional environment. That is exactly the experience
          I am looking for.
        </p>
      </div>
    </section>
  );
};
