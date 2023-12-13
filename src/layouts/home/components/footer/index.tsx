/**
 * nogx base layout
 */

import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="flex items-center justify-between px-10 py-10 ">
      <h3 className="text-lg text-gray-700 dark:text-gray-100">
        Made with ❤️ by Nogx
      </h3>
      <ul className="flex items-center space-x-6">
        <li className="font-semibold text-gray-700 dark:text-gray-100 hover:text-purple-700 dark:hover:text-purple-300">
          <Link to="/">Home</Link>
        </li>
        <li className="font-semibold text-gray-700 dark:text-gray-100 hover:text-purple-700 dark:hover:text-purple-300">
          <Link to="/store">Store</Link>
        </li>
        <li className="font-semibold text-gray-700 dark:text-gray-100 hover:text-purple-700 dark:hover:text-purple-300">
          <Link to="/blog">Blog</Link>
        </li>
        <li className="font-semibold text-gray-700 dark:text-gray-100 hover:text-purple-700 dark:hover:text-purple-300">
          <Link to="/cart">Cart</Link>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
