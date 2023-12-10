/**
 * Nogx base layout
 */
import { Outlet } from "react-router-dom";

// components
import Header from "./components/header";
import Footer from "./components/footer";
import NotFound from "./pages/404";

import ErrorBoundary from "./pages/error";

function HomeLayout() {
  return (
    <div className="bg-slate-700">
      <Header />
      <ErrorBoundary fallback404={<NotFound />}>
        <div className="px-10 lg:px-96 py-10">
          <Outlet />
        </div>
      </ErrorBoundary>
      <Footer />
    </div>
  );
}

export default HomeLayout;
