import ButtonProps from "./types";

function Button({ title, children, onClick, color }: ButtonProps) {
  return (
    <button
      className={`${color ? "color" : "bg-purple-400"} ${
        children ? " gap-2 " : " "
      } rounded-md py-2 px-3 text-white flex items-center transition-all duration-100 hover:bg-purple-300`}
      onClick={onClick}
    >
      {children && <>{children}</>}
      <span>{title}</span>
    </button>
  );
}

export default Button;
