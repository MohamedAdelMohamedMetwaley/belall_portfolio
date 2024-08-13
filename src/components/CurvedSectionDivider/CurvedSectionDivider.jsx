import "./CurvedSectionDivider.css";

function CurvedSectionDivider({ fill, isRotated = false }) {
  return (
    <svg
      viewBox="0 0 1440 58"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      className={`divider ${isRotated ? "bottom-0" : "top-0"}`}
    >
      <path
        transform={isRotated ? "rotate(180) translate(-1440, -60)" : ""}
        d="M-100 58C-100 58 218.416 36.3297 693.5 36.3297C1168.58 36.3297 1487 58 1487 58V-3.8147e-06H-100V58Z"
        fill={fill}
      ></path>
    </svg>
  );
}

export default CurvedSectionDivider;
