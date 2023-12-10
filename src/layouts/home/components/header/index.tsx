/**
 * nogx base layout
 */
import { Link } from "react-router-dom";

// Icons
import { IoCartOutline } from "react-icons/io5";

function Header() {
  return (
    <nav className="flex justify-between px-10 lg:px-96 py-10 items-center">
      <h1 className="text-lg font-bold text-gray-800 dark:text-gray-100">Nogx</h1>
      <div className="flex items-center">
        <ul className="flex items-center space-x-6">
          <li className="font-semibold text-gray-700 dark:text-gray-100 hover:text-sky-500">
            <Link to="/">Home</Link>
          </li>
          <li className="font-semibold text-gray-700 dark:text-gray-100 hover:text-sky-500">
            <Link to="/store">Store</Link>
          </li>
          <li className="font-semibold text-gray-700 dark:text-gray-100 hover:text-sky-500">
            <Link to="/blog">Blog</Link>
          </li>
          <li className="font-semibold text-gray-700 dark:text-gray-100 hover:text-sky-500 cursor-pointer">
            <IoCartOutline />
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
