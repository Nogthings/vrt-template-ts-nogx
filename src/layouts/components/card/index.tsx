import { Link } from "react-router-dom";
import { IoArrowForward } from "react-icons/io5";
import CardProps from "./types";

function Card({ title, children, to, button }: Readonly<CardProps>) {
  return (
    <div className="max-w-xs p-6 bg-white border border-dark-200 rounded-lg shadow dark:bg-dark-800 dark:border-dark-700">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-dark-900 dark:text-white">
        {title}
      </h5>
      <p className="mb-3 font-normal text-dark-700 dark:text-dark-400">
        {children}
      </p>
      <Link
        to={to}
        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-primary-700 rounded-lg hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
      >
        {button}
        <IoArrowForward className="text-dark-200" />
      </Link>
    </div>
  );
}

export default Card;
