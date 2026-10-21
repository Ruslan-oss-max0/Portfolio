import { useState } from "react";
import { cvData } from "../data/cvData";
import { useInView } from "../hooks/useInView";
import "../styles/ContactSection.css";

export const ContactSection = () => {
  const [ref, isVisible] = useInView();
  const [copiedText, setCopiedText] = useState("");

  const handleCopy = (text, label) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => {
      setCopiedText("");
    }, 2500);
  };

  return (
    <footer id="contact" className={`contact-section fade-in ${isVisible ? "visible" : ""}`} ref={ref}>
      <div className="container">
        <div className="contact-card">
          <div className="contact-header">
            <span className="contact-badge">Available For Hire</span>
            <h2 className="contact-title">Let's Build Something Great Together</h2>
            <p className="contact-desc">
              I am actively interviewing for full-time junior front-end developer positions (open to full remote worldwide). Whether you have an open role, an interesting project, or just want to connect, my inbox is always open.
            </p>
          </div>

          {/* Interactive Quick-Action Connect Grid */}
          <div className="contact-grid">
            {/* Email Card */}
            <div className="contact-channel-card">
              <div className="channel-icon">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M2.5 5.83334L10 10.8333L17.5 5.83334M2.5 5H17.5C18.1904 5 18.75 5.55964 18.75 6.25V14.5833C18.75 15.2737 18.1904 15.8333 17.5 15.8333H2.5C1.80964 15.8333 1.25 15.2737 1.25 14.5833V6.25C1.25 5.55964 1.80964 5 2.5 5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="channel-info">
                <span className="channel-label">Direct Email</span>
                <a href={`mailto:${cvData.email}`} className="channel-val">
                  {cvData.email}
                </a>
              </div>
              <button
                className="channel-copy-btn"
                onClick={() => handleCopy(cvData.email, "Email")}
                title="Copy email to clipboard"
              >
                {copiedText === "Email" ? "Copied!" : "Copy"}
              </button>
            </div>

            {/* Telegram Card */}
            <div className="contact-channel-card">
              <div className="channel-icon">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M18.3333 2.5L9.16666 11.6667M18.3333 2.5L12.5 17.5L9.16666 11.6667M18.3333 2.5L2.5 8.33333L9.16666 11.6667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="channel-info">
                <span className="channel-label">Telegram Messenger</span>
                <a href={cvData.telegramUrl} target="_blank" rel="noopener noreferrer" className="channel-val">
                  {cvData.telegram}
                </a>
              </div>
              <button
                className="channel-copy-btn"
                onClick={() => handleCopy(cvData.telegram, "Telegram")}
                title="Copy Telegram handle"
              >
                {copiedText === "Telegram" ? "Copied!" : "Copy"}
              </button>
            </div>

            {/* GitHub Card */}
            <a
              href={cvData.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-channel-card contact-channel-card--link"
            >
              <div className="channel-icon">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M7.5 15.8333C3.33333 17.0833 3.33333 13.75 1.66667 13.3333M13.3333 17.5V14.1667C13.3333 13.2 12.95 12.7 12.5 12.2833C14.8833 12.0167 17.3833 11.1333 17.3833 7.03333C17.3833 5.86667 16.9667 4.91667 16.2833 4.18333C16.4 3.91667 16.7667 2.81667 16.1833 1.38333C16.1833 1.38333 15.2833 1.1 13.3333 2.41667C12.4833 2.18333 11.5833 2.06667 10.6833 2.06667C9.78333 2.06667 8.88333 2.18333 8.03333 2.41667C6.08333 1.1 5.18333 1.38333 5.18333 1.38333C4.6 2.81667 4.96667 3.91667 5.08333 4.18333C4.4 4.91667 3.98333 5.86667 3.98333 7.03333C3.98333 11.1167 6.48333 12.0167 8.86667 12.2833C8.41667 12.7 8.03333 13.2 8.03333 14.1667V17.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="channel-info">
                <span className="channel-label">Code Repositories</span>
                <span className="channel-val">{cvData.github}</span>
              </div>
              <span className="channel-arrow">↗</span>
            </a>

            {/* LinkedIn Card */}
            <a
              href={cvData.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-channel-card contact-channel-card--link"
            >
              <div className="channel-icon">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M13.3333 6.66667C14.88 6.66667 16.1333 7.92 16.1333 9.46667V15H13.3333V9.46667C13.3333 8.69333 12.7067 8.06667 11.9333 8.06667C11.16 8.06667 10.5333 8.69333 10.5333 9.46667V15H7.73334V9.46667C7.73334 7.92 8.98667 6.66667 10.5333 6.66667C11.5467 6.66667 12.44 7.21333 12.9333 8.02667C13.0667 7.21333 13.3333 6.66667 13.3333 6.66667Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M5 7.5V15H2.5V7.5H5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M3.75 5C4.44036 5 5 4.44036 5 3.75C5 3.05964 4.44036 2.5 3.75 2.5C3.05964 2.5 2.5 3.05964 2.5 3.75C2.5 4.44036 3.05964 5 3.75 5Z" fill="currentColor"/>
                </svg>
              </div>
              <div className="channel-info">
                <span className="channel-label">LinkedIn Profile</span>
                <span className="channel-val">ruslan-kryzhanskiy</span>
              </div>
              <span className="channel-arrow">↗</span>
            </a>
          </div>

          {/* Primary CTA Row */}
          <div className="contact-cta-row">
            <a href={`mailto:${cvData.email}`} className="btn btn--primary">
              Send an Email
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2.91666 11.0833L11.0833 2.91667M11.0833 2.91667H4.66666M11.0833 2.91667V9.33334" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a
              href={cvData.cvDownloadUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--secondary"
            >
              Download Full CV (PDF)
            </a>
          </div>
        </div>

        {/* Quiet Footer */}
        <div className="footer-bar">
          <p className="footer-copy">
            © 2026 {cvData.name} · Built with React & TypeScript
          </p>
          <span className="footer-location">{cvData.location}</span>
        </div>
      </div>
    </footer>
  );
};
