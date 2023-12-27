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
        return "bg-gradient-to-d from-primary-300 to-primary-700 hover:from-primary-700 hover:to-primary-500";
      } else if (color === "secondary") {
        return "bg-gradient-to-d from-secondary-300 to-secondary-700 hover:from-secondary-700 hover:to-secondary-500";
      } else if (color === "success") {
        return "bg-gradient-to-d from-success-300 to-success-700 hover:from-success-700 hover:to-success-500";
      } else if (color === "error") {
        return "bg-gradient-to-d from-error-300 to-error-700 hover:from-error-700 hover:to-error-500";
      } else if (color === "warning") {
        return "bg-gradient-to-d from-warning-300 to-warning-700 hover:from-warning-700 hover:to-warning-500";
      } else if (color === "info") {
        return "bg-gradient-to-d from-info-300 to-info-700 hover:from-info-700 hover:to-info-500";
      } else if (color === "dark") {
        return "bg-gradient-to-d from-dark-300 to-dark-700 hover:from-dark-700 hover:to-dark-500";
      } else if (color === "gray") {
        return "bg-gradient-to-d from-gray-300 to-gray-700 hover:from-gray-700 hover:to-gray-500";
      } else {
        return "bg-gradient-to-d from-primary-300 to-primary-700 hover:from-primary-700 hover:to-primary-500";
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
