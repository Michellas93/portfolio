export const Heart = ({
  isActive,
  onClick,
}: {
  isActive: boolean;
  onClick: () => void;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    onClick={onClick}
    preserveAspectRatio="xMidYMid meet"
    viewBox="0 0 17 17"
    style={{
      cursor: "pointer",
      fill: isActive ? "red" : "transparent",
      stroke: isActive ? "red" : "black",
      strokeWidth: "1px",
    }}
  >
    <path
      fillRule="evenodd"
      d="M8.5,2.3C12.9-2.2,24,5.7,8.5,16C-7,5.7,4.1-2.2,8.5,2.3z"
    />
  </svg>
);
