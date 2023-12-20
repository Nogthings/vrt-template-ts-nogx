/**
 * nogx base layout
 */
import { Link } from "react-router-dom";
import ToggleTheme from "../../../components/toggleTheme";

function Header() {
  return (
    <nav className="flex items-center justify-between space-x-4 px-10 pt-10">
      <h1 className="text-xl font-bold text-gray-800 dark:text-gray-100 w-full">
        Nogx
      </h1>
      <ul className="flex items-center space-x-6 ">
        <li className="font-semibold text-gray-700 dark:text-gray-100 hover:text-purple-700 dark:hover:text-purple-300  ">
          <Link to="/">Home</Link>
        </li>
        <li className="font-semibold text-gray-700 dark:text-gray-100 hover:text-purple-700 dark:hover:text-purple-300  ">
          <Link to="/store">Store</Link>
        </li>
        <li className="font-semibold text-gray-700 dark:text-gray-100 hover:text-purple-700 dark:hover:text-purple-300  ">
          <Link to="/blog">Blog</Link>
        </li>
        <li className="font-semibold text-gray-700 dark:text-gray-100 hover:text-purple-700 dark:hover:text-purple-300  ">
          <Link to="/admin">Dashboard</Link>
        </li>
        <li className="font-semibold text-gray-700 dark:text-gray-100 hover:text-purple-700 dark:hover:text-purple-300  ">
          <ToggleTheme />
        </li>
      </ul>
    </nav>
  );
}

export default Header;
