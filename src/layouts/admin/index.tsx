import { Outlet } from "react-router-dom";
import Sidebar from "./components/sidebar";

function AdminLayout() {
  return (
    <div className="bg-gray-200 dark:bg-gray-700">
      <Sidebar />
      <div className="p-10 sm:ml-64">
        <Outlet />
      </div>
    </div>
  );
}

export default AdminLayout;
