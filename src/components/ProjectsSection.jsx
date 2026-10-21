import { useState, useMemo } from "react";
import { useInView } from "../hooks/useInView";
import { ProjectCard } from "./ProjectCard";
import "../styles/ProjectsSection.css";

const CATEGORIES = [
  { id: "all", label: "All Projects" },
  { id: "React & TypeScript", label: "React & TypeScript" },
  { id: "JavaScript DOM", label: "Vanilla JS / DOM" },
  { id: "Responsive Layouts", label: "Responsive Layouts" }
];

export const ProjectsSection = ({ projects, onImageClick }) => {
  const [ref, isVisible] = useInView();
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects = useMemo(() => {
    if (activeCategory === "all") return projects;
    return projects.filter((p) => p.category === activeCategory);
  }, [projects, activeCategory]);

  return (
    <section
      id="projects"
      className={`projects-section fade-in ${isVisible ? "visible" : ""}`}
      ref={ref}
    >
      <div className="container">
        <div className="section-header projects-header">
          <div>
            <span className="section-kicker">02. Engineering Depth</span>
            <h2 className="section-title">Case Studies & Production Code</h2>
            <p className="section-desc">
              Every project is an architectural study in state management, DOM performance, or design translation. Inspect live demos or review clean GitHub code.
            </p>
          </div>

          {/* Interactive Category Filter Controls */}
          <div className="filter-controls" role="tablist" aria-label="Filter projects by technology">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                role="tab"
                aria-selected={activeCategory === cat.id}
                className={`filter-btn ${activeCategory === cat.id ? "filter-btn--active" : ""}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                {cat.label}
                <span className="filter-count">
                  {cat.id === "all"
                    ? projects.length
                    : projects.filter((p) => p.category === cat.id).length}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onImageClick={onImageClick}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
