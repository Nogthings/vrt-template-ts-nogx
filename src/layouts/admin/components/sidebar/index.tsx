/**
 * Made with ❤ by Nogx
 */
import ToggleMenuContext from "../../providers/toggleMenu";
import ToggleTheme from "../../../components/toggleTheme";
import LinkButton from "../../../components/buttons/linkButton";
import {
  IoArrowBack,
  IoBookOutline,
  IoGridOutline,
  IoArrowForward,
} from "react-icons/io5";
import { useContext } from "react";

function Sidebar() {
  const { handleMenuToggle, menuCollapsed } = useContext(ToggleMenuContext);

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
      className={`fixed left-4 top-4 bottom-4 flex flex-col rounded-md shadow-md bg-dark-100 dark:bg-dark-800 ${
        menuCollapsed ? "w-16" : "w-64"
      } transition-all ease-in-out duration-300`}
    >
      <div className={`flex-grow px-${menuCollapsed ? 2 : 6} py-10`}>
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
        <ul className="mt-10">
          {links.map((link, index) => (
            <li key={index}>
              <LinkButton
                to={link.to}
                title={menuCollapsed ? "" : link.title}
                iconOnly={menuCollapsed}
                variant="gradient"
                color={link.color}
              >
                {link.icon}
              </LinkButton>
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
