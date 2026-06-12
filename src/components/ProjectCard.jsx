import "../styles/ProjectCard.css";
import { Button } from "./Button";

export const ProjectCard = ({ project, onImageClick }) => {
  return (
    <div className="project-card">
      <div
        className="project-card__image-wrapper"
        onClick={() => onImageClick(project.image)}
        style={{ cursor: "pointer" }}
      >
        {project.image ? (
          <img
            src={project.image}
            alt={project.name}
            className="project-card__image"
          />
        ) : (
          <div className="project-card__placeholder"></div>
        )}
      </div>

      <div className="project-card__content">
        <h3 className="project-card__name">{project.name}</h3>
        <p className="project-card__tech">{project.tech}</p>
        <p className="project-card__description">{project.description}</p>

        <div className="project-card__buttons">
          <Button
            text="Live"
            href={project.live}
            variant="primary"
            target="_blank"
          />
          <Button
            text="GitHub"
            href={project.github}
            variant="secondary"
            target="_blank"
          />
        </div>
      </div>
    </div>
  );
};
