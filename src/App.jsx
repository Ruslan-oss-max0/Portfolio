import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { ProjectsSection } from "./components/ProjectsSection";
import { AboutSection } from "./components/AboutSection";
import { ContactSection } from "./components/ContactSection";
import { projects } from "./data/projects";
import "./App.css";
import { useState } from "react";
import { Lightbox } from "./components/Lightbox";

export const App = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="app">
      <Navbar />
      <Hero />
      <ProjectsSection projects={projects} onImageClick={setSelectedImage} />
      <AboutSection />
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
