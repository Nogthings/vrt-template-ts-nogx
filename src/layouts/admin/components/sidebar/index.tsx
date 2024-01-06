/**
 * Made with ❤ by Nogx
 */
import ToggleMenuContext from "../../providers/toggleMenu";
import ToggleTheme from "../../../components/toggleTheme";
import MenuItem from "./components/menuItem";
import {
  IoArrowBack,
  IoBookOutline,
  IoGridOutline,
  IoArrowForward,
} from "react-icons/io5";
import { useContext } from "react";
import { useLocation } from "react-router-dom"; // Importar el hook useLocation

function Sidebar() {
  const { handleMenuToggle, menuCollapsed } = useContext(ToggleMenuContext);
  const location = useLocation();

  const links = [
    {
      to: "/admin",
      title: "Dashboard",
      color: "primary",
      icon: <IoGridOutline />,
    },
    {
      to: "/admin/posts",
      title: "Posts",
      color: "primary",
      icon: <IoBookOutline />,
    },
    // Agrega más enlaces según sea necesario
  ];

  return (
    <aside
      className={`fixed left-6 top-6 bottom-6 flex flex-col rounded-md shadow-md bg-dark-100 dark:bg-dark-950 ${
        menuCollapsed ? "w-16" : "w-64"
      } transition-all ease-in-out duration-300`}
    >
      <div className={`flex-grow px-${menuCollapsed ? 2 : 6} py-10 px-4`}>
        <div>
          <h1
            className={`text-2xl font-bold text-dark-800 dark:text-dark-100 ${
              menuCollapsed ? "text-center text-4xl" : ""
            }`}
          >
            {menuCollapsed ? "N" : "Nogx"}
          </h1>
          {!menuCollapsed && (
            <p className="text-dark-500 dark:text-dark-300">Admin Dashboard</p>
          )}
        </div>
        <ul className="mt-10 space-y-2">
          {links.map((link, index) => (
            <li key={index}>
              <MenuItem
                to={link.to}
                title={menuCollapsed ? "" : link.title}
                iconOnly={menuCollapsed}
                color={link.color}
                active={location.pathname === link.to}
              >
                {link.icon}
              </MenuItem>
            </li>
          ))}
        </ul>
      </div>
      <div
        className={`flex items-center gap-2 p-2 ${
          menuCollapsed ? "justify-center" : "justify-end"
        }`}
      >
        <ToggleTheme />
        <button
          className={`flex items-center dark:text-white mb-2 hover:bg-primary-300 hover:text-white rounded-full aspect-square transition-all ease-in-out duration-300 text-xl p-1 rounded${
            menuCollapsed ? " rounded mr-2" : ""
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
