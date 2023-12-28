import ButtonProps from "./types";

function Button({ title, children, onClick, color }: Readonly<ButtonProps>) {
  console.log(color);
  return (
    <button
      className={`${color ? "bg-[" + color + "]" : "bg-primary-400"} ${
        children ? " gap-2 " : " "
      } rounded-md py-2 px-3 text-white flex items-center transition-all duration-100 hover:bg-primary-300`}
      onClick={onClick}
    >
      {children && <>{children}</>}
      <span>{title}</span>
    </button>
  );
}

export default Button;
