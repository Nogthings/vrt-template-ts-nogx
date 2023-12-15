import { Outlet } from "react-router-dom";
import Sidebar from "./components/sidebar";
import { ToggleMenuProvider } from "./providers/toggleMenu";
import Box from "./components/box";

function AdminLayout() {
  return (
    <ToggleMenuProvider>
      <div className="bg-gray-200 dark:bg-gray-700">
        <Sidebar />
        <Box>
          <Outlet />
        </Box>
      </div>
    </ToggleMenuProvider>
  );
}

export default AdminLayout;
