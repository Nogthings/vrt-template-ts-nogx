import { Link } from "react-router-dom";
import { IoArrowForward } from "react-icons/io5";
import CardProps from "./types";

function Card({ title, children, to, button }: Readonly<CardProps>) {
  return (
    <div className="max-w-xs p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {title}
      </h5>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        {children}
      </p>
      <Link
        to={to}
        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-purple-700 rounded-lg hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800"
      >
        {button}
        <IoArrowForward className="text-gray-200" />
      </Link>
    </div>
  );
}

export default Card;
