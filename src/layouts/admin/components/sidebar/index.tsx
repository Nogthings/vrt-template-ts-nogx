import ToggleMenuContext from "../../providers/toggleMenu";
import ToggleTheme from "../../../components/toggleTheme";
import LinkButton from "../../../components/buttons/linkButton";

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
      className={`fixed left-4 top-4 bottom-4 flex flex-col rounded-md shadow-md bg-dark-100 dark:bg-dark-800 ${
        menuCollapsed
          ? "w-16 transition-all ease-in-out duration-300"
          : "w-64 transition-all ease-in-out duration-300"
      }`}
    >
      <div
        className={`${
          menuCollapsed ? "flex-grow px-2 py-10" : "flex-grow px-6 py-10"
        }`}
      >
        <div>
          <h1
            className={`text-2xl font-bold text-dark-800 dark:text-dark-100 ${
              menuCollapsed ? "text-center text-4xl" : ""
            }`}
          >
            {menuCollapsed ? "N" : "Nogx"}
          </h1>
          <p className="text-dark-500 dark:text-dark-300">
            {menuCollapsed ? "" : "Admin Dashboard"}
          </p>
        </div>
        <ul className="space-y-2 mt-10">
          <li>
            <LinkButton
              to="/admin"
              title={menuCollapsed ? "" : "Dashboard"}
              iconOnly={menuCollapsed ? true : false}
              variant="gradient"
              color="primary"
            >
              <IoGridOutline />
            </LinkButton>
          </li>
          <li>
            <LinkButton
              to="/admin/posts"
              title={menuCollapsed ? "" : "Posts"}
              iconOnly={menuCollapsed ? true : false}
              variant="gradient"
              color="secondary"
            >
              <IoBookOutline />
            </LinkButton>
          </li>
          <li>
            <LinkButton
              to="/admin"
              title={menuCollapsed ? "" : "Dashboard"}
              iconOnly={menuCollapsed ? true : false}
              variant="gradient"
              color="success"
            >
              <IoGridOutline />
            </LinkButton>
          </li>
          <li>
            <LinkButton
              to="/admin"
              title={menuCollapsed ? "" : "Dashboard"}
              iconOnly={menuCollapsed ? true : false}
              variant="gradient"
              color="error"
            >
              <IoGridOutline />
            </LinkButton>
          </li>
          <li>
            <LinkButton
              to="/admin"
              title={menuCollapsed ? "" : "Dashboard"}
              iconOnly={menuCollapsed ? true : false}
              variant="gradient"
              color="warning"
            >
              <IoGridOutline />
            </LinkButton>
          </li>
          <li>
            <LinkButton
              to="/admin"
              title={menuCollapsed ? "" : "Dashboard"}
              iconOnly={menuCollapsed ? true : false}
              variant="gradient"
              color="info"
            >
              <IoGridOutline />
            </LinkButton>
          </li>
          <li>
            <LinkButton
              to="/admin"
              title={menuCollapsed ? "" : "Dashboard"}
              iconOnly={menuCollapsed ? true : false}
              variant="gradient"
              color="dark"
            >
              <IoGridOutline />
            </LinkButton>
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
          className={`flex items-center dark:text-white mb-2 hover:bg-primary-300 hover:text-white rounded-full aspect-square transition-all ease-in-out duration-300 ${
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
