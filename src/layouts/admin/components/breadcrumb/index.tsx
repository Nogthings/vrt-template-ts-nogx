import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { IoChevronForwardOutline, IoHomeOutline } from "react-icons/io5";

function Breadcrumb() {
  const location = useLocation();
  const [breadcrumbs, setBreadcrumbs] = useState<
    { path: string; name: string }[]
  >([]);

  useEffect(() => {
    const pathnames = location.pathname.split("/").filter((x) => x);

    const breadcrumbsArray = pathnames.map((name, index) => ({
      path: `/${pathnames.slice(0, index + 1).join("/")}`,
      name: name.charAt(0).toUpperCase() + name.slice(1),
    }));
    setBreadcrumbs(breadcrumbsArray);
  }, [location.pathname]);

  return (
    <div aria-label="Breadcrumb">
      {breadcrumbs.map((breadcrumb, index) => (
        <ol className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-100">
          <li key={breadcrumb.path}>
            {breadcrumb.path === "/admin" ? (
              <Link
                to="/admin"
                className="block transition hover:text-purple-700 dark:hover:text-purple-300"
              >
                <IoHomeOutline />
              </Link>
            ) : (
              <Link
                to={breadcrumb.path}
                className="block transition hover:text-purple-700 dark:hover:text-purple-300"
              >
                {breadcrumb.name}
              </Link>
            )}
          </li>
          <li>
            {index < breadcrumbs.length - 1 && <IoChevronForwardOutline />}
          </li>
        </ol>
      ))}
    </div>
  );
}

export default Breadcrumb;
