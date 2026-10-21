import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { CommercialProof } from "./components/CommercialProof";
import { ProjectsSection } from "./components/ProjectsSection";
import { SkillsMatrix } from "./components/SkillsMatrix";
import { EducationTimeline } from "./components/EducationTimeline";
import { AboutSection } from "./components/AboutSection";
import { ContactSection } from "./components/ContactSection";
import { Lightbox } from "./components/Lightbox";
import { projects } from "./data/projects";
import "./App.css";

export const App = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="app-layout">
      <Navbar />
      <main>
        <Hero />
        <CommercialProof />
        <ProjectsSection projects={projects} onImageClick={setSelectedImage} />
        <SkillsMatrix />
        <EducationTimeline />
        <AboutSection />
      </main>
      <ContactSection />

      {selectedImage && (
        <Lightbox
          image={selectedImage}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </div>
  );
};
