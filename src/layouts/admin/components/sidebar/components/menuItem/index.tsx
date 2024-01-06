import { NavLink } from "react-router-dom";
import MenuItemProps from "./types";

function MenuItem({
  to,
  children,
  title,
  style,
  color,
  variant,
  iconOnly,
}: Readonly<MenuItemProps>) {
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
      transparent: `bg-transparent hover:bg-${color}-700 focus:ring-2 focus:ring-offset-2 focus:ring-${color}-500 focus:bg-${color}-500 focus:text-gray-800 focus:hover:text-white focus:dark:text-white hover:text-white dark:text-gray-100`,
      solid: `bg-${color}-500 hover:bg-${color}-700 text-white focus:ring-2 focus:ring-offset-2 focus:ring-${color}-500 focus:bg-${color}-500 focus:text-white hover:text-white dark:text-gray-100`,
      outlined: `border-2 border-${color}-500 text-gray-950 dark:text-gray-100 hover:bg-${color}-500 hover:text-white bg-transparent focus:ring-2 focus:ring-offset-2 focus:ring-${color}-500 focus:bg-${color}-500 focus:text-white text-gray-800 dark:text-gray-100 hover:text-white dark:text-gray-100`,
      gradient: `bg-transparent text-gray-800 dark:text-gray-100 hover:bg-gradient-to-tl hover:from-${color}-700 hover:via-${color}-600 hover:to-${color}-500 focus:ring-2 focus:ring-offset-2 focus:ring-${color}-500 hover:text-white dark:text-gray-100`,
    };
    return (
      variantClasses[variant as keyof typeof variantClasses] ||
      variantClasses.transparent
    );
  };

  return (
    <NavLink
      className={({ isActive }) =>
        isActive
          ? ` ${children ? "gap-2" : ""} ${
              iconOnly ? "justify-center text-xl aspect-square" : ""
            } ${getColorClass()} ${getVariant()} flex items-center transition-all ease-in-out duration-150 py-3 px-4 rounded-md`
          : ` ${children ? "gap-2" : ""} ${
              iconOnly ? "justify-center text-xl aspect-square" : ""
            } ${getColorClass()} ${getVariant()} flex items-center transition-all ease-in-out duration-150 py-3 px-4 rounded-md`
      }
      style={style}
      to={to}
    >
      <span>{children}</span>
      <span className={`${iconOnly ? "hidden pr-2" : "pr-4"}`}>{title}</span>
    </NavLink>
  );
}

export default MenuItem;
