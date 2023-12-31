import { Link } from "react-router-dom";
import LinkProps from "./types";

function LinkButton({
  to,
  children,
  title,
  iconOnly,
  color,
  variant,
}: Readonly<LinkProps>) {
  const getColorClass = () => {
    if (color === "primary") {
      return "bg-primary-500 hover:bg-primary-700";
    } else if (color === "secondary") {
      return "bg-secondary-500 hover:bg-secondary-700";
    } else if (color === "success") {
      return "bg-success-500 hover:bg-success-700";
    } else if (color === "error") {
      return "bg-error-500 hover:bg-error-700";
    } else if (color === "warning") {
      return "bg-warning-500 hover:bg-warning-700";
    } else if (color === "info") {
      return "bg-info-500 hover:bg-info-700";
    } else if (color === "light") {
      return "bg-light-500 hover:bg-light-700";
    } else if (color === "dark") {
      return "bg-dark-500 hover:bg-dark-700";
    } else {
      return "bg-primary-500 hover:bg-primary-700";
    }
  };

  const getVariant = () => {
    if (variant === "outlined") {
      return "border border-primary-500 text-gray-950 dark:text-gray-100 hover:bg-primary-500 hover:text-white bg-transparent";
    } else if (variant === "gradient") {
      if (color === "primary") {
        return "bg-gradient-to-r from-primary-700 via-primary-600 to-primary-500 hover:bg-gradient-to-tl hover:from-primary-700 hover:via-primary-600 hover:to-primary-500 transition-all duration-300";
      } else if (color === "secondary") {
        return "bg-gradient-to-r from-secondary-700 via-secondary-600 to-secondary-500 hover:bg-gradient-to-tl hover:from-secondary-700 hover:via-secondary-600 hover:to-secondary-500 transition-all duration-300";
      } else if (color === "success") {
        return "bg-gradient-to-r from-success-700 via-success-600 to-success-500 hover:bg-gradient-to-tl hover:from-success-700 hover:via-success-600 hover:to-success-500 transition-all duration-300";
      } else if (color === "error") {
        return "bg-gradient-to-br from-error-700 via-error-600 to-error-500 hover:bg-gradient-to-tl hover:from-error-700 hover-from-error-600 hover:to-error-500 transition-all duration-300";
      } else if (color === "warning") {
        return "bg-gradient-to-br from-warning-700 via-warning-600 to-warning-500 hover:bg-gradient-to-tl hover:from-warning-700 hover-from-warning-600 hover:to-warning-500 transition-all duration-300";
      } else if (color === "info") {
        return "bg-gradient-to-br from-info-700 via-info-600 to-info-500 hover:bg-gradient-to-tl hover:from-info-700 hover-from-info-600 hover:to-info-500 transition-all duration-300";
      } else if (color === "dark") {
        return "bg-gradient-to-br from-dark-700 via-dark-600 to-dark-500 hover:bg-gradient-to-tl hover:from-dark-700 hover-from-dark-600 hover:to-dark-500 transition-all duration-300";
      } else if (color === "gray") {
        return "bg-gradient-to-br from-gray-700 via-gray-600 to-gray-500 hover:bg-gradient-to-tl hover:from-gray-700 hover-from-gray-600 hover:to-gray-500 transition-all duration-300";
      } else {
        return "bg-gradient-to-r from-primary-700 via-primary-600 to-primary-500 hover:bg-gradient-to-tl hover:from-primary-700 hover:via-primary-600 hover:to-primary-500 transition-all duration-300";
      }
    } else {
      return "bg-primary-500 hover:bg-primary-700";
    }
  };

  return (
    <Link
      to={to}
      className={`${children ? "gap-2" : " "} ${
        iconOnly ? "justify-center text-xl aspect-square" : ""
      } ${getColorClass()} ${getVariant()} rounded-md py-2 px-3 text-white flex items-center transition-all duration-150 hover:bg-primary-700`}
    >
      <span>{children}</span>
      {title}
    </Link>
  );
}

export default LinkButton;
