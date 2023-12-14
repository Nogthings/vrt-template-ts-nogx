/**
 * nogx base layout
 */
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

// Icons
import { BsToggleOff, BsToggleOn } from "react-icons/bs";

function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

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
          <button
            className={`${
              isDarkMode ? "text-gray-100" : "text-dark"
            } flex items-center text-3xl`}
            onClick={toggleDarkMode}
          >
            {isDarkMode ? <BsToggleOn /> : <BsToggleOff />}
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
