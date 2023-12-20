import ButtonProps from "./types";

function Button({ title, icon, onClick, color }: Readonly<ButtonProps>) {
  return (
    <button
      className={`${color ? "color" : "bg-purple-300"} ${
        icon ? " gap-2 " : " "
      } rounded-md py-2 px-3 text-white flex items-center transition-all duration-100 hover:bg-purple-400`}
      onClick={onClick}
    >
      <span>{icon}</span>
      <span>{title}</span>
    </button>
  );
}

export default Button;
