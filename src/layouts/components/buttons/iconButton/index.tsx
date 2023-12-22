import IconButtonProps from "./types";

function IconButton({ children, onClick, color, rounded }: IconButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center aspect-square ${
        color ? `${color}` : "bg-purple-400"
      } ${
        rounded ? "" : "rounded-full"
      } transition-all duration-100 hover:bg-purple-300`}
    >
      {children}
    </button>
  );
}

export default IconButton;
