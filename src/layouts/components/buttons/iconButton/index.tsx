import IconButtonProps from "./types";

function IconButton({
  children,
  onClick,
  color,
  rounded,
}: Readonly<IconButtonProps>) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center aspect-square ${
        color ? ` bg-[${color}] ` : "bg-purple-400"
      } ${
        rounded ? "rounded-full" : ""
      } transition-all duration-100 hover:bg-purple-300 p-2 text-white`}
    >
      {children}
    </button>
  );
}

export default IconButton;
