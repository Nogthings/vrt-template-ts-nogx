/**
 * Made with ❤ by Nogx
 */

import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="flex items-center justify-between px-10 py-10 ">
      <h3 className="text-lg text-dark-700 dark:text-dark-100">
        Made with ❤️ by Nogx
      </h3>
      <ul className="flex items-center space-x-6">
        <li className="font-semibold text-dark-700 dark:text-dark-100 hover:text-primary-700 dark:hover:text-primary-300">
          <Link to="/">Home</Link>
        </li>
        <li className="font-semibold text-dark-700 dark:text-dark-100 hover:text-primary-700 dark:hover:text-primary-300">
          <Link to="/store">Store</Link>
        </li>
        <li className="font-semibold text-dark-700 dark:text-dark-100 hover:text-primary-700 dark:hover:text-primary-300">
          <Link to="/blog">Blog</Link>
        </li>
        <li className="font-semibold text-dark-700 dark:text-dark-100 hover:text-primary-700 dark:hover:text-primary-300">
          <Link to="/cart">Cart</Link>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
