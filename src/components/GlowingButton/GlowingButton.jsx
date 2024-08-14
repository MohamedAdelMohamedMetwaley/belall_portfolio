import "./GlowingButton.css";

function GlowingButton({ onClick, children }) {
  return (
    <button onClick={onClick} className="button glow-effect">
      {children}
      <svg className="glow-container">
        <rect
          pathLength="100"
          strokeLinecap="round"
          className="glow-blur"
        ></rect>
        <rect
          pathLength="100"
          strokeLinecap="round"
          className="glow-line"
        ></rect>
      </svg>
    </button>
  );
}

export default GlowingButton;
