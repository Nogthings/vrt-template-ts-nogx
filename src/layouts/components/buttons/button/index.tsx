/**
 * Made with ❤ by Nogx
 */
import ButtonProps from "./types";

function Button({
  title,
  children,
  onClick,
  color,
  variant,
  style,
  iconOnly,
  rounded,
}: Readonly<ButtonProps>) {
  const getColorClass = () => {
    const colorClasses = {
      primary: "bg-primary-500 hover:bg-primary-700",
      secondary: "bg-secondary-500 hover:bg-secondary-700",
      success: "bg-success-500 hover:bg-success-700",
      error: "bg-error-500 hover:bg-error-700",
      warning: "bg-warning-500 hover:bg-warning-700",
      info: "bg-info-500 hover:bg-info-700",
      light: "bg-light-500 hover:bg-light-700",
      dark: "bg-dark-500 hover:bg-dark-700",
      gray: "bg-gray-500 hover:bg-gray-700",
    };
    return (
      colorClasses[color as keyof typeof colorClasses] || colorClasses.primary
    );
  };

  const getVariant = () => {
    const variantClasses = {
      solid: `bg-${color}-500 hover:bg-${color}-700 transition-all duration-300`,
      outlined: `border-2 border-${color}-500 text-gray-950 dark:text-gray-100 hover:bg-${color}-500 hover:text-white bg-transparent focus:ring-2 focus:ring-offset-2 focus:ring-${color}-500 focus:bg-${color}-500 focus:text-white transition-all duration-300`,
      gradient: `bg-gradient-to-r from-${color}-700 via-${color}-600 to-${color}-500 hover:bg-gradient-to-tl hover:from-${color}-700 hover:via-${color}-600 hover:to-${color}-500 transition-all duration-300 focus:ring-2 focus:ring-offset-2 focus:ring-${color}-500`,
    };

    return (
      variantClasses[variant as keyof typeof variantClasses] ||
      variantClasses.solid
    );
  };

  return (
    <button
      onClick={onClick}
      style={style}
      className={`${children ? "gap-2" : " "} ${
        iconOnly ? "justify-center text-xl aspect-square" : ""
      } ${
        rounded ? "rounded-full p-2" : "rounded-md px-3 py-2"
      } ${getColorClass()} ${getVariant()} text-white flex items-center transition-all duration-150 hover:bg-primary-700`}
    >
      <span>{children}</span>
      <span className={`${iconOnly ? "hidden pr-2" : " pr-4"}`}>{title}</span>
    </button>
  );
}

export default Button;
