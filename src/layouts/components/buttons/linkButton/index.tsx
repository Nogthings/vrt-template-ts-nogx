import { Link, useLocation } from "react-router-dom";
import LinkProps from "./types";

function LinkButton({
  to,
  children,
  title,
  iconOnly,
  color,
  variant,
  rounded,
  style,
}: Readonly<LinkProps>) {
  const location = useLocation();
  const isActive = location.pathname === to;
  console.log(location.pathname);
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
      solid: `bg-${color}-500 hover:bg-${color}-700`,
      outlined: `border-2 border-${color}-500 text-gray-950 dark:text-gray-100 hover:bg-${color}-500 hover:text-white bg-transparent focus:ring-2 focus:ring-offset-2 focus:ring-${color}-500 focus:bg-${color}-500 focus:text-white`,
      gradient: `bg-gradient-to-r from-${color}-700 via-${color}-600 to-${color}-500 hover:bg-gradient-to-tl hover:from-${color}-700 hover:via-${color}-600 hover:to-${color}-500 focus:ring-2 focus:ring-offset-2 focus:ring-${color}-500`,
    };

    return (
      variantClasses[variant as keyof typeof variantClasses] ||
      variantClasses.solid
    );
  };

  return (
    <Link
      to={to}
      style={style}
      className={`${children ? "gap-2" : ""} ${
        iconOnly ? "justify-center text-xl aspect-square" : ""
      } ${
        rounded ? "rounded-full p-2" : "rounded-md px-3 py-2"
      } ${getColorClass()} ${getVariant()} text-white flex items-center transition-all ease-in-out duration-300 hover:bg-primary-700 ${
        isActive ? `bg-${color}-700` : ""
      }`}
    >
      <span>{children}</span>
      <span className={`${iconOnly ? "hidden pr-2" : "pr-4"}`}>{title}</span>
    </Link>
  );
}

export default LinkButton;
