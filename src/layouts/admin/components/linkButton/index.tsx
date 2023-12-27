import { Link } from "react-router-dom";
import LinkProps from "./types";

function LinkButton({
  to,
  children,
  title,
  iconOnly,
  color,
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

  return (
    <Link
      to={to}
      className={`${children ? "gap-2" : " "} ${
        iconOnly ? "justify-center text-xl aspect-square" : ""
      } ${getColorClass()} rounded-md py-2 px-3 text-white flex items-center transition-all duration-150 hover:bg-primary-700`}
    >
      <span>{children}</span>
      {title}
    </Link>
  );
}

export default LinkButton;
