import { useInView } from "../hooks/useInView";
import "../styles/AboutSection.css";

export const AboutSection = () => {
  const [ref, isVisible] = useInView();

  return (
    <section id="about" className={`about-section fade-in ${isVisible ? "visible" : ""}`} ref={ref}>
      <div className="container">
        <div className="section-header">
          <span className="section-kicker">05. Philosophy & Narrative</span>
          <h2 className="section-title">About Me</h2>
          <p className="section-desc">
            How a curiosity for web architecture evolved into a dedicated career building reliable user-facing interfaces.
          </p>
        </div>

        <div className="about-layout">
          <div className="about-story">
            <p className="about-paragraph">
              My path into front-end development started with Python. While exploring programming fundamentals, I discovered I could construct visual, interactive web applications — and that realization shifted my trajectory completely. I taught myself semantic HTML and CSS, progressed deeply into modern JavaScript (ES6+), completed rigorous coursework at Mate Academy and EPAM Systems, and built projects from scratch to go far beyond curriculum constraints.
            </p>

            <p className="about-paragraph">
              Over the past year, I have focused on building independent production applications. When I hit obstacles, I read specification documentation, experiment with isolated reproductions, and stay with the problem until I understand the underlying browser mechanics. That discipline has taught me more than any tutorial video.
            </p>

            <p className="about-paragraph">
              My previous work at <strong>Ibis Hotel (Accor Group)</strong> gave me direct exposure to real customer interactions. Handling reservations, payment processing, and international guest requests taught me how real people behave when interacting with forms, calendars, and checkout screens. I bring this deep awareness of friction points and conversion clarity directly into every React component I engineer.
            </p>

            <p className="about-paragraph">
              I am actively seeking a full-time remote junior front-end role where I can contribute to user-facing features, collaborate closely with senior developers, and grow within a high-standard engineering culture.
            </p>
          </div>

          <div className="about-sidebar">
            <div className="about-principle-card">
              <span className="principle-number">01</span>
              <h4 className="principle-title">Uncompromising Mobile-First Precision</h4>
              <p className="principle-desc">
                Layouts must adapt seamlessly across screen sizes without layout shifts, visual overflow, or fragile breakpoint assumptions.
              </p>
            </div>

            <div className="about-principle-card">
              <span className="principle-number">02</span>
              <h4 className="principle-title">Predictable State Architecture</h4>
              <p className="principle-desc">
                Clean unidirectional data flow, explicit error handling, and robust form validation on blur rather than defensive spaghetti code.
              </p>
            </div>

            <div className="about-principle-card">
              <span className="principle-number">03</span>
              <h4 className="principle-title">Continuous Improvement & AI Tooling</h4>
              <p className="principle-desc">
                Leveraging AI-assisted workflows for rapid prototyping, algorithmic challenge solving, and adhering to strict NDA standards.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
