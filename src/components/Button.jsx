import "../styles/Buttons.css";

export const Button = ({ text, href, variant, target }) => {
  return (
    <a href={href} target={target} className={`btn btn--${variant}`}>
      {text}
    </a>
  );
};
