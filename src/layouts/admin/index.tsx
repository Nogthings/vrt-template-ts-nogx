import { Outlet } from "react-router-dom";
import Sidebar from "./components/sidebar";
import { ToggleMenuProvider } from "./providers/toggleMenu";
import Box from "./components/box";
import Breadcrumb from "./components/breadcrumb";

function AdminLayout() {
  return (
    <ToggleMenuProvider>
      <div className="bg-gray-200 dark:bg-gray-700">
        <Sidebar />
        <Box>
          <Breadcrumb />
          <div className="py-4">
            <Outlet />
          </div>
        </Box>
      </div>
    </ToggleMenuProvider>
  );
}

export default AdminLayout;
