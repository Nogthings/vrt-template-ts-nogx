import {
  IoArrowBack,
  IoBookOutline,
  IoGridOutline,
  IoArrowForward,
} from "react-icons/io5";
import { Link } from "react-router-dom";

import { useState } from "react";

function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  const handleToggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <aside
      className={`fixed left-4 top-4 bottom-4 flex flex-col rounded-md shadow-md bg-gray-200 dark:bg-black w-64 ${
        collapsed
          ? "w-16 transition-all  ease-in-out duration-300"
          : "transition-all ease-in-out duration-300"
      }`}
    >
      <div
        className={`${
          collapsed ? "flex-grow px-2 py-10" : "flex-grow px-6 py-10"
        }`}
      >
        <div>
          <h1
            className={`text-2xl font-bold text-gray-800 dark:text-gray-100 ${
              collapsed ? "text-center text-4xl" : ""
            }`}
          >
            {collapsed ? "N" : "Nogx"}
          </h1>
          <p className="text-gray-500 dark:text-gray-300">
            {collapsed ? "" : "Admin Dashboard"}
          </p>
        </div>
        <ul className="space-y-2 mt-10">
          <li>
            <Link
              to="/admin"
              className={`flex items-center justify-start gap-4 bg-purple-400 rounded-md p-2 text-white transition-all duration-100  ${
                collapsed ? "justify-center text-xl  p-1 aspect-square" : ""
              }`}
            >
              <IoGridOutline />
              {collapsed ? null : "Dashboard"}
            </Link>
          </li>
          <li>
            <Link
              to="/admin/posts"
              className={` ${
                collapsed
                  ? "flex items-center justify-center gap-4 bg-purple-400 rounded-md text-white text-xl aspect-square"
                  : "flex items-center justify-start gap-4 bg-purple-400 rounded-md p-2 text-white"
              }`}
            >
              <IoBookOutline />
              {collapsed ? null : "Posts"}
            </Link>
          </li>
        </ul>
      </div>
      <div
        className={`flex items-center p-2 ${
          collapsed ? "justify-center" : "justify-end"
        }`}
      >
        <button
          className={`flex items-center dark:text-white mb-2 hover:bg-purple-300 rounded-full aspect-square ${
            collapsed ? " text-xl p-1 rounded" : " text-xl p-1 rounded  mr-2"
          }`}
          onClick={handleToggleCollapse}
        >
          {collapsed ? <IoArrowForward /> : <IoArrowBack />}
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;
