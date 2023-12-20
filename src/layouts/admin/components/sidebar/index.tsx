import { Link } from "react-router-dom";

import ToggleMenuContext from "../../providers/toggleMenu";
import ToggleTheme from "../../../components/toggleTheme";

// Icons
import {
  IoArrowBack,
  IoBookOutline,
  IoGridOutline,
  IoArrowForward,
} from "react-icons/io5";
import { useContext } from "react";

function Sidebar() {
  const { handleMenuToggle, menuCollapsed } = useContext(ToggleMenuContext);

  return (
    <aside
      className={`fixed left-4 top-4 bottom-4 flex flex-col rounded-md shadow-md bg-gray-200 dark:bg-black ${
        menuCollapsed
          ? "w-16 transition-all ease-in-out duration-300"
          : "transition-all w-64 ease-in-out duration-300"
      }`}
    >
      <div
        className={`${
          menuCollapsed ? "flex-grow px-2 py-10" : "flex-grow px-6 py-10"
        }`}
      >
        <div>
          <h1
            className={`text-2xl font-bold text-gray-800 dark:text-gray-100 ${
              menuCollapsed ? "text-center text-4xl" : ""
            }`}
          >
            {menuCollapsed ? "N" : "Nogx"}
          </h1>
          <p className="text-gray-500 dark:text-gray-300">
            {menuCollapsed ? "" : "Admin Dashboard"}
          </p>
        </div>
        <ul className="space-y-2 mt-10">
          <li>
            <Link
              to="/admin"
              className={`flex items-center justify-start gap-4 bg-purple-400 rounded-md p-2 text-white transition-all duration-100  ${
                menuCollapsed ? "justify-center text-xl aspect-square" : ""
              }`}
            >
              <IoGridOutline />
              {menuCollapsed ? null : "Dashboard"}
            </Link>
          </li>
          <li>
            <Link
              to="/admin/posts"
              className={`flex items-center justify-start gap-4 bg-purple-400 rounded-md p-2 text-white transition-all duration-100  ${
                menuCollapsed ? "justify-center text-xl aspect-square" : ""
              }`}
            >
              <IoBookOutline />
              {menuCollapsed ? null : "Posts"}
            </Link>
          </li>
        </ul>
      </div>
      <div
        className={`flex items-center gap-2 p-2 ${
          menuCollapsed ? "justify-center" : "justify-end"
        }`}
      >
        <ToggleTheme />
        <button
          className={`flex items-center dark:text-white mb-2 hover:bg-purple-300 hover:text-white rounded-full aspect-square transition-all ease-in-out duration-300 ${
            menuCollapsed
              ? " text-xl p-1 rounded"
              : " text-xl p-1 rounded  mr-2"
          }`}
          onClick={() => handleMenuToggle(!menuCollapsed)}
        >
          {menuCollapsed ? <IoArrowForward /> : <IoArrowBack />}
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;
