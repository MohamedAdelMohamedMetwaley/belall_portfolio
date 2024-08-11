import "./GlowingButton.css";

function GlowingButton({ onScroll }) {
  return (
    <button onClick={onScroll} className="button glow-effect">
      Contact Me
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
