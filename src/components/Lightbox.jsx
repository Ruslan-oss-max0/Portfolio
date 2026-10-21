import { useEffect } from "react";
import "../styles/Lightbox.css";

export const Lightbox = ({ image, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <div className="lightbox" onClick={onClose} role="dialog" aria-modal="true" aria-label="Project Preview Lightbox">
      <div className="lightbox__content" onClick={(e) => e.stopPropagation()}>
        <div className="lightbox__bar">
          <span className="lightbox__title">Full-Resolution Screenshot Preview</span>
          <button className="lightbox__close" onClick={onClose} aria-label="Close preview">
            ✕ <span className="close-hint">ESC</span>
          </button>
        </div>
        <div className="lightbox__frame">
          <img src={image} alt="High resolution project preview" className="lightbox__image" />
        </div>
      </div>
    </div>
  );
};
