import { Outlet } from "react-router-dom";
import Sidebar from "./components/sidebar";
import { ToggleMenuProvider } from "./providers/toggleMenu";
import Box from "./components/box";
import Breadcrumb from "./components/breadcrumb";
import SpeedDial from "../components/speedDial";
import Container from "../components/container";

function AdminLayout() {
  return (
    <ToggleMenuProvider>
      <div className="bg-dark-50 dark:bg-dark-900 transition-all ease-in-out duration-300">
        <Sidebar />
        <Box>
          <Container
            padding={2}
            style={{ position: "sticky", zIndex: 50, top: 24 }}
          >
            <Breadcrumb />
          </Container>
          <div className="py-4">
            <Outlet />
          </div>
          <SpeedDial />
        </Box>
      </div>
    </ToggleMenuProvider>
  );
}

export default AdminLayout;
