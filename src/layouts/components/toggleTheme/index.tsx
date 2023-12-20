import { useState, useEffect } from "react";

// Icons
import { BsToggleOff, BsToggleOn } from "react-icons/bs";

function ToggleTheme() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <button
      className={`${
        isDarkMode ? "text-gray-100" : "text-dark"
      } flex items-center text-3xl`}
      onClick={toggleDarkMode}
    >
      {isDarkMode ? <BsToggleOn /> : <BsToggleOff />}
    </button>
  );
}

export default ToggleTheme;
