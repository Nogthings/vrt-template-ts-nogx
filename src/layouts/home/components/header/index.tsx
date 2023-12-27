/**
 * nogx base layout
 */
import { Link } from "react-router-dom";
import ToggleTheme from "../../../components/toggleTheme";

function Header() {
  return (
    <nav className="flex items-center justify-between space-x-4 px-10 pt-10">
      <h1 className="text-xl font-bold text-dark-800 dark:text-dark-100 w-full">
        Nogx
      </h1>
      <ul className="flex items-center space-x-6 ">
        <li className="font-semibold text-dark-700 dark:text-dark-100 hover:text-primary-700 dark:hover:text-primary-300  ">
          <Link to="/">Home</Link>
        </li>
        <li className="font-semibold text-dark-700 dark:text-dark-100 hover:text-primary-700 dark:hover:text-primary-300  ">
          <Link to="/store">Store</Link>
        </li>
        <li className="font-semibold text-dark-700 dark:text-dark-100 hover:text-primary-700 dark:hover:text-primary-300  ">
          <Link to="/blog">Blog</Link>
        </li>
        <li className="font-semibold text-dark-700 dark:text-dark-100 hover:text-primary-700 dark:hover:text-primary-300  ">
          <Link to="/admin">Dashboard</Link>
        </li>
        <li className="font-semibold text-dark-700 dark:text-dark-100 hover:text-primary-700 dark:hover:text-primary-300  ">
          <ToggleTheme />
        </li>
      </ul>
    </nav>
  );
}

export default Header;
