import { useInView } from "../hooks/useInView";
import "../styles/ProjectsSection.css";
import { ProjectCard } from "./ProjectCard";

export const ProjectsSection = ({ projects, onImageClick }) => {
  const [ref, isVisible] = useInView();

  return (
    <section
      className={`projects fade-in ${isVisible ? "visible" : ""}`}
      id="projects"
      ref={ref}
    >
      <h2 className="projects__title">Projects</h2>

      <div className="projects__grid">
        {projects.map((project) => {
          return (
            <ProjectCard
              key={project.id}
              project={project}
              onImageClick={onImageClick}
            />
          );
        })}
      </div>
    </section>
  );
};
