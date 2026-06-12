import "../styles/Hero.css";
import { Button } from "./Button";

export const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__intro">
        <p className="hero__greeting">Hi, I'm</p>
        <h1 className="hero__name">Ruslan Kryzhanskiy</h1>
      </div>

      <p className="hero__title">Junior Front-End Developer</p>
      <p className="hero__description">
        I build responsive, clean web interfaces with JavaScript and React.
      </p>
      <div className="hero__buttons">
        <Button text="View Projects" href="#projects" variant="primary" />
        <Button
          text="Download CV"
          href="https://drive.google.com/file/d/1esUrV8Qng4zqhT-O26hi0gHr8hgrAdt2/view?usp=sharing"
          variant="secondary"
          target={"_blank"}
        />
      </div>
    </section>
  );
};
