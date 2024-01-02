/**
 * Made with ❤ by Nogx
 */
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
      <ol className="flex items-center gap-1 text-sm text-dark-600 dark:text-dark-100">
        {breadcrumbs.map((breadcrumb, index) => (
          <div className="flex items-center gap-1">
            <li key={breadcrumb.name}>
              {breadcrumb.path === "/admin" ? (
                <Link
                  to="/admin"
                  className=" transition hover:text-primary-700 dark:hover:text-primary-300"
                >
                  <IoHomeOutline />
                </Link>
              ) : (
                <Link
                  to={breadcrumb.path}
                  className=" transition hover:text-primary-700 dark:hover:text-primary-300"
                >
                  {breadcrumb.name}
                </Link>
              )}
            </li>
            {index < breadcrumbs.length - 1 && (
              <li key={index}>
                <IoChevronForwardOutline />
              </li>
            )}
          </div>
        ))}
      </ol>
    </div>
  );
}

export default Breadcrumb;
