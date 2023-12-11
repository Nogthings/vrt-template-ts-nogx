/**
 * nogx base layout
 */
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

// Icons
import { IoCartOutline } from "react-icons/io5";
import { BsToggleOff, BsToggleOn } from "react-icons/bs";

function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('dark', isDarkMode);
    
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <nav className="flex justify-between px-10 lg:px-96 py-10 items-center">
      <h1 className="text-lg font-bold text-gray-800 dark:text-gray-100">
        Nogx
      </h1>
      <div className="flex items-center">
        <ul className="flex items-center space-x-6 ">
          <li className="font-semibold text-gray-700 dark:text-gray-100 hover:text-purple-700 dark:hover:text-purple-300  ">
            <button
              className={`${
                isDarkMode ? "text-gray-100" : "text-dark"
              } flex items-center text-lg`}
              onClick={toggleDarkMode}
            >
              {isDarkMode ? <BsToggleOn /> : <BsToggleOff />}
            </button>
          </li>
          <li className="font-semibold text-gray-700 dark:text-gray-100 hover:text-purple-700 dark:hover:text-purple-300  ">
            <Link to="/">Home</Link>
          </li>
          <li className="font-semibold text-gray-700 dark:text-gray-100 hover:text-purple-700 dark:hover:text-purple-300  ">
            <Link to="/store">Store</Link>
          </li>
          <li className="font-semibold text-gray-700 dark:text-gray-100 hover:text-purple-700 dark:hover:text-purple-300  ">
            <Link to="/blog">Blog</Link>
          </li>
          <li className="font-semibold text-gray-700 dark:text-gray-100 hover:text-purple-700 dark:hover:text-purple-300   cursor-pointer">
            <IoCartOutline />
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
