/**
 * nogx base layout
 */

import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="flex justify-between px-10 lg:px-96 py-10 items-center">
      <h1 className="text-lg text-gray-700 dark:text-gray-100">Made with ❤️ by Nogx</h1>
      <div className="flex items-center">
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
      </div>
    </footer>
  );
}

export default Footer;
